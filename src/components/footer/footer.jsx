import React from "react";
import "./footer.css";
function Footer() {
    var Year = new Date().getFullYear() 
    return (

        <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p class="col-md-4 mb-0 text-muted">&copy; {Year} Company, Inc</p>
      
      
          <ul class="nav col-md-8    justify-content-end">
            <li class="nav-item"><a href="/electronics" class="nav-link px-2 text-muted">Elektronik</a></li>
            <li class="nav-item"><a href="/sport" class="nav-link px-2 text-muted">Spor Eşyaları</a></li>
            <li class="nav-item"><a href="/car" class="nav-link px-2 text-muted">Araba</a></li>
            <li class="nav-item"><a href="/furniture" class="nav-link px-2 text-muted">Mobilya</a></li>
            <li class="nav-item"><a href="/fashion" class="nav-link px-2 text-muted">Moda</a></li>
            <li class="nav-item"><a href="/wearable" class="nav-link px-2 text-muted">Saat ve Takı</a></li>
            <li class="nav-item"><a href="/books" class="nav-link px-2 text-muted">Kitap</a></li>
            <li class="nav-item"><a href="/other" class="nav-link px-2 text-muted">Diğer</a></li>
          </ul>
        </footer>
      </div>
    );
}
export default Footer;