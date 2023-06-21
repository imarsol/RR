document.addEventListener('DOMContentLoaded', () => {

    //Conectar al web socket
    var socket = io.connect(location.protocol + '//' + document.domain + ':' + location.port);

    //Cuando esté conectado, configurar botones
    socket.on('connect', () => {

        //Cada boton emite el evento enviar voto
        document.querySelectorAll('button').forEach(button => {
            button.onclick = () => {
                const seleccion = button.dataset.voto;
                socket.emit('enviar voto', {'seleccion':seleccion});
            };
        });
    });

    //Cuando se anuncia un voto, se añade
        socket.on('Votos totales', data => {
            document.querySelector('#si').innerHTML = data.si;
            document.querySelector('#no').innerHTML = data.no;
        });
});