import * as types from "../actions/action"


const shopReducer = (state = [], action) => {

    switch (action.type) {
        case types.ADD_TO_CART:
            return [...state, action.payload]
        case types.CLEAN_CART:
            return []
        default:
            return state;
    }
}

export default shopReducer;