import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  navbarfixed:boolean=false;
  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY > 400){
      this.navbarfixed=true
    }
    else{
      this.navbarfixed=false
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
