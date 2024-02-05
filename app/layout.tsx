import ProvidersWrapper from "./ProvidersWrapper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
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
              <Typography variant="h6">
                Next.js 13 Demo App
              </Typography>
            </Toolbar>
          </AppBar>
          {children}
        </ProvidersWrapper>
      </body>
    </html>
  );
}