/* J and L HVAC — site script */

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('.app');
  const toggle = document.querySelector('.menu-toggle');
  const backdrop = document.querySelector('.sidebar-backdrop');

  if (toggle) {
    toggle.addEventListener('click', () => {
      app.classList.toggle('menu-open');
    });
  }
  if (backdrop) {
    backdrop.addEventListener('click', () => {
      app.classList.remove('menu-open');
    });
  }

  // Close sidebar when a nav link is clicked (mobile)
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      app.classList.remove('menu-open');
    });
  });

  // Highlight current nav item based on filename
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Gallery photo sliders — swipe on touch, arrows on desktop
  document.querySelectorAll('.gallery-slider').forEach(slider => {
    const track = slider.querySelector('.slides');
    const imgs = track.querySelectorAll('img');
    const dotsBox = slider.querySelector('.slide-dots');
    const caption = slider.parentElement.querySelector('.slide-caption');

    imgs.forEach((_, i) => {
      const dot = document.createElement('span');
      if (i === 0) dot.className = 'on';
      dotsBox.appendChild(dot);
    });
    const dots = dotsBox.querySelectorAll('span');

    const current = () => Math.round(track.scrollLeft / track.clientWidth);
    const goTo = i => track.scrollTo({ left: i * track.clientWidth, behavior: 'smooth' });

    slider.querySelector('.prev').addEventListener('click', () => goTo(Math.max(0, current() - 1)));
    slider.querySelector('.next').addEventListener('click', () => goTo(Math.min(imgs.length - 1, current() + 1)));

    track.addEventListener('scroll', () => {
      const i = current();
      dots.forEach((d, j) => d.classList.toggle('on', j === i));
      if (caption && imgs[i] && imgs[i].dataset.caption) caption.textContent = imgs[i].dataset.caption;
    }, { passive: true });
  });
});
