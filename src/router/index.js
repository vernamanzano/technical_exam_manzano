import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
  ],
});

const scrollSmooth = (targetSelector, duration = 800, offset = 0) => {
  const target = document.querySelector(targetSelector);

  if (!target) {
    console.error(`Target element "${targetSelector}" not found.`);
    return;
  }

  const startPosition = window.scrollY;
  const distance = target.getBoundingClientRect().top + window.scrollY - startPosition - offset;
  let startTime = null;

  const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  const animateScroll = (timestamp) => {
    if (!startTime) startTime = timestamp;

    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);

    window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

const setActiveLink = (activeLink) => {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    if (link === activeLink) {
      link.classList.add('border-b-2', 'border-zucchini');
    } else {
      link.classList.remove('border-b-2', 'border-zucchini');
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetSelector = link.getAttribute('href');
      const scrollTo = targetSelector === '#home' ? 'body' : targetSelector;

      scrollSmooth(scrollTo);
      setActiveLink(link);
    });
  });

  // Set the default active link to "Home"
  setActiveLink(links[0]); // Assuming "Home" link is the first one in the list
});

export default router;
