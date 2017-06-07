using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Umbraco.Core;
using Umbraco.Core.Models;
using Umbraco.Core.Persistence;
using Umbraco.Web;
using Umbraco.Web.Editors;
using Umbraco.Web.Mvc;

/// <summary>
/// Summary description for VenuesController
/// </summary> 
[PluginController("Venues")]
public class VenuesApiController : UmbracoAuthorizedJsonController
{
    public Venue PostSave(Venue venue) {
        if (venue.Id > 0)
            DatabaseContext.Database.Update(venue);
        else
        {
            venue.Date = DateTime.Now;
            DatabaseContext.Database.Save(venue);
        }
            
        return venue;
    }

    public int DeleteById(int id) {
        var db = UmbracoContext.Application.DatabaseContext.Database;
        return db.Delete<Venue>(id);     
    }

    public Venue GetById(int id) {
        var db = UmbracoContext.Application.DatabaseContext.Database;
        var query = new Sql().Select("*").From("venue").Where<Venue>(x => x.Id == id);

        return db.Fetch<Venue>(query).FirstOrDefault();
    }

    public IEnumerable<Venue> GetByName(string name) {
        var db = UmbracoContext.Application.DatabaseContext.Database;
        var query = new Sql().Select("*").From("venue").Where("name LIKE '%" + name +"%'");
        return db.Fetch<Venue>(query);
    }

    public IEnumerable<Venue> GetAll()
    {
        var db = UmbracoContext.Application.DatabaseContext.Database;
        var query = new Sql().Select("*").From("venue");

        return db.Fetch<Venue>(query);
    }

    public string GetAddressByUdi (string udi)
    {
        var umbracoHelper = new UmbracoHelper(UmbracoContext);
        string venueStringUdi = HttpUtility.UrlDecode(udi);
        Udi venueUdi = Udi.Parse(venueStringUdi);
        

        IPublishedContent venueNode = umbracoHelper.TypedContent(venueUdi);
        string venueAddress = venueNode.GetPropertyValue<string>("address");

        return venueAddress;
    }
}