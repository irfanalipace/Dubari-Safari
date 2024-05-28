import api from "../../utils/Api";

export const addToWishList = (activityId) => async (dispatch) => {
  try {
    const res = await api.post("user/wishlist", { activity_id: activityId });

    return res;
  } catch (err) {
    throw err;
  }
};


export const getWishList = () => async (dispatch) => {
  try {
    const res = await api.get("user/wishlist");

    return res;
  } catch (err) {
    throw err;
  }
};


export const deleteWishList = (activityId) => async (dispatch) => {
  try {
    const res = await api.delete(`user/wishlist/${activityId}`);

    return res;
  } catch (err) {
    throw err;
  }
};


