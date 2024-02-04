import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

// more code ...


export default function Nav() {

  // more code ...

  return (
    <AppBar position="static">
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
            </IconButton>
            <Typography variant="h6">
            Next.js 13 Demo App
            </Typography>
            {/* Add the rest of your Navbar items here */}
        </Toolbar>
    </AppBar>
  );
}