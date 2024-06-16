let img = document.querySelector("img");
let borde_aparece = true;

img.addEventListener("click", () => {
  if (borde_aparece == true) {
    document.querySelector("img").style.border = "solid 2px red";
    borde_aparece = false;
  } else {
    document.querySelector("img").style.border = "";
    borde_aparece = true;
  }
});
