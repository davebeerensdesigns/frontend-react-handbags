import React from "react";

function Tile({title, img, children}){
    return(
        <section>
            {img && <img src={img} /> }
            {!img && <h2>{title}</h2> }
            {children}
        </section>
    );
}

export default Tile;