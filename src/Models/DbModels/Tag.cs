using System;
using System.ComponentModel.DataAnnotations;

namespace MFBlogReactRedux.Models.DbModels
{
    /// <summary>
    /// 
    /// </summary>
    public class Tag
    {
        /// <summary>
        /// 
        /// </summary>
        [Key, MaxLength(40)]
        public string TagId { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [MaxLength(64)]
        public string TagName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public int Color { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public Tag()
        {
            TagId = Guid.NewGuid().ToString();
        }
    }
}
