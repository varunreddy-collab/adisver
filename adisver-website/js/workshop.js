const loader=document.querySelector('.loader');
window.addEventListener('load',()=>setTimeout(()=>loader?.classList.add('hide'),450));
const header=document.querySelector('.header');
window.addEventListener('scroll',()=>header?.classList.toggle('scrolled',window.scrollY>35),{passive:true});
const menu=document.querySelector('.menu');
const mobile=document.querySelector('.mobile-nav');
menu?.addEventListener('click',()=>{const open=mobile.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));mobile.setAttribute('aria-hidden',String(!open));});
mobile?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobile.classList.remove('open');menu?.setAttribute('aria-expanded','false');mobile.setAttribute('aria-hidden','true');}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const hero=document.querySelector('.hero-bg');
window.addEventListener('scroll',()=>{if(hero&&window.scrollY<innerHeight){hero.style.transform=`translateY(${window.scrollY*.08}px) scale(1.04)`;}},{passive:true});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const id=a.getAttribute('href');if(id&&id!=='#'){const target=document.querySelector(id);if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'});}}}));


/* Main-site navigation fix: workshop menu links always navigate to index.html. */
document.addEventListener('DOMContentLoaded', function () {
  const workshopMainLinks = document.querySelectorAll(
    '.header a[href^="index.html#"], .mobile-nav a[href^="index.html#"]'
  );

  workshopMainLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      const target = link.getAttribute('href');
      if (target) {
        window.location.href = target;
      }
    });
  });

  const menuButton = document.querySelector('.menu');
  const mobileNav = document.querySelector('.mobile-nav');

  if (menuButton && mobileNav) {
    const closeMobileMenu = function () {
      mobileNav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
    };

    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMobileMenu);
    });
  }
});
