import React from 'react';
import contentData from '../data/content.json';
import ProjectList from '../components/features/projects/ProjectList';

export default function Projects() {
  const { projects } = contentData;
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <ProjectList projects={projects} />
      </div>
    </section>
  );
}
