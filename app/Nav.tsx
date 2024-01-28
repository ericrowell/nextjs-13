import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { useSession, signIn, signOut } from "next-auth/react";
import { Badge, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { useTheme } from "next-themes";
import { useSelectedLayoutSegment } from "next/navigation";

//...SunIcon and MoonIcon code...

export default function Nav() {
  //...the rest of your code...

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          className='${isMenuOpen ? "Close menu" : "Open menu"} sm:hidden'
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu Icon
        </IconButton>
        {/* Replace the following code with your logo */}
        <Typography variant="h6" noWrap>
          Next.js 13 Demo App
        </Typography>
        <Switch
          checked={theme === 'dark'}
          onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          name="checkedB"
          color="primary"
          icon={theme === 'dark' ? <MoonIcon /> : <SunIcon />}
        />
        {/* ...the rest of your code... */}
      </Toolbar>
    </AppBar>
  );
}