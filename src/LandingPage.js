import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import Countdown from "react-countdown-now";

const MathImageUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Rubik%27s_cube.svg/1280px-Rubik%27s_cube.svg.png";

const ImageContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "300px",
});

const Image = styled("img")({
  height: "100%",
  animation: "spin 20s linear infinite",
  "@keyframes spin": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
});

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return (
      <Typography
        variant="h6"
        component="div"
        gutterBottom
        style={{ color: "#3f51b5", fontFamily: "Verdana" }}
      >
        We're live now!
      </Typography>
    );
  } else {
    // Render a countdown
    return (
      <span>
        {days} days {hours} hours {minutes} minutes {seconds} seconds until
        launch!
      </span>
    );
  }
};

class ComingSoonPage extends React.Component {
  render() {
    const launchDate = new Date("Nov 19, 2023 00:00:00").getTime();

    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          textAlign: "center",
          bgcolor: "#f5f5f5",
          px: 3,
        }}
      >
        <Typography
          variant="h2"
          component="div"
          gutterBottom
          style={{ color: "#3f51b5", fontFamily: "Arial Black" }}
        >
          Math99th.io
        </Typography>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          style={{ color: "#3f51b5", fontFamily: "Arial" }}
        >
          Coming Soon!
        </Typography>
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          style={{ color: "#3f51b5", fontFamily: "Arial" }}
        >
          Launching on: Nov 19, 2023
        </Typography>
        <ImageContainer>
          <Image src={MathImageUrl} alt="Math" />
        </ImageContainer>
        <Typography
          variant="body1"
          component="div"
          gutterBottom
          style={{ color: "#3f51b5", fontFamily: "Arial" }}
        >
          We're working hard to give you the best math learning experience.
        </Typography>
        <Countdown date={launchDate} renderer={renderer} />
        <CircularProgress color="secondary" />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
        >
          Notify Me
        </Button>
      </Box>
    );
  }
}

export default ComingSoonPage;
