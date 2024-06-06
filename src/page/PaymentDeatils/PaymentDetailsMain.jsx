import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PaymentDetailComponent from './Components/PaymentDeatailComponent';
import PriceCard from '../Component/PriceCard';
import StepperComp from './Components/StepperComp';
import P_Detail_New from './Components/P_Detail_New';
import Component1 from '../GuestDetails/Components/Component1';
import Cookies from 'js-cookie'; // Importing js-cookie
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import StripePayment from './Components/StripePayment';
import Booking_Info from '../Booking_Info/Booking_Info';

const steps = [
  { title: 'Add to cart', icon: <AddShoppingCartIcon /> },
  { title: 'Payment', icon: <AttachMoneyIcon /> },
  { title: 'Print Voucher', icon: <LocalPrintshopIcon /> },
];

const PaymentDetailsMain = () => {
  const [cookieData, setCookieData] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  useEffect(() => {
    window.scrollTo(0, 0);
    const data = Cookies.get('bookingDetails');
    if (data) {
      setCookieData(JSON.parse(data));
    }
  }, []);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  return (
    <Box sx={{ background: '#FFF', mt: 2 }}>
      <Grid container spacing={3} sx={{ padding: '2rem 5%' }}>
        <Grid item xs={12} lg={12}>
          <StepperComp
            activeStep={activeStep}
            handleNext={handleNext}
            handleBack={handleBack}
            handleSkip={handleSkip}
            handleReset={handleReset}
            steps={steps}
            isStepOptional={isStepOptional}
            isStepSkipped={isStepSkipped}
          />
        </Grid>
        <Grid item lg={8} md={12} sm={12} xs={12}>
          {activeStep === 0 && <Component1 data={cookieData} onNext={handleNext} />}
          {activeStep === 1 && <StripePayment data={cookieData} onNext={handleNext} />}
          {activeStep === 2 && <Booking_Info activeStep={activeStep} />}
        </Grid>
        <Grid item lg={4} md={12} sm={12} xs={12}>
          <PriceCard data={cookieData} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentDetailsMain;
