import React from "react";
import ProductFilter from "./productfilterfunction";
import "./type.css";

function Watch(){
    return(
        <div className="container salediv">
            <div className="row">
                <h3 className="ph3">Saat ve Takı</h3>
                <hr className="hr"/>
                <ProductFilter type="Saat ve Takı"/>
            </div>
        </div>
    );
}
export default Watch;