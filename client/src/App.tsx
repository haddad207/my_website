import { Outlet } from "react-router-dom";
import NaviBar from "./Header/NaviBar";
import { useAppDispatch, useAppSelector } from "./app/store/store";
import { useEffect, useState } from "react";
import { fetchCurrentUser } from "./app/account/accountSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CssBaseline } from "@mui/material";
import Typewriter from "./app/components/Typewriter";

// import { ThemeProvider, createTheme } from "@mui/material";

// const lightTheme = createTheme({
//   palette: {
//     primary: {
//       main: "#0077b6",
//     },
//     background: {
//       default: "#90E0EF",
//     },
//   },
// });

// const darkTheme = createTheme({
//   palette: {
//     primary: {
//       main: "#051923",
//     },
//     background: {
//       default: "#90E0EF",
//     },
//   },
// });

function App() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.account);
  // console.log(getTheme);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3500);
  });

  // const TypeWriterTheme = createTheme({
  //   palette: {
  //     background: {
  //       default: "#403f3c",
  //     },
  //   },
  // });

  return (
    <>
      {isLoading && !user ? (
        // <ThemeProvider theme={TypeWriterTheme}>
        <>
          <CssBaseline />
          <Typewriter />
        </>
      ) : (
        // </ThemeProvider>
        <>
          <ToastContainer
            position="bottom-right"
            hideProgressBar
            theme="colored"
          />
          <NaviBar />
          <Outlet />
        </>
      )}
    </>
  );
}

export default App;
