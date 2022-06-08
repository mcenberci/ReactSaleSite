import React from "react";
import ProductFilter from "./productfilterfunction";
import "./type.css";

function Electronics(){
    return(
        <div className="container salediv">
            <div className="row">
                <h3 className="ph3">Elektronik Ürünler</h3>
                <hr className="hr"/>
                <ProductFilter type="Elektronik"/>
            </div>
        </div>
    );
}
export default Electronics;