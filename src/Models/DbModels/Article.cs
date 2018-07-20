using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MFBlogReactRedux.Models.DbModels
{
    /// <summary>
    /// 
    /// </summary>
    public class Article
    {
        /// <summary>
        /// 
        /// </summary>
        [Key, MaxLength(40)]
        public string ArtId { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string Id { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [MaxLength(128)]
        public string Title { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public DateTime CreateDate { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public DateTime ModifyDate { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [MaxLength(int.MaxValue)]
        public string Body { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public IList<Tag> Tags { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public virtual ApplicationUser ApplicationUser { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public Article()
        {
            ArtId = Guid.NewGuid().ToString();
            Tags = new List<Tag>();
            CreateDate = DateTime.Now;
            ModifyDate = DateTime.Now;
        }
    }
}
