// window.addEventListener("load", () => {
//   alert("aprendiendo git con ramas master y develop");
// });
const button = document.querySelector("#click");
button.addEventListener("click", () => {
  alert("aprendiendo git con ramas master y develop");
});
// click al boton info
const infoButton = document.querySelector("#info");
infoButton.addEventListener("click", () => {
  alert("Con las ramas de git puedes trabajar en paralelo");
});
// click al boton details
const detailsButton = document.querySelector("#details");
detailsButton.addEventListener("click", () => {
  alert("Este ejercicio esta realizado por Karlo Xavier Chok");
});
// click en el menu git del navbar
const gitButton = document.querySelector("#git_link");
gitButton.addEventListener("click", () => {
  alert("Navbar de git");
});
// click en el menu details del navbar
const detailsButton2 = document.querySelector("#details_link");
detailsButton2.addEventListener("click", () => {
  alert("Navbar de detalles");
});
