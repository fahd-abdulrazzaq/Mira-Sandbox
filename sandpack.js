
import { MiraVerifier } from 'mira-sdk';

async function verifyUser() {
  const mira = new MiraVerifier({ apiKey: 'YOUR_TEST_KEY' });
  const result = await mira.verify();
  console.log(result);
}


