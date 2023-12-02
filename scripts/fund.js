const { getNamedAccounts, ethers } = require('hardhat')

const main = async () => {
    const deployer = (await getNamedAccounts()).deployer
    const fundMe = await ethers.getContract('FundMe', deployer)
    console.log('Funding contract..')
    const transactionResponse = await fundMe.fund({
        value: ethers.parseEther('0.1'),
    })
    await transactionResponse.wait(1)
    console.log('Funded!')
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })
