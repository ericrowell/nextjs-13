"use client";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default function ProvidersWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <NextThemesProvider defaultTheme="system" attribute="class">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              {children}
            </Typography>
          </Toolbar>
        </AppBar>
      </NextThemesProvider>
    </SessionProvider>
  );
}