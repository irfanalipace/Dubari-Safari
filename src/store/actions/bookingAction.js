// In store/actions/bookingActions.js

export const SET_BOOKING_DETAILS = 'SET_BOOKING_DETAILS';
export const CLEAR_BOOKING_DETAILS = 'CLEAR_BOOKING_DETAILS';

export const setBookingDetails = (bookingDetails) => ({
    type: SET_BOOKING_DETAILS,
    payload: bookingDetails,
});

export const clearBookingDetails = () => ({
    type: CLEAR_BOOKING_DETAILS,
});
