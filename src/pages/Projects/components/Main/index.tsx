import React from 'react';
import "./MainContent.css"

export default function MainContent({ isSidebarCollapsed }: { isSidebarCollapsed: boolean }){
    
    return (
        <div className="main-content">
            <h1 id="saudacao">Carregando saudação...</h1>

            <h2 id="projectName" style={{ display: 'none' }}></h2>

            <div className="dashboard">
                <div className="dashboard-box">
                    <h3>Tempo de Execução dos Projetos</h3>
                    <canvas id="barChart"></canvas>
                </div>
                <div className="dashboard-box">
                    <h3>Status dos Projetos</h3>
                    <canvas id="pieChart"></canvas>
                </div>
            </div>

            <div id="projectDetails" className="project-details" style={{ display: 'none' }}>
                <h3>Detalhes do Projeto</h3>
                <div className="project-images">
                    <button id="prevBtn" className="carousel-btn">‹</button>
                    <img id="carouselImage" src="projeto_img1.png" alt="Imagem do Projeto" />
                    <button id="nextBtn" className="carousel-btn">›</button>
                </div>

                <p id="projectDescription">Selecione um projeto para ver os detalhes.</p>

                <div className="project-steps">
                    <h4>Etapas do Projeto</h4>
                    <ul id="projectSteps" className="project-steps-list">
                    </ul>
                </div>
            </div>
        </div>
    );
};
