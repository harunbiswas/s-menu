const menuLink = document.querySelectorAll(".nav-menu-link");
const dropdown = document.querySelectorAll(".dropdown");
const close = document.querySelectorAll(".close");

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

for (let i = 0; i < submenu.length; i++) {
  submenu[i].addEventListener("click", () => {
    submenuBody.forEach((item) => {
      item.classList.remove("show");
    });
    submenu.forEach((item) => {
      item.classList.remove("active");
    });

    submenuBody[i].classList.add("show");
    submenu[i].classList.add("active");
  });
}
