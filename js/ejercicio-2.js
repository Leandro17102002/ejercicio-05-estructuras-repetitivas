/* var cantidadDeGatos = 5
var cantidadDePasos = 10

for (var i=1; i<=cantidadDeGatos; i++){
    for (var j=1; j<=cantidadDePasos; j++){
        var pasos='🐾'.repeat(j)}   
    var mensaje = 'Gato #' + i + ': 🐈' + pasos;
    console.log(mensaje);
    } */

document.getElementById("form-gatos-2").addEventListener("submit", function(e){
    e.preventDefault(); // Evita que la página se recargue
    
    var cantidadGatos = parseInt(document.getElementById("cantidad-gatos-2").value);
    var cantidadPasos = parseInt(document.getElementById("cantidad-pasos-2").value);

    if (isNaN(cantidadGatos) || cantidadGatos < 1 || isNaN(cantidadPasos) || cantidadPasos < 1) {
        alert("Por favor, ingresá números válidos.");
        return;
    }

    var contenedor=document.getElementById("lista-gatos-2");
    var html="";

    for ( var i=1 ; i <= cantidadGatos ; i++){
        var pasos = '🐾'.repeat(cantidadPasos);
        html += `<li>Gato #${i} 🐈 ${pasos}</li>`;
    }

    html+= "</ul>";

    contenedor.innerHTML = html;
});