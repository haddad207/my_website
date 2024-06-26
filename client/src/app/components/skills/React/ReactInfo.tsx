import { Container, CssBaseline, Grid, Stack, Typography } from "@mui/material";

import ReactIcon from "../../../../assets/images/react/react-icon.png";
import ReactRedux from "./ReactRedux";
import ReactRouter from "./ReactRouter";
import FramerMotion from "./FramerMotion";
import { Item, bull } from "../../../../utils/constants";
import ReactNPM from "./ReactNPM";
import MaterialUI from "./MaterialUI";
import { NavLink } from "react-router-dom";

export default function ReactInfo() {
  return (
    <>
      <CssBaseline />
      <Container sx={{ paddingTop: 2 }}>
        <Item>
          <Grid container>
            <Grid container xs={4}>
              <Stack direction="row">
                <NavLink to="https://react.dev/">
                  <img src={ReactIcon} alt="React Icon" />
                </NavLink>
                <Typography variant="h3" alignContent="center" paddingLeft={2}>
                  React
                </Typography>
              </Stack>
            </Grid>
            <Grid container xs={8}>
              <Typography variant="h6" alignContent="center">
                {bull}React is a web library that uses components to build user
                interfaces. Bellow you'll find my detailed experience in React.
              </Typography>
            </Grid>
          </Grid>
        </Item>
      </Container>
      <ReactRedux />
      <ReactRouter />
      <FramerMotion />
      <MaterialUI />
      <ReactNPM />
    </>
  );
}
