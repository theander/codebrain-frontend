import React, { useState, useEffect } from "react";
import axios from "axios";
import ShopItem from "./views/ShopItemCard";

const Shop = () => {
    const [filter, setFilter] = useState('');
    const [filterOption, setFilterOption] = useState("Filter")
    const [listaProdutos, setListaProdutos] = useState([]);
    const getLoja = async () => {
        const res = await axios.get("https://codebrain-backend.herokuapp.com/api/produtos").then(response => {
            const listaDeProdutos = response.data
            setListaProdutos(listaDeProdutos)
        })
    }

    useEffect(() => {
        getLoja()
    }, [])


    const applyFilter = (list) => {
        console.log("Filter" + filter);
        console.log("Filter Option" + filterOption);
        if (filter != '') {
            if (filterOption === 'id') {
                const n = Number(filter)
                console.log("Valor de n " + n)
                console.log("item" + list)
                return (list) => {
                    return list.id === n
                }

            } else if (filterOption === 'name') {
                return list.filter((item) => {
                    return item.nome.includes(filter)
                })

            }
        } else {
            return list;
        }

    }


    const handleFilterOption = (event) => {
        setFilterOption(event.target.name);
    }
    const handleFilterValue = (event) => {
        setFilter(event.target.value)

    }



    return (
        <div className="container">
            <ul class="nav justify-content-center">
                <li>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            {filterOption}
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                            <li><a class="dropdown-item" onClick={handleFilterOption} name={"id"}>Fiter by id</a></li>
                            <li><a class="dropdown-item" onClick={handleFilterOption} name={"name"}>Filter by name</a></li>
                        </ul>
                    </div>
                </li>
                {filterOption !== "Filter" ? <li>
                    <div className="row">
                        <div className="container">
                            <input type={filterOption === 'id' ? "number" : "text"} onChange={handleFilterValue} value={filter} min="1" />

                        </div>
                    </div>
                </li> : null}
            </ul>



            <div className="container">
                <div className="card-group gap-2">
                    {listaProdutos.length === 0 ? <h1>Loading...</h1> :
                        listaProdutos.filter((items) => {
                            if (filterOption === 'id') {
                                return items.id === Number(filter)
                            }
                            else if (filterOption === 'name') {
                                return items.nome.includes(filter)
                            } else { return items }
                        }

                        ).map(item => {
                            return (
                                <div>
                                    <ShopItem shopItem={item} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>)
}

export default Shop;