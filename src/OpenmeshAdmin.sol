// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {SmartAccount} from "../lib/smart-account/src/SmartAccount.sol";
import {SmartAccountBaseInstaller} from "../lib/smart-account/src/SmartAccountBaseInstaller.sol";

address constant installer = 0x4811864B715C0F1B0f9790a8ee6F11dC25b7F258;

contract OpenmeshAdmin is SmartAccount {
    constructor()
        SmartAccount(
            installer,
            abi.encodeWithSelector(SmartAccountBaseInstaller.install.selector, 0x2309762aAcA0a8F689463a42c0A6A84BE3A7ea51)
        )
    {}
}
