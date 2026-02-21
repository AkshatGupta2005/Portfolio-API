import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostById } from '../data/posts';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import NavCard from '../components/NavCard';
import Footer from '../components/Footer';

const PostDetail = () => {
  const { id } = useParams();
  const post = id ? getPostById(id) : undefined;

  if (!post) {
    return (
      <div className="page-container">
        <NavCard />
        <div className="card detail-not-found">
          <h1>Post Not Found</h1>
          <p className="page-subtitle">The post you're looking for doesn't exist.</p>
          <Link to="/posts" className="back-link">
            <ArrowLeft size={16} />
            Back to Posts
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page-container">
      <NavCard />

      <article className="detail-content">
        {/* Back Button */}
        <Link to="/posts" className="back-link">
          <ArrowLeft size={16} />
          Back to Posts
        </Link>

        {/* Post Header */}
        <header className="card detail-header">
          <div className="post-meta">
            <span className="meta-item"><Calendar size={16} /> {post.date}</span>
            <span className="meta-item"><Clock size={16} /> {post.readTime}</span>
          </div>
          <h1 className="detail-title">{post.title}</h1>
          <p className="detail-excerpt">{post.excerpt}</p>
          <div className="tags-row">
            {post.tags.map((tag) => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </div>
        </header>

        {/* Post Content */}
        <div className="card detail-body">
          <div className="prose-content">
            {post.content.split('\n').map((line, index) => {
              const trimmedLine = line.trim();

              if (trimmedLine.startsWith('## ')) {
                return <h2 key={index} className="prose-h2">{trimmedLine.replace('## ', '')}</h2>;
              }

              if (trimmedLine.startsWith('### ')) {
                return <h3 key={index} className="prose-h3">{trimmedLine.replace('### ', '')}</h3>;
              }

              const numberedBoldMatch = trimmedLine.match(/^(\d+)\.\s+\*\*(.*?)\*\*\s*[-–]\s*(.*)$/);
              if (numberedBoldMatch) {
                return (
                  <p key={index} className="prose-list-item">
                    <span className="prose-bold">{numberedBoldMatch[1]}. {numberedBoldMatch[2]}</span> - {numberedBoldMatch[3]}
                  </p>
                );
              }

              if (trimmedLine.match(/^\d+\.\s+/)) {
                return <p key={index} className="prose-list-item">{trimmedLine}</p>;
              }

              if (trimmedLine.startsWith('- ')) {
                return <p key={index} className="prose-list-item">• {trimmedLine.replace('- ', '')}</p>;
              }

              if (trimmedLine.startsWith('---')) {
                return <hr key={index} className="prose-hr" />;
              }

              if (trimmedLine.startsWith('*') && trimmedLine.endsWith('*')) {
                return <p key={index} className="prose-italic">{trimmedLine.replace(/\*/g, '')}</p>;
              }

              if (trimmedLine === '') return null;

              const parts = trimmedLine.split(/\*\*(.*?)\*\*/);
              if (parts.length > 1) {
                return (
                  <p key={index} className="prose-paragraph">
                    {parts.map((part, i) =>
                      i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                    )}
                  </p>
                );
              }

              return <p key={index} className="prose-paragraph">{trimmedLine}</p>;
            })}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default PostDetail;
