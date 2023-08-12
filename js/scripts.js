const navLinks = document.querySelectorAll(".scroll");
const forward = document.querySelectorAll(".material-symbols-sharp--1");
const backward = document.querySelectorAll(".material-symbols-sharp--2");
const demoBtn = document.querySelector(".video--demo");
const header = document.querySelector(".header");

function scrollToElement(element) {
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

const scrollHandler = (e) => {
  e.preventDefault();
  const target =
    e.target.closest(".footer__list-items") ||
    e.target.closest(".navigation__item");

  if (!target) return;
  const element = target.children[0].textContent.toLowerCase().trim();

  if (element === "home") {
    const scrollTo = document.querySelector(".header");
    scrollToElement(scrollTo);
  }
  if (element === "services") {
    const scrollTo = document.querySelector(".services");
    scrollToElement(scrollTo);
  }
  if (element === "projects") {
    const scrollTo = document.querySelector(".category");
    scrollToElement(scrollTo);
  }
  if (element === "about" || element === "about me") {
    const scrollTo = document.querySelector(".about");
    scrollToElement(scrollTo);
  }
};

navLinks.forEach((el) => {
  el.addEventListener("click", scrollHandler);
});

if (demoBtn)
  demoBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const video = document.querySelector(".video");
    scrollToElement(video);
  });

function resetSlide() {
  const parentEl = document.querySelectorAll(".slide-box");
  parentEl.forEach((el) => {
    const slideChild = el.querySelectorAll(".slide");
    goToSlide(slideChild, 0);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  scrollToElement(header);
  resetSlide();
});

function updateLayout() {
  const screenWidth = window.innerWidth;

  if (screenWidth > 900) {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide) => (slide.style.transform = "none"));
    forward.forEach((el) => {
      el.style.display = "none";
    });
    backward.forEach((el) => {
      el.style.display = "none";
    });
  } else if (screenWidth <= 900) {
    forward.forEach((el) => {
      el.style.display = "block";
    });
    backward.forEach((el) => {
      el.style.display = "block";
    });
  }
}

const observer = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entry.target === document.documentElement) {
      if (entry.contentRect.width > 900) {
        const slides = document.querySelectorAll(".slide");
        slides.forEach((slide) => (slide.style.transform = "none"));

        forward.forEach((el) => (el.style.display = "none"));
        backward.forEach((el) => {
          el.style.display = "none";
        });
      } else if (entry.contentRect.width <= 900) {
        const parentEl = document.querySelectorAll(".slide-box");
        parentEl.forEach((el) => {
          const slideChild = el.querySelectorAll(".slide");
          goToSlide(slideChild, 0);
        });
        forward.forEach((el) => {
          el.style.display = "block";
        });
        backward.forEach((el) => {
          el.style.display = "block";
        });
      }
    }
  }
});

function goToSlide(parentEl, slide) {
  parentEl.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
}

forward.forEach((el) => {
  el.addEventListener("click", (e) => {
    const parentEl = e.target.closest(".slide-box");
    const slideChild = parentEl.querySelectorAll(".slide");

    let curSlide = +parentEl.dataset.curSlide;
    let maxSlide = slideChild.length - 1;

    if (+parentEl.dataset.curSlide == maxSlide) {
      curSlide = 0;
      parentEl.dataset.curSlide = 0;
      goToSlide(slideChild, curSlide);
    } else {
      curSlide = curSlide + 1;
      +parentEl.dataset.curSlide++;
      goToSlide(slideChild, curSlide);
    }
  });
});

backward.forEach((el) => {
  el.addEventListener("click", (e) => {
    const parentEl = e.target.closest(".slide-box");
    const slideChild = parentEl.querySelectorAll(".slide");

    let curSlide = +parentEl.dataset.curSlide;
    let maxSlide = slideChild.length - 1;

    if (+parentEl.dataset.curSlide == 0) {
      curSlide = maxSlide;
      parentEl.dataset.curSlide = maxSlide;
      goToSlide(slideChild, curSlide);
    } else {
      curSlide = curSlide - 1;
      +parentEl.dataset.curSlide--;
      goToSlide(slideChild, curSlide);
    }
  });
});

// Attach observer to the document's root element
observer.observe(document.documentElement);
updateLayout();

const headerContainer = document.querySelector(".header__text-box");
const headerElements = headerContainer.querySelectorAll(".header-h3");

headerElements.forEach((header, index) => {
  const spans = header.querySelectorAll("span");

  spans.forEach((span, spanIndex) => {
    span.style.animationDelay = `${0.2 + spanIndex * 0.1}s`;
  });

  if (index === 1) {
    header.style.display = "none";
  }
});

function toggleHeaders() {
  headerElements.forEach((header) => {
    header.style.display = header.style.display === "none" ? "block" : "none";
  });
}

setInterval(toggleHeaders, 5000);

const allSections = document.querySelectorAll("section");
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
