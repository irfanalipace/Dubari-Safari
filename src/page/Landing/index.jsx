import React from "react";
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

const Landing = () => {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
        <Header />
        <ChooseUs />
        <Popular />
      </div>

      {/* <Divider/> */}
<WhatWeDo/>
      <DubaiLeading />
      <OurPartners />
      <SpecialOffer />
      <OfficeLocation />
      <Footer />
    </>
  );
};

export default Landing;
