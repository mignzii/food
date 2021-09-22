import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
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
