var cantidadDeGatos = 20
var cantidadDePasos = 10

for (var i=1; i<=cantidadDeGatos; i++){
    for (var j=1; j<=cantidadDePasos; j++){
        var pasos='🐾'.repeat(j)}   
    if (i % 2 == 0) {
        var mensaje = 'Gato #' + i + ': 🐈‍⬛ ' + pasos;
        console.log(mensaje);
    }
    else {
        var mensaje = 'Gato #' + i + ': 🐈 ' + pasos;
        console.log(mensaje);
    }
}