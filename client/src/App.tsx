import { Outlet } from "react-router-dom";
import NaviBar from "./Header/NaviBar";
import { ThemeProvider, createTheme } from "@mui/material";
import { useAppSelector } from "./app/store/store";
import { getThemeMode } from "./Header/headerSlice";

const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#0077b6",
    },
    background: {
      default: "#90E0EF",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#051923",
    },
    background: {
      default: "#90E0EF",
    },
  },
});

function App() {
  const getTheme = useAppSelector(getThemeMode);
  console.log(getTheme);
  return (
    <ThemeProvider theme={getTheme ? darkTheme : lightTheme}>
      <NaviBar />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
