import React from "react";
import "./sale.css";
import Form from "./form";

function Sale(){
    return (
        <div className="container salediv">
            <div className="row dpflex">
                <div className="col-3">
                    <img className="saleDef" src="https://i.hizliresim.com/79pomi3.png" alt="" />
                    <div className="uploadImageCard">
                        <input className="uploadImage" type="file" id="img" name="img" accept="image/*" /></div>
                </div>
                <div className="col-8 ">
                    <Form/>
                </div>
            </div>
        </div>
    );}

export default Sale;