import { useEffect, useState } from 'react'

function Main(props) {
  
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("")
  const [threat, setThreat] = useState("")
  const [description, setDescription] = useState("")
  let currentClick = 0
  const [count, setCount] = useState(5)
  useEffect(() => {
  fetch("https://chemspill-api.herokuapp.com/incidents")
    .then(response => response.json())
    .then(data => setDate(data[count].open_date))
  });

    useEffect(() => {
    fetch("https://chemspill-api.herokuapp.com/incidents")
    .then(response => response.json())
      .then(data => setLocation(data[count].location))
    });

    useEffect(() => {
  fetch("https://chemspill-api.herokuapp.com/incidents")
    .then(response => response.json())
    .then(data => setDescription(data[count].description))
  });
      
    useEffect(() => {
    fetch("https://chemspill-api.herokuapp.com/incidents")
    .then(response => response.json())
      .then(data => setName(data[count].name))
    });
      
      useEffect(() => {
        fetch("https://chemspill-api.herokuapp.com/incidents")
        .then(response => response.json())
        .then(data => setThreat(data[count].threat))
      });
  

 
  
  return (
    <div className="maincontain">
      <h1>{name}</h1>
      <p className="card">date: {date}</p>
      <p className="card">Location: {location}</p>
      <p className="card">Type of Spill: {threat}</p>
      <p className="card">Description:  {description}</p>
      <img src=''></img>
      <div className='next'>
        <button className="spillButton" onClick={() => setCount(count + 1)}>Next Spill</button>
        </div>
    </div>
  )

}


export default Main