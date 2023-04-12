const usuarioField = document.querySelector("[name=usuario]");
const contraseñaField = document.querySelector("[name=contraseña]");
const correoField = document.querySelector("[name=correo]");

const validacionCampoVacio = ( mensaje,e,) =>{
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.trim().length === 0) {
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error")
        field.nextElementSibling.innerText = mensaje;
    } else { 
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error")
        field.nextElementSibling.innerText = ""
    }
    
}

const validarCorreos = e => {
    const field = e.target;
    const fieldValue = e.target.value;
    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if (fieldValue.trim().length > 5 && !regex.test(fieldValue)) {
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error")
        field.nextElementSibling.innerText = "Por favor dijite un correo valido";
    } else { 
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error")
        field.nextElementSibling.innerText = ""
    }
}

usuarioField.addEventListener("blur", (e)=> validacionCampoVacio("Se necesita el nombre", e));
contraseñaField.addEventListener("blur", (e)=> validacionCampoVacio("Se necesita la contraseña", e));
correoField.addEventListener("blur", (e) => validacionCampoVacio("Se necesita el correo", e));

correoField.addEventListener("input", validarCorreos)