"use client";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import NextLink from "next/link";
import { useTheme } from "next-themes";
import { useSelectedLayoutSegment } from "next/navigation";
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

// Keep your SVG components and the rest of your code here

export default function Nav() {
  const { data: session, status } = useSession();
  const { user } = session || {};
  const isSubscribed = user?.subscriptionStatus === "active" || false;
  const segment = useSelectedLayoutSegment();
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Next.js 13 Demo App
        </Typography>
        <Button color="inherit" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}> 
          {theme === "dark" ? <MoonIcon /> : <SunIcon />} 
        </Button>
        {session ? (
          <Button color="inherit" onClick={() => signOut()}>Sign out</Button>
        ) : (
          <Button color="inherit" onClick={() => signIn()}>
            {status && status === "loading" ? "Loading..." : "Login"}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}