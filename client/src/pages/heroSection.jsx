import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import backgroundImage from "../assets/land2.jpg";
import { motion } from "framer-motion";

const slideUpVariant = {
  hidden: { opacity: 0, y: 150 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.4,
      type: "spring",
      stiffness: 60,
      damping: 12,
    },
  }),
};

const bounceArrow = {
  animate: {
    y: [0, 10, 0],
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);

  const handleArrowClick = () => {
    // Scroll down to the next section smoothly
    window.scrollTo({
      top: window.innerHeight, // Scroll to the next section
      behavior: "smooth", // Smooth scroll
    });

    setShowContent(true);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <Box>
        <motion.div
          variants={slideUpVariant}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <Typography variant="h3" fontWeight="bold">
            Welcome to
          </Typography>
        </motion.div>

        <motion.div
          variants={slideUpVariant}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <Typography variant="h3" fontWeight="bold">
            <span style={{ color: "#FFD700" }}>Smart Legal</span>
          </Typography>
        </motion.div>

        <motion.div
          variants={bounceArrow}
          animate="animate"
          style={{ marginTop: "1rem", cursor: "pointer" }}
          onClick={handleArrowClick} // Arrow click handler
        >
          <ArrowDownwardIcon sx={{ color: "#FFD700", fontSize: "1.8rem" }} />
        </motion.div>
      </Box>
    </Box>
  );
};

export default HeroSection;
