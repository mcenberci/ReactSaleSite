import React from 'react';
import Footer from "./footer/footer.jsx";
import Login from "./login/login.jsx";
import Mainpage from "./mainpage/mainpage.jsx";
import Navbar from "./navbar/navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductPages } from './mainpage/product.jsx';
import Sale from './sale/sale.jsx';
import Electronics from './producttypepages/electronics.jsx';
import Sport from './producttypepages/sport.jsx';
import Car from './producttypepages/car.jsx';
import Furniture from './producttypepages/furniture.jsx';
import Fashion from './producttypepages/fashion.jsx';
import Watch from './producttypepages/watch.jsx';
import Book from './producttypepages/book.jsx';
import Other from './producttypepages/other.jsx';
import MySales from './profile/mysales.jsx';
import MyProfile from './profile/myprofile.jsx';
import ChangeData from './profile/changedata.jsx';
import Messages from './messages/message.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<div><Navbar /><Mainpage /><Footer /> </div>} />
                <Route path="/register" element={<div><Navbar /><Login /><Footer /> </div>} />
                <Route path="/product" element={<div><Navbar /> <ProductPages /> <Footer /></div>} />
                <Route path="/sale" element={<div><Navbar /><Sale /><Footer /></div>} />
                <Route path="/electronics" element={<div><Navbar /><Electronics /><Footer /></div>} />
                <Route path="/sport" element={<div><Navbar /><Sport /><Footer /></div>} />
                <Route path="/car" element={<div><Navbar /><Car /><Footer /></div>} />
                <Route path="/furniture" element={<div><Navbar /><Furniture /><Footer /></div>} />
                <Route path="/fashion" element={<div><Navbar /><Fashion /><Footer /></div>} />
                <Route path="/wearable" element={<div><Navbar /><Watch /><Footer /></div>} />
                <Route path="/books" element={<div><Navbar /><Book /><Footer /></div>} />
                <Route path="/other" element={<div><Navbar /><Other /><Footer /></div>} />
                <Route path="/mysales" element={<div><Navbar /><MySales /><Footer /></div>} />
                <Route path="/profile" element={<div><Navbar /><MyProfile /><Footer /></div>} />
                <Route path="/profile/data" element={<div><Navbar /><ChangeData /><Footer /></div>} />
                <Route path="/messages" element={<div><Navbar /><Messages /><Footer /></div>} />
            </Routes>
        </Router>
    );

}
export default App;