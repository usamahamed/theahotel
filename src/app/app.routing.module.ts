import { CelebrationComponent } from './celebration/celebration.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { OffersComponent } from './offers/offers.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';



const routes:Routes =[
  { path: 'accomodation', component: AccomodationComponent },

  { path: 'celebration', component: CelebrationComponent },

  { path: 'food-and-beverage', component: FoodBeverageComponent },

  { path: 'lifestyle', component: LifestyleComponent },

  { path: 'wedding', component: WeddingsComponent },

  { path: 'offers', component: OffersComponent },

  { path: 'signin', component: SigninComponent },

  { path: 'signup', component: SignupComponent }


]

@NgModule({
  imports :[RouterModule.forRoot(routes)],
  exports : [RouterModule]

	});


export class  AppRoutingModule  {
	
	
}