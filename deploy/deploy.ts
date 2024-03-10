import { Address, Deployer } from "../web3webdeploy/types";
import { DeployAdminSettings, deployAdmin } from "./Admin/OpenmeshAdmin";

export interface OpenmeshAdminDeploymentSettings {
  adminSettings: DeployAdminSettings;
}

export interface OpenmeshAdminDeployment {
  admin: Address;
}

export async function deploy(
  deployer: Deployer,
  settings?: OpenmeshAdminDeploymentSettings
): Promise<OpenmeshAdminDeployment> {
  const admin = await deployAdmin(deployer, settings?.adminSettings ?? {});

  const deployment = {
    admin: admin,
  };
  await deployer.saveDeployment({
    deploymentName: "latest.json",
    deployment: deployment,
  });
  return deployment;
}
