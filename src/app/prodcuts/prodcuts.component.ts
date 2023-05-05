import { Component ,OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-prodcuts',
  templateUrl: './prodcuts.component.html',
  styleUrls: ['./prodcuts.component.css']
})
export class ProdcutsComponent implements OnInit{
  products : any;
  constructor(private http:HttpClient) {
  }
  ngOnInit(): void {
    this.http.get("http://localhost:8082/inventory-service/products").subscribe({
      next : (data) =>{
        this.products = data
      },
      error : (err)=>{

      }
    })
  }
}
