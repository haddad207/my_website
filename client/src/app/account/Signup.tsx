import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import agent from "../api/agent";
import { useState } from "react";
import { Alert, AlertTitle } from "@mui/material";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ mt: 5 }}
    >
      {"Copyright © "}
      <NavLink color="inherit" to="/">
        Fadi Haddad
      </NavLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Signup() {
  const [validationErrors, setValidationErrors] = useState({ message: "" });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5" sx={{ paddingTop: 2 }}>
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit((data) =>
              agent.Account.singup(data).catch((e) => {
                setValidationErrors((prevState) => ({
                  ...prevState,
                  message: e.data.message,
                }));
              })
            )}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  fullWidth
                  required
                  label="Full Name"
                  autoFocus
                  {...register("name", {
                    required: "Full Name is required",
                  })}
                  error={!!errors.name}
                  helperText={errors?.name?.message as string}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  fullWidth
                  required
                  label="Email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  error={!!errors.email}
                  helperText={errors?.email?.message as string}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Username"
                  {...register("username", {
                    required: "Username is required",
                  })}
                  error={!!errors.username}
                  helperText={errors?.username?.message as string}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  error={!!errors.password}
                  helperText={errors?.password?.message as string}
                />
              </Grid>
              <Grid item xs={12}>
                {validationErrors.message !== "" ? (
                  <Alert severity="error">
                    <AlertTitle>Validation Errors</AlertTitle>
                    <Typography>{validationErrors.message}</Typography>
                  </Alert>
                ) : (
                  ""
                )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <NavLink to="/login">Already have an account? Login</NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
