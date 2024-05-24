import api from "../../utils/Api";

export const getAllBlogs = () => async (dispatch) => {
    try {
        const res = await api.get("show/blogs");
        dispatch({
            type: "GET_BLOGS",
            payload: res.data,
        });
        return res;
    } catch (err) {
        throw err;
    }
};