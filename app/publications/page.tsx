import React from 'react';
import contentData from '../data/content.json';

interface Publication {
  title: string;
  authors: string[];
  venue: string;
  summary: string;
  pdf: string | null;
  doi: string | null;
  image?: string;
}

const formatImagePath = (path: string) => {
  if (path && path.startsWith('assets/')) {
    return `/${path}`;
  }
  if (path && path.startsWith('/')) {
    return path;
  }
  return path;
};

export default function Publications() {
  const { publications } = contentData;
  return (
    <section id="publications" className="publications">
      <div className="container">
        <h2 className="section-title">Research Publications</h2>
        <div className="publications-list">
          {publications.map((publication: Publication, index: number) => (
            <div key={index} className="publication-item">
              <div className="publication-image-container">
                <img
                  src={publication.image && publication.image.trim() !== '' ? formatImagePath(publication.image) : '/images/placeholders/item-placeholder.svg'}
                  alt={publication.title}
                  className="publication-image"
                />
              </div>
              <div className="publication-content">
                <h3>{publication.title}</h3>
                <p className="authors">{publication.authors.join(', ')}</p>
                <p className="publication-venue">{publication.venue}</p>
                <p className="publication-summary">{publication.summary}</p>
                <div className="publication-links">
                  {publication.pdf && publication.pdf !== '#' && (
                    <a href={publication.pdf} className="publication-link" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-file-pdf"></i> PDF
                    </a>
                  )}
                  {publication.doi && publication.doi !== '#' && (
                    <a href={publication.doi} className="publication-link" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-link"></i> DOI
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
