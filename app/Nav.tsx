import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  Avatar,
  Badge,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Switch as MuiSwitch,
} from "@mui/material";
import { Menu as MenuIcon, Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from "next-themes";
import { styled } from "@mui/system";
import Link from 'next/link';

export default function Nav() {
  const { data: session, status } = useSession();
  const { user } = session || {};
  const isSubscribed = user?.subscriptionStatus === "active" || false;
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
          Next.js 13 Demo App
        </Typography>

        <IconButton color="inherit" onClick={(e) => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>

        {session ? (
          <>
            {isSubscribed ? (
              <Badge
                variant="dot"
                color="primary"
                overlap="circular"
              >
                {user?.image ? (
                  <Avatar src={user.image as string} />
                ) : (
                  <Avatar>{user?.name?.charAt(0)}</Avatar>
                )}
              </Badge>
            ) : user?.image ? (
              <Avatar src={user.image as string} />
            ) : (
              <Avatar>{user?.name?.charAt(0)}</Avatar>
            )}
            <Button color="inherit" onClick={() => signOut()}>
              Sign out
            </Button>
          </>
        ) : (
          <Button color="inherit" onClick={() => signIn()}>
              {status && status === "loading" ? (
                "Loading..."
              ) : (
                "Login"
              )}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}