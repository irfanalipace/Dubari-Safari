import api from "../../utils/Api";


export const userRegister = (formValues) => async (dispatch) => {


  try {
    const res = await api.post('user/register', formValues)

    return res ;

  } catch (err) {

    throw err;
  }
};



export const userLogin = (formValues) => async (dispatch) => {


  try {
    const res = await api.post('user/login', formValues)

    return res ;

  } catch (err) {

    throw err;
  }
};
