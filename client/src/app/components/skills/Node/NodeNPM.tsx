import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import npmIcon from "../../../../assets/images/npm.png";
import { Item, bull } from "../../../../utils/constants";
export default function NodeNPM() {
  return (
    <Container sx={{ paddingTop: 4 }}>
      <Item>
        <Grid container>
          <Grid container xs={4}>
            <Stack direction="row" paddingLeft={1} alignContent="center">
              <Box alignContent="center">
                <img src={npmIcon} alt="Redux Icon" height="80" width="80" />
              </Box>
              <Typography variant="h3" alignContent="center" paddingLeft={3}>
                Express Packages
              </Typography>
            </Stack>
          </Grid>
          <Grid container xs={8}>
            <Stack direction="column">
              <Typography variant="h6">
                {bull}Axios: Used for making api calls instead of fetch.
              </Typography>
              <Typography variant="h6">
                {bull}body-parser: Used for parsing incoming requests into json
                format.{" "}
              </Typography>
              <Typography variant="h6">
                {bull}cors: used for handling CORS (Cross-Origin Resource
                Sharing) requests (Who can communicate with the backend).
              </Typography>
              <Typography variant="h6">
                {bull}dotenv: used for storing and retrieving secrets.
              </Typography>
              <Typography variant="h6">
                {bull}bcrypt: used for hashing passwords before storing them in
                the database. Additionally, used to verify passwords.
              </Typography>
              <Typography variant="h6">
                {bull}express-validator: used for validating incoming requests
                to the specified backend.
              </Typography>
              <Typography variant="h6">
                {bull}jsonwebtoken: used for creating and validating jwts.
              </Typography>
              <Typography variant="h6">
                {bull}mongoose: used for database connection, and simplifying
                the creation of models/schemas when handling database requests.
              </Typography>
              <Typography variant="h6">
                {bull}nodemon: simplifies development process, as it helps in
                auto-reloading the backend for development use.
              </Typography>
              <Typography variant="h6">
                {bull}uuid: used for creating uuids.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Item>
    </Container>
  );
}
