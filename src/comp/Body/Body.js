import React, { useState } from 'react'
import { RiSunCloudyLine } from "react-icons/ri";
import './Body.css'
import { useEffect } from 'react'
function Body() {
  
    const [info, setinfo] = useState(null)
    const [isloaded, setisloaded] = useState(false)        

    useEffect(() => {
 
    fetch("http://ip-api.com/json/")
    .then((res) => res.json())
    .then((json) => {
        
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${json.lat}&lon=${json.lon}&appid=dc56de3d5c483721d0ce0c28c8c39093&units=metric`)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setinfo(data);
            setisloaded(true)

            
           
        })
    
    })


    
      return () => {
        setinfo(null)
        
      }
    }, [setinfo,setisloaded])
    




 console.log(info);

  return (
 
    <>
        {

    !isloaded ? <div className='loader_cont'> 
    <div className='loader'></div>
     </div> : <div className='body'>
<div id='div'></div>
    <div className='big_bro' >
    




            <div className='skeley'>
                
                    <div className='lower_part' >
                        <div className='temp'>{Math.round(info?.main.temp)}°
                        </div>

                        <div className='loc__time'>

                            <div className='loc'>{info?.name},{info?.sys.country}</div>
                            <div className='date' >{new Date().toLocaleTimeString().slice(0,4)}-{new Date().toLocaleDateString()}</div>

                        </div>

                        <div className='state'>
                            <RiSunCloudyLine size={70} style={{marginLeft:"1px"}} />
                    {info?.weather[0].main}
                        </div>

                    </div>


                

            </div>
            <div className='weather_cont'>
                    <div style={{marginBottom:"40px",fontWeight:"bolder"}}>Weather details</div>
                    <div className='weather_info'>
                        <div>Humidty</div>
                        <div>{info?.main.humidity}%</div>
                    </div>
                    <div className='weather_info'>
                        <div>Wind</div>
                        <div>{info?.wind.speed}km/h</div>
                    </div>
                    <div className='weather_info'>
                        <div>Air pressure</div>
                        <div>{info?.main.pressure}hPa</div>
                    </div>
                    <script src="https://cdn.tailwindcss.com"></script>
                </div>



            </div>

</div>

}
    
    
    </>





  )
}

export default Body



