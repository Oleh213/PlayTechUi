import {Department} from "./Department";
import {Manager} from "./Manager";

export interface Employee {
  id: number;
  name: string;
  salary: number;
  department: Department;
  manager: Manager;
}
