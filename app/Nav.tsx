import { AppBar, Badge, Toolbar, Typography, IconButton, MenuItem, Menu, Avatar } from '@mui/material';
import { useTheme } from "next-themes";
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';

export default function Nav() {
  const { data: session, status } = useSession();
  const { user } = session || {};
  const isSubscribed = user?.subscriptionStatus === "active" || false;
  const { theme, setTheme } = useTheme();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} color="inherit">
          {theme === "dark" ? <MoonIcon /> : <SunIcon />}
        </IconButton>
      </MenuItem>
      // Other menu items...
    </Menu>
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Next.js 13 Demo App
          </Typography>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>

          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
            onClick={handleMobileMenuOpen}
          >
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}