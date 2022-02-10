import React, { useState, useEffect } from "react";
import axios from "axios";
import { createStore } from "redux";

import reducer from '../reducers/index'

const store = createStore(reducer)
const Shop = () => {
    

    console.log(store.getState())

    const [listaProdutos, setListaProdutos] = useState([]);
    const getLoja = async () => {
        const res = await axios.get("https://localhost:8082/api/produtos").then(response => {
            
        const { listaDeProdutos } = response.data
            setListaProdutos(listaDeProdutos)
        })

    }

   // useEffect(() => {
   //     getLoja()
   // }, [])


    const prop = [
        {id:1, image: "https://www.collinsdictionary.com/images/thumb/apple_158989157_250.jpg?version=4.0.219", nome: "Pera", preco: "5.50" },
    { id:2,image: "https://www.collinsdictionary.com/images/thumb/apple_158989157_250.jpg?version=4.0.219", nome: "Maçã", preco: "4.50" },
    { id:3,image: "https://www.collinsdictionary.com/images/thumb/apple_158989157_250.jpg?version=4.0.219", nome: "Laranja", preco: "3.50" },
    { id:4,image: "https://www.collinsdictionary.com/images/thumb/apple_158989157_250.jpg?version=4.0.219", nome: "Goiaba", preco: "2.50" },
    { id:5,image: "https://www.collinsdictionary.com/images/thumb/apple_158989157_250.jpg?version=4.0.219", nome: "Maçã", preco: "1.50" }]

const handleBuyAction=(event)=>{

  const {id,name,target}=event.target;
  console.log(event.target.target)
  console.log(event.target.value)
  console.log('Id: '+id+" name: "+name+" value: "+target)
  
    store.dispatch({
        type: 'ADD_TODO',
        text: 'Use Redux'
      })

      console.log(store.getState())

}


    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {prop.map((produto) => {
                    return (
                        <div key={produto.id} className="card" style={{ "width": "10rem" }}  >
                            <img src={produto.image} className="card-img-top" alt=".."></img>
                            <div className="card-body">
                                <p className="card-text">{produto.nome}</p>
                                <p className="card-text">{produto.preco}</p>
                            </div>
                            <div className="card-body">
                                
                            </div>
                            <a className="btn btn-primary" target={produto.preco} id={produto.id} name={produto.nome} value={produto.preco} onClick={handleBuyAction}>Comprar</a>
                        </div>)
                })}

            </div>
        </div>)
}
export default Shop;