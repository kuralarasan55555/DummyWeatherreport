import axios from 'axios';
import React, { useState } from 'react'

function GetSingleWea() {
 const [date,setDate]=useState(new Date("yyyy/mm/dd"))
 const postDate=(e)=>{
    e.preventDefault();
    axios.get('http://localhost:5124/WeatherForecast/GetWeather/${date}')
 }
  return (
    <div>
      <input 
            type="date-local"
            name="startDate"
            onChange={(e)=>
                setDate(date)
            }
            placeholder="Enter the date"
            />
        <br></br>
        <button type="submit" name="SUBMIT" onClick={postDate}/> 
    </div>
  )
}

export default GetSingleWea
