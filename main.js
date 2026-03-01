(function() {
  var EMAIL = 'miramidev@gmail.com';

  window.copyEmail = function(btn) {
    navigator.clipboard.writeText(EMAIL).then(function() {
      var tt = btn.querySelector('.tt');
      tt.classList.add('show');
      setTimeout(function() { tt.classList.remove('show'); }, 2000);
    });
  };

  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e, i) {
        if (e.isIntersecting) {
          setTimeout(function() { e.target.classList.add('on'); }, i * 60);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    items.forEach(function(el) { obs.observe(el); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal);
  } else {
    initReveal();
  }
})();
