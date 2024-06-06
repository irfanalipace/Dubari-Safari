import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Rating } from "@mui/material";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

const PkgCard = ({ data, categories, ind }) => {
  const base = 'https://dubaisafari.saeedantechpvt.com/';
  const navigate = useNavigate();
  const [value, setValue] = React.useState(5);

  const descriptionStyle = {
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    textOverflow: 'ellipsis',
    color: 'grey'
  };

  const category = categories.find(category => category.id === data.category_id);
  const subCategory = category?.sub_category ? category.sub_category[ind]?.name : '';

  const truncateName = (name) => {
    const words = name.split(" ");
    if (words.length > 3) {
      return words.slice(0, 3).join(" ") + "...";
    } else {
      return name;
    }
  };

  const handleBookNowClick = () => {
    const farFutureDate = new Date(new Date().getTime() + (365 * 24 * 60 * 60 * 1000));
    const bookingData = {
      id: data.id,
      image_url: `${base}${data?.image_url}`
    };
    Cookies.set('BookingImage', JSON.stringify(bookingData), { expires: farFutureDate });
    navigate(`/details/${data.id}`);
  };

  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: "column", justifyContent: 'space-between', cursor: 'pointer' }}>
      <CardMedia
        sx={{ height: 240, borderRadius: "8px" }}
        image={`${base}${data?.image_url}`}
        title="green iguana"
      />
      <CardContent>
        <Typography color="textSecondary" component="div">
          {subCategory}
        </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '1.3rem', fontWeight: '700' }}>
          {truncateName(data?.name)}
        </Typography>
        {/* <Typography sx={descriptionStyle}>{data?.description}</Typography> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "13px", color: "grey" }}>
            Per Person Price
          </Typography>
          <Box>
            <Typography sx={{ fontSize: "15px", color: "grey" }}>
              <Typography color="primary" display="inline" fontWeight="bold" sx={{ ml: 1 }}>
                $ {data?.packages[0]?.price !== null ? data?.packages[0]?.price : data?.packages[0]?.adult_price}
              </Typography>
            </Typography>
          </Box>
        </Box>
<Box sx={{display:'flex'}}>
        <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        size="small"
                      />
                      {/* <Typography sx={{fontSize:'0.8rem'}}>94 Reviews</Typography> */}
                    </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
          <Button
            variant="contained"
            onClick={handleBookNowClick}
          >
            Book Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PkgCard;
