import ProvidersWrapper from "./ProvidersWrapper";
import { AppBar, Toolbar, Typography } from '@mui/material';
import "./globals.css";

export const metadata = {
  title: "Next.js 13 Demo App",
  description: "Created by Yaseen Mustapha",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Server Components",
    "NextUI",
    "NextAuth",
    "Prisma",
    "PostgreSQL",
    "OpenAI",
    "GPT",
    "Stripe",
  ],
  authors: [
    {
      name: "Yaseen Mustapha",
      url: "https://github.com/yaseenmustapha",
    },
  ],
  creator: "Yaseen Mustapha",
  publisher: "Yaseen Mustapha",
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
              <Typography variant="h6" component="div">
                MUI AppBar Component
              </Typography>
            </Toolbar>
          </AppBar>
          {children}
        </ProvidersWrapper>
      </body>
    </html>
  );
}