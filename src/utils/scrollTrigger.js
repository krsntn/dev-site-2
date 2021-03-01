import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  '.about-title',
  {
    y: 100,
    opacity: 0,
  },
  {
    scrollTrigger: {
      trigger: '.about-title',
      start: '-100% 90%',
      end: '+=100',
      scrub: 1,
    },
    y: 0,
    opacity: 1,
    duration: 3,
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
      start: 'top 90%',
      end: '+=100',
      scrub: 1,
    },
    y: 0,
    opacity: 1,
    duration: 3,
  }
);

gsap.to('.mountain3', {
  scrollTrigger: {
    trigger: '.mountain3',
    start: 'top',
    end: '50%',
    scrub: 1,
  },
  y: -100,
  duration: 3,
});

gsap.to('.mountain2', {
  scrollTrigger: {
    trigger: '.mountain2',
    start: 'top',
    end: '50%',
    scrub: 1,
  },
  y: -160,
  duration: 3,
});

gsap.to('.mountain1', {
  scrollTrigger: {
    trigger: '.mountain1',
    start: 'top',
    end: '50%',
    scrub: 1,
  },
  y: -240,
  duration: 3,
});

gsap.fromTo(
  '.black-shadow',
  {
    height: 0,
  },
  {
    scrollTrigger: {
      trigger: '.black-shadow',
      start: 'top bottom',
      end: 'top center',
      scrub: 1,
    },
    height: 240,
    duration: 3,
  }
);
