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

        const { id } = event.target

        // const [prod] = listaProdutos.filter((x) => {
        //      return Number(x.id) === Number(id);
        //  })

        const product = {
            Id: prod.id,
            Name: prod.nome,
            Price: prod.preco,
            Image: prod.image,
            Qtd: quantity
        }
        store.dispatch({ type: types.ADD_TO_CART, payload: product });
    }


    return (<div key={prod.id} className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-10">
            <div  className="card g-10" style={{ "width": "10rem" }}>
                <img src={prod.image} className="card-img-top" alt=".."></img>
                <div className="card-body">
                    <p className="card-text">{prod.nome}</p>
                    <p className="card-text">{prod.preco}</p>

                </div>
                <div className="card-body">
                </div>
                <p className="card-text"><input style={{ "width": "8rem" }} onChange={handleQuantity} type="number" value={quantity} min="1" /></p>
                <a className="btn btn-primary"
                    id={prod.id}
                    onClick={addToCart}>Comprar</a>
            </div>
        </div>
    </div>)
}

export default ShopItem;