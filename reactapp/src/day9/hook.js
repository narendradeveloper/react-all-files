import React,{useState} from "react";


const Demo=()=>{

    const[count,updatecounter]=useState(0)

    const countHandlaing=(value)=>{
        if(value ==="c"){
            updatecounter("")
        }
        else if(value ==="="){
            // updatecounter("=")
            try{
                updatecounter(eval()(count).toString());
            }
            catch{
                // updatecounter("error");
            }
        }
            else{
            updatecounter((prevesvalue)=>prevesvalue+value);
            }


        }
        const buttons=[
            "7","8","9","/",
            "4","5","6","*",
            "1","2","3","-",
            "0",".","c","+","="
        ]
    


    return(
        <div>
           <div>{count }</div>
           <div>{buttons.map((btn,index)=>(
            <button key={index} onClick={()=> countHandlaing(btn)}
            className={btn === "="? "equals":""}>{btn}
            </button>
           ))}</div>
        </div>
    );

}
export default Demo;