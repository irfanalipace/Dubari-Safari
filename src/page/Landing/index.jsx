import React from 'react'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import { Divider } from '@mui/material'
import SpecialOffer from './Components/SpecialOffer'
import DubaiLeading from './Components/DubaiLeading'
import OfficeLocation from './Components/OfficeLocation'
import OurPartners from './Components/OurPartners'


const Landing = () => {
    return (
     <>
        <Navbar/>
        <Divider/>

<DubaiLeading/>
<OurPartners/>
<SpecialOffer/>
<OfficeLocation/>
        <Footer/>
     </>
    )
}

export default Landing