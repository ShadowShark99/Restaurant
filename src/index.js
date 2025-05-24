import steve from "./mcSteve.png" 


const content = document.querySelector("#content");

const image = document.createElement("img");
image.src = steve;

const headline = document.createElement("h2");
headline.innerHTML = "Cheapest Food NOT Because Lowest Wages :D";

const description = document.createElement("div");
description.innerHTML = "All our food is made with original chicken from the first chicken that were created along with the world";

content.appendChild(image);
content.appendChild(headline);
content.appendChild(description);
alert("Restaurant is Opening soon");