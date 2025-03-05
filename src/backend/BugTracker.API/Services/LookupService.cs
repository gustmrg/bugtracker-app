using BugTracker.API.Data;
using BugTracker.API.Models;
using BugTracker.API.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace BugTracker.API.Services;

public class LookupService : ILookupService
{
    private readonly ApplicationDbContext _context;

    public LookupService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<List<TicketPriority>> GetTicketPrioritiesAsync()
    {
        throw new NotImplementedException();
    }

    public async Task<List<TicketStatus>> GetTicketStatusesAsync()
    {
        throw new NotImplementedException();
    }

    public async Task<List<TicketType>> GetTicketTypesAsync()
    {
        throw new NotImplementedException();
    }

    public async Task<List<ProjectPriority>> GetProjectPrioritiesAsync()
    {
        try
        {
            return await _context.ProjectPriorities.ToListAsync();
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }
}