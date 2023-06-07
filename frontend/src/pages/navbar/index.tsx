import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import BoxWithFlexBetween from "@/components/BoxWithFlexBetween";
import { PixOutlined } from "@mui/icons-material";

const Navbar = () => {
  const {palette} = useTheme();
  const [selected, setSelected] = useState("dashboard")
  return(
    <BoxWithFlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      <BoxWithFlexBetween gap="0.75rem">
        <PixOutlined sx={{ fontSize : "28px" }}/>
        <Typography variant="h4" fontSize="16px" textAlign="center">
            FinanceBuddy
        </Typography>
      </BoxWithFlexBetween>
      <BoxWithFlexBetween gap="2rem">
        <Box sx={{ "&:hover": {color: palette.primary[100]} }}>
          <Link to="/" onClick={() => setSelected("dashboard")} style={{
            color: selected === "dashboard" ? "inherit" : palette.grey[700],
            textDecoration: "inherit"
          }}>
            Dashboard
          </Link>
        </Box>
      </BoxWithFlexBetween>
    </BoxWithFlexBetween>
  )
};

export default Navbar;
