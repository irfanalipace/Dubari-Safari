import api from "../../utils/Api"

export const addToCart = (p_id, q, total, date,) => async (dispatch) => {
  const body = {
    package_id: p_id,
    quantity: q,
    price: total,
    tour_date: date,

  };


  try {
    const res = await api.post("user/cart", body);
    dispatch({
      type: "ADD_TO_CART",
      payload: res.data,
    });
    return res;
  } catch (err) {
    throw err;
  }
};



export const getCart = () => async (dispatch) => {

  try {
    const res = await api.get("user/cart",);
    return res;
  } catch (err) {
    throw err;
  }
};



export const deleteCart = (id) => async (dispatch) => {
  try {
    const res = await api.delete(`user/card/${id}`);

    return res;
  } catch (err) {
    throw err;
  }
};