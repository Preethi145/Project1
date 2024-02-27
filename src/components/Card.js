const Card=(props)=>{
    // console.log(props)
    console.log(props.res.info)
  const {name,cuisines,avgRating,deliveryTime,costForTwo,cloudinaryImageId} =props.res.info
   
  const url="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
  
  
    // const {name,role,img}=props.data
    return (
      <div className="card">
      <img className="res-logo" src={url+cloudinaryImageId}/>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} Rating</h4>
      <h5>{deliveryTime} minutes</h5>
      <h6> {costForTwo}</h6>
   
    </div>
    )
  }
  export default Card