import { Component, OnInit , HostListener } from '@angular/core';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent implements OnInit {
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
