import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { ProductListComponent } from './features/product-list/product-list.component';
import { ProductDetailComponent } from './features/product-detail/product-detail.component';


export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent }
];
