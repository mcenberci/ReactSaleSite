import React from "react";
import "./myprofile.css"
function MyProfile(){
    return(
        <div className="container salediv">
            <div className="row">
                <div className="col-4">
                    <img className="ProfileImg" src={JSON.parse(localStorage.getItem("img"))} alt="" />
                </div>
                <div className="data col">
                    <div>
                    <h1><b> Profil</b> </h1>
                    <h4><b> Ad: </b> {JSON.parse(localStorage.getItem("name"))}</h4>
                    <h4><b> Soyad:</b> {JSON.parse(localStorage.getItem("surname"))}</h4>
                    <h4><b> Mail:</b> {JSON.parse(localStorage.getItem("email"))}</h4>
                    <h4><b> Konum:</b> {JSON.parse(localStorage.getItem("city")) + "/" + JSON.parse(localStorage.getItem("town"))}</h4>
                    </div>
                    <a href="/profile/data"><button type="submit" className="btn btn-primary addSale">Bilgilerimi Değiştir</button></a>
                </div>
            </div>
        </div>
        );

}
export default MyProfile;
