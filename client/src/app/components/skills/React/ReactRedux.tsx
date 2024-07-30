import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import ReduxIcon from "../../../../assets/images/react/react-redux.png";
import { Item, bull } from "../../../../utils/constants";
import { NavLink } from "react-router-dom";

export default function ReactRedux() {
  return (
    <Container sx={{ paddingTop: 4 }}>
      <Item>
        <Grid container>
          <Grid item xs={4}>
            <Stack direction="row" paddingLeft={1} alignContent="center">
              <Box alignContent="center">
                <NavLink to="https://redux.js.org/">
                  <img
                    src={ReduxIcon}
                    alt="Redux Icon"
                    height="80"
                    width="80"
                  />
                </NavLink>
              </Box>
              <Typography variant="h3" alignContent="center" paddingLeft={3}>
                Redux
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={8}>
            <Stack direction="column">
              <Typography variant="h6">
                {bull}Configuring a store that stores all the required reducers
                (Slices).
              </Typography>
              <Typography variant="h6">
                {bull}Creating State Slices using CreateSlice method to manage
                data across our components. Which also handles api calls via
                Axios.
              </Typography>
              <Typography variant="h6">
                {bull}Providing the Redux Store to react via Provider.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Item>
    </Container>
  );
}
