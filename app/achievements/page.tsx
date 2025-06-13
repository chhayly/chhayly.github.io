import React from 'react';
import contentData from '../data/content.json';

interface Achievement {
  title: string;
  organization: string;
  year: string;
  description: string;
  icon?: string;
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

export default function Achievements() {
  const { achievements } = contentData;
  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2 className="section-title">Achievements &amp; Recognition</h2>
        <div className="achievements-list">
          {achievements.map((achievement: Achievement, index: number) => (
            <div key={index} className="achievement-card">
              <div className="achievement-image-container">
                <img
                  src={achievement.image && achievement.image.trim() !== '' ? formatImagePath(achievement.image) : '/images/placeholders/item-placeholder.svg'}
                  alt={achievement.title}
                  className="achievement-image"
                />
              </div>
              <div className="achievement-content">
                <h3>{achievement.title}</h3>
                <p className="achievement-organization">{achievement.organization}</p>
                <p className="achievement-year">{achievement.year}</p>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
