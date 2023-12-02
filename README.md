# FundMe Smart Contract

## Overview

This repository contains a smart contract written in Solidity for crowdfunding using Chainlink's price feed. The contract allows users to fund the project with Ether, with a minimum requirement in USD. The contract owner can withdraw the funds and manage the list of funders.

## Smart Contract Details

### FundMe.sol

The main smart contract file (`FundMe.sol`) defines the `FundMe` contract with the following functionalities:

- **fund():** Allows users to fund the project with Ether, ensuring a minimum USD requirement is met.
- **withdraw():** Allows the contract owner to withdraw the funds and reset the list of funders.
- **getVersion():** Retrieves the version of the ETH/USD price feed.
- **getOwner():** Retrieves the address of the contract owner.
- **getFunder(uint256 index):** Retrieves the address of a funder based on the index.
- **getAddressToAmountFunded(address funder):** Retrieves the amount funded by a specific funder.
- **getPriceFeed():** Retrieves the ETH/USD price feed contract address.

### PriceConverter.sol

The `PriceConverter` library is used internally to convert Ether amounts to USD based on the ETH/USD price feed.

## Getting Started

Follow these steps to get started with the project:

1. **Clone the repository:**
  ```bash
  git clone https://github.com/ilanvys/hardhat-fund-me.git
  ```
2. **Install dependencies:**
  ```bash
  cd hardhat-fund-me
  npm install
  ```
3. **Run tests:**
  ```bash
  npx hardhat test
  ```
4. **Deploy the smart contract:**
  ```bash
  npx hardhat deploy
  ```

## Acknowledgments
This project was created as part of the FreeCodeCamp tutorial.
