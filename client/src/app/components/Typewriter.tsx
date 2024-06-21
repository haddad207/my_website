import { Box, Grid, Typography } from "@mui/material";
import { ReactTyped } from "react-typed";

export default function Typewriter() {
  return (
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
          <Typography variant="h2">
            <ReactTyped
              strings={['console.log("Hello World!")']}
              typeSpeed={50}
            />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
