import { Component } from "react";
class Fun extends Component{
    constructor(){
        super()
        this.state={text:"hello"}
    }
    hande=(e)=>{
        e.hande={}
        
    }
    render(){
        return(
            <div>
            <form>
                <input type="text"></input>
                <button type="sumbit">sumbit</button>
            </form>
           
            </div>
        )
    }
}
export default Fun;