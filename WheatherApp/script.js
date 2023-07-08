// Data
// Variable to Store the Element
// Function to get the data from weather app
// Maniplute the variable of already created element

let data;
const inputBox=document.getElementById("inputBox");
const CountryName=document.getElementById("countryName");
const StateName=document.getElementById("stateName");
const CityName=document.getElementById("cityName");
const Humidity=document.getElementById("humidity");
const windSpeed=document.getElementById("windSpeed");
const Temprature=document.getElementById("temp");
const imgLogo=document.getElementById("logoImage");
const weatherStaus=document.getElementById("weatherStatus");

const getData=async(event)=>{
    event.preventDefault();
    if(!inputBox.value){
        alert("Enter your City Name :");
        return;
    }
    const city=inputBox.value;

    // fetch Details

    const fetchData=await fetch(`https://api.weatherapi.com/v1/current.json?key=2495916ff03f413bad940056230807&q=${city}`)

    const orgData=await fetchData.json();
    data=orgData;
    console.log(data);

    // Displaying
    CountryName.innerHTML=data.location.country;
    StateName.innerHTML=data.location.region;
    CityName.innerHTML=data.location.name;
    Humidity.innerHTML=data.current.humidity;
    windSpeed.innerHTML=data.current.wind_kph;
    Temprature.innerHTML=data.current.temp_c;
    imgLogo.src=data.current.condition.icon;
    weatherStaus.innerHTML=data.current.condition.text;
}