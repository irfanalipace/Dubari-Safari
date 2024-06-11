import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import MainComponent from './Components/MainComponent'
import Page from '../../components/page'
import Overlay from '../.../../../../src/components/Image_Overlay/Overlay'
const WhereFindMain = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>

      <Page title="Where to find us">
        <Overlay title="Where To Find Us" imageUrl="/blogimage.png" />

        <Box
          sx={{
            color: "white",

            // minHeight: "30vh",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            paddingLeft: "5%",
            paddingRight: "5%",
          }}
        >
          <Box minHeight={"5rem"}>
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

        <MainComponent />


      </Page>
    </>
  )
}

export default WhereFindMain