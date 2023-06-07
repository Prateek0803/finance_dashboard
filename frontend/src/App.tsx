import { createTheme } from "@mui/material/styles"
import {ThemeProvider, CssBaseline, Box} from "@mui/material";
import { useMemo } from "react"
import { themeSettings } from "./theme"
import { Routes, Route } from "react-router-dom";
import Navbar from "@/pages/navbar";
import Dashboard from "@/pages/dashboard";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return (
    <div className='app'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
          <Navbar />
          <Routes>
            <Route 
              path="/" 
              element={<Dashboard />} 
            />
          </Routes>
        </Box>
      </ThemeProvider>
    </div>
  )
}

export default App
