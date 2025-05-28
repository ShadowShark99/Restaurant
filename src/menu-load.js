import "./styles.css";
import steve from "./mcSteve.png";

export const homeLoad = () => {
  

const content = document.querySelector("#content");
content.innerHTML = "";

const image = document.createElement("img");
image.src = steve;

const headline = document.createElement("h2");
headline.innerHTML = "We Have THE Cheapest Food AND <span class=\"pay\">Pay<span class=\"none\"> 0$</span> </span> All Our Workers Equally";

const description = document.createElement("div");
description.innerHTML = "From the Creation of the World, There were Chickens, who were there from the start. You are eating THE ORIGINAL, The Source of all chickens";

content.appendChild(image);
content.appendChild(headline);
content.appendChild(description);
alert("Restaurant is Opening soon");
};