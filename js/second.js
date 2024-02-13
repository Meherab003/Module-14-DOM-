console.log("Second");

//append
const secondUl = document.getElementById("second-ul");

const li5 = document.createElement("li");

//innerText
li5.innerText = "list Number-5 ";

section2.appendChild(secondUl);
secondUl.appendChild(li5);

//innerText
secondSectionTitle.innerText = "title 2";

//innerHTML

const section3 = document.getElementById("third-section");
section3.innerHTML = `
    <h1>Hello World</h1>
    <p>dsghw;ghyarng i;yhwr;goudgblkwr;hv/ur;'gvhfug</p>
    <ul>
        <li>l1</li>
        <li>l2</li>
        <li>l3</li>
        <li>l4</li>
    </ul>
`;

//Nodes
//ChildNode:
