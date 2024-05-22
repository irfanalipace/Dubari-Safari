import React, { useEffect, useState } from "react";
import Page from "../../components/page";
import { Galleria } from "primereact/galleria";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  Box,
  Grid,
  Rating,
  Typography,
  useTheme,
  Tabs,
  Tab,
  Divider,
  Container,
  Button,
  Collapse,
  CardContent,
  Card,
} from "@mui/material";
import { CiStopwatch } from "react-icons/ci";
import { FaMobileScreen } from "react-icons/fa6";
import { TbBounceRight } from "react-icons/tb";
import { RiGlobalLine } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { FaClockRotateLeft } from "react-icons/fa6";
import DetailLeft from "./DetailLeft";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { getActivitiesById } from "../../store/actions/categoriesActions";

const DetailPage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [data1, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(5);
  const [selectedTab, setSelectedTab] = useState(0);
  const styleType = {
    color: theme.palette.primary.main,
  };
  useEffect(() => {
    (() => {
      dispatch(getActivitiesById(id))
        .then((result) => {
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
    { icon: <TbBounceRight style={styleType} />, text: "Instant Confirmation" },
    {
      icon: <FaMobileScreen style={styleType} />,
      text: "Mobile Voucher Accepted",
    },
    { icon: <RiGlobalLine style={styleType} />, text: "English / Arabic" },
    { icon: <FaUserGroup style={styleType} />, text: "Join in Group" },
    { icon: <FaUserGroup style={styleType} />, text: "Hotel Pick Up" },
    { icon: <FaHome style={styleType} />, text: "Hotel Pick Up" },
    {
      icon: <BiTransfer style={styleType} />,
      text: "Transfer Options Available",
    },
    {
      icon: <FaClockRotateLeft style={styleType} />,
      text: "Free Cancellation 12 Hours Prior",
    },
  ];

  const [open, setOpen] = useState([false, false, false, false]);

  const handleToggle = (index) => {
    setOpen((prevOpen) => {
      const newOpen = [...prevOpen];
      newOpen[index] = !newOpen[index];
      return newOpen;
    });
  };

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
  const initialImages = [
    {
      itemImageSrc: "/cardimage.png",
      thumbnailImageSrc: "/cardimage.png",
      alt: "Image 1",
    },
    {
      itemImageSrc: "/specialofferimage.png",
      thumbnailImageSrc: "/specialofferimage.png",
      alt: "Image 1",
    },
    {
      itemImageSrc: "/cardimage.png",
      thumbnailImageSrc: "/cardimage.png",
      alt: "Image 3",
    },
    {
      itemImageSrc: "/specialofferimage.png",
      thumbnailImageSrc: "/specialofferimage.png",
      alt: "Image 1",
    },
    {
      itemImageSrc: "/cardimage.png",
      thumbnailImageSrc: "/cardimage.png",
      alt: "Image 1",
    },
    {
      itemImageSrc: "/specialofferimage.png",
      thumbnailImageSrc: "/specialofferimage.png",
      alt: "Image 1",
    },
    {
      itemImageSrc: "/cardimage.png",
      thumbnailImageSrc: "/cardimage.png",
      alt: "Image 1",
    },
    {
      itemImageSrc: "/specialofferimage.png",
      thumbnailImageSrc: "/specialofferimage.png",
      alt: "Image 3",
    },
    {
      itemImageSrc: "/cardimage.png",
      thumbnailImageSrc: "/cardimage.png",
      alt: "Image 2",
    },
  ];

  const [images, setImages] = useState(initialImages);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isHoveredLeft, setIsHoveredLeft] = useState(false);
  const [isHoveredRight, setIsHoveredRight] = useState(false);

  const responsiveOptions = [
    {
      breakpoint: "991px",
      numVisible: 6,
    },
    {
      breakpoint: "767px",
      numVisible: 5,
    },
    {
      breakpoint: "575px",
      numVisible: 3,
    },
  ];

  const itemTemplate = (item) => {
    return (
      <div style={{ position: "relative", width: "100%", height: "70vh" }}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "30px",
            transform: "translateY(-50%)",
            zIndex: "1",
            cursor: "pointer",
            backgroundColor: isHoveredLeft
              ? theme.palette.primary.main
              : "#F3F3F9",
            padding: "10px",
            borderRadius: "5px",
          }}
          onClick={handlePrevClick}
          onMouseEnter={() => setIsHoveredLeft(true)}
          onMouseLeave={() => setIsHoveredLeft(false)}
        >
          <FaChevronLeft style={{ fontSize: "24px", color: "white" }} />
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "30px",
            transform: "translateY(-50%)",
            zIndex: "1",
            cursor: "pointer",
            backgroundColor: isHoveredRight
              ? theme.palette.primary.main
              : "#F3F3F9",
            padding: "10px",
            borderRadius: "5px",
          }}
          onClick={handleNextClick}
          onMouseEnter={() => setIsHoveredRight(true)}
          onMouseLeave={() => setIsHoveredRight(false)}
        >
          <FaChevronRight style={{ fontSize: "24px", color: "white" }} />
        </div>
        <img
          src={item.itemImageSrc}
          alt={item.alt}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", right: 50, bottom: -30 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <Typography>Save Up To 3.00 Per Person</Typography>
            <Typography>$2,500</Typography>
            <Box>
              <Button
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: "white",
                }}
              >
                Book Now
              </Button>
            </Box>
          </Box>
        </div>
      </div>
    );
  };

  const thumbnailTemplate = (item, index) => {
    const isSelected = selectedImageIndex === index;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          cursor: "pointer",
          borderRadius: "5px",
          border: isSelected
            ? `2px solid ${theme.palette.primary.main}`
            : "none",
        }}
        onClick={() => handleThumbnailClick(index)}
      >
        <img
          src={item.thumbnailImageSrc}
          alt={item.alt}
          style={{
            height: "100px",
            width: "120px",
            maxWidth: "100%",
            objectFit: "cover",
            borderRadius: "5px",
          }}
        />
      </div>
    );
  };

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handlePrevClick = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Page title="Detail Page">
      <div className="card">
        <Galleria
          value={images}
          activeIndex={selectedImageIndex}
          onItemChange={(e) => setSelectedImageIndex(e.index)}
          responsiveOptions={responsiveOptions}
          numVisible={5}
          circular
          style={{ maxWidth: "100%" }}
          item={itemTemplate}
          thumbnail={thumbnailTemplate}
          showThumbnails={false}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 200px",
        }}
      >
        {images.map((image, index) => (
          <div key={index} style={{ margin: "0 2px" }}>
            {thumbnailTemplate(image, index)}
          </div>
        ))}
      </div>
      <Box sx={{ padding: "30px" }}>
        <Grid container spacing={3}>
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
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <Typography sx={{ fontSize: "32px", fontWeight: 700 }}>
                  {data1?.name}
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
              <Box sx={{ width: "100%", marginTop: "20px" }}>
                <Tabs value={selectedTab} onChange={handleTabChange}>
                  <Tab label="Overview" />
                  <Tab label="Activity Options" />
                  <Tab label="Description" />
                  <Tab label="Itinerary" />
                  <Tab label="What’s Included" />
                  <Tab label="Trip Instructions" />
                </Tabs>
                {selectedTab === 0 && (
                  <Box sx={{ padding: "20px" }}>
                    <Typography variant="body1">
                      {data1?.description}
                    </Typography>
                  </Box>
                )}
                {selectedTab === 1 && (
                  <Box sx={{ padding: "20px" }}>
                    <Typography variant="body1">
                      This is the Activity Options.
                    </Typography>
                  </Box>
                )}
                {selectedTab === 2 && (
                  <Box sx={{ padding: "20px" }}>
                    <Typography variant="body1">
                      This is the Description.
                    </Typography>
                  </Box>
                )}
                {selectedTab === 3 && (
                  <Box sx={{ padding: "20px" }}>
                    <Typography variant="body1">
                      This is the Itinerary.
                    </Typography>
                  </Box>
                )}
                {selectedTab === 4 && (
                  <Box sx={{ padding: "20px" }}>
                    <Typography variant="body1">
                      This is the What’s Included.
                    </Typography>
                  </Box>
                )}
                {selectedTab === 5 && (
                  <Box sx={{ padding: "20px" }}>
                    <Typography variant="body1">
                      This is the Trip Instructionss.
                    </Typography>
                  </Box>
                )}
              </Box>
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
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: 600,
                  color: theme.palette.primary.main,
                }}
              >
                Your Experience
              </Typography>
              <Divider sx={{ width: "100%" }} />
              <Typography>
                This off-road activity brings you to explore the Dubai desert
                with fun activities such as dune bashing and camel ride
                experience.
              </Typography>
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
              <Typography
                variant="body1"
                component="div"
                dangerouslySetInnerHTML={{ __html: data1?.itinerary }}
              />
              {/* <Typography>
                <ul>
                  <li>Pickup time 08.00-08.30 AM</li>
                  <li>Arrival at the rest area/meeting point </li>
                  <li>Entry into the desert</li>
                </ul>
              </Typography> */}
              <Typography>
                This off-road activity brings you to explore the Dubai desert
                with fun activities such as dune bashing and camel ride
                experience.
              </Typography>
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
              <ul>
                <li>Hotel transfers</li>
                <li>Professional safari driver/guide</li>
              </ul>

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
                <>
                  {questionsAndAnswers.map((qa, index) => (
                    <Box key={index} mb={2}>
                      <Button
                        // variant="outlined"
                        sx={{ color: "black", textAlign: "start" }}
                        onClick={() => handleToggle(index)}
                        fullWidth
                      >
                        {qa.question}
                      </Button>
                      <Collapse in={open[index]}>
                        <Box mt={1} p={2}>
                          <Typography variant="body1">{qa.answer}</Typography>
                        </Box>
                      </Collapse>
                    </Box>
                  ))}
                </>
              </Box>
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: 600,
                  color: theme.palette.primary.main,
                }}
              >
                Customer Reviews
              </Typography>
              <Divider sx={{ width: "100%" }} />
              <Grid container sx={{ alignItems: "center" }} spacing={5}>
                {data.map((val, ind) => (
                  <Grid item lg={6} md={6} sm={12} xs={12} key={ind}>
                    <Box
                      sx={{
                        // width: 320,
                        backgroundColor: "white",
                        borderRadius: "12px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        overflow: "hidden",
                        // margin: '0 auto',
                        padding: "5px",
                        textAlign: "start",
                      }}
                    >
                      <Box sx={{ position: "relative" }}>
                        <img
                          src={val.image}
                          alt="Header image"
                          style={{
                            width: "100%",
                            height: "30vh",
                            borderRadius: "12px",
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                      <Box
                        p={2}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "1px",
                          alignItems: "start",
                        }}
                      >
                        <Typography
                          sx={{ fontSize: "1.5rem", fontWeight: 600 }}
                        >
                          {val.title}
                        </Typography>
                        <Typography sx={{ fontSize: "1rem", color: "#A9A9A9" }}>
                          {val.position}
                        </Typography>
                        <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                        <Typography sx={{ fontSize: "1rem", color: "#A9A9A9" }}>
                          {val.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
          <Grid item lg={4} sm={12} xs={12} md={6}>
            <DetailLeft ac_data={loading ? null : data1} />
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
};

export default DetailPage;
