import {
  Button,
  Container,
  CssBaseline,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <CssBaseline />
      <Container component={Paper} sx={{ height: 400 }}>
        <Typography gutterBottom variant="h3">
          Oops! We could not find what you are looking for. Please try again.
        </Typography>
        <Divider />
        <Button fullWidth component={Link} to="/catalog">
          Go back to shop
        </Button>
      </Container>
    </>
  );
}

export default NotFound;
