import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';
import { StoriesComponent } from './stories/stories.component';
import { ContactComponent } from './contact/contact.component';
import { DataService } from './data.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormDoneeComponent } from './login-form-donee/login-form-donee.component';
import { DoneeAccComponent } from './donee-acc/donee-acc.component';
import { DonorAccComponent } from './donor-acc/donor-acc.component';
<<<<<<< HEAD
import { LoginFormManagerComponent } from './login-form-manager/login-form-manager.component';
=======
import { RankingComponent } from './ranking/ranking.component';
<<<<<<< HEAD
import { TimelineComponent } from './timeline/timeline.component';
=======
>>>>>>> f9fd35a101a4dd9da1d5944d1e0dcce0917c07c0
>>>>>>> 6fd3cecba6232ee9faa5494b23118c7824fa7a75


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FormComponent,
    HomeComponent,
    CategoryComponent,
    FooterComponent,
    StoriesComponent,
    ContactComponent,
    LoginFormComponent,
    LoginFormDoneeComponent,
    DoneeAccComponent,
    DonorAccComponent,
<<<<<<< HEAD
    RankingComponent,
    TimelineComponent
=======
<<<<<<< HEAD
    LoginFormManagerComponent
=======
    RankingComponent
>>>>>>> f9fd35a101a4dd9da1d5944d1e0dcce0917c07c0
>>>>>>> 6fd3cecba6232ee9faa5494b23118c7824fa7a75
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
