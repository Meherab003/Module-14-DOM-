//1. Where to add
const placesList = document.getElementById("places-list");

//2. What to add child Elemnet
const li = document.createElement("li");
li.innerText = "Cox's Bazar";

//3. Add the child
placesList.appendChild(li);

//1. Where to add
const mainContainer = document.getElementById("main-content");

//what to add
const section = document.createElement("section");

const heading1 = document.createElement("h1");
heading1.innerText = "My favorite food";

const ul = document.createElement("ul");

const li1 = document.createElement("li");
li1.innerText = "Biriyani";
const li2 = document.createElement("li");
li2.innerText = "Morog polao";
const li3 = document.createElement("li");
li3.innerText = "Gorur mangsho";
const li4 = document.createElement("li");
li4.innerText = "Meatbox";

//3. how to add
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);

section.append(heading1);
section.appendChild(ul);

mainContainer.appendChild(section);

//create nodes Directly:

const section2 = document.createElement("section");

section2.innerHTML = ` 
    <h1>Cloths</h1>

    <ul>
        <li>Shirt</li>
        <li>Pant</li>
        <li>jacket</li>
        <li>Tye</li>
    </ul>
`;

mainContainer.appendChild(section2);
