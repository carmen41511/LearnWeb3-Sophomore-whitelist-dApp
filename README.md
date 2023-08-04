# Build an NFT collection with a whitelist using Hardhat and Solidity

This project is part 1 of the project tutorial series by LearnWeb3DAO, build a simple solution of a whitelist dApp and allowing users to join the whitelist for a NFT Collection named Crypto Devs. 

Being on the whitelist will give early adopters guaranteed access to mint the NFT once the collection launches!

For the purposes of this tutorial, I maintain a whitelist where the first ten users who join can get in for free. Once they are on the whitelist, they can mint an NFT from the Crypto Devs collection for free, while everyone else must pay to mint it.

## Contracts
This project has two smart contracts:

- Whitelist.sol - This maintains the whitelist of up to 10 addresses. Users can add themselves to the whitelist using the addAddressToWhitelist() function.

- CryptoDevs.sol - This is the actual NFT contract that mints the Crypto Devs NFTs. It gets the whitelist contract address through its constructor and only allows whitelisted users to mint for free, while others have to pay 0.01 ETH.

## Deployment
The contracts are deployed to the Sepolia testnet using Hardhat and environment variables read from the .env file.

The deployment scripts are:

- scripts/deploy.js - Deploys the Whitelist.sol contract.

- scripts/deploy-nft.js - Deploys the CryptoDevs.sol contract, passing the address of the whitelist contract.

## Usage
The initial whitelisting was done manually on Etherscan by interacting with the whitelist contract.

Once the NFT contract was deployed, minting NFTs was tested:

- Whitelisted address minting for free

- Non-whitelisted address minting by paying 0.01 ETH.
