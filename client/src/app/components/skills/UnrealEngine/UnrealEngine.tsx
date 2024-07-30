import {
  CssBaseline,
  Container,
  Grid,
  Stack,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { Item, bull } from "../../../../utils/constants";
import UdemyIcon from "../../../../assets/images/udemy.png";

import UnrealEngineIcon from "../../../../assets/images/unrealengine-icon.png";
import CPlus from "./CPlus";
import UnrealCourses from "./UnrealCourses";

export default function UnrealEnginer() {
  return (
    <>
      <CssBaseline />
      <Container sx={{ paddingTop: 2 }}>
        <Item>
          <Grid container>
            <Grid container xs={4}>
              <Stack direction="row">
                <Box alignContent="center">
                  <NavLink to="https://nodejs.org/en">
                    <img src={UnrealEngineIcon} alt="Node Icon" />
                  </NavLink>
                </Box>
                <Typography variant="h3" alignContent="center" paddingLeft={2}>
                  Unreal Engine 5
                </Typography>
              </Stack>
            </Grid>
            <Grid container xs={8}>
              <Stack direction="column">
                <Typography variant="h6" alignContent="center">
                  {bull}Unreal Engine 5 is the world's most open and advanced
                  real-time 3D creation tool.
                </Typography>
                <Typography variant="h6" alignContent="center">
                  {bull}Unreal Engine 5 can be used to develop more than just
                  video games, it can be used for: Games, film & television,
                  architecture, automotive & transportation, broadcast & live
                  events, simulation and much more.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Item>
      </Container>
      <CPlus />
      <Container sx={{ paddingTop: 4 }}>
        <Stack direction="row">
          <Box alignContent="center">
            <NavLink to="https://www.udemy.com/">
              <img src={UdemyIcon} alt="Redux Icon" height="56" width="100" />
            </NavLink>
          </Box>
          <Typography variant="h2">Udemy Online Courses:</Typography>
        </Stack>
        <Divider />
      </Container>
      <UnrealCourses />
    </>
  );
}
