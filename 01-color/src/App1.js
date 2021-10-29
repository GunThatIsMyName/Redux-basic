import React, { useEffect, useState } from "react";
import reviews from "./app1D";

const App1=()=>{
    const [idx,setIdx]=useState(0)
    const {image,text,name,job}=reviews[idx];
    const handleClick=(e)=>{
        const {type}=e.target.dataset;
        if(type==="left"){
            setIdx((current)=>{
                if(current===0){
                    return current = reviews.length-1;
                }
                return current-1;
              })
        }
        if(type==="right"){
            setIdx((current)=>{
                if(current>=reviews.length-1){
                    return current = 0;
                }
                return current+1
              })
        }
        if(type==="random"){
            const randomNumber = Math.floor(Math.random()*reviews.length);            
            setIdx(randomNumber)
        }
    }
    return(
        <>
            <h1> hello</h1>
            <img className="image-app" src={image} alt={name} />
            <h3>{name}</h3>
            <h3>{job}</h3>
            <p>
                {text}
            </p>
            <button data-type="left" onClick={handleClick} >left</button>
            <button data-type="right" onClick={handleClick} >right</button>
            <button data-type="random" onClick={handleClick} >surprise</button>
        </>
    )
}

export default App1;