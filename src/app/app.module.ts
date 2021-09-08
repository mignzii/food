import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { StoreComponent } from './store/store.component';
import { AllrestaurantComponent } from './allrestaurant/allrestaurant.component';
import { SubbscribeComponent } from './subbscribe/subbscribe.component';
import { MinReviewsComponent } from './min-reviews/min-reviews.component';
import { RestInfoComponent } from './rest-info/rest-info.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ListeprodComponent } from './listeprod/listeprod.component';
import { FlexLayoutModule } from '@angular/flex-layout';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    RestaurantComponent,
    SingleproductComponent,
    StoreComponent,
    AllrestaurantComponent,
    SubbscribeComponent,
    MinReviewsComponent,
    RestInfoComponent,
    NavComponent,
    ListeprodComponent,


  ],
  imports: [
    BrowserModule,MatTabsModule,
    AppRoutingModule,
    BrowserAnimationsModule,FlexLayoutModule,
    MatToolbarModule,
    CarouselModule,
    MatSidenavModule,MatIconModule,MatListModule,MatButtonModule, LayoutModule,
     MatGridListModule, MatCardModule, MatMenuModule,MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
