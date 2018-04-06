Web3 = require('web3')
web3 = new Web3(new Web3.providers.HttpProvider("http://ritaportal.udistrital.edu.co:10141"));
var contract_abidefinition ='[{"constant": true,"inputs": [],"name": "countDocuments","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "documentAccts","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "_address","type": "address"}],"name": "getDocument","outputs": [{"name": "","type": "address"},{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_address","type": "address"},{"name": "_Name","type": "string"}],"name": "setDocument","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "getDocuments","outputs": [{"name": "","type": "address[]"}],"payable": false,"stateMutability": "view","type": "function"}]';
var  abiDefinition= JSON.parse(contract_abidefinition);
var    contract = web3.eth.contract(abiDefinition);
var    instance = contract.at("0x284c736cec1649a09682ad1053d54830a15b6c91");
console.log(instance);
var account=web3.eth.coinbase;
var password="password"
web3.personal.unlockAccount(account,password);
var    txnObject = {
    from: web3.eth.coinbase,
    gas: 22186
}
var numdocs=instance.countDocuments.call();
console.log(numdocs);
