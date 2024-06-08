import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import Cookies from "js-cookie";

const stripePromise = loadStripe("pk_test_51Nl5l2Fd4D0x5hm6bNeeGB3OgSp6LVDsHPSthOuzgiygFol7rB4uUG02e2x1DlTyz48BBGenNM6gd0DJWrozE0cj00b7xF7yx3");

const StripePayment = ({ data, onNext, }) => {
    const [cookieData, setCookieData] = useState(null);
    const [totalAmount, setTotalAmount] = useState(0);
    const [sideData, setSideData] = useState(null);
    const [totalValue, setTotalValue] = useState(0);

    useEffect(() => {
        const data = Cookies.get('bookingDetails');
        if (data) {
            setCookieData(JSON.parse(data));
            setTotalAmount(JSON.parse(data)?.total_amount || 0);
        }
    }, []);

    useEffect(() => {
        const data = Cookies.get('information');
        if (data) {
            setSideData(JSON.parse(data));
            setTotalValue(JSON.parse(data)?.total_amount || 0);
        }
    }, []);

    return (
        <Elements stripe={stripePromise} options={'sk_test_51Nl5l2Fd4D0x5hm6Nx1OKK0snF9qYjovaDAraLysgglMKBT0lkl4G8PYGEb6xoc5qdovTvRDgGnUXPKG5wMhIKVs00NNF25eXI'}>
            <CheckoutForm totalAmount={totalAmount} setTotalAmount={setTotalAmount} onNext={onNext} setTotalValue={setTotalValue} totalValue={totalValue} />
        </Elements>
    );
};

export default StripePayment;
