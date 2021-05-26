import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  '.hi',
  {
    x: 100,
  },
  {
    x: 0,
    duration: 2,
    ease: 'circ',
  }
);

gsap.fromTo(
  '.profile-image',
  {
    rotation: -10,
  },
  {
    scrollTrigger: {
      trigger: '.profile-image',
      start: 'top center',
      end: 'bottom top',
      ease: 'none',
      scrub: 1,
    },
    rotation: 30,
  }
);

gsap.fromTo(
  '.about-title',
  {
    y: 100,
    opacity: 0,
  },
  {
    scrollTrigger: {
      trigger: '.about-title',
      start: 'top 90%',
      end: '+=200',
      scrub: 1,
    },
    y: 0,
    opacity: 1,
  }
);

gsap.fromTo(
  '.about-desc',
  {
    y: 100,
    opacity: 0,
  },
  {
    scrollTrigger: {
      trigger: '.about-desc',
      start: 'top 80%',
      end: '+=100',
      scrub: 1,
    },
    y: 0,
    opacity: 1,
  }
);

gsap.fromTo(
  '.recent-work',
  {
    x: -100,
  },
  {
    scrollTrigger: {
      trigger: '.recent-work',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
    },
    x: 100,
  }
);
