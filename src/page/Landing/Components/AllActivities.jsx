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

  const categoryImages = {
    // 'Desert Safari': '/activity1icon.png',

    'Desert Safari': '/ac1.svg',

    'Sightseeing': '/activity2.svg',
    'Adventure': '/activity3icon.png',
    'Attractions & Experiences': '/activity4icon.png',
    'Cruising & Yachting': '/activity5icon.png',
    'Transportation': '/activity6icon.png'
  };

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
          const imageSrc = categoryImages[val.name] || '/defaultIcon.png';

          return (
            <Box key={ind} sx={{ display: "flex", alignItems: "center" }} gap={1}>
              <img src={imageSrc} alt={val.name} style={{ width: '30px', height: '30px' }} />
              <Button
                sx={{ textTransform: "none", color: "grey" }}
                onClick={() => navigate('/desert-safari', { state: { categoryId: val.id } })}
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
