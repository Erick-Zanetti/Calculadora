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

function calcula() {
  if (document.getElementById("aritimetica").checked) {
    var temp = 0;
    for (var i = 0; i < elemento.length; i++) {
      var x = parseInt(elemento[i], 10);
      temp = temp + x;
    }
    var resultado = (temp / elemento.length);
    document.querySelector("[name='result']").value = resultado;
  }

  if (document.getElementById("ponderada").checked) {
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
    document.querySelector("[name='result']").value = resultado;
  }

  if (document.getElementById("mediana").checked) {
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
      document.querySelector("[name='result']").value = resultado;
    } else {
      var resultado = (number.length / 2) - 0.5;
      document.querySelector("[name='result']").value = novoArray[resultado];
    }
  }

  if (document.getElementById("moda").checked) {
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
    document.querySelector("[name='result']").value = resultado;
  }
}

function zerar() {
  i = 0;
  elemento = [];
  document.getElementById("demo").innerHTML = '';
  document.querySelector("[name='result']").value = null;
  document.getElementById("form1").reset();
}

function runScript(e) {
  if (e.keyCode == 13) {
    inclui();
    document.querySelector("[name='numero']").value = null;
    return false;
  }
}
