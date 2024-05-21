import React from "react";
import AccordionComp from "./components/AccordionComp";
import { Stack } from "@mui/material";

const LeftAside = () => {
  return (
    <Stack spacing={4}>
      <AccordionComp title="Categories" />
      <AccordionComp title="Budget" />
      <AccordionComp title="Language" />
    </Stack>
  );
};

export default LeftAside;
