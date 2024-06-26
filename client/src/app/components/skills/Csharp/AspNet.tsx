import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import AspIcon from "../../../../assets/images/asp.png";
import { Item, bull } from "../../../../utils/constants";
import { NavLink } from "react-router-dom";

export default function AspNet() {
  return (
    <Container sx={{ paddingTop: 4 }}>
      <Item>
        <Grid container>
          <Grid container xs={4}>
            <Stack direction="row" paddingLeft={1} alignContent="center">
              <Box alignContent="center">
                <NavLink to="https://dotnet.microsoft.com/en-us/apps/aspnet">
                  <img src={AspIcon} alt="Redux Icon" height="80" width="80" />
                </NavLink>
              </Box>
              <Typography variant="h3" alignContent="center" paddingLeft={3}>
                ASP.net
              </Typography>
            </Stack>
          </Grid>
          <Grid container xs={8}>
            <Stack direction="column">
              <Typography variant="h6">
                {bull}Is a free, open-source, cross-platform framework for building web apps and services with .NET and C#. 
              </Typography>
              <Typography variant="h6">
                {bull}Bellow I will go over some of the common nuget packages used.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Item>
    </Container>
  );
}
