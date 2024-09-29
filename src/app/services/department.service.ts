import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {STORE_API_URL} from "../models/app-injections-tokens";
import {Observable} from "rxjs";
import {Employee} from "../models/Employee";
import {Department} from "../models/Department";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService{

  constructor(private http: HttpClient,
              @Inject(STORE_API_URL) private apiUrl: string,) {
  }

  getAllDepartments() : Observable<Department[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/api/Department/allDepartments`)
  }

  getDepartmentsWithMoreThan50Employees() : Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiUrl}/api/Department/departmentsWithMoreThan50Employees`)
  }

  getDepartmentWithHighestSalary() : Observable<Department> {
    return this.http.get<Department>(`${this.apiUrl}/api/Department/departmentWithHighestSalary`)
  }
}
