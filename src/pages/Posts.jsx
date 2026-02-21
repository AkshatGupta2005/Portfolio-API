import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { posts } from '../data/posts';
import NavCard from '../components/NavCard';
import Footer from '../components/Footer';

const Posts = () => {
  const featuredPost = posts.find((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured);

  return (
    <div className="page-container">
      {/* Top Row - Title + Nav */}
      <div className="page-top-row">
        <div className="card page-title-card">
          <h1>Blog Posts</h1>
        </div>
        <div className="page-nav-wrapper">
          <NavCard />
        </div>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <Link to={`/posts/${featuredPost.id}`} className="post-link">
          <article className="card post-card-item featured-post">
            <div className="post-meta-row">
              <span className="featured-badge">Featured</span>
              <div className="post-meta">
                <span className="meta-item"><Calendar size={14} /> {featuredPost.date}</span>
                <span className="meta-item"><Clock size={14} /> {featuredPost.readTime}</span>
              </div>
            </div>
            <h2 className="post-title">{featuredPost.title}</h2>
            <p className="post-excerpt">{featuredPost.excerpt}</p>
            <div className="post-footer-row">
              <div className="tags-row">
                {featuredPost.tags.map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
              <span className="read-more">Read more <ArrowRight size={16} /></span>
            </div>
          </article>
        </Link>
      )}

      {/* Post Grid */}
      <div className="posts-grid">
        {regularPosts.map((post) => (
          <Link key={post.id} to={`/posts/${post.id}`} className="post-link">
            <article className="card post-card-item">
              <div className="post-meta">
                <span className="meta-item"><Calendar size={14} /> {post.date}</span>
                <span className="meta-item"><Clock size={14} /> {post.readTime}</span>
              </div>
              <h3 className="post-title-sm">{post.title}</h3>
              <p className="post-excerpt">{post.excerpt}</p>
              <div className="post-footer-row">
                <div className="tags-row">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
                <span className="read-more">Read <ArrowRight size={16} /></span>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Posts;
