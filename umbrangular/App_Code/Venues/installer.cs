using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Runtime.Serialization;
using System.Xml;
using Umbraco.Core;
using Umbraco.Core.Models;
using Umbraco.Core.Persistence;
using Umbraco.Web;

namespace EditorCourse.App_Code
{
    public class installer : ApplicationEventHandler
    {
        protected const string VenueSectionAlias = "venues";

        protected override void ApplicationStarted(UmbracoApplicationBase umbracoApplication, ApplicationContext applicationContext)
        {
            //create the table if it does not exist
            var db = applicationContext.DatabaseContext.Database;
            if (db.TableExist("venues") == false)
            {
                //table creation
                db.CreateTable<Venue>(true);

                //test data creation
                VenuesApiController ap = new VenuesApiController();
                ap.PostSave(new Venue() { 
                    Name = "Taj Mahal", 
                    Description = "The Taj Mahal (meaning Crown of the Palace) is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra.",
                    Address = "Taj Mahal, Agra, Uttar Pradesh, Indien"
                });
                ap.PostSave(new Venue() { 
                    Name = "The O2", 
                    Description = "The O2 Arena is the world's largest building by measure of floor space, and has the second-highest seating capacity of any indoor venue in the United Kingdom.", 
                    Address = "The O2 London" 
                });
                ap.PostSave(new Venue() { 
                    Name = "Himalayas", 
                    Description = "The Himalayan range has many of the Earth's highest peaks, including the highest, Mount Everest. The Himalayas include over fifty mountains.", 
                    Address = "Himalayas",
                    Images = new Rune().GetGalleryImages()
                });
            }

            // Gets a reference to the section if the section is already added
            Section section = applicationContext.Services.SectionService.GetByAlias(VenueSectionAlias);
            if (section != null) return;

            //Add a Venues Section
            applicationContext.Services.SectionService.MakeNew("Venues", VenueSectionAlias, "icon-map-location");


        }
    }
}

public class Rune
{
    public string GetGalleryImages()
    {
        var json = new List<Image>
            {
                new Image()
                {
                    name = "4250/34717837342_dd34b2dc68_b.jpg",
                    properties = new List<Property>()
                    {
                        new Property
                        {
                            alias = "umbracoWidth",
                            value = 1024
                        },
                        new Property
                        {
                            alias = "umbracoHeight",
                            value = 683
                        },
                        new Property
                        {
                            alias = "umbracoFile",
                            editor = "Umbraco.ImageCropper",
                            value = new
                            {
                                src = "https://c1.staticflickr.com/5/4250/34717837342_dd34b2dc68_b.jpg"
                            }
                        }
                    }
                },
                new Image ()
                {
                     name = "33446033056_be7c56ccf1_h.jpg",
                    properties = new List<Property>()
                    {
                        new Property
                        {
                            alias = "umbracoWidth",
                            value = 1600
                        },
                        new Property
                        {
                            alias = "umbracoHeight",
                            value = 1067
                        },
                        new Property
                        {
                            alias = "umbracoFile",
                            editor = "Umbraco.ImageCropper",
                            value = new
                            {
                                src = "https://c1.staticflickr.com/4/3878/33446033056_be7c56ccf1_h.jpg"
                            }
                        }
                    }
                },
                new Image ()
                {
                     name = "2933/33403011131_9a4350ef18_c.jpg",
                    properties = new List<Property>()
                    {
                        new Property
                        {
                            alias = "umbracoWidth",
                            value = 800
                        },
                        new Property
                        {
                            alias = "umbracoHeight",
                            value = 532
                        },
                        new Property
                        {
                            alias = "umbracoFile",
                            editor = "Umbraco.ImageCropper",
                            value = new
                            {
                                src = "https://c1.staticflickr.com/3/2933/33403011131_9a4350ef18_c.jpg"
                            }
                        }
                    }
                },
                new Image ()
                {
                     name = "3696/33372791396_c78cc3fb96_h.jpg",
                    properties = new List<Property>()
                    {
                        new Property
                        {
                            alias = "umbracoWidth",
                            value = 1600
                        },
                        new Property
                        {
                            alias = "umbracoHeight",
                            value = 1067
                        },
                        new Property
                        {
                            alias = "umbracoFile",
                            editor = "Umbraco.ImageCropper",
                            value = new
                            {
                                src = "https://c1.staticflickr.com/4/3696/33372791396_c78cc3fb96_h.jpg"
                            }
                        }
                    }
                },
                new Image ()
                {
                     name = "3890/33124940212_d22022a0c6_b.jpg",
                    properties = new List<Property>()
                    {
                        new Property
                        {
                            alias = "umbracoWidth",
                            value = 1024
                        },
                        new Property
                        {
                            alias = "umbracoHeight",
                            value = 668
                        },
                        new Property
                        {
                            alias = "umbracoFile",
                            editor = "Umbraco.ImageCropper",
                            value = new
                            {
                                src = "https://c1.staticflickr.com/4/3890/33124940212_d22022a0c6_b.jpg"
                            }
                        }
                    }
                },
                new Image ()
                {
                    name = "2912/32443792534_9588f85a1c.jpg",
                    properties = new List<Property>()
                    {
                        new Property
                        {
                            alias = "umbracoWidth",
                            value = 500
                        },
                        new Property
                        {
                            alias = "umbracoHeight",
                            value = 333
                        },
                        new Property
                        {
                            alias = "umbracoFile",
                            editor = "Umbraco.ImageCropper",
                            value = new
                            {
                                src = "https://c1.staticflickr.com/3/2912/32443792534_9588f85a1c.jpg"
                            }
                        }
                    }
                }
            };

        string jsonObject = JsonConvert.SerializeObject(json);
        return jsonObject;

    }
}

[DataContract]
public class Property
{

    [DataMember(Name = "alias")]
    public string alias { get; set; }

    [DataMember(Name = "value")]
    public object value { get; set; }

    [DataMember(Name = "editor")]
    public string editor { get; set; }
}

[DataContract]
public class Image
{

    [DataMember(Name = "name")]
    public string name { get; set; }

    [DataMember(Name = "properties")]
    public IList<Property> properties { get; set; }
}