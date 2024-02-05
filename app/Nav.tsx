"use client";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  Avatar,
  Badge,
  Button,
  Link,
  Switch,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import NextLink from "next/link";
import { useTheme } from "next-themes";
import { useSelectedLayoutSegment } from "next/navigation";

// ...existing code...

export default function Nav() {
  const { data: session, status } = useSession();
  const { user } = session || {};
  const isSubscribed = user?.subscriptionStatus === "active" || false;
  const segment = useSelectedLayoutSegment();
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(null);

  const handleMenuOpen = (event) => {
    setIsMenuOpen(event.currentTarget);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(null);
  };

  return (
    <AppBar className="mt-2" position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          <p className="font-bold text-inherit hidden sm:flex pl-4">
            Next.js 13 Demo App
          </p>
        </Typography>
        <Menu
          anchorEl={isMenuOpen}
          keepMounted
          open={Boolean(isMenuOpen)}
          onClose={handleMenuClose}
        >
          {/* Rest of your code... */}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}