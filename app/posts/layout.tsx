import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const metadata = {
  title: "Feed | Next.js 13 Demo App",
};

export default function SubscribeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Feed | Next.js 13 Demo App
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
    </section>
    )
}