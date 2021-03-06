﻿import { Component } from '@angular/core';

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    //styles: ['table {color: #369;font-family: Arial, Helvetica, sans-serif;font-size: large;border-collapse: collapse;font-style: inherit;}td {border: 3px solid yellow;}']
    styleUrls: ['app/employee/employee.component.css']
})
export class EmployeeComponent {
    firstName: string = 'Tom';
    lastName: string = 'Hopkins';
    gender: string = 'Male';
    age: number = 20;
}