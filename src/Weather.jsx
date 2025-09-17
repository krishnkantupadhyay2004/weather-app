import Heading from "./Heading"
import { useState ,useEffect} from "react"
import './Weather.css'
import Input from "./Input"
import Days from "./Days"
import Image from "./Image"
import Information from "./Information"


export default function Weather(){



let [weatherinfo,setWeatherinfo] = useState(null);
let [city,setCity] = useState("indore");


let changeinfo =  (res) => {
    setWeatherinfo(res);
    setCity(res.city);
    
}

// console.log("weatherinfo",weatherinfo);

    return(
        <div className="box">
            <Heading/>
            <Input changeinfo = {changeinfo} />
            <Days/>
          
             <Image city = {city}/>
            
             {weatherinfo ? (
              <>
        <Information res={weatherinfo} />
        
         </>
      ) : (
        <p>Loading weather...</p>
      )}
      
           
         </div> 
    )
}