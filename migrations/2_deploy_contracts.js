const DappToken = artifacts.require('DappToken')
const DaiToken = artifacts.require('DaiToken')
const TokenForm = artifacts.require('TokenForm')

module.exports = async function(deployer, network, accounts) {
    // Deploy Mock DAI Token
  await deployer.deploy(DaiToken)
  const daiToken = await DaiToken.deployed()

  // Deploy Dapp Token
  await deployer.deploy(DappToken)
  const dappToken = await DappToken.deployed()
  
   // Deploy TokenForm
   await deployer.deploy(TokenForm, dappToken.address, daiToken.address)
   const tokenForm = await TokenForm.deployed()
 
   // Transfer all tokens to TokenFarm (1 million)
   await dappToken.transfer(tokenForm.address, '1000000000000000000000000')
 
   // Transfer 100 Mock DAI tokens to investor
   await daiToken.transfer(accounts[1], '100000000000000000000')
}