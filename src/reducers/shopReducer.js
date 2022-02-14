import * as types from "../actions/action"


const shopReducer = (state = [], action) => {

    switch (action.type) {

        case types.FILTER_PRODUCTS:

            return action.payload

        case types.FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case types.FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                item: action.item
            }

        case types.FETCH_DATA_ERROR:
            return {
                ...state,
                loading: false,
                item: action.payload.error,
                //item: []
            }

        default:
            return state;
    }
}

export default shopReducer;