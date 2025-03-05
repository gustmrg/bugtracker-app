using BugTracker.API.Models;

namespace BugTracker.API.Services.Interfaces;

public interface ICompanyInfoService
{
    public Task<Company> GetCompanyInfoByIdAsync(int? companyId);
    public Task<List<ApplicationUser>> GetAllMembersAsync(int companyId);
    public Task<List<Project>> GetAllProjectsAsync(int companyId);
    public Task<List<Ticket>> GetAllTicketsAsync(int companyId);
}