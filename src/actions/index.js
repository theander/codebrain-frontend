<<<<<<< HEAD
import * types from './action-types'
=======
import * as types from './action';

export const addToCartAction = (product) => {
    return {
        type: types.ADD_TO_CART, payload: {
            Id: product.id,
            Nome: product.nome,
            Price: product.preco,
            Image: product.image

        }
    }
}
export const removeFromCartAction = (productId) => {
    return {
        type: types.REMOVE_FROM_CART, Id: productId
    }

}
export const updateCartAction = (payload) => {
    return {
        type: types.UPDATE_CART, payload
    }
}

export const cleanCartAction = (payload) => {
    return {
        type: types.CLEAN_CART, payload: []
    }
}

export const filterProducts = (filter) => {
    return {
        type: types.FILTER_PRODUCTS, payload: filter
    }
}


>>>>>>> ccb9102502caed772e1d9a5bff26d345265f4a1e
