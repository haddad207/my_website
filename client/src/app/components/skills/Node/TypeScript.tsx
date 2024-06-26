import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import TypeScriptIcon from "../../../../assets/images/ts-icon.png";
import { Item, bull } from "../../../../utils/constants";
import { NavLink } from "react-router-dom";

export default function TypeScript() {
  return (
    <Container sx={{ paddingTop: 4 }}>
      <Item>
        <Grid container>
          <Grid container xs={4}>
            <Stack direction="row" paddingLeft={1} alignContent="center">
              <Box alignContent="center">
                <NavLink to="https://redux.js.org/">
                  <img
                    src={TypeScriptIcon}
                    alt="Redux Icon"
                    height="80"
                    width="80"
                  />
                </NavLink>
              </Box>
              <Typography variant="h3" alignContent="center" paddingLeft={3}>
                TypeScript
              </Typography>
            </Stack>
          </Grid>
          <Grid container xs={8}>
            <Stack direction="column">
              <Typography variant="h6">
                {bull}TypeScript extends the JavaScript library by adding types
                to it. It helps the develpoment process.
              </Typography>
              <Typography variant="h6">
                {bull}TypeScript is commonlly used to prevent spaghetti code.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Item>
    </Container>
  );
}
