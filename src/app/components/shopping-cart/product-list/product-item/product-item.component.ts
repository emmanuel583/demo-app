import { RouterModule } from '@angular/router';
import { ProductService } from './../../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
  } 

}
