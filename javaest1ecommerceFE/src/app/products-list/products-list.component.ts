import { Component, OnInit } from '@angular/core';
import { ProductService} from '../product-list/product.service'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products;
  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(productList => this.products = productList);
  }

}
