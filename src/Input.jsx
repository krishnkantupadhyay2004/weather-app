import './Input.css';
import {useEffect, useState} from 'react';
export default function Input({changeinfo}){
    
       let API_key = "35b5d59fcd559189674656ebef05c93d";
    let [city,setCity] = useState("indore");

    let getinfo = async () => {

        let res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_key}&units=metric`);
       
        let data = await res.json();
        
        let info = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${API_key}&units=metric`);
       
        let weather = await info.json();
        console.log("weather",weather);

         let result = {
            city : weather.name,
            temp : weather.main.temp,
            temp_max : weather.main.temp_max,
            temp_min : weather.main.temp_min,
            condition: weather.weather[0].description,
            wind : weather.wind.speed,
            humidity : weather.main.humidity,
            visibility: weather.visibility,
            pressure: weather.main.pressure,

        };
        
     return result;

    }

    let handlechange = (event) => {

        setCity(event.target.value);

    }

    let handlesubmit = async (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getinfo();
        changeinfo(newInfo);
    }

   useEffect(()=>{
    let fetcheddata = async ()=>{
     let newInfo = await getinfo();
     setCity("");
     changeinfo(newInfo);
    }
    fetcheddata();
   },[])
  
    return(
        
        <form onSubmit = {handlesubmit}>
        <input type="text" placeholder="enter city or airport" className="input" value={city} onChange={handlechange}></input>
        </form>
    )
} 