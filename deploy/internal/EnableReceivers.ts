import { Address, DeployInfo, Deployer } from "../../web3webdeploy/types";
import { SmartAccountBaseContract } from "../../lib/smart-account/export/SmartAccountBase";
import { SmartAccountERC721ReceiverInstallerContract } from "../../lib/smart-account/export/SmartAccountERC721ReceiverInstaller";
import { SmartAccountERC1155ReceiverInstallerContract } from "../../lib/smart-account/export/SmartAccountERC1155ReceiverInstaller";

export interface EnableReceiversSettings
  extends Omit<DeployInfo, "contract" | "args"> {
  smartAccount: Address;
  from: Address;
}

export async function enableReceivers(
  deployer: Deployer,
  settings: EnableReceiversSettings
): Promise<void> {
  const smartAccountAbi = [...SmartAccountBaseContract.abi];
  await deployer.execute({
    id: "EnableReceivers" + settings.smartAccount,
    abi: smartAccountAbi,
    to: settings.smartAccount,
    function: "multicall",
    args: [
      [
        deployer.viem.encodeFunctionData({
          abi: smartAccountAbi,
          functionName: "performDelegateCall",
          args: [
            SmartAccountERC721ReceiverInstallerContract.address,
            deployer.viem.encodeFunctionData({
              abi: SmartAccountERC721ReceiverInstallerContract.abi,
              functionName: "install",
            }),
          ],
        }),
        deployer.viem.encodeFunctionData({
          abi: smartAccountAbi,
          functionName: "performDelegateCall",
          args: [
            SmartAccountERC1155ReceiverInstallerContract.address,
            deployer.viem.encodeFunctionData({
              abi: SmartAccountERC1155ReceiverInstallerContract.abi,
              functionName: "install",
            }),
          ],
        }),
      ],
    ],
    ...settings,
  });
}
