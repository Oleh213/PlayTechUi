import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../models/Employee";
import {STORE_API_URL} from "../models/app-injections-tokens";

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor(private http: HttpClient,
              @Inject(STORE_API_URL) private apiUrl: string,) {
  }

  getAllEmployees() : Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/api/Employee/allEmployees`)
  }

  updateEmployee(employee: Employee) : Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/api/Employee/updateEmployee`, employee)
  }

  getEmployeesWithHighestSalaryInDepartments(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/api/Employee/employeesWithHighestSalaryInDepartments`)
  }

  getEmployeesWithDifferentDepartmentManager(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/api/Employee/employeesWithDifferentDepartmentManager`)
  }

  getEmployeesWithHigherSalaryThenManagers(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/api/Employee/employeesWithHigherSalaryThenManagers`)
  }
}
