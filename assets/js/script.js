document.addEventListener("alpine:init", () => {
  // Dark Mode
  Alpine.store("darkMode", {
    dark: false,

    toggle() {
      this.dark = !this.dark;
      document.documentElement.setAttribute(
        "data-theme",
        this.dark ? "dark" : "light"
      );
    },
  });

  // Fetch Data
  const url = "https://portfolio-api-three-silk.vercel.app";
  Alpine.store("data", {
    projectDatas: [],

    async projectsFetch() {
      await fetch(`${url}/projects`)
        .then((response) => response.json())
        .then((data) => {
          this.projectDatas = data;
        });
    },
  });
});

$(document).ready(function () {
  const fullYear = new Date();
  let year = fullYear.getFullYear();
  $(".experience").text(year - 2021);
});

// Scroll
let sections = document.querySelectorAll("main section");
let navLinks = document.querySelectorAll("header .navbar .nav-link li");
let m_navLinks = document.querySelectorAll("header .m-nav-link li a");
const navbar = document.querySelector(".navbar");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY + 150;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
      });
      m_navLinks.forEach((links) => {
        links.classList.remove("active");
      });
      document
        .querySelector("header .navbar .nav-link li a[href*=" + id + "]")
        .parentElement.classList.add("active");

      document
        .querySelector("header .m-nav-link li a[href*=" + id + "]")
        .classList.add("active");
    }
  });
};

function successAlert() {
  Swal.fire({
    title: "Successfully sent",
    text: "Thank you for getting in touch with me.",
    icon: "success",
  });
}
