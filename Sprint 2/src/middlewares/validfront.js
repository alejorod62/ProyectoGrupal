
window.onload = function () { 
        
    // Defino variables globales

    var nombres = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');
    var clave = document.getElementById('clave');
    var direccion = document.getElementById('direccion');
    var ciudad = document.getElementById('ciudad');
    var pais = document.getElementById('pais');
    var telefono = document.getElementById('telefono');
    var nombreImagen = document.getElementById('nombreImagen');
    var boton_submit = document.getElementById('boton_submit');
    var formulario = document.getElementById('form1');
    

  //   Evento 2
    formulario.addEventListener('submit',function(event){ 
        event.preventDefault();
        funcion_comprobacion();  
    })


    // Funcion validación (utilizo función para no repetir dos veces en el código, esto es la finalidad principal de una función)

    function funcion_comprobacion(){

        if ( (nombres.value=="") || (email.value=="") || (!email.value.includes("@")) ) {
            alert("Complete los campos con el formato correspondiente");
        }
        else{
            formulario.submit(); // se realiza el submit (va para el backend con los campos validados)
        }

    }



   
}


