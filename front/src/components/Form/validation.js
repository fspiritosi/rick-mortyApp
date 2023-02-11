export default function validation(userData){
    // // eslint-disable-next-line
    // const regexUsernameLength = /^[a-zA-Z0-9]{0,35}$/
    // eslint-disable-next-line
    const regexPassword = /^(?=\w*\d)\S{6,10}$/
    // eslint-disable-next-line
    const regexUserEmail = /^\S+@\S+\.\S+/

    const errors = {}

    if(!userData.username){
        errors.username = 'el nombre de usuario no puede estar vacío'
    }
    if(!regexUserEmail.test(userData.username)){
        errors.username = 'El nombre de usuario debe ser un email'
    }
    if(userData.username.length > 35){
        errors.username = 'el nombre de usuario no debe tener mas de 35 caracteres'
    }

    if(!regexPassword.test(userData.password)){
        errors.password = 'la contraseña debe contener al menos un numero, minimo 6 caracteres y maximo 10'
    }

    return errors

}