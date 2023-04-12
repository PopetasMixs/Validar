const usuarioField = document.querySelector("[name=usuario]");
const contraseñaField = document.querySelector("[name=contraseña]");
const correoField = document.querySelector("[name=correo]");


usuarioField.addEventListener("blur",function(e){
    const field = e.target;
    const fieldValue = e.target.value;
    if(fieldValue.length === 0){
        field.parentElement.insertAdjacentHTML(
            "beforeend",
            `<span class="error">Error</span>`
        )
    }
    
})
