import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {STORE_API_URL} from "./models/app-injections-tokens";
import {environments} from "../assets/enviroments/environment";
import {HttpClientModule} from "@angular/common/http";
import {EmployeeService} from "./services/employee.service";
import {DepartmentService} from "./services/department.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingPageComponent, HttpClientModule],
  providers: [
    EmployeeService,
    DepartmentService,
    {
      provide: STORE_API_URL,
      useValue: environments.storeApi,
    }
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
