import React from "react";
import messages from "../Lists/messages";
import "./message.css"
import {useState} from "react";
function Pro() {
    const sag = (JSON.parse(localStorage.getItem("sag")) || [] );
    var check = 0;
    const list = JSON.parse(localStorage.getItem("messages"));
    for (var i = 0; i < list.length; i++) {
        if (JSON.parse(localStorage.getItem("id")) === list[i].gid) {
            if (sag.length === 0) {
                sag[sag.length] = list[i].sid;
            }
            else {
                for (var b = 0; b < sag.length; b++) {
                    if (sag[b] === list[i].sid) {
                        check = 1;
                    }
                }
                if (check === 0 ) {
                    sag[sag.length] = list[i].sid;
                }
            }
            check = 0;
        }
        else if (JSON.parse(localStorage.getItem("id")) === list[i].sid) {
            if (sag.length === 0) {
                sag[sag.length] = list[i].gid;
            }
            else {
                for (var c = 0; c < sag.length; c++) {
                    if (sag[c] === list[i].gid) {
                        check = 1;
                    }
                }
            }
            if (check === 0 && sag.length !== 1) {
                sag[sag.length] = list[i].gid;
            }
            check = 0;
        }
    }
    localStorage.setItem("sag",JSON.stringify(sag));
}
function Users(props) {
    return (
        <a className="dpflex atxt" onClick={()=>Save(props.id)} href="/messages">
            <div className="col dpflex gsdiv">
                <div className="col-3">
                    <img className="gsimg" src={props.img} />
                </div>
                <div className="col-9 pro" >
                    <h4 className="gsname">{props.name + " " + props.surname}</h4>
                </div>
            </div>
        </a>
    );
}
function Save(x){localStorage.setItem("gsmes", JSON.stringify(x))}
function GMFU() {
    Pro();
    const list = JSON.parse(localStorage.getItem("sag"));
    const group = [];
    var members = JSON.parse(localStorage.getItem("memberlist"));
    for (var i = 0; i < list.length; i++) {
        group[group.length] = <Users id={members[list[i]].id} img={members[list[i]].img} name={members[list[i]].name} surname={members[list[i]].surname} />
    }
    return group;
}
function Mes() {
    const list = ((JSON.parse(localStorage.getItem("messages")) || messages));
    const group = [];
        for(var i = 0 ; i<list.length;i++){
            if(list[i].gid === JSON.parse(localStorage.getItem("id")) && list[i].sid === JSON.parse(localStorage.getItem("gsmes"))){
                group[group.length] = 
                <div className="mesdivc mesl">
                    <p>{list[i].message}</p>
                </div>
            }
            else if(list[i].sid === JSON.parse(localStorage.getItem("id")) && list[i].gid === JSON.parse(localStorage.getItem("gsmes"))){
                group[group.length] =
                <div className="mesdivc mesr">
                    <p>{list[i].message}</p>
                </div>
            }
        }
    return(group);
    }
function MesDiv(){
    const[text,settext]= useState("");
    const list = ((JSON.parse(localStorage.getItem("messages")) || messages));
    function mese(){
        list[list.length]={sid:JSON.parse(localStorage.getItem("id")),gid:JSON.parse(localStorage.getItem("gsmes")),message:text}
        localStorage.setItem("messages",JSON.stringify(list));
    }
    return(
        <div>
            <div className="mesbox">
                <Mes/>
            </div>
            <div className="dpflex">
            <input type="text" onChange={(event) => settext(event.target.value)} class="textar form-control" id="usr" />
            <a href="/messages"><button type="submit" onClick={(mese)} className="btn btn-primary addSale messend">Gönder</button></a> 
            </div>
        </div>
    );
}

function Messages() {
    return (
        <div className="container dpflex">
            <div className="col-3">
                <GMFU />
            </div>
            <div className="col-9">
                <MesDiv/>
            </div>
        </div>
    );

}
export default Messages;