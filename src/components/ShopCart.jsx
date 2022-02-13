import React, { useState } from "react";
import { useSelector } from "react-redux";
import store from "../store"
import ResumeCheckout from "./views/ResumeCheckout";
import SaleItem from "./views/SaleItemCard";

const ShopCart = () => {

    const shopCart = store.getState().shopCartReducer
    const shopCartSelector = useSelector(state => state.shopCartReducer)


   
    return (
        <div className="container">
            <h1>Carrinho  {shopCart.length}</h1>
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