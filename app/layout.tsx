import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ProvidersWrapper from "./ProvidersWrapper";
import "./globals.css";

export const metadata = {
  // Rest of the code...
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ProvidersWrapper>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">
                My App
              </Typography>
            </Toolbar>
          </AppBar>
          {children}
        </ProvidersWrapper>
      </body>
    </html>
  );
}