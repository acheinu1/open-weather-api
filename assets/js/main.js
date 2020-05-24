var button = document.querySelector(".button")
var inputval = document.querySelector(".inputValue")
var desc = document.querySelector(".discriptn")
var Name = document.querySelector(".name")
var temp = document.querySelector(".temperature")

button.addEventListener("click", function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputval.value+",uk&appid=e09b18071bd4402245cfda328d9554da")
    .then(response=> response.json())
    .then(data => console.log(data))

    .catch( err => alert("invalid city name!") )
})