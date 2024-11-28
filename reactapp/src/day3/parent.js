import React, {Component} from "react";
import Child from "./child";
import Greand from "./grandchil";
class Parent extends Component{
    render(){
        return(
<div>
<h1>{this.props.admin} </h1>
<h1>{this.props.login} </h1>
     {
        this.props.admin? <Child/> : <Greand/>
       
   }

</div>
        )
    }
}
export default Parent;