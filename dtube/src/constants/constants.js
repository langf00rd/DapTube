import { CONTRACT_ABI } from "../abis/dapTube.abi"
import Web3 from 'web3'
import { create } from 'ipfs-http-client'

const IPFS = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })

const VIDEO_TAGS = [
    'All',
    'Music',
    'Space',
    'Mystery',
    'Movies',
    'Programming',
    'Sales',
    'History',
    'Psychology',
    'Science',
    'Gaming',
    'Funny',
    'Worldwide',
    'Novels',
    'Cryptocurrency',
    'Blockchain'
]

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

const GET_ROUTE_PARAM = () => {
    let urlQuery = window.location.search
    let routeId = urlQuery.substring(1, urlQuery.length)

    return routeId
}

const GET_VIDEO_BY_ID = async (id) => {

    let videos = await GET_VIDEOS()

    for (let i = 0; i < videos.length; i++) {
        const element = videos[i]

        if (element.id === id) return element
    }

    return null
}

const GET_VIDEOS_BY_TAG = async (tag) => {

    let videos = await GET_VIDEOS()
    let videosWithTags = []

    videos.forEach(video => {

        if (video.tags.includes(tag)) videosWithTags.push(video)

    })

    if (videosWithTags.length <= 0) return 0

    return videosWithTags
}

const UPLOAD_TO_IPFS = async (file) => {

    if (!file) return [false, 'Please choose a file to upload', null]

    try {

        const uploadedFilePath = await (IPFS.add(file))

        return [true, 'Uploaded to ipfs', uploadedFilePath.path]

    } catch (error) {

        return [false, 'An error occured uploading file', null]
    }
}

const CAPITALIZE_STRING = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const GET_VIDEOS = async () => {

    const [isConnected, payload] = await GET_BLOCKCHAIN_DATA()

    if (!isConnected) return []

    const videoCount = await payload.methods.videoCount().call()
    const videosArray = []

    for (let i = videoCount; i >= 1; i--) {
        const video = await payload.methods.videos(i).call()
        videosArray.push(video)
    }

    sessionStorage.setItem('videos', JSON.stringify(videosArray))

    return videosArray

    // if (sessionStorage.getItem('videos') && getNewVideos) { }
    // if (!sessionStorage.getItem('videos') && getNewVideos) { }


    // if (sessionStorage.getItem('videos')) {
    //     console.log('videos saved in session!')
    //     return JSON.parse(sessionStorage.getItem('videos'))
    // }


}

const GET_SIMILAR_VIDEOS = async () => {

    const [isConnected, payload] = await GET_BLOCKCHAIN_DATA()

    if (!isConnected) return []

    const videoCount = await payload.methods.videoCount().call()
    const videosArray = []

    for (let i = videoCount; i >= 1; i--) {
        const video = await payload.methods.videos(i).call()

        if (video.id != GET_ROUTE_PARAM()) videosArray.push(video)
    }

    sessionStorage.setItem('videos', JSON.stringify(videosArray))

    return videosArray

}

const MODAL_STYLE = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        borderRadius: '20px',
        border: 'none',
        width: '40%',
        textAlign: 'center',
        maxWidth: '400px'
    },
};

const FULL_WIDTH_MODAL_STYLE = {
    // content: {
    //     width: '100v'
    // },
};


// const GET_VIDEO_METADATA = (file) => {
//     // var format = require('format-duration')

//     var video = document.createElement('video');
//     video.preload = 'metadata';

//     video.onloadedmetadata = function () {
//         window.URL.revokeObjectURL(video.src);

//         if (video.duration < 1) return [false, null];

//         return [true, video]
//     }

//     video.src = URL.createObjectURL(file);
// }

// const GENERATE_BUFFER_FROM_FILE = async (file) => {

//     try {

//         const reader = new FileReader()
//         reader.readAsArrayBuffer(file)

//         reader.onloadend = async () => {
//             console.log(Buffer(reader.result))
//             return Buffer(reader.result)
//         }

//     } catch (error) {
//         console.log(error)
//         return null;
//     }
// }


// const SAVE_TO_BLOCKCHAIN = (videoPath, thumbnailPath, dapTubeData, title, description, videoLength, address) => {
//     try {
//         const methods = dapTubeData.methods

//         methods.addVideo(
//             `https://ipfs.infura.io/ipfs/${videoPath}`,
//             `https://ipfs.infura.io/ipfs/${thumbnailPath}`,
//             title,
//             description,
//             videoLength,
//         ).send({ from: address }).on('transactionHash', hash => {

//             return [true, 'Video uploaded!🎉']
//         })

//     } catch (error) {

//         console.log(error)
//         return [false, 'Sorry.could not connect to web3 😔t complete upload.Check your network connection']
//     }
// }

export { GET_BLOCKCHAIN_DATA, GET_ROUTE_PARAM, VIDEO_TAGS, MODAL_STYLE, GET_VIDEOS, GET_VIDEOS_BY_TAG, GET_SIMILAR_VIDEOS, CAPITALIZE_STRING, GET_VIDEO_BY_ID, UPLOAD_TO_IPFS, IPFS, GET_ACCOUNTS }