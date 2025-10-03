import logo from "./logo.svg";
import "./App.css";
import Material from "./Material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import {green, purple} from "@mui/material/colors";
import Slider from '@mui/material/Slider';
import Grid from "./Grid";






function App() {
  const theme = createTheme({
    palette: {
    primary: {
      main: orange[500],
    },
  
  },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div
         
        >
          <Material />
        </div>
      </div>
              <Slider aria-label="Volume" />
    <Grid/>
    </ThemeProvider>
  );
}

export default App;
