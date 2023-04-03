import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1F2D3D",
    },
    secondary: {
      main: "#F5F5F5",
    },

    error: {
      main: red.A400,
    },
  },
});
