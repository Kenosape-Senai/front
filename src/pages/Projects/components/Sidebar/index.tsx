import React from "react";
import "./Sidebar.css"

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
  onSelectProject, // <-- você esqueceu de desestruturar esses dois
}: SidebarProps) {
  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`} id="sidebar">
      <button id="toggleSidebar" className="toggle-btn" onClick={onToggleSidebar}>
        ☰
      </button>
      <img className="imagem_logo" id="logo" src="/imagem_logo.png" alt="Logo Grupo Simoldes" />
      <h2>Projetos</h2>
      <input
        type="text"
        id="searchInput"
        placeholder="Buscar projeto..."
        onChange={onSearch}
      />
      <ul>
        <li onClick={() => onSelectProject("Projeto 1")}>Projeto 1</li>
        <li onClick={() => onSelectProject("Projeto 2")}>Projeto 2</li>
        <li onClick={() => onSelectProject("Projeto 3")}>Projeto 3</li>
        <li onClick={() => onSelectProject("Projeto 4")}>Projeto 4</li>
      </ul>
    </div>
  );
}
