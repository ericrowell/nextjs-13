import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

export default function Nav() {

  ...

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Next.js 13 Demo App
        </Typography>
        <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" color="inherit">
                 {theme === "dark" ? <MoonIcon /> : <SunIcon />}
        </IconButton>
        {session ? (
          <>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" color="inherit">
              {isSubscribed ? (
                ...
              ) : user?.image ? (
                ...
              ) : (
                ...
              )}
            </IconButton>
            <Button variant="light" onClick={() => signOut()}>
              Sign out
            </Button>
          </>
        ) : (
          <Button variant="flat" onClick={() => signIn()} color="primary">
            {status && status === "loading" ? (
              <Spinner color="primary" size="sm" />
            ) : (
              "Login"
            )}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}