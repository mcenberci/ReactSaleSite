import React from "react";
import ProductFilter from "./productfilterfunction";
import "./type.css";

function Fashion(){
    return(
        <div className="container salediv">
            <div className="row">
                <h3 className="ph3">Moda</h3>
                <hr className="hr"/>
                <ProductFilter type="Moda"/>
            </div>
        </div>
    );
}
export default Fashion;