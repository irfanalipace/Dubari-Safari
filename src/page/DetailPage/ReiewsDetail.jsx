import { Box, Card, CardContent, Divider, LinearProgress, Rating, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

const ReviewsDetail = ({ data }) => {
  const [value, setValue] = useState(5);
  const base = 'https://dubaisafari.saeedantechpvt.com/';

  // Calculate average rating
  const totalReviews = data?.reviews?.length || 0;
  const averageRating = data?.reviews?.reduce((acc, review) => acc + review?.rating, 0) / totalReviews || 0;

  // Ratings distribution
  const ratingDistribution = [5, 4, 3, 2, 1].map(star => {
    return {
      star,
      count: data?.reviews.filter(review => review?.rating === star).length,
    };
  });

  useEffect(() => {
    setValue(Math.round(averageRating));
  }, [averageRating]);

  return (
    <>
      <Box sx={{ padding: '25px 0px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <Typography sx={{ fontSize: '30px', fontWeight: 600 }}>Louvre Abu Dhabi Reviews</Typography>
        <Divider sx={{ width: '100%' }} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
            gap: { xs: 2, md: 0 },
            width: '100%',
          }}
        >
          <Box sx={{ width: { xs: '100%', md: 'auto' }, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography sx={{ fontSize: { xs: '24px', md: '42px' } }}>
              {averageRating.toFixed(1)}/5.0
            </Typography>
            <Rating name="average-rating" value={averageRating} readOnly />
          </Box>

          <Box sx={{ width: { xs: '100%', md: 'auto' }, textAlign: { xs: 'center', md: 'left' } }}>
            {ratingDistribution.map(({ star, count }) => (
              <Box
                key={star}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '8px',
                  width: '100%',
                }}
              >
                <Typography sx={{ fontSize: { xs: '18px', md: '22px' } }}>{star} stars</Typography>
                <Rating name={`rating-${star}`} value={star} readOnly />
                <Typography sx={{ fontSize: { xs: '18px', md: '22px' }, marginLeft: { xs: 0, sm: '10px' } }}>
                  {count}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ width: { xs: '100%', md: '30%' }, paddingRight: { xs: 0, md: '30px' } }}>
            {ratingDistribution.map(({ star, count }) => (
              <Box key={star} sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px', width: '100%' }}>
                <LinearProgress
                  variant="determinate"
                  value={(count / totalReviews) * 100}
                  sx={{ flexGrow: 1, marginRight: '10px' }}
                />
                <Typography sx={{ width: { xs: 'auto', md: '100px' } }}>
                  {count}/{totalReviews}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {data?.reviews.map((review, index) => (
          <Card key={index} sx={{ margin: '10px 0', padding: '20px' }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ width: '100px', height: '100px' }}>
                <img src={`${base}${review.user.profile_image}`} alt="" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
              </Box>
              <Box sx={{ flex: 1, marginLeft: '20px' }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>{review.user.first_name}</Typography>
                <Typography sx={{ fontSize: '16px', marginTop: '5px' }}>{review.comment}</Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontSize: '22px' }}>{review.rating}.0/5.0</Typography>
                <Rating
                  name={`review-rating-${index}`}
                  value={review.rating}
                  readOnly
                />
                <Typography sx={{ backgroundColor: 'green', padding: "5px", color: 'white', borderRadius: '5px', textAlign: 'center' }}>
                  {review.rating === 5 ? 'Excellent' : review.rating >= 4 ? 'Good' : review.rating >= 3 ? 'Average' : 'Poor'}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
}

export default ReviewsDetail;
