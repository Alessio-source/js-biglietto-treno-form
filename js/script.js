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
  }

}
