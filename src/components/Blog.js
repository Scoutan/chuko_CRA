import React from 'react';
import { Link } from 'react-router-dom';
import BlogDB from '../api/BlogDB.json';
import Intro from './Intro';

const Blog = () => {
  const blogEntries = BlogDB.blog;

  return (
    <div className="container">
      <h2>BLOG</h2>
      <Intro page="blog" />
      {
        blogEntries.sort((a, b) => b.num_date - a.num_date).map(entry => {
          return (
            <div className="blog_entry" key={entry.id}>
              <Link to="/blog">
                <h3>{entry.title}</h3>
              </Link>
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