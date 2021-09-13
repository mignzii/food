import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-resto-admin-facture',
  templateUrl: './resto-admin-facture.component.html',
  styleUrls: ['./resto-admin-facture.component.css']
})
export class RestoAdminFactureComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }


}
