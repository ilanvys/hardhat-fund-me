const { network } = require('hardhat')
const {
    developmentChains,
    DECIMALS,
    INITIAL_ANSWER,
} = require('../helper-hardhat-config')

module.exports = async (hre) => {
    // hre = hardhat runtime env
    const { getNamedAccounts, deployments } = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    if (developmentChains.includes(network.name)) {
        log('Local netowrk detected. deploying mocks')
        await deploy('MockV3Aggregator', {
            contract: 'MockV3Aggregator',
            from: deployer,
            log: true,
            args: [DECIMALS, INITIAL_ANSWER],
        })

        log('Mocks deployed')
        log('---------------------------------------------')
    }
}

module.exports.tags = ['all', 'mocks']
