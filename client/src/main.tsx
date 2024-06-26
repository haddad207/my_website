import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store/store.ts";
import { router } from "./router/Route.tsx";
import { CssBaseline } from "@mui/material";

// const TypeWriterTheme = createTheme({
//   palette: {
//     primary: { main: "#403f3c" },
//     text: { primary: "#fcba03", secondary: "#fcba03" },
//     background: {
//       default: "#403f3c",
//     },
//   },
// });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <ThemeProvider theme={TypeWriterTheme}> */}
    <CssBaseline />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
