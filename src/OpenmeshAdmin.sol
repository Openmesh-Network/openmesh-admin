// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {SmartAccount} from "../lib/smart-account/src/SmartAccount.sol";
import {SmartAccountBaseInstaller} from "../lib/smart-account/src/SmartAccountBaseInstaller.sol";

address constant installer = 0x4811864B715C0F1B0f9790a8ee6F11dC25b7F258;

contract OpenmeshAdmin is SmartAccount {
    constructor()
        SmartAccount(
            installer,
            abi.encodeWithSelector(SmartAccountBaseInstaller.install.selector, 0x6b221aA392146E31743E1beB5827e88284B09753)
        )
    {}
}
