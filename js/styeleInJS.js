const sections = document.querySelectorAll("section");
// console.log(section);
for (const section of sections) {
  //   console.log(section);
  section.style.border = "2px solid blue";
  section.style.marginBottom = "5px";
  section.style.borderRadius = "10px";
  section.style.paddingLeft = "10px";
  section.style.backgroundColor = "lightblue";
  section.style.boxShadow = "0px 0px 10px solid black";
}
