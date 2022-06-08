import React from "react";
import {useState} from "react";
import "./login.css";
import Register from "./register";


function Login (){
    const [name,setname] = useState("");
    const [surname,setsurname] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
       return (
        <div className="container salediv">
            <div className="row">
                <div className="col"></div>
                <div className="col-6 loginBorder justify-content-center">
                <div className="row loginInputM">
                    <div className="col mlr-0 fitContent">
                        <h1 className="mlr-0 fitContent">Kayıt Ol</h1>
                    </div>
                </div>
                <div className="row loginInputM">
                    <div className="col">
                    <input type="text" className="form-control" onChange={(event)=>setname(event.target.value)} id="name" name="name" placeholder="Ad" required/>
                    </div>
                    <div className="col">
                    <input type="text" className="form-control" onChange={(event)=>setsurname(event.target.value)} id="surname" name="surname" placeholder="Soyad" required/>
                    </div>
                </div>
                <div className="row loginInput loginInputM">
                   <input type="email" className="form-control" onChange={(event)=>setemail(event.target.value)} id="email" name="email" aria-describedby="emailHelp" placeholder="E-mail" required/>
                </div>
                <div className="row loginInput loginInputM">
                   <input type="password" className="form-control" onChange={(event)=>setpassword(event.target.value)} id="password" name="password" placeholder="Şifre" required/>
                </div>
                <div className="row loginInput loginInputM">
                    <div className="col"></div>
                    <div className="col mlr-0 fitContent">
                        <div className="fitContent mlr-0">
                        <a className="atxt" href="/register"><button type="submit" href="/" value="LOGIN" onClick={()=>Register({name:name,surname:surname,email:email,password:password})} className="btn btn-primary addSale btnreg">Kayıt Ol</button></a>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>

                </div>
                <div className="col"></div>
            </div>
        </div>
    );
}
export default Login;