import Async from '../util/hyper-async.js';

const { fromPromise } = Async;
/**
 * queryStringParameters
 * - id: contract id
 * - validity: boolean
 * - errorMessages: boolean
 */

const main = (warp) => {
  return async (request, reply) => {
    return Async.of({ request, warp }).chain(fromPromise(read)).toPromise();
  };
};

const read = async ({ request, warp }) => {
  console.log('REQUEST===============', request.query);
  const result = await warp
    .contract(request.query.id)
    .setEvaluationOptions({
      remoteStateSyncEnabled: false,
      unsafeClient: 'skip',
      allowBigInt: true,
      internalWrites: true,
    })
    .readState();

  return {
    sortKey: result.sortKey,
    state: result.cachedValue.state,
    validity: result.cachedValue.validity,
    errorMessages: result.cachedValue.errorMessages,
    status: 'evaluated',
  };
};

export default main;
