import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import Header from "./header";
import Footer from "./footer";
import HeroSection from "./heroSection";
import AboutSection from "./AboutSection";
import FeaturesSection from "./FeaturesSection";
import CTASection from "./CTASection";

const LandingPage = () => {
    return (
      <>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <CTASection />
        <Footer />
      </>
    );
  };
  
  export default LandingPage;
