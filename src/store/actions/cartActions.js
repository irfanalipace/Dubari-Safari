import api from "../../utils/Api";

export const addToCart = (p_id, q) => async (dispatch) => {
  const body = {
    package_id: p_id,
    quantity: q,
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
