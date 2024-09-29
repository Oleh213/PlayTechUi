import {Component, OnInit} from '@angular/core';
import {DxButtonModule, DxDataGridModule} from "devextreme-angular";
import {Employee} from "../../models/Employee";
import {EmployeeService} from "../../services/employee.service";
import {EditEmployeeComponent} from "../../components/edit-employee/edit-employee.component";
import {NgIf} from "@angular/common";
import {Department} from "../../models/Department";
import {DepartmentService} from "../../services/department.service";
import {AdditionalTaskComponent} from "../../components/additional-task/additional-task.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    DxDataGridModule,
    EditEmployeeComponent,
    NgIf,
    AdditionalTaskComponent,
    DxButtonModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  public employees: Employee[] = [];
  public selectedEmployee!: Employee;
  public departments: Department[] = [];

  public isAdditionalTaskModal: boolean = false;

  constructor(private employeeService: EmployeeService,
              private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.loadEmployees();
    this.loadDepartments();
  }

  private loadEmployees(): void {
    this.employeeService.getAllEmployees().subscribe(
      (data) => {
        this.employees = data;
      }
    );
  }

  private loadDepartments(): void {
    this.departmentService.getAllDepartments().subscribe(
      (data) => {
        this.departments = data;
      }
    )
  }

  onRowClick(event: any) {
    const clickedEmployee = event.data;
    this.openEmployeeDetails(clickedEmployee);
  }

  openEmployeeDetails(employee: Employee): void {
    this.selectedEmployee = employee;
  }
}
