// Inicializar el mapa centrado en las coordenadas del residencial
 var map = L.map('map').setView([9.839923, -83.945833], 20);  // Cambia las coordenadas según tu residencial

// Añadir el mapa base desde OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Ejemplo de una casa (lote) representado como polígono
/*var lote1 = L.polygon([
    [9.9370, -84.0849],
    [9.9371, -84.0849],
    [9.9371, -84.0848],
    [9.9370, -84.0848]
  ]).addTo(map);
  
  lote1.bindPopup("Casa 4D");*/

  var loteE30 = L.polygon([
    [9.8391742, -83.9467995],
    [9.8391036, -83.9468254],
    [9.8390582, -83.9467013],
    [9.8391255, -83.9466697],
    [9.8391742, -83.9467995]
  ]).addTo(map);
  loteE30.bindPopup("Casa E30");
  
  var loteE31 = L.polygon([
    [9.8392491, -83.9468135],
    [9.8391899, -83.9468414],
    [9.8391742, -83.9467995],
    [9.8391255, -83.9466697],
    [9.8391794, -83.9466461],
    [9.8392415, -83.9467953],
    [9.8392491, -83.9468135]
  ]).addTo(map);
  loteE31.bindPopup("Casa E31");
  
  var loteE32 = L.polygon([
    [9.8393139, -83.9467643],
    [9.8392415, -83.9467953],
    [9.8391794, -83.9466461],
    [9.8392564, -83.9466134],
    [9.8393191, -83.9467618],
    [9.8393139, -83.9467643]
  ]).addTo(map);
  loteE32.bindPopup("Casa E32");
  
  var loteE33 = L.polygon([
    [9.8393794, -83.9467346],
    [9.8393191, -83.9467618],
    [9.8392564, -83.9466134],
    [9.8393143, -83.9465883],
    [9.8393794, -83.9467346]
  ]).addTo(map);
  loteE33.bindPopup("Casa E33");
  
  var loteE34 = L.polygon([
    [9.8393879, -83.9465588],
    [9.8393143, -83.9465883],
    [9.8393794, -83.9467346],
    [9.8393901, -83.9467586],
    [9.8394591, -83.9467310],
    [9.8394536, -83.9467217],
    [9.8393879, -83.9465588]
  ]).addTo(map);
  loteE34.bindPopup("Casa E34");
  
  var loteE35 = L.polygon([
    [9.8395219, -83.9466913],
    [9.8394536, -83.9467217],
    [9.8393879, -83.9465588],
    [9.8394541, -83.9465303],
    [9.8395219, -83.9466913]
  ]).addTo(map);
  loteE35.bindPopup("Casa E35");
  
  var loteE36 = L.polygon([
    [9.8395890, -83.9466622],
    [9.8395219, -83.9466913],
    [9.8394541, -83.9465303],
    [9.8395212, -83.9465012],
    [9.8395890, -83.9466622]
  ]).addTo(map);
  loteE36.bindPopup("Casa E36");
  
  var loteE37 = L.polygon([
    [9.8396486, -83.9466371],
    [9.8395890, -83.9466622],
    [9.8395212, -83.9465012],
    [9.8395837, -83.9464726],
    [9.8396486, -83.9466371]
  ]).addTo(map);
  loteE37.bindPopup("Casa E37");
  
  var loteE38 = L.polygon([
    [9.8397069, -83.9466150],
    [9.8396486, -83.9466371],
    [9.8395837, -83.9464726],
    [9.8396500, -83.9464461],
    [9.8397069, -83.9466150]
  ]).addTo(map);
  loteE38.bindPopup("Casa E38");
  
  var loteE39 = L.polygon([
    [9.8397153, -83.9464231],
    [9.8396500, -83.9464461],
    [9.8397069, -83.9466150],
    [9.8397745, -83.9465857],
    [9.8397153, -83.9464231]
  ]).addTo(map);
  loteE39.bindPopup("Casa E39");
  
  var loteE40 = L.polygon([
    [9.8397785, -83.9463934],
    [9.8397153, -83.9464231],
    [9.8397745, -83.9465857],
    [9.8398480, -83.9465520],
    [9.8397785, -83.9463934]
  ]).addTo(map);
  loteE40.bindPopup("Casa E40");
  
  var loteE41 = L.polygon([
    [9.8399113, -83.9465249],
    [9.8398480, -83.9465520],
    [9.8397785, -83.9463934],
    [9.8398415, -83.9463628],
    [9.8399113, -83.9465249]
  ]).addTo(map);
  loteE41.bindPopup("Casa E41");
  
  var loteE42 = L.polygon([
    [9.8399706, -83.9464948],
    [9.8399113, -83.9465249],
    [9.8398415, -83.9463628],
    [9.8398974, -83.9463349],
    [9.8399706, -83.9464948]
  ]).addTo(map);
  loteE42.bindPopup("Casa E42");
  
  var loteE43 = L.polygon([
    [9.8400350, -83.9464657],
    [9.8399706, -83.9464948],
    [9.8398974, -83.9463349],
    [9.8399625, -83.9463000],
    [9.8400350, -83.9464657]
  ]).addTo(map);
  loteE43.bindPopup("Casa E43");
  
  var loteE44 = L.polygon([
    [9.8401078, -83.9464348],
    [9.8400350, -83.9464657],
    [9.8399625, -83.9463000],
    [9.8400329, -83.9462659],
    [9.8401078, -83.9464348]
  ]).addTo(map);
  loteE44.bindPopup("Casa E44");
  
  var loteE45 = L.polygon([
    [9.8402463, -83.9463990],
    [9.8401168, -83.9464552],
    [9.8401078, -83.9464348],
    [9.8400329, -83.9462659],
    [9.8401687, -83.9462087],
    [9.8402408, -83.9463859],
    [9.8402463, -83.9463990]
  ]).addTo(map);
  loteE45.bindPopup("Casa E45");

  var loteE46 = L.polygon([
    [9.8403066, -83.9463549],
    [9.8402298, -83.9461794],
    [9.8401687, -83.9462087],
    [9.8402408, -83.9463859],
    [9.8403066, -83.9463549]
  ]).addTo(map);
  loteE46.bindPopup("Casa E46");
  var loteE47 = L.polygon([
    [9.8403666, -83.9463280],
    [9.8403066, -83.9463549],
    [9.8402298, -83.9461794],
    [9.8402907, -83.9461542],
    [9.8403666, -83.9463280]
  ]).addTo(map);
  loteE47.bindPopup("Casa E47");
  
  var loteE48 = L.polygon([
    [9.8404329, -83.9462982],
    [9.8403666, -83.9463280],
    [9.8402907, -83.9461542],
    [9.8403643, -83.9461268],
    [9.8404329, -83.9462982]
  ]).addTo(map);
  loteE48.bindPopup("Casa E48");
  
  var loteE49 = L.polygon([
    [9.8404918, -83.9462725],
    [9.8404329, -83.9462982],
    [9.8403643, -83.9461268],
    [9.8404262, -83.9461022],
    [9.8404918, -83.9462725]
  ]).addTo(map);
  loteE49.bindPopup("Casa E49");
  
  var loteE50 = L.polygon([
    [9.8405552, -83.9462477],
    [9.8404918, -83.9462725],
    [9.8404262, -83.9461022],
    [9.8404883, -83.9460774],
    [9.8405552, -83.9462477]
  ]).addTo(map);
  loteE50.bindPopup("Casa E50");
  
  var loteE51 = L.polygon([
    [9.8406182, -83.9462225],
    [9.8405552, -83.9462477],
    [9.8404883, -83.9460774],
    [9.8405512, -83.9460530],
    [9.8406182, -83.9462225]
  ]).addTo(map);
  loteE51.bindPopup("Casa E51");

 
  var loteF1 = L.polygon([
    [9.8404966, -83.9459926],
    [9.8404812, -83.9459543],
    [9.8405279, -83.9459333],
    [9.8404737, -83.9458145],
    [9.8404179, -83.9458380],
    [9.8404311, -83.9458702],
    [9.8403635, -83.9458962],
    [9.8404295, -83.9460294]
  ]).addTo(map);
  loteF1.bindPopup("Casa F1");
  
  var loteF2 = L.polygon([
    [9.8403624, -83.9460605],
    [9.8403066, -83.9459228],
    [9.8403635, -83.9458962],
    [9.8404295, -83.9460294],
    [9.8403624, -83.9460605]
  ]).addTo(map);
  loteF2.bindPopup("Casa F2");
  
  var loteF3 = L.polygon([
    [9.8403066, -83.9459228],
    [9.8402299, -83.9459547],
    [9.8402951, -83.9460953],
    [9.8403624, -83.9460605],
    [9.8403066, -83.9459228]
  ]).addTo(map);
  loteF3.bindPopup("Casa F3");
  
  var loteF4 = L.polygon([
    [9.8402299, -83.9459547],
    [9.8401652, -83.9459825],
    [9.8402209, -83.9461267],
    [9.8402951, -83.9460953],
    [9.8402299, -83.9459547]
  ]).addTo(map);
  loteF4.bindPopup("Casa F4");
  
  var loteF5 = L.polygon([
    [9.8401652, -83.9459825],
    [9.8401545, -83.9459873],
    [9.8400868, -83.9460146],
    [9.8401447, -83.9461630],
    [9.8402209, -83.9461267],
    [9.8401652, -83.9459825]
  ]).addTo(map);
  loteF5.bindPopup("Casa F5");
  
  var loteF6 = L.polygon([
    [9.8400868, -83.9460146],
    [9.8400206, -83.9460397],
    [9.8400799, -83.9461918],
    [9.8401447, -83.9461630],
    [9.8400868, -83.9460146]
  ]).addTo(map);
  loteF6.bindPopup("Casa F6");
  
  var loteF7 = L.polygon([
    [9.8400799, -83.9461918],
    [9.8400206, -83.9460397],
    [9.8399485, -83.9460639],
    [9.8400164, -83.9462183],
    [9.8400799, -83.9461918]
  ]).addTo(map);
  loteF7.bindPopup("Casa F7");
  
  var loteF8 = L.polygon([
    [9.8399665, -83.9461114],
    [9.8399163, -83.9461407],
    [9.8399576, -83.9462475],
    [9.8400164, -83.9462183],
    [9.8399665, -83.9461114]
  ]).addTo(map);
  loteF8.bindPopup("Casa F8");
  
  var loteF9 = L.polygon([
    [9.8399665, -83.9461114],
    [9.8399163, -83.9461407],
    [9.8398799, -83.9460585],
    [9.8399324, -83.9460266],
    [9.8399665, -83.9461114]
  ]).addTo(map);
  loteF9.bindPopup("Casa F9");
  
  var loteF10 = L.polygon([
    [9.8398799, -83.9460585],
    [9.8397894, -83.9461004],
    [9.8398359, -83.9462485],
    [9.8398779, -83.9462831],
    [9.8399576, -83.9462475],
    [9.8398799, -83.9460585]
  ]).addTo(map);
  loteF10.bindPopup("Casa F10");
  
  var loteF11 = L.polygon([
    [9.8398799, -83.9460585],
    [9.8398207, -83.9459103],
    [9.8397559, -83.9459342],
    [9.8397388, -83.9459821],
    [9.8397894, -83.9461004],
    [9.8398799, -83.9460585]
  ]).addTo(map);
  loteF11.bindPopup("Casa F11");
  
  var loteF12 = L.polygon([
    [9.8399324, -83.9460266],
    [9.8398739, -83.9458912],
    [9.8398207, -83.9459103],
    [9.8398799, -83.9460585],
    [9.8399324, -83.9460266]
  ]).addTo(map);
  loteF12.bindPopup("Casa F12");
  
  var loteF13 = L.polygon([
    [9.8400206, -83.9460397],
    [9.8399417, -83.9458656],
    [9.8398739, -83.9458912],
    [9.8399450, -83.9460557],
    [9.8400206, -83.9460397]
  ]).addTo(map);
  loteF13.bindPopup("Casa F13");
  
  var loteF14 = L.polygon([
    [9.8400868, -83.9460146],
    [9.8400206, -83.9460397],
    [9.8399417, -83.9458656],
    [9.8400178, -83.9458370],
    [9.8400868, -83.9460146]
  ]).addTo(map);
  loteF14.bindPopup("Casa F14");
  

  var loteF15 = L.polygon([
    [9.8400868, -83.9460146],
    [9.8400178, -83.9458370],
    [9.8400786, -83.9458103],
    [9.8401545, -83.9459873],
    [9.8400868, -83.9460146]
  ]).addTo(map);
  loteF15.bindPopup("Casa F15");
  
  var loteF16 = L.polygon([
    [9.8401818, -83.9459752],
    [9.8401652, -83.9459825],
    [9.8401545, -83.9459873],
    [9.8400786, -83.9458103],
    [9.8401518, -83.9457790],
    [9.8402027, -83.9459087],
    [9.8401818, -83.9459752]
  ]).addTo(map);
  loteF16.bindPopup("Casa F16");
  
  var loteF17 = L.polygon([
    [9.8402260, -83.9457632],
    [9.8401576, -83.9457963],
    [9.8402027, -83.9459087],
    [9.8402129, -83.9459342],
    [9.8402856, -83.9459046],
    [9.8402812, -83.9458925],
    [9.8402260, -83.9457632]
  ]).addTo(map);
  loteF17.bindPopup("Casa F17");
  
  var loteF18 = L.polygon([
    [9.8403135, -83.9458783],
    [9.8402812, -83.9458925],
    [9.8402260, -83.9457632],
    [9.8402702, -83.9457438],
    [9.8402787, -83.9457616],
    [9.8403085, -83.9457508],
    [9.8403436, -83.9458430],
    [9.8403051, -83.9458607],
    [9.8403135, -83.9458783]
  ]).addTo(map);
  loteF18.bindPopup("Casa F18");
  
  var loteF19 = L.polygon([
    [9.8404737, -83.9458145],
    [9.8404179, -83.9458380],
    [9.8404311, -83.9458702],
    [9.8403635, -83.9458962],
    [9.8403436, -83.9458430],
    [9.8403085, -83.9457508],
    [9.8403587, -83.9457296],
    [9.8403485, -83.9457047],
    [9.8403760, -83.9456932],
    [9.8403867, -83.9457192],
    [9.8404033, -83.9457122],
    [9.8404097, -83.9457278],
    [9.8404340, -83.9457175],
    [9.8404737, -83.9458145]
  ]).addTo(map);
  loteF19.bindPopup("Casa F19");  

  var loteG1 = L.polygon([
    [9.8403496, -83.9456037],
    [9.8402851, -83.9454487],
    [9.8403734, -83.9454091],
    [9.8404119, -83.9455056],
    [9.8403858, -83.9455183],
    [9.8404118, -83.9455734],
    [9.8403496, -83.9456037]
]).addTo(map);
loteG1.bindPopup("Casa G1");

var loteG2 = L.polygon([
    [9.8402851, -83.9454487],
    [9.840355, -83.9456153],
    [9.8402774, -83.9456492],
    [9.8402171, -83.9454852],
    [9.8402851, -83.9454487]
]).addTo(map);
loteG2.bindPopup("Casa G2");

var loteG3 = L.polygon([
  [9.8402774, -83.9456492],
  [9.8402171, -83.9454852],
  [9.8401548, -83.9455137],
  [9.8402126, -83.9456753],
  [9.8402774, -83.9456492]
]).addTo(map);
loteG3.bindPopup("Casa G3");

var loteG4 = L.polygon([
  [9.8401548, -83.9455137],
  [9.8400857, -83.9455458],
  [9.8401414, -83.9457046],
  [9.8402126, -83.9456753],
  [9.8401548, -83.9455137]
]).addTo(map);
loteG4.bindPopup("Casa G4");

var loteG5 = L.polygon([
  [9.8400152, -83.9455747],
  [9.8400790, -83.9457340],
  [9.8401414, -83.9457046],
  [9.8400857, -83.9455458],
  [9.8400152, -83.9455747]
]).addTo(map);
loteG5.bindPopup("Casa G5");

var loteG6 = L.polygon([
  [9.8400790, -83.9457340],
  [9.8400141, -83.9457645],
  [9.8399495, -83.9456047],
  [9.8400152, -83.9455747],
  [9.8400790, -83.9457340]
]).addTo(map);
loteG6.bindPopup("Casa G6");

var loteG7 = L.polygon([
  [9.8399495, -83.9456047],
  [9.8398809, -83.9456343],
  [9.8399468, -83.9457926],
  [9.8400141, -83.9457645],
  [9.8399495, -83.9456047]
]).addTo(map);
loteG7.bindPopup("Casa G7");

var loteG8 = L.polygon([
  [9.8398809, -83.9456343],
  [9.8398086, -83.9456691],
  [9.8398679, -83.9458250],
  [9.8399468, -83.9457926],
  [9.8398809, -83.9456343]
]).addTo(map);
loteG8.bindPopup("Casa G8");

  var loteG9 = L.polygon([
    [9.8398679, -83.9458250],
    [9.8398086, -83.9456691],
    [9.8397541, -83.9456936],
    [9.8397789, -83.9457557],
    [9.8396797, -83.9457956],
    [9.8396948, -83.9458344],
    [9.8397454, -83.9458664],
    [9.8398004, -83.9458442],
    [9.8398024, -83.9458556],
]).addTo(map);
loteG9.bindPopup("Casa G9");


  var loteG10 = L.polygon([
    [9.8397789, -83.9457557],
    [9.8397541, -83.9456936],
    [9.8396613, -83.9457265],
    [9.8396797, -83.9457956],
    [9.8397789, -83.9457557]
]).addTo(map);
loteG10.bindPopup("Casa G10");

  var loteG11 = L.polygon([
    [9.8397541, -83.9456936],
    [9.8396613, -83.9457265],
    [9.8396043, -83.9455726],
    [9.8396299, -83.9455327],
    [9.8396791, -83.9455061]
]).addTo(map);
loteG11.bindPopup("Casa G11");
  
var loteG12 = L.polygon([
  [9.8397490, -83.9454780],
  [9.8396791, -83.9455061],
  [9.8397541, -83.9456936],
  [9.8398086, -83.9456691],
  [9.8398209, -83.9456636]
]).addTo(map);
loteG12.bindPopup("Casa G12");

var loteG13 = L.polygon([
  [9.8397490, -83.9454780],
  [9.8398128, -83.9454572],
  [9.8398809, -83.9456343],
  [9.8398209, -83.9456636],
  [9.8397490, -83.9454780]
]).addTo(map);
loteG13.bindPopup("Casa G13");

var loteG14 = L.polygon([
  [9.8398128, -83.9454572],
  [9.8398809, -83.9456343],
  [9.8399495, -83.9456047],
  [9.8398813, -83.9454309],
  [9.8398128, -83.9454572]
]).addTo(map);
loteG14.bindPopup("Casa G14");
 
var loteG15 = L.polygon([
  [9.8398813, -83.9454309],
  [9.8399495, -83.9456047],
  [9.8400152, -83.9455747],
  [9.8399475, -83.9454040],
  [9.8398813, -83.9454309]
]).addTo(map);
loteG15.bindPopup("Casa G15");

var loteG16 = L.polygon([
  [9.8399475, -83.9454040],
  [9.8400184, -83.9453735],
  [9.8400857, -83.9455458],
  [9.8400152, -83.9455747],
  [9.8399475, -83.9454040]
]).addTo(map);
loteG16.bindPopup("Casa G16");

var loteG17 = L.polygon([
  [9.8400184, -83.9453735],
  [9.8400906, -83.9453449],
  [9.8401548, -83.9455137],
  [9.8400857, -83.9455458],
  [9.8400184, -83.9453735]
]).addTo(map);
loteG17.bindPopup("Casa G17");

var loteG18 = L.polygon([
  [9.8400906, -83.9453449],
  [9.8401526, -83.9453198],
  [9.8402171, -83.9454852],
  [9.8401548, -83.9455137],
  [9.8400906, -83.9453449]
]).addTo(map);
loteG18.bindPopup("Casa G18");


var loteG19 = L.polygon([
  [9.8401526, -83.9453198],
  [9.8402248, -83.9452890],
  [9.8402851, -83.9454487],
  [9.8402171, -83.9454852],
  [9.8401526, -83.9453198]
]).addTo(map);
loteG19.bindPopup("Casa G19");


  var loteG20 = L.polygon([
    [9.8403734, -83.9454091],
    [9.8402851, -83.9454487],
    [9.8402248, -83.9452890],
    [9.8402905, -83.9452917],
    [9.8403443, -83.9453316]
]).addTo(map);
loteG20.bindPopup("Casa G20");


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