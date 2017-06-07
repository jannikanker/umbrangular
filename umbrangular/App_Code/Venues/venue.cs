using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;
using Umbraco.Core.Persistence;
using Umbraco.Core.Persistence.DatabaseAnnotations;

/// <summary>
/// Summary description for Venue
/// </summary>
/// 

[TableName("venue")]
[PrimaryKey("id", autoIncrement = true)]
[DataContract(Name="venue", Namespace = "")]
public class Venue
{
    [DataMember(Name="id")]
    [Column("id")]
    [PrimaryKeyColumn(Name = "PK_venueId")]
    public int Id { get; set; }

    [Column("name")]
    [DataMember(Name = "name")]
    public string Name { get; set; }

    [Column("description")]
    [DataMember(Name = "description")]
    public string Description { get; set; }

    [Column("address")]
    [DataMember(Name = "address")]
    [NullSetting(NullSetting = NullSettings.Null)]
    public string Address { get; set; }

    [Column("capacity")]
    [DataMember(Name = "capacity")]
    [NullSetting(NullSetting = NullSettings.Null)]
    public string Capacity { get; set; }

    [Column("date")]
    [DataMember(Name = "date")]
    [NullSetting(NullSetting = NullSettings.Null)]
    public DateTime Date { get; set; }

    [Column("images")]
    [Length(1000)]
    [DataMember(Name ="images")]
    [NullSetting(NullSetting =NullSettings.Null)]
    public string Images { get; set; }


}

