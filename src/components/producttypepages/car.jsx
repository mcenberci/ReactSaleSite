import React from "react";
import ProductFilter from "./productfilterfunction";
import "./type.css";

function Car(){
    return(
        <div className="container salediv">
            <div className="row">
                <h3 className="ph3">Arabalar</h3>
                <hr className="hr"/>
                <ProductFilter type="Araba"/>
            </div>
        </div>
    );
}
export default Car;