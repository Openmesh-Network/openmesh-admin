// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {ENSReverseClaimable} from "../lib/ens-reverse-claimable/src/ENSReverseClaimable.sol";
import {Openmesh} from "./Openmesh.sol";

contract OpenmeshENSReverseClaimable is Openmesh, ENSReverseClaimable {
    /// @inheritdoc ENSReverseClaimable
    function owner() external pure override returns (address) {
        return OPENMESH_ADMIN;
    }
}
