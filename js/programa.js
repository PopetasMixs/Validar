const usuarioField = document.querySelector("[name=usuario]");
const contraseñaField = document.querySelector("[name=contraseña]");
const correoField = document.querySelector("[name=correo]");

const validacionCampoVacio = (e) =>{
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.length === 0) {
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error")
        field.nextElementSibling.innerText = `Se necesita ${field.name}`
    } else { 
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error")
        field.nextElementSibling.innerText = ""
    }
    
}


usuarioField.addEventListener("blur", validacionCampoVacio);
contraseñaField.addEventListener("blur", validacionCampoVacio);
correoField.addEventListener("blur", validacionCampoVacio);