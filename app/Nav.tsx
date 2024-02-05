"using client";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  AppBar,
  Avatar,
  Badge,
  Button,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Switch,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import NextLink from "next/link";
import { useTheme, Theme } from 'next-themes';
import { useSelectedLayoutSegment } from "next/navigation";
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

export default function Nav() {
  const { data: session, status } = useSession();
  const { user } = session || {};
  const isSubscribed = user?.subscriptionStatus === "active" || false;
  const segment = useSelectedLayoutSegment();
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Next.js 13 Demo App
          </Typography>
          <Box display={{ xs: "none", md: "flex" }} justifyContent="center" alignItems="center">
            <NextLink href="/" passHref>
              <Button color="inherit" variant={segment === "(home)" ? "text" : "outlined"}>
                Home
              </Button>
            </NextLink>
            <NextLink href="/posts" passHref>
              <Button color="inherit" variant={segment === "posts" ? "text" : "outlined"}>
                Feed
              </Button>
            </NextLink>
            <NextLink href="/subscribe" passHref>
              <Button color="inherit" variant={segment === "subscribe" ? "text" : "outlined"}>
                Subscribe
              </Button>
            </NextLink>
          </Box>
          <Switch
            checked={theme === "dark"}
            onChange={(e) => setTheme(theme === "dark" ? "light" : "dark")}
            inputProps={{ 'aria-label': 'controlled' }}
            icon={<Brightness7Icon />}
            checkedIcon={<Brightness4Icon />}
          />
          {session ? (
            <>
              {isSubscribed ? (
                <Badge
                  color="secondary"
                  overlap="circular"
                  badgeContent="pro"
                  variant="dot"
                >
                  {user?.image ? (
                    <Avatar alt={user?.name || "unknown"} src={user.image as string} />
                  ) : (
                    <Avatar>{user?.name?.charAt(0) as string}</Avatar>
                  )}
                </Badge>
              ) : user?.image ? (
                <Avatar alt={user?.name || "unknown"} src={user.image as string} />
              ) : (
                <Avatar>{user?.name?.charAt(0) as string}</Avatar>
              )}
              <Button color="inherit" onClick={() => signOut()}>
                Sign out
              </Button>
            </>
          ) : (
            <Button color="inherit" onClick={() => signIn()}>
              {status === "loading" ? "Loading..." : "Login"}
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Menu
        id="navigation-menu"
        keepMounted
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      >
        <MenuItem onClick={() => setIsMenuOpen(false)}>
          <NextLink href="/" passHref>
            <Box width="100%" fontWeight={segment === "(home)" ? "bold" : "normal"}>
              Home
            </Box>
          </NextLink>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => setIsMenuOpen(false)}>
          <NextLink href="/posts" passHref>
            <Box width="100%" color="inherit" fontWeight={segment === "posts" ? "bold" : "normal"}>
              Feed
            </Box>
          </NextLink>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => setIsMenuOpen(false)}>
          <NextLink href="/subscribe" passHref>
            <Box width="100%" color="inherit" fontWeight={segment === "subscribe" ? "bold" : "normal"}>
              Subscribe
            </Box>
          </NextLink>
        </MenuItem>
      </Menu>
    </div>
  );
}
