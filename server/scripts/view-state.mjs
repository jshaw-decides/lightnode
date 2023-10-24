import { WarpFactory, LoggerFactory } from 'warp-contracts';

const warp = WarpFactory.forMainnet();

LoggerFactory.INST.logLevel('none');

const input = {
  function: 'balance',
  target: '9x24zjvs9DA5zAz2DmqBWAg6XcxrrE-8w3EkpwRm4e4',
};

const interaction = await warp
  .contract('KTzTXT_ANmF84fWEKHzWURD1LWd9QaFR9yfYUwH2Lxw')
  .setEvaluationOptions({
    remoteStateSyncSource: `http://localhost:3333/contract`,
    remoteStateSyncEnabled: true,
    internalWrites: true,
    allowBigInt: true,
    unsafeClient: 'skip',
  })
  .viewState(input);

console.log('interaction', interaction.result);
