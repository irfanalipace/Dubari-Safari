import React, { useEffect, useState } from "react";
import Page from "../../components/page";
import {
  Box,
  Grid,
  Rating,
  Typography,
  useTheme,
  Divider,
  Button,
  Collapse,
  AccordionDetails,
  Accordion,
  AccordionSummary,
} from "@mui/material";

import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { CiStopwatch } from "react-icons/ci";
import {
  FaMobileScreen,
  FaUserGroup,
  FaClockRotateLeft,
} from "react-icons/fa6";
import { BiTransfer } from "react-icons/bi";
import DetailLeft from "./DetailLeft";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { getActivitiesById } from "../../store/actions/categoriesActions";
import DetailSlider from "./DetailSLider";
import ReiewsDetail from "./ReiewsDetail";
import RelatedData from "./RelatedData";
import Loader from "../../components/Loader/Loader";

const DetailPage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [data1, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(5);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const styleType = {
    color: theme.palette.primary.main,
  };



  useEffect(() => {
    (() => {
      dispatch(getActivitiesById(id))
        .then((result) => {
          // console.log(result, 'hhhh')
          setData(result.data.payload);
          setLoading(false);

        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    })();
  }, []);

  const infoItems = [
    { icon: <CiStopwatch style={styleType} />, text: "Operating Hours" },
    {
      icon: <FaMobileScreen style={styleType} />,
      text: "Mobile Voucher Accepted",
    },
    { icon: <FaUserGroup style={styleType} />, text: "Join in Group" },
    { icon: <FaUserGroup style={styleType} />, text: "Hotel Pick Up" },
    {
      icon: <BiTransfer style={styleType} />,
      text: "Transfer Options Available",
    },
    {
      icon: <FaClockRotateLeft style={styleType} />,
      text: "Free Cancellation 12 Hours Prior",
    },
    {
      icon: <FaClockRotateLeft style={styleType} />,
      text: "Instant Confirmation",
    },
  ];

  const renderIconsFromFeatures = () => {
    const iconsToShow = [];
    data1?.features?.forEach(feature => {
      const matchedItems = infoItems.filter(item => item.text === feature);
      matchedItems.forEach(matchedItem => {
        iconsToShow.push({ icon: matchedItem.icon, text: matchedItem.text });
      });
    });
    if (data1.duration) {
      iconsToShow.push({ icon: <FaClockRotateLeft style={styleType} />, text: `Duration : ${data1.duration}` });
    }

    if (data1.cancellation_duration) {
      iconsToShow.push({ icon: <FaClockRotateLeft style={styleType} />, text: `Free Cancellation ${data1.cancellation_duration} Hours Prior` });
    }

    return iconsToShow;
  };




  // const renderIconsFromFeatures = () => {
  //   const iconsToShow = [];
  //   data1.features.forEach(feature => {
  //     const matchedItems = infoItems.filter(item => item.text === feature);
  //     matchedItems.forEach(matchedItem => {
  //       iconsToShow.push({ icon: matchedItem.icon, text: matchedItem.text });
  //     });
  //   });


  //   const operatingHoursItem = infoItems.find(item => item.text === "Operating Hours");
  //   const freeCancellationItem = infoItems.find(item => item.text === "Free Cancellation 12 Hours Prior");

  //   if (operatingHoursItem) {
  //     iconsToShow.push({ icon: operatingHoursItem.icon, text: operatingHoursItem.text });
  //   }

  //   if (freeCancellationItem) {
  //     iconsToShow.push({ icon: freeCancellationItem.icon, text: freeCancellationItem.text });
  //   }

  //   return iconsToShow;
  // };
  // ------------------------------------------------------
  // const renderIconsFromFeatures = () => {
  //   const iconsToShow = [];
  //   data1.features.forEach(feature => {
  //     const matchedItems = infoItems.filter(item => item.text === feature);
  //     matchedItems.forEach(matchedItem => {
  //       iconsToShow.push({ icon: matchedItem.icon, text: matchedItem.text });
  //     });
  //   });
  //   return iconsToShow;
  // };


  const data = [
    {
      image: "/header.png",
      title: "Hamza",
      position: "Engineer",
      description:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur Lorem ipsum dolor.",
    },
    {
      image: "/header.png",
      title: "Hamza",
      position: "Engineer",
      description:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur Lorem ipsum dolor.",
    },
  ];

  const [openAccordion, setOpenAccordion] = useState(null);

  const questionsAndAnswers = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is Material-UI?",
      answer:
        "Material-UI is a popular React UI framework with a comprehensive set of components.",
    },
    {
      question: "How do you use hooks in React?",
      answer:
        "Hooks allow you to use state and other React features in function components.",
    },
    {
      question: "What is a component in React?",
      answer:
        "A component is a reusable piece of code that returns a React element to be rendered to the page.",
    },
  ];

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setOpenAccordion(isExpanded ? panel : null);
  };

  const colStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "100%",
  };

  const btnStyle = {
    textTransform: "none",
    color: "#0D0D0D",
    fontSize: "16px",
  };

  console.log(data1, 'single ac data')
  const [highlightedId, setHighlightedId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const sectionIds = [
        // "overview",
        "description",
        "itinerary",
        "whats-included",
        "trip-instructions",
      ];
      let currentSectionId = null;

      sectionIds?.forEach((id, index) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const offsetTop = rect.top + window.scrollY;
          const offsetBottom = offsetTop + rect.height;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            currentSectionId = id;
          }
        }
      });

      setHighlightedId(currentSectionId);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHighlighted = (id) => {
    return id === highlightedId;
  };



  return (
    <Page title="Detail Page">

      {
        loading ? (

          <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
              <Loader />
            </Box>
          </>

        ) : (
          <>
            <DetailSlider data1={data1} />
            <Box sx={{ padding: "30px" }}>
              <Grid container spacing={3}>
                <Grid item lg={7} sm={12} xs={12} md={6}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                      justifyContent: "center",
                      gap: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >

                      <Typography sx={{ fontSize: "32px", fontWeight: 700 }}>
                        {data1.name}
                      </Typography>

                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                      <Typography>94 Reviews</Typography>
                    </Box>

                    <Box
                      sx={{
                        width: "95%",
                        marginTop: "20px",
                        position: "sticky",
                        top: 45,
                        backgroundColor: "white",
                        zIndex: 999,
                        padding: "20px",
                      }}
                    >
                      <Box sx={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                        {/* <a href="#overview">
                    <Button
                      sx={{
                        ...btnStyle,
                        color: isHighlighted("overview") ? "red" : "#0D0D0D",
                      }}
                    >
                      Overview
                    </Button>
                  </a> */}
                        <a href="#description">
                          <Button
                            sx={{
                              ...btnStyle,
                              color: isHighlighted("description") ? "red" : "#0D0D0D",
                            }}
                          >
                            Description
                          </Button>
                        </a>
                        <a href="#itinerary">
                          <Button
                            sx={{
                              ...btnStyle,
                              color: isHighlighted("itinerary") ? "red" : "#0D0D0D",
                            }}
                          >
                            Itinerary
                          </Button>
                        </a>
                        <a href="#whats-included">
                          <Button
                            sx={{
                              ...btnStyle,
                              color: isHighlighted("whats-included")
                                ? "red"
                                : "#0D0D0D",
                            }}
                          >
                            What’s Included
                          </Button>
                        </a>
                        <a href="#trip-instructions">
                          <Button
                            sx={{
                              ...btnStyle,
                              color: isHighlighted("trip-instructions")
                                ? "red"
                                : "#0D0D0D",
                            }}
                          >
                            Trip Instructions
                          </Button>
                        </a>
                      </Box>
                    </Box>

                    <div id="overview" style={colStyle}>
                      {/* <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: 600,
                    color: theme.palette.primary.main,
                  }}
                >
                  Overview
                </Typography> */}
                      <Divider sx={{ width: "100%" }} />
                      <Box
                        sx={{
                          width: "100%",
                          marginTop: "20px",
                          display: "flex",
                          gap: "40px",
                          alignItems: "center",
                          flexWrap: "wrap",
                        }}
                      >

                        {renderIconsFromFeatures().map((item, index) => (
                          <Box key={index} sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            {item.icon}
                            <Typography>{item.text}</Typography>
                          </Box>
                        ))}



                      </Box>
                    </div>

                    {data1?.description && (
                    <div id="description" style={colStyle}>
                      <Typography
                        sx={{
                          fontSize: "30px",
                          fontWeight: 600,
                          color: theme.palette.primary.main,
                        }}
                      >
                        Description
                      </Typography>
                      <Divider sx={{ width: "100%" }} />
                      <Typography>{data1.description}</Typography>
                    </div>
                    )}

                    {data1?.itinerary && (
                      <div id="itinerary" style={colStyle}>
                      <Typography
                        sx={{
                          fontSize: "30px",
                          fontWeight: 600,
                          color: theme.palette.primary.main,
                        }}
                      >
                        Highlights
                      </Typography>
                      <Divider sx={{ width: "100%" }} />
                      <Box
                        sx={{
                          paddingLeft: "30px",
                          color: "black",
                          fontSize: "16px",
                        }}
                        dangerouslySetInnerHTML={{ __html: data1.itinerary }}
                      />

                    </div>
                    )}

                    {data1?.whats_included && (
                      <div id="whats-included" style={colStyle}>
                      <Typography
                        sx={{
                          fontSize: "30px",
                          fontWeight: 600,
                          color: theme.palette.primary.main,
                        }}
                      >
                        Itinerary
                      </Typography>
                      <Divider sx={{ width: "100%" }} />
                      <Box
                        sx={{
                          paddingLeft: "30px",
                          color: "black",
                          fontSize: "16px",
                        }}

                        dangerouslySetInnerHTML={{
                          __html: data1.whats_included
                        }}
                      />
                    </div>
                    )}


                    {data1?.instructions && data1.instructions.length > 0 && (
                      <div id="trip-instructions" style={colStyle}>
                      <Typography
                        sx={{
                          fontSize: "30px",
                          fontWeight: 600,
                          color: theme.palette.primary.main,
                        }}
                      >
                        Trip Instructions / Essentials
                      </Typography>
                      <Divider sx={{ width: "100%" }} />
                      <Box sx={{ backgroundColor: "white", borderRadius: "20px" }}>
                        {data1?.instructions && data1.instructions.length > 0 ? (
                          data1.instructions.map((qa, index) => (
                            <Accordion
                              key={index}
                              expanded={openAccordion === `panel${index}`}
                              onChange={handleAccordionChange(`panel${index}`)}
                              sx={{ backgroundColor:'#ffaf95', color:'black' }}
                            >
                              <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{color:'black'}}/>}
                                IconButtonProps={{ edge: 'start' }}
                              >
                                <Typography sx={{ textAlign: "start" }}>
                                  {qa.instruction_title}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography variant="body1">{qa.instruction_description}</Typography>
                              </AccordionDetails>
                            </Accordion>
                          ))
                        ) : (
                          <Typography sx={{ color: "black", textAlign: "center", padding: 2 }}>
                            No instructions found
                          </Typography>
                        )}
                      </Box>

                    </div>
                    )}









                  </Box>
                </Grid>
                <Grid
                  item
                  lg={5}
                  sm={12}
                  xs={12}
                  md={6}
                  sx={{ position: "sticky", top: 0 }}
                >
                  <DetailLeft ac_data={data1} loading={loading} />
                </Grid>
              </Grid>
              <ReiewsDetail />
            </Box>

            <RelatedData ac_data={data1} />
          </>
        )
      }
    </Page>
  );
};

export default DetailPage;
