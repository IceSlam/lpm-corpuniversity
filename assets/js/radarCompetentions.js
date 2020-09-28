
var competitionRadarChart = document.getElementById("competentionRadarChart");
var competitionRadar = {
  labels: ["Компетенция 1", "Компетенция 2", "Компетенция 3", "Компетенция 4", "Компетенция 5", "Компетенция 6", "Компетенция 7", "Компетенция 8"],
  datasets: [{
    label: "Курс 1",
    backgroundColor: "rgba(115, 85, 166, .5)",
    borderColor: "rgba(115, 85, 166, 1)",
    data: [20, 80, 60, 50, 90, 50, 70, 40],
    lineWidth: 1
  }, {
    label: "Курс 2",
    backgroundColor: "rgba(82, 139, 143, .5)",
    borderColor: "rgba(82, 139, 143, 1)",
    data: [70, 40, 80, 50, 10, 40, 50, 90]
  }]
};

var radarChart = new Chart(competitionRadarChart, {
  type: 'radar',
  data: competitionRadar,
  options: {
    title: {
      display: true,
      text: 'Компетентностный профиль',
      fontFamily: 'Roboto',
      fontColor: '#fff',
      fontSize: '24',
      lineHeight: '1.5'
    },
    legend: {
      display: false
    },
    scale: {
      gridLines: {
        circular: true,
        color: 'rgba(255,255,255,1)',
        zeroLineColor: 'rgba(255,255,255,1)'
      },
      angleLines: {
        display: true,
        color: 'rgba(255,255,255,1)'
      },
      pointLabels: {
        display: true,
        fontColor: 'rgba(255,255,255,1)',
        fontSize: '16',
        lineHeight: '1.2'
      },
      ticks: {
        display: false,
        beginAtZero: true
      }
    }
  }
});
