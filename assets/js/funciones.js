

//validación de los campos de texto del formulario.
//aquí revisamos cada uno de los campos, asegurándonos
//que contengan al menos 1 caracter
 

formulario.addEventListener('submit', function (event) {    //generamos una accion al presionar el boton submit
    event.preventDefault();                                 //prevenimos el evento por defecto, en este caso el 'submit'
    let nombre = document.querySelector('#nombre').value    //creamos variables para manejar cada uno de los input     
    let correo = document.querySelector('#correo').value
    let sobreti = document.querySelector('#texto').value
    if (nombre.length == 0) {                               //comparamos la cantidad de caracteres de cada campo
        alert("Por favor rellene el campo del nombre");     //en caso de que sea 0, se asume que está vacío
        document.querySelector('#nombre').focus();          //por ende se solicita que se rellene el campo faltante
    }                                                       //asimismo llevamos el foco al campo vacío.
    else if (correo.length == 0) {
        alert("Por favor rellene el campo del correo");
        document.querySelector('#correo').focus();
    }
    else if (sobreti.length == 0) {
        alert("Por favor rellene sobre el 'Sobre tí'");
        document.querySelector('#texto').focus();
    }
    else {
        window.location.href = "http://127.0.0.1:5500/";    //en caso de pasar cada una de las condiciones, se reenvía al index
                                                            // document.formulario.submit();
    }
});



