const { deployments, ethers, getNamedAccounts, network } = require('hardhat')
const { assert, expect } = require('chai')

const { developmentChains } = require('../../helper-hardhat-config')

developmentChains.includes(network.name)
    ? describe.skip
    : describe('FundMe', async () => {
          let fundMe
          let deployer
          const sendValue = ethers.parseEther('1') // 1 ETH
          beforeEach(async () => {
              // const accounts = await ethers.getSigners()
              // const accountZero = accounts[0]
              deployer = (await getNamedAccounts()).deployer
              await deployments.fixture(['all'])
              fundMe = await ethers.getContract('FundMe', deployer)
          })

          it('allows people to fund and withdraw', async () => {
              await fundMe.fund({ value: sendValue })
              await fundMe.withdraw()
              const endBalance = await ethers.provider.getBalance(fundMe.target)
              assert.equal(endBalance.toString(), '0')
          })
      })
