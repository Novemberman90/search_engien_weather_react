import React, {useState} from "react"
import { FidgetSpinner } from  'react-loader-spinner'
import axios from "axios"
import './weather.css'
 
<FidgetSpinner
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  ballColors={['#ff0000', '#00ff00', '#0000ff']}
  backgroundColor="#F4442E"
/> 

export default function Weather(){
    let [city, setCity] = useState(" ");
    let [message, setMessage] = useState(false);
    let [weather, setWeather] = useState ({});

 

    /* Search machine*/
    function showWeather (response){
        setMessage(true);
        setWeather({
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            icon: `http://openweathermap.org/img/wn/${
                response.data.weather[0].icon
              }@2x.png`,
              description: response.data.weather[0].description
        }); 
    }
        

        function SearchButoom(event){
            event.preventDefault();
            let apiKey = "c409940fd7208150de003ea7999c3e64";
             let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            axios.get(url).then(showWeather);
        }
            
                /* Search form*/
            function upDateCity(event){
                setCity(event.target.value)
                console.log(city);
            }
                
            let form = ( 
                <form onSubmit={SearchButoom}
                    className="serch_form">
                        <div className="row">
                            <div className="col-6">
                                <input type="text"
                                    placeholder="Enter your city"
                                    onChange={upDateCity}
                                    className="form-control" />
                                    
                            </div>
        
                     <div className="col-6">
                         <input type="submit"
                         value="Search"
                                 className="btn btn-danger search_button"/>
                     </div>
                   
                        </div>
                    
                </form>
                
                );

                /*message */

                 if (message) {
                    return (
                        <div className="overwiev"> {form}
                            <h1>{city}</h1>
                            <ul>
                                <li> Temperature: {Math.round (weather.temperature)} °С</li>
                                <li> Humidity: {weather.humidity} % </li>
                                <li> Wind: {weather.wind} km/s</li>
                                <li> Description: {weather.description} </li>
                                <li> <img src={weather.icon} alt={weather.description} /> </li>
                            </ul>
                        </div>
                    )} else {
                        return (
                            <div className="overwiev"> {form}
                            <h1>Loading... <FidgetSpinner /> </h1>
                            <ul>
                                <li> Temperature: Loading... °С</li>
                                <li> Humidity: Loading... % </li>
                                <li> Wind: Loading...  km/s</li>
                                <li> Description: Loading... </li>
                                 
                            </ul>
                        </div>
                        )
                    }  

}