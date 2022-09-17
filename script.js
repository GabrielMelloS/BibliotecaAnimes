var listaUrlSeries = [];
var listaNomeSeries = [];

function addSerie() {
  var FavSerie = document.getElementById("addLinkSerie").value;
  var FavSerieNome = document.getElementById("addNomeSerie").value;
  if (
    listaUrlSeries.includes(FavSerie) ||
    listaNomeSeries.includes(FavSerieNome)
  ) {
    alert("Você já adicionou essa série!!");
  } else if (
    FavSerieNome == "" ||
    FavSerieNome.endsWith(".jpg") ||
    FavSerieNome.endsWith(".png")
  ) {
    alert("Você deve preencher todos os campos para adicionar!");
  } else {
    if (FavSerie.endsWith(".jpg")) {
      listarSerieNaTela(FavSerie, FavSerieNome);
    } else {
      alert("Insira o link de uma imagem válida!");
    }
  }
  document.getElementById("addLinkSerie").value = "";
  document.getElementById("addNomeSerie").value = "";
}

function listarSerieNaTela(serie, nome) {
  listaUrlSeries.push(serie);
  listaNomeSeries.push(nome);
  var lista = listaNomeSeries.length;
  var i = 0;
  document.getElementById("listaSeries").innerHTML = "";
  for (i; i < lista; i++) {
    document.getElementById("listaSeries").innerHTML +=
      "<div class='conteinerImagens'>" +
      "<h3>" +
      listaNomeSeries[i] +
      "<h3>" +
      "<img class='series-images' src=" +
      listaUrlSeries[i] +
      ">" +
      "</div>";
  }
}

function removeSerie() {
  var FavSerie = document.getElementById("addLinkSerie").value;
  var FavSerieNome = document.getElementById("addNomeSerie").value;
  if (
    listaNomeSeries.includes(FavSerieNome) ||
    listaUrlSeries.includes(FavSerie)
  ) {
    var lista = listaNomeSeries.length;
    for (var r = 0; r < lista; r++) {
      if (
        listaNomeSeries[r] == FavSerieNome ||
        listaUrlSeries[r] == FavSerie
      ) {
        listaNomeSeries.splice(r, 1);
        listaUrlSeries.splice(r, 1);
      }
    }
    lista = listaNomeSeries.length;
    document.getElementById("listaSeries").innerHTML = "";
    for (var o = 0; o < lista; o++) {
      document.getElementById("listaSeries").innerHTML +=
        "<h3>" +
        listaNomeSeries[o] +
        "<h3>" +
        "<img src=" +
        listaUrlSeries[o] +
        ">";
    }
  } else {
    alert(
      "o item não está presente na lista. Verifique se inseriu o nome corretamente"
    );
  }
  document.getElementById("addLinkSerie").value = "";
  document.getElementById("addNomeSerie").value = "";
}