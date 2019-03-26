namespace HealthCatalystProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    using Faker;

    internal sealed class Configuration : DbMigrationsConfiguration<HealthCatalystProject.Data.AppDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(HealthCatalystProject.Data.AppDbContext context)
        {
            //  This method will be called after migrating to the latest version.
            for (int i = 0; i < 10000; i++) {
                context.Users.AddOrUpdate(
                    new Models.User() {
                        ID = i + 1,
                        FirstName = NameFaker.FirstName(),
                        LastName = NameFaker.LastName(),
                        Address = $"{LocationFaker.Street()}, {LocationFaker.City()}",
                        Age = new Random(i).Next(0, 100),
                        Interests = TextFaker.Sentences(new Random(i).Next(1,5)),
                        ProfilePicture = GetProfilePicture(i)
                    }
                );
            }
        }

        private string GetProfilePicture(int seed)
        {
            string[] images = new string[] {
                "/assets/img/faces/avatar.jpg",
                "/assets/img/faces/camp.jpg",
                "/assets/img/faces/card-profile1-square.jpg",
                "/assets/img/faces/card-profile2-square.jpg",
                "/assets/img/faces/card-profile4-square.jpg",
                "/assets/img/faces/card-profile5-square.jpg",
                "/assets/img/faces/card-profile6-square.jpg",
                "/assets/img/faces/christian.jpg",
                "/assets/img/faces/kendall.jpg",
                "/assets/img/faces/marc.jpg"
            };

            return images[new Random(seed).Next(0, images.Length - 1)];
        }
    }
}
