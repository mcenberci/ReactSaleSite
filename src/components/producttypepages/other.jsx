import React from "react";
import ProductFilter from "./productfilterfunction";
import "./type.css";

function Other(){
    return(
        <div className="container salediv">
            <div className="row">
                <h3 className="ph3">Diğer Ürünler</h3>
                <hr className="hr"/>
                <ProductFilter type="Diğer"/>
            </div>
        </div>
    );
}
export default Other;