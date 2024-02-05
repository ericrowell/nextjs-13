import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

//...

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
            aria-label="open drawer"
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Next.js 13 Demo App
          </Typography>

          <div>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            {session ? (
              <>
                {isSubscribed ? (
                  <IconButton color="inherit">
                    <Badge badgeContent="PRO" color="primary">
                      {user?.image ? (
                        <Avatar src={user.image as string} />
                      ) : (
                        <Avatar name={user?.name?.charAt(0) as string} />
                      )}
                    </Badge>
                  </IconButton>
                ) : user?.image ? (
                  <IconButton color="inherit">
                    <Avatar src={user.image as string} />
                  </IconButton>
                ) : (
                  <IconButton color="inherit">
                    <Avatar name={user?.name?.charAt(0) as string} />
                  </IconButton>
                )}
                <Button variant="contained" onClick={() => signOut()}>
                  Sign out
                </Button>
              </>
            ) : (
              <MenuItem onClick={signIn}>Login</MenuItem>
            )}
          </div>

        </Toolbar>

      <Menu
        id="menu-appbar"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      >
        <MenuItem onClick={() => {}}>Home</MenuItem>
        <MenuItem onClick={() => {}}>Posts</MenuItem>
        <MenuItem onClick={() => {}}>Subscribe</MenuItem>
      </Menu>
    </AppBar>
  );
}