// File: `./contracts/SimpleStorage.sol`

pragma solidity ^0.4.17;


contract SimpleStorage {
    uint public storedData;

    function SimpleStorage(uint initVal) public {
        storedData = initVal;
    }

    function set(uint x) public {
        storedData = x;
    }

    function get() public constant returns (uint retVal) {
        return storedData;
    }
}