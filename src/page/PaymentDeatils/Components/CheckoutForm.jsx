import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";
import { Button, Box, Typography, useTheme } from "@mui/material";
import { StripePay } from "../../../store/actions/categoriesActions";
import { Link } from "react-router-dom";

const CheckoutForm = ({ totalAmount, onNext }) => {
    const theme = useTheme()
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        try {
            const { clientSecret } = await dispatch(StripePay({ price: totalAmount }));

            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardNumberElement),
                    billing_details: {
                    },
                },
            });

            if (result.error) {
                setPaymentError(result.error.message);
            } else {
                if (result.paymentIntent.status === 'succeeded') {
                    setPaymentSuccess(true);
                } else {
                    setPaymentError("Payment failed. Please try again.");
                }
            }
        } catch (error) {
            console.error("Error in Stripe payment:", error);
            setPaymentError("Error processing payment. Please try again later.");
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

    return (
        <div style={{ border: "1px solid #f0f0f0", padding: '30px', borderRadius: '5px', }}>
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
                    <div style={fieldContainerStyle}> {/* Container div for Card Number */}
                        <label style={{ display: "block", marginBottom: "10px" }}>Card Number</label>
                        <div style={{ padding: "12px", backgroundColor: '#F6F7F9', borderRadius: '6px' }}> {/* Styled container div */}
                            <CardNumberElement options={cardStyle} />
                        </div>
                    </div>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ ...fieldContainerStyle, width: "calc(50% - 10px)" }}> {/* Container div for Expiration Date */}
                            <label style={{ display: "block", marginBottom: "10px" }}>Expiration Date</label>
                            <div style={{ padding: "12px", backgroundColor: '#F6F7F9', borderRadius: '6px' }}> {/* Styled container div */}
                                <CardExpiryElement options={cardStyle} />
                            </div>
                        </div>
                        <div style={{ ...fieldContainerStyle, width: "calc(50% - 10px)" }}> {/* Container div for CVC */}
                            <label style={{ display: "block", marginBottom: "10px" }}>CVC</label>
                            <div style={{ padding: "12px", backgroundColor: '#F6F7F9', borderRadius: '6px' }}> {/* Styled container div */}
                                <CardCvcElement options={cardStyle} />
                            </div>
                        </div>
                    </Box>


                    {paymentError && <Typography color="error" sx={{ marginBottom: "20px" }}>{paymentError}</Typography>}

                    <Box
                        gap={1}
                        display={"flex"}
                        sx={{ marginTop: "2rem", alignItems: "center" }}
                    >
                        <input
                            type="checkbox"
                            required
                            style={{ fontSize: "1rem", transform: "scale(1.8)" }}
                        />
                        <Typography sx={{ fontSize: "1rem", marginLeft: "1rem" }}>
                            By proceeding further you accept{" "}
                            <Link
                                to="/"
                                style={{
                                    color: theme.palette.primary.main,
                                    textDecoration: "none",
                                }}
                            >
                                Payment and Return
                            </Link>{" "}
                            policy{" "}
                        </Typography>
                    </Box>

                    <Box
                        gap={1}
                        display={"flex"}
                        sx={{ marginTop: "1rem", alignItems: "center" }}
                    >
                        <input
                            type="checkbox"
                            required
                            style={{ fontSize: "1rem", transform: "scale(1.8)", color: "red" }}
                        />
                        <Typography sx={{ fontSize: "1rem", marginLeft: "1rem" }}>
                            Shipping is free within 20 km range from nampally, if your event is
                            beyond that our representative will call yoy regarding shipping
                            chargen.
                        </Typography>
                    </Box>

                    <Box
                        gap={1}
                        display={"flex"}
                        sx={{ marginTop: "1rem", alignItems: "center" }}
                    >
                        <input
                            type="checkbox"
                            required
                            style={{ fontSize: "1rem", transform: "scale(1.8)", color: "red" }}
                        />
                        <Typography sx={{ fontSize: "1rem", marginLeft: "1rem" }}>
                            By providing further you accept all our{" "}
                            <Link
                                to="/"
                                style={{
                                    color: theme.palette.primary.main,
                                    textDecoration: "none",
                                }}
                            >
                                Term-Conditions
                            </Link>{" "}
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography variant="h6">Total Amount: ${totalAmount}</Typography>
                        <Button type="submit" variant="contained" disabled={!stripe}>
                            Pay Now
                        </Button>
                    </Box>
                </form>
            ) : (
                <Typography color="success" variant="h5" sx={{ textAlign: "center", marginTop: "20px" }}>Payment successful!</Typography>
            )}
        </div>
    );
};

export default CheckoutForm;
