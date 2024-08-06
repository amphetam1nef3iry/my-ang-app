import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/product.servise';

@Component({
  selector: 'app-product-list',
  templateUrl: '.product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true
})

export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
