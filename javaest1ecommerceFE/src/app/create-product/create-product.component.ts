import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  productForm;

  constructor(private formBuilder: FormBuilder, private service: ProductService, 
    private loginService: LoginService, private router: Router) {
    this.productForm = this.formBuilder.group({
      name: '',
      description: '',
      price: 0,
      rating: 0
    })
  }

  ngOnInit(): void {
    if(!this.loginService.auth){
      this.router.navigate(["login"]);
    }
  }
  
  send(items) {
    this.service.createProduct(items).subscribe(() => this.router.navigate([""]));
  }

}
