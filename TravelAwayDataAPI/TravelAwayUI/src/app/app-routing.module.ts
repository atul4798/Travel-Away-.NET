import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './Component/booking/booking.component';

const routes: Routes = [
  { path: '', component: BookingComponent },
  { path: '**', component: BookingComponent },
  { path: 'Booking', component: BookingComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
