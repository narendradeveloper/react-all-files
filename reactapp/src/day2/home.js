import { Component } from "react";
import Footer from "../day2/class2";
import About from "../day2/header";
import Main from "../day2/main";
import "./home.css"
class Home extends Component{
    render(){
        return(
            <div>
            <Footer/>
            <About/>
            <Main/>
            </div>
        )
    }
}
export default Home;