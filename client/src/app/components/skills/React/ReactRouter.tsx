import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import RouterIcon from "../../../../assets/images/react/react-router.png";
import { Item, bull } from "../../../../utils/constants";
import { NavLink } from "react-router-dom";

export default function ReactRouter() {
  return (
    <Container sx={{ paddingTop: 4 }}>
      <Item>
        <Grid container>
          <Grid container xs={4}>
            <Stack direction="row" paddingLeft={1} alignContent="center">
              <Box alignContent="center">
                <NavLink to="https://reactrouter.com/en/main">
                  <img
                    src={RouterIcon}
                    alt="Router Icon"
                    height="65"
                    width="100"
                  />
                </NavLink>
              </Box>
              <Typography variant="h3" alignContent="center" paddingLeft={1}>
                Router
              </Typography>
            </Stack>
          </Grid>
          <Grid container xs={8}>
            <Stack direction="column">
              <Typography variant="h6" alignContent="center">
                {bull}React-Router is used to manage url navigation from the
                client side.
              </Typography>
              <Typography variant="h6" alignContent="center">
                {bull}It is used to prevent the default webpage refresh, thus
                making React a SPA (Single Page Application).
              </Typography>
              <Typography variant="h6" alignContent="center">
                {bull}React-Router also helps by easily managing all your
                routes.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Item>
    </Container>
  );
}
