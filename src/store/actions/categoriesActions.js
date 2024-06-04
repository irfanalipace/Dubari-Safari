import api from "../../utils/Api";
import Cookies from "js-cookie";

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


export const Send_Gift = (body) => async (dispatch) => {
  try {
    const res = await api.post("user/send/giftCard", body);
    dispatch({
      type: "SEND_GIFT",
      payload: res.data,
    });
    return res;
  } catch (err) {
    throw err;
  }
};


export const Booking = (body) => async (dispatch) => {
  try {
    const { first_name, last_name, email, activity_name, title, nationality, phone, date, adult, child, infant, total_amount, pickup_location, note, status } = body;

    Cookies.set('bookingDetails', JSON.stringify({
      first_name,
      last_name,
      email,
      activity_name,
      title,
      nationality,
      phone,
      date,
      adult,
      child,
      infant,
      total_amount,
      pickup_location,
      note,
      status
    }), { expires: 1 });

    const res = await api.post("booking", body);
    dispatch({
      type: "BOOKING",
      payload: res.data,
    });
    return res;
  } catch (err) {
    throw err;
  }
};

