import React from "react";
import { Box, Typography, Container } from "@mui/material";

const AboutSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
          About Smart Legal
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign="center">
          Smart Legal is a modern solution that connects clients with experienced legal professionals. Book consultations, review documents, or seek legal advice — all from one platform.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutSection;
