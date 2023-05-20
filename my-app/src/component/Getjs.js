import React from 'react'
import { useState ,useEffect} from 'react'
import axios from 'axios';
function Getjs() {
  const [array,setArray]=useState([])
  const [errmsg,seterrmsg]=useState('')
  useEffect(()=>{
      axios.get('http://localhost:5124/WeatherForecast')
        .then(response=>{
          console.log(response.data)
          setArray(response.data)
          console.log("hii")
        })
        .catch(err=>{
          console.log(err)
          seterrmsg("failed to fetch data");
        })
  },[])
if(array.length>0)
{
  return(
        <div className='App'>
        <h1 className='animate-heading'>FIVE DAYS DUMMY WEATHER APPLICATION USING REACT AND DOTNET</h1>
        {
        array.length?
        <table className="center animate-table">
        <thead>
           <tr className='App-header'>
                <th>DATE</th>
                <th>TEMPERATURE FAHRENHEIT</th>
                <th>TEMPERATURE CELSIUS</th>
                <th>SUMMARY</th>
            </tr>
          </thead>
          <tbody className='App-header'>
          {
          array.map(post=>(
          <tr key={post.id}>
            <td>{post.date}</td>
            <td>{post.temperatureF}</td>
            <td>{post.temperatureC}</td>
            <td>{post.summary}</td>
          </tr>
          ))}
          </tbody>
          </table>:""
      } 
        </div>
  );
}
}

export default Getjs
