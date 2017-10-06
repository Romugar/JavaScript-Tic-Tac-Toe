var ficha;
var fichaAI;
var posicionFichas = [0,0,0,0,0,0,0,0,0];
var lineas = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

document.getElementById("ceros").onclick = function() {
  document.getElementById("preguntaInicial").innerHTML = "";
  document.getElementById("ceros").innerHTML = "";  
  document.getElementById("equis").innerHTML = "";  
  ficha = "O"; fichaAI = "X";  
  juego();
};

document.getElementById("equis").onclick = function() {
  document.getElementById("preguntaInicial").innerHTML = "";
  document.getElementById("ceros").innerHTML = "";  
  document.getElementById("equis").innerHTML = ""; 
  ficha = "X"; fichaAI = "O";
  document.getElementById("c3").innerHTML = fichaAI;
  posicionFichas[2] = 2;
  juego();
};

function juego(){

function turnoIA() { 
  var posicicion;  
  
  function getRandomInt(min, max) {
  min = Math.ceil(0);
  max = Math.floor(9);
  return Math.floor(Math.random() * (9 - 0)) + 0;
  };
  
  var a = getRandomInt(0, 9);
  if (posicionFichas[a] == 0) {
  document.getElementById("c"+(a+1)).innerHTML = fichaAI;
  posicionFichas[a] = 2;
  comprobarGanador();
  } else {
    return turnoIA();
  };
};

function resetJuego() {
  ficha = "";
  fichaAI = "";
  posicionFichas = [0,0,0,0,0,0,0,0,0];
  document.location.href = document.location.href;
};

function comprobarGanador() {  
  var lineaA = 0;
  var lineaB = 0;  
  var pos; 
  
  var posicionFichasString = posicionFichas.toString();   
  var a = posicionFichasString.indexOf(0);
  if (a == -1) {
    document.getElementById("preguntaInicial").innerHTML = "¡¡¡EMPATE!!!";
    setTimeout(resetJuego,1500);
  };
  
  for (var i = 0; i <= lineas.length-1; i = i + 1) {
    lineaA = 0;
    lineaB = 0;
    for (var j = 0; j <= lineas[i].length-1; j = j + 1) {
      pos = lineas[i][j];      
      if (posicionFichas[pos] == 1) {
        lineaA = lineaA + 1;        
      } else {
      if (posicionFichas[pos] == 2) {
        lineaB = lineaB + 1;
      };
      };
        if (lineaA == 3) {
        document.getElementById("preguntaInicial").innerHTML = "¡¡¡GANASTE!!!";
        setTimeout(resetJuego,1500);
        } else
        if (lineaB == 3) {
        document.getElementById("preguntaInicial").innerHTML = "¡¡¡PERDISTE!!!";
        setTimeout(resetJuego,1500);
        };
      
    };
  };
  
};

document.getElementById("c1").onclick = function() {
  if (posicionFichas[0] == 0) {
  document.getElementById("c1").innerHTML = ficha;
  posicionFichas[0] = 1;
  comprobarGanador();
  if (document.getElementById("preguntaInicial").innerHTML == "") {
    turnoIA();
  };
};};
document.getElementById("c2").onclick = function() {
  if (posicionFichas[1] == 0) {
  document.getElementById("c2").innerHTML = ficha;
  posicionFichas[1] = 1;
  comprobarGanador();
  if (document.getElementById("preguntaInicial").innerHTML == "") {
    turnoIA();
  };
};};
document.getElementById("c3").onclick = function() {
  if (posicionFichas[2] == 0) {
  document.getElementById("c3").innerHTML = ficha;
  posicionFichas[2] = 1;
  comprobarGanador();
  if (document.getElementById("preguntaInicial").innerHTML == "") {
    turnoIA();
  };
};};
document.getElementById("c4").onclick = function() {
  if (posicionFichas[3] == 0) {
  document.getElementById("c4").innerHTML = ficha;
  posicionFichas[3] = 1;
  comprobarGanador();
  if (document.getElementById("preguntaInicial").innerHTML == "") {
    turnoIA();
  };
};};
document.getElementById("c5").onclick = function() {
  if (posicionFichas[4] == 0) {
  document.getElementById("c5").innerHTML = ficha;
  posicionFichas[4] = 1;
  comprobarGanador();
  if (document.getElementById("preguntaInicial").innerHTML == "") {
    turnoIA();
  };
};};
document.getElementById("c6").onclick = function() {
  if (posicionFichas[5] == 0) {
  document.getElementById("c6").innerHTML = ficha;
  posicionFichas[5] = 1;
  comprobarGanador();
  if (document.getElementById("preguntaInicial").innerHTML == "") {
    turnoIA();
  };
};};
document.getElementById("c7").onclick = function() {
  if (posicionFichas[6] == 0) {
  document.getElementById("c7").innerHTML = ficha;
  posicionFichas[6] = 1;
  comprobarGanador();
  if (document.getElementById("preguntaInicial").innerHTML == "") {
    turnoIA();
  };
};};
document.getElementById("c8").onclick = function() {
  if (posicionFichas[7] == 0) {
  document.getElementById("c8").innerHTML = ficha;
  posicionFichas[7] = 1;
  comprobarGanador();
  if (document.getElementById("preguntaInicial").innerHTML == "") {
    turnoIA();
  };
};};
document.getElementById("c9").onclick = function() {
  if (posicionFichas[8] == 0) {
  document.getElementById("c9").innerHTML = ficha;
  posicionFichas[8] = 1;
  comprobarGanador();
  if (document.getElementById("preguntaInicial").innerHTML == "") {
    turnoIA();
  };
};};

};