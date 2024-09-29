import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EmployeeService} from "../../services/employee.service";
import {Employee} from "../../models/Employee";
import {DepartmentService} from "../../services/department.service";
import {Department} from "../../models/Department";
import {forkJoin} from "rxjs";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-additional-task',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './additional-task.component.html',
  styleUrl: './additional-task.component.css'
})
export class AdditionalTaskComponent implements OnInit {
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

  public employeesWithHigherSalaryThenManagers: Employee[] = [];
  public employeesWithDifferentDepartmentManager: Employee[] = [];
  public employeesWithHighestSalaryInDepartments: Employee[] = [];
  public departmentWithHighestSalary: Department | undefined;
  public departmentsWithMoreThan50Employees: Department[] = [];

  constructor(private employeeService: EmployeeService,
              private departmentService: DepartmentService) {
  }

  ngOnInit(): void {
    this.getEmployeesWithHighestSalaryInDepartments();
    this.getEmployeesWithDifferentDepartmentManager();
    this.getEmployeesWithHigherSalaryThenManagers();
    this.getDepartmentTasks();
  }

  public getDepartmentTasks(): void {
    forkJoin({
      departmentsWithMoreThan50Employees: this.departmentService.getDepartmentsWithMoreThan50Employees(),
      departmentWithHighestSalary: this.departmentService.getDepartmentWithHighestSalary()
    }).subscribe({
      next: (results) => {
        this.departmentsWithMoreThan50Employees = results.departmentsWithMoreThan50Employees;
        this.departmentWithHighestSalary = results.departmentWithHighestSalary;
      }
    });
  }

  public getEmployeesWithHighestSalaryInDepartments(){
    this.employeeService.getEmployeesWithHighestSalaryInDepartments().subscribe((employees: Employee[]) => {
      this.employeesWithHighestSalaryInDepartments = employees;
    })
  }

  public getEmployeesWithDifferentDepartmentManager(){
    this.employeeService.getEmployeesWithDifferentDepartmentManager().subscribe((employees: Employee[]) => {
      this.employeesWithDifferentDepartmentManager = employees;
    })
  }

  public getEmployeesWithHigherSalaryThenManagers(){
    this.employeeService.getEmployeesWithHigherSalaryThenManagers().subscribe((employees: Employee[]) => {
      this.employeesWithHigherSalaryThenManagers = employees;
    })
  }


}
