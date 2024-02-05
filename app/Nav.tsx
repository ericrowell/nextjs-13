export default function Nav() {
  const { data: session, status } = useSession();
  const { user } = session || {};
  const isSubscribed = user?.subscriptionStatus === "active" || false;
  const segment = useSelectedLayoutSegment();
  const { theme, setTheme } = useTheme();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton 
          edge="start" 
          color="inherit" 
          aria-label="menu"
        >
          Your logo
        </IconButton>
        <Typography variant="h6" >
          Page Title
        </Typography>
        <Switch
          checked={theme === "dark"}
          onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
        {session ? (
          <>
            {isSubscribed ? (
              // Show a badge for subscribed user
            ) : user?.image ? (
              // Show Avatar with user image 
            ) : (
              // Show Avatar with first letter of user name 
            )}
            <Button color="inherit" onClick={()=>signOut()}>Sign Out</Button>
          </>
        ) : (
          <Button color="inherit" onClick={() => signIn()}>
            {status && status === "loading" ? (
              // Show Spinner while loading
            ) : (
              "Login"
            )}
          </Button>
        )}
      </Toolbar>
      <Toolbar>
        // Add other links or details 
      </Toolbar>
    </AppBar>
  );
}