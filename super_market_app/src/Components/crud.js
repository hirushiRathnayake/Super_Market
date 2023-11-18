import React, { useState } from 'react'
import '../Styles/crud.css';
import Axios from 'axios';


function Cruds() {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState(0);
  const [Country, setCountry] = useState("");
  const [Position, setPosition] = useState("");
  const [Salary, setSalary] = useState(0);

  const addEmployee = ()=> {
     Axios.post('http://localhost:3002/create',
     {name:Name,
      age:Age,
      country:Country,
      position:Position,
      salary:Salary,
    }).then(()=>{
          console.log("success!");
    });
  };
  return (
    <div>
      <div className='MyData'>
      <label>Name</label>
      <input
       type='text'
       onChange={(event)=>{
        setName(event.target.value);
        }}
        />
      <label>Age</label>
      <input 
       type='number' 
       onChange={(event)=>{
        setAge(event.target.value);
        }}/>
      <label>Country</label>
      <input 
      type='text'
      onChange={(event)=>{
        setCountry(event.target.value);
        }}/>
      <label>Position</label>
      <input 
       type='text'
       onChange={(event)=>{
        setPosition(event.target.value);
        }}/>
      <label>Salary</label>
      <input 
       type='number'
       onChange={(event)=>{
        setSalary(event.target.value);
        }}/>
      <button>Add an Employee</button>
      </div>
    </div>
  )
}

export default Cruds
