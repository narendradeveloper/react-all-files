import React, { useState } from "react";

const Randomimg = () => {
  const [image, setImage] = useState("");

  const feachrandom = async () => {
    try {
      const respons = await fetch("https://fakestoreapi.com/products");
      const product = await respons.json();

      const index = Math.floor(Math.random() * product.length);
      const randomProduct = product[index];

      setImage(randomProduct);
    } 
    catch (error) {
      console.error("error fecthing product data :", error);
    }
  };
  return (
    <div
      style={{
        marginLeft: "30vh",
        border: "2px solid black",
        width: "100vh",
        textAlign: "center",
        backgroundColor: "silver",
        marginTop: "5vh",
      }}
    >
      <button
        onClick={feachrandom}
        style={{ cursor: "pointer", backgroundColor: "green", height: "5vh" }}
      >
        Show Random image
      </button>

      {image && (
        <div>
          <p>Image Name: {image.title}</p>
          <img
            src={image.image}
            alt={image.title}
            style={{
              width: "20vh",
              height: "20vh",
              borderRadius: "20vh",
              justifyContent: "center",
            }}
          />
        </div>
      )}
    </div>
  );
};
export default Randomimg;
