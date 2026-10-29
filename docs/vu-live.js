/* Live needle VU meters laid over the Vintage screenshot (same idea as the Android page).
   The faces are drawn with the app's own geometry (VuNeedleDrawable: 0..20 scale, red zone from
   16, pivot below the window, PEAK lamp), at the size they have in the 466x1093 screenshot, so
   they cover the screenshot's meters exactly. The needles move like music, not like the real
   measurement in the app - the page plays no sound. */
(function () {
  var W = 208, H = 68;                                 // face size in the screenshot, px
  var CX = W / 2, CY = H * 1.55, R = H * 1.24, SWEEP = 42, RED = 0.8, NS = 'http://www.w3.org/2000/svg';
  var INK = '#2A2218', REDC = '#C8261B';

  function ang(pos) { return (-SWEEP + 2 * SWEEP * pos) * Math.PI / 180; }
  function pol(r, a) { return [CX + r * Math.sin(a), CY - r * Math.cos(a)]; }
  function f(n) { return n.toFixed(2); }
  function arc(from, to, color, size) {
    var p = pol(R, ang(from)), q = pol(R, ang(to));
    return '<path d="M' + f(p[0]) + ' ' + f(p[1]) + ' A' + f(R) + ' ' + f(R) + ' 0 0 1 ' + f(q[0]) + ' ' + f(q[1]) +
           '" fill="none" stroke="' + color + '" stroke-width="' + size + '"/>';
  }

  function face(ch, id) {
    var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" aria-hidden="true"><defs>' +
      '<linearGradient id="f' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F8E2A6"/><stop offset="1" stop-color="#E7B356"/></linearGradient>' +
      '<linearGradient id="g' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="0.27"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>' +
      '<clipPath id="c' + id + '"><rect x="0.5" y="0.5" width="' + (W - 1) + '" height="' + (H - 1) + '" rx="6"/></clipPath></defs>' +
      '<g clip-path="url(#c' + id + ')"><rect width="' + W + '" height="' + H + '" fill="url(#f' + id + ')"/>' +
      arc(0, RED, INK, 1.2) + arc(RED, 1, REDC, 3);
    var ls = Math.max(7, H * 0.13);
    s += '<g font-family="Segoe UI,Open Sans,Arial,sans-serif" text-anchor="middle" dominant-baseline="central">';
    for (var v = 0; v <= 20; v++) {
      var pos = v / 20, a = ang(pos), major = v % 5 === 0, red = pos > RED + 0.001;
      var i = pol(R + (major ? 0 : 1), a), o = pol(R + (major ? 6 : 3.5), a);
      s += '<line x1="' + f(i[0]) + '" y1="' + f(i[1]) + '" x2="' + f(o[0]) + '" y2="' + f(o[1]) +
           '" stroke="' + (red ? REDC : INK) + '" stroke-width="' + (major ? 1.3 : 0.9) + '"/>';
      if (major) {
        var l = pol(R + 11 + ls * 0.6, a);
        s += '<text x="' + f(l[0]) + '" y="' + f(l[1] + ls * 0.05) + '" font-size="' + f(ls) + '" fill="' + (pos >= RED ? REDC : INK) + '">' + v + '</text>';
      }
    }
    s += '<text x="' + CX + '" y="' + f(H * 0.61) + '" font-size="' + f(Math.max(8, H * 0.17)) + '" fill="' + INK + '">VU</text>' +
         '<text x="7" y="' + f(H * 0.86) + '" font-size="' + f(Math.max(7, H * 0.14)) + '" fill="' + INK + '" text-anchor="start">' + ch + '</text></g>';
    var lr = Math.max(2.5, H * 0.045);
    s += '<circle class="glow" cx="' + (W - 10) + '" cy="9" r="' + f(lr * 2) + '" fill="rgba(255,59,32,0.27)"/>' +
         '<circle class="peak" cx="' + (W - 10) + '" cy="9" r="' + f(lr) + '"/>' +
         '<g class="needle"><line x1="' + f(CX + 1.5) + '" y1="' + f(CY + 1.5) + '" x2="' + f(CX + 1.5) + '" y2="' + f(CY - R - 4 + 1.5) +
         '" stroke="rgba(0,0,0,0.24)" stroke-width="2.5" stroke-linecap="round"/>' +
         '<line x1="' + f(CX) + '" y1="' + f(CY) + '" x2="' + f(CX) + '" y2="' + f(CY - R - 4) + '" stroke="#141414" stroke-width="1.5" stroke-linecap="round"/></g>' +
         '<rect width="' + W + '" height="' + f(H * 0.4) + '" fill="url(#g' + id + ')"/></g>' +
         '<rect x="0.5" y="0.5" width="' + (W - 1) + '" height="' + (H - 1) + '" rx="6" fill="none" stroke="#2B2B2B"/></svg>';
    return s;
  }

  function build(box) {
    var photo = box.querySelector('.vu-photo');
    photo.insertAdjacentHTML('beforeend', '<div class="vu-face l">' + face('L', 'l') + '</div><div class="vu-face r">' + face('R', 'r') + '</div>');
    var needles = box.querySelectorAll('.needle');
    var auto = box.querySelector('.vu-auto'), range = box.querySelector('.vu-range'), read = box.querySelector('.vu-read');
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    var isAuto = !reduce, level = 0, target = 0.55, nextAt = 0, last = 0, peakUntil = 0, peakOn = false, visible = true;

    function setAuto(on) { isAuto = on; auto.setAttribute('aria-pressed', on ? 'true' : 'false'); }
    function show(p) { read.textContent = Math.round(p * 20); }
    setAuto(isAuto);
    if (!isAuto) { target = level = 0.6; range.value = 12; show(level); }
    auto.addEventListener('click', function () { setAuto(!isAuto); });
    range.addEventListener('input', function () { setAuto(false); target = range.value / 20; show(target); });

    box.querySelectorAll('[data-finish]').forEach(function (b) {
      b.addEventListener('click', function () {
        var fin = b.getAttribute('data-finish');
        box.setAttribute('data-shown', fin);
        box.querySelectorAll('[data-finish]').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      });
    });

    if ('IntersectionObserver' in window)
      new IntersectionObserver(function (e) { visible = e[0].isIntersecting; }).observe(box);

    function frame(now) {
      var dt = last ? Math.min(now - last, 100) : 16; last = now;
      if (visible) {
        if (isAuto && now >= nextAt) {                  // music-like: mostly 9..15, now and then into the red
          var r = Math.random();
          target = r < 0.1 ? 0.82 + Math.random() * 0.15 : r < 0.3 ? 0.3 + Math.random() * 0.15 : 0.45 + Math.random() * 0.3;
          nextAt = now + 550 + Math.random() * 700;
        }
        level += (target - level) * (1 - Math.exp(-dt / (isAuto ? 420 : 180)));   // VU ballistics
        var deg = (-SWEEP + 2 * SWEEP * Math.max(-0.03, Math.min(1.05, level))).toFixed(2);
        for (var i = 0; i < needles.length; i++)
          needles[i].setAttribute('transform', 'rotate(' + deg + ' ' + CX + ' ' + f(CY) + ')');
        if (level > RED) peakUntil = now + 450;
        if ((now < peakUntil) !== peakOn) { peakOn = !peakOn; box.classList.toggle('vu-peak', peakOn); }
        if (isAuto) { range.value = (level * 20).toFixed(1); show(level); }
      }
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  function init() { document.querySelectorAll('.vu-showcase').forEach(build); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
