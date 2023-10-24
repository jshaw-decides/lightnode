import { WarpFactory } from 'warp-contracts';

const warp = WarpFactory.forMainnet();

const state = (
  await warp
    .contract('KTzTXT_ANmF84fWEKHzWURD1LWd9QaFR9yfYUwH2Lxw')
    .setEvaluationOptions({
      // remoteStateSyncSource: `http://light-light-1t0g5o1ief3ht-667529401.us-east-1.elb.amazonaws.com/contract`,
      // remoteStateSyncEnabled: false,
      internalWrites: true,
      allowBigInt: true,
      unsafeClient: 'skip',
    })
    .readState()
).cachedValue.state;

console.log('state', state);
