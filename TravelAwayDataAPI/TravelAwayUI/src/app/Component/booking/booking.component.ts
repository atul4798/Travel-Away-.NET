import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'
import { BookingserviceService } from '../../Services/bookingservice.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  errormsg: string = "";
  status: boolean = false;
  msg: string="";


  constructor(private bookservice: BookingserviceService) { }

  ngOnInit(): void {
  }
  booked(form: NgForm) {
    this.bookservice.storeBook(form.value.email, form.value.cno, form.value.address, form.value.Travel, form.value.Children, form.value.Adults).subscribe(
      responseBookstatus => {
        this.status = responseBookstatus;
        if (this.status != false) {
          this.msg = "Booking Successfull";
          alert("Booking Successfull");
        }
        else {
          this.msg = "Booking Failed.";
        }
      },
      responseBookError => {
        this.errormsg = responseBookError;
      },
      () => console.log("Booking Method Executed Successfully.")
    );
   
  }

}
