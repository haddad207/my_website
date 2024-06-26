import { CssBaseline, Container, Grid, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Item, bull } from "../../../../utils/constants";

import CSharpIcon from "../../../../assets/images/csharp-icon.png";
import AspNet from "./AspNet";
import Entity from "./Entity";
import Identity from "./Identity";
import SignalR from "./SignalR";

export default function Csharp() {
  return (
    <>
      <CssBaseline />
      <Container sx={{ paddingTop: 2 }}>
        <Item>
          <Grid container>
            <Grid container xs={4}>
              <Stack direction="row">
                <NavLink to="https://dotnet.microsoft.com/en-us/languages/csharp">
                  <img src={CSharpIcon} alt="csharp-icon.png" />
                </NavLink>
                <Typography variant="h3" alignContent="center" paddingLeft={2}>
                  C-Sharp
                </Typography>
              </Stack>
            </Grid>
            <Grid container xs={8}>
              <Typography variant="h6" alignContent="center">
                {bull}C# is a general-purpose high-level programming language
                supporting multiple paradigms.
              </Typography>
            </Grid>
          </Grid>
        </Item>
      </Container>
      <AspNet />
      <Entity />
      <Identity />
      <SignalR />
    </>
  );
}
