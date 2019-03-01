import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { NavComponent } from './nav/nav.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { StoriesComponent } from './stories/stories.component';
import { ContactComponent } from './contact/contact.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginFormDoneeComponent } from './login-form-donee/login-form-donee.component';
<<<<<<< HEAD
import { DoneeAccComponent } from './donee-acc/donee-acc.component';
=======
import { DonorAccComponent } from './donor-acc/donor-acc.component';
>>>>>>> 11f450a2f4df112f396d6432c9d07cadbf0acca6


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'stories',
    component: StoriesComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'registerDonor',
    component: LoginFormComponent
  },
  {
    path:'registerDonee',
    component:LoginFormDoneeComponent
  },
  {
    path:'DoneeAcc',
    component:DoneeAccComponent
    
  },
  {
    path:'donorAcc',
    component: DonorAccComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
