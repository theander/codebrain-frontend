import React, { useState, useEffect } from "react";
import axios from "axios";
import ShopItem from "./views/ShopItemCard";


const Shop = () => {

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

    return (<div>
        {listaProdutos.map(item => {
            return (
                <div key={item.Id}>
                    < ShopItem shopItem={item} />
                </div>

            )
        })}
    </div>)

}

export default Shop;