import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent } from './Component/booking/booking.component';
import { NgForm } from '@angular/forms';
import { FormsModule, NgModel, FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
     FormsModule, ReactiveFormsModule
   
   
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
