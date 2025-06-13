// import images as relative image path won't work with vite/vercel.
import check from "../assets/check.svg";
import star from "../assets/star.svg";
import sushi12 from "../assets/sushi-12.png";
import sushi11 from "../assets/sushi-11.png";
import sushi10 from "../assets/sushi-10.png";

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("mobile-menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  toggle.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });

  // Optional: Close menu when a link is clicked
  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
    });
  });
});

// const trendingSushis = [
//   "Make Sushi",
//   "Nigiri Sushi",
//   "Oshizushi",
//   "Temaki Sushi",
//   "Uramaki Sushi",
//   "Inari Sushi",
// ];

// const trendingDrinks = [
//   "Oruncha",
//   "Ofukucha",
//   "Sakura Tea",
//   "Kombu-cha",
//   "Aojiru",
//   "Mugicha",
// ];

const menus = [
  {
    title: "Chezu Sushi",
    price: "$21.00",
  },
  {
    title: "Originale Sushi",
    price: "$21.00",
  },
  {
    title: "Ramen Legendo",
    price: "$21.00",
  },
];
