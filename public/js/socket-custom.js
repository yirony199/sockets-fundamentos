
        var socket = io();
        socket.on('connect', function () {
            console.log("Conectado  con el servuidor")
        });

        socket.on('disconnect', function () {
            console.log("Perdimos conexion con el servidor")
        });


        socket.on('enviarMensaje', function (data) {
            console.log(data)
        });



        socket.emit('enviarMensaje', {
            usuario: 'Yirony',
            mensaje: 'Hola mundo'
        }, function (resp){
            console.log(resp);
        });