document.querySelector("#ingresar").addEventListener("click", ()=>{
    let digito1 = document.querySelector("#valor1").value;
    let digito2 = document.querySelector("#valor2").value;
    let digito3 = document.querySelector("#valor3").value;

    let contraseña = digito1 + digito2 + digito3;

    let estado = document.querySelector("#estado");

    if(contraseña === "911"){
        estado.innerHTML = "Password 1 Correcto.";
    }else if(contraseña === "714") {
        estado.innerHTML = "Password 2 Correcto.";
    }else {
        estado.innerHTML = "Password Incorrecto";
    }
});


