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

const DetailPage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [data1, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(5);
  const styleType = {
    color: theme.palette.primary.main,
  };
  useEffect(() => {
    (() => {
      dispatch(getActivitiesById(id))
        .then((result) => {
          console.log(result, 'hhhh')
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
  ];
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

  const [highlightedId, setHighlightedId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const sectionIds = [
        "overview",
        "description",
        "itinerary",
        "whats-included",
        "trip-instructions",
      ];
      let currentSectionId = null;

      sectionIds.forEach((id, index) => {
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
      <DetailSlider />
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
                  Louvre Abu Dhabi
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
                  width: "100%",
                  marginTop: "20px",
                  position: "sticky",
                  top: 0,
                  backgroundColor: "white",
                  // zIndex: 99999,
                  padding: "20px",
                }}
              >
                <Box sx={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                  <a href="#overview">
                    <Button
                      sx={{
                        ...btnStyle,
                        color: isHighlighted("overview") ? "red" : "#0D0D0D",
                      }}
                    >
                      Overview
                    </Button>
                  </a>
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
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: 600,
                    color: theme.palette.primary.main,
                  }}
                >
                  Overview
                </Typography>
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
                  {infoItems.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "5px",
                      }}
                    >
                      {item.icon}
                      <Typography>{item.text}</Typography>
                    </Box>
                  ))}
                </Box>
              </div>

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
                <Typography>
                  {data1.description}
                </Typography>
              </div>

              <div id="itinerary" style={colStyle}>
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
                    color: "#A9A9A9",
                    fontSize: "16px",
                  }}
                  dangerouslySetInnerHTML={{ __html: data1.itinerary }}
                />

              </div>

              <div id="whats-included" style={colStyle}>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: 600,
                    color: theme.palette.primary.main,
                  }}
                >
                  What’s Included
                </Typography>
                <Divider sx={{ width: "100%" }} />
                <Box
                  sx={{
                    paddingLeft: "30px",
                    color: "#A9A9A9",
                    fontSize: "16px",
                  }}

                  dangerouslySetInnerHTML={{
                    __html: data1.whats_included
                  }}
                />
              </div>

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
                <Box sx={{ backgroundColor: "#D9D9D9", borderRadius: "20px" }}>
                  {questionsAndAnswers.map((qa, index) => (
                    <Accordion
                      key={index}
                      expanded={openAccordion === `panel${index}`}
                      onChange={handleAccordionChange(`panel${index}`)}
                      sx={{ backgroundColor: "#D9D9D9" }}
                    >
                      <AccordionSummary>
                        <Typography sx={{ color: "black", textAlign: "start" }}>
                          {qa.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography variant="body1">{qa.answer}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              </div>
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
    </Page>
  );
};

export default DetailPage;
