import { CONTRACT_ABI } from "../abis/dapTube.abi"
import Web3 from 'web3'
import { create } from 'ipfs-http-client'

const IPFS = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })

const CONNECT_TO_WEB3 = async () => {

    try {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
        }

        else if (window.web3) window.web3 = new Web3(window.web3.currentProvider)
        else window.alert("Your browser doesn't support ethereum! 😔, Install the MetaMask chrome extension or download the metamask app from the appstore or playstore")

        return true;
    }

    catch (e) { return false }
}

const GET_ACCOUNTS = async () => {
    await CONNECT_TO_WEB3()

    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    return accounts[0]
}

const GET_BLOCKCHAIN_DATA = async () => {

    try {
        const isConnectedToWeb3 = await CONNECT_TO_WEB3()
        if (!isConnectedToWeb3) return [false, null]

        const web3 = window.web3
        const networkId = await web3.eth.net.getId()
        const networkInfo = CONTRACT_ABI.networks[networkId]

        if (networkInfo) {
            const payload = await new web3.eth.Contract(CONTRACT_ABI.abi, networkInfo.address)
            return [true, payload]
        }

        else return [false, null]

    } catch (e) {
        return [false, null]
    }
}

const GENERATE_BUFFER_FROM_FILE = async (file) => {

    try {

        const reader = new FileReader()
        reader.readAsArrayBuffer(file)

        reader.onloadend = async () => {
            console.log(Buffer(reader.result))
            return Buffer(reader.result)
        }

    } catch (error) {
        console.log(error)
        return null;
    }
}

export { GET_BLOCKCHAIN_DATA, GENERATE_BUFFER_FROM_FILE, IPFS, GET_ACCOUNTS }