import { Box, CssBaseline, Grid, Typography } from "@mui/material";
import Typewriter from "./Typewriter";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 4000);
  });
  return (
    <>
      <CssBaseline />
      {isLoading ? (
        <Typewriter />
      ) : (
        <Box>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "90vh" }}
          >
            <Grid item xs={3} justifyContent="center">
              <Typography variant="h2">Hi</Typography>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
}
