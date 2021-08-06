import {
    GET_ALL_PRODUCTS,
    GET_BY_ID,
    CREATE_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    GET_CATEGORIES
} from '../constants'

import axios from 'axios';

//Obteniendo todos las foods.
export const getAllProducts = () => async (dispatch) => {
    
   try {
       const res = await axios.get('http://localhost:5001/food/api/products');
       dispatch({
           type: GET_ALL_PRODUCTS,
           payload: res.data
       });
       console.log('DATAAA --->', res.data);//Me trae 7 por ahora, chequear las imágenes de c/u
   } catch (err) {
       console.log(err)
   }
}

//Obteniendo productos por ID.
export const getById = (id) => async (dispatch) => {
    
    try {
        const res = await axios.get(`http://localhost:5001/food/api/${id}`);
        
        dispatch({
            type: GET_BY_ID,
            payload: res.data
        });
    } catch (err) {
        console.log(err)
    }
 }

 //Creando un producto.
 export const createProduct = () => async (dispatch) => {
    try {
        const res = await axios.post('http://localhost:5001/food/api');
        dispatch({
            type: CREATE_PRODUCT,
            payload: res.data
        });
    } catch (err) {
        console.log(err)
    }
 }

 //Actualizando procuto.
 export const getUpdate = (id) => async (dispatch) => {
     
    try {        
        const res = await axios.get(`http://localhost:5001/food/api/${id}`);  
        dispatch({
            type: UPDATE_PRODUCT,
            payload: res.data
        });
        
    } catch (err) {
      console.log(err)
    }
 }

 //Borrando un producto.
 export const deleteProduct = (id) => async (dispatch) => {
     try {
         const res = await axios.get(`http://localhost:5001/food/api/${id}`);
         dispatch({
             type: DELETE_PRODUCT,
             payload: res.data
         });
     } catch (err) {
         console.log(err)
     }
 }


 //Obteniendo las categorías.
 export const getCategories = () => async (dispatch) => {
     try {
         const res = await axios.get('http://localhost:5001/food/api/category');
         dispatch({
             type: GET_CATEGORIES,
             payload: res.data
         });
     } catch (err) {
         console.log(err)
     }
 }