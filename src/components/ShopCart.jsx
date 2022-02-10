import React from "react";

const ShopCart = () => {
    const prop = [{ image: "https://www.collinsdictionary.com/images/thumb/apple_158989157_250.jpg?version=4.0.219", name: "Maçã", price: "5.50" },
    { image: "https://www.collinsdictionary.com/images/thumb/apple_158989157_250.jpg?version=4.0.219", name: "Maçã", price: "5.50" },
    { image: "https://www.collinsdictionary.com/images/thumb/apple_158989157_250.jpg?version=4.0.219", name: "Maçã", price: "5.50" },
    { image: "https://www.collinsdictionary.com/images/thumb/apple_158989157_250.jpg?version=4.0.219", name: "Maçã", price: "5.50" },
    { image: "https://www.collinsdictionary.com/images/thumb/apple_158989157_250.jpg?version=4.0.219", name: "Maçã", price: "5.50" }]

    return (

        <div className="container">
            <h1>Comprar</h1>
            {prop.map((produto, index) => {
                return (
                    <div key={index} className="card">
                        <div className="row">

                            <div className="col-md-4">
                                <img src={produto.image} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{produto.name} </h5>

                                </div>
                                <div className="card-body">
                                    <p>Quantidade:</p>
                                    <input type="number"></input>
                                    <button className="btn btn-warning">Remover</button>

                                </div>
                            </div>

                        </div>

                    </div>
                )
            })
            }
        </div>


    )
}
export default ShopCart;