import axios from 'axios';
import { fetchDataRequest, fetchDataSuccess, fetchDataError } from '../actions/action'

export const fetchProducts = () => {

    return dispatch => {
        dispatch(fetchDataRequest());
        axios.get().then(response => {
            dispatch(fetchDataSuccess(response.data))
        }).catch(error => {
            dispatch(fetchDataError(error))
        })
    }
}