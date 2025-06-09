// app/components/ProjectList.tsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import type { Project } from '../../../types';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleFilterClick = (filter: string) => setActiveFilter(filter);

  const handleOpenModal = useCallback((project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = '';
  }, []);

  // Effect for Escape key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };
    if (isModalOpen) {
      document.addEventListener('keydown', handleEscKey);
    }
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isModalOpen, handleCloseModal]);

  const filterCategories = ['all', 'ai', 'backend', 'research', 'iot'];

  return (
    <>
      {/* Project Filters */}
      <div className="project-filters">
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
              className={`project-item featured ${!isVisible ? 'hidden' : ''}`}
              data-category={project.category.join(' ')}
            >
              <div className="project-image-container">
                <img src={project.image && project.image.trim() !== '' ? formatImagePath(project.image) : "/images/placeholders/item-placeholder.svg"} alt={project.title} className="project-image" />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(tech => <span key={tech}>{tech}</span>)}
                </div>
                <div className="project-links">
                  <button className="project-link" onClick={() => handleOpenModal(project)}>
                    <i className="fas fa-eye"></i> Details
                  </button>
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

      {/* Modal Implementation */}
      {isModalOpen && selectedProject && (
        <div id="project-modal" className="modal active" onClick={handleCloseModal}> {/* Added active class, and click outside to close */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Stop propagation to prevent closing when clicking inside content */}
            <span className="modal-close" onClick={handleCloseModal}>&times;</span>
            <div className="modal-body" id="modal-body">
              <h2>{selectedProject.title}</h2>
              <div className="modal-project-info">
                <div className="modal-project-image">
                  {/* Original script used icon, can use project.icon or a placeholder */}
                  {selectedProject.icon ? <i className={selectedProject.icon}></i> : <i className="fas fa-project-diagram"></i>}
                </div>
                <div className="modal-project-details">
                  <p className="modal-description">{selectedProject.description}</p>
                  {selectedProject.features && selectedProject.features.length > 0 && (
                    <div className="modal-features">
                      <h3>Key Features</h3>
                      <ul>
                        {selectedProject.features.map((feature, index) => <li key={index}>{feature}</li>)}
                      </ul>
                    </div>
                  )}
                  <div className="modal-tech">
                    <h3>Technologies Used</h3>
                    <div className="modal-tech-tags">
                      {selectedProject.tech.map(tech => <span key={tech} className="tech-tag">{tech}</span>)}
                    </div>
                  </div>
                  <div className="modal-links">
                    {selectedProject.github && selectedProject.github !== "#" && (
                      <a href={selectedProject.github} className="modal-btn" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i> View Code
                      </a>
                    )}
                    {selectedProject.demo && selectedProject.demo !== "#" && (
                      <a href={selectedProject.demo} className="modal-btn" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-external-link-alt"></i> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
