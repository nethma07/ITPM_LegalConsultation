import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const CTASection = () => {
  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: "#FFD700",
        textAlign: "center",
        color: "#000",
      }}
    >
      <Container>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Ready to Get Started?
        </Typography>
        <Typography variant="body1" gutterBottom>
          Book your first legal consultation now and get the help you need.
        </Typography>
        <Button variant="contained" sx={{ mt: 2 }} color="primary">
          Book Now
        </Button>
      </Container>
    </Box>
  );
};

export default CTASection;
