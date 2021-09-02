import {GET_USERS, USERS_ERROR} from '../type'
import axios from 'axios'

export const getUsers = () => async dispatch => {
    
    try{
        const res = await axios.get(`https://pixabay.com/api/?key=23130780-02838ef9e7fd441ed11d8cbfa&q=cats&image_type=all&per_page=100`)
        dispatch( {
            type: GET_USERS,
            payload: res.data.hits
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}