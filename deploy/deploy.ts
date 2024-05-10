import { Address, Deployer } from "../web3webdeploy/types";
import {
  EnableReceiversSettings,
  enableReceivers,
} from "./internal/EnableReceivers";
import { DeployAdminSettings, deployAdmin } from "./internal/OpenmeshAdmin";

export interface OpenmeshAdminDeploymentSettings {
  adminSettings: DeployAdminSettings;
  enableReceiversSettings: Omit<
    EnableReceiversSettings,
    "smartAccount" | "from"
  >;
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
    const existingDeployment = await deployer.loadDeployment({
      deploymentName: "latest.json",
    });
    if (existingDeployment !== undefined) {
      return existingDeployment;
    }
  }

  const admin = await deployAdmin(deployer, settings?.adminSettings ?? {});
  await enableReceivers(deployer, {
    smartAccount: admin,
    from: "0x6b221aA392146E31743E1beB5827e88284B09753",
    ...settings?.enableReceiversSettings,
  });

  const deployment: OpenmeshAdminDeployment = {
    admin: admin,
  };
  await deployer.saveDeployment({
    deploymentName: "latest.json",
    deployment: deployment,
  });
  return deployment;
}
