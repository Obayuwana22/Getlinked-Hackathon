import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LogoComponent } from './logo/logo.component';
import { ButtonComponent } from './button/button.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { RegisterComponent } from './register/register.component';
<<<<<<< HEAD
=======
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
>>>>>>> ad6b776f0aa42661d18409ff53787a1198b26e38

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LogoComponent,
    ButtonComponent,
    ContactPageComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
