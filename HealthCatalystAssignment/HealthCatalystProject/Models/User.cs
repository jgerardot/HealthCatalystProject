using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace HealthCatalystProject.Models
{
    public class User
    {
        [Key]
        public int ID { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        public int Age { get; set; }

        [Required]
        public string Interests { get; set; }

        [Required]
        public string ProfilePicture { get; set; }
    }
}
