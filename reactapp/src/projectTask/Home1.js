import React,{useState} from "react";
import alonimg from "./alonimg.webp";


const   Project =()=>{
    const [active,setactive] = useState("header");



    return (
        <div style={{display:"flex",paddingLeft:"5vh"}}>
        <div style={{paddingTop:"10vh",rowGap:"1vh",display:"grid" ,width:"5vh",height:"5vh"}}>
<button onClick={() =>setactive ("header")}>header</button>
<button onClick={() =>setactive ("middles")}>middles</button>
<button onClick={()=>setactive("footer")}>footer</button>
        </div>
        {active === "header" &&(
            <div style={{color:"red" ,width:"50px",height:"50px",marginTop:"10vh",display:"flex",}}>
            <img src={alonimg} alt="alonimg" style={{width:"200px",height:"200px",marginLeft:"10vh",border:"2px solid black",gap:"5vh"}}/>
            <hi>welcome to my pages</hi>
            <h2>this is header</h2>
            </div>
        )}
        {active === "middles" &&(
            <div style={{color:"green",backgroundColor:"yellow",width:"50%",height:"50%",marginTop:"10vh",marginLeft:"10vh"}}>
                <h1>this is middles page</h1>
                <h2>welcome to middles</h2>
            </div>
        )}
        {active === "footer" &&(
            < div style={{color:"blue",backgroundColor:"navy",width:"50%",height:"50%",marginTop:"10vh",marginLeft:"10vh"}}>
                <h1>this is my woths</h1>
                <h1>this mu pagess... </h1>
            </div>
        )}
        <div>

        </div>
        </div>
    )
}
export default Project;

