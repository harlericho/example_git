$.notify("Hello World", "success");
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
// click al boton forms
const formsButton = document.querySelector("#forms");
formsButton.addEventListener("click", () => {
  // redigirir a la form.html
  window.location.href = "form.html";
});
// click al boton modal
const modalButton = document.querySelector("#modal");
modalButton.addEventListener("click", () => {
  alert("Este es un modal de ejemplo");
});
