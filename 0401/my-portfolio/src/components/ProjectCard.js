import React from 'react';

const ProjectCard = ({ title, tech, description }) => {
  const tags = tech ? tech.split(',').map(t => t.trim()) : [];
  return (
    <div className="project-card">
      <h4 className="card-title">{title}</h4>
      <div className="card-tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default ProjectCard;
