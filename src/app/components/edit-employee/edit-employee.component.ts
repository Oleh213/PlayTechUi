import {Component, Input} from '@angular/core';
import {DxButtonModule, DxSelectBoxModule, DxTextBoxModule} from "devextreme-angular";
import {Employee} from "../../models/Employee";
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Department} from "../../models/Department";
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [
    DxTextBoxModule,
    NgIf,
    FormsModule,
    DxSelectBoxModule,
    DxButtonModule
  ],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent {
  @Input() employee: Employee | undefined;
  @Input() departments: Department[] = [];
  @Input() employees: Employee[] = [];

  constructor(private employeeService: EmployeeService,) {
  }

  public updateEmployee() {
    if (!this.isShowManagerError() && this.employee) {
      this.employee.department = this.departments.find(d=> d.id === this.employee?.department.id)!;
      this.employee.manager = this.employees.find(d=> d.id === this.employee?.manager.id)!;
      this.employeeService.updateEmployee(this.employee).subscribe(()=>{
        this.employee = undefined;
      })
    }
  }

  public isShowManagerError(){
    return this.employee?.manager.id === this.employee?.id;
  }

}
