function desativaInput(obj) {
  if (obj.checked  == false) {
    document.getElementById("inicioIntervalo").disabled = false;
  }else{
    document.getElementById("inicioIntervalo").disabled = true;
  }
}

var totalFrequencia = 0;
var totalValores = 0;

function montaTabela() {
  var podeSeguir = validaFormulario();

  if (podeSeguir) {
    var temIntervalo = false;
    var temp = document.getElementById("inicioIntervalo").value;
    if (temp !== "") {
      var inicioInterval = parseInt(temp);
      temIntervalo= true;
    }

    var fimIntervalo = parseInt(document.getElementById("fimIntervalo").value);
    var frequencia = parseInt(document.getElementById("frequencia").value);
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
  document.getElementById("resultado").value = totalMedia;
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
