import { CssBaseline, Container, Grid, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Item, bull } from "../../../../utils/constants";

import UnrealEngineIcon from "../../../../assets/images/unrealengine-icon.png";

export default function UnrealEnginer() {
  return (
    <>
      <CssBaseline />
      <Container sx={{ paddingTop: 2 }}>
        <Item>
          <Grid container>
            <Grid container xs={4}>
              <Stack direction="row">
                <NavLink to="https://nodejs.org/en">
                  <img src={UnrealEngineIcon} alt="Node Icon" />
                </NavLink>
                <Typography variant="h3" alignContent="center" paddingLeft={2}>
                  Unreal Engine 5
                </Typography>
              </Stack>
            </Grid>
            <Grid container xs={8}>
              <Typography variant="h6" alignContent="center">
                {bull}Node.js is an open-source and cross-platform JavaScript
                runtime environment.
              </Typography>
            </Grid>
          </Grid>
        </Item>
      </Container>
    </>
  );
}
