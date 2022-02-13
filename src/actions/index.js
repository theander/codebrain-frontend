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



