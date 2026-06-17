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
});
