import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";


const BodyPage = () => {
 
  const navigate = useNavigate();

  useEffect(() => {
    return navigate("/shop");
  }, []);



  return (<div>
    <nav>
      <ul class="nav justify-content-center gap-3">
        <li class="nav-item">
          <button class="btn btn-outline-light" aria-current="page"><Link className="text-decoration-none" to="shop">Shop</Link></button>
        </li>
        <li class="nav-item">
          <button class="btn btn-outline-light"> <Link className="text-decoration-none" to="shopcart">ShopCart</Link></button>
        </li>
        <li class="nav-item">
          <button className="btn btn-outline-light"> <Link className="text-decoration-none" to="adminArea">Admin Area</Link></button>
        </li>

      </ul>
    </nav>
  
    <div className="content">
      <Outlet />
    </div></div>
  )
}
export default BodyPage;