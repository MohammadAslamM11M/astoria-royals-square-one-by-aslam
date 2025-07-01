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
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LeadForm from "./components/LeadForm";
import "./App.css";

const App = () => {
  const headings = [
    "CONNECTIVITY",
    "LEISURE",
    "SHOPPING / MALLS",
    "EDUCATIONAL INSTITUTES",
    "HEALTHCARE",
  ];

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
            <Button variant="outlined" sx={{ mr: 1, color: "#a2a2a2" }}>
              Schedule Visit
            </Button>
            <Button sx={{ color: "#a2a2a2" }}>☰</Button>
          </Box>
        </Box>
      </Box>
      <Container sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h2" gutterBottom>
          Where prestige takes residence
        </Typography>
        <Typography>
          Royal living is reimagined as Astoria Royals, a luxurious project of
          spacious 4 & 3 BHK homes. Thoughtful layout and optimal use of space
          are not the only defining attributes of this gem of a residence; it
          also boasts a massive array of amenities. Tucked in a fast-developing
          location and constructed with precision in mind to bring to you a
          lifestyle that resonates with the name of the project itself.
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
        <Typography variant="h3" color="secondary" gutterBottom>
          Walkthrough
        </Typography>
        <img
          src="../assets/Desktop/banner-2.png"
          alt="Amenities"
          width="100%"
        />
      </Container>
      <Container sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h2" gutterBottom>
          A stellar lineup of luxuries
        </Typography>
        <Typography>
          Luxury isn't a label at Astoria Royals, it is a full-blown experience.
          From indulgent leisure spaces and wellness facilities to top-tier
          entertainment, every amenity is designed to surpass expectations.
          Whatever you desire, chances are, it’s already waiting for you.
        </Typography>
      </Container>

      <Container sx={{ py: 8, textAlign: "center" }}>
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
        <Typography variant="h3" color="secondary" gutterBottom>
          Sample Flat
        </Typography>
        <img src="../assets/Desktop/banner-3.png" alt="Location" width="100%" />
      </Container>
      <Container sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h2" gutterBottom>
          A landmark destination for elevated living
        </Typography>
        <Typography>
          Ravet is where Pune's future is unfolding. Tucked between the
          Pune-Mumbai Expressway and the Katraj-Dehu Bypass, this rapidly
          developing suburban neighbourhood connects you to wherever you want to
          be without the usual hassle. It owes its incredible connectivity to
          the old and new Mumbai highways, the Aundh-Ravet BRTS road, and Akurdi
          Railway Station. Top schools, business hubs, entertainment enclaves,
          healthcare facilities and other essentials are all within close
          proximity. This isn't just a convenient location, but a smart one.
        </Typography>
      </Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="../assets/Desktop/baneer-5.png" alt="Map" width="100%" />
        <Button variant="outlined" color="secondary">
          CLICK HERE TO GET DIRECTIONS
        </Button>
      </Box>
      <Container sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h2" gutterBottom>
          From the trusted
        </Typography>
        <Typography>
          <img
            src="../assets/logo and rera/C-1226-Astoria-Royals-Landing-Page-v2.png"
            alt="Map"
            width="100%"
          />
          Nirman Greens is a dynamic force in Pune's real estate sector with 30+
          years of expertise. With 15 million square feet delivered and even
          more in the pipeline, every project they undertake is a testament to
          masterful craftsmanship and a relentless pursuit for excellence.
          Driven by innovation and an eye for detail, they remain steadfast in
          their commitment to conceiving spaces that adapt to nature and evolve
          with time.
        </Typography>
      </Container>
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h3"
          color="secondary"
          textAlign="center"
          gutterBottom
        >
          Key Distances
        </Typography>
        {headings.map((title, index) => (
          <Accordion
            key={index}
            sx={{
              bgcolor: "black",
              color: "white",
              border: "1px solid #b98a2d",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            >
              <Typography >{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Mumbai-Pune Expressway, Hinjawadi connectivity, Balewadi High
                Street
              </Typography>
              <Typography>05 Mins, 20 Mins, 30 Mins,</Typography>
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
            <Divider
              orientation="vertical"
              flexItem
              sx={{ backgroundColor: "grey.500" }}
            />
            <Grid item xs={12} sm={3}>
              <Typography>SITE ADDRESS</Typography>
              <Typography>
                {" "}
                Astoria Royals, Aundh-Ravet BRTS Road, Ravet, Pimpri-Chinchwad,
                SITE ADDRESS Maharashtra - 412101
              </Typography>
              <Typography>CORPORATE OFFICE</Typography>
              <Typography>
                Amar Business Zone, B Wing, Office No. 902 S. No. 87/1A & 87
                (Part), CORPORATE OFFICE Baner, Pune - 411045
              </Typography>
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ backgroundColor: "grey.500" }}
            />
            <Grid
              item
              xs={12}
              sm={3}
              direction="col"
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>00000 00000</Typography>
              <img
                src="../assets/logo and rera/rera.png"
                alt="Logo 1"
                height={45}
                style={{ marginRight: 16 }}
              />
              <Grid item xs={12} sm={3}>
                <img
                  src="../assets/icons/1.png"
                  alt="Logo 1"
                  height={15}
                  style={{ marginRight: 6 }}
                />
                <img
                  src="../assets/icons/2.png"
                  alt="Logo 2"
                  height={15}
                  style={{ marginRight: 6 }}
                />
                <img
                  src="../assets/icons/3.png"
                  alt="Logo 3"
                  height={15}
                  style={{ marginRight: 6 }}
                />
                <img
                  src="../assets/icons/4.png"
                  alt="Logo 4"
                  height={15}
                  style={{ marginRight: 6 }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default App;
