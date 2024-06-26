import {
  Container,
  CssBaseline,
  Grid,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";

import ReactIcon from "../../../../assets/images/react-icon.png";
import ReactRedux from "./ReactRedux";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.primary,
}));

export default function ReactInfo() {
  return (
    <>
      <CssBaseline />
      <Container sx={{ paddingTop: 2 }}>
        <Item>
          <Grid container>
            <Grid container xs={3}>
              <Stack direction="row">
                <img src={ReactIcon} alt="React Icon" />
                <Typography variant="h3" alignContent="center">
                  React
                </Typography>
              </Stack>
            </Grid>
            <Grid container xs={9}>
              <Typography variant="h6" alignContent="center">
                Below you'll find detailed information about my experience with
                React.
              </Typography>
            </Grid>
          </Grid>
        </Item>
      </Container>
      <ReactRedux />
    </>
  );
}
