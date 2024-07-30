import {
  Avatar,
  Card,
  CardContent,
  CssBaseline,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import myPhoto from "../../assets/images/my_photo.jpg";
import Icons from "./Icons";
import { ReactTyped } from "react-typed";
import useWindowDimensions from "../../utils/windowDimensions";

// import myPhoto from "../../assets/images/my_photo.jpg";

export default function HomePage() {
  const { width } = useWindowDimensions();

  return (
    <>
      <CssBaseline />
      <Grid container paddingTop={2} paddingRight={5} paddingLeft={5}>
        <Grid item xs={2} />
        <Grid
          item
          xs={8}
          alignContent="center"
          alignItems="center"
          justifyContent="center"
        >
          <Stack spacing={2} direction="row">
            <Avatar src={myPhoto} sx={{ height: "23vh", width: "23vh" }} />
            {/* <img src={myPhoto} height="15vh" width="15vh" /> */}
            <Card sx={{ minWidth: width / 2, maxWidth: width / 2 }}>
              <CardContent>
                <Typography variant="h2">
                  <ReactTyped
                    strings={[
                      "Hi! My name is Fadi Haddad and welcome to my portfolio website!",
                    ]}
                    typeSpeed={40}
                  />
                </Typography>
                <Typography variant="h4">
                  <ReactTyped
                    startDelay={5000}
                    strings={[
                      "I am a highly competent software developer with over 3 years of professional experience. My experience varies from Full-Stack Development, Game Developement and DevOps Engineering! Driven by the thrill for knowledge, complex problem solving and an enthusiastic mindset. With a proficient ability in translating business requirements into software solutions. Constantly enhancing my area of expertise with online courses. Reliable and responsible team player, dedicated for personal and team growth.",
                    ]}
                    typeSpeed={20}
                  />
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
      <Grid container paddingTop={2} paddingRight={5} paddingLeft={5}>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Typography variant="h4">
            You can click on the following icons for more details about my
            relevant experience:
          </Typography>
          <Icons resume={false} />
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </>
  );
}
