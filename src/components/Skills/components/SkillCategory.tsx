import React from "react";
import "./skill-category.css";

interface SkillCategoryProps {
  category: string;
  skills: string[];
}

const iconMap: Record<string, string> = {
  Frontend: "⚡",
  Backend: "⚙️",
  Plus: "🟢",
  Gerenciamento: "👨‍💼",
};

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, skills }) => {
  return (
    <div className="skill-category">
      <div className="category-header">
        <span className="category-icon">{iconMap[category]}</span>
        <h3 className="category-title">{category}</h3>
      </div>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <span className="skill-bullet">•</span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCategory;
