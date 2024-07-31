import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { signOut } from "./accountSlice";
import { setThemeMode } from "../../Header/headerSlice";

export default function Profile() {
  const { user } = useAppSelector((state) => state.account);
  const { darkMode } = useAppSelector((state) => state.theme);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const HandleLogout = () => {
    dispatch(signOut());
  };

  const HandleThemeSwitch = () => {
    dispatch(setThemeMode());
  };

  useEffect(() => {
    if (!user) {
      navigate("login");
    }
  }, [navigate, user]);

  return (
    <Container>
      <Grid
        paddingLeft={4}
        paddingTop={2}
        paddingBottom={2}
        paddingRight={4}
        container
        sx={{
          marginTop: 2,
          boxShadow: 2,
          borderTopRightRadius: 1,
          borderTopLeftRadius: 1,
          borderBottomLeftRadius: 1,
          borderBottomRightRadius: 1,
        }}
      >
        <Grid item xs={3} paddingLeft={2}>
          <Stack direction="column">
            <Avatar
              sx={{
                height: 300,
                width: 300,
                alignContent: "center",
              }}
            />
            <Box textAlign="center" justifyContent="center">
              <Button sx={{ margin: 2, marginLeft: 7 }} variant="outlined">
                Upload Photo
              </Button>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={1}>
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h4" margin={2}>
            Welcome {user!.name}!
          </Typography>
          <Typography variant="h4" margin={2}>
            Username: {user!.username}
          </Typography>
          <Typography variant="h4" margin={2}>
            Email: {user!.email}
          </Typography>
          <Stack margin={2} direction="row" alignItems="center" spacing={1}>
            <Typography variant="h5">DarkMode</Typography>
            <Switch
              sx={{ margin: 2 }}
              name="DarkMode"
              onChange={HandleThemeSwitch}
              value={darkMode}
              checked={darkMode}
            />
          </Stack>

          <Box textAlign="end">
            <Button onClick={HandleLogout} variant="outlined">
              Logout
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
