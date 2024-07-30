import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import CPlusIcon from "../../../../assets/images/cplus-icon.png";
import { Item, bull } from "../../../../utils/constants";

export default function CPlus() {
  return (
    <Container sx={{ paddingTop: 4 }}>
      <Item>
        <Grid container>
          <Grid container xs={4}>
            <Stack direction="row" paddingLeft={1} alignContent="center">
              <Box alignContent="center">
                <img src={CPlusIcon} alt="Redux Icon" height="80" width="80" />
              </Box>
              <Typography
                variant="h3"
                alignContent="center"
                paddingLeft={3}
                textAlign="center"
              >
                C++
              </Typography>
            </Stack>
          </Grid>
          <Grid container xs={8}>
            <Stack direction="column">
              <Typography variant="h6">
                {bull}C++ is an object-oriented programming language which gives
                a clear structure to programs and allows code to be reused,
                lowering development costs.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Item>
    </Container>
  );
}
