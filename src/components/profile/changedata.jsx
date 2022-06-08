import React from "react";
import "./myprofile.css"
import {useState} from "react";
import members from "../Lists/member";

function ChangeData() {
    const [name,setname]= useState()
    const [surname,setsurname]= useState()
    const [email,setemail]= useState()
    const [city,setcity]= useState()
    const [town,settown]= useState()
    const [password,setpassword]= useState()
    function ChangeDataButton(){
        if(JSON.parse(localStorage.getItem("memberlist"))===null){
            localStorage.setItem("memberlist",JSON.stringify(members));
        }
        var memberss = JSON.parse(localStorage.getItem("memberlist"));
        if(password === memberss[JSON.parse(localStorage.getItem("id"))].password){
            memberss[JSON.parse(localStorage.getItem("id"))].name= name;
            memberss[JSON.parse(localStorage.getItem("id"))].surname= surname;
            memberss[JSON.parse(localStorage.getItem("id"))].email= email;
            memberss[JSON.parse(localStorage.getItem("id"))].city= city;
            memberss[JSON.parse(localStorage.getItem("id"))].town= town;
            localStorage.setItem("memberlist",JSON.stringify(memberss));
            localStorage.setItem("name",JSON.stringify(name));
            localStorage.setItem("surname",JSON.stringify(surname));
            localStorage.setItem("email",JSON.stringify(email));
            localStorage.setItem("city",JSON.stringify(city));
            localStorage.setItem("town",JSON.stringify(town));
        }
        else{
            alert("Yanlış Şifre Girdiniz");
        }

    }

    return (
        <div className="container salediv">
            <div className="row">
                <div className="col-4">
                    <img className="ProfileImg" src={JSON.parse(localStorage.getItem("img"))} alt="" />
                </div>
                <div className="col datas">
                    <div className="row">
                    <div className="col-6">
                    <label for="name">Ad</label>
                    <input type="text" className="form-control" onChange={(event) => setname(event.target.value)} id="name" name="name" placeholder="Ad" required />
                    </div>
                    <div className="col-6">
                    <label for="surname">Soyad</label>
                    <input type="text" className="form-control" id="surname" onChange={(event) => setsurname(event.target.value)} name="name" placeholder="Soyad" required />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" onChange={(event) => setemail(event.target.value)} aria-describedby="emailHelp" placeholder="Email"></input>
                    </div></div>
                    <div className="row">
                    <div className="col-6">
                    <label for="City">İl</label>
                    <input type="text" className="form-control" id="City" onChange={(event) => setcity(event.target.value)} name="name" placeholder="İl" required />
                    </div>
                    <div className="col-6">
                    <label for="Town">İlçe</label>
                    <input type="text" className="form-control" id="Town" onChange={(event) => settown(event.target.value)} name="name" placeholder="İlçe" required />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col">
                    <label for="password">Şuanki Şifreniz</label>
                    <input type="password" className="form-control" id="password" onChange={(event) => setpassword(event.target.value)} name="password" placeholder="Şifre" required/>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col">
                    <div className="fitContent changeButton">
                    <button type="submit" onClick={ChangeDataButton} className="btn btn-primary addSale">Bilgilerimi Değiştir</button>
                    </div>
                    </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
export default ChangeData;