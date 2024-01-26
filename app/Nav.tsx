"use strict";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { AppBar, Toolbar, IconButton, Badge, Typography, MenuItem, Menu, SvgIcon, Switch } from "@mui/material";
import { useTheme } from "next-themes";
import { useSelectedLayoutSegment } from "next/navigation";
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/system';

// ......Include here the SvgIcon code...... //
// SunIcon and MoonIcon..

// .....Just Below the MoonIcon.... //
export default function Nav() {
  const { data: session, status } = useSession();
  const { user } = session || {};
  const isSubscribed = user?.subscriptionStatus === "active" || false;
  const segment = useSelectedLayoutSegment();
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(null);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={(event) => setIsMenuOpen(event.currentTarget)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Next.js 13 Demo App
        </Typography>
        <Box>
          <Switch
            checked={theme === "dark"}
            onChange={(e) => setTheme(theme === "dark" ? "light" : "dark")}
            icon={theme === "dark" ? <MoonIcon /> : <SunIcon />}
          />
        </Box>
        {session ? (
          <>
            {isSubscribed ? (
              <Badge badgeContent="PRO" color="primary">
                {user?.image ? (
                  <Avatar src={user.image as string} />
                ) : (
                  <Avatar>{user?.name?.charAt(0) as string}</Avatar>
                )}
              </Badge>
            ) : user?.image ? (
              <Avatar src={user.image as string} />
            ) : (
              <Avatar>{user?.name?.charAt(0) as string}</Avatar>
            )}
            <Button variant="contained" color="secondary" onClick={() => signOut()}>
              Sign out
            </Button>
          </>
        ) : (
          <Button variant="contained" onClick={() => signIn()} color="primary">
            {status && status === "loading" ? (
              <CircularProgress size={14} />
            ) : (
              "Login"
            )}
          </Button>
        )}
      </Toolbar>
      <Menu
        anchorEl={isMenuOpen}
        open={Boolean(isMenuOpen)}
        onClose={() => setIsMenuOpen(null)}
      >
        <MenuItem onClick={() => setIsMenuOpen(null)}>Home</MenuItem>
        <MenuItem onClick={() => setIsMenuOpen(null)}>Feed</MenuItem>
        <MenuItem onClick={() => setIsMenuOpen(null)}>Subscribe</MenuItem>
      </Menu>
    </AppBar>
  );
}