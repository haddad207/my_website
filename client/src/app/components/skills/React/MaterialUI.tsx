import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import MaterialUiIcon from "../../../../assets/images/react/materialui.png";
import { Item, bull } from "../../../../utils/constants";

export default function MaterialUI() {
  return (
    <Container sx={{ paddingTop: 4 }}>
      <Item>
        <Grid container>
          <Grid item xs={4}>
            <Stack direction="row" paddingLeft={1} alignContent="center">
              <Box alignContent="center">
                <img
                  src={MaterialUiIcon}
                  alt="Redux Icon"
                  height="80"
                  width="80"
                />
              </Box>
              <Typography
                variant="h3"
                alignContent="center"
                paddingLeft={3}
                textAlign="center"
              >
                Material UI
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={8}>
            <Stack direction="column">
              <Typography variant="h6">
                {bull}Material UI is an open-source React component library that
                implements Google's Material Design.
              </Typography>
              <Typography variant="h6">
                {bull}Material UI's components helps simplify a website's User
                Interface Design.
              </Typography>
              <Typography variant="h6">
                {bull}This website is fully built using Material UI.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Item>
    </Container>
  );
}
