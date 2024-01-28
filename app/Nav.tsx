function Nav({ flags }) {
  // ...
  
  if (flags["use-app-bar"]) {
    // Render MUI App Bar
  } else {
    // Render Navbar from NextUI
  }
  
  // ...
}

export default withLDConsumer()(Nav);