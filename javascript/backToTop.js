document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.back-to-top');
  if (!btn) return;
  var target = document.querySelector('#main-content');

  // mostra/esconde o botão conforme scroll
  function update() {
    if (window.scrollY > 200) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', update, { passive: true });
  update();

  btn.addEventListener('click', function (ev) {
    ev.preventDefault();
    // rola para #main-content se existir, senão para o topo
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    btn.blur();
  });
});
