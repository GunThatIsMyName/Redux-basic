import React, { useState } from 'react';

const list = ["decrease","reset","increase"]

function App() {
  const [number,setNumber]=useState(0)
  const handleClick=(e)=>{
    const {type}=e.target.dataset;
    if(type==="decrease"){
      setNumber((current)=>current -1)
    }else if(type==="increase"){
      setNumber((current)=>current+1)
    }else{
      setNumber(0)
    }
  }
  return <section>
    <h1>Counter</h1>
    <h2 style={{color:number>0?"green":"red"}} >{number}</h2>
    <div className="container">
    {list.map((item,idx)=>{
      return <button data-type={item} onClick={handleClick} key={idx} >{item}</button>
    })}
    </div>
  </section>
}

export default App;
