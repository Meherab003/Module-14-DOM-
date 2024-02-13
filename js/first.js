console.log("first");

//getElementsByTagName
const sectionList = document.getElementsByTagName("li");
console.log(sectionList);

//getElementsByClassName
const sectionTitle = document.getElementsByClassName("section-title");
console.log(sectionTitle);

//getElementById
const section2 = document.getElementById("second-section");
console.log(section2);

const secondSectionTitle = document.getElementById("second-title");

//style
section2.style.backgroundColor = "lightblue";
section2.style.color = "blue";
section2.style.border = "2px solid tomato";
section2.style.borderRadius = "10px";
section2.style.padding = "20px";

secondSectionTitle.style.fontSize = "3rem";
secondSectionTitle.style.color = "tomato";
