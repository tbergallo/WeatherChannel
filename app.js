let input = document.querySelector(".mainInput")

let botonEnviar = document.querySelector(".botonEnviar")
let container = document.querySelector(".container")
let spanCity = document.querySelector("#ciudad")
let spanTemp = document.querySelector("#temperatura")
let spanGrad = document.querySelector("#grados")
let spanIcon = document.querySelector("#wicon")
let spanDesc = document.querySelector("#descripcion")

function cargarCiudad () {
    let ciudad = input.value
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=95176c8edea30e33338e0eaddd53a916"+ "&units=metric", function(data){
    container.style.visibility = "visible";
    spanCity.innerHTML = data.name;
    spanTemp.innerHTML = data.main.temp + "<sup>°C</sup>";
    spanIcon.setAttribute("src", "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png");
    spanDesc.innerHTML = data.weather[0].description;
    console.log(data);
    }).fail (function(){
        alert("La ciudad que esta buscando no existe.")
    })
}

function buttonEffect () {
    buttonAlert()
    input.value = ""
}

function buttonAlert () {
    if (input.value == "") {
        alert("Ingrese una ciudad.")
    }
    else {
        cargarCiudad()
    }
}


botonEnviar.addEventListener("click", buttonEffect)