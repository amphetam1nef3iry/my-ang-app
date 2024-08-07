import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../core/product.servise';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule]
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(productId).subscribe(data => {
      this.product = data;
    });
  }

  addToCart() {
    // Логика для добавления товара в корзину
  }
}
