import React from "react";
import ProductFilter from "./productfilterfunction";
import "./type.css";

function Book(){
    return(
        <div className="container  salediv">
            <div className="row">
                <h3 className="ph3">Kitaplar</h3>
                <hr className="hr"/>
                <ProductFilter type="Kitap"/>
            </div>
        </div>
    );
}
export default Book;