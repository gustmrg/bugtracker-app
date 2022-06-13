using System.ComponentModel.DataAnnotations;

namespace BugTracker.Models;

public class TicketPriority
{
    public int Id { get; set; }
    
    [Display(Name = "Priority Name")]
    public string Name { get; set; }
}