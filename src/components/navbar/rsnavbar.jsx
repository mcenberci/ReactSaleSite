import React from "react";
import { LoginCheck } from "./logincheck"
import { useState } from "react";

const RSnavbar = () => {
    const name =JSON.parse(localStorage.getItem("name"));
    const surname = JSON.parse(localStorage.getItem("surname"));
    const [email, setemail] = useState(JSON.parse(localStorage.getItem("email")) || null);
    const [password, setpassword] = useState(JSON.parse(localStorage.getItem("password")) || null);
    const [newLogCheck, setLogCheck] = useState(JSON.parse(localStorage.getItem("LogCheck")) || false);
    function loginHandler() {
        setLogCheck(LoginCheck({ email: email, password: password }));
    }
    function exitHandler() {
        localStorage.setItem("LogCheck",JSON.stringify(false));
        localStorage.removeItem("name");
        localStorage.removeItem("surname");
        localStorage.removeItem("id");
        localStorage.removeItem("img");
        localStorage.removeItem("email");
        localStorage.removeItem("sag");
    }
    if (newLogCheck) {
        return (
            <ul className="navbar-nav me-auto navLog">
                <a className="atxt mar-top-bot" href="/sale"><li className="nav-item"><button type="submit" className="btn btn-primary addSale"><i class="bi bi-camera"></i>İlan Ekle</button></li></a>
                <li className="nav-item dropdown">
                    <img src={JSON.parse(localStorage.getItem("img"))} alt="" className="profilePhoto" />
                    <p className="nav-link dropdown-toggle dropDownName" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">{name + " " + surname}
                    </p>
                    <ul className="dropdown-menu dropDownCardd dropdown-menu-lg-start" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/profile">Profil</a></li>
                        <li><a className="dropdown-item" href="/messages">Mesajlarım</a></li>
                        <li><a className="dropdown-item" href="/mysales">İlanlarım</a></li>
                        <li><a className="dropdown-item" onClick={exitHandler} href="/">Çıkış Yap</a></li>
                    </ul>
                </li>
            </ul>)
    }
    else {
        return (
            <ul className="navbar-nav me-auto navLog">
                <li className="nav-item">
                    <a className="nav-link" href="/register"><i className="bi bi-people"></i>Kayıt Ol</a>
                </li>
                <li className="nav-item dropdown">
                    <p className="nav-link dropdown-toggle bi bi-box-arrow-in-right" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Giriş Yap
                    </p>
                    <ul className="dropdown-menu dropDownCard dropdown-menu-lg-start" aria-labelledby="navbarDropdown">
                        <li><input type="email" className="form-control" onChange={(event) => setemail(event.target.value)} id="email" name="email" aria-describedby="emailHelp" placeholder="E-mail" required />
                            <input type="password" className="form-control" onChange={(event) => setpassword(event.target.value)} id="password" name="password" placeholder="Şifre" required />
                            <button type="submit" onClick={loginHandler} className="btn btn-primary addSale">Giriş Yap</button>
                        </li>
                    </ul>
                </li>
            </ul>)
    }
}
export default RSnavbar;