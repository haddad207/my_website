import { CssBaseline, Container, Grid, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Item, bull } from "../../../../utils/constants";

import NodeIcon from "../../../../assets/images/node-icon.png";
import Express from "./Express";
import NodeNPM from "./NodeNPM";
import TypeScript from "./TypeScript";

export default function Node() {
  return (
    <>
      <CssBaseline />
      <Container sx={{ paddingTop: 2 }}>
        <Item>
          <Grid container>
            <Grid container xs={4}>
              <Stack direction="row">
                <NavLink to="https://react.dev/">
                  <img src={NodeIcon} alt="Node Icon" />
                </NavLink>
                <Typography variant="h3" alignContent="center" paddingLeft={2}>
                  Node.js
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
      <Express />
      <NodeNPM />
      <TypeScript />
    </>
  );
}
