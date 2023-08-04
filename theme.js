const menuLink = document.querySelectorAll(".nav-menu-link");
const dropdown = document.querySelectorAll(".dropdown");
const close = document.querySelectorAll(".close");

const closeDr = document.querySelectorAll(".close-dr");

//menu open
for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener("click", () => {
    dropdown.forEach((item) => {
      item.classList.remove("show");
    });
    menuLink.forEach((item) => {
      item.classList.remove("active");
    });

    dropdown[i].classList.add("show");
    menuLink[i].classList.add("active");
  });
}

closeDr.forEach((item) => {
  item.addEventListener("click", () => {
    dropdown.forEach((item) => {
      item.classList.remove("show");
    });
    menuLink.forEach((item) => {
      item.classList.remove("active");
    });
  });
});

// close
close.forEach((item) => {
  item.addEventListener("click", () => {
    dropdown.forEach((item) => {
      item.classList.remove("show");
    });
    menuLink.forEach((item) => {
      item.classList.remove("active");
    });
  });
});

// submenu active
const submenu = document.querySelectorAll(".submenu");
const submenuBody = document.querySelectorAll(".dropdown-left-menu-item-body");
const submenuClose = document.querySelectorAll(".inner-close");

for (let i = 0; i < submenu.length; i++) {
  submenu[i].addEventListener("click", (e) => {
    if (!submenuClose[i].contains(e.target)) {
      submenuBody.forEach((item) => {
        item.classList.remove("show");
      });
      submenu.forEach((item) => {
        item.classList.remove("active");
      });

      submenuBody[i].classList.add("show");
      submenu[i].classList.add("active");
    }
  });
}

for (let i = 0; i < submenuClose.length; i++) {
  submenuClose[i].addEventListener("click", (e) => {
    if (submenuClose[i].contains(e.target)) {
      submenuBody[i].classList.remove("show");
    }
  });
}

// toggle
const toggle = document.querySelector(".toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
  if (nav.classList.contains("show")) {
    nav.classList.remove("show");
  } else {
    nav.classList.add("show");
  }
});
