import "./styles.css";

export const aboutLoad = () => {
  
const content = document.querySelector("#content");
content.innerHTML = "";

const headline = document.createElement("h1");
headline.innerHTML = "About Us";

const description = document.createElement("div");
description.innerHTML = "FOunded May 28, 2025, the MC restaurant has never left a customer unsatisfied!<br>\
Our chickens are always kept alive until consumption, so we garuntee freshness for all customers.<br>\
Oh yeah also, We beat the enderdragon!";
//content.appendChild(image);
content.appendChild(headline);
content.appendChild(description);

};