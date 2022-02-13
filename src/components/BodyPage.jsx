import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";


const BodyPage = () => {
  const [filter, setFilter] = useState("");
  const [filterOption, setFilterOption] = useState()
  const navigate = useNavigate();

  useEffect(() => {
    return navigate("/shop");
  }, []);

  const handleFilter = (event) => {
    setFilter(event.target.value)

    if (filterOption === 'id') {


      Number(filter)

    } else if (filterOption === 'name') {
      console.log('Name');
    }

    console.log(filter);
  }
  const handleFilterOption = (event) => {
    setFilterOption(event.target.name);
  }

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
          <a class="nav-link" >Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </nav>


    <ul class="nav justify-content-center">

      <li> <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Filter
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
          <li><a class="dropdown-item" onClick={handleFilterOption} name={"id"}>Fiter by id</a></li>
          <li><a class="dropdown-item" onClick={handleFilterOption} name={"name"}>Filter by name</a></li>
        </ul>
      </div></li>
      <li><div><input type="text" onChange={handleFilter} value={filter}></input></div></li>
    </ul>






    <div className="content">
      <Outlet />
    </div></div>
  )
}
export default BodyPage;