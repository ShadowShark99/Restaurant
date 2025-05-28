import {homeLoad} from "./home-load";
import {aboutLoad} from "./about-load";
import {menuLoad} from "./menu-load";

const homeButton = document.querySelector("nav > button");
homeButton.addEventListener("click", () => {
  homeLoad();
});
const aboutButton = document.querySelector("nav > button + button + button");
aboutButton.addEventListener("click", () => {
  console.log("about clicked");
  aboutLoad();
});
const menuButton = document.querySelector("nav > button + button");
menuButton.addEventListener("click", () => {
  menuLoad();
});

homeLoad();