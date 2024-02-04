import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Avatar, Button, Switch } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function Nav() {
  ...
  
  return (
    <AppBar position="static" color="inherit" elevation={1}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Next.js 13 Demo App
        </Typography>
        <Switch
          checked={theme === "dark"}
          onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          icon={<Brightness7Icon />}
          checkedIcon={<Brightness4Icon />}
        />
        {session ? (
          <>
            {isSubscribed ? (
              <>
                <Avatar src={user?.image} />
                <Button variant="text" onClick={() => signOut()}>
                  Sign out
                </Button>
              </>
            ) : user?.image ? (
              <Avatar src={user?.image as string} />
            ) : (
              <Avatar>{user?.name?.charAt(0) as string}</Avatar>
            )}
          </>
        ) : (
          <Button variant="text" onClick={() => signIn()}>
            {status === "loading" ? "Loading..." : "Login"}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};