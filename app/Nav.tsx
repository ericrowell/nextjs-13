export default function Nav() {
  const { data: session, status } = useSession();
  const { user } = session || {};
  const { theme, setTheme } = useTheme();
  
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Next.js 13 Demo App
        </Typography>
        <Switch
          checked={theme === "dark"}
          onChange={(e) => setTheme(theme === "dark" ? "light" : "dark")}
          icon={theme === "dark" ? <SunIcon /> : <MoonIcon />}
          color="default"
        />
        {session ? (
          <>
            {user?.image ? (
              <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
                <Avatar src={user.image as string} />
              </Badge>
            ) : (
              <Avatar>{user?.name?.charAt(0)}</Avatar>
            )}
            <Button color="inherit" onClick={() => signOut()}>
              Sign out
            </Button>
          </>
        ) : (
          <Button color="inherit" onClick={() => signIn()}>
            {status && status === "loading" ? (
              <CircularProgress color="inherit" size={20} />
            ) : (
              "Login"
            )}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}