import Card from "./Card";
import  { useEffect, useState } from "react";
const Body=()=>{


    const [listOfRes,setListOfRes]= useState([])
  
  
      useEffect(()=>{
        const url="https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  
  
        const fetchData=async()=>{
          const data= await fetch(url)
          const response=await data.json()
  
  
         let resData=response.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
     console.log(resData)
         setListOfRes(resData)
  
  
        }
        fetchData()
      },[])
  
  
    return (
      <div >
  
  
      <button onClick={()=>{console.log("clicked")}}>Top rated</button>
        <div className="container">
        {
          listOfRes.map((each)=>(<Card key={each.info.id} res={each}/>) )
        }
        </div>
       
         
      </div>
    )
  }
  export default Body