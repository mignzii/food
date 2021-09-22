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
import { RestoGestionComponent } from './resto-gestion/resto-gestion.component';
import { CommandeComponent } from './commande/commande.component';
import { LivreurComponent } from './livreur/livreur.component';
import { RestoAdminComponent } from './resto-admin/resto-admin.component';
import { RestoAdminProduitComponent } from './resto-admin-produit/resto-admin-produit.component';
import { RestoAdminFactureComponent } from './resto-admin-facture/resto-admin-facture.component';
import { AdminInfoComponent } from './admin-info/admin-info.component';
import { RestoAdminCommandeComponent } from './resto-admin-commande/resto-admin-commande.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'nav', component: NavComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'checkout', component: CheckoutComponent
  },
  {
    path: 'admin-resto', component: RestoAdminComponent
  },
  {
    path: 'admin-resto-produit', component: RestoAdminProduitComponent
  },
  {
    path: 'admin-resto-commande', component: RestoAdminCommandeComponent
  },
  {
    path: 'resto-facture', component: RestoAdminFactureComponent
  },
  {
    path: 'facture', component: AdminInfoComponent
  },
  {
    path: 'gestion-resto', component: RestoGestionComponent
  },
  {
    path: 'commande', component: CommandeComponent
  },
  {
    path: 'livreur', component: LivreurComponent
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
