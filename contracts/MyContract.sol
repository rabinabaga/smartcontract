// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

   contract MyContract {
    string public message = "Hello, World!";

    function helloWorld() public view returns (string memory) {
        return message;
    }

    function sum(uint firstNum, uint secondNum) public pure returns (uint ){
        return firstNum+secondNum;
    }

}
