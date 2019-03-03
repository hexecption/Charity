import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
import { LoginFormManagerComponent } from './login-form-manager/login-form-manager.component';
import { RankingComponent } from './ranking/ranking.component';
import { OrderModule } from 'ngx-order-pipe';
import { ManagerAccComponent } from './manager-acc/manager-acc.component';
import { Form1Component } from './form1/form1.component';
import { TimelineComponent } from './timeline/timeline.component';
import { FileuploadComponent } from './fileupload/fileupload.component';




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
    LoginFormManagerComponent,
    RankingComponent,
    ManagerAccComponent,
    Form1Component,
    TimelineComponent,
    FileuploadComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    OrderModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
