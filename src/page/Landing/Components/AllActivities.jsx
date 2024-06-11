import React, { useEffect, useState } from "react";
import { Box, Button, Typography, useMediaQuery, Skeleton } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCategories } from '../../../store/actions/categoriesActions';

const AllActivities = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [categoryMap, setCategoryMap] = useState({});
  const [loading, setLoading] = useState(true);

  const staticCategories = [
    { name: 'Desert Safari', image: '/ac1.svg' },
    { name: 'Sightseeing', image: '/activity2.svg' },
    { name: 'Adventure', image: '/activity3.svg' },
    { name: 'Attractions & Experiences', image: '/activity4.svg' },
    { name: 'Cruising & Yachting', image: '/activity5.svg' },
    { name: 'Offers', image: '/offers.svg' },
  ];

  useEffect(() => {
    dispatch(getCategories())
      .then((result) => {
        const categories = result.data.payload;
        const categoryMap = categories.reduce((acc, category) => {
          acc[category.name] = category.id;
          return acc;
        }, {});
        setCategoryMap(categoryMap);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err, "ERRR");
      });
  }, [dispatch]);

  const isMediumOrSmallScreen = useMediaQuery(theme => theme.breakpoints.down('md'));
  if (location.pathname === '/desert-safari' || isMediumOrSmallScreen) {
    return null;
  }

  return (
    <Box sx={{ padding: "1rem 5%" }}>
      <Box sx={{ display: "flex", alignItems: "center" }} gap={3}>
        <Typography variant="h1" sx={{ fontSize: "1rem", fontWeight: "600" }}>
          All Activities
        </Typography>
        {staticCategories.map((val, ind) => {
          const categoryId = categoryMap[val.name];
          return (
            <Box key={ind} sx={{ display: "flex", alignItems: "center" }} >
              <img src={val.image} alt={val.name} style={{ width: '30px', height: '20px' }} />
              <Button
                sx={{ textTransform: "none", color: "grey" }}
                onClick={() => navigate('/desert-safari', { state: { categoryId } })}
                disabled={loading} // Disable button while loading
              >
                {loading ? <Skeleton width={100} /> : val.name}
              </Button>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default AllActivities;
