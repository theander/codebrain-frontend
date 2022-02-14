import store from "../../store"
import * as types from "../../actions/action"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { current } from "@reduxjs/toolkit"
const ResumeCheckout = () => {
    const shopCart = useSelector(state => state.shopCartReducer)
    const [value, setValue] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const navigate = useNavigate();

    let vTotal = 0;
    let qTotal = 0;
    useEffect(() => {
        shopCart.map(x => {
            qTotal += Number(x.Qtd);
            vTotal += Number(x.Price * x.Qtd);
        })
        setQuantity(qTotal);
        setValue(vTotal);
    }, [shopCart, value]);

  

    const cleanCart = () => {
        store.dispatch({ type: types.CLEAN_CART });
        return navigate("/shop");
    }


    return (
        <div>
            {value === 0 ? null : <div>
                <div>
                    <p>Valor total:R$: {value} </p>
                    <p>Itens total: {quantity} </p>
                </div>
                <div>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Checkout
                    </button>
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h2 class="modal-title" id="staticBackdropLabel">Resume</h2>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <ul>
                                        {shopCart.map(produto => { return (<li key={produto.Id}>Produto: {produto.Name} Quantidade:{produto.Qtd} Valor:R$ {produto.Price} </li>) })}
                                    </ul>
                                    <h2>Total:R${value}</h2>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick={cleanCart}>OK</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></div>}
        </div>

    )
}

export default ResumeCheckout;