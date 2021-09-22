import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
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
