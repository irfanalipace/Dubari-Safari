import React, { useState } from "react";
import { Box, Divider, Typography, TextField, MenuItem, FormControl, InputLabel, Select, Button, CircularProgress, useTheme } from "@mui/material";
import { useSnackbar } from "notistack";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";
import { FiGift } from "react-icons/fi";
import { Send_Gift } from "../../store/actions/categoriesActions";

const DetailLeft = ({ ac_data, loading }) => {
    const [date, setDate] = useState("");
    const [showDropdowns, setShowDropdowns] = useState(false);
    const [adult, setAdult] = useState(1);
    const [child, setChild] = useState(0);
    const [infant, setInfant] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const theme = useTheme()
    // const {date} = useParams()
    const handleLogDetails = (totalPrice, p_id, q, date, price) => {
        if (!date) {
            enqueueSnackbar("Please Select Date", { variant: "error" });
        } else {
            handleCart(p_id, q, date, price)
                .then(() => {
                    const data = {
                        date: price,
                        person: {
                            adult: adult,
                            child: child,
                            infant: infant,
                        },
                        totalPrice: totalPrice,
                    };
                    navigate("/payment-details", { state: data });
                    enqueueSnackbar("Package Booked", { variant: "success" });

                })
                .catch((err) => {
                    console.log(err);
                    enqueueSnackbar("Failed to add to cart", { variant: "error" });
                });
        }
    };


    const handleGift = async (activity_id, discount_price, recipient_email) => {
        const body = {
            activity_id: activity_id,
            discount_price: discount_price,
            recipient_email: recipient_email
        };
        // console.log(body, 'llll')
        try {
            const res = await dispatch(Send_Gift(body));
            enqueueSnackbar("Gift sent successfully", { variant: "success" });
            navigate('/view-gift')
            return res;
        } catch (err) {
            console.log(err);
            enqueueSnackbar("Failed to send gift", { variant: "error" });
            throw err;
        }
    };

    const handleSelectClick = () => {
        if (!date) {
            enqueueSnackbar("Please Select Date", { variant: "error" });
        } else {
            setShowDropdowns(!showDropdowns);
        }
    };

    const calculateTotalPrice = (price) => {
        const totalAdultPrice = price * adult;
        const totalChildPrice = price * child;
        return totalAdultPrice + totalChildPrice;
    };

    const handleCart = (p_id, q, total, date, adult, child, infant) => {
        if (!date) {
            enqueueSnackbar("Please Select Date", { variant: "error" });
            return Promise.reject(new Error("Date not selected"));
        }
        return dispatch(addToCart(p_id, q, total, date, adult, child, infant))
            .then((result) => {
                console.log(result);
                enqueueSnackbar("Added to cart successfully", { variant: "success" });
            })
            .catch((err) => {
                console.log(err);
                enqueueSnackbar("Failed to add to cart", { variant: "error" });
                throw err;
            });
    };




    const stylesEll = {
        fontSize: "14px",
        fontWeight: 600,
        maxWidth: "100px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    };
    console.log(ac_data, 'hdgadjdkl')
    return (
        <Box
            sx={{
                border: "2px solid #EDEDED",
                borderRadius: "20px",
                padding: "30px 0px",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    gap: "20px",
                }}
            >
                <Typography
                    sx={{ fontWeight: 600, fontSize: "18px", paddingLeft: "20px" }}
                >
                    Select Date & Activity Option
                </Typography>
                <Divider sx={{ width: "100%" }} />
                <Box sx={{ padding: "0px 20px", width: "90%" }}>
                    <InputLabel>Please Select Date</InputLabel>
                    <TextField
                        type="date"
                        fullWidth
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                        variant="outlined"
                        sx={{
                            backgroundColor: "#EDEDED",
                            borderRadius: "7px",
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    border: "none",
                                },
                            },
                        }}
                    />
                </Box>
                <Box sx={{ padding: "0px 20px", width: "90%" }}>
                    <FormControl
                        fullWidth
                        sx={{ backgroundColor: "#EDEDED", borderRadius: "7px" }}
                    >
                        <Button
                            fullWidth
                            onClick={handleSelectClick}
                            sx={{
                                backgroundColor: "#EDEDED",
                                borderRadius: "7px",
                                textTransform: "none",
                                "&:hover": {
                                    backgroundColor: "#EDEDED",
                                },
                            }}
                        >
                            Select Person
                        </Button>
                    </FormControl>
                </Box>
                {showDropdowns && (
                    <>
                        <Box sx={{ padding: "0px 20px", width: "90%" }}>
                            <InputLabel>Adult</InputLabel>
                            <FormControl
                                fullWidth
                                sx={{ backgroundColor: "#EDEDED", borderRadius: "7px" }}
                            >
                                <Select
                                    value={adult}
                                    onChange={(e) => setAdult(e.target.value)}
                                    sx={{
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            border: "none",
                                        },
                                    }}
                                >
                                    {[...Array(5).keys()].map((num) => (
                                        <MenuItem key={num + 1} value={num + 1}>
                                            {num + 1}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ padding: "0px 20px", width: "90%" }}>
                            <InputLabel>Child</InputLabel>
                            <FormControl
                                fullWidth
                                sx={{ backgroundColor: "#EDEDED", borderRadius: "7px" }}
                            >
                                <Select
                                    value={child}
                                    onChange={(e) => setChild(e.target.value)}
                                    sx={{
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            border: "none",
                                        },
                                    }}
                                >
                                    {[...Array(5).keys()].map((num) => (
                                        <MenuItem key={num} value={num}>
                                            {num}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ padding: "0px 20px", width: "90%" }}>
                            <InputLabel>Infant</InputLabel>
                            <FormControl
                                fullWidth
                                sx={{ backgroundColor: "#EDEDED", borderRadius: "7px" }}
                            >
                                <Select
                                    value={infant}
                                    onChange={(e) => setInfant(e.target.value)}
                                    sx={{
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            border: "none",
                                        },
                                    }}
                                >
                                    {[...Array(5).keys()].map((num) => (
                                        <MenuItem key={num} value={num}>
                                            {num}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    </>
                )}
                <Divider sx={{ width: "100%" }} />
                <Box sx={{ padding: "20px", width: "90%" }}>
                    {loading ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                            <CircularProgress />
                        </Box>
                    ) : (
                        ac_data?.packages?.map((item, index) => {
                            console.log(ac_data, 'item')
                            const totalPrice = calculateTotalPrice(item.price);
                            let total = 0;
                            if (item.category === 'sharing') {
                                total = adult * Number(item.adult_price) + child * Number(item.child_price);
                            } else {
                                total = totalPrice;
                            }
                            const quantity = adult + child + infant;
                            return (
                                <Box
                                    key={index}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        gap: "10px",
                                        padding: "20px",
                                        border: "1px solid #EDEDED",
                                        borderRadius: "10px",
                                        marginBottom: "10px",
                                        backgroundColor: "#EDEDED",
                                    }}
                                >
                                    <Box>
                                        <Typography sx={stylesEll}>
                                            {item.title}
                                        </Typography>
                                        <Typography sx={{ fontSize: "14px", color: "#777" }}>
                                            {item.category}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                                            {`AED ${total}`}
                                        </Typography>
                                        {item.category === 'sharing' && (
                                            <Typography sx={{ fontSize: "12px", color: "#777" }}>
                                                Per Group: {item.adult_price}
                                                <br />
                                                Per Child: {item.child_price}
                                            </Typography>
                                        )}
                                        {item.category === 'private' && (
                                            <Typography sx={{ fontSize: "14px", color: "#777" }}>
                                                Per Group
                                            </Typography>
                                        )}
                                    </Box>
                                    <Box>
                                        <Button
                                            onClick={() => handleCart(ac_data.id, 1, total, date, adult, child, infant)}
                                            variant="contained"
                                            sx={{
                                                color: "white",
                                                fontSize: "12px",
                                                textTransform: 'none'
                                            }}
                                        >
                                            Add To Cart
                                        </Button>
                                    </Box>
                                    <Box>
                                        <Button
                                            onClick={() => handleLogDetails(total, ac_data.id, 1, total, date)}
                                            variant="contained"
                                            sx={{
                                                color: "white",
                                                fontSize: "12px",
                                                textTransform: 'none'
                                            }}
                                        >
                                            Book Now
                                        </Button>
                                    </Box>
                                </Box>
                            );
                        })
                    )}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', padding: "0px 30px" }}>
                    <FiGift style={{ color: theme.palette.primary.main }} />
                    <Button onClick={() => handleGift(ac_data.id, ac_data.
                        discount_offer, 'hi')} sx={{ textTransform: 'none', fontWeight: 600 }}>Give this as a Gift</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default DetailLeft;
