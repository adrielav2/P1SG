// Inicializar el mapa centrado en las coordenadas del residencial
 var map = L.map('map').setView([9.839923, -83.945833], 20);  // Cambia las coordenadas según tu residencial

// Añadir el mapa base desde OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Ejemplo de una casa (lote) representado como polígono
var lote1 = L.polygon([
    [9.9370, -84.0849],
    [9.9371, -84.0849],
    [9.9371, -84.0848],
    [9.9370, -84.0848]
  ]).addTo(map);
  
  lote1.bindPopup("Casa 4D");
  
  // Crear ícono personalizado para postes eléctricos
  var iconPoste = L.divIcon({
      className: 'custom-icon',
      html: '<i class="fas fa-bolt"></i>',
      iconSize: [30, 30]
  });
  
  // Ejemplo Añadir marcador para un poste eléctrico
  var poste = L.marker([9.9372, -84.0851], { icon: iconPoste }).addTo(map);
  poste.bindPopup("Poste eléctrico");
  
  // Crear ícono para hidrantes usando una imagen
  var iconHidrante = L.icon({
      iconUrl: 'path-to-hydrant-icon.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
  });
  
  // Ejemplo Añadir marcador para un hidrante
  var hidrante = L.marker([9.9373, -84.0848], { icon: iconHidrante }).addTo(map);
  hidrante.bindPopup("Hidrante");