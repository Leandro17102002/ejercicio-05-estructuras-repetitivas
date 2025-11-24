/* var cantidadDeGatos = 10;
var emojis = ['😺', '😸', '😹']


for (var i=1; i<=cantidadDeGatos; i++) {
  var emoji = emojis[(i - 1) % 3];
  console.log('Gato #' + i + ': ' + emoji);
} 
 */

var emojis = ['😺', '😸', '😹']

document.getElementById("form-gatos-1").addEventListener("submit", function(e) {
    e.preventDefault(); 
    
    var cantidad = parseInt(document.getElementById("cantidad-gatos-1").value);

    if (isNaN(cantidad) || cantidad < 1) {
        alert("Por favor, ingresá un número válido.");
        return;
    }

    var contenedor = document.getElementById("lista-gatos-1");
    var html = "";

    // Ejercicio
     for (var i = 1; i <= cantidad; i++) {
        var emoji = emojis[(i - 1) % 3];
        html += `<li>Gato #${i} ${emoji}</li>` //reemplazaria al console.log;
    }

    html += "</ul>";

    contenedor.innerHTML = html;
});
