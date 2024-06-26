import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";

import ReduxIcon from "../../../../assets/images/react-redux.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.primary,
}));

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function ReactRedux() {
  return (
    <>
      <Container sx={{ paddingTop: 2 }}>
        <Item>
          <Grid container>
            <Grid container xs={3}>
              <Stack direction="row" paddingLeft={1} alignContent="center">
                <Box alignContent="center">
                  <img
                    src={ReduxIcon}
                    alt="Redux Icon"
                    height="80"
                    width="80"
                  />
                </Box>
                <Typography variant="h3" alignContent="center" paddingLeft={1}>
                  Redux
                </Typography>
              </Stack>
            </Grid>
            <Grid container xs={9}>
              <Stack direction="column">
                <Typography variant="h6">
                  {bull}Configuring a store that stores all the required
                  reducers (Slices).
                </Typography>
                <Typography variant="h6">
                  {bull}Creating State Slices using CreateSlice method to manage
                  data across our components. Which also handles api calls via Axios.
                </Typography>
                <Typography variant="h6">
                  {bull}Providing the Redux Store to react via Provider.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Item>
      </Container>
    </>
  );
}
