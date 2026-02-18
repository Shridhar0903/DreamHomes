const menuIcon = document.getElementById("menuIcon");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeBtn");

menuIcon.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

// animation for SeaarchBar
document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.querySelector(".propertySearch");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    {
      threshold: 0.3,
    },
  );
  observer.observe(searchBar);
});

// animation for card
const autoShowElements = document.querySelectorAll(".autoShow");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 0.2 },
);

autoShowElements.forEach((el) => observer.observe(el));

// scrolling of property

const grid = document.querySelector(".propertyGrid");
const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");

function scrollAmount() {
  // Scroll by full visible width
  return grid.clientWidth;
}

rightBtn.addEventListener("click", () => {
  grid.scrollBy({
    left: scrollAmount(),
    behavior: "smooth",
  });
});

leftBtn.addEventListener("click", () => {
  grid.scrollBy({
    left: -scrollAmount(),
    behavior: "smooth",
  });
});

// counter

const counters = document.querySelectorAll(".counter");

const speed = 200;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target;
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateCount();
          observer.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 },
  );

  observer.observe(counter);
});
