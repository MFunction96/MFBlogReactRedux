﻿using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace MFBlogReactRedux.Models.DbModels
{
    /// <inheritdoc />
    /// <summary>
    /// </summary>
    public class ApplicationUser : IdentityUser
    {
        /// <summary>
        /// 
        /// </summary>
        public IList<Article> Articles { get; set; }
        /// <inheritdoc />
        /// <summary>
        /// </summary>
        public ApplicationUser()
        {
            Articles = new List<Article>();
        }
    }
}
