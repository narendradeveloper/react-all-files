import React, { useState } from "react";

const RandomCircles =()=>{
  const [clickCount ,setClickcount]=useState(0)
  const [circles,setcircle]=useState([])


  const color=["#ff9a68","#dceb08","#08eb12","#08c7eb","#4908eb"]

  const Rondom =()=>{
    const x =Math.floor(Math.random()*color.length)
    return color[x]

  }
  const generetrondom =(size,x,y)=>{
    const color =Rondom()
    return {x,y,size,color}
  }
const handleclick =(e)=>{
  setClickcount ((prev)=>prev +1)
  if(clickCount <2){

    const mouseX = e.clientX
    const mouseY = e.clientY

    const containerwidth = window.innerHeight
    const continer1higth = window.innerWidth

    const xparent =(mouseX / containerwidth)*100
    const Yparent =(mouseY / continer1higth)*100

    const circleSize =Math.floor(Math.random()*30)+20
    const newcircle =generetrondom (circleSize,xparent,Yparent)

    setcircle ((preveces) =>[...preveces,newcircle])
  }
    if(clickCount ===2){
      setClickcount(0);
      setcircle([])
    
  }
}


  return (
    <div style={{
      width:"100vw",
      height:"100vh",
      backgroundColor:"white",
      overflow:"hidden",
      cursor:"pointer",

    }}
       onClick={handleclick}
     > {circles.map((circle,index)=>(
        <div
        key={index}
        style={{
          position:"absolute",
          top:`${circle.y}%`,
          left:`${circle.x}%`,
          width:`${circle.size}vh`,
          height:`${circle.size}vh`,
          backgroundColor:circle.color,
          borderRadius:"50%",
          transform:"translate(-50% ,-50%)",
        }}
        ></div>
      ))}
      </div>
    
  )
}
export default RandomCircles;
