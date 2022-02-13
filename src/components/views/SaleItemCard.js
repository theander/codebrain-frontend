import store from '../../store'
import * as types from '../../actions/action'

const SaleItem = (props) => {
   
    const prod = props.produto;
  
    const removeItem = (event) => {

        store.dispatch({ type: types.REMOVE_FROM_CART, payload: event.target.id });

    }

    return (

        <div key={prod.Id} className="card" >
            <div className="row">
                <div className="col-md-2" >
                    <img src={prod.Image} class="img-fluid rounded-start" style={{ "height": "5rem" }} alt="..." />
                </div>
                <div className="col-md-3">
                    <div className="card-body">
                        <h5 className="card-title">{prod.Name}</h5>
                        <h5 className="card-title">Preço: R${Number(prod.Price)}</h5>
                        <h5 className="card-title">Total: R${Number(prod.Price)*Number(prod.Qtd)} </h5>
                    </div>
                    <div className="card-body">
                        <p>Quantidade: {prod.Qtd}
                            <button id={prod.Id} className="btn btn-light btn-sm" onClick={removeItem}>Remover</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )

}
export default SaleItem;