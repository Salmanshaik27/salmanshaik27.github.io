// Interactive charts that can be embedded in any page:
// <div class="chart-embed" data-chart="sectors"></div>
// Types: regions, sectors, cantons, size, legal, vc, ai
(function () {
  if (!window.Chart || !window.SURVIVAL_DATA) return;
  var D = window.SURVIVAL_DATA;
  Chart.defaults.font.family = '"Inter Tight", Arial, sans-serif';
  Chart.defaults.font.size = 12;
  Chart.defaults.color = "#555";
  var RED = "#D52B1E", GREEN = "#0B7A3E", GREY = "#C9C9C9", INK = "#111";
  var pct = function (v) { return v + "%"; };
  var cantonColors = { "Zug": RED, "Zurich": INK, "Lucerne": GREEN, "Bern": "#2F5D8C", "Basel-Stadt": "#B7791F", "Switzerland": "#9A9A9A" };

  function make(el, height) {
    var box = document.createElement("div");
    box.className = "chart-box";
    if (height) box.style.height = height + "px";
    var c = document.createElement("canvas");
    c.setAttribute("role", "img");
    c.setAttribute("aria-label", el.getAttribute("data-label") || "Interactive chart");
    box.appendChild(c);
    el.appendChild(box);
    return c;
  }
  function control(el, label, options, selected) {
    var wrap = el.querySelector(".controls");
    if (!wrap) { wrap = document.createElement("div"); wrap.className = "controls"; el.insertBefore(wrap, el.firstChild); }
    var l = document.createElement("label");
    l.textContent = label + " ";
    var s = document.createElement("select");
    options.forEach(function (o) {
      var opt = document.createElement("option");
      opt.value = o[0]; opt.textContent = o[1];
      if (String(o[0]) === String(selected)) opt.selected = true;
      s.appendChild(opt);
    });
    l.appendChild(s); wrap.appendChild(l);
    return s;
  }
  function note(el, text) {
    var p = el.querySelector(".chart-note");
    if (!p) { p = document.createElement("p"); p.className = "chart-note"; el.appendChild(p); }
    p.textContent = text;
  }

  var builders = {
    sectors: function (el) {
      var cohort = control(el, "Founded in", D.cohorts.map(function (c) { return [c, c]; }), 2018);
      var years = control(el, "Still alive after", [[1, "1 year"], [2, "2 years"], [3, "3 years"], [4, "4 years"], [5, "5 years"]], 5);
      var chart = new Chart(make(el, 420), {
        type: "bar",
        data: { labels: [], datasets: [{ data: [], backgroundColor: [], borderRadius: 2 }] },
        options: {
          indexAxis: "y", maintainAspectRatio: false, animation: { duration: 400 },
          plugins: { legend: { display: false }, tooltip: { callbacks: { label: function (c) { return " " + c.parsed.x + "% still active"; } } } },
          scales: { x: { min: 0, max: 100, ticks: { callback: pct }, grid: { color: "#eee" } }, y: { grid: { display: false } } }
        }
      });
      function update() {
        var key = cohort.value + "-" + years.value;
        var rows = Object.keys(D.sectors).map(function (n) { return [n, D.sectors[n][key]]; }).filter(function (r) { return r[1] != null; });
        rows.sort(function (a, b) { return b[1] - a[1]; });
        var avg = D.total[key];
        chart.data.labels = rows.map(function (r) { return r[0]; });
        chart.data.datasets[0].data = rows.map(function (r) { return r[1]; });
        chart.data.datasets[0].backgroundColor = rows.map(function (r) {
          if (/ICT|Finance/.test(r[0])) return RED;
          if (/Health/.test(r[0])) return GREEN;
          return r[1] >= avg ? "#8A8A8A" : GREY;
        });
        chart.update();
        note(el, "Swiss average for companies founded in " + cohort.value + ": " + avg + "%. Red: ICT and finance. Green: health. Dark grey: above average. Source: BFS company demography.");
      }
      cohort.addEventListener("change", update); years.addEventListener("change", update); update();
    },
    cantons: function (el) {
      new Chart(make(el, 340), {
        type: "line",
        data: { labels: D.cohorts, datasets: Object.keys(D.cantons).map(function (n) {
          return { label: n, data: D.cantons[n], borderColor: cantonColors[n], backgroundColor: cantonColors[n], borderWidth: n === "Switzerland" ? 1.5 : 2.5, borderDash: n === "Switzerland" ? [5, 4] : [], tension: 0.3, pointRadius: 3 };
        }) },
        options: {
          maintainAspectRatio: false, interaction: { mode: "index", intersect: false },
          plugins: { tooltip: { callbacks: { label: function (c) { return " " + c.dataset.label + ": " + c.parsed.y + "%"; } } }, legend: { position: "bottom", labels: { boxWidth: 10 } } },
          scales: { y: { ticks: { callback: pct }, grid: { color: "#eee" } }, x: { grid: { display: false }, title: { display: true, text: "Founding year" } } }
        }
      });
      note(el, "5-year survival by founding year. Click a canton in the legend to hide or show it. Source: BFS company demography.");
    },
    size: function (el) {
      var cols = [RED, "#9A9A9A", "#5A5A5A", GREEN];
      new Chart(make(el, 320), {
        type: "line",
        data: { labels: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"], datasets: Object.keys(D.size).map(function (n, i) {
          return { label: n, data: D.size[n], borderColor: cols[i], backgroundColor: cols[i], borderWidth: 2.5, tension: 0.3, pointRadius: 3 };
        }) },
        options: {
          maintainAspectRatio: false, interaction: { mode: "index", intersect: false },
          plugins: { tooltip: { callbacks: { label: function (c) { return " " + c.dataset.label + ": " + c.parsed.y + "%"; } } }, legend: { position: "bottom", labels: { boxWidth: 10 } } },
          scales: { y: { min: 40, max: 100, ticks: { callback: pct }, grid: { color: "#eee" } }, x: { grid: { display: false } } }
        }
      });
      note(el, "Share of companies founded in 2018 still active, by number of employees at founding. Source: BFS company demography.");
    },
    legal: function (el) {
      var keys = Object.keys(D.legal).filter(function (k) { return k !== "Public enterprise"; });
      new Chart(make(el, 300), {
        type: "bar",
        data: { labels: keys, datasets: [{ data: keys.map(function (k) { return D.legal[k]; }), borderRadius: 2,
          backgroundColor: keys.map(function (k) { return /GmbH|AG /.test(k) ? GREEN : /Foreign/.test(k) ? RED : GREY; }) }] },
        options: {
          indexAxis: "y", maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { callbacks: { label: function (c) { return " " + c.parsed.x + "% still active after 5 years"; } } } },
          scales: { x: { min: 0, max: 70, ticks: { callback: pct }, grid: { color: "#eee" } }, y: { grid: { display: false } } }
        }
      });
      note(el, "5-year survival of companies founded in 2018, by legal form. Public enterprises are left out because the group is very small. Source: BFS company demography.");
    },
    vc: function (el) {
      var view = control(el, "Show by", [["sector", "Sector"], ["canton", "Canton"]], el.getAttribute("data-view") || "sector");
      var chart = new Chart(make(el, 330), {
        type: "bar",
        data: { labels: [], datasets: [{ data: [], borderRadius: 2, backgroundColor: [] }] },
        options: {
          indexAxis: "y", maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { callbacks: { label: function (c) { return " CHF " + c.parsed.x + "m"; } } } },
          scales: { x: { ticks: { callback: function (v) { return v + "m"; } }, grid: { color: "#eee" } }, y: { grid: { display: false } } }
        }
      });
      function update() {
        var byCanton = view.value === "canton", src = byCanton ? D.vcCanton : D.vc;
        var rows = Object.keys(src).map(function (k) { return [k, src[k]]; }).sort(function (a, b) { return b[1] - a[1]; });
        chart.data.labels = rows.map(function (r) { return r[0]; });
        chart.data.datasets[0].data = rows.map(function (r) { return r[1]; });
        chart.data.datasets[0].backgroundColor = rows.map(function (r) {
          if (byCanton) return r[0] === "Zug" ? RED : r[0] === "Zurich" ? INK : GREY;
          return /ICT/.test(r[0]) ? RED : /Biotech|Medtech|Healthcare/.test(r[0]) ? GREEN : GREY;
        });
        chart.update();
      }
      view.addEventListener("change", update); update();
      note(el, "Venture capital invested in 2025, CHF million. Bern and Lucerne are not listed separately in the report. Source: Swiss Venture Capital Report 2026.");
    },
    regions: function (el) {
      new Chart(make(el, 380), {
        type: "bubble",
        data: { datasets: D.regions.map(function (r) {
          return { label: r.canton, data: [{ x: r.perK, y: r.surv, r: Math.max(5, Math.sqrt(r.vcPerRes) * 0.9), vc: r.vcPerRes, lower: r.lower }],
            backgroundColor: (cantonColors[r.canton] || GREY) + "B3", borderColor: cantonColors[r.canton] || GREY };
        }) },
        options: {
          maintainAspectRatio: false,
          plugins: {
            legend: { position: "bottom", labels: { boxWidth: 10 } },
            tooltip: { callbacks: { label: function (c) { var d = c.raw; return [" " + c.dataset.label, " New per 1,000 residents: " + d.x, " 5-year survival: " + d.y + "%", " VC per resident: CHF " + Math.round(d.vc) + (d.lower ? " (minimum)" : "")]; } } }
          },
          scales: {
            x: { title: { display: true, text: "New companies per 1,000 residents (2023)" }, min: 2, max: 16, grid: { color: "#eee" } },
            y: { title: { display: true, text: "5-year survival, %" }, min: 45, max: 54, ticks: { callback: pct }, grid: { color: "#eee" } }
          }
        }
      });
      note(el, "Bubble size: venture capital per resident (2025). Hover a bubble for details. Sources: BFS company demography, BFS STATPOP, Swiss Venture Capital Report 2026.");
    },
    ai: function (el) {
      var view = control(el, "Show", [["chg", "Change in new companies, 2022 to 2023"], ["closure", "Closures per 100 active companies, 2021"]], "chg");
      var chart = new Chart(make(el, 380), {
        type: "bar",
        data: { labels: [], datasets: [{ data: [], borderRadius: 2, backgroundColor: [] }] },
        options: {
          maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { callbacks: { label: function (c) {
            return view.value === "chg" ? " " + (c.parsed.y > 0 ? "+" : "") + c.parsed.y + "% new companies" : " " + c.parsed.y + " closures per 100 active companies"; } } } },
          scales: { y: { grid: { color: "#eee" } }, x: { grid: { display: false }, ticks: { autoSkip: false, maxRotation: 60, minRotation: 40 } } }
        }
      });
      function update() {
        var key = view.value;
        var rows = D.ai.slice().sort(function (a, b) { return b[key] - a[key]; });
        chart.data.labels = rows.map(function (r) { return r.industry; });
        chart.data.datasets[0].data = rows.map(function (r) { return r[key]; });
        chart.data.datasets[0].backgroundColor = rows.map(function (r) { return r.exposure === "High" ? RED : r.exposure === "Medium" ? "#B7791F" : GREY; });
        chart.options.scales.y.ticks = { callback: function (v) { return key === "chg" ? v + "%" : v; } };
        chart.update();
      }
      view.addEventListener("change", update); update();
      note(el, "Red: highly exposed to AI. Amber: medium. Grey: low. Exposure grouping is my judgement based on the ILO 2025 index. Source: BFS company demography.");
    }
  };

  document.querySelectorAll(".chart-embed[data-chart]").forEach(function (el) {
    var b = builders[el.getAttribute("data-chart")];
    if (b) { try { b(el); } catch (e) { el.textContent = "This chart could not load."; } }
  });
})();
