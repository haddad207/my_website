import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import npmIcon from "../../../../assets/images/npm.png";
import { Item, bull } from "../../../../utils/constants";
export default function ReactNPM() {
  return (
    <Container sx={{ paddingTop: 4 }}>
      <Item>
        <Grid container>
          <Grid container xs={4}>
            <Stack direction="row" paddingLeft={1} alignContent="center">
              <Box alignContent="center">
                <img src={npmIcon} alt="Redux Icon" height="80" width="80" />
              </Box>
              <Typography variant="h3" alignContent="center" paddingLeft={3}>
                Others
              </Typography>
            </Stack>
          </Grid>
          <Grid container xs={8}>
            <Stack direction="column">
              <Typography variant="h6">
                {bull}Axios: Used for making api calls instead of fetch.
              </Typography>
              <Typography variant="h6">
                {bull}React-Hook-Form: used for creating and managing forms
                (Login/Signup forms).
              </Typography>
              <Typography variant="h6">
                {bull}React-Toastify: used for creating toast messages for
                errors.
              </Typography>
              <Typography variant="h6">
                {bull}React-Typed: used for creating the typewritter effect at
                the initial application loading screen.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Item>
    </Container>
  );
}
