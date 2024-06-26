import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import AspIcon from "../../../../assets/images/asp.png";
import { Item, bull } from "../../../../utils/constants";
import { NavLink } from "react-router-dom";

export default function Entity() {
  return (
    <Container sx={{ paddingTop: 4 }}>
      <Item>
        <Grid container>
          <Grid container xs={4}>
            <Stack direction="row" paddingLeft={1} alignContent="center">
              <Box alignContent="center">
                <NavLink to="https://learn.microsoft.com/en-us/ef/">
                  <img src={AspIcon} alt="Redux Icon" height="80" width="80" />
                </NavLink>
              </Box>
              <Typography variant="h3" alignContent="center" paddingLeft={3}>
                Entity
              </Typography>
            </Stack>
          </Grid>
          <Grid container xs={8}>
            <Stack direction="column">
              <Typography variant="h6">
                {bull}Entity is an object-relational mapping framework. Used for
                mapping database data with objects.
              </Typography>
              <Typography variant="h6">
                {bull}It simplifies the process of retrieving and storing data
                from/to the database.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Item>
    </Container>
  );
}
