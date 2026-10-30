export class Usuario {

    constructor(_usuario, _password){
        this.usuario = _usuario
        this.password = _password
    }

    validarCredenciales(usuarioIngresado, passwordIngresado){
        return this.usuario === usuarioIngresado && this.password === passwordIngresado
    }

    
}

