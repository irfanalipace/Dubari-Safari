import api from "../../utils/Api";

export const getCategories = () => async (dispatch) => {
  try {
    const res = await api.get("all_category");
    dispatch({
      type: "GET_CATEGORIES",
      payload: res.data,
    });
    return res;
  } catch (err) {
    throw err;
  }
};
