// EMAIL:::
// #### xotofof509@mowline.com


const searchCity = (event) => {
    event.preventDefault();
    let showTemp = document.getElementById('showTemp')
    let showWind = document.getElementById('showWind')
    let showWeat = document.getElementById('showWeat')
    let cityNameDash = document.getElementById('cityName') 
    let feelLike = document.getElementById('fLike')
    let humidity = document.getElementById('Humidity')
    let searchUser = document.getElementById('searchBtn').value
    let tempPic = document.getElementById('tempPic')
    let weatPic = document.getElementById('weatPic')
    let logitude = document.getElementById('longitude')
    let latitude = document.getElementById('latitude')
    let seaLevel = document.getElementById('seaLevel')
    let windDegree = document.getElementById('windDegree')
    let windImg = document.getElementById('windImg')
    let tableBody = document.getElementById('tableBody')

    cityNameDash.innerHTML = `${searchUser}`
    
    
    const specificDate = new Date()
    let hours = specificDate.getHours()
    let miuntes = specificDate.getMinutes()
    let seconds = specificDate.getSeconds()
    let year = specificDate.getFullYear()
    let months = specificDate.getMonth() + 1
    let day = specificDate.getDate()
 

    let setTime = `${hours}:${miuntes}:${seconds}`
    let setDate = `${months}/${day}/${year}`
    // console.log(setTime);
    
    localStorage.setItem('city',searchUser)
    localStorage.setItem('Time',setTime)
    localStorage.setItem('Date',setDate)

    const Kelvin = 273.15;
    let apiKey = '670fee4ed0e73646dec06610e41b4cc8'
    // let city = 'Karachi'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchUser}&appid=${apiKey}`
    
    async function GetData() {
        try {
            const response = await fetch(url);
            const result = await response.json();
            console.log(result);
            let temperature = result.main.temp - Kelvin
            console.log(temperature.toFixed(2) + '°C');
            showTemp.innerHTML = `${temperature.toFixed(2) + '°C'}`
            console.log(result.weather[0].main)
            showWeat.innerHTML = `${result.weather[0].main}`
            console.log(result.wind.speed)
            showWind.innerHTML = `${result.wind.speed}`
            let calFeel = result.main.feels_like - Kelvin;
            feelLike.innerHTML = `${calFeel.toFixed(2)}`
            humidity.innerHTML = `${result.main.humidity }`
            logitude.innerHTML = `${result.coord.lon}`
            latitude.innerHTML = `${result.coord.lat}`
            seaLevel.innerHTML = `${result.main.sea_level}`
            windDegree.innerHTML = `${result.wind.deg}`
            localStorage.setItem("Temp", temperature.toFixed(2) + '°C')

            // console.log(tempPic.src = '');
            if(temperature >= 26){  
                tempPic.src = 'SUNNY TEMP.PNG'       
                tempPic.style.width = '126px'
                tempPic.style.height = '191px'          
            }else{
                tempPic.src = 'COLD TEMP.PNG'
                tempPic.style.width = '126px'
                tempPic.style.height = '191px'
            }
            let weather = result.weather[0].main;
            if(weather.toUpperCase() === 'HAZE'){
                weatPic.src = 'WINDY.PNG'
            }else if(weather.toUpperCase() === 'CLEAR'){
                weatPic.src = 'CLOUDY.PNG'
            }else if(weather.toUpperCase() === 'SNOW'){
                weatPic.src = 'SNOWY.PNG'
            }

            let wind = result.wind.speed;

            if(wind >= 9.0){
                windImg.src = 'HEAVY WIND.PNG'
            }else{
                windImg.src = 'HEAVY WIND.PNG'
            }
            let getCity = localStorage.getItem('city')
            let getTime = localStorage.getItem('Time')
            let getDate = localStorage.getItem('Date')
            let getTemp = localStorage.getItem('Temp')
            console.log(getCity);
            console.log(getDate);
            
            tableBody.innerHTML += `<tr>
              <th scope="row" class="text-start">${getCity}</th>
              <td><svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg>${getTime}</td>
              <td><svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg>${getDate}</td>
              <td><svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg>${getTemp}</td>
            </tr>`

        } catch (error) {
            console.error(error);
        }
        
    }
    
    
    GetData()
    
    
}


// const Kelvin = 273.15;
// let apiKey = '670fee4ed0e73646dec06610e41b4cc8'
// let city = 'Karachi'
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

// async function GetData() {
//     try {
//         const response = await fetch(url);
//         const result = await response.json();
//         console.log(result);
//         let conv = result.main.temp - Kelvin
//         console.log(conv.toFixed(2) + '°C');
        
//     } catch (error) {
//         console.error(error);
//     }
    
// }


// GetData()

