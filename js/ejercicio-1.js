/* var cantidadDeGatos = 10;
var emojis = ['😺', '😸', '😹']


for (var i=1; i<=cantidadDeGatos; i++) {
  var emoji = emojis[(i - 1) % 3];
  console.log('Gato #' + i + ': ' + emoji);
} 
 */

var emojis = ['😺', '😸', '😹']

document.getElementById("form-gatos").addEventListener("submit", function(e) {
    e.preventDefault(); // Evita que la página se recargue
    
    var cantidad = parseInt(document.getElementById("cantidad-gatos-1").value);

    // Validación simple
    if (isNaN(cantidad) || cantidad < 1) {
        alert("Por favor, ingresá un número válido.");
        return;
    }

    var contenedor = document.getElementById("lista-gatos");
    var html = "";

     for (var i = 1; i <= cantidad; i++) {
        var emoji = emojis[(i - 1) % 3];
        html += `<li>Gato #${i} ${emoji}</li>`;
    }

    html += "</ul>";

    contenedor.innerHTML = html;
});
