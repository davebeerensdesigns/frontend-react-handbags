import React from "react";
import Bag1 from "./assets/bag_1.png";

function Product({label, img, title, price}){
    return(
        <article>
            <span>{label}</span>
            <img src={img} />
            <p>{title}</p>
            <h4>€{price}</h4>
        </article>
    );
}

export default Product;