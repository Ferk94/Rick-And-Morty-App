import axios from 'axios';
import { GET_CHARACTERS, GET_DETAIL } from './constants';
import { BACK_CHARACTERS, BASE_BACK_URL } from '../../constants';



export function getCharacters(){
    return function(dispatch){
        axios.get(BACK_CHARACTERS)
        .then(response => {
            return dispatch({
                type: GET_CHARACTERS,
                payload: response.data
            })
        })
        
    }
}

export function getDetail(id){
    return function(dispatch){
        axios.get(`${BASE_BACK_URL}/${id}`)
        .then(response => {
            return dispatch({
                type: GET_DETAIL,
                payload: response.data
            })
        })
    }
}