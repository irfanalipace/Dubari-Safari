import api from "../../utils/Api";

export const addToCart = (p_id, q) => async (dispatch) => {
  try {
    const res = await api.post("user/cart");
    dispatch({
      type: "ADD_TO_CART",
      payload: res.data,
    });
    return res;
  } catch (err) {
    throw err;
  }
};
