// app/components/ProjectList.tsx
'use client';

import React, { useState } from 'react';

// Define interfaces (can be imported from a shared types file later)
interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  tech: string[];
  category: string[];
  github: string | null;
  demo: string | null;
  // features?: string[]; // Not used in this component directly
  // icon?: string; // Not used in this component directly
}

interface ProjectListProps {
  projects: Project[];
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

export default function ProjectList({ projects }: ProjectListProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  const filterCategories = ['all', 'ai', 'backend', 'research', 'iot']; // Example categories

  return (
    <>
      {/* Project Filters */}
      <div className="project-filters" data-aos="fade-up">
        {filterCategories.map(filter => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            data-filter={filter}
            onClick={() => handleFilterClick(filter)}
          >
            {filter === 'all' ? 'All Projects' : filter.toUpperCase().replace('-', ' & ')}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="projects-list">
        {projects.map((project: Project) => {
          const isVisible = activeFilter === 'all' || project.category.includes(activeFilter);
          return (
            <div
              key={project.id}
              className={`project-item featured ${!isVisible ? 'hidden' : ''}`} // Apply 'hidden' class
              data-aos="fade-up"
              data-category={project.category.join(' ')} // Keep for potential CSS attribute selectors
            >
              <div className="project-image-container">
                <img src={formatImagePath(project.image)} alt={project.title} className="project-image" />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(tech => <span key={tech}>{tech}</span>)}
                </div>
                <div className="project-links">
                  {/* Modal trigger will be handled later */}
                  <a href="#!" className="project-link" onClick={(e) => { e.preventDefault(); /* alert('Modal for ' + project.id); */ }}>
                    <i className="fas fa-eye"></i> Details
                  </a>
                  {project.github && project.github !== "#" && (
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i> Code
                    </a>
                  )}
                  {project.demo && project.demo !== "#" && (
                    <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
