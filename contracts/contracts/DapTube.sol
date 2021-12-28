pragma solidity ^0.5.0;
// pragma solidity >=0.8.0;

contract DapTube {

    uint public videoCount = 0;
    string public name = 'DapTube';

    mapping(uint => Video) public videos;

    struct Video {
        uint id;
        string src;
        string thumbnail;
        string title;
        string description;
        string videoLength;
        address owner;
    }

    function addVideo(string memory _src, string memory _thumbnail, string memory _title, string memory _description, string memory _videoLength ) public {
        videoCount++;

        videos[videoCount] = Video(videoCount, _src, _thumbnail, _title, _description, _videoLength, msg.sender);
    }
}