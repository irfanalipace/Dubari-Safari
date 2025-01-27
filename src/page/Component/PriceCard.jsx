import { Box, Button, Divider, TextField, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { CalendarViewMonthOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import Cookies from 'js-cookie';
import { Apply_Voucher } from "../../store/actions/bookingAction";
import { useLocation } from "react-router";
import { MdOutlineDateRange } from "react-icons/md";
import { IoPerson } from "react-icons/io5";

const PriceCard = ({ data1, activeStep, total, setTotalAmount, cartData }) => {
  const [voucherCode, setVoucherCode] = useState("");
  const [discountError, setDiscountError] = useState(null);
  const [isFieldEnabled, setIsFieldEnabled] = useState(false);
  // console.log(data1, 'xyz')
  const theme = useTheme();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const stateData = location.state;

  const pathnameCookie = Cookies.get('pathname');
  const totalBooking = JSON.parse(Cookies.get('bookingDetails') || '{}');
  console.log(cartData, 'j')

  const handleVoucherApply = async () => {
    try {
      const res = await dispatch(Apply_Voucher(voucherCode));
      if (res.data.success) {
        const price = parseFloat(res.data.payload.price);
        const discountAmount = Math.abs(price);
        setDiscountError(null);
        setIsFieldEnabled(true);
        const bookingDetails = JSON.parse(Cookies.get('bookingDetails'));
        const information = JSON.parse(Cookies.get('information'));

        const updatedTotalAmount = bookingDetails.total_amount - discountAmount;
        bookingDetails.total_amount = updatedTotalAmount;
        information.total_amount = updatedTotalAmount;

        Cookies.set('bookingDetails', JSON.stringify(bookingDetails));
        Cookies.set('information', JSON.stringify(information));

        setTotalAmount(updatedTotalAmount);
      } else {
        setDiscountError(res.data.message);
      }
    } catch (error) {
      console.error("Error applying voucher:", error);
      setDiscountError("Error applying voucher. Please try again later.");
    }
  };

  return (
    <Box
      sx={{
        padding: "3rem 5%",
        border: "1px solid #f0f0f0",
        borderRadius: "10px",
        background: "#fff",
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontSize: "1.3rem", fontWeight: "600", marginBottom: "1rem" }}
      >
        Summary
      </Typography>
      <Divider />

      <Box sx={{ marginTop: "2rem" }}>
        {state === '/cart' ? (
          <>
            {cartData?.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "1rem",
                  border: '1px solid #f0f0f0',
                  padding: '20px',
                  borderRadius: '5px',
                  width: '90%'
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: "column", gap: '13px', width: '90%' }}>
                  <Typography sx={{ fontWeight: 600 }}>{item.package.activity.name}</Typography>
                  <Typography sx={{
                    fontSize: "1rem",
                    color: theme.palette.primary.textPrimary,
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxHeight: "4.5rem",
                    lineHeight: "1.5rem",
                  }}>{item.package.title} - {item.package.category} </Typography>
                  <Typography sx={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600 }}><MdOutlineDateRange size={22} /> &nbsp;{item.tour_date}</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography><IoPerson /> &nbsp;1 * Adult</Typography>
                    {/* Conditionally render price based on category */}
                    <Typography>AED {item.package.category === 'sharing' ? item.package.adult_price : item.package.price}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', margin: '20px 0px' }}>
                    {activeStep !== 0 && (
                      <TextField
                        label="Voucher Code"
                        value={voucherCode}
                        onChange={(e) => setVoucherCode(e.target.value)}
                        variant="outlined"
                        sx={{ flex: 1, borderRadius: '10px', backgroundColor: 'whitesmoke', '&:hover': { backgroundColor: 'white' } }}
                        InputProps={{
                          endAdornment: (
                            <Button
                              variant="contained"
                              onClick={handleVoucherApply}
                              sx={{
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0,
                                padding: '10px 50px',
                                height: '100%',
                              }}
                            >
                              Apply
                            </Button>
                          ),
                          sx: { borderTopRightRadius: '10px', borderBottomRightRadius: '10px' }
                        }}
                      />
                    )}
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                    <Typography>Sub Total</Typography>
                    <Typography> AED {item.price}</Typography>
                  </Box>
                </Box>
              </Box>
            ))}

            <Typography variant="h6" sx={{ marginTop: "1rem" }}>
              Total Amount: AED {totalBooking.total_amount}
            </Typography>
          </>
        ) : (
          // If pathnameCookie doesn't exist, show full card as it is
          <>
            <Box
              sx={{
                padding: "3rem 5%",
                border: "1px solid #f0f0f0",
                borderRadius: "10px",
                background: "#fff",
              }}
            >
              {/* <Typography
                variant="h1"
                sx={{ fontSize: "1.3rem", fontWeight: "600", marginBottom: "1rem" }}
              >
                Summary
              </Typography> */}
              {/* <Divider /> */}

              <Box sx={{ marginTop: "0rem" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "0rem",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <PersonOutlineOutlinedIcon style={{ color: "#000" }} />
                    <Typography
                      sx={{ color: "#000", fontWeight: "bold", mt: 0.5, ml: 1 }}
                    >
                      Adult
                    </Typography>
                  </Box>
                  <Typography sx={{ fontWeight: "600" }}>
                    {data1?.adult}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "1rem",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <PersonOutlineOutlinedIcon style={{ color: "#000" }} />
                    <Typography
                      sx={{ color: "#000", fontWeight: "bold", mt: 0.5, ml: 1 }}
                    >
                      Child
                    </Typography>
                  </Box>
                  <Typography sx={{ fontWeight: "600" }}>
                    {data1?.child}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "1rem",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <PersonOutlineOutlinedIcon style={{ color: "#000" }} />
                    <Typography
                      sx={{ color: "#000", fontWeight: "bold", mt: 0.5, ml: 1 }}
                    >
                      Infant
                    </Typography>
                  </Box>
                  <Typography sx={{ fontWeight: "600" }}>
                    {data1?.infant}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "1rem",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CalendarViewMonthOutlined style={{ color: "#000" }} />
                    <Typography
                      sx={{ color: "#000", fontWeight: "bold", mt: 0.5, ml: 1 }}
                    >
                      Date
                    </Typography>
                  </Box>
                  <Typography sx={{ fontWeight: "600" }}>{data1?.date}</Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', margin: '20px 0px' }}>
                  {activeStep !== 0 && (
                    <TextField
                      label="Voucher Code"
                      value={voucherCode}
                      onChange={(e) => setVoucherCode(e.target.value)}
                      variant="outlined"
                      sx={{ flex: 1, borderRadius: '10px', backgroundColor: 'whitesmoke', '&:hover': { backgroundColor: 'white' } }}
                      InputProps={{
                        endAdornment: (
                          <Button
                            variant="contained"
                            onClick={handleVoucherApply}
                            sx={{
                              borderTopLeftRadius: 0,
                              borderBottomLeftRadius: 0,
                              padding: '10px 50px',
                              height: '100%',
                            }}
                          >
                            Apply
                          </Button>
                        ),
                        sx: { borderTopRightRadius: '10px', borderBottomRightRadius: '10px' }
                      }}
                    />
                  )}
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "1rem",
                  }}
                >
                  <Typography
                    sx={{ color: "black", fontWeight: "600", fontSize: "1.5rem" }}
                  >
                    Total Amount
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "2rem",
                      color: theme.palette.primary.main,
                    }}
                  >
                    AED {activeStep === 0 ? data1?.total_amount : total}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default PriceCard;
