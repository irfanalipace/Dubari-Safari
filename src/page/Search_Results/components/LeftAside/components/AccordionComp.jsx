import React, { useEffect, useState } from "react";
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
import { useDispatch } from "react-redux";
import { getCategories } from "../../../../../store/actions/categoriesActions";

const AccordionComp = ({ title, onCategorySelect }) => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedSections, setExpandedSections] = useState([]);

  useEffect(() => {
    dispatch(getCategories())
      .then((result) => {
        setCategories(result.data.payload);
        setLoading(false);
        setExpandedSections(Array(result.data.payload.length).fill(false));
      })
      .catch((err) => {
        setLoading(false);
        console.log(err, "ERRR");
      });
  }, [dispatch]);

  const handleCheckboxChange = (index) => (event) => {
    const newExpandedSections = [...expandedSections];
    newExpandedSections[index] = event.target.checked;
    setExpandedSections(newExpandedSections);
  };

  const handleDropDown = (index, category) => () => {
    const newExpandedSections = [...expandedSections];
    newExpandedSections[index] = !newExpandedSections[index];
    setExpandedSections(newExpandedSections);
    onCategorySelect(category.id, null); // Pass category_id with no subcategory_id
  };

  const handleSubcategorySelect = (category, subcategory) => () => {
    onCategorySelect(category.id, subcategory.id); // Pass both category_id and subcategory_id
  };

  const renderDetails = (index, category) => (
    <AccordionDetails key={index}>
      <Box onClick={handleDropDown(index, category)}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FormControlLabel
            control={<Checkbox onChange={handleCheckboxChange(index)} />}
            label={category.name}
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
          {category.sub_category.map((subCategory, idx) => (
            <FormControlLabel
              key={idx}
              control={<Checkbox onChange={handleSubcategorySelect(category, subCategory)} />}
              label={subCategory.name}
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
      {categories.map((category, index) => renderDetails(index, category))}
    </Accordion>
  );
};

export default AccordionComp;
