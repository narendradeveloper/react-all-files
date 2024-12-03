import { Component } from "react";
import "./conditional.css";
import mobile from "./mobile.png";
import car from "./car.jpeg";
import laptop from "./laptop.webp";
import watch from "./watch.jpeg";
import bike from "./bike.jpeg";
import shirt from "./shirt.jpeg";

const obj = [
  {
    productName: "mobile",
    productPrie: 59500,
    productAvalible: false,
    productImg: "./mobile.png",
  },

  {
    productName: "laptop",
    productPrie: 9000,
    productAvalible: true,
    productImg: "./laptop.webp",
  },
  {
    productName: "watch",
    productPrie: 1000,
    productAvalible: false,
    productImg: "./watch.jpeg",
  },
  {
    productName: "bike",
    productPrie: 160000,
    productAvalible: true,
    productImg: "./bike.jpeg",
  },
  {
    productName: "care",
    productPrie: 200000,
    productAvalible: false,
    productImg: "./car.jpeg",
  },
  {
    productName: "shirt",
    productPrie: 200,
    productAvalible: true,
    productImg: "./shirt.jpeg",
  },
];

class Home extends Component {
  render() {
    return (
      <>
        <div className="mainbox">
          <div className={obj[0].productAvalible ? "avalable" : "unavalable"}>
            <h1> {obj[0].productName}</h1>
            <img src={mobile} alt="mobile" className="img"></img>
            <h1>{obj[0].productPrie}</h1>
          </div>
          <div className={obj[1].productAvalible ? "avalable" : "unavalable"}>
            <h1> {obj[1].productName}</h1>
            <img src={laptop} alt=""></img>
            <h1>{obj[1].productPrie}</h1>
          </div>
          <div className={obj[2].productAvalible ? "avalable" : "unavalable"}>
            <h1>{obj[2].productName}</h1>
            <img src={watch} alt=""></img>
            <h1>{obj[2].productPrie}</h1>
          </div>
          <div className={obj[3].productAvalible ? "avalable" : "unavalable"}>
            <h1>{obj[3].productName}</h1>
            <img src={bike} alt=""></img>
            <h1>{obj[3].productPrie}</h1>
          </div>
          <div className={obj[4].productAvalible ? "avalable" : "unavalable"}>
            <h1>{obj[4].productName}</h1>
            <img src={car} alt=""></img>
            <h1>{obj[4].productPrie}</h1>
          </div>
          <div className={obj[5].productAvalible ? "avalable" : "unavalable"}>
            <h1>{obj[5].productName}</h1>
            <img src={shirt} alt=""></img>
            <h1>{obj[5].productPrie}</h1>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
