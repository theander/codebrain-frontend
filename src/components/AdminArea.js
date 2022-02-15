import React, { useEffect, useState } from "react";
import axios from 'axios'
import SaleGraph from './views/SaleGraph'

const AdminArea = () => {
    const [produto, setProduto] = useState({})
    const [vendas, setListaVendas] = useState([])

    const getVendas = async () => {
        const res = await axios.get("https://codebrain-backend.herokuapp.com/api/vendas").then(response => {
            setListaVendas(response.data)
        })
    }


    useEffect(() => {
        getVendas();

    }, []);


    const saveNewProduct = (event) => {
        event.preventDefault();
        axios.post("https://codebrain-backend.herokuapp.com/api/novo-produto", produto)

    }

    const setProductValue = (event) => {
        const { name, value } = event.target

        setProduto(previousValue => {
            return { ...previousValue, [name]: value }
        })
    }


    return (
        <div className="container">
            <div className="row">
                <div className="container-fluid">
                    <h1>Admin Area</h1>
                </div>
            </div>
            <hr />
            <div className="container">
                <div className="container-fluid">
                    <h1>Tabela de Vendas</h1>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Número da venda</th>
                            <th scope="col">Quantidade</th>
                            <th scope="col">Valor Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vendas.map(item => {
                            return (<tr>
                                <th scope="row">{item.id}</th>
                                <td>{item.quantidadeTotal}</td>
                                <td> R${item.valorTotal}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
            <hr />
            <div className="container-fluid">
                <h1>Gráfico de Vendas</h1>
            </div>
            <SaleGraph dados={vendas} />
            <hr />

            <div className="row">
                <div className="container-fluid">
                    <h1>Cadastrar novo Produto</h1>
                    <form onSubmit={saveNewProduct}>
                        <div class="mb-3">
                            <input type="text" class="form-control" id="name" placeholder="Nome do Produto" name="nome" value={produto.nome} onChange={setProductValue} />
                        </div>
                        <div class="mb-3">
                            <input type="number" step="0.01" class="form-control" id="formGroupExampleInput2" placeholder="Preço do produto" name="preco" value={produto.preco} onChange={setProductValue} />
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control" id="formGroupExampleInput3" placeholder="Link da foto do produto" name="image" onChange={setProductValue} value={produto.foto} />
                        </div>
                        <button className="btn btn-outline-success" type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
        </div >

    )
}

export default AdminArea;