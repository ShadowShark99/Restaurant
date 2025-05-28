import {homeLoad} from "./home-load";
import {aboutLoad} from "./about-load";


//const homeButton = document.querySelector("nav > button");
const aboutButton = document.querySelector("nav > button + button + button");
aboutButton.addEventListener("click", () => {
  console.log("about clicked");
  aboutLoad();
});
homeLoad();