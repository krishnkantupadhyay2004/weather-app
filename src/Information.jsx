import './Information.css'


export default function Information({res}){

    return (
        <div className="infodiv">
        
        <h5 className="temp">{res.temp}°C</h5>
       
        <p className='condition'>{res.condition}</p>
        <p className='temp-max'>HIGH : {res.temp_max}°C</p>
        <p className='temp-min'>LOW : {res.temp_min}°C</p>
        <h3 className='details'>Details</h3>
        <div className='cardbox'>
           
            <div className='cardone'>
            <p className='wind'>Wind</p>
            <p className='wind-speed'>{res.wind}km/h</p>
            </div>
              <div className='cardone'>
            <p className='wind'>Humidity</p>
            <p className='wind-speed'>{res.humidity}%</p>
            </div>
             <div className='cardone'>
            <p className='wind'>Visibility</p>
            <p className='wind-speed'>{res.visibility/1000}km</p>
            </div>
             <div className='cardone'>
            <p className='wind'>Pressure</p>
            <p className='wind-speed'>{res.pressure}hPa</p>
            </div>
        </div>
        <div className='foot'>
            <p>made by krishna</p>
        </div>
        </div>
    )
}