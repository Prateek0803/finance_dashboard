import React from "react";
import BoxWithFlexBetween from "./BoxWithFlexBetween";
import { useTheme, Typography, Box } from "@mui/material";

type Props = {
  icon?: React.ReactNode;
  title: String;
  subtitle?: string;
  sideText: string;
};

const Boxheader = ({ icon, title, subtitle, sideText }: Props) => {
  const { palette } = useTheme();
  return (
    <BoxWithFlexBetween
      color={palette.grey[400]}
      margin="1.5rem 1rem 0rem 1rem"
    >
      <BoxWithFlexBetween>
        {icon}
        <Box>
          <Typography variant="h4" mb="-0.1rem">
            {title}
          </Typography>
          <Typography variant="h6">{subtitle}</Typography>
        </Box>
      </BoxWithFlexBetween>
      <Typography variant="h5" fontWeight="700" color={palette.secondary[500]}>
        {sideText}
      </Typography>
    </BoxWithFlexBetween>
  );
};

export default Boxheader;
