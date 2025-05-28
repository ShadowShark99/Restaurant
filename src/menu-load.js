import "./styles.css";

export const menuLoad = () => {
  

const content = document.querySelector("#content");
content.innerHTML = "";

const headline = document.createElement("h1");
headline.innerHTML = "Menu";

const menu = document.createElement("ul");
const chicken = document.createElement("li");
chicken.innerHTML = "Chicken";
const rawChicken = document.createElement("li");
rawChicken.innerHTML = "Raw Chicken";
const pork = document.createElement("li");
pork.innerHTML = "Pork";
const rawPork = document.createElement("li");
rawPork.innerHTML = "Raw Pork";
const beef = document.createElement("li");
beef.innerHTML = "Beef";
const rawBeef = document.createElement("li");
rawBeef.innerHTML = "Raw Beef";
const fish = document.createElement("li");
fish.innerHTML = "Fish";
const rawFish = document.createElement("li");
rawFish.innerHTML = "Raw Fish";

menu.appendChild(chicken);
menu.appendChild(rawChicken);
menu.appendChild(pork);
menu.appendChild(rawPork);
menu.appendChild(beef);
menu.appendChild(rawBeef);
menu.appendChild(fish);
menu.appendChild(rawFish);



content.appendChild(headline);
content.appendChild(menu);

};