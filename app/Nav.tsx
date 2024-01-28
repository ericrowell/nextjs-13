let useAppBar;

ldClient.on("ready", () => {
  useAppBar = ldClient.variation("use-app-bar", false);

  if (useAppBar) {
    // Use MUI App bar component
  } else {
    // Use NextUI Navbar component
  }
});