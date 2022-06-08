import React from "react";
import ProductFilter from "./productfilterfunction";
import "./type.css";

function Furniture(){
    return(
        <div className="container salediv">
            <div className="row">
                <h3 className="ph3">Mobilyalar</h3>
                <hr className="hr"/>
                <ProductFilter type="Mobilya"/>
            </div>
        </div>
    );
}
export default Furniture;