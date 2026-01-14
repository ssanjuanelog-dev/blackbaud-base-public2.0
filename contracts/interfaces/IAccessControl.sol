// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;
interface IAccessControl {
    function hasRole(bytes32 role, address account) external view returns (bool);
}
