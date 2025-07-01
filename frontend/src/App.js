import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LeadForm from "./components/LeadForm";

const App = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage:
            "url(../assets/Desktop/C-1226-Astoria-Royals-Landing-Page-v2.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <img
              src="../assets/logo and rera/C-1226-Astoria-Royals-Landing-Page-v2.png"
              alt="Logo 1"
              height={60}
              style={{ marginRight: 16 }}
            />
          </Box>
          <Box>
            <Button variant="contained" sx={{ mr: 1 }}>
              Schedule Visit
            </Button>
            <Button variant="outlined">☰</Button>
          </Box>
        </Box>
      </Box>
      <Container sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Why Choose Astoria Royals?
        </Typography>
        <Typography>
          Perfect blend of comfort, location, and lifestyle.
        </Typography>
      </Container>
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12} md={6}>
            <LeadForm />
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="../assets/Desktop/baneer-4.png"
              alt="Form Visual"
              width="100%"
              height="100%"
              style={{ objectFit: "cover" }}
            />
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Amenities & Lifestyle
        </Typography>
        <img
          src="../assets/Desktop/banner-2.png"
          alt="Amenities"
          width="100%"
        />
      </Container>
      <Container sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Why Choose Astoria Royals?
        </Typography>
        <Typography>
          Perfect blend of comfort, location, and lifestyle.
        </Typography>
      </Container>
      {/* <Container sx={{ py: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Crafted With Elegance
            </Typography>
            <Typography>Spacious interiors and stunning design.</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src="/design.jpg" alt="Design" width="100%" />
          </Grid>
        </Grid>
      </Container> */}
      {/* <Container sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Gallery
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {[1, 2, 3].map((i) => (
            <Grid item xs={12} md={4} key={i}>
              <img src={`../assets/Desktop/${i}.jpg`} alt={`Gallery ${i}`} width="100%" />
            </Grid>
          ))}
        </Grid>
      </Container> */}

      <Container sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Gallery
        </Typography>
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3000}
        >
          {[2, 3].map((i) => (
            <Box key={i} sx={{ px: 2 }}>
              <img
                src={`/assets/Desktop/banner-${i}.png`}
                alt={`Gallery ${i}`}
                style={{ width: "100%", borderRadius: 8 }}
              />
            </Box>
          ))}
        </Slider>
      </Container>

      <Container sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Location Advantage
        </Typography>
        <img src="../assets/Desktop/banner-3.png" alt="Location" width="100%" />
      </Container>
      <Container sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Why Choose Astoria Royals?
        </Typography>
        <Typography>
          Perfect blend of comfort, location, and lifestyle.
        </Typography>
      </Container>
      <Box sx={{ position: "relative", py: 8 }}>
        <img src="../assets/Desktop/baneer-5.png" alt="Map" width="100%" />
        <Button
          variant="contained"
          color="primary"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Locate Us
        </Button>
      </Box>
      <Container sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Why Choose Astoria Royals?
        </Typography>
        <Typography>
          <img
            src="../assets/logo and rera/C-1226-Astoria-Royals-Landing-Page-v2.png"
            alt="Map"
            width="100%"
          />
          Perfect blend of comfort, location, and lifestyle.
        </Typography>
      </Container>
      <Container sx={{ py: 8 }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <Accordion key={i}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Accordion {i}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
      <Box
        component="footer"
        sx={{ py: 4, backgroundColor: "#333", color: "#fff" }}
      >
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={3}>
              <img
                src="../assets/logo and rera/C-1226-Astoria-Royals-Landing-Page-v2.png"
                alt="Logo 1"
                height={60}
                style={{ marginRight: 16 }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography>Contact</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography>Legal</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography>Follow Us</Typography>
              <img
                src="../assets/logo and rera/rera.png"
                alt="Logo 1"
                height={60}
                style={{ marginRight: 16 }}
              />
              <img
                src="../assets/icons/1.png"
                alt="Logo 1"
                height={60}
                style={{ marginRight: 16 }}
              />
              <img
                src="../assets/icons/2.png"
                alt="Logo 1"
                height={60}
                style={{ marginRight: 16 }}
              />
              <img
                src="../assets/icons/3.png"
                alt="Logo 1"
                height={60}
                style={{ marginRight: 16 }}
              />
              <img
                src="../assets/icons/4.png"
                alt="Logo 1"
                height={60}
                style={{ marginRight: 16 }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default App;
