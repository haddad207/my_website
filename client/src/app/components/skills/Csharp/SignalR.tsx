import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import AspIcon from "../../../../assets/images/asp.png";
import { Item, bull } from "../../../../utils/constants";
import { NavLink } from "react-router-dom";

export default function SignalR() {
  return (
    <Container sx={{ paddingTop: 4 }}>
      <Item>
        <Grid container>
          <Grid container xs={4}>
            <Stack direction="row" paddingLeft={1} alignContent="center">
              <Box alignContent="center">
                <NavLink to="https://dotnet.microsoft.com/en-us/apps/aspnet/signalr">
                  <img src={AspIcon} alt="Redux Icon" height="80" width="80" />
                </NavLink>
              </Box>
              <Typography variant="h3" alignContent="center" paddingLeft={3}>
                SignalR
              </Typography>
            </Stack>
          </Grid>
          <Grid container xs={8}>
            <Stack direction="column">
              <Typography variant="h6">
                {bull}SignalR is used to create a real-time website (messaging,
                live updates, etc..).
              </Typography>
              <Typography variant="h6">
                {bull}By creating an open websocket that mutplie users can
                connect to, SignalR allows the transfer of live data almost
                instantaneously between the all users connected to the specified
                websocket.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Item>
    </Container>
  );
}
