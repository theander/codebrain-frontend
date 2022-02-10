import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

const BodyPage = () => {

    return (<div>
  
    <nav>
     
    <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link" aria-current="page"><Link to="shop">Shop</Link></a>
  </li>
  <li class="nav-item">
    <a class="nav-link"> <Link to="shopcart">ShopCart</Link></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
</nav>

        <div className="content">
            <Outlet />
        </div></div>
    )
}
export default BodyPage;