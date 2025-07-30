'use client';
import { Sandpack } from "";

export default function MiraPlayground() {
  return (
    <Sandpack
      template="react"
      files={{
        "/App.js": {
          code: `
import React from 'react';
import { MiraVerifier } from 'mira-sdk';

function App() {
  async function handleVerify() {
    const mira = new MiraVerifier({ apiKey: 'YOUR_TEST_KEY' });
    const result = await mira.verify();
    console.log(result);
  }

  return (
    <div>
      <h1>Mira SDK Test</h1>
      <button onClick={handleVerify}>Verify Me</button>
    </div>
  );
}

export default App;
`,
        },
      }}
      options={{
        showConsole: true,
        showNavigator: false,
        editorHeight: 400,
      }}
    />
  );
}
