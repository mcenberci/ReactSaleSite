import React from "react";
import productss from "../Lists/products";
import { Product } from "../mainpage/product";

function ProductFilter(props){

    if(JSON.parse(localStorage.getItem("productlist"))===null){
        localStorage.setItem("productlist",JSON.stringify(productss));
    }
    var products = JSON.parse(localStorage.getItem("productlist"));
    const group = [];
    for (let i = 0; i < products.length; i++) {
        if (props.type===products[i].type){
        group[i] = (<Product id={products[i].id} key={products[i].id} img={products[i].img} title={products[i].title} price={products[i].price} type={products[i].type} />);
    }}
    return group;
}
export default ProductFilter;