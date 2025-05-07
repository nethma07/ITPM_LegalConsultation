import React from "react";
import { Grid, Box, Typography, Container, Card, CardContent } from "@mui/material";

const features = [
  { title: "Book Consultations", desc: "Easily schedule appointments with verified lawyers." },
  { title: "Secure & Private", desc: "Your legal queries and data are handled with utmost confidentiality." },
  { title: "Diverse Services", desc: "Get advice, evaluations, and document reviews in one place." },
];

const FeaturesSection = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          What We Offer
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card elevation={3} sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
