import './Image.css'

export default function Image({city}){

    return(
        <div className='imgdiv'>
        <img src='bg.jpg' alt="image" width='360' className="bgimg"></img>
        <p className='city'>{city}</p>
        </div>
    )
}