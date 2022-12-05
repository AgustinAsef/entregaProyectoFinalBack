//esto es el cliente
const socket = io.connect() //conecion con el server

function addNewMensaje() { //recibe los datos del cliente y de los inputs y los pas al server
    const inputEmail = document.getElementById('email')
    const inputMensaje = document.getElementById('mensaje')
        console.log(inputEmail.value +' '+ inputMensaje.value+ ' '+'log del input');

        let today = new Date();
        let hora = today.getHours() + ':' + today.getMinutes()
        let fecha = today.getDate() + '-' + ( today.getMonth() + 1 ) + '-' +  today.getFullYear()

        let inputMensajeArr = {
            id: socket.id,
            autor: inputEmail.value,
            mensaje: inputMensaje.value,
            fecha: fecha,
            hora: hora
        }

        document.getElementById('mensaje').value= ''
        socket.emit('message', inputMensajeArr) 

    return false 
}

socket.on('messages', msjs =>{ //recibe los datos del server y los muestra

    console.log(msjs,' ', 'log de los mensaje')

    if (msjs.length == 0) {
        
        document.getElementById('msjSpan').innerHTML = "no se encontraron mensajes"

    }else{
        const inputMsj = msjs.map(msj => `<strong>Mensaje de ${msj.autor}:</strong> fecha: ${msj.fecha}, hora: ${msj.hora}, mensaje: ${msj.mensaje}.`).join
        ('<br>')
        document.getElementById('msjSpan').innerHTML = inputMsj
    }
})