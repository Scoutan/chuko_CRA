import React from 'react';
import BlogDB from '../api/BlogDB.json';

const Blog = () => {
  const blogEntries = BlogDB.blog;

  return (
    <div className="container">
      {
        blogEntries.sort((a, b) => b.num_date - a.num_date).map(entry => {
          return (
            <div className="blog_entry" key={entry.id}>
              <h2>{entry.title}</h2>
              <p>{entry.text}</p>
              <p>{entry.date}</p>
            </div>
          );
        })
      }
    </div>
  );
}

export default Blog;