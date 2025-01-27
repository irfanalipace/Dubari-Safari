import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";
import { Button, Box, Typography, useTheme, TextField, Grid } from "@mui/material";
import { StripePay } from "../../../store/actions/categoriesActions"; // Import Apply_Voucher
import { Link, useLocation } from "react-router-dom";
import { Booking } from '../../../store/actions/categoriesActions';
import Cookies from 'js-cookie';
import { Apply_Voucher } from "../../../store/actions/bookingAction";
import PriceCard from "../../Component/PriceCard";

const CheckoutForm = ({ onNext, data, totalAmount, setTotalAmount, paymentData, cartData }) => {
    const token = useSelector((state) => state?.auth?.token);
    const { state } = useLocation()
    const theme = useTheme();
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [voucherCode, setVoucherCode] = useState("");
    const [discount, setDiscount] = useState(0);
    const [discountError, setDiscountError] = useState(null);

    const [isFieldEnabled, setIsFieldEnabled] = useState(false);

    const handleProceedToPayment = async (paymentStatus) => {
        debugger
        const bookingDetails = JSON.parse(Cookies.get('bookingDetails'));
        const bookingArray = Object.values(bookingDetails);
        const bookingKeys = Object.keys(bookingDetails);
        console.log(bookingDetails, 'bbc');
        if (state === '/cart') {
            bookingDetails.package_details = cartData;
        }

        bookingDetails.payment = paymentStatus;

        try {
            const res = await dispatch(Booking(bookingDetails, token));
            console.log('Booking API response:', res);
            onNext();
        } catch (error) {
            console.error('Error in booking:', error);
            setPaymentError("Error in booking. Please try again later.");
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        try {
            const { clientSecret } = await dispatch(StripePay({ price: totalAmount - discount }));

            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardNumberElement),
                    billing_details: {},
                },
            });

            if (result.error) {
                setPaymentError(result.error.message);
                handleProceedToPayment('fail');
            } else {
                if (result.paymentIntent.status === 'succeeded') {
                    setPaymentSuccess(true);
                    handleProceedToPayment('success');
                } else {
                    setPaymentError("Payment failed. Please try again.");
                    handleProceedToPayment('fail');
                }
            }
        } catch (error) {
            console.error("Error in Stripe payment:", error);
            setPaymentError("Error processing payment. Please try again later.");
            handleProceedToPayment('fail');
        }
    };



    const cardStyle = {
        style: {
            base: {
                backgroundColor: '#F6F7F9',
                padding: '12px',
                fontSize: '16px',
                width: "100%",
                color: '#424770',
                border: '1px solid black',
                borderRadius: '4px',
                '::placeholder': {
                    color: '#aab7c4',
                },
            },
            invalid: {
                color: '#9e2146',
            },
        },
    };

    const fieldContainerStyle = {
        marginBottom: "20px",
        padding: "8px",
    };

    console.log(cartData, 'hiiiiiiiiiiiiiiiiiiii')
    return (
        <>
            <Grid container spacing={3}>
                <Grid item lg={8}>
                    <div style={{ border: "1px solid #f0f0f0", padding: '30px', borderRadius: '5px' }}>
                        {!paymentSuccess ? (
                            <form onSubmit={handleSubmit}>
                                <Box>
                                    <Typography variant="h1" sx={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "20px" }}>
                                        Payment Details
                                    </Typography>
                                    <Typography sx={{ fontSize: "1rem", color: "grey", marginBottom: "20px" }}>
                                        Please enter your payment details
                                    </Typography>
                                </Box>
                                <div style={fieldContainerStyle}>
                                    <label style={{ display: "block", marginBottom: "10px" }}>Card Number</label>
                                    <div style={{ padding: "12px", backgroundColor: '#F6F7F9', borderRadius: '6px' }}>
                                        <CardNumberElement options={cardStyle} />
                                    </div>
                                </div>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div style={{ ...fieldContainerStyle, width: "calc(65% - 10px)" }}>
                                        <label style={{ display: "block", marginBottom: "10px" }}>Expiration Date</label>
                                        <div style={{ padding: "12px", backgroundColor: '#F6F7F9', borderRadius: '6px' }}>
                                            <CardExpiryElement options={cardStyle} />
                                        </div>
                                    </div>
                                    <div style={{ ...fieldContainerStyle, width: "calc(50% - 10px)" }}>
                                        <label style={{ display: "block", marginBottom: "10px" }}>CVC</label>
                                        <div style={{ padding: "12px", backgroundColor: '#F6F7F9', borderRadius: '6px' }}>
                                            <CardCvcElement options={cardStyle} />
                                        </div>
                                    </div>
                                </Box>

                                {paymentError && <Typography color="error" sx={{ marginBottom: "20px" }}>{paymentError}</Typography>}
                                {discountError && <Typography color="error" sx={{ marginBottom: "20px" }}>{discountError}</Typography>}

                                <Box gap={1} display={"flex"} sx={{ marginTop: "2rem", alignItems: "center" }}>
                                    <input
                                        type="checkbox"
                                        required
                                        style={{ fontSize: "1rem", transform: "scale(1.8)" }}
                                    />
                                    <Typography sx={{ fontSize: "1rem", marginLeft: "1rem" }}>
                                        By proceeding further you accept{" "}
                                        <Link to="/" style={{ color: theme.palette.primary.main, textDecoration: "none" }}>
                                            Payment and Return
                                        </Link>{" "}
                                        policy{" "}
                                    </Typography>
                                </Box>

                                <Box gap={1} display={"flex"} sx={{ marginTop: "1rem", alignItems: "center" }}>
                                    <input
                                        type="checkbox"
                                        required
                                        style={{ fontSize: "1rem", transform: "scale(1.8)", color: "red" }}
                                    />
                                    <Typography sx={{ fontSize: "1rem", marginLeft: "1rem" }}>
                                        By proceeding further you accept all our{" "}
                                        <Link to="/" style={{ color: theme.palette.primary.main, textDecoration: "none" }}>
                                            Terms and Conditions
                                        </Link>{" "}
                                    </Typography>
                                </Box>

                                <Box sx={{ marginTop: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Typography variant="h6">
                                        Total Amount: AED {(totalAmount).toFixed(2)}
                                    </Typography>
                                    <Button sx={{ padding: '10px 30px' }} type="submit" variant="contained" disabled={!stripe}>
                                        Pay Now
                                    </Button>
                                </Box>

                            </form>
                        ) : (
                            <Typography color="success" variant="h5" sx={{ textAlign: "center", marginTop: "20px" }}>Payment successful!</Typography>
                        )}
                    </div>
                </Grid>
                <Grid item lg={4}>
                    <PriceCard data1={paymentData} total={totalAmount} setTotalAmount={setTotalAmount} paymentData={paymentData} cartData={cartData} />
                </Grid>
            </Grid>

        </>
    );
};

export default CheckoutForm;
