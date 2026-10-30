import { Usuario } from "./Usuario.js"

document.addEventListener("DOMContentLoaded", () => {
    //Definimos un arreglo de Usuarios
    const usuariosPermitidos = [
        new Usuario("docente", "web2026"),
        new Usuario("estudiante", "clave123"),
        new Usuario("admin", "admin2026")
    ]
    /*
    [ {usuario: "docente", password: "web2026"},
     {usuario: "estudiante", password: "clave123"},
     {usuario: "admin", password: "admin2026"}
    ]
     */

    const formLogin = document.getElementById("formLogin")
    const inputUsuario = document.getElementById("usuario")
    const inputPassword = document.getElementById("password")
    const spanMensajeError = document.getElementById("mensajeError")

    formLogin.addEventListener("submit", (evento) => {
        evento.preventDefault()
        //Obteniendo valores de las cajas de texto:
        const usuarioIngresado = inputUsuario.value.trim()
        const passwordIngresado = inputPassword.value.trim()
        if(usuarioIngresado === "" || passwordIngresado === ""){
            spanMensajeError.textContent = "Por favor, complete su usuario y password"
            return 
        }

        const usuarioValido = usuariosPermitidos.find(
            (usuarioObj) => usuarioObj.validarCredenciales(usuarioIngresado, passwordIngresado)
        )

        if(usuarioValido){
            spanMensajeError.textContent = ""
            window.location.href = "dashboard.html"
        }else{
            spanMensajeError.textContent = "Usuario o Password incorrectos. Intente de nuevo"
        }

    })

})