import { Box, Container, Divider, Typography } from "@mui/material";

import { Item, bull } from "../../../../utils/constants";

export default function UnrealCourses() {
  return (
    <Container sx={{ paddingTop: 2 }}>
      <Item>
        <Typography
          variant="h3"
          alignContent="center"
          paddingLeft={3}
          textAlign="left"
        >
          Unreal Engine 5 C++ Developer: Learn C++ & Make Video Games
        </Typography>
        <Divider />
        <Container sx={{ paddingTop: 1 }}>
          <Typography variant="h5">
            In this online course, I have learned how to use Unreal Engine 5 via
            C++ by developing 5 different introductory level games. Im going to
            go into a little more detail here:
          </Typography>
          <Typography variant="h5">
            {bull}
            <Box fontWeight="bold" display="inline">
              Warehouse Wreckage:
            </Box>{" "}
            Using Blueprint, which is the visual coding aspect of Unreal Engine.
            This game was made to get a better understanding on how to use
            Unreal Engine tools, assets, and physics. Main concept of the game
            is stack a bunch of barrels ontop of eachother and shoot canon balls
            at them.
          </Typography>
          <Typography variant="h5">
            {bull}
            <Box fontWeight="bold" display="inline">
              Obstacle Assault:
            </Box>{" "}
            This game was developed using C++. The main idea behind the game is
            to build a game that is somewhat similar to fall guys. Where we
            handle collision, physics, movement, third-person camera, handling
            the tick function and FRotator.
          </Typography>
          <Typography variant="h5">
            {bull}
            <Box fontWeight="bold" display="inline">
              Crypt Raider:
            </Box>{" "}
            This game was developed using C++. This game is a first person
            puzzle game. Where you find yourself locked in a crypt. You have to
            move an object in the map to a specified location to activate the
            trap door. From there you have to traverse the map and solve
            additional puzzle to reach the end goal, which is escape! In this
            game, I have tackled world lighting, lumen, level lighting,
            Debuging, Line Tracing & Sweeping, Interpretation, Geometry
            Sweeping, Input Action Mappings, Grabbing physics, Actor Tags, and
            how to manage logical operations in Unreal Engine.
          </Typography>
          <Typography variant="h5">
            {bull}
            <Box fontWeight="bold" display="inline">
              Toon Tanks:
            </Box>{" "}
            This game was developed using C++. This game is a top-down game
            where you handle a tank and have to blow up a few enemies. It
            handles movement, local rotation, Firing, The Health Component,
            Damage Component, overlay widgets for Starting and pausing the game,
            Hit Particles, Sounds, and Camera Shake.
          </Typography>
        </Container>
        <Typography
          variant="h3"
          alignContent="center"
          paddingLeft={3}
          paddingTop={2}
          textAlign="left"
        >
          Unreal Engine 5 C++ Multiplayer Shooter
        </Typography>
        <Divider />
        <Container sx={{ paddingTop: 1 }}>
          <Typography variant="h5">
            In this online course, I have learned how to use creat a multiplayer
            game using Unreal Engine 5 via C++ by developing an online shooter
            game. Which handles replication and Delegates that a single player
            game does not haveThis course is still in-progress, but I a, going
            to go into a little more detail abot it:
          </Typography>
          <Typography variant="h5">
            {bull}
            <Box fontWeight="bold" display="inline">
              Multiplayer Plugin:
            </Box>{" "}
            In this section of the course, I learned how to create a multiplayer
            plugin for Steam. It can be configured to work with other Game
            Launching platforms. This plugin can be added to any game to
            integrate multiplayer.
          </Typography>
          <Typography variant="h5">
            {bull}
            <Box fontWeight="bold" display="inline">
              Animation:
            </Box>{" "}
            In this course, I learned how to import animations, how to key
            animations and change how the weapon is held via sockets. In
            addition, learned how to manage blendspace, Tracer Effects,
            projectiles, shell physics, Firing Weapons, Movement and much more.
          </Typography>
          <Typography variant="h5">
            {bull}
            <Box fontWeight="bold" display="inline">
              Sound:
            </Box>{" "}
            Through this course, learned how to manage sounds via cue's and
            attenuation
          </Typography>
          <Typography variant="h5">
            {bull}
            <Box fontWeight="bold" display="inline">
              Aiming:
            </Box>{" "}
            In this course, I learned how to create a HUD, crosshair, aim
            variations (zooming for different weapons), Trace Start, Character
            hit effects and automatic weapons.
          </Typography>
          <Typography variant="h5" paddingTop={2}>
            More to come soon...
          </Typography>
        </Container>
      </Item>
    </Container>
  );
}
