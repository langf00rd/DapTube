pragma solidity ^0.5.0;
// pragma solidity >=0.8.0;

contract DapTube {

    // variables
    uint public videoCount = 0;
    string public name = 'DapTube';
    mapping(uint => Video) public videos;

    // video model
    struct Video {
        uint id;
        string src;
        string title;
        string description;
        string videoLength;
        address owner;
    }

    // run on smart contruct deplyed
    // construction () public {}

    // save video blockchain
    function addVideo(string memory _src, string memory _title, string memory _description, string memory _videoLength ) public {
        videoCount++;

        // save video to contract
        videos[videoCount] = Video(videoCount, _src, _title, _description, _videoLength, msg.sender);
    }
}