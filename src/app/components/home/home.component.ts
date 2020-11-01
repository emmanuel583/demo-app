import { RouterModule, Router } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ProductService: ProductService,
              private router: Router ) { }

  ngOnInit(): void {
  }
  selectProduct(id: Number) {
    this.router.navigate(['/product', id]).then();
  }
}
