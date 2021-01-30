using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelAwayDataAPI.Models;

namespace TravelAwayDataAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TravelAwayController : ControllerBase
    {
        //for getting whole table
        
        [HttpPost]
        public bool Booking(Booking book)
        {
            bool status = false;
            Booking booking = new Booking();
            try
            {
                booking.ContactNumber = book.ContactNumber;
                booking.DateofTravel = book.DateofTravel;
                booking.Email = book.Email;
                booking.NumberofAdults = book.NumberofAdults;
                booking.ResidentialAddress = book.ResidentialAddress;
                booking.NumberofChildren = book.NumberofChildren;
                using (var context = new TravelAwayDBContext())
                {
                    context.Add(booking);
                    context.SaveChanges();
                    status = true;
                }
            }
            catch (Exception e)
            {
                status = false;
                Console.WriteLine(e);
            }
            return status;

          
        }

        //Input in Database
       
        
    }
}
