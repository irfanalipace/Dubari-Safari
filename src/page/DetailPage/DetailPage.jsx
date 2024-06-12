import React, { useEffect, useRef, useState } from "react";
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

import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
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
import SkeletonDetailPage from "./component/SkeletonDetailPage";
import moment from "moment";

const DetailPage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [data1, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(5);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    data1?.features?.forEach((feature) => {
      const matchedItems = infoItems.filter((item) => item.text === feature);
      matchedItems.forEach((matchedItem) => {
        iconsToShow.push({ icon: matchedItem.icon, text: matchedItem.text });
      });
    });
    if (data1.duration) {
      iconsToShow.push({
        icon: <FaClockRotateLeft style={styleType} />,
        text: `Duration : ${data1.duration}`,
      });
    }

    if (data1.cancellation_duration) {
      iconsToShow.push({
        icon: <FaClockRotateLeft style={styleType} />,
        text: `Free Cancellation ${data1.cancellation_duration} Hours Prior`,
      });


    }

    if (data1.start_time) {
      iconsToShow.push({
        icon: <FaClockRotateLeft style={styleType} />,
        text: `Start time ${data1.start_time}`,
      });
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

  console.log(data1, "single ac data");
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
      {loading ? (
        <>
          {/* <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
            }}
          >
            <Loader />
          </Box> */}

<SkeletonDetailPage/>


        </>
      ) : (
        <>
          <DetailSlider data1={data1} />

          <Box sx={{ padding: "30px" }}>
            <Grid container spacing={6}>
              <Grid item lg={8} sm={12} xs={12} md={6}>
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
                      gap: "10px",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "16px", md: "24px" },
                        fontWeight: 700,

                      }}
                    >
                      {data1.name}
                    </Typography>


                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <Rating
                        name="simple-controlled"
                        value={value}
                        size="small"
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                      <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                  {data1?.reviews?.length}
                      </Typography>
                    </Box>
                  </Box>




                  <Box
                    sx={{
                      width: "100%",

                      position: "sticky",
                      top: 40,
                      backgroundColor: "white",
                      zIndex: 999,
                      padding: "20px",
                    }}
                  >
                    <Box
                      sx={{ display: "flex", gap: "20px", flexWrap: "wrap" }}
                    >
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
                            color: isHighlighted("description")
                              ? "red"
                              : "#0D0D0D",
                              fontSize:'0.9rem'
                          }}
                        >
                          Description
                        </Button>
                      </a>
                      <a href="#itinerary">
                        <Button
                          sx={{
                            ...btnStyle,
                            color: isHighlighted("itinerary")
                              ? "red"
                              : "#0D0D0D",
                              fontSize:'0.9rem'

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
                              fontSize:'0.9rem'

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
                              fontSize:'0.9rem'

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

                        display: "flex",
                        gap: "40px",
                        alignItems: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      {renderIconsFromFeatures().map((item, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          {item.icon}
                          <Typography sx={{fontSize:'12px'}}>{item.text}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </div>

                  {data1?.description && (
                    <div id="description" style={colStyle}>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: 600,
                          color: theme.palette.primary.main,
                        }}
                      >
                        Description
                      </Typography>
                      <Divider sx={{ width: "100%" }} />
                  <Typography
      component="div"
      sx={{
        fontSize: "0.8rem",
        color: 'primary.textPrimary', // Adjust according to your theme
        wordBreak: "break-word",
        overflowWrap: "break-word",
        lineHeight: "1.5rem",
      textAlign:'justify'
      }}
    >
      {isExpanded ? data1.description : (
        <>
          {data1.description.slice(0, 550)} {/* Adjust character limit as needed */}
          {data1.description.length > 320 && (
            <Button
              onClick={toggleDescription}
              sx={{
                marginLeft: '0.5rem', // Adjust spacing as needed
                textTransform: 'none',
                fontSize: '0.8rem',
                color:'black'
              }}
            >
              Read More
            </Button>
          )}
        </>
      )}
      {isExpanded && (
        <Button
          onClick={toggleDescription}
          sx={{
            marginTop: '0.5rem', // Adjust spacing as needed
            textTransform: 'none',
            fontSize: '0.8rem',
            color:'black'
          }}
        >
          Show Less
        </Button>
      )}
        </Typography>
                    </div>
                  )}

                  {data1?.highlights && (
                    <div id="itinerary" style={colStyle}>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: 600,
                          color: theme.palette.primary.main,
                        }}
                      >
                        Highlights
                      </Typography>
                      <Divider sx={{ width: "100%" }} />
                      <Typography
                        sx={{
                          paddingLeft: "30px",
                          color: "black",
                          fontSize: "12px",
                        }}
                        dangerouslySetInnerHTML={{ __html: data1.highlights }}
                      />
                    </div>
                  )}

                  {data1?.itinerary && (
                    <div id="itinerary" style={colStyle}>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: 600,
                          color: theme.palette.primary.main,
                        }}
                      >
                        Itinerary
                      </Typography>
                      <Divider sx={{ width: "100%" }} />
                      <Typography
                        sx={{
                          paddingLeft: "30px",
                          color: "black",
                          fontSize: "12px",
                        }}
                        dangerouslySetInnerHTML={{ __html: data1.itinerary }}
                      />
                    </div>
                  )}

                  {data1?.whats_included && (
                    <div id="whats-included" style={colStyle}>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: 600,
                          color: theme.palette.primary.main,
                        }}
                      >
                        What Included
                      </Typography>
                      <Divider sx={{ width: "100%" }} />
                      <Typography
                        sx={{
                          paddingLeft: "30px",
                          color: "black",
                          fontSize: "12px",
                        }}
                        dangerouslySetInnerHTML={{
                          __html: data1.whats_included,
                        }}
                      />
                    </div>
                  )}



                  {data1?.whats_not_included && (
                    <div id="whats-included" style={colStyle}>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: 600,
                          color: theme.palette.primary.main,
                        }}
                      >
                        What's not Included
                      </Typography>
                      <Divider sx={{ width: "100%" }} />
                      <Typography
                        sx={{
                          paddingLeft: "30px",
                          color: "black",
                          fontSize: "12px",
                        }}
                        dangerouslySetInnerHTML={{
                          __html: data1.whats_not_included,
                        }}
                      />
                    </div>
                  )}

                  {data1?.instructions && data1.instructions.length > 0 && (
                    <div id="trip-instructions" style={colStyle}>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: 600,
                          color: theme.palette.primary.main,
                        }}
                      >
                        Trip Instructions / Essentials
                      </Typography>
                      <Divider sx={{ width: "100%" }} />
                      <Box
                        sx={{ backgroundColor: "white", borderRadius: "20px" }}
                      >
                        {data1?.instructions &&
                        data1.instructions.length > 0 ? (
                          data1.instructions.map((qa, index) => (
                            <Accordion
                              key={index}
                              expanded={openAccordion === `panel${index}`}
                              onChange={handleAccordionChange(`panel${index}`)}
                              sx={{
                                backgroundColor: "#ffaf95",
                                color: "black",
                              }}
                            >
                              <AccordionSummary
                                expandIcon={
                                  <ExpandMoreIcon style={{ color: "black" }} />
                                }
                                IconButtonProps={{ edge: "start" }}
                              >
                                <Typography sx={{ textAlign: "start", fontSize:'14px', fontWeight:600 }}>
                                  {qa.instruction_title}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography
                                sx={{fontSize:'12px'}}

                                dangerouslySetInnerHTML={{ __html: qa.instruction_description }}




                             />
                              </AccordionDetails>
                            </Accordion>
                          ))
                        ) : (
                          <Typography
                            sx={{
                              color: "black",
                              textAlign: "center",
                              padding: 2,
                            }}
                          >
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
                lg={4}
                sm={12}
                xs={12}
                md={6}
                sx={{ position: "sticky", top: 0 }}
              >
                <DetailLeft ac_data={data1} loading={loading} />
              </Grid>
            </Grid>
            <ReiewsDetail data={data1} />
          </Box>

          <RelatedData ac_data={data1} />
        </>
      )}
    </Page>
  );
};

export default DetailPage;
