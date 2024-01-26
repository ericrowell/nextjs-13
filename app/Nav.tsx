"use strict";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Badge,
  Container,
  Menu,
  MenuItem,
  Switch,
  Avatar
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import NextLink from "next/link";
import { useTheme } from "next-themes";
import { useSelectedLayoutSegment } from "next/navigation";

... 

// Use same 'SunIcon' and 'MoonIcon' components as previously defined

const Nav() {
  const { data: session, status } = useSession();
  const { user } = session || {};
  const isSubscribed = user?.subscriptionStatus === "active" || false;
  const segment = useSelectedLayoutSegment();
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(null);

  const handleMenuClose = () => {
    setMenuOpen(null);
  };

  const handleMenuOpen = (event) => {
    setMenuOpen(event.currentTarget);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size='large'
          edge="start"
          color="inherit"
          aria-label="menu"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>
       
        <Typography variant="h6" component="div" color='inherit' style={{ flexGrow: 1 }}>
          Next.js 13 Demo App
        </Typography>

        <Switch color='default' />
        
        // Login button
        {session ? (
          <>
            {isSubscribed ? (
              <Badge badgeContent={4} color="secondary" overlap="circular">
                <Avatar src={user.image as string} />
              </Badge>
            ) : (
              <Avatar src={user.image as string}>
                {user?.name?.charAt(0) as string}
              </Avatar>
            )}
            <Button color="inherit" onClick={() => signOut()}>
              Login
            </Button>
          </>
        ) : (
          <Button color="inherit" onClick={() => signIn()}>
            {status === "loading" ? "Loading..." : "Sign In"}
          </Button>
        )}

        <Menu
          id="simple-menu"
          anchorEl={menuOpen}
          keepMounted
          open={Boolean(menuOpen)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>
            <NextLink href="/">Home</NextLink>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <NextLink href="/posts">Posts</NextLink>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <NextLink href="/subscribe">Subscribe</NextLink>
          </MenuItem>
        </Menu>


      </Toolbar>
    </AppBar>
  );
};

export default Nav;