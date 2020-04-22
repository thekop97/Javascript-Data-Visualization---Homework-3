new Chart(document.getElementById("barChart"), {
  type: 'bar',
  data: {
    labels: ["CAN", "FIN", "FRA", "GBR", "NOR", "SUI", "SWE", "USA"],
    datasets: [{
      labels: "Medals",
      backgroundColor: ["#c45850", "#8e5ea2", "#3cba9f", "#e8c3b9", "#F8EF76", "#0093fb", "#BE9258", "#538AB1"],
      data: [9, 15, 12, 25, 17, 9, 9, 13]
    }]
  },
  options: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'The top 8 countries receive medals in 1924 '
    }
  }
});

new Chart(document.getElementById("lineChart"), {
  type: 'line',
  data: {
    labels: [1924, 1932, 1948, 1960, 1964, 1972, 1980, 1984, 1994, 2002, 2006, 2010, 2014],
    datasets: [{
      data: [9, 20, 20, 21, 7, 1, 2, 4, 40, 75, 68, 91, 90],
      label: "Medals",
      borderColor: "Black",
      fill: false
    }, {
      data: [9, 14, 18, 3, 4, 0, 0, 2, 3, 53, 29, 68, 63],
      label: "Gold Medals",
      borderColor: "gold",
      fill: false
    }, {
      data: [0, 0, 0, 17, 2, 1, 1, 1, 32, 7, 28, 15, 22],
      label: "Silver Medals",
      borderColor: "silver",
      fill: false
    }, {
      data: [0, 5, 2, 1, 1, 0, 1, 1, 5, 15, 11, 8, 5],
      label: "Bronze Medals",
      borderColor: "#BD9B77",
      fill: false
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Canada Team achievement from 1924 to 2014'
    }
  }
});

new Chart(document.getElementById("radarChart"), {
  type: 'radar',
  data: {
    labels: ["Biathlon", "Bobsleigh", "Curling", "Ice Hockey", "Luge", "Skating", "Skiing"],
    datasets: [{
      label: "Man",
      fill: true,
      backgroundColor: "rgba(0,0,255,0.2)",
      borderColor: "rgba(179,181,198,1)",
      pointBorderColor: "#fff",
      pointBackgroundColor: "rgba(179,181,198,2)",
      data: [0, 4, 5, 16, 0, 17, 5]
    }, {
      label: "Women",
      fill: true,
      backgroundColor: "rgba(255,0,0,0.1)",
      borderColor: "rgba(255,99,132,1)",
      pointBorderColor: "#fff",
      pointBackgroundColor: "rgba(255,99,132,1)",
      data: [2, 3, 5, 5, 0, 14, 10]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Difference between Canadian Men and Women Team'
    }
  }
});

new Chart(document.getElementById("pieChart"), {
  type: 'pie',
  data: {
    labels: ["Other", "URS", "FIN", "NOR", "USA", "CAN", "SWE"],
    datasets: [{
      label: "Medals",
      backgroundColor: ["#006400", "#C8E4E4", "#8e5ea2", "#F8EF76", "#538AB1", "#c45850", "#BE9258"],
      data: [2728, 440, 434, 457, 653, 625, 433]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Total Medals Achieved Of Top 6 Countries and The Others- From 1924-2014'
    }
  }
});