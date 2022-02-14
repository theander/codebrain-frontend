import React, { useState } from "react";

const AdminArea = () => {
    const [produto, setProduto] = useState({})

    const saveNewProduct = (event) => {
        event.preventDefault()

    }

    const setProductValue = (event) => {

        const { id, name, value } = event.target

        setProduto(previousValue => {
            return {...previousValue, [name]: value}
            
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
                            <input type="text" class="form-control" id="formGroupExampleInput3" placeholder="Link da foto do produto" name="foto" onChange={setProductValue} value={produto.foto} />
                        </div>

                        <button className="btn btn-outline-success" type="Submit">Cadastrar</button>

                    </form>

                </div>
            </div>

        </div>

    )
}

export default AdminArea;