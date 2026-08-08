/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SynapseWorkspaceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#azuread_authentication_only SynapseWorkspace#azuread_authentication_only}
  */
  readonly azureadAuthenticationOnly?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#compute_subnet_id SynapseWorkspace#compute_subnet_id}
  */
  readonly computeSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#data_exfiltration_protection_enabled SynapseWorkspace#data_exfiltration_protection_enabled}
  */
  readonly dataExfiltrationProtectionEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#id SynapseWorkspace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#linking_allowed_for_aad_tenant_ids SynapseWorkspace#linking_allowed_for_aad_tenant_ids}
  */
  readonly linkingAllowedForAadTenantIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#location SynapseWorkspace#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#managed_resource_group_name SynapseWorkspace#managed_resource_group_name}
  */
  readonly managedResourceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#managed_virtual_network_enabled SynapseWorkspace#managed_virtual_network_enabled}
  */
  readonly managedVirtualNetworkEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#name SynapseWorkspace#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#public_network_access_enabled SynapseWorkspace#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#purview_id SynapseWorkspace#purview_id}
  */
  readonly purviewId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#resource_group_name SynapseWorkspace#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#sql_administrator_login SynapseWorkspace#sql_administrator_login}
  */
  readonly sqlAdministratorLogin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#sql_administrator_login_password SynapseWorkspace#sql_administrator_login_password}
  */
  readonly sqlAdministratorLoginPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#sql_identity_control_enabled SynapseWorkspace#sql_identity_control_enabled}
  */
  readonly sqlIdentityControlEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#storage_data_lake_gen2_filesystem_id SynapseWorkspace#storage_data_lake_gen2_filesystem_id}
  */
  readonly storageDataLakeGen2FilesystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#tags SynapseWorkspace#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * azure_devops_repo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#azure_devops_repo SynapseWorkspace#azure_devops_repo}
  */
  readonly azureDevopsRepo?: SynapseWorkspaceAzureDevopsRepo;
  /**
  * customer_managed_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#customer_managed_key SynapseWorkspace#customer_managed_key}
  */
  readonly customerManagedKey?: SynapseWorkspaceCustomerManagedKey;
  /**
  * github_repo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#github_repo SynapseWorkspace#github_repo}
  */
  readonly githubRepo?: SynapseWorkspaceGithubRepo;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#identity SynapseWorkspace#identity}
  */
  readonly identity?: SynapseWorkspaceIdentity;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#timeouts SynapseWorkspace#timeouts}
  */
  readonly timeouts?: SynapseWorkspaceTimeouts;
}
export interface SynapseWorkspaceAzureDevopsRepo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#account_name SynapseWorkspace#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#branch_name SynapseWorkspace#branch_name}
  */
  readonly branchName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#last_commit_id SynapseWorkspace#last_commit_id}
  */
  readonly lastCommitId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#project_name SynapseWorkspace#project_name}
  */
  readonly projectName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#repository_name SynapseWorkspace#repository_name}
  */
  readonly repositoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#root_folder SynapseWorkspace#root_folder}
  */
  readonly rootFolder: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#tenant_id SynapseWorkspace#tenant_id}
  */
  readonly tenantId?: string;
}

export function synapseWorkspaceAzureDevopsRepoToTerraform(struct?: SynapseWorkspaceAzureDevopsRepoOutputReference | SynapseWorkspaceAzureDevopsRepo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_name: cdktn.stringToTerraform(struct!.accountName),
    branch_name: cdktn.stringToTerraform(struct!.branchName),
    last_commit_id: cdktn.stringToTerraform(struct!.lastCommitId),
    project_name: cdktn.stringToTerraform(struct!.projectName),
    repository_name: cdktn.stringToTerraform(struct!.repositoryName),
    root_folder: cdktn.stringToTerraform(struct!.rootFolder),
    tenant_id: cdktn.stringToTerraform(struct!.tenantId),
  }
}


export function synapseWorkspaceAzureDevopsRepoToHclTerraform(struct?: SynapseWorkspaceAzureDevopsRepoOutputReference | SynapseWorkspaceAzureDevopsRepo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_name: {
      value: cdktn.stringToHclTerraform(struct!.accountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    branch_name: {
      value: cdktn.stringToHclTerraform(struct!.branchName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_commit_id: {
      value: cdktn.stringToHclTerraform(struct!.lastCommitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_name: {
      value: cdktn.stringToHclTerraform(struct!.projectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_name: {
      value: cdktn.stringToHclTerraform(struct!.repositoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_folder: {
      value: cdktn.stringToHclTerraform(struct!.rootFolder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktn.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SynapseWorkspaceAzureDevopsRepoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SynapseWorkspaceAzureDevopsRepo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._branchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchName = this._branchName;
    }
    if (this._lastCommitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastCommitId = this._lastCommitId;
    }
    if (this._projectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectName = this._projectName;
    }
    if (this._repositoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryName = this._repositoryName;
    }
    if (this._rootFolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootFolder = this._rootFolder;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SynapseWorkspaceAzureDevopsRepo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountName = undefined;
      this._branchName = undefined;
      this._lastCommitId = undefined;
      this._projectName = undefined;
      this._repositoryName = undefined;
      this._rootFolder = undefined;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountName = value.accountName;
      this._branchName = value.branchName;
      this._lastCommitId = value.lastCommitId;
      this._projectName = value.projectName;
      this._repositoryName = value.repositoryName;
      this._rootFolder = value.rootFolder;
      this._tenantId = value.tenantId;
    }
  }

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // branch_name - computed: false, optional: false, required: true
  private _branchName?: string; 
  public get branchName() {
    return this.getStringAttribute('branch_name');
  }
  public set branchName(value: string) {
    this._branchName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchNameInput() {
    return this._branchName;
  }

  // last_commit_id - computed: false, optional: true, required: false
  private _lastCommitId?: string; 
  public get lastCommitId() {
    return this.getStringAttribute('last_commit_id');
  }
  public set lastCommitId(value: string) {
    this._lastCommitId = value;
  }
  public resetLastCommitId() {
    this._lastCommitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastCommitIdInput() {
    return this._lastCommitId;
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // repository_name - computed: false, optional: false, required: true
  private _repositoryName?: string; 
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName;
  }

  // root_folder - computed: false, optional: false, required: true
  private _rootFolder?: string; 
  public get rootFolder() {
    return this.getStringAttribute('root_folder');
  }
  public set rootFolder(value: string) {
    this._rootFolder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootFolderInput() {
    return this._rootFolder;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface SynapseWorkspaceCustomerManagedKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#key_name SynapseWorkspace#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#key_versionless_id SynapseWorkspace#key_versionless_id}
  */
  readonly keyVersionlessId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#user_assigned_identity_id SynapseWorkspace#user_assigned_identity_id}
  */
  readonly userAssignedIdentityId?: string;
}

export function synapseWorkspaceCustomerManagedKeyToTerraform(struct?: SynapseWorkspaceCustomerManagedKeyOutputReference | SynapseWorkspaceCustomerManagedKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_name: cdktn.stringToTerraform(struct!.keyName),
    key_versionless_id: cdktn.stringToTerraform(struct!.keyVersionlessId),
    user_assigned_identity_id: cdktn.stringToTerraform(struct!.userAssignedIdentityId),
  }
}


export function synapseWorkspaceCustomerManagedKeyToHclTerraform(struct?: SynapseWorkspaceCustomerManagedKeyOutputReference | SynapseWorkspaceCustomerManagedKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_name: {
      value: cdktn.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_versionless_id: {
      value: cdktn.stringToHclTerraform(struct!.keyVersionlessId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_assigned_identity_id: {
      value: cdktn.stringToHclTerraform(struct!.userAssignedIdentityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SynapseWorkspaceCustomerManagedKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SynapseWorkspaceCustomerManagedKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._keyVersionlessId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVersionlessId = this._keyVersionlessId;
    }
    if (this._userAssignedIdentityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssignedIdentityId = this._userAssignedIdentityId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SynapseWorkspaceCustomerManagedKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyName = undefined;
      this._keyVersionlessId = undefined;
      this._userAssignedIdentityId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyName = value.keyName;
      this._keyVersionlessId = value.keyVersionlessId;
      this._userAssignedIdentityId = value.userAssignedIdentityId;
    }
  }

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // key_versionless_id - computed: false, optional: false, required: true
  private _keyVersionlessId?: string; 
  public get keyVersionlessId() {
    return this.getStringAttribute('key_versionless_id');
  }
  public set keyVersionlessId(value: string) {
    this._keyVersionlessId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVersionlessIdInput() {
    return this._keyVersionlessId;
  }

  // user_assigned_identity_id - computed: false, optional: true, required: false
  private _userAssignedIdentityId?: string; 
  public get userAssignedIdentityId() {
    return this.getStringAttribute('user_assigned_identity_id');
  }
  public set userAssignedIdentityId(value: string) {
    this._userAssignedIdentityId = value;
  }
  public resetUserAssignedIdentityId() {
    this._userAssignedIdentityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedIdentityIdInput() {
    return this._userAssignedIdentityId;
  }
}
export interface SynapseWorkspaceGithubRepo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#account_name SynapseWorkspace#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#branch_name SynapseWorkspace#branch_name}
  */
  readonly branchName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#git_url SynapseWorkspace#git_url}
  */
  readonly gitUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#last_commit_id SynapseWorkspace#last_commit_id}
  */
  readonly lastCommitId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#repository_name SynapseWorkspace#repository_name}
  */
  readonly repositoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#root_folder SynapseWorkspace#root_folder}
  */
  readonly rootFolder: string;
}

export function synapseWorkspaceGithubRepoToTerraform(struct?: SynapseWorkspaceGithubRepoOutputReference | SynapseWorkspaceGithubRepo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_name: cdktn.stringToTerraform(struct!.accountName),
    branch_name: cdktn.stringToTerraform(struct!.branchName),
    git_url: cdktn.stringToTerraform(struct!.gitUrl),
    last_commit_id: cdktn.stringToTerraform(struct!.lastCommitId),
    repository_name: cdktn.stringToTerraform(struct!.repositoryName),
    root_folder: cdktn.stringToTerraform(struct!.rootFolder),
  }
}


export function synapseWorkspaceGithubRepoToHclTerraform(struct?: SynapseWorkspaceGithubRepoOutputReference | SynapseWorkspaceGithubRepo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_name: {
      value: cdktn.stringToHclTerraform(struct!.accountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    branch_name: {
      value: cdktn.stringToHclTerraform(struct!.branchName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    git_url: {
      value: cdktn.stringToHclTerraform(struct!.gitUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_commit_id: {
      value: cdktn.stringToHclTerraform(struct!.lastCommitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_name: {
      value: cdktn.stringToHclTerraform(struct!.repositoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_folder: {
      value: cdktn.stringToHclTerraform(struct!.rootFolder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SynapseWorkspaceGithubRepoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SynapseWorkspaceGithubRepo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._branchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchName = this._branchName;
    }
    if (this._gitUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitUrl = this._gitUrl;
    }
    if (this._lastCommitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastCommitId = this._lastCommitId;
    }
    if (this._repositoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryName = this._repositoryName;
    }
    if (this._rootFolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootFolder = this._rootFolder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SynapseWorkspaceGithubRepo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountName = undefined;
      this._branchName = undefined;
      this._gitUrl = undefined;
      this._lastCommitId = undefined;
      this._repositoryName = undefined;
      this._rootFolder = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountName = value.accountName;
      this._branchName = value.branchName;
      this._gitUrl = value.gitUrl;
      this._lastCommitId = value.lastCommitId;
      this._repositoryName = value.repositoryName;
      this._rootFolder = value.rootFolder;
    }
  }

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // branch_name - computed: false, optional: false, required: true
  private _branchName?: string; 
  public get branchName() {
    return this.getStringAttribute('branch_name');
  }
  public set branchName(value: string) {
    this._branchName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchNameInput() {
    return this._branchName;
  }

  // git_url - computed: false, optional: true, required: false
  private _gitUrl?: string; 
  public get gitUrl() {
    return this.getStringAttribute('git_url');
  }
  public set gitUrl(value: string) {
    this._gitUrl = value;
  }
  public resetGitUrl() {
    this._gitUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitUrlInput() {
    return this._gitUrl;
  }

  // last_commit_id - computed: false, optional: true, required: false
  private _lastCommitId?: string; 
  public get lastCommitId() {
    return this.getStringAttribute('last_commit_id');
  }
  public set lastCommitId(value: string) {
    this._lastCommitId = value;
  }
  public resetLastCommitId() {
    this._lastCommitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastCommitIdInput() {
    return this._lastCommitId;
  }

  // repository_name - computed: false, optional: false, required: true
  private _repositoryName?: string; 
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName;
  }

  // root_folder - computed: false, optional: false, required: true
  private _rootFolder?: string; 
  public get rootFolder() {
    return this.getStringAttribute('root_folder');
  }
  public set rootFolder(value: string) {
    this._rootFolder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootFolderInput() {
    return this._rootFolder;
  }
}
export interface SynapseWorkspaceIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#identity_ids SynapseWorkspace#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#type SynapseWorkspace#type}
  */
  readonly type: string;
}

export function synapseWorkspaceIdentityToTerraform(struct?: SynapseWorkspaceIdentityOutputReference | SynapseWorkspaceIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identity_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.identityIds),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function synapseWorkspaceIdentityToHclTerraform(struct?: SynapseWorkspaceIdentityOutputReference | SynapseWorkspaceIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identity_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.identityIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SynapseWorkspaceIdentityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SynapseWorkspaceIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityIds = this._identityIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SynapseWorkspaceIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityIds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityIds = value.identityIds;
      this._type = value.type;
    }
  }

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[]; 
  public get identityIds() {
    return cdktn.Fn.tolist(this.getListAttribute('identity_ids'));
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface SynapseWorkspaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#create SynapseWorkspace#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#delete SynapseWorkspace#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#read SynapseWorkspace#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#update SynapseWorkspace#update}
  */
  readonly update?: string;
}

export function synapseWorkspaceTimeoutsToTerraform(struct?: SynapseWorkspaceTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    read: cdktn.stringToTerraform(struct!.read),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function synapseWorkspaceTimeoutsToHclTerraform(struct?: SynapseWorkspaceTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktn.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SynapseWorkspaceTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SynapseWorkspaceTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SynapseWorkspaceTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace azurerm_synapse_workspace}
*/
export class SynapseWorkspace extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_synapse_workspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SynapseWorkspace resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SynapseWorkspace to import
  * @param importFromId The id of the existing SynapseWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SynapseWorkspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_synapse_workspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/synapse_workspace azurerm_synapse_workspace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SynapseWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: SynapseWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_synapse_workspace',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '5.0.1',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._azureadAuthenticationOnly = config.azureadAuthenticationOnly;
    this._computeSubnetId = config.computeSubnetId;
    this._dataExfiltrationProtectionEnabled = config.dataExfiltrationProtectionEnabled;
    this._id = config.id;
    this._linkingAllowedForAadTenantIds = config.linkingAllowedForAadTenantIds;
    this._location = config.location;
    this._managedResourceGroupName = config.managedResourceGroupName;
    this._managedVirtualNetworkEnabled = config.managedVirtualNetworkEnabled;
    this._name = config.name;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._purviewId = config.purviewId;
    this._resourceGroupName = config.resourceGroupName;
    this._sqlAdministratorLogin = config.sqlAdministratorLogin;
    this._sqlAdministratorLoginPassword = config.sqlAdministratorLoginPassword;
    this._sqlIdentityControlEnabled = config.sqlIdentityControlEnabled;
    this._storageDataLakeGen2FilesystemId = config.storageDataLakeGen2FilesystemId;
    this._tags = config.tags;
    this._azureDevopsRepo.internalValue = config.azureDevopsRepo;
    this._customerManagedKey.internalValue = config.customerManagedKey;
    this._githubRepo.internalValue = config.githubRepo;
    this._identity.internalValue = config.identity;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azuread_authentication_only - computed: false, optional: true, required: false
  private _azureadAuthenticationOnly?: boolean | cdktn.IResolvable; 
  public get azureadAuthenticationOnly() {
    return this.getBooleanAttribute('azuread_authentication_only');
  }
  public set azureadAuthenticationOnly(value: boolean | cdktn.IResolvable) {
    this._azureadAuthenticationOnly = value;
  }
  public resetAzureadAuthenticationOnly() {
    this._azureadAuthenticationOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureadAuthenticationOnlyInput() {
    return this._azureadAuthenticationOnly;
  }

  // compute_subnet_id - computed: false, optional: true, required: false
  private _computeSubnetId?: string; 
  public get computeSubnetId() {
    return this.getStringAttribute('compute_subnet_id');
  }
  public set computeSubnetId(value: string) {
    this._computeSubnetId = value;
  }
  public resetComputeSubnetId() {
    this._computeSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeSubnetIdInput() {
    return this._computeSubnetId;
  }

  // connectivity_endpoints - computed: true, optional: false, required: false
  private _connectivityEndpoints = new cdktn.StringMap(this, "connectivity_endpoints");
  public get connectivityEndpoints() {
    return this._connectivityEndpoints;
  }

  // data_exfiltration_protection_enabled - computed: false, optional: true, required: false
  private _dataExfiltrationProtectionEnabled?: boolean | cdktn.IResolvable; 
  public get dataExfiltrationProtectionEnabled() {
    return this.getBooleanAttribute('data_exfiltration_protection_enabled');
  }
  public set dataExfiltrationProtectionEnabled(value: boolean | cdktn.IResolvable) {
    this._dataExfiltrationProtectionEnabled = value;
  }
  public resetDataExfiltrationProtectionEnabled() {
    this._dataExfiltrationProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataExfiltrationProtectionEnabledInput() {
    return this._dataExfiltrationProtectionEnabled;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // linking_allowed_for_aad_tenant_ids - computed: false, optional: true, required: false
  private _linkingAllowedForAadTenantIds?: string[]; 
  public get linkingAllowedForAadTenantIds() {
    return this.getListAttribute('linking_allowed_for_aad_tenant_ids');
  }
  public set linkingAllowedForAadTenantIds(value: string[]) {
    this._linkingAllowedForAadTenantIds = value;
  }
  public resetLinkingAllowedForAadTenantIds() {
    this._linkingAllowedForAadTenantIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkingAllowedForAadTenantIdsInput() {
    return this._linkingAllowedForAadTenantIds;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // managed_resource_group_name - computed: true, optional: true, required: false
  private _managedResourceGroupName?: string; 
  public get managedResourceGroupName() {
    return this.getStringAttribute('managed_resource_group_name');
  }
  public set managedResourceGroupName(value: string) {
    this._managedResourceGroupName = value;
  }
  public resetManagedResourceGroupName() {
    this._managedResourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedResourceGroupNameInput() {
    return this._managedResourceGroupName;
  }

  // managed_virtual_network_enabled - computed: false, optional: true, required: false
  private _managedVirtualNetworkEnabled?: boolean | cdktn.IResolvable; 
  public get managedVirtualNetworkEnabled() {
    return this.getBooleanAttribute('managed_virtual_network_enabled');
  }
  public set managedVirtualNetworkEnabled(value: boolean | cdktn.IResolvable) {
    this._managedVirtualNetworkEnabled = value;
  }
  public resetManagedVirtualNetworkEnabled() {
    this._managedVirtualNetworkEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedVirtualNetworkEnabledInput() {
    return this._managedVirtualNetworkEnabled;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // public_network_access_enabled - computed: false, optional: true, required: false
  private _publicNetworkAccessEnabled?: boolean | cdktn.IResolvable; 
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled');
  }
  public set publicNetworkAccessEnabled(value: boolean | cdktn.IResolvable) {
    this._publicNetworkAccessEnabled = value;
  }
  public resetPublicNetworkAccessEnabled() {
    this._publicNetworkAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessEnabledInput() {
    return this._publicNetworkAccessEnabled;
  }

  // purview_id - computed: false, optional: true, required: false
  private _purviewId?: string; 
  public get purviewId() {
    return this.getStringAttribute('purview_id');
  }
  public set purviewId(value: string) {
    this._purviewId = value;
  }
  public resetPurviewId() {
    this._purviewId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purviewIdInput() {
    return this._purviewId;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // sql_administrator_login - computed: false, optional: true, required: false
  private _sqlAdministratorLogin?: string; 
  public get sqlAdministratorLogin() {
    return this.getStringAttribute('sql_administrator_login');
  }
  public set sqlAdministratorLogin(value: string) {
    this._sqlAdministratorLogin = value;
  }
  public resetSqlAdministratorLogin() {
    this._sqlAdministratorLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlAdministratorLoginInput() {
    return this._sqlAdministratorLogin;
  }

  // sql_administrator_login_password - computed: false, optional: true, required: false
  private _sqlAdministratorLoginPassword?: string; 
  public get sqlAdministratorLoginPassword() {
    return this.getStringAttribute('sql_administrator_login_password');
  }
  public set sqlAdministratorLoginPassword(value: string) {
    this._sqlAdministratorLoginPassword = value;
  }
  public resetSqlAdministratorLoginPassword() {
    this._sqlAdministratorLoginPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlAdministratorLoginPasswordInput() {
    return this._sqlAdministratorLoginPassword;
  }

  // sql_identity_control_enabled - computed: false, optional: true, required: false
  private _sqlIdentityControlEnabled?: boolean | cdktn.IResolvable; 
  public get sqlIdentityControlEnabled() {
    return this.getBooleanAttribute('sql_identity_control_enabled');
  }
  public set sqlIdentityControlEnabled(value: boolean | cdktn.IResolvable) {
    this._sqlIdentityControlEnabled = value;
  }
  public resetSqlIdentityControlEnabled() {
    this._sqlIdentityControlEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlIdentityControlEnabledInput() {
    return this._sqlIdentityControlEnabled;
  }

  // storage_data_lake_gen2_filesystem_id - computed: false, optional: false, required: true
  private _storageDataLakeGen2FilesystemId?: string; 
  public get storageDataLakeGen2FilesystemId() {
    return this.getStringAttribute('storage_data_lake_gen2_filesystem_id');
  }
  public set storageDataLakeGen2FilesystemId(value: string) {
    this._storageDataLakeGen2FilesystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDataLakeGen2FilesystemIdInput() {
    return this._storageDataLakeGen2FilesystemId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // azure_devops_repo - computed: false, optional: true, required: false
  private _azureDevopsRepo = new SynapseWorkspaceAzureDevopsRepoOutputReference(this, "azure_devops_repo");
  public get azureDevopsRepo() {
    return this._azureDevopsRepo;
  }
  public putAzureDevopsRepo(value: SynapseWorkspaceAzureDevopsRepo) {
    this._azureDevopsRepo.internalValue = value;
  }
  public resetAzureDevopsRepo() {
    this._azureDevopsRepo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureDevopsRepoInput() {
    return this._azureDevopsRepo.internalValue;
  }

  // customer_managed_key - computed: false, optional: true, required: false
  private _customerManagedKey = new SynapseWorkspaceCustomerManagedKeyOutputReference(this, "customer_managed_key");
  public get customerManagedKey() {
    return this._customerManagedKey;
  }
  public putCustomerManagedKey(value: SynapseWorkspaceCustomerManagedKey) {
    this._customerManagedKey.internalValue = value;
  }
  public resetCustomerManagedKey() {
    this._customerManagedKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeyInput() {
    return this._customerManagedKey.internalValue;
  }

  // github_repo - computed: false, optional: true, required: false
  private _githubRepo = new SynapseWorkspaceGithubRepoOutputReference(this, "github_repo");
  public get githubRepo() {
    return this._githubRepo;
  }
  public putGithubRepo(value: SynapseWorkspaceGithubRepo) {
    this._githubRepo.internalValue = value;
  }
  public resetGithubRepo() {
    this._githubRepo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubRepoInput() {
    return this._githubRepo.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new SynapseWorkspaceIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: SynapseWorkspaceIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SynapseWorkspaceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SynapseWorkspaceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      azuread_authentication_only: cdktn.booleanToTerraform(this._azureadAuthenticationOnly),
      compute_subnet_id: cdktn.stringToTerraform(this._computeSubnetId),
      data_exfiltration_protection_enabled: cdktn.booleanToTerraform(this._dataExfiltrationProtectionEnabled),
      id: cdktn.stringToTerraform(this._id),
      linking_allowed_for_aad_tenant_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._linkingAllowedForAadTenantIds),
      location: cdktn.stringToTerraform(this._location),
      managed_resource_group_name: cdktn.stringToTerraform(this._managedResourceGroupName),
      managed_virtual_network_enabled: cdktn.booleanToTerraform(this._managedVirtualNetworkEnabled),
      name: cdktn.stringToTerraform(this._name),
      public_network_access_enabled: cdktn.booleanToTerraform(this._publicNetworkAccessEnabled),
      purview_id: cdktn.stringToTerraform(this._purviewId),
      resource_group_name: cdktn.stringToTerraform(this._resourceGroupName),
      sql_administrator_login: cdktn.stringToTerraform(this._sqlAdministratorLogin),
      sql_administrator_login_password: cdktn.stringToTerraform(this._sqlAdministratorLoginPassword),
      sql_identity_control_enabled: cdktn.booleanToTerraform(this._sqlIdentityControlEnabled),
      storage_data_lake_gen2_filesystem_id: cdktn.stringToTerraform(this._storageDataLakeGen2FilesystemId),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      azure_devops_repo: synapseWorkspaceAzureDevopsRepoToTerraform(this._azureDevopsRepo.internalValue),
      customer_managed_key: synapseWorkspaceCustomerManagedKeyToTerraform(this._customerManagedKey.internalValue),
      github_repo: synapseWorkspaceGithubRepoToTerraform(this._githubRepo.internalValue),
      identity: synapseWorkspaceIdentityToTerraform(this._identity.internalValue),
      timeouts: synapseWorkspaceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      azuread_authentication_only: {
        value: cdktn.booleanToHclTerraform(this._azureadAuthenticationOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      compute_subnet_id: {
        value: cdktn.stringToHclTerraform(this._computeSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_exfiltration_protection_enabled: {
        value: cdktn.booleanToHclTerraform(this._dataExfiltrationProtectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linking_allowed_for_aad_tenant_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._linkingAllowedForAadTenantIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_resource_group_name: {
        value: cdktn.stringToHclTerraform(this._managedResourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_virtual_network_enabled: {
        value: cdktn.booleanToHclTerraform(this._managedVirtualNetworkEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_network_access_enabled: {
        value: cdktn.booleanToHclTerraform(this._publicNetworkAccessEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      purview_id: {
        value: cdktn.stringToHclTerraform(this._purviewId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktn.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sql_administrator_login: {
        value: cdktn.stringToHclTerraform(this._sqlAdministratorLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sql_administrator_login_password: {
        value: cdktn.stringToHclTerraform(this._sqlAdministratorLoginPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sql_identity_control_enabled: {
        value: cdktn.booleanToHclTerraform(this._sqlIdentityControlEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      storage_data_lake_gen2_filesystem_id: {
        value: cdktn.stringToHclTerraform(this._storageDataLakeGen2FilesystemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      azure_devops_repo: {
        value: synapseWorkspaceAzureDevopsRepoToHclTerraform(this._azureDevopsRepo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SynapseWorkspaceAzureDevopsRepoList",
      },
      customer_managed_key: {
        value: synapseWorkspaceCustomerManagedKeyToHclTerraform(this._customerManagedKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SynapseWorkspaceCustomerManagedKeyList",
      },
      github_repo: {
        value: synapseWorkspaceGithubRepoToHclTerraform(this._githubRepo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SynapseWorkspaceGithubRepoList",
      },
      identity: {
        value: synapseWorkspaceIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SynapseWorkspaceIdentityList",
      },
      timeouts: {
        value: synapseWorkspaceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SynapseWorkspaceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
