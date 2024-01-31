import axios from 'axios' ; 
import { useState } from 'react';
function App() {  

    const [deg , Setdeg] = useState("0") ; 
    const [city , Setcity] = useState("France")
    const [desc , Setdesc] = useState("Raining") ;
    const [enteredvalue , Setenteredvalue] = useState("") ;  

    function handleInput(e) {
        Setenteredvalue(e.target.value) ;
    }


    function getData(){
       var weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${enteredvalue}&appid=312bef9d7d7a6a2efd2de45683b5051d`) 

       weather.then(function(dalta){
        Setdeg(dalta.data.main.temp) 
        Setcity(dalta.data.name) 
        Setdesc(dalta.data.weather[0].main) 

       })
    }

  return (
    <div className="flex flex-row justify-center h-[100vh] items-center" >
      <div style={{backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)"}} className="p-2 rounded-md shadow">
        <h2 className="font-medium">Hey! ⛅</h2> 
        <p className="text-xs">Do you want to know the weather Report :)</p> 
        <input onChange={handleInput} className="rounded-md h-6 text-sm mt-2 p-1 outline-none" placeholder="City Name ?"/> 
        <br/>
        <button className="bg-black text-white rounded-lg p-1 text-xs mt-2" onClick={getData}>Get Report ⚡</button> 

        <p className="text-xs mt-2">Degree : {deg} | City : {city} | Weather : {desc}</p>
      </div>
    </div>
  );
}

export default App;
