"use client";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  Avatar,
  Badge,
  Button,
  Switch,
  AppBar,
  Toolbar,
  IconButton,
  MenuIcon,
  Typography,
  Hidden,
  Drawer,
  MenuItem
} from "@mui/material";
import NextLink from "next/link";
import { useTheme } from "next-themes";
import { useSelectedLayoutSegment } from "next/navigation";

const SunIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    {/* SVG content is omitted for brevity */}
  </svg>
);

const MoonIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    {/* SVG content is omitted for brevity */}
  </svg>
);

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
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => setIsMenuOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" flexgrow={1}>
          Next.js 13 Demo App
        </Typography>

        <Switch
          checked={theme === "dark"}
          onChange={(e) => setTheme(theme === "dark" ? "light" : "dark")}
          thumbIcon={({ checked, className }) =>
            checked  ? (
              <MoonIcon className={className} />
            ) : (
              <SunIcon className={className} />
            )
          }
        />

        {session ? (
          <>
            {isSubscribed ? (
              <Badge badgeContent="PRO" color="primary">
                {user?.image ? (
                  <Avatar alt={user.name} src={user.image} />
                ) : (
                  <Avatar>{user?.name?.charAt(0)}</Avatar>
                )}
              </Badge>
            ) : user?.image ? (
              <Avatar alt={user.name} src={user.image} />
            ) : (
              <Avatar>{user?.name?.charAt(0)}</Avatar>
            )}
            <Button variant="text" color="inherit" onClick={() => signOut()}>
              Sign out
            </Button>
          </>
        ) : (
          <Button variant="text" onClick={() => signIn()} color="inherit">
            {status === "loading" ? (
              <> Loading... </>
            ) : (
              "Login"
            )}
          </Button>
        )}
      </Toolbar>

      <Drawer anchor="left" open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <MenuItem onClick={() => setIsMenuOpen(false)}>
          <NextLink href="/">Home</NextLink>
        </MenuItem>
        <MenuItem onClick={() => setIsMenuOpen(false)}>
          <NextLink href="/posts">Feed</NextLink>
        </MenuItem>
        <MenuItem onClick={() => setIsMenuOpen(false)}>
          <NextLink href="/subscribe">Subscribe</NextLink>
        </MenuItem>
      </Drawer>
    </AppBar>
  );
}