using System.Threading.Tasks;

namespace MFBlogReactRedux.Services
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string email, string subject, string message);
    }
}
