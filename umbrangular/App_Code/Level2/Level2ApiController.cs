using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Umbraco.Core;
using Umbraco.Core.Models;
using Umbraco.Web;
using Umbraco.Web.WebApi;

/// <summary>
/// Summary description for Level2ApiController
/// </summary>
public class Level2Controller : UmbracoAuthorizedApiController
{
    public dynamic GetAddressByUdi(string udi)
    {
        var umbracoHelper = new UmbracoHelper(UmbracoContext);
        string venueStringUdi = HttpUtility.UrlDecode(udi);
        Udi venueUdi = Udi.Parse(venueStringUdi);


        IPublishedContent venueNode = umbracoHelper.TypedContent(venueUdi);
        string venueAddress = venueNode.GetPropertyValue<string>("address");

        return new { value = venueAddress };
    }
}