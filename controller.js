var i = 0;
var elemento = [];

function inclui() {
  num = document.getElementById("numero").value;
  if (num == "") {
    alert("Digite um valor");
  } else {
    elemento[i] = document.getElementById("numero").value;
    i = i + 1;
    if (document.getElementById("demo").innerHTML == '') {
      document.getElementById("demo").innerHTML = num;
    } else {
      document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML + ", " + num;
    }
  }
}

var mediaDoelemento = 0;

function calculaAritimetica() {
  var temp = 0;
  for (var i = 0; i < elemento.length; i++) {
    var x = parseInt(elemento[i], 10);
    temp = temp + x;
  }
  mediaDoelemento = (temp / elemento.length);
  document.getElementById("aritimetica").innerHTML = mediaDoelemento.toFixed(8)
}

function calculaPonderada() {
  var temp = 1;
  var baixo = 0;
  var cima = 0;
  for (var i = 0; i < elemento.length; i++) {
    var x = parseInt(elemento[i], 10);
    cima = (x * temp) + cima;
    baixo = temp + baixo;
    temp = temp + 1;
  }
  var resultado = (cima / baixo);
  document.getElementById("ponderada").innerHTML = resultado.toFixed(8)
}

function calculaMediana() {
  function sortfunction(a, b) {
    return (a - b)
  }
  var novoArray = [];
  for (var i = 0; i < elemento.length; i++) {
    novoArray[i] = elemento[i];
  }
  var number = novoArray.sort(sortfunction);
  if (number.length % 2 == 0) {
    var i = number.length / 2
    var j = i - 1;
    var resultado = (parseInt(number[j]) + parseInt(number[i])) / 2;
    document.getElementById("mediana").innerHTML = resultado.toFixed(8);
  } else {
    var resultado = (number.length / 2) - 0.5;
    document.getElementById("mediana").innerHTML = (novoArray[resultado]).toFixed(8);
  }
}

function calculaModa() {
  function sortfunction(a, b) {
    return (a - b)
  }

  var novoArray = [];
  for (var i = 0; i < elemento.length; i++) {
    novoArray[i] = elemento[i];
  }
  var number = novoArray.sort(sortfunction);

  var quemSabe = [];
  var p = 0;
  var o = 0;
  var xota = 0;
  var qtd = 0;
  var valor = null;
  var qtd2 = 0;
  var valor2 = null;
  for (var i = 0; i < number.length; i++) {
    var j = i + 1;
    if (number[j] == undefined) {
      if (qtd == qtd2) {
        o = p + 1;
        quemSabe[p] = valor2;
        quemSabe[o] = valor;
        xota = qtd;
      } else {
        if (qtd > qtd2) {
          qtd2 = qtd;
          valor2 = valor;
        }
      }
    } else {
      if (number[i] == number[j]) {
        valor = number[i];
        qtd = qtd + 1;
      } else {
        if (qtd2 == 0) {
          qtd2 = qtd;
          valor2 = valor;
          qtd = 0;
        } else {
          if (qtd == qtd2) {
            o = p + 1;
            quemSabe[p] = valor2;
            quemSabe[o] = valor;
            xota = qtd;
          } else {
            if (qtd > qtd2) {
              qtd2 = qtd;
              valor2 = valor;
            }
          }
        }
        qtd = 0
      }
    }
  }
  if (qtd2 > xota) {
    var resultado = valor2;
  }
  if (qtd2 <= xota) {
    var resultado = quemSabe;
  }
  if (qtd2 == 0) {
    var resultado = "Não tem moda!"
  }
  document.getElementById("moda").innerHTML = resultado;
}

function calculadesvioMedio() {
  var somatoria = 0;
  for (var i = 0; i < elemento.length; i++) {
    var modulo = (elemento[i] - mediaDoelemento)
    if (modulo < 0) {
      modulo = modulo * (-1);
    }
    somatoria = somatoria + modulo
  }

  var resultado = (somatoria / elemento.length)

  document.getElementById("desvioMedio").innerHTML = resultado.toFixed(8);
}

function calculaVarEDesv() {
  var somatoria = 0;
  for (var i = 0; i < elemento.length; i++) {
    somatoria += Math.pow((elemento[i] - mediaDoelemento), 2)
  }
  console.log(somatoria);
  var popVariancia = (somatoria / elemento.length)
  document.getElementById("popVariancia").innerHTML = popVariancia.toFixed(8);
  var popDesvio = Math.sqrt(popVariancia);
  document.getElementById("popDesvioPadra").innerHTML = popDesvio.toFixed(8);
  var amostVariancia = (somatoria / (elemento.length - 1));
  document.getElementById("amostVariancia").innerHTML = amostVariancia.toFixed(8);
  var amostDesvio = Math.sqrt(amostVariancia);
  document.getElementById("amostDesvioPadra").innerHTML = amostDesvio.toFixed(8);
}

function calcula() {
  calculaAritimetica();
  calculaPonderada();
  calculaMediana();
  calculaModa();
  calculadesvioMedio()
  calculaVarEDesv()
}

function zerar() {
  i = 0;
  elemento = [];
  document.getElementById("demo").innerHTML = '';
  document.getElementById("form1").reset();
  document.getElementById("aritimetica").innerHTML = "";
  document.getElementById("desvioMedio").innerHTML = "";
  document.getElementById("moda").innerHTML = "";
  document.getElementById("mediana").innerHTML = "";
  document.getElementById("ponderada").innerHTML = "";
  document.getElementById("aritimetica").innerHTML = "";
  document.getElementById("amostDesvioPadra").innerHTML = "";
  document.getElementById("amostVariancia").innerHTML = "";
  document.getElementById("popDesvioPadra").innerHTML = "";
  document.getElementById("popVariancia").innerHTML = "";
}

function runScript(e) {
  if (e.keyCode == 13) {
    inclui();
    document.querySelector("[name='numero']").value = null;
    return false;
  }
}
