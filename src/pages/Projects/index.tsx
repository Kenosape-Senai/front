import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/Main";
import { Chart, Chart as ChartJS } from "chart.js/auto";
import "./Projects.css"
import Modal from "./components/Modal";

export default function Projects() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState<number | null>(null);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filtro = e.target.value.toLowerCase();
    document.querySelectorAll(".sidebar ul li").forEach((item) => {
      const li = item as HTMLLIElement;
      li.style.display = li.textContent?.toLowerCase().includes(filtro) ? "" : "none";
    });
  };

  const handleSelectProject = (projectName: string) => {
    const saudacaoEl = document.getElementById("saudacao")!;
    const dashboards = document.querySelector(".dashboard") as HTMLElement;
    const projectNameEl = document.getElementById("projectName")!;
    const projectDetails = document.getElementById("projectDetails")!;
    const projectDescription = document.getElementById("projectDescription")!;
    const stepsContainer = document.getElementById("projectSteps")!;
    const sidebar = document.getElementById("sidebar")!;

    if (!projectName) {
      saudacaoEl.style.display = "block";
      dashboards.style.display = "grid";
      projectDetails.style.display = "none";
      projectNameEl.style.display = "none";
      return;
    }

    saudacaoEl.style.display = "none";
    dashboards.style.display = "none";

    projectNameEl.textContent = projectName;
    projectNameEl.style.display = "block";
    projectDetails.style.display = "block";

    projectDescription.innerText = `Detalhes do projeto: ${projectName}`;

    const carouselImages = ["projeto_img1.png", "projeto_img2.png", "projeto_img3.png"];
    let currentImageIndex = 0;

    const carouselImgEl = document.getElementById("carouselImage") as HTMLImageElement;
    const prevBtn = document.getElementById("prevBtn") as HTMLButtonElement;
    const nextBtn = document.getElementById("nextBtn") as HTMLButtonElement;

    function updateCarouselImage() {
      carouselImgEl.src = carouselImages[currentImageIndex];
      prevBtn.disabled = currentImageIndex === 0;
      nextBtn.disabled = currentImageIndex === carouselImages.length - 1;
    }

    prevBtn.onclick = () => {
      if (currentImageIndex > 0) {
        currentImageIndex--;
        updateCarouselImage();
      }
    };

    nextBtn.onclick = () => {
      if (currentImageIndex < carouselImages.length - 1) {
        currentImageIndex++;
        updateCarouselImage();
      }
    };

    updateCarouselImage();

    stepsContainer.innerHTML = "";
    Array.from({ length: 10 }, (_, index) => {
      const li = document.createElement("li");
      li.innerHTML = `<b>Etapa ${index + 1}</b> | 
      Info 1 | 
      Info 2 | 
      Info 3 | 
      Info 4 |
      Info 5 |
      Info 6 |
      Info 7 |
      Info 8 |
      Info 9 |
      Info 10|
      Info 11|
      Info 12|
      Info 13|
      Info 14|
      Info 15|
      `;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.classList.add("step-checkbox");
      checkbox.id = `step${index + 1}`;

      li.appendChild(checkbox);

      li.onclick = () => {
        setModalStep(index + 1);
        setIsModalOpen(true);
      };
    
      checkbox.onclick = (e) => e.stopPropagation();

      stepsContainer.appendChild(li);
    });

    sidebar.classList.add("collapsed");
  };

  useEffect(() => {
    const saudacaoEl = document.getElementById("saudacao")!;
    const hora = new Date().getHours();
    const nomeUsuario = "Fernanda";
    let saudacao = "Boa noite";
    if (hora >= 5 && hora < 12) saudacao = "Bom dia";
    else if (hora >= 12 && hora < 18) saudacao = "Boa tarde";
    saudacaoEl.innerText = `${saudacao}, ${nomeUsuario}!`;

    const barChartCanvas = document.getElementById("barChart") as HTMLCanvasElement;
    const pieChartCanvas = document.getElementById("pieChart") as HTMLCanvasElement;

    // Garantir que o gráfico seja destruído antes de recriar
    const destroyChart = (chartInstance: ChartJS | null) => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };

    let barChartInstance: ChartJS | null = null;
    let pieChartInstance: ChartJS | null = null;

    // Configuração do gráfico de barras
if (barChartCanvas) {
  destroyChart(barChartInstance); // Destruir gráfico existente antes de criar um novo

    barChartInstance = new Chart(barChartCanvas, {
      type: "bar",
      data: {
        labels: [
          "", "Projeto 1", 
          "", "Projeto 2", 
          "", "Projeto 3", 
          "", "Projeto 4", 
          "", "Projeto 5"
        ],
        datasets: [
          {
            label: "Tempo estimado",
            data: [null, 110, null, 85, null, 40, null, 28, null, 50],
            backgroundColor: "#f9a825",
            borderRadius: 8,
            barThickness: 20,
          },
          {
            label: "Tempo real",
            data: [120, null, 90, null, 45, null, 30, null, 60, null],
            backgroundColor: "#2e7d32",
            borderRadius: 8,
            barThickness: 20,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: "top",
            labels: {
              color: "#12372A",
              font: { weight: "bold" },
            },
          },
          tooltip: {
            backgroundColor: "#12372A",
            titleColor: "#fff",
            bodyColor: "#fff",
            cornerRadius: 8,
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#12372A",
              font: { weight: "bold" },
            },
            grid: { display: false },
            stacked: false,
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: "#12372A",
              font: { weight: "bold" },
            },
            grid: { color: "rgba(18, 55, 42, 0.1)" },
          },
        },
      },
    });
  }


    if (pieChartCanvas) {
      destroyChart(pieChartInstance);
      pieChartInstance = new Chart(pieChartCanvas, {
        type: "doughnut",
        data: {
          labels: ["Finalizados", "Em andamento"],
          datasets: [
            {
              data: [14, 10],
              backgroundColor: ["#2e7d32", "#f9a825"],
              borderRadius: 8,
              borderWidth: 2,
              borderColor: "#ffffff",
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                color: "#12372A",
                font: { size: 14, weight: "bold" },
              },
            },
            tooltip: {
              backgroundColor: "#12372A",
              titleColor: "#fff",
              bodyColor: "#fff",
              cornerRadius: 8,
            },
          },
          cutout: "65%",
        },
      });
    }
    return () => {
      destroyChart(barChartInstance);
      destroyChart(pieChartInstance);
    };
  }, []);

  return (
    <div className="page">
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggleSidebar={toggleSidebar}
        onSearch={handleSearch}
        onSelectProject={handleSelectProject}
      />
      <MainContent />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {modalStep && (
          <div>
            <h2 style={{ marginBottom: "1rem" }}>Detalhes da Etapa</h2>
            <p><strong>Programa:</strong> Program{modalStep}</p>
            <p><strong>Tipo de Percurso:</strong> Corte</p>
            <p><strong>Ref:</strong> REF123</p>
            <p><strong>Comentário:</strong> Primeira etapa de usinagem</p>
            <p><strong>Material:</strong> Aço</p>
            <p><strong>Ferramenta:</strong> Fresa Carbide</p>
            <p><strong>Diâmetro:</strong> 10mm</p>
            <p><strong>Raio da ponta:</strong> 1mm</p>
            <p><strong>Comprimento:</strong> 50mm</p>
            <p><strong>Suporte:</strong> HolderX</p>
            <p><strong>Plano de Trabalho:</strong> XYZ</p>
            <p><strong>Tempo:</strong> 00:30:00</p>
            <p><strong>Data:</strong> 29/04/2025</p>
            <p><strong>Operador:</strong> Fernanda</p>
            <p><strong>Caminho do programa:</strong> /program/program{modalStep}.pmill</p>
          </div>
        )}
      </Modal>
    </div>
  );
}
