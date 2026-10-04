// Home page interactions: 3D work carousel, album view, blog wheel.
(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function pad(n) { return (n < 10 ? "0" : "") + n; }

  /* ---------- Work carousel ---------- */
  var car = document.querySelector(".carousel");
  var ring = car && car.querySelector(".ring");
  if (ring) {
    var real = Array.prototype.slice.call(ring.querySelectorAll(".slide"));
    var N = real.length;
    // Fill the ring with copies so it always looks round, even with few items
    var M = N;
    while (M < 9) M += N;
    for (var k = N; k < M; k++) {
      var copy = real[k % N].cloneNode(true);
      copy.setAttribute("aria-hidden", "true");
      copy.setAttribute("tabindex", "-1");
      ring.appendChild(copy);
    }
    var slides = Array.prototype.slice.call(ring.querySelectorAll(".slide"));
    var step = 360 / M, rot = 0, radius = 0;
    var numEl = document.querySelector(".count .num");
    var totEl = document.querySelector(".count .total");
    var capT = document.querySelector(".cap-title");
    var capS = document.querySelector(".cap-sub");
    totEl.textContent = pad(N);

    function layout() {
      var w = slides[0].offsetWidth || 300;
      radius = Math.round((w / 2) / Math.tan(Math.PI / M) * 1.04);
      slides.forEach(function (s, i) { s.style.transform = "rotateY(" + (i * step) + "deg) translateZ(" + radius + "px)"; });
      apply(false);
    }
    function current() { return ((Math.round(-rot / step) % M) + M) % M; }
    function apply(animate) {
      ring.style.transition = animate && !reduce ? "transform 0.7s cubic-bezier(.2,.7,.2,1)" : "none";
      ring.style.transform = "translateZ(" + (-radius) + "px) rotateY(" + rot + "deg)";
      var c = current();
      slides.forEach(function (s, i) { s.classList.toggle("active", i === c); });
      var src = slides[c];
      numEl.textContent = pad((c % N) + 1);
      capT.textContent = src.getAttribute("data-title");
      capS.textContent = src.getAttribute("data-sub");
    }
    function snap() { rot = Math.round(rot / step) * step; apply(true); }
    function go(dir) { rot = Math.round(rot / step) * step - dir * step; apply(true); }

    // Drag and swipe
    var dragging = false, startX = 0, startRot = 0, moved = 0;
    car.addEventListener("pointerdown", function (e) {
      dragging = true; moved = 0; startX = e.clientX; startRot = rot;
      car.classList.add("grabbing");
      ring.style.transition = "none";
    });
    window.addEventListener("pointermove", function (e) {
      if (!dragging) return;
      var dx = e.clientX - startX; moved = Math.max(moved, Math.abs(dx));
      rot = startRot + dx * (step / (slides[0].offsetWidth * 0.9));
      ring.style.transform = "translateZ(" + (-radius) + "px) rotateY(" + rot + "deg)";
    });
    window.addEventListener("pointerup", function () {
      if (!dragging) return;
      dragging = false; car.classList.remove("grabbing"); snap();
    });
    // Clicks: centre slide opens, side slides rotate into view
    car.addEventListener("click", function (e) {
      var s = e.target.closest(".slide");
      if (!s) return;
      if (moved > 6) { e.preventDefault(); return; }
      var i = slides.indexOf(s), c = current();
      if (i !== c) {
        e.preventDefault();
        var diff = ((i - c) % M + M) % M; if (diff > M / 2) diff -= M;
        rot = Math.round(rot / step) * step - diff * step; apply(true);
      }
    });
    // Mouse wheel and trackpad
    var acc = 0, lock = false;
    car.addEventListener("wheel", function (e) {
      e.preventDefault();
      if (lock) return;
      acc += Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(acc) > 40) { go(acc > 0 ? 1 : -1); acc = 0; lock = true; setTimeout(function () { lock = false; }, 380); }
    }, { passive: false });
    // Keyboard
    car.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
      if (e.key === "Enter") { var s = slides[current()]; if (s) location.href = s.href; }
    });
    window.addEventListener("resize", layout);
    layout();
    // Gentle auto-turn until the visitor interacts
    if (!reduce) {
      var auto = setInterval(function () { go(1); }, 4200);
      ["pointerdown", "wheel", "keydown", "mouseenter"].forEach(function (ev) { car.addEventListener(ev, function () { clearInterval(auto); }, { once: true }); });
    }
  }

  /* ---------- Carousel / Album switch ---------- */
  var album = document.querySelector(".album");
  document.querySelectorAll(".mode button").forEach(function (b) {
    b.addEventListener("click", function () {
      var mode = b.getAttribute("data-mode");
      document.querySelectorAll(".mode button").forEach(function (x) {
        var on = x === b; x.classList.toggle("on", on); x.setAttribute("aria-pressed", on ? "true" : "false");
      });
      var isAlbum = mode === "album";
      document.body.classList.toggle("is-album", isAlbum);
      album.hidden = !isAlbum;
    });
  });
  var tiles = Array.prototype.slice.call(document.querySelectorAll(".tile"));
  var alT = document.querySelector(".al-title"), alN = document.querySelector(".al-num");
  function showTile(t) {
    var i = tiles.indexOf(t);
    alT.textContent = t.getAttribute("data-title");
    alN.textContent = pad(i + 1) + "/" + pad(tiles.length);
    tiles.forEach(function (x) { x.classList.toggle("dim", x !== t); });
  }
  tiles.forEach(function (t) {
    t.addEventListener("mouseenter", function () { showTile(t); });
    t.addEventListener("focus", function () { showTile(t); });
  });
  var grid = document.querySelector(".album-grid");
  if (grid) grid.addEventListener("mouseleave", function () { tiles.forEach(function (x) { x.classList.remove("dim"); }); });
  if (tiles.length) { alT.textContent = tiles[0].getAttribute("data-title"); alN.textContent = "01/" + pad(tiles.length); }

  /* ---------- Blog wheel ---------- */
  var wheel = document.querySelector(".wheel");
  var inner = wheel && wheel.querySelector(".wheel-inner");
  if (inner) {
    var items = Array.prototype.slice.call(inner.querySelectorAll(".w-item"));
    var wStep = 26, wRot = 0, wR = 0, K = items.length;
    var vertical = function () { return window.matchMedia("(min-width: 901px)").matches; };
    function wLayout() {
      wR = vertical() ? 150 : 0;
      items.forEach(function (it, i) {
        it.style.transform = vertical() ? "rotateX(" + (-i * wStep) + "deg) translateZ(" + wR + "px)" : "none";
      });
      wApply(false);
    }
    function wCur() { return Math.min(K - 1, Math.max(0, Math.round(wRot / wStep))); }
    function wApply(animate) {
      if (!vertical()) { inner.style.transform = "none"; items.forEach(function (it) { it.style.opacity = ""; }); return; }
      inner.style.transition = animate && !reduce ? "transform 0.6s cubic-bezier(.2,.7,.2,1)" : "none";
      inner.style.transform = "translateZ(" + (-wR) + "px) rotateX(" + wRot + "deg)";
      var c = wCur();
      items.forEach(function (it, i) {
        var d = Math.abs(i - c);
        it.classList.toggle("active", i === c);
        it.style.opacity = d > 3 ? 0 : (1 - d * 0.28);
      });
    }
    function wGo(dir) { wRot = Math.min((K - 1) * wStep, Math.max(0, (wCur() + dir) * wStep)); wApply(true); }
    var wLock = false;
    wheel.addEventListener("wheel", function (e) {
      if (!vertical()) return;
      e.preventDefault();
      if (wLock || Math.abs(e.deltaY) < 4) return;
      wGo(e.deltaY > 0 ? 1 : -1); wLock = true; setTimeout(function () { wLock = false; }, 300);
    }, { passive: false });
    wheel.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown") { e.preventDefault(); wGo(1); }
      if (e.key === "ArrowUp") { e.preventDefault(); wGo(-1); }
    });
    var wy = null, wStart = 0;
    wheel.addEventListener("pointerdown", function (e) { if (vertical()) { wy = e.clientY; wStart = wRot; } });
    window.addEventListener("pointermove", function (e) {
      if (wy === null) return;
      wRot = Math.min((K - 1) * wStep, Math.max(0, wStart - (e.clientY - wy) * 0.35));
      inner.style.transition = "none";
      inner.style.transform = "translateZ(" + (-wR) + "px) rotateX(" + wRot + "deg)";
    });
    window.addEventListener("pointerup", function () { if (wy !== null) { wy = null; wRot = wCur() * wStep; wApply(true); } });
    items.forEach(function (it, i) {
      it.addEventListener("click", function (e) {
        if (vertical() && i !== wCur()) { e.preventDefault(); wRot = i * wStep; wApply(true); }
      });
    });
    window.addEventListener("resize", wLayout);
    wLayout();
  }
})();
