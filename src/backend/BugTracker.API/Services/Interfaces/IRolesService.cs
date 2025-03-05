using BugTracker.API.Models;
using Microsoft.AspNetCore.Identity;

namespace BugTracker.API.Services.Interfaces;

public interface IRolesService
{
    public Task<bool> IsUserInRoleAsync(ApplicationUser user, string roleName);
    public Task<IEnumerable<string>> GetUserRolesAsync(ApplicationUser user);
    public Task<List<IdentityRole>> GetRolesAsync();
    public Task<bool> AddUserToRoleAsync(ApplicationUser user, string roleName);
    public Task<bool> RemoveUserFromRoleAsync(ApplicationUser user, string roleName);
    public Task<bool> RemoveUserFromRolesAsync(ApplicationUser user, IEnumerable<string> roles);
    public Task<List<ApplicationUser>> GetUsersInRoleAsync(string roleName, int companyId);
    public Task<List<ApplicationUser>> GetUsersNotInRoleAsync(string roleName, int companyId);
    public Task<string> GetRoleNameByIdAsync(string roleId);
}