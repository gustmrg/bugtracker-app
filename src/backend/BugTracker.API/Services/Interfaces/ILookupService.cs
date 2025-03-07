using BugTracker.API.Models;

namespace BugTracker.API.Services.Interfaces;

public interface ILookupService
{
    public Task<List<TicketPriority>> GetTicketPrioritiesAsync();

    public Task<List<TicketStatus>> GetTicketStatusesAsync();

    public Task<List<TicketType>> GetTicketTypesAsync();

    public Task<List<ProjectPriority>> GetProjectPrioritiesAsync();
}