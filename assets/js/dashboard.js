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
      label: "Sem data de aplicação",
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
        max: 10,
        ticks: {
          stepSize: 1,
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

document.getElementById("saveButton").addEventListener("click", () => {
  // Suponha que você tenha sliders com IDs específicos
  const sliders = [
    "criatividade-hobbies-diversao",
    "plenitude-felicidade",
    "espiritualidade",
    "saude-disposicao",
    "desenvolvimento-intelectual",
    "equilibrio-emocional",
    "realizacao-proposito",
    "recursos-financeiros",
    "contribuicao-social",
    "relacionamentos-familiares",
    "relacionamentos-sociais",
    "relacionamentos-amorosos",
  ];
  const data = {};

  // Coletar os valores dos sliders
  sliders.forEach((sliderId) => {
    const sliderElement = document.getElementById(sliderId);
    if (sliderElement) {
      const sliderValue = sliderElement.value;
      data[sliderId] = sliderValue;
    } else {
      console.log(`Elemento não encontrado: ${sliderId}`);
    }
  });

  // Adicionar a data atual
  const currentDate = new Date().toISOString().split("T")[0];
  data.date = currentDate;

  // Armazenar os dados localmente
  localStorage.setItem("sliderData", JSON.stringify(data));

  // Atualizar o label do dataset do gráfico radar
  if (
    meuRadarChart &&
    meuRadarChart.data &&
    meuRadarChart.data.datasets &&
    meuRadarChart.data.datasets.length > 0
  ) {
    meuRadarChart.data.datasets[0].label = `Aplicação - ${currentDate}`;
    meuRadarChart.update();
  } else {
    console.log(
      "Gráfico radar não encontrado ou não inicializado corretamente."
    );
  }

  console.log("Dados Salvos:", data); // Apenas para demonstração
});

document
  .getElementById("addApplicationButton")
  .addEventListener("click", () => {
    const sliders = [
      "criatividade-hobbies-diversao",
      "plenitude-felicidade",
      "espiritualidade",
      "saude-disposicao",
      "desenvolvimento-intelectual",
      "equilibrio-emocional",
      "realizacao-proposito",
      "recursos-financeiros",
      "contribuicao-social",
      "relacionamentos-familiares",
      "relacionamentos-sociais",
      "relacionamentos-amorosos",
    ];

    // Criar um array com valores zerados para o novo dataset
    const zeroData = sliders.map(() => 0);

    const newColor = getRandomColor();
    const newDataset = {
      label: `Aplicação - ${new Date().toISOString().split("T")[0]}`,
      data: zeroData,
      fill: true,
      backgroundColor: `rgba(${newColor}, 0.2)`,
      borderColor: `rgb(${newColor})`,
      pointBackgroundColor: `rgb(${newColor})`,
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: `rgb(${newColor})`,
    };

    meuRadarChart.data.datasets.push(newDataset);
    meuRadarChart.update();

    // Resetar os valores dos sliders e atualizar os rótulos
    resetSliders();
  });

function resetSliders() {
  const sliders = [
    "criatividade-hobbies-diversao",
    "plenitude-felicidade",
    "espiritualidade",
    "saude-disposicao",
    "desenvolvimento-intelectual",
    "equilibrio-emocional",
    "realizacao-proposito",
    "recursos-financeiros",
    "contribuicao-social",
    "relacionamentos-familiares",
    "relacionamentos-sociais",
    "relacionamentos-amorosos",
  ];

  sliders.forEach((sliderId) => {
    const sliderElement = document.getElementById(sliderId);
    const labelElement = document.getElementById(`${sliderId}Valor`);
    if (sliderElement && labelElement) {
      sliderElement.value = 0;
      labelElement.textContent = "0";
      // Atualizar o gráfico ao modificar os valores dos sliders
      sliderElement.oninput = function () {
        updateChartData(sliderId, this.value);
      };
    }
  });
}

function updateChartData(sliderId, value) {
  const sliderIndex = [
    "criatividade-hobbies-diversao",
    "plenitude-felicidade",
    "espiritualidade",
    "saude-disposicao",
    "desenvolvimento-intelectual",
    "equilibrio-emocional",
    "realizacao-proposito",
    "recursos-financeiros",
    "contribuicao-social",
    "relacionamentos-familiares",
    "relacionamentos-sociais",
    "relacionamentos-amorosos",
  ].indexOf(sliderId);

  if (sliderIndex !== -1) {
    // Encontra o índice do último dataset
    const lastDatasetIndex = meuRadarChart.data.datasets.length - 1;
    meuRadarChart.data.datasets[lastDatasetIndex].data[sliderIndex] =
      parseFloat(value);
    meuRadarChart.update();
  }
}

function getRandomColor() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return o(r() * s) + "," + o(r() * s) + "," + o(r() * s); // Retorna "r,g,b"
}

// Inicializa os eventos oninput dos sliders
resetSliders();
