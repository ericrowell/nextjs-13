import React from 'react';
import { LDProvider } from 'launchdarkly-react-client-sdk';

const App = () => (
  <LDProvider apiKey='YOUR_CLIENT_SIDE_KEY' user={ user }>
    <YourApp />
  </LDProvider>
);

export default App;