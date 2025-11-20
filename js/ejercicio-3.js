/* var cantidadDeGatos = 20
var cantidadDePasos = 10

for (var i=1; i<=cantidadDeGatos; i++){
    for (var j=1; j<=cantidadDePasos; j++){
        var pasos='🐾'.repeat(j)}   
    if (i % 2 == 0) {
        var mensaje = 'Gato #' + i + ': 🐅 ' + pasos;
        console.log(mensaje);
    }
    else {
        var mensaje = 'Gato #' + i + ': 🐈 ' + pasos;
        console.log(mensaje);
    }
} */


document.getElementById("form-gatos-3").addEventListener("submit", function(e){
    e.preventDefault(); // Evita que la página se recargue
    
    var cantidadGatos = parseInt(document.getElementById("cantidad-gatos-3").value);
    var cantidadPasos = parseInt(document.getElementById("cantidad-pasos-3").value);

    if (isNaN(cantidadGatos) || cantidadGatos < 1 || isNaN(cantidadPasos) || cantidadPasos < 1) {
        alert("Por favor, ingresá números válidos.");
        return;
    }

    var contenedor=document.getElementById("lista-gatos-3");
    var html="";

    for ( var i=1 ; i <= cantidadGatos ; i++){
        var pasos = '🐾'.repeat(cantidadPasos);
        var gato = (i % 2 == 0) ? '🐅' : '🐈';
        html += `<li>Gato #${i} ${gato} ${pasos}</li>`;
    }

    html+= "</ul>";

    contenedor.innerHTML = html;
});