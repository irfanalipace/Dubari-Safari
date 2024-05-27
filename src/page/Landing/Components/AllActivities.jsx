import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCategories } from '../../../store/actions/categoriesActions';

const AllActivities = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [categories, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (location.pathname === '/desert-safari') {
    return null;
  }

  return (
    <Box sx={{ padding: "1rem 5%" }}>
      <Box sx={{ display: "flex", alignItems: "center" }} gap={3}>
        <Typography variant="h1" sx={{ fontSize: "1rem", fontWeight: "600" }}>
          All Activities
        </Typography>
        {!loading && categories.map((val, ind) => {
          const categoryPath = `/${val.name.toLowerCase().replace(/\s+/g, '-')}`;
          return (
            <Box key={ind} sx={{ display: "flex", alignItems: "center" }} gap={1}>
              <img src={val.image} alt="" style={{ height: '25px', width: '25px', borderRadius: '50%' }} />
              <Button
                sx={{ textTransform: "none", color: "grey" }}
                onClick={() => navigate('/desert-safari')}
              >
                {val.name}
              </Button>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default AllActivities;
