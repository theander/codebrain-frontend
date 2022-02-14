import * as types from "../actions/action"


const shopCartReducer = (state = [], action) => {

    switch (action.type) {
        case types.ADD_TO_CART:

            const itemInList = state.find((item) => {
                return item.Id === action.payload.Id

            })
           
            if (itemInList) {
                state.map((item, index) => {
                    if (item.Id === itemInList.Id) {
                        state[index].Qtd += Number(action.payload.Qtd)
                        return state
                    }
                }) 
                return state
            }

            return [...state, action.payload]
        case types.CLEAN_CART:

            console.log('Clean Cart')

            return []

        case types.REMOVE_FROM_CART:
            return state.filter(s => {
                return Number(s.Id) !== Number(action.payload);
            })

        case types.UPDATE_CART:
            return state;

        default:
            return state;
    }
}

export default shopCartReducer;