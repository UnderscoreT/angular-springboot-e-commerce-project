import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent implements OnInit{

  salesPersonList: SalesPerson[] = [
       new SalesPerson("Anup", "Kamar", "anup.karmar@luv)2code.com", 50000),
       new SalesPerson("John", "Doe", "johndoe@luv)2code.com", 40000),
       new SalesPerson("Claire", "Murphy", "claire.murphy@luv)2code.com", 90000),
       new SalesPerson("Mai", "Troung","mai.truong@luv2code.com",60000 )
  ] ;
  ngOnInit(): void {
   
  }
  

}
