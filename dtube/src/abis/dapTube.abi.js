export const CONTRACT_ABI = {
  "contractName": "DapTube",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "videoCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "videos",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "src",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "title",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "videoLength",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_src",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_title",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_description",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_videoLength",
          "type": "string"
        }
      ],
      "name": "addVideo",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.16+commit.9c3226ce\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[{\"internalType\":\"string\",\"name\":\"_src\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_title\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_description\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_videoLength\",\"type\":\"string\"}],\"name\":\"addVideo\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"videoCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"videos\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"src\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"videoLength\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"project:/contracts/DapTube.sol\":\"DapTube\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/DapTube.sol\":{\"keccak256\":\"0xe0d108db91153addc3ec302a0e40aad879f0cfc45a85300cf8c5c5e5979cb4c7\",\"urls\":[\"bzz-raw://f9d7528b39027466686d7bce32454c5f909174f725c893ffa8c50512103c3149\",\"dweb:/ipfs/QmVU9J35MV5efrxS4P6WhWgYPQEbZdqdDmhA8Yq5J7BNWH\"]}},\"version\":1}",
  "bytecode": "0x6080604052600080556040518060400160405280600781526020017f446170547562650000000000000000000000000000000000000000000000000081525060019080519060200190610053929190610066565b5034801561006057600080fd5b5061010b565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100a757805160ff19168380011785556100d5565b828001600101855582156100d5579182015b828111156100d45782518255916020019190600101906100b9565b5b5090506100e291906100e6565b5090565b61010891905b808211156101045760008160009055506001016100ec565b5090565b90565b610b098061011a6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806306fdde0314610051578063309ebfb9146100d4578063c61b5f4c14610354578063e6821bf514610372575b600080fd5b610059610597565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561009957808201518184015260208101905061007e565b50505050905090810190601f1680156100c65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610352600480360360808110156100ea57600080fd5b810190808035906020019064010000000081111561010757600080fd5b82018360208201111561011957600080fd5b8035906020019184600183028401116401000000008311171561013b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561019e57600080fd5b8201836020820111156101b057600080fd5b803590602001918460018302840111640100000000831117156101d257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561023557600080fd5b82018360208201111561024757600080fd5b8035906020019184600183028401116401000000008311171561026957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156102cc57600080fd5b8201836020820111156102de57600080fd5b8035906020019184600183028401116401000000008311171561030057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610635565b005b61035c61076d565b6040518082815260200191505060405180910390f35b61039e6004803603602081101561038857600080fd5b8101908080359060200190929190505050610773565b60405180878152602001806020018060200180602001806020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200185810385528a818151815260200191508051906020019080838360005b83811015610422578082015181840152602081019050610407565b50505050905090810190601f16801561044f5780820380516001836020036101000a031916815260200191505b50858103845289818151815260200191508051906020019080838360005b8381101561048857808201518184015260208101905061046d565b50505050905090810190601f1680156104b55780820380516001836020036101000a031916815260200191505b50858103835288818151815260200191508051906020019080838360005b838110156104ee5780820151818401526020810190506104d3565b50505050905090810190601f16801561051b5780820380516001836020036101000a031916815260200191505b50858103825287818151815260200191508051906020019080838360005b83811015610554578082015181840152602081019050610539565b50505050905090810190601f1680156105815780820380516001836020036101000a031916815260200191505b509a505050505050505050505060405180910390f35b60018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561062d5780601f106106025761010080835404028352916020019161062d565b820191906000526020600020905b81548152906001019060200180831161061057829003601f168201915b505050505081565b60008081548092919060010191905055506040518060c0016040528060005481526020018581526020018481526020018381526020018281526020013373ffffffffffffffffffffffffffffffffffffffff1681525060026000805481526020019081526020016000206000820151816000015560208201518160010190805190602001906106c5929190610a2f565b5060408201518160020190805190602001906106e2929190610a2f565b5060608201518160030190805190602001906106ff929190610a2f565b50608082015181600401908051906020019061071c929190610a2f565b5060a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555090505050505050565b60005481565b6002602052806000526040600020600091509050806000015490806001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108255780601f106107fa57610100808354040283529160200191610825565b820191906000526020600020905b81548152906001019060200180831161080857829003601f168201915b505050505090806002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108c35780601f10610898576101008083540402835291602001916108c3565b820191906000526020600020905b8154815290600101906020018083116108a657829003601f168201915b505050505090806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109615780601f1061093657610100808354040283529160200191610961565b820191906000526020600020905b81548152906001019060200180831161094457829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109ff5780601f106109d4576101008083540402835291602001916109ff565b820191906000526020600020905b8154815290600101906020018083116109e257829003601f168201915b5050505050908060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905086565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610a7057805160ff1916838001178555610a9e565b82800160010185558215610a9e579182015b82811115610a9d578251825591602001919060010190610a82565b5b509050610aab9190610aaf565b5090565b610ad191905b80821115610acd576000816000905550600101610ab5565b5090565b9056fea265627a7a72315820157208512ecf580887d5cb4d88cbe91612f828aa1f2c020f553c7466d119ed7164736f6c63430005100032",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c806306fdde0314610051578063309ebfb9146100d4578063c61b5f4c14610354578063e6821bf514610372575b600080fd5b610059610597565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561009957808201518184015260208101905061007e565b50505050905090810190601f1680156100c65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610352600480360360808110156100ea57600080fd5b810190808035906020019064010000000081111561010757600080fd5b82018360208201111561011957600080fd5b8035906020019184600183028401116401000000008311171561013b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561019e57600080fd5b8201836020820111156101b057600080fd5b803590602001918460018302840111640100000000831117156101d257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561023557600080fd5b82018360208201111561024757600080fd5b8035906020019184600183028401116401000000008311171561026957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156102cc57600080fd5b8201836020820111156102de57600080fd5b8035906020019184600183028401116401000000008311171561030057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610635565b005b61035c61076d565b6040518082815260200191505060405180910390f35b61039e6004803603602081101561038857600080fd5b8101908080359060200190929190505050610773565b60405180878152602001806020018060200180602001806020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200185810385528a818151815260200191508051906020019080838360005b83811015610422578082015181840152602081019050610407565b50505050905090810190601f16801561044f5780820380516001836020036101000a031916815260200191505b50858103845289818151815260200191508051906020019080838360005b8381101561048857808201518184015260208101905061046d565b50505050905090810190601f1680156104b55780820380516001836020036101000a031916815260200191505b50858103835288818151815260200191508051906020019080838360005b838110156104ee5780820151818401526020810190506104d3565b50505050905090810190601f16801561051b5780820380516001836020036101000a031916815260200191505b50858103825287818151815260200191508051906020019080838360005b83811015610554578082015181840152602081019050610539565b50505050905090810190601f1680156105815780820380516001836020036101000a031916815260200191505b509a505050505050505050505060405180910390f35b60018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561062d5780601f106106025761010080835404028352916020019161062d565b820191906000526020600020905b81548152906001019060200180831161061057829003601f168201915b505050505081565b60008081548092919060010191905055506040518060c0016040528060005481526020018581526020018481526020018381526020018281526020013373ffffffffffffffffffffffffffffffffffffffff1681525060026000805481526020019081526020016000206000820151816000015560208201518160010190805190602001906106c5929190610a2f565b5060408201518160020190805190602001906106e2929190610a2f565b5060608201518160030190805190602001906106ff929190610a2f565b50608082015181600401908051906020019061071c929190610a2f565b5060a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555090505050505050565b60005481565b6002602052806000526040600020600091509050806000015490806001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108255780601f106107fa57610100808354040283529160200191610825565b820191906000526020600020905b81548152906001019060200180831161080857829003601f168201915b505050505090806002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108c35780601f10610898576101008083540402835291602001916108c3565b820191906000526020600020905b8154815290600101906020018083116108a657829003601f168201915b505050505090806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109615780601f1061093657610100808354040283529160200191610961565b820191906000526020600020905b81548152906001019060200180831161094457829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109ff5780601f106109d4576101008083540402835291602001916109ff565b820191906000526020600020905b8154815290600101906020018083116109e257829003601f168201915b5050505050908060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905086565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610a7057805160ff1916838001178555610a9e565b82800160010185558215610a9e579182015b82811115610a9d578251825591602001919060010190610a82565b5b509050610aab9190610aaf565b5090565b610ad191905b80821115610acd576000816000905550600101610ab5565b5090565b9056fea265627a7a72315820157208512ecf580887d5cb4d88cbe91612f828aa1f2c020f553c7466d119ed7164736f6c63430005100032",
  "sourceMap": "53:727:0:-;;;119:1;94:26;;126:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;53:727;8:9:-1;5:2;;;30:1;27;20:12;5:2;53:727:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "53:727:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;53:727:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;126:30;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;126:30:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;488:290;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;488:290:0;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;488:290:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;488:290:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;488:290:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;488:290:0;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;488:290:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;488:290:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;488:290:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;488:290:0;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;488:290:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;488:290:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;488:290:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;488:290:0;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;488:290:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;488:290:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;488:290:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;488:290:0;;;;;;;;;;;;;;;:::i;:::-;;94:26;;;:::i;:::-;;;;;;;;;;;;;;;;;;;162:36;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;162:36:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;162:36:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;162:36:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;162:36:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;162:36:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;126:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;488:290::-;622:10;;:12;;;;;;;;;;;;;700:71;;;;;;;;706:10;;700:71;;;;718:4;700:71;;;;724:6;700:71;;;;732:12;700:71;;;;746:12;700:71;;;;760:10;700:71;;;;;679:6;:18;686:10;;679:18;;;;;;;;;;;:92;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;488:290;;;;:::o;94:26::-;;;;:::o;162:36::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;53:727::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.5.0;\n// pragma solidity >=0.8.0;\n\ncontract DapTube {\n\n    // variables\n    uint public videoCount = 0;\n    string public name = 'DapTube';\n    mapping(uint => Video) public videos;\n\n    // video model\n    struct Video {\n        uint id;\n        string src;\n        string title;\n        string description;\n        string videoLength;\n        address owner;\n    }\n\n    // run on smart contruct deplyed\n    // construction () public {}\n\n    // save video blockchain\n    function addVideo(string memory _src, string memory _title, string memory _description, string memory _videoLength ) public {\n        videoCount++;\n\n        // save video to contract\n        videos[videoCount] = Video(videoCount, _src, _title, _description, _videoLength, msg.sender);\n    }\n}",
  "sourcePath": "/Users/langfordquarshie/dapps/DTube/contracts/contracts/DapTube.sol",
  "ast": {
    "absolutePath": "project:/contracts/DapTube.sol",
    "exportedSymbols": {
      "DapTube": [
        54
      ]
    },
    "id": 55,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 54,
        "linearizedBaseContracts": [
          54
        ],
        "name": "DapTube",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 4,
            "name": "videoCount",
            "nodeType": "VariableDeclaration",
            "scope": 54,
            "src": "94:26:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 2,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "94:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30",
              "id": 3,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "119:1:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 7,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 54,
            "src": "126:30:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 5,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "126:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "44617054756265",
              "id": 6,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "147:9:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_8bae8c7a55d6a8d14cd82b76ee7f5e0ccab7152f41ee1948e79d04300d3cc85e",
                "typeString": "literal_string \"DapTube\""
              },
              "value": "DapTube"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 11,
            "name": "videos",
            "nodeType": "VariableDeclaration",
            "scope": 54,
            "src": "162:36:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Video_$24_storage_$",
              "typeString": "mapping(uint256 => struct DapTube.Video)"
            },
            "typeName": {
              "id": 10,
              "keyType": {
                "id": 8,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "170:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "162:22:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Video_$24_storage_$",
                "typeString": "mapping(uint256 => struct DapTube.Video)"
              },
              "valueType": {
                "contractScope": null,
                "id": 9,
                "name": "Video",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 24,
                "src": "178:5:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Video_$24_storage_ptr",
                  "typeString": "struct DapTube.Video"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "canonicalName": "DapTube.Video",
            "id": 24,
            "members": [
              {
                "constant": false,
                "id": 13,
                "name": "id",
                "nodeType": "VariableDeclaration",
                "scope": 24,
                "src": "247:7:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 12,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "247:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 15,
                "name": "src",
                "nodeType": "VariableDeclaration",
                "scope": 24,
                "src": "264:10:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 14,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "264:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 17,
                "name": "title",
                "nodeType": "VariableDeclaration",
                "scope": 24,
                "src": "284:12:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 16,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "284:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 19,
                "name": "description",
                "nodeType": "VariableDeclaration",
                "scope": 24,
                "src": "306:18:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 18,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "306:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 21,
                "name": "videoLength",
                "nodeType": "VariableDeclaration",
                "scope": 24,
                "src": "334:18:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 20,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "334:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 23,
                "name": "owner",
                "nodeType": "VariableDeclaration",
                "scope": 24,
                "src": "362:13:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 22,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "362:7:0",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Video",
            "nodeType": "StructDefinition",
            "scope": 54,
            "src": "224:158:0",
            "visibility": "public"
          },
          {
            "body": {
              "id": 52,
              "nodeType": "Block",
              "src": "612:166:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 36,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "622:12:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 35,
                      "name": "videoCount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4,
                      "src": "622:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 37,
                  "nodeType": "ExpressionStatement",
                  "src": "622:12:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 50,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 38,
                        "name": "videos",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11,
                        "src": "679:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Video_$24_storage_$",
                          "typeString": "mapping(uint256 => struct DapTube.Video storage ref)"
                        }
                      },
                      "id": 40,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 39,
                        "name": "videoCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4,
                        "src": "686:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "679:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Video_$24_storage",
                        "typeString": "struct DapTube.Video storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 42,
                          "name": "videoCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4,
                          "src": "706:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 43,
                          "name": "_src",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26,
                          "src": "718:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 44,
                          "name": "_title",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28,
                          "src": "724:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 45,
                          "name": "_description",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 30,
                          "src": "732:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 46,
                          "name": "_videoLength",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32,
                          "src": "746:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 47,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 69,
                            "src": "760:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 48,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "760:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        ],
                        "id": 41,
                        "name": "Video",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24,
                        "src": "700:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Video_$24_storage_ptr_$",
                          "typeString": "type(struct DapTube.Video storage pointer)"
                        }
                      },
                      "id": 49,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "700:71:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Video_$24_memory",
                        "typeString": "struct DapTube.Video memory"
                      }
                    },
                    "src": "679:92:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Video_$24_storage",
                      "typeString": "struct DapTube.Video storage ref"
                    }
                  },
                  "id": 51,
                  "nodeType": "ExpressionStatement",
                  "src": "679:92:0"
                }
              ]
            },
            "documentation": null,
            "id": 53,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addVideo",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 33,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26,
                  "name": "_src",
                  "nodeType": "VariableDeclaration",
                  "scope": 53,
                  "src": "506:18:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 25,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "506:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28,
                  "name": "_title",
                  "nodeType": "VariableDeclaration",
                  "scope": 53,
                  "src": "526:20:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "526:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 30,
                  "name": "_description",
                  "nodeType": "VariableDeclaration",
                  "scope": 53,
                  "src": "548:26:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "548:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32,
                  "name": "_videoLength",
                  "nodeType": "VariableDeclaration",
                  "scope": 53,
                  "src": "576:26:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "576:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "505:99:0"
            },
            "returnParameters": {
              "id": 34,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "612:0:0"
            },
            "scope": 54,
            "src": "488:290:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 55,
        "src": "53:727:0"
      }
    ],
    "src": "0:780:0"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "project:/contracts/DapTube.sol",
      "exportedSymbols": {
        "DapTube": [
          54
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.5",
            ".0"
          ]
        },
        "id": 1,
        "name": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            54
          ],
          "name": "DapTube",
          "scope": 55
        },
        "children": [
          {
            "attributes": {
              "constant": false,
              "name": "videoCount",
              "scope": 54,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 2,
                "name": "ElementaryTypeName",
                "src": "94:4:0"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "30",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "number",
                  "type": "int_const 0",
                  "value": "0"
                },
                "id": 3,
                "name": "Literal",
                "src": "119:1:0"
              }
            ],
            "id": 4,
            "name": "VariableDeclaration",
            "src": "94:26:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "name",
              "scope": 54,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "string",
                  "type": "string"
                },
                "id": 5,
                "name": "ElementaryTypeName",
                "src": "126:6:0"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "44617054756265",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "string",
                  "type": "literal_string \"DapTube\"",
                  "value": "DapTube"
                },
                "id": 6,
                "name": "Literal",
                "src": "147:9:0"
              }
            ],
            "id": 7,
            "name": "VariableDeclaration",
            "src": "126:30:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "videos",
              "scope": 54,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(uint256 => struct DapTube.Video)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(uint256 => struct DapTube.Video)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 8,
                    "name": "ElementaryTypeName",
                    "src": "170:4:0"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Video",
                      "referencedDeclaration": 24,
                      "type": "struct DapTube.Video"
                    },
                    "id": 9,
                    "name": "UserDefinedTypeName",
                    "src": "178:5:0"
                  }
                ],
                "id": 10,
                "name": "Mapping",
                "src": "162:22:0"
              }
            ],
            "id": 11,
            "name": "VariableDeclaration",
            "src": "162:36:0"
          },
          {
            "attributes": {
              "canonicalName": "DapTube.Video",
              "name": "Video",
              "scope": 54,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "id",
                  "scope": 24,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 12,
                    "name": "ElementaryTypeName",
                    "src": "247:4:0"
                  }
                ],
                "id": 13,
                "name": "VariableDeclaration",
                "src": "247:7:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "src",
                  "scope": 24,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "string",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string"
                    },
                    "id": 14,
                    "name": "ElementaryTypeName",
                    "src": "264:6:0"
                  }
                ],
                "id": 15,
                "name": "VariableDeclaration",
                "src": "264:10:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "title",
                  "scope": 24,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "string",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string"
                    },
                    "id": 16,
                    "name": "ElementaryTypeName",
                    "src": "284:6:0"
                  }
                ],
                "id": 17,
                "name": "VariableDeclaration",
                "src": "284:12:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "description",
                  "scope": 24,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "string",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string"
                    },
                    "id": 18,
                    "name": "ElementaryTypeName",
                    "src": "306:6:0"
                  }
                ],
                "id": 19,
                "name": "VariableDeclaration",
                "src": "306:18:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "videoLength",
                  "scope": 24,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "string",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string"
                    },
                    "id": 20,
                    "name": "ElementaryTypeName",
                    "src": "334:6:0"
                  }
                ],
                "id": 21,
                "name": "VariableDeclaration",
                "src": "334:18:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "owner",
                  "scope": 24,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "address",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "stateMutability": "nonpayable",
                      "type": "address"
                    },
                    "id": 22,
                    "name": "ElementaryTypeName",
                    "src": "362:7:0"
                  }
                ],
                "id": 23,
                "name": "VariableDeclaration",
                "src": "362:13:0"
              }
            ],
            "id": 24,
            "name": "StructDefinition",
            "src": "224:158:0"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "addVideo",
              "scope": 54,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_src",
                      "scope": 53,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 25,
                        "name": "ElementaryTypeName",
                        "src": "506:6:0"
                      }
                    ],
                    "id": 26,
                    "name": "VariableDeclaration",
                    "src": "506:18:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_title",
                      "scope": 53,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 27,
                        "name": "ElementaryTypeName",
                        "src": "526:6:0"
                      }
                    ],
                    "id": 28,
                    "name": "VariableDeclaration",
                    "src": "526:20:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_description",
                      "scope": 53,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 29,
                        "name": "ElementaryTypeName",
                        "src": "548:6:0"
                      }
                    ],
                    "id": 30,
                    "name": "VariableDeclaration",
                    "src": "548:26:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_videoLength",
                      "scope": 53,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 31,
                        "name": "ElementaryTypeName",
                        "src": "576:6:0"
                      }
                    ],
                    "id": 32,
                    "name": "VariableDeclaration",
                    "src": "576:26:0"
                  }
                ],
                "id": 33,
                "name": "ParameterList",
                "src": "505:99:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 34,
                "name": "ParameterList",
                "src": "612:0:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "++",
                          "prefix": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4,
                              "type": "uint256",
                              "value": "videoCount"
                            },
                            "id": 35,
                            "name": "Identifier",
                            "src": "622:10:0"
                          }
                        ],
                        "id": 36,
                        "name": "UnaryOperation",
                        "src": "622:12:0"
                      }
                    ],
                    "id": 37,
                    "name": "ExpressionStatement",
                    "src": "622:12:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "struct DapTube.Video storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "struct DapTube.Video storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 11,
                                  "type": "mapping(uint256 => struct DapTube.Video storage ref)",
                                  "value": "videos"
                                },
                                "id": 38,
                                "name": "Identifier",
                                "src": "679:6:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4,
                                  "type": "uint256",
                                  "value": "videoCount"
                                },
                                "id": 39,
                                "name": "Identifier",
                                "src": "686:10:0"
                              }
                            ],
                            "id": 40,
                            "name": "IndexAccess",
                            "src": "679:18:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": true,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "struct DapTube.Video memory",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    },
                                    {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    },
                                    {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    },
                                    {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    },
                                    {
                                      "typeIdentifier": "t_address_payable",
                                      "typeString": "address payable"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 24,
                                  "type": "type(struct DapTube.Video storage pointer)",
                                  "value": "Video"
                                },
                                "id": 41,
                                "name": "Identifier",
                                "src": "700:5:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4,
                                  "type": "uint256",
                                  "value": "videoCount"
                                },
                                "id": 42,
                                "name": "Identifier",
                                "src": "706:10:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 26,
                                  "type": "string memory",
                                  "value": "_src"
                                },
                                "id": 43,
                                "name": "Identifier",
                                "src": "718:4:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 28,
                                  "type": "string memory",
                                  "value": "_title"
                                },
                                "id": 44,
                                "name": "Identifier",
                                "src": "724:6:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 30,
                                  "type": "string memory",
                                  "value": "_description"
                                },
                                "id": 45,
                                "name": "Identifier",
                                "src": "732:12:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 32,
                                  "type": "string memory",
                                  "value": "_videoLength"
                                },
                                "id": 46,
                                "name": "Identifier",
                                "src": "746:12:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address payable"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 69,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 47,
                                    "name": "Identifier",
                                    "src": "760:3:0"
                                  }
                                ],
                                "id": 48,
                                "name": "MemberAccess",
                                "src": "760:10:0"
                              }
                            ],
                            "id": 49,
                            "name": "FunctionCall",
                            "src": "700:71:0"
                          }
                        ],
                        "id": 50,
                        "name": "Assignment",
                        "src": "679:92:0"
                      }
                    ],
                    "id": 51,
                    "name": "ExpressionStatement",
                    "src": "679:92:0"
                  }
                ],
                "id": 52,
                "name": "Block",
                "src": "612:166:0"
              }
            ],
            "id": 53,
            "name": "FunctionDefinition",
            "src": "488:290:0"
          }
        ],
        "id": 54,
        "name": "ContractDefinition",
        "src": "53:727:0"
      }
    ],
    "id": 55,
    "name": "SourceUnit",
    "src": "0:780:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.16+commit.9c3226ce.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0xEc0a9dE6C6644A0F3EE3f3Eb9460Cd59C9fc623E",
      "transactionHash": "0xa13091660ea77c1bf96af622a113fcb865947ee26d2180b70d0ec402944883b3"
    }
  },
  "schemaVersion": "3.4.4",
  "updatedAt": "2021-12-27T10:18:01.511Z",
  "networkType": "ethereum",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}