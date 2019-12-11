//Conor - Google maps
function initMap() {
  var location = {
    lat: 53.3489655,
    lng: -6.243028
  };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  })
}


// calculator
function computeBMI() {
  // inputs
  var height = Number(document.getElementById("height").value);
  var heightunits = document.getElementById("heightunits").value;
  var weight = Number(document.getElementById("weight").value);
  var weightunits = document.getElementById("weightunits").value;


  //Convert to metric
  if (heightunits === "inches") height /= 0.393700787;
  if (weightunits === "lb") weight /= 2.20462;

  //Perform calculation

  // var BMI = weight /Math.pow(height, 2)*10000;
  var BMI = Math.round(weight / Math.pow(height, 2) * 10000);

  //Display result of calculation
  document.getElementById("output").innerText = Math.round(BMI * 100) / 100;

  var output = Math.round(BMI * 100) / 100
  if (output < 18.5)
    document.getElementById("remark").innerText = "You are Underweight, we recommend a higher calorie count";
  else if (output >= 18.5 && output <= 25)
    document.getElementById("remark").innerText = "You are Normal weight";
  else if (output >= 25 && output <= 30)
    document.getElementById("remark").innerText = "You are considered Obese, we recommend higher calorie restrictions and more exercise";
  else if (output > 30)
    document.getElementById("remark").innerText = "You are considered Overweight, we recommend calorie restrictions and more exercise";
  // document.getElementById("answer").value = output;
}