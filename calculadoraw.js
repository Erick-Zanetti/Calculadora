function desativaInput(obj) {
  if (obj.checked  == false) {
    document.getElementById("inicioIntervalo").disabled = false;
  }else{
    document.getElementById("inicioIntervalo").disabled = true;
  }
}

var totalFrequencia = 0;
var totalValores = 0;

var frequenciaPricipal = []
var inicioIntervaloPricipal = []
var fimIntervaloPricipal = []

function montaTabela() {
  var podeSeguir = validaFormulario();

  if (podeSeguir) {
    var temIntervalo = false;
    var temp = document.getElementById("inicioIntervalo").value;
    inicioIntervaloPricipal.push(temp)
    if (temp !== "") {
      var inicioInterval = parseInt(temp);
      temIntervalo= true;
    }

    var fimIntervalo = parseInt(document.getElementById("fimIntervalo").value);
    var frequencia = parseInt(document.getElementById("frequencia").value);
    frequenciaPricipal.push(frequencia)
    fimIntervaloPricipal.push(fimIntervalo)

    var media = 0;

    if (temIntervalo) {
      media = (inicioInterval + fimIntervalo) / 2;
    } else {
      media = fimIntervalo;
    }

    var total = frequencia * media;
    var valores = ""

    if (temIntervalo) {
      valores = inicioInterval + " |---- " + fimIntervalo;
    } else {
      valores = fimIntervalo + " ";
    }

    totalFrequencia = totalFrequencia + frequencia;
    totalValores = totalValores + total;

    var classeAtual = calculaClasse();

    var dados = {
      classe: classeAtual,
      valor: valores,
      frequencia: frequencia,
      media: media,
      total: total
    }

    var tabela = document.querySelector("#dadosCadastrados");
    tabela.appendChild(montatr(dados));

    document.getElementById("fimIntervalo").value = "";
    document.getElementById("frequencia").value = "";
    document.getElementById("inicioIntervalo").value = "";
  } else {
    alert("Formulario preenchido incoretamente")
  }
}

var classe = 0;
function calculaClasse() {
  classe = classe + 1;
  return classe;
}

function montatr(dados) {
  var dadosTr = document.createElement("tr");
  dadosTr.appendChild(montaTd(dados.classe));
  dadosTr.appendChild(montaTd(dados.valor));
  dadosTr.appendChild(montaTd(dados.frequencia));
  dadosTr.appendChild(montaTd(dados.media));
  dadosTr.appendChild(montaTd(dados.total));
  return dadosTr;
}

function montaTd(dado) {
  var td = document.createElement("td");
  td.textContent = dado;
  return td;
}

function mostraResultado() {
  var totalMedia = totalValores / totalFrequencia;
  document.getElementById("aritimetica2").innerHTML = totalMedia;
  calcModa()
  calcDesvioSimples()
  calcVariancia()
}

function calcVariancia() {
  var intervalo = document.getElementById("incluiIntervalo")
  var totalDeFrequencia = 0
  var totalXI = 0
  if (!intervalo) {
    for (var i = 0; i < frequenciaPricipal.length; i++) {
      totalDeFrequencia += frequenciaPricipal[i]
      totalXI += ((fimIntervaloPricipal[i] + parseFloat(inicioIntervaloPricipal[i])) / 2) * frequenciaPricipal[i] ;
    }
    var media = totalXI / totalDeFrequencia
    var tempResult = 0
    for (var i = 0; i < frequenciaPricipal.length; i++) {
      var xi = (fimIntervaloPricipal[i] + parseFloat(inicioIntervaloPricipal[i])) / 2;
      console.log(xi);
      var modulo = Math.pow(xi - media, 2) * frequenciaPricipal[i]
      tempResult += modulo
    }
    var resultadoPop = tempResult / totalDeFrequencia
    document.getElementById("popVariancia2").innerHTML = resultadoPop;
    var raizPop = Math.sqrt(resultadoPop)
    document.getElementById("popDesvioPadra2").innerHTML = raizPop;

    var resultadoAmst = tempResult / (totalDeFrequencia - 1)
    document.getElementById("amostVariancia2").innerHTML = resultadoAmst;
    var raisAmost = Math.sqrt(resultadoAmst)
    document.getElementById("amostDesvioPadra2").innerHTML = raisAmost;
  } else {
    console.log(fimIntervaloPricipal);
    for (var i = 0; i < frequenciaPricipal.length; i++) {
      totalDeFrequencia += frequenciaPricipal[i]
      totalXI += parseFloat(fimIntervaloPricipal[i]) * frequenciaPricipal[i] ;
    }
    var media = totalXI / totalDeFrequencia
    var tempResult = 0
    for (var i = 0; i < frequenciaPricipal.length; i++) {
      var xi = parseFloat(fimIntervaloPricipal[i])
      var modulo = Math.pow(xi - media, 2) * frequenciaPricipal[i]
      tempResult += modulo
    }
    var resultadoPop = tempResult / totalDeFrequencia
    document.getElementById("popVariancia2").innerHTML = resultadoPop;
    var raizPop = Math.sqrt(resultadoPop)
    document.getElementById("popDesvioPadra2").innerHTML = raizPop;

    var resultadoAmst = tempResult / (totalDeFrequencia - 1)
    document.getElementById("amostVariancia2").innerHTML = resultadoAmst;
    var raisAmost = Math.sqrt(resultadoAmst)
    document.getElementById("amostDesvioPadra2").innerHTML = raisAmost;
  }
}

function calcDesvioSimples() {
  var intervalo = document.getElementById("incluiIntervalo")
  var totalDeFrequencia = 0
  var totalXI = 0
  if (!intervalo) {
    for (var i = 0; i < frequenciaPricipal.length; i++) {
      totalDeFrequencia += frequenciaPricipal[i]
      totalXI += ((fimIntervaloPricipal[i] + parseFloat(inicioIntervaloPricipal[i])) / 2) * frequenciaPricipal[i] ;
    }
    var media = totalXI / totalDeFrequencia
    var tempResult = 0
    for (var i = 0; i < frequenciaPricipal.length; i++) {
      var xi = (fimIntervaloPricipal[i] + parseFloat(inicioIntervaloPricipal[i])) / 2;
      console.log(xi);
      var modulo = (xi - media) * frequenciaPricipal[i]
      if (modulo < 0) {
        modulo = modulo * (-1)
      }
      tempResult += modulo
    }
  } else {
    console.log(fimIntervaloPricipal);
    for (var i = 0; i < frequenciaPricipal.length; i++) {
      totalDeFrequencia += frequenciaPricipal[i]
      totalXI += parseFloat(fimIntervaloPricipal[i]) * frequenciaPricipal[i] ;
    }
    var media = totalXI / totalDeFrequencia
    var tempResult = 0
    for (var i = 0; i < frequenciaPricipal.length; i++) {
      var xi = parseFloat(fimIntervaloPricipal[i])
      var modulo = (xi - media) * frequenciaPricipal[i]
      if (modulo < 0) {
        modulo = modulo * (-1)
      }
      tempResult += modulo
    }
  }

  var resultado = tempResult / totalDeFrequencia
  document.getElementById("desvioMedio2").innerHTML = resultado;
}

function calcModa() {
  var intervalo = document.getElementById("incluiIntervalo")
  var index = frequenciaPricipal.indexOf(Math.max.apply(null, frequenciaPricipal))
  if (intervalo) {
    var amplitude = (fimIntervaloPricipal[index] - inicioIntervaloPricipal[index])
    var frequenciaDaClasse = frequenciaPricipal[index]
    var limiteInferior = parseFloat(inicioIntervaloPricipal[index])
    var freAnterior = 0
    if (index > 0) {
     freAnterior = frequenciaPricipal[index - 1]
    }
    var frePosterior = 0
    if (index < frequenciaPricipal.length) {
     frePosterior = frequenciaPricipal[index + 1]
    }

   var modulo = ((frequenciaDaClasse - freAnterior) / ((2 * frequenciaDaClasse) - (freAnterior + frePosterior)))
   if (modulo < 0) {
     modulo = modulo * - 1
   }

   var resultado = limiteInferior + (modulo * amplitude)
  }

  var resultado = fimIntervaloPricipal[index]

 document.getElementById("moda2").innerHTML = resultado;
}

function destravaBotao() {
  var campo1 = document.getElementById("fimIntervalo").value;
  var campo2 = document.getElementById("frequencia").value;

  if ((campo1 !== "") && (campo2 !== "")) {
    document.getElementById("bataozin").disabled = false;
  } else {
    document.getElementById("bataozin").disabled = true;
  }
}
function validaFormulario() {
  var campo1 = document.getElementById("fimIntervalo").value;
  var campo2 = document.getElementById("frequencia").value;
  var campo3 = document.getElementById("inicioIntervalo").value;
  var campo4 = document.getElementById("incluiIntervalo").checked;
  if (campo1 === "") {
    return false
  }
  if (campo2 === "") {
    return false
  }
  if (!campo4) {
    if (campo3 === "") {
      return false
    }

  }
  return true;
}
function apagar() {
  document.getElementById("form2").reset();
  var tabela = document.getElementById("dadosCadastrados");
  tabela.removeChild();
}
