//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Calculator {
    function add(int256 nb1, int256 nb2) public pure returns (int256) {
        return nb1 + nb2;
    }

    function sub(int256 nb1, int256 nb2) public pure returns (int256) {
        return nb1 - nb2;
    }

    function mul(int256 nb1, int256 nb2) public pure returns (int256) {
        return nb1 * nb2;
    }

    function div(int256 nb1, int256 nb2) public pure returns (int256) {
        return nb1 / nb2;
    }
}
