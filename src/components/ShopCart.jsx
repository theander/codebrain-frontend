import React, { useState } from "react";
import { useSelector } from "react-redux";
import ResumeCheckout from "./views/ResumeCheckout";
import SaleItem from "./views/SaleItemCard";

const ShopCart = () => {
    const shopCartSelector = useSelector(state => state.shopCartReducer)


    return (
        <div className="container">
            <h1>Carrinho de Compras</h1>
            <div>
                {shopCartSelector.map(item => {
                    return (<SaleItem produto={item} />)
                })
                }
            </div>
            <ResumeCheckout />
        </div>
    )
}
export default ShopCart;