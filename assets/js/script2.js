document.querySelector("#verificar").addEventListener("click", () => {
  let valor1 = document.querySelector("#input1").value;
  let valor2 = document.querySelector("#input2").value;
  let valor3 = document.querySelector("#input3").value;

  let cantidad = Number(valor1) + Number(valor2) + Number(valor3);

  let texto = document.querySelector("#aviso");

  if (cantidad <= 10) {
    texto.innerHTML = "Llevas " + cantidad + " stickers.";
  } else {
    texto.innerHTML = "Llevas demasiados stickers.";
  }
});

alert("Puedes llevar un máximo de 10 stickers.");
