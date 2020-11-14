import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from '../product-list/product';
import { ProductService } from '../product-list/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  productForm;

  constructor(private formBuilder: FormBuilder, private service: ProductService) { 
    this.productForm = this.formBuilder.group({
      name: '',
      description: '',
      price: 0,
      rating: 0,
      username: '',
      password: ''
    })
  }

  ngOnInit(): void {
  }

 

  send(items){
    let product = new Product();
    product.description = items.description;
    product.name = items.name;
    product.price = items.price;
    product.rating = items.rating;
    console.log(items.username);
    console.log(items.password);
    this.service.createProduct(product, items.username, items.password).subscribe(p => console.log(p));
  }

}
