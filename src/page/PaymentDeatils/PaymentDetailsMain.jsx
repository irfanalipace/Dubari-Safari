import { Grid } from '@mui/material'
import React from 'react'
import PaymentDetailComponent from './Components/PaymentDeatailComponent'
import PriceCard from '../Component/PriceCard'

const PaymentDetailsMain = () => {
  return (
    <>

<Grid container spacing={3} sx={{padding:'2rem 5%'}}>
<Grid item lg={8} md={12} sm={12} xs={12}>
<PaymentDetailComponent/>


</Grid>
<Grid item lg={4} md={12} sm={12} xs={12}>
<PriceCard/>



</Grid>

</Grid>



    </>
  )
}

export default PaymentDetailsMain