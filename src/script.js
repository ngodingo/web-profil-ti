const body = document.querySelector('body');
const mainContainer = document.querySelector('main');

const state = {};

const breakpoint = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

const isSmScreen = () => body.clientWidth >= breakpoint.sm;
const isMdScreen = () => body.clientWidth >= breakpoint.md;
const isLgScreen = () => body.clientWidth >= breakpoint.lg;

/**
 *
 * ==== NAVIGATION ====
 *
 */

const navMenuButton = document.querySelector('#nav-menu-btn');
const navMenuIcon = document.querySelector('#nav-menu-icon');
const navMenu = document.querySelector('#nav-menu');
const navMenuItems = document.querySelectorAll('.nav-menu-item');
const scrollToTopBtn = document.querySelector('#scroll-top-btn');

state.isNavOpen = false;

function openNavigation() {
  navMenuIcon.src = '/public/icons/close.svg';
  navMenu.classList.remove('translate-x-full');
  mainContainer.classList.add('lg:pr-52');
}

function closeNavigation() {
  navMenuIcon.src = '/public/icons/menu.svg';
  navMenu.classList.add('translate-x-full');
  mainContainer.classList.remove('lg:pr-52');
}

function showNavigationOnLgScreen() {
  if (isLgScreen()) {
    state.isNavOpen = true;
    openNavigation();
  } else {
    state.isNavOpen = false;
    closeNavigation();
  }
}

window.addEventListener('load', () => {
  showNavigationOnLgScreen();
});

window.addEventListener('resize', () => {
  showNavigationOnLgScreen();
});

navMenuButton.addEventListener('click', () => {
  state.isNavOpen = !state.isNavOpen;

  if (state.isNavOpen) {
    openNavigation();
  } else {
    closeNavigation();
  }
});

navMenuItems.forEach((navMenuItem) => {
  navMenuItem.addEventListener('click', () => {
    if (!isLgScreen()) {
      setTimeout(() => {
        state.isNavOpen = false;
        closeNavigation();
      }, 100);
    }
  });
});

scrollToTopBtn.addEventListener('click', () => {
  if (!isLgScreen()) {
    setTimeout(() => {
      state.isNavOpen = false;
      closeNavigation();
    }, 100);
  }
});

/**
 *
 * ==== HEADLINE SECTION ====
 *
 */

function typingCodeAnimationHeadline() {
  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  const headlineCode = document.querySelector('#headline-code');
  const textCursor = document.querySelector('#text-cursor');
  const codeText = 'Collaborate, innovate, and create the future together!';
  const ignored = 11;
  const n = codeText.length - ignored;

  async function blinkCursor(n) {
    for (let i = 0; i < 2 * n; i++) {
      await timer(250);
      textCursor.classList.toggle('bg-white');
      textCursor.classList.toggle('bg-gray');
      await timer(250);
    }
  }

  async function type() {
    headlineCode.textContent = codeText.slice(0, ignored);
    while (true) {
      await blinkCursor(2);
      for (let i = 0; i < n; i++) {
        headlineCode.textContent = codeText.slice(0, ignored + i + 1);
        await timer(70);
      }
      await blinkCursor(4);
      for (let i = 0; i < n; i++) {
        headlineCode.textContent = codeText.slice(0, ignored + n - i - 1);
        await timer(70);
      }
    }
  }
  type();
}
typingCodeAnimationHeadline();


/**
 *
 * ==== EVENT SECTION ====
 *
 */
const cards = document.getElementById('cards-event');
const card1 = document.getElementById('card1-event');
const card2 = document.getElementById('card2-event');
const card3 = document.getElementById('card3-event');

cards.addEventListener('mouseover', function() {
  card1.classList.remove('rotate-[17deg]');
  card2.classList.remove('rotate-[4deg]');
  card3.classList.remove('rotate-[-17deg]');
  
  // Add Tailwind CSS transition classes for smooth transition
  card1.classList.add( 'transition-transform');
  card2.classList.add( 'transition-transform');
  card3.classList.add( 'transition-transform');
});

cards.addEventListener('mouseout', function() {
  card1.classList.add('rotate-[17deg]');
  card2.classList.add('rotate-[4deg]');
  card3.classList.add('rotate-[-17deg]');
});