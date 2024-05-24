import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import MainComponent from './Components/MainComponent'
import Page from '../../components/page'
const WhereFindMain = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
      },[])

  return (
    <>

<Page title="Where to find us">

<Box
        sx={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.1) 30.2%, rgba(0,0,0,0.1) 90.9%),url(${"/bgimage.png"})`,

          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "none",
          height: "50vh",
          width: "100%",
        }}
      >
        <Box
          sx={{
            color: "white",

            minHeight: "60vh",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            paddingLeft: "5%",
            paddingRight: "5%",
          }}
        >
          <Box minHeight={"8rem"}>
            <Typography

              sx={{
                cursor: "pointer",
                fontSize: "2.5rem",
                fontWeight: "600",
              }}
            >
              Where To Find Us
            </Typography>
          </Box>
        </Box>
      </Box>

<MainComponent/>


</Page>
    </>
  )
}

export default WhereFindMain