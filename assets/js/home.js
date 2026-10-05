// Home page interactions: 3D work carousel, album view, blog wheel.
(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function pad(n) { return (n < 10 ? "0" : "") + n; }

  /* ---------- Work carousel ---------- */
  var car = document.querySelector(".carousel");
  var ring = car && car.querySelector(".ring");
  var phone = window.matchMedia("(max-width: 900px)");
  // Switching between phone and desktop width rebuilds the page once
  if (phone.addEventListener) phone.addEventListener("change", function () { location.reload(); });
  if (ring && phone.matches) {
    // Phones: simple swipeable cards, arrows scroll one card
    car.classList.add("flat");
    document.querySelectorAll(".arrow").forEach(function (b) {
      b.addEventListener("click", function () {
        var d = parseInt(b.getAttribute("data-dir"), 10);
        var card = ring.querySelector(".slide");
        ring.scrollBy({ left: d * ((card ? card.offsetWidth : 300) + 14), behavior: reduce ? "auto" : "smooth" });
      });
    });
    ring.querySelectorAll(".slide").forEach(function (s) { s.classList.add("active"); });
  } else if (ring) {
    var real = Array.prototype.slice.call(ring.querySelectorAll(".slide"));
    var N = real.length;
    // Fill the ring with copies so it always looks round, even with few items
    var M = N;
    while (M < 8) M += N;
    for (var k = N; k < M; k++) {
      var copy = real[k % N].cloneNode(true);
      copy.setAttribute("aria-hidden", "true");
      copy.querySelectorAll("a").forEach(function (a) { a.setAttribute("tabindex", "-1"); });
      ring.appendChild(copy);
    }
    var slides = Array.prototype.slice.call(ring.querySelectorAll(".slide"));
    var step = 360 / M, rot = 0, radius = 0;

    function layout() {
      var w = slides[0].offsetWidth || 320;
      radius = Math.round((w / 2) / Math.tan(Math.PI / M) * 1.06);
      slides.forEach(function (s, i) { s.style.transform = "rotateY(" + (i * step) + "deg) translateZ(" + radius + "px)"; });
      apply(false);
    }
    function current() { return ((Math.round(-rot / step) % M) + M) % M; }
    function apply(animate) {
      ring.style.transition = animate && !reduce ? "transform 0.75s cubic-bezier(.2,.7,.2,1)" : "none";
      ring.style.transform = "translateZ(" + (-radius) + "px) rotateY(" + rot + "deg)";
      var c = current();
      slides.forEach(function (s, i) {
        var on = i === c;
        s.classList.toggle("active", on);
        if (i < N) s.querySelectorAll("a").forEach(function (a) { if (!a.classList.contains("s-img")) a.setAttribute("tabindex", on ? "0" : "-1"); });
      });
    }
    function snap() { rot = Math.round(rot / step) * step; apply(true); }
    function go(dir) { rot = Math.round(rot / step) * step - dir * step; apply(true); }
    document.querySelectorAll(".arrow").forEach(function (b) {
      b.addEventListener("click", function () { stopAuto(); go(parseInt(b.getAttribute("data-dir"), 10)); });
    });

    // Drag and swipe
    var dragging = false, startX = 0, startRot = 0, moved = 0;
    car.addEventListener("pointerdown", function (e) {
      dragging = true; moved = 0; startX = e.clientX; startRot = rot;
      car.classList.add("grabbing"); ring.style.transition = "none"; stopAuto();
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
    // Clicks: links work on the front card; side cards turn into view
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
    // Keyboard
    car.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { e.preventDefault(); stopAuto(); go(1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); stopAuto(); go(-1); }
    });
    window.addEventListener("resize", layout);
    layout();
    // Gentle auto-turn until the visitor interacts
    var auto = null;
    function stopAuto() { if (auto) { clearInterval(auto); auto = null; } }
    if (!reduce) {
      auto = setInterval(function () { go(1); }, 5000);
      car.addEventListener("mouseenter", stopAuto, { once: true });
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
  /* ---------- Blog wheel: an endless loop ---------- */
  var wheel = document.querySelector(".wheel");
  var inner = wheel && wheel.querySelector(".wheel-inner");
  if (inner) {
    var vertical = window.matchMedia("(min-width: 901px)").matches;
    var realItems = Array.prototype.slice.call(inner.querySelectorAll(".w-item"));
    var K = realItems.length;
    if (vertical && K > 0) {
      // Fill a full circle with copies so the wheel can turn forever
      var M = K;
      while (M < 12) M += K;
      for (var q = K; q < M; q++) {
        var cp = realItems[q % K].cloneNode(true);
        cp.setAttribute("aria-hidden", "true");
        cp.setAttribute("tabindex", "-1");
        inner.appendChild(cp);
      }
      var items = Array.prototype.slice.call(inner.querySelectorAll(".w-item"));
      var wStep = 360 / M, wRot = 0;
      var wR = Math.round(40 / Math.sin(Math.PI / M));
      var mod = function (n) { return ((n % M) + M) % M; };
      var wCur = function () { return mod(Math.round(wRot / wStep)); };
      items.forEach(function (it, i) { it.style.transform = "rotateX(" + (-i * wStep) + "deg) translateZ(" + wR + "px)"; });
      var wApply = function (animate) {
        inner.style.transition = animate && !reduce ? "transform 0.55s cubic-bezier(.2,.7,.2,1)" : "none";
        inner.style.transform = "translateZ(" + (-wR) + "px) rotateX(" + wRot + "deg)";
        var c = wCur();
        items.forEach(function (it, i) {
          var d = Math.abs(i - c); d = Math.min(d, M - d);
          it.classList.toggle("active", i === c);
          it.style.opacity = d > 3 ? 0 : (1 - d * 0.27);
          it.style.pointerEvents = d > 3 ? "none" : "";
        });
      };
      var wGo = function (dir) { wRot = Math.round(wRot / wStep) * wStep + dir * wStep; wApply(true); };
      var wLock = false;
      wheel.addEventListener("wheel", function (e) {
        e.preventDefault();
        if (wLock || Math.abs(e.deltaY) < 4) return;
        wGo(e.deltaY > 0 ? 1 : -1); wLock = true; setTimeout(function () { wLock = false; }, 280);
      }, { passive: false });
      wheel.addEventListener("keydown", function (e) {
        if (e.key === "ArrowDown") { e.preventDefault(); wGo(1); }
        if (e.key === "ArrowUp") { e.preventDefault(); wGo(-1); }
      });
      var wy = null, wStart = 0, wMoved = 0;
      wheel.addEventListener("pointerdown", function (e) { wy = e.clientY; wStart = wRot; wMoved = 0; });
      window.addEventListener("pointermove", function (e) {
        if (wy === null) return;
        wMoved = Math.max(wMoved, Math.abs(e.clientY - wy));
        wRot = wStart - (e.clientY - wy) * 0.4;
        inner.style.transition = "none";
        inner.style.transform = "translateZ(" + (-wR) + "px) rotateX(" + wRot + "deg)";
      });
      window.addEventListener("pointerup", function () { if (wy !== null) { wy = null; wRot = Math.round(wRot / wStep) * wStep; wApply(true); } });
      document.querySelectorAll(".w-arrow").forEach(function (b) {
        b.addEventListener("click", function () { wGo(parseInt(b.getAttribute("data-wdir"), 10)); });
      });
      items.forEach(function (it, i) {
        it.addEventListener("click", function (e) {
          if (wMoved > 6) { e.preventDefault(); return; }
          var c = wCur();
          if (i !== c) {
            e.preventDefault();
            var diff = mod(i - c); if (diff > M / 2) diff -= M;
            wRot = Math.round(wRot / wStep) * wStep + diff * wStep; wApply(true);
          }
        });
      });
      wApply(false);
    } else {
      document.querySelectorAll(".w-arrow").forEach(function (b) {
        b.addEventListener("click", function () {
          var d = parseInt(b.getAttribute("data-wdir"), 10);
          wheel.scrollBy({ left: d * wheel.clientWidth * 0.75, behavior: reduce ? "auto" : "smooth" });
        });
      });
    }
  }
})();
