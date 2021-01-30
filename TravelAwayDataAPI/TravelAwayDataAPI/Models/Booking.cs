using System;
using System.Collections.Generic;

#nullable disable

namespace TravelAwayDataAPI.Models
{
    public partial class Booking
    {
        public int BookingId { get; set; }
        public string Email { get; set; }
        public string ContactNumber { get; set; }
        public string ResidentialAddress { get; set; }
        public DateTime DateofTravel { get; set; }
        public int NumberofAdults { get; set; }
        public int NumberofChildren { get; set; }
        public string BookingStatus { get; set; }
    }
}
