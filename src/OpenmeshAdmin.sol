// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {SmartAccount} from "../lib/smart-account/src/SmartAccount.sol";

contract OpenmeshAdmin is SmartAccount {
    constructor() SmartAccount(0x2309762aAcA0a8F689463a42c0A6A84BE3A7ea51) {}
}
