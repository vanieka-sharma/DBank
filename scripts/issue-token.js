const TokenForm = artifacts.require('TokenForm')

module.exports = async function(callback) {
  let tokenForm = await TokenForm.deployed()
  await tokenForm.issueTokens()
  // Code goes here...
  
  console.log("Tokens issued!")
  callback()
}