function showValue(sliderId, value) {
    document.getElementById(sliderId + "Valor").textContent = value;
  }
  
  // Dados iniciais para o gráfico, ajustados para ter valores iniciais correspondentes aos sliders
  const dados = {
    labels: [
      "Criatividade, hobbies e diversão",
      "Plenitude e felicidade",
      "Espiritualidade",
      "Saúde e disposição",
      "Desenvolvimento intelectual",
      "Equilíbrio emocional",
      "Realização e propósito",
      "Recursos financeiros",
      "Contribuição social",
      "Relacionamentos familiares",
      "Relacionamentos sociais",
      "Relacionamentos amorosos",
    ],
    datasets: [
      {
        label: "Minha Roda da Vida",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Zerando os valores iniciais
        fill: true,
        backgroundColor: "rgba(85, 114, 254, 0.2)",
        borderColor: "rgb(85, 114, 254)",
        pointBackgroundColor: "rgb(85, 114, 254)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(85, 114, 254)",
      },
    ],
  };
  
  // Configurações do gráfico
  const config = {
    type: "radar",
    data: dados,
    options: {
      scales: {
        r: {
          min: 0,
          max: 100,
          ticks: {
            stepSize: 10,
          },
          pointLabels: {
            font: {
              size: 14,
            },
          },
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        line: {
          borderWidth: 3,
        },
      },
    },
  };
  
  // Inicializando o gráfico radar
  const meuRadarChart = new Chart(
    document.getElementById("meuRadarChart"),
    config
  );
  
  // Função para atualizar o gráfico com os valores dos sliders
  function updateChart() {
    dados.datasets[0].data = [
      document.getElementById("criatividade-hobbies-diversao").value,
      document.getElementById("plenitude-felicidade").value,
      document.getElementById("espiritualidade").value,
      document.getElementById("saude-disposicao").value,
      document.getElementById("desenvolvimento-intelectual").value,
      document.getElementById("equilibrio-emocional").value,
      document.getElementById("realizacao-proposito").value,
      document.getElementById("recursos-financeiros").value,
      document.getElementById("contribuicao-social").value,
      document.getElementById("relacionamentos-familiares").value,
      document.getElementById("relacionamentos-sociais").value,
      document.getElementById("relacionamentos-amorosos").value,
    ];
    meuRadarChart.update();
  }
  