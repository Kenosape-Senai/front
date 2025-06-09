import React from "react";
import "./Sidebar.css"

const projects = {
"projects": [
        {
            "id": "f1400_1730",
            "name": "F1400 - Material 1730"
        }
    ]
}

type SidebarProps = {
  isCollapsed: boolean;
  onToggleSidebar: () => void;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectProject: (projectName: string) => void;
};

export default function Sidebar({
  isCollapsed,
  onToggleSidebar,
  onSearch,
  onSelectProject,
}: SidebarProps) {

  const handleSubmit = (event: any) => {
        event.preventDefault();
        window.location.href = "/projects";
      };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`} id="sidebar">
      <button id="toggleSidebar" className="toggle-btn" onClick={onToggleSidebar}>
        ☰
      </button>
      <img className="imagem_logo" onClick={handleSubmit} id="logo" src="/imagem_logo.png" alt="Logo Grupo Simoldes" />
      <h2>Projetos</h2>
      <input
        type="text"
        id="searchInput"
        placeholder="Buscar projeto..."
        onChange={onSearch}
      />
      <ul>
        {projects.projects.map((project, index) => (
          <li key={index} onClick={() => onSelectProject(project.name)}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}
