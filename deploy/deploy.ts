import { Address, Deployer } from "../web3webdeploy/types";

export interface OpenmeshAdminDeploymentSettings {}

export interface OpenmeshAdminDeployment {
  admin: Address;
}

export async function deploy(
  deployer: Deployer,
  settings?: OpenmeshAdminDeploymentSettings
): Promise<OpenmeshAdminDeployment> {
  const admin = await deployer.deploy({
    id: "OpenmeshAdmin",
    contract: "OpenmeshAdmin",
  });

  return {
    admin: admin,
  };
}
