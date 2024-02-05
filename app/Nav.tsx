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
  Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NextLink from "next/link";
import { useTheme } from "next-themes";
import { useSelectedLayoutSegment } from "next/navigation";

const Nav = () => {
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
          edge="start"
          aria-label="menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Next.js 13 Demo App
        </Typography>
        <Switch
          checked={theme === "dark"}
          onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
        {session ? (
          <>
            {isSubscribed ? (
              <Badge
                badgeContent="PRO"
                color="primary"
                sx={{ marginRight: 1 }}
              >
                <Avatar src={user?.image || ""} />
              </Badge>
            ) : (
              <Avatar src={user?.image || ""} />
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
      <Menu
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      >
        <MenuItem onClick={() => setIsMenuOpen(false)}>
          <NextLink href="/">Home</NextLink>
        </MenuItem>
        <MenuItem onClick={() => setIsMenuOpen(false)}>
          <NextLink href="/posts">Posts</NextLink>
        </MenuItem>
        <MenuItem onClick={() => setIsMenuOpen(false)}>
          <NextLink href="/subscribe">Subscribe</NextLink>
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Nav;