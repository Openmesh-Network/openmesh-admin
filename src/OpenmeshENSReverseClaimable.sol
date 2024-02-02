// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {ENSReverseClaimable} from "../lib/ens-reverse-claimable/src/ENSReverseClaimable.sol";

contract OpenmeshENSReverseClaimable is ENSReverseClaimable {
    /// @inheritdoc ENSReverseClaimable
    function owner() external pure override returns (address) {
        return 0xfF7e49aC5D00CbaaD0BF02165Fea31C0A411930e; // openmesh admin
    }
}
