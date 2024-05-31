import React, { useEffect } from "react";
import Header from "./Header";
import ChooseUs from "./Chooseus";
import Popular from "./Popular";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import { Divider } from "@mui/material";
import SpecialOffer from "./Components/SpecialOffer";
import DubaiLeading from "./Components/DubaiLeading";
import OfficeLocation from "./Components/OfficeLocation";
import OurPartners from "./Components/OurPartners";
import WhatWeDo from "./Components/WhatWeDo";
import AllActivities from "./Components/AllActivities";
import Page from "../../components/page";
const Landing = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  })


  return (
    <>

<Page title='Arabia Horizon | No 1 Tour Company in Dubai '>

<div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>

<Header />

<ChooseUs />
<Popular />
</div>

<WhatWeDo />
{/* <DubaiLeading /> */}
{/* <OurPartners /> */}
{/* <SpecialOffer /> */}
{/* <OfficeLocation /> */}


</Page>
    </>
  );
};

export default Landing;
