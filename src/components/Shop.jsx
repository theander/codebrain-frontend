import React, { useState, useEffect } from "react";
import axios from "axios";
const Shop = () => {
    const [listaProdutos, setListaProdutos] = useState([]);
    const getLoja = async () => {
        const listaDeProdutos = await axios.get("http://localhost:8080/loja-de-produtos/").then(response => {
            const { listaDeProdutos } = response.data
            setListaProdutos(listaDeProdutos)
        })

    }

    useEffect(() => {
        getLoja()
    }, [])


    /*const prop = [{ image: "https://www.collinsdictionary.com/images/thumb/apple_158989157_250.jpg?version=4.0.219", name: "Maçã", price: "5.50" },
    { image: "https://www.collinsdictionary.com/images/thumb/apple_158989157_250.jpg?version=4.0.219", name: "Maçã", price: "5.50" },
    { image: "https://www.collinsdictionary.com/images/thumb/apple_158989157_250.jpg?version=4.0.219", name: "Maçã", price: "5.50" },
    { image: "https://www.collinsdictionary.com/images/thumb/apple_158989157_250.jpg?version=4.0.219", name: "Maçã", price: "5.50" },
    { image: "https://www.collinsdictionary.com/images/thumb/apple_158989157_250.jpg?version=4.0.219", name: "Maçã", price: "5.50" }]

*/


    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {listaProdutos.map((produto, index) => {
                    return (
                        <div key={index} className="card" style={{ "width": "10rem" }}>
                            <img src={produto.image} className="card-img-top" alt=".."></img>
                            <div className="card-body">
                                <p className="card-text">{produto.nome}</p>
                                <p className="card-text">{produto.preco}</p>
                            </div>
                            <div className="card-body">
                                <a className="btn btn-primary">Card link</a>
                            </div>
                        </div>)
                })}

            </div>
        </div>)
}
export default Shop;