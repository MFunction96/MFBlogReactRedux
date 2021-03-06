﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

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
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string Index { get; set; }
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
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime ModifyDate { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [MaxLength(1024)]
        public string Body { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public ICollection<Tag> Tags { get; set; }
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
            Tags = new HashSet<Tag>();
        }
    }
}
