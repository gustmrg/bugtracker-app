using System.ComponentModel.DataAnnotations;

namespace BugTracker.API.Models;

public class TicketType
{
    public int Id { get; set; }
    
    [Display(Name = "Type Name")]
    public string Name { get; set; }
}