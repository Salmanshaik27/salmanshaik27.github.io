// Interactive charts for the data page (Chart.js), using window.SURVIVAL_DATA.
(function () {
  if (!window.Chart || !window.SURVIVAL_DATA) return;
  var D = window.SURVIVAL_DATA;
  Chart.defaults.font.family = '"Inter Tight", Arial, sans-serif';
  Chart.defaults.font.size = 12;
  Chart.defaults.color = "#555";
  var RED = "#D52B1E", GREEN = "#0B7A3E", GREY = "#C9C9C9", INK = "#111";
  var pct = function (v) { return v + "%"; };

  // 1. Sectors, with founding year and years-after controls
  var cohortSel = document.getElementById("cohort"), yearSel = document.getElementById("years");
  D.cohorts.forEach(function (c) { var o = document.createElement("option"); o.textContent = c; if (c === 2018) o.selected = true; cohortSel.appendChild(o); });
  var sectorChart = new Chart(document.getElementById("sectorChart"), {
    type: "bar",
    data: { labels: [], datasets: [{ data: [], backgroundColor: [], borderRadius: 2 }] },
    options: {
      indexAxis: "y", maintainAspectRatio: false, animation: { duration: 500 },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: function (c) { return " " + c.parsed.x + "% still active"; } } } },
      scales: { x: { min: 0, max: 100, ticks: { callback: pct }, grid: { color: "#eee" } }, y: { grid: { display: false } } }
    }
  });
  function updateSectors() {
    var key = cohortSel.value + "-" + yearSel.value;
    var rows = Object.keys(D.sectors).map(function (n) { return [n, D.sectors[n][key]]; }).filter(function (r) { return r[1] != null; });
    rows.sort(function (a, b) { return b[1] - a[1]; });
    var avg = D.total[key];
    sectorChart.data.labels = rows.map(function (r) { return r[0]; });
    sectorChart.data.datasets[0].data = rows.map(function (r) { return r[1]; });
    sectorChart.data.datasets[0].backgroundColor = rows.map(function (r) {
      if (/ICT|Finance/.test(r[0])) return RED;
      if (/Health/.test(r[0])) return GREEN;
      return r[1] >= avg ? "#8A8A8A" : GREY;
    });
    sectorChart.update();
    document.getElementById("sector-note").textContent = "Swiss average for companies founded in " + cohortSel.value + ", after " + yearSel.value + (yearSel.value === "1" ? " year: " : " years: ") + avg + "%. Red: ICT and finance. Green: health. Dark grey: above average.";
  }
  cohortSel.addEventListener("change", updateSectors);
  yearSel.addEventListener("change", updateSectors);
  updateSectors();

  // 2. Cantons over founding years
  var colors = { "Zug": RED, "Zurich": INK, "Lucerne": GREEN, "Bern": "#2F5D8C", "Basel-Stadt": "#B7791F", "Switzerland": "#9A9A9A" };
  new Chart(document.getElementById("cantonChart"), {
    type: "line",
    data: { labels: D.cohorts, datasets: Object.keys(D.cantons).map(function (n) {
      return { label: n, data: D.cantons[n], borderColor: colors[n], backgroundColor: colors[n], borderWidth: n === "Switzerland" ? 1.5 : 2.5, borderDash: n === "Switzerland" ? [5, 4] : [], tension: 0.3, pointRadius: 3 };
    }) },
    options: {
      maintainAspectRatio: false, interaction: { mode: "index", intersect: false },
      plugins: { tooltip: { callbacks: { label: function (c) { return " " + c.dataset.label + ": " + c.parsed.y + "%"; } } }, legend: { position: "bottom", labels: { boxWidth: 10 } } },
      scales: { y: { ticks: { callback: pct }, grid: { color: "#eee" } }, x: { grid: { display: false }, title: { display: true, text: "Founding year" } } }
    }
  });

  // 3. Survival curve by size
  var sizeColors = [RED, "#9A9A9A", "#5A5A5A", GREEN];
  new Chart(document.getElementById("sizeChart"), {
    type: "line",
    data: { labels: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"], datasets: Object.keys(D.size).map(function (n, i) {
      return { label: n, data: D.size[n], borderColor: sizeColors[i], backgroundColor: sizeColors[i], borderWidth: 2.5, tension: 0.3, pointRadius: 3 };
    }) },
    options: {
      maintainAspectRatio: false, interaction: { mode: "index", intersect: false },
      plugins: { tooltip: { callbacks: { label: function (c) { return " " + c.dataset.label + ": " + c.parsed.y + "%"; } } }, legend: { position: "bottom", labels: { boxWidth: 10 } } },
      scales: { y: { min: 40, max: 100, ticks: { callback: pct }, grid: { color: "#eee" } }, x: { grid: { display: false } } }
    }
  });

  // 4. Venture capital by sector
  var vc = Object.keys(D.vc).map(function (k) { return [k, D.vc[k]]; }).sort(function (a, b) { return b[1] - a[1]; });
  new Chart(document.getElementById("vcChart"), {
    type: "bar",
    data: { labels: vc.map(function (r) { return r[0]; }), datasets: [{ data: vc.map(function (r) { return r[1]; }), borderRadius: 2,
      backgroundColor: vc.map(function (r) { return /ICT/.test(r[0]) ? RED : /Biotech|Medtech|Healthcare/.test(r[0]) ? GREEN : GREY; }) }] },
    options: {
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: function (c) { return " CHF " + c.parsed.y + "m"; } } } },
      scales: { y: { ticks: { callback: function (v) { return "CHF " + v + "m"; } }, grid: { color: "#eee" } }, x: { grid: { display: false } } }
    }
  });
})();
