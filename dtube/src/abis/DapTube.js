export const CONTRACT_ADDRESS = '0x7c238B9ac51fCE01FCDa6ffcCf603b56e70fA226'
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
      "constant": true,
      "inputs": [],
      "name": "videosCount",
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
        }
      ],
      "name": "addVideo",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.16+commit.9c3226ce\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[{\"internalType\":\"string\",\"name\":\"_src\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_title\",\"type\":\"string\"}],\"name\":\"addVideo\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"videos\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"src\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"videosCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"project:/contracts/DapTube.sol\":\"DapTube\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/DapTube.sol\":{\"keccak256\":\"0x2f48ac9c1753a47261e913625c347aca41e979c08f9311e457655fc980532855\",\"urls\":[\"bzz-raw://0902b5b3f4c8a026ff542c6d7e12c9efda0929053ad711ed23c6b3a609bff13f\",\"dweb:/ipfs/QmWEWmsB6sA1YFrZrueT3WidPZrLmCMCjSCNqLGD4K6tJU\"]}},\"version\":1}",
  "bytecode": "0x6080604052600080556040518060400160405280600781526020017f446170547562650000000000000000000000000000000000000000000000000081525060019080519060200190610053929190610066565b5034801561006057600080fd5b5061010b565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100a757805160ff19168380011785556100d5565b828001600101855582156100d5579182015b828111156100d45782518255916020019190600101906100b9565b5b5090506100e291906100e6565b5090565b61010891905b808211156101045760008160009055506001016100ec565b5090565b90565b61077f8061011a6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806306fdde03146100515780630dbd9bdc146100d4578063e6821bf514610226578063ef08523b14610373575b600080fd5b610059610391565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561009957808201518184015260208101905061007e565b50505050905090810190601f1680156100c65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610224600480360360408110156100ea57600080fd5b810190808035906020019064010000000081111561010757600080fd5b82018360208201111561011957600080fd5b8035906020019184600183028401116401000000008311171561013b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561019e57600080fd5b8201836020820111156101b057600080fd5b803590602001918460018302840111640100000000831117156101d257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061042f565b005b6102526004803603602081101561023c57600080fd5b810190808035906020019092919050505061051f565b6040518085815260200180602001806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838103835286818151815260200191508051906020019080838360005b838110156102ce5780820151818401526020810190506102b3565b50505050905090810190601f1680156102fb5780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b83811015610334578082015181840152602081019050610319565b50505050905090810190601f1680156103615780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b61037b61069f565b6040518082815260200191505060405180910390f35b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104275780601f106103fc57610100808354040283529160200191610427565b820191906000526020600020905b81548152906001019060200180831161040a57829003601f168201915b505050505081565b6000808154809291906001019190505550604051806080016040528060005481526020018381526020018281526020013373ffffffffffffffffffffffffffffffffffffffff1681525060026000805481526020019081526020016000206000820151816000015560208201518160010190805190602001906104b39291906106a5565b5060408201518160020190805190602001906104d09291906106a5565b5060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050505050565b6002602052806000526040600020600091509050806000015490806001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105d15780601f106105a6576101008083540402835291602001916105d1565b820191906000526020600020905b8154815290600101906020018083116105b457829003601f168201915b505050505090806002018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561066f5780601f106106445761010080835404028352916020019161066f565b820191906000526020600020905b81548152906001019060200180831161065257829003601f168201915b5050505050908060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905084565b60005481565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106106e657805160ff1916838001178555610714565b82800160010185558215610714579182015b828111156107135782518255916020019190600101906106f8565b5b5090506107219190610725565b5090565b61074791905b8082111561074357600081600090555060010161072b565b5090565b9056fea265627a7a723158202d56a149d339b5645a20b42b5fb1bb5f7e36f620f36a24275596858a09b1403864736f6c63430005100032",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c806306fdde03146100515780630dbd9bdc146100d4578063e6821bf514610226578063ef08523b14610373575b600080fd5b610059610391565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561009957808201518184015260208101905061007e565b50505050905090810190601f1680156100c65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610224600480360360408110156100ea57600080fd5b810190808035906020019064010000000081111561010757600080fd5b82018360208201111561011957600080fd5b8035906020019184600183028401116401000000008311171561013b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561019e57600080fd5b8201836020820111156101b057600080fd5b803590602001918460018302840111640100000000831117156101d257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061042f565b005b6102526004803603602081101561023c57600080fd5b810190808035906020019092919050505061051f565b6040518085815260200180602001806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838103835286818151815260200191508051906020019080838360005b838110156102ce5780820151818401526020810190506102b3565b50505050905090810190601f1680156102fb5780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b83811015610334578082015181840152602081019050610319565b50505050905090810190601f1680156103615780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b61037b61069f565b6040518082815260200191505060405180910390f35b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104275780601f106103fc57610100808354040283529160200191610427565b820191906000526020600020905b81548152906001019060200180831161040a57829003601f168201915b505050505081565b6000808154809291906001019190505550604051806080016040528060005481526020018381526020018281526020013373ffffffffffffffffffffffffffffffffffffffff1681525060026000805481526020019081526020016000206000820151816000015560208201518160010190805190602001906104b39291906106a5565b5060408201518160020190805190602001906104d09291906106a5565b5060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050505050565b6002602052806000526040600020600091509050806000015490806001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105d15780601f106105a6576101008083540402835291602001916105d1565b820191906000526020600020905b8154815290600101906020018083116105b457829003601f168201915b505050505090806002018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561066f5780601f106106445761010080835404028352916020019161066f565b820191906000526020600020905b81548152906001019060200180831161065257829003601f168201915b5050505050908060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905084565b60005481565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106106e657805160ff1916838001178555610714565b82800160010185558215610714579182015b828111156107135782518255916020019190600101906106f8565b5b5090506107219190610725565b5090565b61074791905b8082111561074357600081600090555060010161072b565b5090565b9056fea265627a7a723158202d56a149d339b5645a20b42b5fb1bb5f7e36f620f36a24275596858a09b1403864736f6c63430005100032",
  "sourceMap": "25:590:0:-;;;92:1;66:27;;99:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;25:590;8:9:-1;5:2;;;30:1;27;20:12;5:2;25:590:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "25:590:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;25:590:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;99:30;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;99:30:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;405:208;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;405:208:0;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;405:208:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;405:208:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;405:208:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;405:208:0;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;405:208:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;405:208:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;405:208:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;405:208:0;;;;;;;;;;;;;;;:::i;:::-;;135:36;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;135:36:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;135:36:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;135:36:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;66:27;;;:::i;:::-;;;;;;;;;;;;;;;;;;;99:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;405:208::-;482:11;;:13;;;;;;;;;;;;;562:44;;;;;;;;568:11;;562:44;;;;581:4;562:44;;;;587:6;562:44;;;;595:10;562:44;;;;;540:6;:19;547:11;;540:19;;;;;;;;;;;:66;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;405:208;;:::o;135:36::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;66:27::-;;;;:::o;25:590::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.5.0;\n\ncontract DapTube {\n\n    // variables\n    uint public videosCount = 0;\n    string public name = 'DapTube';\n    mapping(uint => Video) public videos;\n\n    // video model\n    struct Video {\n        uint id;\n        string src;\n        string title;\n        address owner;\n    }\n\n    // run on smart contruct deplyed\n    // construction () public {}\n\n    // save video blockchain\n    function addVideo(string memory _src, string memory _title) public {\n        videosCount++;\n\n        // save video to contract\n        videos[videosCount] = Video(videosCount, _src, _title, msg.sender);\n    }\n}",
  "sourcePath": "/Users/langfordquarshie/dapps/DTube/contracts/contracts/DapTube.sol",
  "ast": {
    "absolutePath": "project:/contracts/DapTube.sol",
    "exportedSymbols": {
      "DapTube": [
        44
      ]
    },
    "id": 45,
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
        "id": 44,
        "linearizedBaseContracts": [
          44
        ],
        "name": "DapTube",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 4,
            "name": "videosCount",
            "nodeType": "VariableDeclaration",
            "scope": 44,
            "src": "66:27:0",
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
              "src": "66:4:0",
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
              "src": "92:1:0",
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
            "scope": 44,
            "src": "99:30:0",
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
              "src": "99:6:0",
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
              "src": "120:9:0",
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
            "scope": 44,
            "src": "135:36:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Video_$20_storage_$",
              "typeString": "mapping(uint256 => struct DapTube.Video)"
            },
            "typeName": {
              "id": 10,
              "keyType": {
                "id": 8,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "143:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "135:22:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Video_$20_storage_$",
                "typeString": "mapping(uint256 => struct DapTube.Video)"
              },
              "valueType": {
                "contractScope": null,
                "id": 9,
                "name": "Video",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 20,
                "src": "151:5:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Video_$20_storage_ptr",
                  "typeString": "struct DapTube.Video"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "canonicalName": "DapTube.Video",
            "id": 20,
            "members": [
              {
                "constant": false,
                "id": 13,
                "name": "id",
                "nodeType": "VariableDeclaration",
                "scope": 20,
                "src": "220:7:0",
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
                  "src": "220:4:0",
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
                "scope": 20,
                "src": "237:10:0",
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
                  "src": "237:6:0",
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
                "scope": 20,
                "src": "257:12:0",
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
                  "src": "257:6:0",
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
                "name": "owner",
                "nodeType": "VariableDeclaration",
                "scope": 20,
                "src": "279:13:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 18,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "279:7:0",
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
            "scope": 44,
            "src": "197:102:0",
            "visibility": "public"
          },
          {
            "body": {
              "id": 42,
              "nodeType": "Block",
              "src": "472:141:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 28,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "482:13:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 27,
                      "name": "videosCount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4,
                      "src": "482:11:0",
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
                  "id": 29,
                  "nodeType": "ExpressionStatement",
                  "src": "482:13:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 40,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 30,
                        "name": "videos",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11,
                        "src": "540:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Video_$20_storage_$",
                          "typeString": "mapping(uint256 => struct DapTube.Video storage ref)"
                        }
                      },
                      "id": 32,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 31,
                        "name": "videosCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4,
                        "src": "547:11:0",
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
                      "src": "540:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Video_$20_storage",
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
                          "id": 34,
                          "name": "videosCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4,
                          "src": "568:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 35,
                          "name": "_src",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 22,
                          "src": "581:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 36,
                          "name": "_title",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 24,
                          "src": "587:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 37,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 59,
                            "src": "595:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 38,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "595:10:0",
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
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        ],
                        "id": 33,
                        "name": "Video",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20,
                        "src": "562:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Video_$20_storage_ptr_$",
                          "typeString": "type(struct DapTube.Video storage pointer)"
                        }
                      },
                      "id": 39,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "562:44:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Video_$20_memory",
                        "typeString": "struct DapTube.Video memory"
                      }
                    },
                    "src": "540:66:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Video_$20_storage",
                      "typeString": "struct DapTube.Video storage ref"
                    }
                  },
                  "id": 41,
                  "nodeType": "ExpressionStatement",
                  "src": "540:66:0"
                }
              ]
            },
            "documentation": null,
            "id": 43,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addVideo",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22,
                  "name": "_src",
                  "nodeType": "VariableDeclaration",
                  "scope": 43,
                  "src": "423:18:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 21,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "423:6:0",
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
                  "id": 24,
                  "name": "_title",
                  "nodeType": "VariableDeclaration",
                  "scope": 43,
                  "src": "443:20:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "443:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "422:42:0"
            },
            "returnParameters": {
              "id": 26,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "472:0:0"
            },
            "scope": 44,
            "src": "405:208:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 45,
        "src": "25:590:0"
      }
    ],
    "src": "0:615:0"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "project:/contracts/DapTube.sol",
      "exportedSymbols": {
        "DapTube": [
          44
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
            44
          ],
          "name": "DapTube",
          "scope": 45
        },
        "children": [
          {
            "attributes": {
              "constant": false,
              "name": "videosCount",
              "scope": 44,
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
                "src": "66:4:0"
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
                "src": "92:1:0"
              }
            ],
            "id": 4,
            "name": "VariableDeclaration",
            "src": "66:27:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "name",
              "scope": 44,
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
                "src": "99:6:0"
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
                "src": "120:9:0"
              }
            ],
            "id": 7,
            "name": "VariableDeclaration",
            "src": "99:30:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "videos",
              "scope": 44,
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
                    "src": "143:4:0"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Video",
                      "referencedDeclaration": 20,
                      "type": "struct DapTube.Video"
                    },
                    "id": 9,
                    "name": "UserDefinedTypeName",
                    "src": "151:5:0"
                  }
                ],
                "id": 10,
                "name": "Mapping",
                "src": "135:22:0"
              }
            ],
            "id": 11,
            "name": "VariableDeclaration",
            "src": "135:36:0"
          },
          {
            "attributes": {
              "canonicalName": "DapTube.Video",
              "name": "Video",
              "scope": 44,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "id",
                  "scope": 20,
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
                    "src": "220:4:0"
                  }
                ],
                "id": 13,
                "name": "VariableDeclaration",
                "src": "220:7:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "src",
                  "scope": 20,
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
                    "src": "237:6:0"
                  }
                ],
                "id": 15,
                "name": "VariableDeclaration",
                "src": "237:10:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "title",
                  "scope": 20,
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
                    "src": "257:6:0"
                  }
                ],
                "id": 17,
                "name": "VariableDeclaration",
                "src": "257:12:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "owner",
                  "scope": 20,
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
                    "id": 18,
                    "name": "ElementaryTypeName",
                    "src": "279:7:0"
                  }
                ],
                "id": 19,
                "name": "VariableDeclaration",
                "src": "279:13:0"
              }
            ],
            "id": 20,
            "name": "StructDefinition",
            "src": "197:102:0"
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
              "scope": 44,
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
                      "scope": 43,
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
                        "id": 21,
                        "name": "ElementaryTypeName",
                        "src": "423:6:0"
                      }
                    ],
                    "id": 22,
                    "name": "VariableDeclaration",
                    "src": "423:18:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_title",
                      "scope": 43,
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
                        "id": 23,
                        "name": "ElementaryTypeName",
                        "src": "443:6:0"
                      }
                    ],
                    "id": 24,
                    "name": "VariableDeclaration",
                    "src": "443:20:0"
                  }
                ],
                "id": 25,
                "name": "ParameterList",
                "src": "422:42:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 26,
                "name": "ParameterList",
                "src": "472:0:0"
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
                              "value": "videosCount"
                            },
                            "id": 27,
                            "name": "Identifier",
                            "src": "482:11:0"
                          }
                        ],
                        "id": 28,
                        "name": "UnaryOperation",
                        "src": "482:13:0"
                      }
                    ],
                    "id": 29,
                    "name": "ExpressionStatement",
                    "src": "482:13:0"
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
                                "id": 30,
                                "name": "Identifier",
                                "src": "540:6:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4,
                                  "type": "uint256",
                                  "value": "videosCount"
                                },
                                "id": 31,
                                "name": "Identifier",
                                "src": "547:11:0"
                              }
                            ],
                            "id": 32,
                            "name": "IndexAccess",
                            "src": "540:19:0"
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
                                      "typeIdentifier": "t_address_payable",
                                      "typeString": "address payable"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 20,
                                  "type": "type(struct DapTube.Video storage pointer)",
                                  "value": "Video"
                                },
                                "id": 33,
                                "name": "Identifier",
                                "src": "562:5:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4,
                                  "type": "uint256",
                                  "value": "videosCount"
                                },
                                "id": 34,
                                "name": "Identifier",
                                "src": "568:11:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 22,
                                  "type": "string memory",
                                  "value": "_src"
                                },
                                "id": 35,
                                "name": "Identifier",
                                "src": "581:4:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 24,
                                  "type": "string memory",
                                  "value": "_title"
                                },
                                "id": 36,
                                "name": "Identifier",
                                "src": "587:6:0"
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
                                      "referencedDeclaration": 59,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 37,
                                    "name": "Identifier",
                                    "src": "595:3:0"
                                  }
                                ],
                                "id": 38,
                                "name": "MemberAccess",
                                "src": "595:10:0"
                              }
                            ],
                            "id": 39,
                            "name": "FunctionCall",
                            "src": "562:44:0"
                          }
                        ],
                        "id": 40,
                        "name": "Assignment",
                        "src": "540:66:0"
                      }
                    ],
                    "id": 41,
                    "name": "ExpressionStatement",
                    "src": "540:66:0"
                  }
                ],
                "id": 42,
                "name": "Block",
                "src": "472:141:0"
              }
            ],
            "id": 43,
            "name": "FunctionDefinition",
            "src": "405:208:0"
          }
        ],
        "id": 44,
        "name": "ContractDefinition",
        "src": "25:590:0"
      }
    ],
    "id": 45,
    "name": "SourceUnit",
    "src": "0:615:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.16+commit.9c3226ce.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0x7c238B9ac51fCE01FCDa6ffcCf603b56e70fA226",
      "transactionHash": "0x1bfaabcf25a24a16b314f9f123a692f05d32203cc3b0dd33e1937f01d318ab03"
    }
  },
  "schemaVersion": "3.4.4",
  "updatedAt": "2021-12-25T15:32:46.359Z",
  "networkType": "ethereum",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}