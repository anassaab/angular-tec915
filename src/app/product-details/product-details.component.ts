import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product = {};
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    console.log(params.get('productId'), products);
    this.product = products.filter(function(el){
      console.log('aaaa', el.id,params.get('productId'));
      return el.id == params.get('productId');
    })[0];
    console.log( this.product);
  });
  }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

}