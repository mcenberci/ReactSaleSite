import React from "react";
import * as PRD from "./product.jsx";
import "./mainpage.css";
function Mainpage() {
    return (
        <div>
            <div className="container mlr-0 divFrame">
                <div className="row">
                    <img className="mainpageimg" src={require("./images/mainpage.png")} alt="" />
                </div>
                <div className="row">
                    <a className="mar-pad-0 underLineNone productFrames  pFBG1" href="/electronics">
                        <div className="categorysframe fitContent margin-auto">
                            <img className="categorys" src={require("./images/electronicsicon.png")} alt="" />
                        </div>
                        <div className="mpdiv fitContent">
                            <p>Elektronik</p>
                        </div>
                    </a>
                    <a className="mar-pad-0 underLineNone productFrames pFBG2" href="/sport">
                        <div className="categorysframe fitContent margin-auto">
                            <img className="categorys" src={require("./images/sporicon.png")} alt="" />
                        </div>
                        <div className="mpdiv fitContent">
                            <p>Spor Eşyaları</p>
                        </div>
                    </a>
                    <a className="mar-pad-0 underLineNone productFrames pFBG3" href="/car">
                        <div className="categorysframe fitContent margin-auto">
                            <img className="categorys" src={require("./images/caricon.png")} alt="" />
                        </div>
                        <div className="mpdiv fitContent">
                            <p>Araba</p>
                        </div>
                    </a>
                    <a className="mar-pad-0 underLineNone productFrames pFBG4" href="/furniture">
                        <div className="categorysframe fitContent margin-auto">
                            <img className="categorys" src={require("./images/sofaicon.png")} alt="" />
                        </div>
                        <div className="mpdiv fitContent">
                            <p>Mobilya</p>
                        </div>
                    </a>
                    <a className="mar-pad-0 underLineNone productFrames pFBG5" href="/fashion">
                        <div className="categorysframe fitContent margin-auto">
                            <img className="categorys" src={require("./images/fashionicon.png")} alt="" />
                        </div>
                        <div className="mpdiv fitContent">
                            <p>Moda</p>
                        </div>
                    </a>
                    <a className="mar-pad-0 underLineNone productFrames pFBG6" href="/wearable">
                        <div className="categorysframe fitContent margin-auto imgs">
                            <img className="categorys" src={require("./images/watchicon.png")} alt="" />
                        </div>
                        <div className="mpdiv fitContent">
                            <p>Saat ve Takı</p>
                        </div>
                    </a>
                    <a className="mar-pad-0 underLineNone productFrames pFBG7" href="/books">
                        <div className="categorysframe fitContent margin-auto">
                            <img className="categorys" src={require("./images/bookicon.png")} alt="" />
                        </div>
                        <div className="mpdiv fitContent">
                            <p>Kitap</p>
                        </div>
                    </a>
                    <a className="mar-pad-0 underLineNone productFrames pFBG8" href="/other">
                        <div className="categorysframe fitContent margin-auto">
                            <img className="categorys" src={require("./images/othericon.png")} alt="" />
                        </div>
                        <div className="mpdiv fitContent">
                            <p>Diğer</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="container prodiv">
                <div className="row">
                    <h3 className="protitle">En çok görüntülenen ürünler</h3>
                </div>
                <div className="row">
                    {PRD.MVProducts()}
                </div>
            </div>
        </div>
    );
}
export default Mainpage;