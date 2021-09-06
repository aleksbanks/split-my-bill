/* eslint-disable import/named */
// import { SET_DOGS } from '../Types/dogsTypes';
import axios from 'axios';

import { setDogsSlice } from '../slices/dogSlice';

const getAllDogs = () => async (dispatch) => axios
  .post('http://localhost:3001/', { name: 'asasdasd' })
  .then((res) => {
    console.log(res);
    return dispatch(setDogsSlice);
  });

export default getAllDogs;
