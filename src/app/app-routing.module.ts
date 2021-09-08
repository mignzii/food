import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { AllrestaurantComponent } from './allrestaurant/allrestaurant.component';
import { MinReviewsComponent } from './min-reviews/min-reviews.component';
import { RestInfoComponent } from './rest-info/rest-info.component';
import { NavComponent } from './nav/nav.component';
import { ListeprodComponent } from './listeprod/listeprod.component';



const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'nav', component: NavComponent
  },


  {
    path: 'store', component: StoreComponent
  },

  {
    path: 'single', component: SingleproductComponent
  },
  {
    path: 'restaurant', component: RestaurantComponent
  },
  {
    path: 'allrestau', component: AllrestaurantComponent
  },

  {
    path: 'minreview', component: MinReviewsComponent
  },
  {
    path: 'produit', component: ListeprodComponent
  },
  {
    path: 'restinfo', component: RestInfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],



exports: [RouterModule]
})
export class AppRoutingModule { }
