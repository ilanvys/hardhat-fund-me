const { getNamedAccounts, ethers } = require('hardhat')

const main = async () => {
    const deployer = (await getNamedAccounts()).deployer
    const fundMe = await ethers.getContract('FundMe', deployer)
    console.log('Withdrawing contract..')
    const transactionResponse = await fundMe.withdraw()
    await transactionResponse.wait(1)
    console.log('Withdrawing done!')
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })
