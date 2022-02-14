import React from "react";
import { Link } from "react-router-dom";

const ShopCart = () => {

    const prop = [{ id: 1, image: "https://www.collinsdictionary.com/images/thumb/apple_158989157_250.jpg?version=4.0.219", name: "Maçã", price: "1.50" },
    { id: 2, image: "https://www.collinsdictionary.com/images/thumb/apple_158989157_250.jpg?version=4.0.219", name: "Maçã", price: "2.50" },
    { id: 3, image: "https://www.collinsdictionary.com/images/thumb/apple_158989157_250.jpg?version=4.0.219", name: "Maçã", price: "3.50" },
    { id: 4, image: "https://www.collinsdictionary.com/images/thumb/apple_158989157_250.jpg?version=4.0.219", name: "Maçã", price: "4.50" },
    { id: 5, image: "https://www.collinsdictionary.com/images/thumb/apple_158989157_250.jpg?version=4.0.219", name: "Maçã", price: "5.50" }]

    return (
        <div className="container">
            <h1>Comprar</h1>
            {prop.map((produto) => {
                return (
                    <div key={produto.id} className="card" >
                        <div className="row">
                            <div className="col-md-2" >
                                <img src={produto.image} class="img-fluid rounded-start" style={{ "height": "5rem" }} alt="..." />
                            </div>
                            <div className="col-md">
                                <div className="card-body">
                                    <h5 className="card-title">{produto.name} </h5>
                                </div>
                                <div className="card-body">
                                    <p>Quantidade:</p>
                                    <div className="input-group col-sm">
                                        <button className="btn btn-success btn-sm">-</button>    
                                        <input type="number" aria-label="First name" class="form-control" />
                                        <button className="btn btn-success btn-sm">+</button>  
                                    </div>
                                    <button className="btn btn-light btn-sm">Remover</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            }
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
                                {prop.map(produto => { return (<li>Produto {produto.name} Valor:R$ {produto.price}</li>) })}


                            </ul>
<h2>Total:R$523,25</h2>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success" data-bs-dismiss="modal">OK</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}
export default ShopCart;