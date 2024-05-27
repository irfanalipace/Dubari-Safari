import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCategories } from '../../../store/actions/categoriesActions'

const AllActivities = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [categories, setCategory] = useState([])
  useEffect(() => {
    dispatch(getCategories())
      .then((result) => {
        setCategory(result.data.payload);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err, "ERRR");
      });
  }, [dispatch]);



  return (
    <Box sx={{ padding: "1rem 5%" }}>
      <Box sx={{ display: "flex", alignItems: "center" }} gap={3}>
        <Typography variant="h1" sx={{ fontSize: "1rem", fontWeight: "600" }}>
          All Activities
        </Typography>

        {categories.map((val, ind) => (
          <Box key={ind} sx={{ display: "flex", alignItems: "center" }} gap={1}>
            <Button
              sx={{ textTransform: "none", color: "grey" }}
              onClick={() => navigate('/desert-safari')}
            >
              {val.name}
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AllActivities;
