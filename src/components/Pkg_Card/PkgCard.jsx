import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router";
const PkgCard = ({ data }) => {

  const base = 'https://dubaisafari.saeedantechpvt.com/'
  console.log(data, 'dada')
  // console.log(data.packages[0].price, 'jk')
  const navigate = useNavigate();
  const descriptionStyle = {
    // display: 'block',
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    textOverflow: 'ellipsis',
    color: 'grey'
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240, borderRadius: "8px" }}
        image={`${base}${data?.image_url}`}
        title="green iguana"
      />
      <CardContent>
        <Box
          sx={{
            background: "#fff",
            borderRadius: "20px",
            mt: -4,
            mb: 4,
            p: 1.15,
            boxShadow: 3,
            width: "60%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <StarIcon sx={{ color: "red", mr: 1 }} />
          <Typography fontSize="17px">4.0 (23)</Typography>
          <Typography fontSize="19px" sx={{ ml: 1 }}>
            😒❤️
          </Typography>
        </Box>
        <Typography gutterBottom variant="h5" component="div">
          {data?.name}
        </Typography>
        <Typography sx={descriptionStyle}>{data?.description}</Typography>
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
              {/* <del>$3,500</del> */}
              <Typography
                color="primary"
                display="inline"
                fontWeight="bold"
                sx={{ ml: 1 }}
              >
                {data?.packages[0]?.price}
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
          <Button
            variant="contained"
            onClick={() => navigate(`/details/${data.id}`)}
          >
            {" "}
            Book Now{" "}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PkgCard;
