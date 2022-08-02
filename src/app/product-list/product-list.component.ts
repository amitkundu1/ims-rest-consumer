import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Observable<Product[]> | any;
  
  //Injecting Product Service
  constructor(private productService:ProductService,
    private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.products=this.productService.getProductsList(); //Invoke Service method.
  }
  
  productDetails(id:number){
      this.router.navigate(['details',id]); //Navigate to component from a method.
  }
  
  editProduct(id:number){
    this.router.navigate(['update',id]); //Navigate to component from a method.
  }
  
  deleteProduct(id: number) {
    this.productService.deleteProduct(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  } 

}
