
import api from "../../utils/Api";

export const getHomeImage = () => async (dispatch) => {
    try {
        const res = await api.get('home/image');
        dispatch({
            type: "GET_IMAGE",
            payload: res.data,
        });
        return res;
    } catch (err) {
        throw err;
    }
};

export const getAboutImage = () => async (dispatch) => {
    try {
        const res = await api.get('about/image');
        dispatch({
            type: "GET_IMAGE",
            payload: res.data,
        });
        return res;
    } catch (err) {
        throw err;
    }
};

export const getContactUs = () => async (dispatch) => {
    try {
        const res = await api.get('contact/us');
        dispatch({
            type: "Find",
            payload: res.data,
        });
        return res;
    } catch (err) {
        throw err;
    }
};

export const getFindUs = () => async (dispatch) => {
    try {
        const res = await api.get('find/us');
        dispatch({
            type: "hi",
            payload: res.data,
        });
        return res;
    } catch (err) {
        throw err;
    }
};