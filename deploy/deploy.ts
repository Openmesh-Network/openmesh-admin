import { Address, DeployInfo, Deployer } from "../web3webdeploy/types";

export interface OpenmeshAdminDeploymentSettings
  extends Omit<DeployInfo, "contract" | "args"> {}

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
    ...settings,
  });

  const deployment = {
    admin: admin,
  };
  await deployer.saveDeployment({
    deploymentName: "latest.json",
    deployment: deployment,
  });
  return deployment;
}
