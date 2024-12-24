import { Component } from "react";
import PrifilCard from "./profileCard";

export default class Spin extends Component {
  constructor() {
    console.log("constractaring");
    super();
    this.state = { products: [] };
  }
  componentDidMount() {
    console.log("mounting");
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ products: json });
      });
  }

  static getDeraivedStateFromProps() {
    console.log("statederaving from state");
    return null;
  }

  render() {
    console.log("rendaring");
    return (
      <div>
        <div>
            {this.state.products.map((a,b)=>{
                return(
                    <div>
                    <h1>{a.title}</h1>
                    </div>
                )
            })}
        </div>
      </div>
    )
  }
}