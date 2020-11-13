function generate() {

  // variabili utili
  var name = document.getElementById("nameInput").value;
  var lastname = document.getElementById("lastnameInput").value;
  var km = document.getElementById("kmInput").value;
  var age = document.getElementById("ageSelect").value;

  var ticket = document.getElementById("ticket");

  var nameandlastnameElement = document.getElementById("nameandlastname");
  var trainElement = document.getElementById("train");
  var carriageElement = document.getElementById("carriage");
  var priceElement = document.getElementById("price");
  var categoryElement = document.getElementById("category");

  if (name == "" | lastname == "" | km == "" | age ==  "") {
    alert("Uno o più campi non sono stati compilati");
  } else {

    ticket.className = "show";

    var code = Math.floor(Math.random() * 10000) + 900000;
    var carriage = Math.floor(Math.random() * 9 ) + 1;
    var price = 0;
    var category = "";

    if (age == "minorenne"){
      price = ((0.21 * 80) / 100) * km;
      category = "Junior (20% Sconto)";
    } else if (age == "over65") {
      price = ((0.21 * 60) / 100) * km;
      category = "Silver (40% Sconto)"
    } else {
      price = 0.21 * km;
      category = "Maggiorenne";
    }

    nameandlastnameElement.innerHTML = "Nome e cognome: " + name + " " + lastname;
    trainElement.innerHTML = "Codice treno: " + code;
    carriageElement.innerHTML = "Numero carrozza: " + carriage;
    priceElement.innerHTML = "Prezzo: " + price.toFixed(2) + "€";
    categoryElement.innerHTML = "Categoria: " + category;
  }

}

function cancel() {

  //variabili utili
  var ticket = document.getElementById("ticket");

  var nameandlastnameElement = document.getElementById("nameandlastname");
  var trainElement = document.getElementById("train");
  var carriageElement = document.getElementById("carriage");
  var priceElement = document.getElementById("price");
  var categoryElement = document.getElementById("category");

  document.getElementById("nameInput").value = "";
  document.getElementById("lastnameInput").value = "";
  document.getElementById("kmInput").value = "";
  document.getElementById("ageSelect").value = "minorenne";

  ticket.className = "hidden";
  nameandlastnameElement.innerHTML = "";
  trainElement.innerHTML = "";
  carriageElement.innerHTML = "";
  priceElement.innerHTML = "";
  categoryElement.innerHTML = "";
}
