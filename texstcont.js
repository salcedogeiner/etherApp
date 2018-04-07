Web3 = require('web3')
web3 = new Web3(new Web3.providers.HttpProvider("http://ritaportal.udistrital.edu.co:10141"));
var contract_abidefinition ='[{"constant": false,"inputs": [{"name": "doc","type": "bytes32[]"}],"name": "setDocument","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "x","type": "bytes32"}],"name": "bytes32ToString","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "countDocuments","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "documentAccts","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "_address","type": "string"}],"name": "getDocument","outputs": [{"name": "","type": "string"},{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "getDocuments","outputs": [{"name": "","type": "string[]"}],"payable": false,"stateMutability": "view","type": "function"}]';
var  abiDefinition= JSON.parse(contract_abidefinition);
var    contract = web3.eth.contract(abiDefinition);
var    instance = contract.at("0x0e735ddca97006a37974c9d7c2cc52422002bc02");
console.log(instance);
var account=web3.eth.coinbase;
var password="password"
web3.personal.unlockAccount(account,password);
var    txnObject = {
    from: web3.eth.coinbase,
    gas: 22186
}

​var some = new Uint8Array(100);
some = [1,2];
console.log(some);

var numdocs = instance.setDocument(some);
console.log(numdocs);
