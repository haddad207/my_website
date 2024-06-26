import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import ExpressIcon from "../../../../assets/images/expressjs-icon.png";
import { Item, bull } from "../../../../utils/constants";
import { NavLink } from "react-router-dom";

export default function Express() {
  return (
    <Container sx={{ paddingTop: 4 }}>
      <Item>
        <Grid container>
          <Grid container xs={4}>
            <Stack direction="row" paddingLeft={1} alignContent="center">
              <Box alignContent="center">
                <NavLink to="https://redux.js.org/">
                  <img
                    src={ExpressIcon}
                    alt="Redux Icon"
                    height="80"
                    width="80"
                  />
                </NavLink>
              </Box>
              <Typography variant="h3" alignContent="center" paddingLeft={3}>
                Express
              </Typography>
            </Stack>
          </Grid>
          <Grid container xs={8}>
            <Stack direction="column">
              <Typography variant="h6">
                {bull}Express is a fast and minimalist web framework for
                Node.js. Used for creating APIs and Web Applications.
              </Typography>
              <Typography variant="h6">
                {bull}Express is used to host a backend in this scenario. Bellow
                you'll find packages I use for creating a backend.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Item>
    </Container>
  );
}
