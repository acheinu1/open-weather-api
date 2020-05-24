var button = document.querySelector(".button")
var inputval = document.querySelector(".inputValue")
var desc = document.querySelector(".discriptn")
var Name = document.querySelector(".name")
var tempe = document.querySelector(".temperature")
var country = document.querySelector(".country")

button.addEventListener("click", function(){
// fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputval.value+"&appid=e09b18071bd4402245cfda328d9554da")
    .then(response=> response.json())
    .then(data => {
        var nameValue= data.name;
        var temperatureVal = data.main.temp;
        var discriptnValue= data.weather[0].description;
        var countryValue = data.sys.country;

        Name.innerHTML = nameValue
        tempe.innerHTML = "the present temp is"+" "+temperatureVal
        desc.innerHTML ="weather description ="+" "+ discriptnValue
        country.innerHTML = nameValue+" "+"is a city in" + " "+countryValue
    })

    .catch( err => alert("invalid city name!") )
})