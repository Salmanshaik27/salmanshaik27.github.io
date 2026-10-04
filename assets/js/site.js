// Live city clock and slide-in panels. Used on every page.
(function () {
  // Clock
  var clock = document.querySelector(".clock");
  if (clock) {
    var out = clock.querySelector(".time");
    var tz = clock.getAttribute("data-tz") || "Europe/Zurich";
    var fmt;
    try {
      fmt = new Intl.DateTimeFormat("en-GB", { timeZone: tz, hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });
    } catch (e) {
      fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });
    }
    var tick = function () { out.textContent = fmt.format(new Date()).toUpperCase(); };
    tick();
    setInterval(tick, 1000);
  }

  // Panels
  var scrim = document.querySelector(".scrim");
  var lastTrigger = null;
  function closeAll() {
    document.querySelectorAll(".panel.open").forEach(function (p) {
      p.classList.remove("open");
      setTimeout(function () { if (!p.classList.contains("open")) p.hidden = true; }, 400);
    });
    if (scrim) { scrim.classList.remove("open"); setTimeout(function () { scrim.hidden = true; }, 400); }
    document.body.classList.remove("panel-open");
    if (lastTrigger) lastTrigger.focus();
  }
  function open(name, trigger) {
    var panel = document.getElementById("panel-" + name);
    if (!panel) return;
    document.querySelectorAll(".panel.open").forEach(function (p) { if (p !== panel) { p.classList.remove("open"); p.hidden = true; } });
    lastTrigger = trigger || lastTrigger;
    panel.hidden = false;
    if (scrim) scrim.hidden = false;
    requestAnimationFrame(function () { requestAnimationFrame(function () {
      panel.classList.add("open");
      if (scrim) scrim.classList.add("open");
    }); });
    panel.scrollTop = 0;
    document.body.classList.add("panel-open");
    var closeBtn = panel.querySelector(".close");
    if (closeBtn) setTimeout(function () { closeBtn.focus(); }, 50);
  }
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-panel]");
    if (t) { e.preventDefault(); open(t.getAttribute("data-panel"), t); return; }
    if (e.target.closest("[data-close]")) { e.preventDefault(); closeAll(); }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && document.body.classList.contains("panel-open")) closeAll();
  });
  // Open a panel from the address, for example salmanshaik.ch/#who
  var h = location.hash.replace("#", "");
  if (["who", "bring", "looking", "contact"].indexOf(h) > -1) open(h);
})();
