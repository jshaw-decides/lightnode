# Lightnode

A Fastify server running the Warp SDK.

This also shows how to deploy SSM params (in this case, deployed via `Core` stack) that can be used in other stacks.

## Usage


`npm i`

`npm run launch` (this assumes the current shell has AWS credentials)

This will deploy the server in your aws account.  The service should have a test environment variable in it's environment.