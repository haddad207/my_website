import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import AspIcon from "../../../../assets/images/asp.png";
import { Item, bull } from "../../../../utils/constants";
import { NavLink } from "react-router-dom";

export default function Identity() {
  return (
    <Container sx={{ paddingTop: 4 }}>
      <Item>
        <Grid container>
          <Grid container xs={4}>
            <Stack direction="row" paddingLeft={1} alignContent="center">
              <Box alignContent="center">
                <NavLink to="https://learn.microsoft.com/en-us/aspnet/core/security/authentication/identity?view=aspnetcore-8.0&tabs=visual-studio">
                  <img src={AspIcon} alt="Redux Icon" height="80" width="80" />
                </NavLink>
              </Box>
              <Typography variant="h3" alignContent="center" paddingLeft={3}>
                Identity
              </Typography>
            </Stack>
          </Grid>
          <Grid container xs={8}>
            <Stack direction="column">
              <Typography variant="h6">
                {bull}Identity is a framework that is used to support
                authentication and to manage roles.
              </Typography>
              <Typography variant="h6">
                {bull}Identity framework is used to create JWT tokens that are
                used to manage user authentication.
              </Typography>
              <Typography variant="h6">
                {bull}Identity framework contains the ability to manage user
                roles (admin, user, moderator).
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Item>
    </Container>
  );
}
