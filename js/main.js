"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //! Start Scripts

  const body = document.body; // переменная body

  // Запрет перетаскивания ссылок и картинок
  document.querySelectorAll("img, a").forEach((element) => {
    element.addEventListener("dragstart", (event) => {
      event.preventDefault();
    });
  });

  // /* ------------------- btnScrollTop -------------------- */
  const btnScrollTop = document.getElementById("btnScrollTop");
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      btnScrollTop.classList.add("show");
    } else {
      btnScrollTop.classList.remove("show");
    }
  }

  btnScrollTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  //!Плавный скролл по якорным ссылкам
  const anchors = document.querySelectorAll('a[href*="#"]');
  anchors.forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      event.preventDefault();

      const blockID = anchor.getAttribute("href").substring(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  const btnBurger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__menu");
  const menuClose = document.querySelector(".menu__close");

  if (menu && btnBurger) {
    btnBurger.addEventListener("click", (e) => {
      menu.classList.add("active");
    });

    menu.addEventListener("click", (e) => {
      if (e.target.classList.contains("menu")) {
        menu.classList.remove("active");
      }
    });

    window.addEventListener("click", (e) => {
      const target = e.target;
      if (
        !target.closest(".header__menu") &&
        !target.closest(".header__burger") &&
        menu.classList.contains("active")
      ) {
        menu.classList.remove("active");
        btnBurger.classList.remove("is-hide");
      }
    });
  }

  menuClose.addEventListener("click", () => {
    menu.classList.remove("active");
  });

  //! End Scripts
});
