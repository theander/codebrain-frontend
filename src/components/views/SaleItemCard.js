import store from '../../store'
import * as types from '../../actions/action'

const SaleItem = (props) => {

    const prod = props.produto;

    const removeItem = (event) => {
        store.dispatch({ type: types.REMOVE_FROM_CART, payload: event.target.id });
    }

    return (

        <div key={prod.Id} className="card mb-3" >
            <div class="row g-0">
                <div className="col-md-4" >
                    <img src={prod.Image} class="img-fluid rounded-start" style={{ "height": "5rem" }} alt="..." />
                </div>
                <div className='col-md-8'>
                    <div className="card-body">
                        <h5 className="card-title">{prod.Name}</h5>
                        <h5 className="card-title">Preço: R${Number(prod.Price)}</h5>
                        <h5 className="card-title">Quantidade: {prod.Qtd}</h5>
                        <h5 className="card-title">Total: R${Number(prod.Price) * Number(prod.Qtd)} </h5>
                    </div>
                </div>
                <button id={prod.Id} className="btn btn-light btn-sm" onClick={removeItem}>Remover</button>
            </div>
        </div>

    )

}
export default SaleItem;