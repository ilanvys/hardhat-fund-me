require('@nomiclabs/hardhat-ethers')
require('@nomicfoundation/hardhat-toolbox')
require('hardhat-deploy')
require('dotenv').config()

module.exports = {
    solidity: {
        compilers: [{ version: '0.8.19' }, { version: '0.6.6' }],
    },
    defaultNetwork: 'hardhat',
    networks: {
        hardhat: {},
        sepolia: {
            url: process.env.SEPOLIA_RPC_URL,
            accounts: [process.env.PRIVATE_KEY],
            chainId: 11155111,
        },
        localhost: {
            url: 'http://127.0.0.1:8545/',
            chainId: 31337,
        },
    },
    namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
            1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
        },
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        outputFile: 'gas-report.txt',
        noColors: true,
        currency: 'USD',
        coinmarketcap: process.env.COIN_MARKET_CAP,
    },
    mocha: {
		timeout: 500000,
	},
}
