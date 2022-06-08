import React from "react";
import ProductFilter from "./productfilterfunction";
import "./type.css";

function Sport(){
    return(
        <div className="container salediv">
            <div className="row">
                <h3 className="ph3">Spor Eşyaları</h3>
                <hr className="hr"/>
                <ProductFilter type="Spor Eşyaları"/>
            </div>
        </div>
    );
}
export default Sport;