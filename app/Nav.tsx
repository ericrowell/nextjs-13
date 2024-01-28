import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Link,
  IconButton,
  AppBar,
  Toolbar,
  Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "next-themes";
import { useSelectedLayoutSegment } from "next/navigation";
import NextLink from "next/link";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
//...rest of your current imports

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
        <IconButton 
          color="inherit" 
          aria-label="menu"
          size="large"
          edge="start"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Next.js 13 Demo App
        </Typography>
        <Switch
          isSelected={theme === "dark"}
          onChange={(e) => setTheme(theme === "dark" ? "light" : "dark")}
          thumbIcon={({ isSelected, className }) =>
            isSelected ? (
              <MoonIcon className={className} />
            ) : (
              <SunIcon className={className} />
            )
          }
        />

        {session ? (
          <>
            {isSubscribed ? (
              // For MUI Avatar, the Badge goes around the Avatar
              <Badge
                badgeContent="PRO"
                color="primary"
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
            <Button color="inherit" onClick={() => signOut()}>Sign out</Button>
          </>
        ) : (
          <Button variant="text" onClick={() => signIn()} color="inherit">
            {status && status === "loading" ? "Loading..." : "Login"}
          </Button>
        )}
        <Drawer open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
          <List>
            <ListItem>
              <NextLink href="/" passHref>
                <Link underline="none" color="inherit">
                  Home
                </Link>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink href="/posts" passHref>
                <Link underline="none" color="inherit">
                  Feed
                </Link>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink href="/subscribe" passHref>
                <Link underline="none" color="inherit">
                  Subscribe
                </Link>
              </NextLink>
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}