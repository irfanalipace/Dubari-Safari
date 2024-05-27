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

export const getActivitiesById = (id) => async (dispatch) => {
  try {
    const res = await api.get(`single_activity/${id}`);
    dispatch({
      type: "GET_ACTIVITIES_BY_ID",
      payload: res.data,
    });
    return res;
  } catch (err) {
    throw err;
  }
};

export const getActivities = () => async (dispatch) => {
  try {
    const res = await api.get("all_activity");
   
    return res;
  } catch (err) {
    throw err;
  }
};