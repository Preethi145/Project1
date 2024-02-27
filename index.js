/*import { useState } from "react";
import  ReactDOM  from "react-dom/client";
function Favaoritecolor(){
    const[color,setcolor]=useState("red")
    return <h1>{color}</h1>
}

const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(<Favaoritecolor/>) 

import { useState } from "react";
import  ReactDOM  from "react-dom/client";
function Favaoritecolor(){
    const[color,setcolor]=useState("red")
    return(
        <div>
            <h1>{color}</h1>
            <button onClick={()=>setcolor("blue")}></button>
        </div>
    )
}


const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(<Favaoritecolor/>) 

import { useState } from "react";
import ReactDOM from "react-dom/client";

function Car() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  return (
    <div>
        <h1>My {brand}</h1>
        <p>
        It is a {color} {model} from {year}.
      </p>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />); 

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />); 


import {useState} from "react";
import  ReactDOM  from "react-dom/client";
const App =()=>{
    const[name,setname]=useState("javascript")
    return(
        <div>
            <h1>{name}</h1>
            <button onClick={()=>setname("reactjs")}>change</button>
        </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>); 

import {useState} from "react";
import  ReactDOM  from "react-dom/client";
const App =()=>{
    const[count,setcount]=useState(0)
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setcount(count+1)}>change</button>
        </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>); 

import {useState} from "react";
import  ReactDOM  from "react-dom/client";
const App =()=>{
    const[count,setcount]=useState(0)
    return(
        <div>
            <p>You Clicked{count} times</p>
            <button onClick={()=>setcount(count+1)}>change</button>
        </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>);  
import React, { useState, useEffect } from 'react';
import  ReactDOM from 'react-dom/client';

function DataFetcher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from an
    const url='https://api.example.com/data'
    
    const fetchData=async()=>{
        const data= await fetch(url)
        const response=await data.json()
        //console.log(response)
        setData(response)
 
 
       }
       fetchData()
     },[])
 
       
; // Empty dependency array runs this effect only on mount

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<DataFetcher/>);  */

 





