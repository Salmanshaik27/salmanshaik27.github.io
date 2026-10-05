// Home page interactions: 3D work carousel, album view, blog wheel.
(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function pad(n) { return (n < 10 ? "0" : "") + n; }

  /* ---------- Work slider ---------- */
  var slider = document.querySelector(".slider");
  if (slider) {
    var step = function () { var c = slider.querySelector(".card"); return c ? c.offsetWidth + 18 : 320; };
    document.querySelectorAll(".slider-nav .arrow").forEach(function (b) {
      b.addEventListener("click", function () {
        var d = parseInt(b.getAttribute("data-dir"), 10);
        var max = slider.scrollWidth - slider.clientWidth - 2;
        if (d > 0 && slider.scrollLeft >= max) slider.scrollTo({ left: 0, behavior: reduce ? "auto" : "smooth" });
        else if (d < 0 && slider.scrollLeft <= 2) slider.scrollTo({ left: max, behavior: reduce ? "auto" : "smooth" });
        else slider.scrollBy({ left: d * step(), behavior: reduce ? "auto" : "smooth" });
      });
    });
    slider.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { e.preventDefault(); slider.scrollBy({ left: step(), behavior: "smooth" }); }
      if (e.key === "ArrowLeft") { e.preventDefault(); slider.scrollBy({ left: -step(), behavior: "smooth" }); }
    });
    // Drag with the mouse on desktop (touch already swipes natively)
    var down = false, sx = 0, sl = 0, moved = 0;
    slider.addEventListener("pointerdown", function (e) { if (e.pointerType !== "mouse") return; down = true; moved = 0; sx = e.clientX; sl = slider.scrollLeft; slider.classList.add("dragging"); });
    window.addEventListener("pointermove", function (e) { if (!down) return; moved = Math.max(moved, Math.abs(e.clientX - sx)); slider.scrollLeft = sl - (e.clientX - sx); });
    window.addEventListener("pointerup", function () { if (!down) return; down = false; slider.classList.remove("dragging"); });
    slider.addEventListener("click", function (e) { if (moved > 6) { e.preventDefault(); moved = 0; } }, true);
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
