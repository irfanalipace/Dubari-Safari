import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  Collapse,
  Divider,
  FormControlLabel,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const sectionNames = [
  { main: "Section 1 Main", sub: ["Sub 1", "Sub 2", "Sub 3"] },
  { main: "Section 2 Main", sub: ["Sub A", "Sub B", "Sub C"] },
  { main: "Section 3 Main", sub: ["Sub X", "Sub Y", "Sub Z"] },
];

const AccordionComp = ({ title }) => {
  const [expandedSections, setExpandedSections] = useState(
    Array(sectionNames.length).fill(false)
  );

  const handleCheckboxChange = (index) => (event) => {
    const newExpandedSections = [...expandedSections];
    newExpandedSections[index] = event.target.checked;
    setExpandedSections(newExpandedSections);
  };

  const handleDropDown = (index) => () => {
    const newExpandedSections = [...expandedSections];
    newExpandedSections[index] = !newExpandedSections[index];
    setExpandedSections(newExpandedSections);
  };

  const renderDetails = (index, sectionName) => (
    <AccordionDetails key={index}>
      <Box onClick={handleDropDown(index)}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FormControlLabel
            control={<Checkbox onChange={handleCheckboxChange(index)} />}
            label={sectionName.main}
          />
          <ExpandMoreIcon
            sx={{
              transform: expandedSections[index] ? "rotate(180deg)" : "none",
            }}
          />
        </Box>
      </Box>

      <Collapse in={expandedSections[index]} timeout="auto" unmountOnExit>
        <Box sx={{ ml: 2, display: "flex", flexDirection: "column" }}>
          {sectionName.sub.map((label, idx) => (
            <FormControlLabel
              key={idx}
              control={<Checkbox />}
              label={label}
            />
          ))}
        </Box>
      </Collapse>
    </AccordionDetails>
  );

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography fontWeight="bold">{title}</Typography>
      </AccordionSummary>
      <Divider />
      {sectionNames.map((section, index) => renderDetails(index, section))}
    </Accordion>
  );
};

export default AccordionComp;
