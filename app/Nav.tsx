"use client";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  Avatar,
  Badge,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Switch,
  Typography,
  Box,
  SvgIcon,
  Link as MuiLink
} from "@mui/material";
import { useTheme, useThemeMode } from "next-themes";
import { Menu as MenuIcon, Brightness4 as MoonIcon, Brightness7 as SunIcon } from "@mui/icons-material";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function Nav() {
  const { data: session, status } = useSession();
  const { user } = session || {};
  const isSubscribed = user?.subscriptionStatus === "active" || false;
  const segment = useSelectedLayoutSegment();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { theme, setTheme } = useThemeMode();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenu}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Next.js 13 Demo App
        </Typography>
        <Switch
            checked={theme === "dark"}
            onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            icon={<SunIcon />}
            checkedIcon={<MoonIcon />}
        />
        {session ? (
          <>
            {isSubscribed ? (
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
              >
                {user?.image ? (
                  <Avatar alt="user's image" src={user.image as string} />
                ) : (
                  <Avatar>{user?.name?.charAt(0) || ''}</Avatar>
                )}
              </Badge>
            ) : user?.image ? (
              <Avatar alt="user's image" src={user.image as string} />
            ) : (
              <Avatar>{user?.name?.charAt(0) || ''}</Avatar>
            )}
            <Button color="inherit" onClick={() => signOut()}>
              Sign out
            </Button>
          </>
        ) : (
            <Button color="inherit" onClick={() => signIn()}>
              {status && status === "loading" ? "Loading…" : 'Login'}
            </Button>
        )}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem>
            <Link href="/" passHref>
              <MuiLink color={segment === "(home)" ? 'text.primary' : 'text.secondary'}>
                Home
              </MuiLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/posts" passHref>
              <MuiLink color={segment === "posts" ? 'text.primary' : 'text.secondary'}>
                Feed
              </MuiLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/subscribe" passHref>
              <MuiLink color={segment === "subscribe" ? 'text.primary' : 'text.secondary'}>
                Subscribe
              </MuiLink>
            </Link>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}