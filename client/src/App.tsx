import { Outlet } from "react-router-dom";
import NaviBar from "./Header/NaviBar";
import { useAppDispatch } from "./app/store/store";
import { useEffect } from "react";
import { fetchCurrentUser } from "./app/account/accountSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  // const getTheme = useAppSelector(getThemeMode);
  // console.log(getTheme);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <NaviBar />
      <Outlet />
    </>
  );
}

export default App;
