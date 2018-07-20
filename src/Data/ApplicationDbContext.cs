using MFBlogReactRedux.Models.DbModels;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace MFBlogReactRedux.Data
{
    /// <inheritdoc />
    /// <summary>
    /// </summary>
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        /// <summary>
        /// 
        /// </summary>
        public DbSet<Article> Articles { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public DbSet<Tag> Tags { get; set; }
        /// <inheritdoc />
        /// <summary>
        /// </summary>
        /// <param name="options"></param>
        public ApplicationDbContext(DbContextOptions options) 
            : base(options)
        {

        }
    }
}
