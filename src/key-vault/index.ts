/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface KeyVaultConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#access_policy KeyVault#access_policy}
  */
  readonly accessPolicy?: KeyVaultAccessPolicy[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#enabled_for_deployment KeyVault#enabled_for_deployment}
  */
  readonly enabledForDeployment?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#enabled_for_disk_encryption KeyVault#enabled_for_disk_encryption}
  */
  readonly enabledForDiskEncryption?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#enabled_for_template_deployment KeyVault#enabled_for_template_deployment}
  */
  readonly enabledForTemplateDeployment?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#id KeyVault#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#location KeyVault#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#name KeyVault#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#public_network_access_enabled KeyVault#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#purge_protection_enabled KeyVault#purge_protection_enabled}
  */
  readonly purgeProtectionEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#rbac_authorization_enabled KeyVault#rbac_authorization_enabled}
  */
  readonly rbacAuthorizationEnabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#resource_group_name KeyVault#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#sku_name KeyVault#sku_name}
  */
  readonly skuName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#soft_delete_retention_days KeyVault#soft_delete_retention_days}
  */
  readonly softDeleteRetentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#tags KeyVault#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#tenant_id KeyVault#tenant_id}
  */
  readonly tenantId: string;
  /**
  * network_acls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#network_acls KeyVault#network_acls}
  */
  readonly networkAcls?: KeyVaultNetworkAcls;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#timeouts KeyVault#timeouts}
  */
  readonly timeouts?: KeyVaultTimeouts;
}
export interface KeyVaultAccessPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#application_id KeyVault#application_id}
  */
  readonly applicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#certificate_permissions KeyVault#certificate_permissions}
  */
  readonly certificatePermissions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#key_permissions KeyVault#key_permissions}
  */
  readonly keyPermissions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#object_id KeyVault#object_id}
  */
  readonly objectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#secret_permissions KeyVault#secret_permissions}
  */
  readonly secretPermissions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#storage_permissions KeyVault#storage_permissions}
  */
  readonly storagePermissions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#tenant_id KeyVault#tenant_id}
  */
  readonly tenantId?: string;
}

export function keyVaultAccessPolicyToTerraform(struct?: KeyVaultAccessPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    application_id: struct!.applicationId === undefined ? null : cdktn.stringToTerraform(struct!.applicationId),
    certificate_permissions: struct!.certificatePermissions === undefined ? null : cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.certificatePermissions),
    key_permissions: struct!.keyPermissions === undefined ? null : cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.keyPermissions),
    object_id: struct!.objectId === undefined ? null : cdktn.stringToTerraform(struct!.objectId),
    secret_permissions: struct!.secretPermissions === undefined ? null : cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.secretPermissions),
    storage_permissions: struct!.storagePermissions === undefined ? null : cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.storagePermissions),
    tenant_id: struct!.tenantId === undefined ? null : cdktn.stringToTerraform(struct!.tenantId),
  }
}


export function keyVaultAccessPolicyToHclTerraform(struct?: KeyVaultAccessPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    application_id: {
      value: struct!.applicationId === undefined ? null : cdktn.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_permissions: {
      value: struct!.certificatePermissions === undefined ? null : cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.certificatePermissions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key_permissions: {
      value: struct!.keyPermissions === undefined ? null : cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.keyPermissions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    object_id: {
      value: struct!.objectId === undefined ? null : cdktn.stringToHclTerraform(struct!.objectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_permissions: {
      value: struct!.secretPermissions === undefined ? null : cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.secretPermissions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    storage_permissions: {
      value: struct!.storagePermissions === undefined ? null : cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.storagePermissions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tenant_id: {
      value: struct!.tenantId === undefined ? null : cdktn.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeyVaultAccessPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KeyVaultAccessPolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._certificatePermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificatePermissions = this._certificatePermissions;
    }
    if (this._keyPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPermissions = this._keyPermissions;
    }
    if (this._objectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectId = this._objectId;
    }
    if (this._secretPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretPermissions = this._secretPermissions;
    }
    if (this._storagePermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePermissions = this._storagePermissions;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyVaultAccessPolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationId = undefined;
      this._certificatePermissions = undefined;
      this._keyPermissions = undefined;
      this._objectId = undefined;
      this._secretPermissions = undefined;
      this._storagePermissions = undefined;
      this._tenantId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationId = value.applicationId;
      this._certificatePermissions = value.certificatePermissions;
      this._keyPermissions = value.keyPermissions;
      this._objectId = value.objectId;
      this._secretPermissions = value.secretPermissions;
      this._storagePermissions = value.storagePermissions;
      this._tenantId = value.tenantId;
    }
  }

  // application_id - computed: true, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // certificate_permissions - computed: true, optional: true, required: false
  private _certificatePermissions?: string[]; 
  public get certificatePermissions() {
    return this.getListAttribute('certificate_permissions');
  }
  public set certificatePermissions(value: string[]) {
    this._certificatePermissions = value;
  }
  public resetCertificatePermissions() {
    this._certificatePermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePermissionsInput() {
    return this._certificatePermissions;
  }

  // key_permissions - computed: true, optional: true, required: false
  private _keyPermissions?: string[]; 
  public get keyPermissions() {
    return this.getListAttribute('key_permissions');
  }
  public set keyPermissions(value: string[]) {
    this._keyPermissions = value;
  }
  public resetKeyPermissions() {
    this._keyPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPermissionsInput() {
    return this._keyPermissions;
  }

  // object_id - computed: true, optional: true, required: false
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  public resetObjectId() {
    this._objectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // secret_permissions - computed: true, optional: true, required: false
  private _secretPermissions?: string[]; 
  public get secretPermissions() {
    return this.getListAttribute('secret_permissions');
  }
  public set secretPermissions(value: string[]) {
    this._secretPermissions = value;
  }
  public resetSecretPermissions() {
    this._secretPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretPermissionsInput() {
    return this._secretPermissions;
  }

  // storage_permissions - computed: true, optional: true, required: false
  private _storagePermissions?: string[]; 
  public get storagePermissions() {
    return this.getListAttribute('storage_permissions');
  }
  public set storagePermissions(value: string[]) {
    this._storagePermissions = value;
  }
  public resetStoragePermissions() {
    this._storagePermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePermissionsInput() {
    return this._storagePermissions;
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

export class KeyVaultAccessPolicyList extends cdktn.ComplexList {
  public internalValue? : KeyVaultAccessPolicy[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): KeyVaultAccessPolicyOutputReference {
    return new KeyVaultAccessPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KeyVaultNetworkAcls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#bypass KeyVault#bypass}
  */
  readonly bypass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#default_action KeyVault#default_action}
  */
  readonly defaultAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#ip_rules KeyVault#ip_rules}
  */
  readonly ipRules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#virtual_network_subnet_ids KeyVault#virtual_network_subnet_ids}
  */
  readonly virtualNetworkSubnetIds?: string[];
}

export function keyVaultNetworkAclsToTerraform(struct?: KeyVaultNetworkAclsOutputReference | KeyVaultNetworkAcls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bypass: cdktn.stringToTerraform(struct!.bypass),
    default_action: cdktn.stringToTerraform(struct!.defaultAction),
    ip_rules: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ipRules),
    virtual_network_subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.virtualNetworkSubnetIds),
  }
}


export function keyVaultNetworkAclsToHclTerraform(struct?: KeyVaultNetworkAclsOutputReference | KeyVaultNetworkAcls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bypass: {
      value: cdktn.stringToHclTerraform(struct!.bypass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_action: {
      value: cdktn.stringToHclTerraform(struct!.defaultAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_rules: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.ipRules),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    virtual_network_subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.virtualNetworkSubnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeyVaultNetworkAclsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KeyVaultNetworkAcls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypass = this._bypass;
    }
    if (this._defaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAction = this._defaultAction;
    }
    if (this._ipRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRules = this._ipRules;
    }
    if (this._virtualNetworkSubnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkSubnetIds = this._virtualNetworkSubnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyVaultNetworkAcls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bypass = undefined;
      this._defaultAction = undefined;
      this._ipRules = undefined;
      this._virtualNetworkSubnetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bypass = value.bypass;
      this._defaultAction = value.defaultAction;
      this._ipRules = value.ipRules;
      this._virtualNetworkSubnetIds = value.virtualNetworkSubnetIds;
    }
  }

  // bypass - computed: false, optional: false, required: true
  private _bypass?: string; 
  public get bypass() {
    return this.getStringAttribute('bypass');
  }
  public set bypass(value: string) {
    this._bypass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassInput() {
    return this._bypass;
  }

  // default_action - computed: false, optional: false, required: true
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // ip_rules - computed: false, optional: true, required: false
  private _ipRules?: string[]; 
  public get ipRules() {
    return cdktn.Fn.tolist(this.getListAttribute('ip_rules'));
  }
  public set ipRules(value: string[]) {
    this._ipRules = value;
  }
  public resetIpRules() {
    this._ipRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRulesInput() {
    return this._ipRules;
  }

  // virtual_network_subnet_ids - computed: false, optional: true, required: false
  private _virtualNetworkSubnetIds?: string[]; 
  public get virtualNetworkSubnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('virtual_network_subnet_ids'));
  }
  public set virtualNetworkSubnetIds(value: string[]) {
    this._virtualNetworkSubnetIds = value;
  }
  public resetVirtualNetworkSubnetIds() {
    this._virtualNetworkSubnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkSubnetIdsInput() {
    return this._virtualNetworkSubnetIds;
  }
}
export interface KeyVaultTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#create KeyVault#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#delete KeyVault#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#read KeyVault#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#update KeyVault#update}
  */
  readonly update?: string;
}

export function keyVaultTimeoutsToTerraform(struct?: KeyVaultTimeouts | cdktn.IResolvable): any {
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


export function keyVaultTimeoutsToHclTerraform(struct?: KeyVaultTimeouts | cdktn.IResolvable): any {
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

export class KeyVaultTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeyVaultTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: KeyVaultTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault azurerm_key_vault}
*/
export class KeyVault extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_key_vault";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a KeyVault resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeyVault to import
  * @param importFromId The id of the existing KeyVault that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeyVault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_key_vault", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/key_vault azurerm_key_vault} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyVaultConfig
  */
  public constructor(scope: Construct, id: string, config: KeyVaultConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_key_vault',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '5.2.0',
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
    this._accessPolicy.internalValue = config.accessPolicy;
    this._enabledForDeployment = config.enabledForDeployment;
    this._enabledForDiskEncryption = config.enabledForDiskEncryption;
    this._enabledForTemplateDeployment = config.enabledForTemplateDeployment;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._purgeProtectionEnabled = config.purgeProtectionEnabled;
    this._rbacAuthorizationEnabled = config.rbacAuthorizationEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._softDeleteRetentionDays = config.softDeleteRetentionDays;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
    this._networkAcls.internalValue = config.networkAcls;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy - computed: true, optional: true, required: false
  private _accessPolicy = new KeyVaultAccessPolicyList(this, "access_policy", false);
  public get accessPolicy() {
    return this._accessPolicy;
  }
  public putAccessPolicy(value: KeyVaultAccessPolicy[] | cdktn.IResolvable) {
    this._accessPolicy.internalValue = value;
  }
  public resetAccessPolicy() {
    this._accessPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyInput() {
    return this._accessPolicy.internalValue;
  }

  // enabled_for_deployment - computed: false, optional: true, required: false
  private _enabledForDeployment?: boolean | cdktn.IResolvable; 
  public get enabledForDeployment() {
    return this.getBooleanAttribute('enabled_for_deployment');
  }
  public set enabledForDeployment(value: boolean | cdktn.IResolvable) {
    this._enabledForDeployment = value;
  }
  public resetEnabledForDeployment() {
    this._enabledForDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledForDeploymentInput() {
    return this._enabledForDeployment;
  }

  // enabled_for_disk_encryption - computed: false, optional: true, required: false
  private _enabledForDiskEncryption?: boolean | cdktn.IResolvable; 
  public get enabledForDiskEncryption() {
    return this.getBooleanAttribute('enabled_for_disk_encryption');
  }
  public set enabledForDiskEncryption(value: boolean | cdktn.IResolvable) {
    this._enabledForDiskEncryption = value;
  }
  public resetEnabledForDiskEncryption() {
    this._enabledForDiskEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledForDiskEncryptionInput() {
    return this._enabledForDiskEncryption;
  }

  // enabled_for_template_deployment - computed: false, optional: true, required: false
  private _enabledForTemplateDeployment?: boolean | cdktn.IResolvable; 
  public get enabledForTemplateDeployment() {
    return this.getBooleanAttribute('enabled_for_template_deployment');
  }
  public set enabledForTemplateDeployment(value: boolean | cdktn.IResolvable) {
    this._enabledForTemplateDeployment = value;
  }
  public resetEnabledForTemplateDeployment() {
    this._enabledForTemplateDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledForTemplateDeploymentInput() {
    return this._enabledForTemplateDeployment;
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

  // purge_protection_enabled - computed: false, optional: true, required: false
  private _purgeProtectionEnabled?: boolean | cdktn.IResolvable; 
  public get purgeProtectionEnabled() {
    return this.getBooleanAttribute('purge_protection_enabled');
  }
  public set purgeProtectionEnabled(value: boolean | cdktn.IResolvable) {
    this._purgeProtectionEnabled = value;
  }
  public resetPurgeProtectionEnabled() {
    this._purgeProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeProtectionEnabledInput() {
    return this._purgeProtectionEnabled;
  }

  // rbac_authorization_enabled - computed: false, optional: false, required: true
  private _rbacAuthorizationEnabled?: boolean | cdktn.IResolvable; 
  public get rbacAuthorizationEnabled() {
    return this.getBooleanAttribute('rbac_authorization_enabled');
  }
  public set rbacAuthorizationEnabled(value: boolean | cdktn.IResolvable) {
    this._rbacAuthorizationEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rbacAuthorizationEnabledInput() {
    return this._rbacAuthorizationEnabled;
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

  // sku_name - computed: false, optional: false, required: true
  private _skuName?: string; 
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName;
  }

  // soft_delete_retention_days - computed: false, optional: true, required: false
  private _softDeleteRetentionDays?: number; 
  public get softDeleteRetentionDays() {
    return this.getNumberAttribute('soft_delete_retention_days');
  }
  public set softDeleteRetentionDays(value: number) {
    this._softDeleteRetentionDays = value;
  }
  public resetSoftDeleteRetentionDays() {
    this._softDeleteRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softDeleteRetentionDaysInput() {
    return this._softDeleteRetentionDays;
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

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // vault_uri - computed: true, optional: false, required: false
  public get vaultUri() {
    return this.getStringAttribute('vault_uri');
  }

  // network_acls - computed: false, optional: true, required: false
  private _networkAcls = new KeyVaultNetworkAclsOutputReference(this, "network_acls");
  public get networkAcls() {
    return this._networkAcls;
  }
  public putNetworkAcls(value: KeyVaultNetworkAcls) {
    this._networkAcls.internalValue = value;
  }
  public resetNetworkAcls() {
    this._networkAcls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAclsInput() {
    return this._networkAcls.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KeyVaultTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KeyVaultTimeouts) {
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
      access_policy: cdktn.listMapper(keyVaultAccessPolicyToTerraform, false)(this._accessPolicy.internalValue),
      enabled_for_deployment: cdktn.booleanToTerraform(this._enabledForDeployment),
      enabled_for_disk_encryption: cdktn.booleanToTerraform(this._enabledForDiskEncryption),
      enabled_for_template_deployment: cdktn.booleanToTerraform(this._enabledForTemplateDeployment),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      public_network_access_enabled: cdktn.booleanToTerraform(this._publicNetworkAccessEnabled),
      purge_protection_enabled: cdktn.booleanToTerraform(this._purgeProtectionEnabled),
      rbac_authorization_enabled: cdktn.booleanToTerraform(this._rbacAuthorizationEnabled),
      resource_group_name: cdktn.stringToTerraform(this._resourceGroupName),
      sku_name: cdktn.stringToTerraform(this._skuName),
      soft_delete_retention_days: cdktn.numberToTerraform(this._softDeleteRetentionDays),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tenant_id: cdktn.stringToTerraform(this._tenantId),
      network_acls: keyVaultNetworkAclsToTerraform(this._networkAcls.internalValue),
      timeouts: keyVaultTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_policy: {
        value: cdktn.listMapperHcl(keyVaultAccessPolicyToHclTerraform, false)(this._accessPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KeyVaultAccessPolicyList",
      },
      enabled_for_deployment: {
        value: cdktn.booleanToHclTerraform(this._enabledForDeployment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled_for_disk_encryption: {
        value: cdktn.booleanToHclTerraform(this._enabledForDiskEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled_for_template_deployment: {
        value: cdktn.booleanToHclTerraform(this._enabledForTemplateDeployment),
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
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      purge_protection_enabled: {
        value: cdktn.booleanToHclTerraform(this._purgeProtectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rbac_authorization_enabled: {
        value: cdktn.booleanToHclTerraform(this._rbacAuthorizationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_group_name: {
        value: cdktn.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sku_name: {
        value: cdktn.stringToHclTerraform(this._skuName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      soft_delete_retention_days: {
        value: cdktn.numberToHclTerraform(this._softDeleteRetentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tenant_id: {
        value: cdktn.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_acls: {
        value: keyVaultNetworkAclsToHclTerraform(this._networkAcls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KeyVaultNetworkAclsList",
      },
      timeouts: {
        value: keyVaultTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KeyVaultTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
