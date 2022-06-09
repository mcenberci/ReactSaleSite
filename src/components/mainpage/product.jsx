import React from "react";
import "./product.css";
import productss from "../Lists/products";
import members from "../Lists/member";
import Comments from "../Lists/Comments";
import { useState } from "react";
function MostViewed(x) {
    for (var i = 0; i < x.length; i++) {
        for (var j = i + 1; j < x.length; j++) {
            if (x[i].counter < x[j].counter) {
                const b = x[i];
                x[i] = x[j];
                x[j] = b;
            }
        }
    }
}

function Product(props) {
    return (
        <div className="col-3">
            <a className="tul" onClick={() => Save(props.id)} href="/product">
                <div className="productCard">
                    <div className="productImgCard">
                        <img src={props.img} alt="" className="productImg" />
                    </div>
                    <h3 className="productTitle">{props.title}</h3>
                    <p>{props.type}</p>
                    <p className="productPrice">{props.price} TL</p>
                </div>
            </a>
        </div>
    );

}
function Save(x) {
    if(JSON.parse(localStorage.getItem("productlist"))===null){
        localStorage.setItem("productlist",JSON.stringify(productss));
    }
    var products = JSON.parse(localStorage.getItem("productlist"))
    if(JSON.parse(localStorage.getItem("memberlist"))===null){
        localStorage.setItem("memberlist",JSON.stringify(members));
    }
    var member = JSON.parse(localStorage.getItem("memberlist"))
    for (var i = 0; i < products.length; i++) {
        if (x === products[i].id) {
            const y = products[i].dealerid
            products[i].counter = products[i].counter + 1;
            localStorage.setItem("productlist",JSON.stringify(products));
            localStorage.setItem("PRid", JSON.stringify(products[i].id));
            localStorage.setItem("PRtitle", JSON.stringify(products[i].title));
            localStorage.setItem("PRprice", JSON.stringify(products[i].price));
            localStorage.setItem("PRtype", JSON.stringify(products[i].type));
            localStorage.setItem("PRabout", JSON.stringify(products[i].about));
            localStorage.setItem("PRcounter", JSON.stringify(products[i].counter));
            localStorage.setItem("PRimg", JSON.stringify(products[i].img) || null);
            localStorage.setItem("DealerID", JSON.stringify(y));
            localStorage.setItem("DealerName", JSON.stringify(member[y].name));
            localStorage.setItem("DealerSurname", JSON.stringify(member[y].surname));
            localStorage.setItem("DealerEmail", JSON.stringify(member[y].email));
            localStorage.setItem("DealerImg", JSON.stringify(member[y].img) || null);
            localStorage.setItem("DealerCity", JSON.stringify(member[y].city) || null);
            localStorage.setItem("DealerTown", JSON.stringify(member[y].town) || null);
            if (JSON.parse(localStorage.getItem("Comments"))===null){localStorage.setItem("Comments",JSON.stringify(Comments));}
            for (var p = 0; p < Comments.length; p++) {
                    var com = JSON.parse(localStorage.getItem("Comments"));  
                }
            localStorage.setItem("Comments", JSON.stringify(com));

            }
        }

    }
function CommentDiv(props) {
    return (
        <div className="row">
            <div className="col dpflex margin20">
                <div className="col-1">
                    <img className="commentPP" src={props.pp} alt=""/>
                </div>
                <div className="col-11">
                    <h4>{props.name + " " + props.surname}</h4>
                    <p className="comment">{props.comment}</p>
                </div>
            </div>
        </div>
    );
}
function CommentsDiv() {
    const group = [];
    var counter = 0;
    var comgroup = JSON.parse(localStorage.getItem("Comments"));
    var member = JSON.parse(localStorage.getItem("memberlist"))
    for (var i = 0; i < comgroup.length; i++) {
        if(comgroup[i].productid===JSON.parse(localStorage.getItem("PRid"))){
            counter++;
            group[i] = <CommentDiv key={comgroup.id} pp={member[comgroup[i].memberid].img} comment={comgroup[i].comment} name={member[comgroup[i].memberid].name} surname={member[comgroup[i].memberid].surname} />
        }
    };
    localStorage.setItem("counter",JSON.stringify(counter));
    return (group);
}
function ProductPages() {
    const [commentp, setcommentp] = useState("")
    function Mac(x) {
        if (JSON.parse(localStorage.getItem("LogCheck")) === true) {
            const comm = JSON.parse(localStorage.getItem("Comments"));
            const c = comm.length;
            comm[comm.length] = { id: c, productid: JSON.parse(localStorage.getItem("PRid")), comment: x, memberid: JSON.parse(localStorage.getItem("id")) }
            localStorage.setItem("Comments", JSON.stringify(comm));
        }
        else {
            alert("Lütfen Giriş Yapınız")
        }
    }
function saga(){
    var check = 0;
    const list = JSON.parse(localStorage.getItem("sag"))
    for(var i=0;i<list.length;i++){
        if(list[i] === JSON.parse(localStorage.getItem("DealerID"))){
            check = 1;
        }
    }
    if (check === 0){list[list.length] = JSON.parse(localStorage.getItem("DealerID"));}
    localStorage.setItem("sag",JSON.stringify(list));
}
    return (
        <div className="container PRpage">
            <div className="row ">
                <h3>{JSON.parse(localStorage.getItem("PRtitle"))}</h3>
                <hr />
                <div className="col-4">
                    <img className="ppImg" src={JSON.parse(localStorage.getItem("PRimg"))} alt="" />
                </div>
                <div className="dpflex col-4">
                    <div className="col">
                        <h6>Ürün Adı :</h6>
                        <hr />
                        <h6>Ürün Fiyatı :</h6>
                        <hr />
                        <h6>Türü :</h6>
                        <hr />
                        <h6>Görüntülenme Sayısı :</h6>
                        <hr />
                        <h6>Açıklama :</h6>
                    </div>
                    <div className="col">
                        <h6>{JSON.parse(localStorage.getItem("PRtitle"))}</h6>
                        <hr />
                        <h6>{JSON.parse(localStorage.getItem("PRprice")) + "TL"}</h6>
                        <hr />
                        <h6>{JSON.parse(localStorage.getItem("PRtype"))}</h6>
                        <hr />
                        <h6>{JSON.parse(localStorage.getItem("PRcounter")) + " " + "kez görüntülendi"}</h6>
                        <hr />
                        <h6>{JSON.parse(localStorage.getItem("PRabout"))}</h6>
                    </div>
                </div>
                <div className="dpflex col-4">
                    <div className="dpflex col-10">
                        <div className="col-6">
                            <h6>Satıcı :</h6>
                            <hr />
                            <h6>Satıcı E-mail :</h6>
                            <hr />
                            <h6>Satıcı Konum :</h6>
                            <hr />
                        </div>
                        <div className="col-6">
                            <h6>{JSON.parse(localStorage.getItem("DealerName")) + " " + JSON.parse(localStorage.getItem("DealerSurname"))}</h6>
                            <hr />
                            <h6>{JSON.parse(localStorage.getItem("DealerEmail"))}</h6>
                            <hr />
                            <h6>{JSON.parse(localStorage.getItem("DealerCity")) + "/" + JSON.parse(localStorage.getItem("DealerTown"))}</h6>
                            <hr />
                            <a href="/messages" className="btnsendmsg"><button type="submit" onClick={saga} className="btn btn-primary addSale">Mesaj Gönder</button></a>
                        </div>
                    </div>
                    <div className="col-3">
                        <img className="DealerImg" src={JSON.parse(localStorage.getItem("DealerImg"))} alt="" />
                    </div>
                </div>
            </div>
            <div className="row margin-top-30">
                <div className="col">
                    <div class="form-group dpflex">
                        <textarea class="form-control" onChange={(event) => setcommentp(event.target.value)} id="exampleFormControlTextarea1" placeholder="Yorum" rows="3"></textarea>
                        <a href=""><button type="submit" onClick={() => Mac(commentp)}className="btn btn-primary commentButton">Yorum Yap</button></a>
                    </div>
                </div>
            </div>
            <div className="commentdiv">
                <h3>Yorumlar ({JSON.parse(localStorage.getItem("counter") || 0)})</h3>
                <CommentsDiv />
            </div>
        </div>);

}
function MVProducts() {
    if(JSON.parse(localStorage.getItem("productlist"))===null){
        localStorage.setItem("productlist",JSON.stringify(productss));
    }
    var products = JSON.parse(localStorage.getItem("productlist"));
    const group = [];
    MostViewed(products);
    for (let i = 0; i < 4; i++) {
        group[i] = (<Product id={products[i].id} key={products[i].id} img={products[i].img} title={products[i].title} price={products[i].price} type={products[i].type} />);
    }
    return group;
}
export { MVProducts, ProductPages, Product };