import { Address, Deployer } from "../web3webdeploy/types";
import { DeployAdminSettings, deployAdmin } from "./internal/OpenmeshAdmin";

export interface OpenmeshAdminDeploymentSettings {
  adminSettings: DeployAdminSettings;
  forceRedeploy?: boolean;
}

export interface OpenmeshAdminDeployment {
  admin: Address;
}

export async function deploy(
  deployer: Deployer,
  settings?: OpenmeshAdminDeploymentSettings
): Promise<OpenmeshAdminDeployment> {
  if (settings?.forceRedeploy !== undefined && !settings.forceRedeploy) {
    return await deployer.loadDeployment({ deploymentName: "latest.json" });
  }

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
