import { Address, DeployInfo, Deployer } from "../../web3webdeploy/types";

export interface DeployAdminSettings
  extends Omit<DeployInfo, "contract" | "args"> {}

export async function deployAdmin(
  deployer: Deployer,
  settings: DeployAdminSettings
): Promise<Address> {
  return await deployer
    .deploy({
      id: "OpenmeshAdmin",
      contract: "OpenmeshAdmin",
      ...settings,
    })
    .then((deployment) => deployment.address);
}
