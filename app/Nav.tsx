import { useFlags } from 'launchdarkly-react-client-sdk';
import AppBar from '@material-ui/core/AppBar';
// All your other imports (React, useState, session, switch etc)

// ICONS AND FUNCTION DECLARATIONS (The Sun and Moon Icons and all your hooks and states)

export default function Nav() {
  // ... all your hooks.

  const { useAppBar } = useFlags();
  
  // rest of Nav function...

  return useAppBar
    ? <AppBar /* AppBar Props and children here... */ />
    : (
      <Navbar onMenuOpenChange={setIsMenuOpen} className="mt-2">
        {/* Rest of your Navbar code */}
      </Navbar>
    );
}