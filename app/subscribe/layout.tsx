import { AppBar, Toolbar, Typography } from '@mui/material';

export const metadata = {
  title: "Subscribe | Next.js 13 Demo App",
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
            Subscribe
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
    </section>
  );
}