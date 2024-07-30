import { Container, Grid, Stack, Typography, Box } from "@mui/material";
import FramerIcon from "../../../../assets/images/react/framer.png";
import { Item, bull } from "../../../../utils/constants";
import { NavLink } from "react-router-dom";

export default function FramerMotion() {
  return (
    <Container sx={{ paddingTop: 4 }}>
      <Item>
        <Grid container>
          <Grid item xs={4}>
            <Stack direction="row" paddingLeft={1} alignContent="center">
              <Box alignContent="center">
                <NavLink to="https://www.framer.com/motion/">
                  <img
                    src={FramerIcon}
                    alt="Redux Icon"
                    height="80"
                    width="80"
                  />
                </NavLink>
              </Box>
              <Typography
                variant="h3"
                alignContent="center"
                textAlign="center"
                paddingLeft={3}
              >
                Framer
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={8}>
            <Stack direction="column">
              <Typography variant="h6">
                {bull}Used to integrate animations on a React Application.
              </Typography>
              <Typography variant="h6">
                {bull}by adding a motion.HTMLcomponent we can create animations
                on that component.
              </Typography>
              <Typography variant="h6">
                {bull}Example: Homepage icons that grow in size when mouse is
                hovering over them was created using framer.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Item>
    </Container>
  );
}
