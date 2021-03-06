import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { NavComponent } from './nav/nav.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { StoriesComponent } from './stories/stories.component';
import { ContactComponent } from './contact/contact.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginFormDoneeComponent } from './login-form-donee/login-form-donee.component';
import { DoneeAccComponent } from './donee-acc/donee-acc.component';
import { DonorAccComponent } from './donor-acc/donor-acc.component';
import { TimelineComponent } from './timeline/timeline.component';
import { LoginFormManagerComponent } from './login-form-manager/login-form-manager.component';
import { ManagerAccComponent } from './manager-acc/manager-acc.component';
import { Form1Component } from './form1/form1.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { DocComponent } from './doc/doc.component';


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
    path: 'timeline',
    component: TimelineComponent
  },
  {
    path: 'fileupload',
    component: FileuploadComponent
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
    path: 'registerDonee',
    component: LoginFormDoneeComponent
  },
  {
    path: 'registerManager',
    component: LoginFormManagerComponent
  },
  {
    path: 'accDonee',
    component: DoneeAccComponent

  },
  {
    path: 'accDonor',
    component: DonorAccComponent
  },
  {
    path: 'accManager',
    component: ManagerAccComponent
  },
  {
    path: 'form1',
    component: Form1Component
  },
  {

    path: 'doc',
    component: DocComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
