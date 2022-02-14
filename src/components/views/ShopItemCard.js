import React, { useState } from "react"
import * as types from '../../actions/action'
import store from '../../store'



const ShopItem = (props) => {

    const prod = props.shopItem;
    const [quantity, setQuantity] = useState(1);



    const handleQuantity = (event) => {
        setQuantity(event.target.value)
    }
    const addToCart = (event) => {
        const product = {
            Id: prod.id,
            Name: prod.nome,
            Price: prod.preco,
            Image: prod.image,
            Qtd: quantity
        }
        store.dispatch({ type: types.ADD_TO_CART, payload: product });
    }


    return (

        <div key={prod.id} className="card" style={{ "width": "10rem" }}>
            <img src={prod.image} className="card-img-top" alt=".."></img>
            <div className="card-body">
                <p className="card-text">{prod.nome}</p>
                <p className="card-text">R${prod.preco}</p>
                <p className="card-text"><input style={{ "width": "8rem" }} onChange={handleQuantity} type="number" value={quantity} min="1" /></p>
                <a className="btn btn-primary" style={{ "width": "8rem" }} 
                    id={prod.id}
                    onClick={addToCart}>Comprar</a>
            </div>
        
</div>
    )
}

export default ShopItem;