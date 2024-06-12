import React, { useEffect, useState } from "react";
import Page from "../../components/page";
import { Box, Button, Typography } from "@mui/material";
import Overlay from "../../components/Image_Overlay/Overlay";
import { ArrowForward } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { getAboutImage, getHomeImage } from "../../store/actions/setting";
const About_Us = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  const dispatch = useDispatch()
  const [imageH, setImageH] = useState()

  useEffect(() => {
    (async () => {
      try {
        const result = await dispatch(getHomeImage());
        setImageH(result.data.payload || []);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [dispatch]);

  const abc = imageH?.length > 0 ? imageH[0]?.image_url : '';
  return (
    <Page title="About Us">
      <Overlay title="About Us" imageUrl={abc} />
      <Box sx={{ p: 5 }}>
        <Typography variant="h4" fontWeight="bold" color="primary" sx={{fontSize:'1.5rem'}}>
          About Us
        </Typography>
        <Box sx={{ display: "flex", mt: 3 }}>
          <Box flex={1}>
            <Typography variant="h6" sx={{ color: "grey", fontSize:'0.9rem', textAlign:'justify', paddingRight:'2rem' }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum pass  survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum pass
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 4,
                padding: "0.5rem 1.5rem",
                textTransform: "none",
                fontSize: "0.8rem",
              }}
              endIcon={<ArrowForward />}
            >
              Learn More
            </Button>
          </Box>
          <Box
            flex={1}
            component="img"
            src="/pic.png"
            height="350px"
            width="80px"
          />
        </Box>
      </Box>
    </Page>
  );
};

export default About_Us;
