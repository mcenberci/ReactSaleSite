import React from "react";
import ProductFilt from "./filterfunc";

function Mysales(){
    return(
        <div className="container salediv">
            <div className="row">
                <h3 className="ph3">Ürünlerim</h3>
                <hr className="hr"/>
                <ProductFilt id={JSON.parse(localStorage.getItem("id"))}/>
            </div>
        </div>
    );
}
export default Mysales;