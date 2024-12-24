import { Component } from "react";
import Child from "./child";
// import Child1 from "./child";

class Parent extends Component{
    render(){
        return(
            <div>
            <Child/>
            {/* <Child1/> */}
            </div>
        )
    }
}
export default Parent;