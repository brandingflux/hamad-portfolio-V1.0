/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== SERVICES MODAL ===============*/
// Get the modal
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

// When the user clicks on the button, open the modal
let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalViews.forEach((mv) => {
      mv.classList.remove("active-modal");
    });
  });
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/

/* Link active work */
const workLinks = document.querySelectorAll(".work__item");

function activeWork(workLink) {
  workLinks.forEach((wl) => {
    wl.classList.remove("active-work");
  });
  workLink.classList.add("active-work");
}

workLinks.forEach((wl) => {
  wl.addEventListener("click", () => {
    activeWork(wl);
  });
});

/*=============== SWIPER TESTIMONIAL ===============*/

let swiperTestimonial = new Swiper(".testimonial__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the light / icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
  // Update particles color
  if (document.body.classList.contains(lightTheme)) {
    // Light mode: use grey
    if (window.setParticlesColor) window.setParticlesColor('#888888');
  } else {
    // Dark mode: use white
    if (window.setParticlesColor) window.setParticlesColor('#ffffff');
  }
});

// On page load, set the correct particles color for the current theme
window.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    if (document.body.classList.contains('light-theme')) {
      if (window.setParticlesColor) window.setParticlesColor('#888888');
    } else {
      if (window.setParticlesColor) window.setParticlesColor('#ffffff');
    }
  }, 500); // Wait for particles to initialize
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(`.nav__menu`, {
  delay: 100,
  scale: 0.1,
  origin: "bottom",
  distance: "300px",
});

sr.reveal(`.home__data`);
sr.reveal(`.home__handle`, {
  delay: 100,
});

sr.reveal(`.home__social, .home__scroll`, {
  delay: 100,
  origin: "bottom",
});

sr.reveal(`.about__img`, {
  delay: 100,
  origin: "left",
  scale: 0.9,
  distance: "30px",
});

sr.reveal(`.about__data, .about__description, .about__button-contact`, {
  delay: 100,
  scale: 0.9,
  origin: "right",
  distance: "30px",
});

sr.reveal(`.skills__content`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

sr.reveal(`.services__title, services__button`, {
  delay: 100,
  scale: 0.9,
  origin: "top",
  distance: "30px",
});

sr.reveal(`.work__card`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

// sr.reveal(`.testimonial__container`, {
//   delay: 100,
//   scale: 0.9,
//   origin: "left",
//   distance: "30px",
// });

// sr.reveal(`.contact__info, .contact__title-info`, {
//   delay: 100,
//   scale: 0.9,
//   origin: "left",
//   distance: "30px",
// });

// sr.reveal(`.contact__form, .contact__title-form`, {
//   delay: 100,
//   scale: 0.9,
//   origin: "right",
//   distance: "30px",
// });

/*=============== WORK MODAL POPUP ===============*/
const workModalLink = document.getElementById('work-modal-link');

const workProjects = [
  {
    title: 'LunePin',
    subtitle: 'social media website',
    description: 'A social media platform for connecting people and sharing moments. Built with modern web technologies.',
    mainImg: 'assets/img/work1.jpg',
    gallery: ['assets/img/work1.jpg', 'assets/img/work2.jpg', 'assets/img/work3.jpg'],
    link: 'https://example.com/lunepin',
  },
  {
    title: 'Heal Well',
    subtitle: 'mobile app',
    description: 'A mobile app for health tracking and wellness improvement. Features include reminders, analytics, and more.',
    mainImg: 'assets/img/work2.jpg',
    gallery: ['assets/img/work2.jpg', 'assets/img/work3.jpg', 'assets/img/work4.jpg'],
    link: 'https://example.com/healwell',
  },
  {
    title: 'Morphic AI',
    subtitle: 'Generative Ai',
    description: 'An AI-powered platform for generating creative content and automating tasks.',
    mainImg: 'assets/img/work3.jpg',
    gallery: ['assets/img/work3.jpg', 'assets/img/work4.jpg', 'assets/img/work5.jpg'],
    link: 'https://example.com/morphicai',
  },
  {
    title: 'Necres Webpage',
    subtitle: 'React Website',
    description: 'A modern React-based website for businesses and portfolios.',
    mainImg: 'assets/img/work4.jpg',
    gallery: ['assets/img/work4.jpg', 'assets/img/work1.jpg', 'assets/img/work2.jpg'],
    link: 'https://example.com/necres',
  },
  {
    title: 'Whatsapp status saver',
    subtitle: 'mobile app',
    description: 'A handy app to save WhatsApp statuses easily to your device.',
    mainImg: 'assets/img/work5.jpg',
    gallery: ['assets/img/work5.jpg', 'assets/img/work1.jpg', 'assets/img/work3.jpg'],
    link: 'https://example.com/whatsappstatus',
  },
  {
    title: 'Unit Tracker',
    subtitle: 'Web App',
    description: 'Monitor your daily energy consumption, track weekly usage, and receive alerts when your energy is running low. Built for easy energy management.',
    mainImg: 'assets/img/work1.jpg',
    gallery: ['assets/img/work1.jpg', 'assets/img/work2.jpg', 'assets/img/work3.jpg'],
    link: 'https://energy-tracker-nine.vercel.app/',
  },
  {
    title: 'Course Web App',
    subtitle: 'Web App',
    description: 'A platform for smarter education management, personalized learning, and collaborative tools for schools, students, and individuals.',
    mainImg: 'assets/img/work2.jpg',
    gallery: ['assets/img/work2.jpg', 'assets/img/work3.jpg', 'assets/img/work4.jpg'],
    link: 'https://clarem-one.vercel.app/',
  },
  {
    title: 'TechPathAI',
    subtitle: 'Web App',
    description: 'AI-powered career guidance platform to help users discover and plan their tech career path with personalized recommendations.',
    mainImg: 'assets/img/work3.jpg',
    gallery: ['assets/img/work3.jpg', 'assets/img/work4.jpg', 'assets/img/work5.jpg'],
    link: 'https://example.com/techpathai',
  },
];

const workModal = document.getElementById('work-modal');
const workModalClose = document.getElementById('work-modal-close');
const workModalImg = document.getElementById('work-modal-img');
const workModalTitle = document.getElementById('work-modal-title');
const workModalSubtitle = document.getElementById('work-modal-subtitle');
const workModalDescription = document.getElementById('work-modal-description');
const workModalGallery = document.getElementById('work-modal-gallery');

window.addEventListener('DOMContentLoaded', function() {
  const workContainer = document.querySelector('.work__container');
  if (!workContainer) return;

  // Helper to get filter class
  function getFilterClass(title, subtitle) {
    // Use subtitle or title to determine category
    const sub = subtitle.toLowerCase();
    if (sub.includes('web')) return 'web';
    if (sub.includes('app')) return 'app';
    if (sub.includes('ai')) return 'ai';
    return 'web'; // default
  }

  // Clear existing cards
  workContainer.innerHTML = '';

  workProjects.forEach((project, idx) => {
    const filterClass = getFilterClass(project.title, project.subtitle);
    const card = document.createElement('div');
    card.className = `work__card mix ${filterClass}`;
    card.innerHTML = `
      <img src="${project.mainImg}" alt="" class="work__img">
      <h3 class="work__title">${project.title}</h3>
      <h5 class="work__subtitle">${project.subtitle}</h5>
      <a href="#" class="work__button" data-work-idx="${idx}">
        Demo <i class='bx bx-right-arrow work__icon'></i>
      </a>
    `;
    workContainer.appendChild(card);
  });

  // Initialize MixItUp AFTER cards are in the DOM
  let mixer = mixitup(workContainer, {
    selectors: {
      target: ".work__card",
    },
    animation: {
      duration: 300,
    },
  });

  // Fix: Always reset height/overflow after filtering
  mixer.on('mixEnd', function() {
    workContainer.style.height = 'auto';
    workContainer.style.overflow = 'visible';
    // Also fix parent .grid and .container
    const gridParent = workContainer.closest('.grid');
    if (gridParent) {
      gridParent.style.height = 'auto';
      gridParent.style.overflow = 'visible';
    }
    const containerParent = workContainer.closest('.container');
    if (containerParent) {
      containerParent.style.height = 'auto';
      containerParent.style.overflow = 'visible';
    }
  });

  // Re-attach modal event listeners for new buttons
  const workDemoBtns = document.querySelectorAll('.work__card .work__button');
  workDemoBtns.forEach((btn, idx) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const project = workProjects[idx];
      if (!project) return;
      workModalTitle.textContent = project.title;
      workModalSubtitle.textContent = project.subtitle;
      workModalDescription.textContent = project.description;
      workModalImg.src = project.mainImg;
      workModalImg.alt = project.title + ' image';
      workModalLink.href = project.link;
      // Gallery (up to 3 images)
      workModalGallery.innerHTML = '';
      (project.gallery || []).slice(0, 3).forEach((img, i) => {
        const imgElem = document.createElement('img');
        imgElem.src = img;
        imgElem.alt = project.title + ' screenshot ' + (i + 1);
        imgElem.className = i === 0 ? 'active' : '';
        imgElem.addEventListener('click', () => {
          workModalImg.src = img;
          workModalGallery.querySelectorAll('img').forEach(im => im.classList.remove('active'));
          imgElem.classList.add('active');
        });
        workModalGallery.appendChild(imgElem);
      });
      workModal.classList.add('active-work-modal');
    });
  });
});

workModalClose.addEventListener('click', () => {
  workModal.classList.remove('active-work-modal');
});

// Optional: close modal when clicking outside content
workModal.addEventListener('click', (e) => {
  if (e.target === workModal) {
    workModal.classList.remove('active-work-modal');
  }
});

// Data for services (Other Skills)
const servicesData = [
  {
    title: 'Product Designing',
    subtitle: 'Product Design & Development',
    description: 'I design and develop consumer products with creative ability and a hands-on approach, satisfying customer and market needs and trends.',
    gallery: ['assets/img/work1.jpg', 'assets/img/work2.jpg', 'assets/img/work3.jpg'],
    link: 'https://example.com/product-design',
  },
  {
    title: 'UI/UX Designing',
    subtitle: 'User Interface & Experience',
    description: 'I create user interfaces and experiences, focusing on usability, accessibility, and modern design trends.',
    gallery: ['assets/img/work2.jpg', 'assets/img/work3.jpg', 'assets/img/work4.jpg'],
    link: 'https://example.com/uiux',
  },
  {
    title: 'Visual Designing',
    subtitle: 'Visual Design & Branding',
    description: 'I position your company brand and create modern 3-D experiences, web pages, and UX element interactions.',
    gallery: ['assets/img/work3.jpg', 'assets/img/work4.jpg', 'assets/img/work5.jpg'],
    link: 'https://example.com/visual-design',
  },
  {
    title: 'Architectural Visualization',
    subtitle: '3D Architecture & Rendering',
    description: 'I create photorealistic architectural visualizations and 3D renders to bring your building concepts to life, helping clients and stakeholders visualize projects before they are built.',
    gallery: ['assets/img/work4.jpg', 'assets/img/work5.jpg', 'assets/img/work1.jpg'],
    link: 'https://example.com/architectural-visualization',
  },
  // Add more skills here as needed
];

// Add event listeners for services__button
const servicesBtns = document.querySelectorAll('.services__button');
servicesBtns.forEach((btn, idx) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const service = servicesData[idx];
    if (!service) return;
    workModalTitle.textContent = service.title;
    workModalSubtitle.textContent = service.subtitle;
    workModalDescription.textContent = service.description;
    workModalImg.src = service.gallery[0];
    workModalImg.alt = service.title + ' image';
    workModalLink.href = service.link;
    // Gallery (up to 3 images)
    workModalGallery.innerHTML = '';
    (service.gallery || []).slice(0, 3).forEach((img, i) => {
      const imgElem = document.createElement('img');
      imgElem.src = img;
      imgElem.alt = service.title + ' screenshot ' + (i + 1);
      imgElem.className = i === 0 ? 'active' : '';
      imgElem.addEventListener('click', () => {
        workModalImg.src = img;
        workModalGallery.querySelectorAll('img').forEach(im => im.classList.remove('active'));
        imgElem.classList.add('active');
      });
      workModalGallery.appendChild(imgElem);
    });
    workModal.classList.add('active-work-modal');
  });
});
