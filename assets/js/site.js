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

// Back button and back-to-top arrow on inner pages
(function () {
  var back = document.querySelector(".back-btn");
  if (back) {
    var ref = "";
    try { var r = new URL(document.referrer); if (r.origin === location.origin) ref = r.pathname; } catch (e) {}
    if (ref && ref !== location.pathname && history.length > 1) {
      back.textContent = /^\/blog\/.+/.test(ref) ? "\u2190 Back to the post" : /^\/work\/.+/.test(ref) ? "\u2190 Back to the case" : "\u2190 Back";
      back.hidden = false;
      back.addEventListener("click", function () { history.back(); });
    }
  }
  var top = document.querySelector(".to-top");
  var main = document.querySelector(".main");
  if (top && main) {
    var scroller = function () { return getComputedStyle(main).overflowY === "auto" ? main : window; };
    var pos = function () { var s = scroller(); return s === window ? window.scrollY : s.scrollTop; };
    var onScroll = function () { top.hidden = pos() < 500; };
    main.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    top.addEventListener("click", function () {
      var s = scroller(), smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      s.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
    });
  }
})();

// Table of contents for long articles
(function () {
  var list = document.querySelector(".toc-list");
  var body = document.querySelector(".lf-body");
  if (!list || !body) return;
  var heads = body.querySelectorAll("h2");
  if (heads.length < 3) { var t = document.querySelector(".lf-toc"); if (t) t.remove(); document.querySelector(".lf-grid").classList.add("no-toc"); return; }
  var used = {};
  heads.forEach(function (h) {
    if (!h.id) {
      var id = h.textContent.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60) || "section";
      while (used[id]) id += "-2";
      h.id = id;
    }
    used[h.id] = true;
    var li = document.createElement("li"), a = document.createElement("a");
    a.href = "#" + h.id; a.textContent = h.textContent.replace(/^\(|\)$/g, "");
    li.appendChild(a); list.appendChild(li);
  });
  var det = document.querySelector(".lf-toc details");
  if (det && window.matchMedia("(max-width: 900px)").matches) det.removeAttribute("open");
  if ("IntersectionObserver" in window) {
    var links = list.querySelectorAll("a");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) links.forEach(function (l) { l.classList.toggle("on", l.getAttribute("href") === "#" + e.target.id); });
      });
    }, { rootMargin: "0px 0px -70% 0px" });
    heads.forEach(function (h) { io.observe(h); });
  }
})();

// Reading progress bar on articles
(function () {
  var bar = document.querySelector(".read-progress");
  var main = document.querySelector(".main");
  if (!bar || !main) return;
  function update() {
    var inner = getComputedStyle(main).overflowY === "auto";
    var top = inner ? main.scrollTop : window.scrollY;
    var max = inner ? main.scrollHeight - main.clientHeight : document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (max > 0 ? Math.min(100, top / max * 100) : 0) + "%";
  }
  main.addEventListener("scroll", update, { passive: true });
  window.addEventListener("scroll", update, { passive: true });
  update();
})();
