import logo from './logo.svg';
import './App.css';
import { LengthRequired } from 'http-errors';
 
function App() {
 
 async function clickHandler(e) {
 e.preventDefault(); 
 
 let result = await fetch("http://localhost:8000/");
 npm
 let stock = {};
 let json = await result.json();
 console.log(`Price: ${json.price}`);
 let abi = [
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "symbol",
				"type": "bytes4"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "volume",
				"type": "uint256"
			}
		],
		"name": "setStock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "symbol",
				"type": "bytes4"
			}
		],
		"name": "getStockPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "symbol",
				"type": "bytes4"
			}
		],
		"name": "getStockVolume",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
 }
 
 window.web3 = new Web3(Web3.currentProvider);
    const contract = window.web3.eth.contract(abi);
    const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138"
    const contractInstance = contract.at(contractAddress);

    contractInstance.methods.setStock([0x58, 0x59, 0x60], 15, 2000).send( { from: 0x5653Aeccd6b3bF0FDB3686cBa09C9F7A8f75aa45}).on ('receipt', ()=>{
    })
  }

  
 return (
 
 <div className="value">
 <button onClick={clickHandler}> Click me! </button>
 </div>
 );
}
 
export default App