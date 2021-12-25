pragma solidity ^0.5.0;

contract DapTube {
    uint public videosCount = 0;
    string public name = 'DapTube';
    mapping(uint => Video) public videos;

    // video model
    struct Video {
        uint id;
        string src;
        string title;
        address owner
    }

    // run on smart contruct deplyed
    construction() public {}

    // save video blockchain
    function addVideo(,string memory _src, string memory _title) public {
        videosCount++;
        videos[videosCount] = Video(videosCount, _src, _title, msg.sender);
    }
}