/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SiteRecoveryReplicatedVmConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#id SiteRecoveryReplicatedVm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#managed_disk SiteRecoveryReplicatedVm#managed_disk}
  */
  readonly managedDisk?: SiteRecoveryReplicatedVmManagedDisk[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#multi_vm_group_name SiteRecoveryReplicatedVm#multi_vm_group_name}
  */
  readonly multiVmGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#name SiteRecoveryReplicatedVm#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#network_interface SiteRecoveryReplicatedVm#network_interface}
  */
  readonly networkInterface?: SiteRecoveryReplicatedVmNetworkInterface[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#recovery_replication_policy_id SiteRecoveryReplicatedVm#recovery_replication_policy_id}
  */
  readonly recoveryReplicationPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#recovery_vault_name SiteRecoveryReplicatedVm#recovery_vault_name}
  */
  readonly recoveryVaultName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#resource_group_name SiteRecoveryReplicatedVm#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#source_recovery_fabric_name SiteRecoveryReplicatedVm#source_recovery_fabric_name}
  */
  readonly sourceRecoveryFabricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#source_recovery_protection_container_name SiteRecoveryReplicatedVm#source_recovery_protection_container_name}
  */
  readonly sourceRecoveryProtectionContainerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#source_vm_id SiteRecoveryReplicatedVm#source_vm_id}
  */
  readonly sourceVmId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#target_availability_set_id SiteRecoveryReplicatedVm#target_availability_set_id}
  */
  readonly targetAvailabilitySetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#target_boot_diagnostic_storage_account_id SiteRecoveryReplicatedVm#target_boot_diagnostic_storage_account_id}
  */
  readonly targetBootDiagnosticStorageAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#target_capacity_reservation_group_id SiteRecoveryReplicatedVm#target_capacity_reservation_group_id}
  */
  readonly targetCapacityReservationGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#target_edge_zone SiteRecoveryReplicatedVm#target_edge_zone}
  */
  readonly targetEdgeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#target_network_id SiteRecoveryReplicatedVm#target_network_id}
  */
  readonly targetNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#target_proximity_placement_group_id SiteRecoveryReplicatedVm#target_proximity_placement_group_id}
  */
  readonly targetProximityPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#target_recovery_fabric_id SiteRecoveryReplicatedVm#target_recovery_fabric_id}
  */
  readonly targetRecoveryFabricId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#target_recovery_protection_container_id SiteRecoveryReplicatedVm#target_recovery_protection_container_id}
  */
  readonly targetRecoveryProtectionContainerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#target_resource_group_id SiteRecoveryReplicatedVm#target_resource_group_id}
  */
  readonly targetResourceGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#target_virtual_machine_scale_set_id SiteRecoveryReplicatedVm#target_virtual_machine_scale_set_id}
  */
  readonly targetVirtualMachineScaleSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#target_virtual_machine_size SiteRecoveryReplicatedVm#target_virtual_machine_size}
  */
  readonly targetVirtualMachineSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#target_zone SiteRecoveryReplicatedVm#target_zone}
  */
  readonly targetZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#test_network_id SiteRecoveryReplicatedVm#test_network_id}
  */
  readonly testNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#unmanaged_disk SiteRecoveryReplicatedVm#unmanaged_disk}
  */
  readonly unmanagedDisk?: SiteRecoveryReplicatedVmUnmanagedDisk[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#timeouts SiteRecoveryReplicatedVm#timeouts}
  */
  readonly timeouts?: SiteRecoveryReplicatedVmTimeouts;
}
export interface SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#secret_url SiteRecoveryReplicatedVm#secret_url}
  */
  readonly secretUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#vault_id SiteRecoveryReplicatedVm#vault_id}
  */
  readonly vaultId?: string;
}

export function siteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyToTerraform(struct?: SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret_url: cdktn.stringToTerraform(struct!.secretUrl),
    vault_id: cdktn.stringToTerraform(struct!.vaultId),
  }
}


export function siteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyToHclTerraform(struct?: SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret_url: {
      value: cdktn.stringToHclTerraform(struct!.secretUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_id: {
      value: cdktn.stringToHclTerraform(struct!.vaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretUrl = this._secretUrl;
    }
    if (this._vaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultId = this._vaultId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretUrl = undefined;
      this._vaultId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretUrl = value.secretUrl;
      this._vaultId = value.vaultId;
    }
  }

  // secret_url - computed: true, optional: true, required: false
  private _secretUrl?: string; 
  public get secretUrl() {
    return this.getStringAttribute('secret_url');
  }
  public set secretUrl(value: string) {
    this._secretUrl = value;
  }
  public resetSecretUrl() {
    this._secretUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretUrlInput() {
    return this._secretUrl;
  }

  // vault_id - computed: true, optional: true, required: false
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  public resetVaultId() {
    this._vaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }
}

export class SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList extends cdktn.ComplexList {
  public internalValue? : SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKey[] | cdktn.IResolvable

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
  public get(index: number): SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference {
    return new SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#key_url SiteRecoveryReplicatedVm#key_url}
  */
  readonly keyUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#vault_id SiteRecoveryReplicatedVm#vault_id}
  */
  readonly vaultId?: string;
}

export function siteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyToTerraform(struct?: SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_url: cdktn.stringToTerraform(struct!.keyUrl),
    vault_id: cdktn.stringToTerraform(struct!.vaultId),
  }
}


export function siteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyToHclTerraform(struct?: SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_url: {
      value: cdktn.stringToHclTerraform(struct!.keyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_id: {
      value: cdktn.stringToHclTerraform(struct!.vaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUrl = this._keyUrl;
    }
    if (this._vaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultId = this._vaultId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyUrl = undefined;
      this._vaultId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyUrl = value.keyUrl;
      this._vaultId = value.vaultId;
    }
  }

  // key_url - computed: true, optional: true, required: false
  private _keyUrl?: string; 
  public get keyUrl() {
    return this.getStringAttribute('key_url');
  }
  public set keyUrl(value: string) {
    this._keyUrl = value;
  }
  public resetKeyUrl() {
    this._keyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUrlInput() {
    return this._keyUrl;
  }

  // vault_id - computed: true, optional: true, required: false
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  public resetVaultId() {
    this._vaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }
}

export class SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList extends cdktn.ComplexList {
  public internalValue? : SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKey[] | cdktn.IResolvable

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
  public get(index: number): SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference {
    return new SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#disk_encryption_key SiteRecoveryReplicatedVm#disk_encryption_key}
  */
  readonly diskEncryptionKey?: SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKey[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#key_encryption_key SiteRecoveryReplicatedVm#key_encryption_key}
  */
  readonly keyEncryptionKey?: SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKey[] | cdktn.IResolvable;
}

export function siteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionToTerraform(struct?: SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disk_encryption_key: cdktn.listMapper(siteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyToTerraform, false)(struct!.diskEncryptionKey),
    key_encryption_key: cdktn.listMapper(siteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyToTerraform, false)(struct!.keyEncryptionKey),
  }
}


export function siteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionToHclTerraform(struct?: SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disk_encryption_key: {
      value: cdktn.listMapperHcl(siteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyToHclTerraform, false)(struct!.diskEncryptionKey),
      isBlock: true,
      type: "list",
      storageClassType: "SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList",
    },
    key_encryption_key: {
      value: cdktn.listMapperHcl(siteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyToHclTerraform, false)(struct!.keyEncryptionKey),
      isBlock: true,
      type: "list",
      storageClassType: "SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryption | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskEncryptionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionKey = this._diskEncryptionKey?.internalValue;
    }
    if (this._keyEncryptionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyEncryptionKey = this._keyEncryptionKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryption | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskEncryptionKey.internalValue = undefined;
      this._keyEncryptionKey.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskEncryptionKey.internalValue = value.diskEncryptionKey;
      this._keyEncryptionKey.internalValue = value.keyEncryptionKey;
    }
  }

  // disk_encryption_key - computed: true, optional: true, required: false
  private _diskEncryptionKey = new SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKeyList(this, "disk_encryption_key", false);
  public get diskEncryptionKey() {
    return this._diskEncryptionKey;
  }
  public putDiskEncryptionKey(value: SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionDiskEncryptionKey[] | cdktn.IResolvable) {
    this._diskEncryptionKey.internalValue = value;
  }
  public resetDiskEncryptionKey() {
    this._diskEncryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionKeyInput() {
    return this._diskEncryptionKey.internalValue;
  }

  // key_encryption_key - computed: true, optional: true, required: false
  private _keyEncryptionKey = new SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKeyList(this, "key_encryption_key", false);
  public get keyEncryptionKey() {
    return this._keyEncryptionKey;
  }
  public putKeyEncryptionKey(value: SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionKeyEncryptionKey[] | cdktn.IResolvable) {
    this._keyEncryptionKey.internalValue = value;
  }
  public resetKeyEncryptionKey() {
    this._keyEncryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyEncryptionKeyInput() {
    return this._keyEncryptionKey.internalValue;
  }
}

export class SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList extends cdktn.ComplexList {
  public internalValue? : SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryption[] | cdktn.IResolvable

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
  public get(index: number): SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference {
    return new SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteRecoveryReplicatedVmManagedDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#disk_id SiteRecoveryReplicatedVm#disk_id}
  */
  readonly diskId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#staging_storage_account_id SiteRecoveryReplicatedVm#staging_storage_account_id}
  */
  readonly stagingStorageAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#target_disk_encryption SiteRecoveryReplicatedVm#target_disk_encryption}
  */
  readonly targetDiskEncryption?: SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryption[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#target_disk_encryption_set_id SiteRecoveryReplicatedVm#target_disk_encryption_set_id}
  */
  readonly targetDiskEncryptionSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#target_disk_type SiteRecoveryReplicatedVm#target_disk_type}
  */
  readonly targetDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#target_replica_disk_type SiteRecoveryReplicatedVm#target_replica_disk_type}
  */
  readonly targetReplicaDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#target_resource_group_id SiteRecoveryReplicatedVm#target_resource_group_id}
  */
  readonly targetResourceGroupId?: string;
}

export function siteRecoveryReplicatedVmManagedDiskToTerraform(struct?: SiteRecoveryReplicatedVmManagedDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disk_id: struct!.diskId === undefined ? null : cdktn.stringToTerraform(struct!.diskId),
    staging_storage_account_id: struct!.stagingStorageAccountId === undefined ? null : cdktn.stringToTerraform(struct!.stagingStorageAccountId),
    target_disk_encryption: struct!.targetDiskEncryption === undefined ? null : cdktn.listMapper(siteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionToTerraform, false)(struct!.targetDiskEncryption),
    target_disk_encryption_set_id: struct!.targetDiskEncryptionSetId === undefined ? null : cdktn.stringToTerraform(struct!.targetDiskEncryptionSetId),
    target_disk_type: struct!.targetDiskType === undefined ? null : cdktn.stringToTerraform(struct!.targetDiskType),
    target_replica_disk_type: struct!.targetReplicaDiskType === undefined ? null : cdktn.stringToTerraform(struct!.targetReplicaDiskType),
    target_resource_group_id: struct!.targetResourceGroupId === undefined ? null : cdktn.stringToTerraform(struct!.targetResourceGroupId),
  }
}


export function siteRecoveryReplicatedVmManagedDiskToHclTerraform(struct?: SiteRecoveryReplicatedVmManagedDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disk_id: {
      value: struct!.diskId === undefined ? null : cdktn.stringToHclTerraform(struct!.diskId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    staging_storage_account_id: {
      value: struct!.stagingStorageAccountId === undefined ? null : cdktn.stringToHclTerraform(struct!.stagingStorageAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_disk_encryption: {
      value: struct!.targetDiskEncryption === undefined ? null : cdktn.listMapperHcl(siteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionToHclTerraform, false)(struct!.targetDiskEncryption),
      isBlock: true,
      type: "list",
      storageClassType: "SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList",
    },
    target_disk_encryption_set_id: {
      value: struct!.targetDiskEncryptionSetId === undefined ? null : cdktn.stringToHclTerraform(struct!.targetDiskEncryptionSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_disk_type: {
      value: struct!.targetDiskType === undefined ? null : cdktn.stringToHclTerraform(struct!.targetDiskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_replica_disk_type: {
      value: struct!.targetReplicaDiskType === undefined ? null : cdktn.stringToHclTerraform(struct!.targetReplicaDiskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_resource_group_id: {
      value: struct!.targetResourceGroupId === undefined ? null : cdktn.stringToHclTerraform(struct!.targetResourceGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteRecoveryReplicatedVmManagedDiskOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SiteRecoveryReplicatedVmManagedDisk | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskId = this._diskId;
    }
    if (this._stagingStorageAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.stagingStorageAccountId = this._stagingStorageAccountId;
    }
    if (this._targetDiskEncryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDiskEncryption = this._targetDiskEncryption?.internalValue;
    }
    if (this._targetDiskEncryptionSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDiskEncryptionSetId = this._targetDiskEncryptionSetId;
    }
    if (this._targetDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDiskType = this._targetDiskType;
    }
    if (this._targetReplicaDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetReplicaDiskType = this._targetReplicaDiskType;
    }
    if (this._targetResourceGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetResourceGroupId = this._targetResourceGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteRecoveryReplicatedVmManagedDisk | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskId = undefined;
      this._stagingStorageAccountId = undefined;
      this._targetDiskEncryption.internalValue = undefined;
      this._targetDiskEncryptionSetId = undefined;
      this._targetDiskType = undefined;
      this._targetReplicaDiskType = undefined;
      this._targetResourceGroupId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskId = value.diskId;
      this._stagingStorageAccountId = value.stagingStorageAccountId;
      this._targetDiskEncryption.internalValue = value.targetDiskEncryption;
      this._targetDiskEncryptionSetId = value.targetDiskEncryptionSetId;
      this._targetDiskType = value.targetDiskType;
      this._targetReplicaDiskType = value.targetReplicaDiskType;
      this._targetResourceGroupId = value.targetResourceGroupId;
    }
  }

  // disk_id - computed: true, optional: true, required: false
  private _diskId?: string; 
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }
  public set diskId(value: string) {
    this._diskId = value;
  }
  public resetDiskId() {
    this._diskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // staging_storage_account_id - computed: true, optional: true, required: false
  private _stagingStorageAccountId?: string; 
  public get stagingStorageAccountId() {
    return this.getStringAttribute('staging_storage_account_id');
  }
  public set stagingStorageAccountId(value: string) {
    this._stagingStorageAccountId = value;
  }
  public resetStagingStorageAccountId() {
    this._stagingStorageAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingStorageAccountIdInput() {
    return this._stagingStorageAccountId;
  }

  // target_disk_encryption - computed: true, optional: true, required: false
  private _targetDiskEncryption = new SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryptionList(this, "target_disk_encryption", false);
  public get targetDiskEncryption() {
    return this._targetDiskEncryption;
  }
  public putTargetDiskEncryption(value: SiteRecoveryReplicatedVmManagedDiskTargetDiskEncryption[] | cdktn.IResolvable) {
    this._targetDiskEncryption.internalValue = value;
  }
  public resetTargetDiskEncryption() {
    this._targetDiskEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDiskEncryptionInput() {
    return this._targetDiskEncryption.internalValue;
  }

  // target_disk_encryption_set_id - computed: true, optional: true, required: false
  private _targetDiskEncryptionSetId?: string; 
  public get targetDiskEncryptionSetId() {
    return this.getStringAttribute('target_disk_encryption_set_id');
  }
  public set targetDiskEncryptionSetId(value: string) {
    this._targetDiskEncryptionSetId = value;
  }
  public resetTargetDiskEncryptionSetId() {
    this._targetDiskEncryptionSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDiskEncryptionSetIdInput() {
    return this._targetDiskEncryptionSetId;
  }

  // target_disk_type - computed: true, optional: true, required: false
  private _targetDiskType?: string; 
  public get targetDiskType() {
    return this.getStringAttribute('target_disk_type');
  }
  public set targetDiskType(value: string) {
    this._targetDiskType = value;
  }
  public resetTargetDiskType() {
    this._targetDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDiskTypeInput() {
    return this._targetDiskType;
  }

  // target_replica_disk_type - computed: true, optional: true, required: false
  private _targetReplicaDiskType?: string; 
  public get targetReplicaDiskType() {
    return this.getStringAttribute('target_replica_disk_type');
  }
  public set targetReplicaDiskType(value: string) {
    this._targetReplicaDiskType = value;
  }
  public resetTargetReplicaDiskType() {
    this._targetReplicaDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetReplicaDiskTypeInput() {
    return this._targetReplicaDiskType;
  }

  // target_resource_group_id - computed: true, optional: true, required: false
  private _targetResourceGroupId?: string; 
  public get targetResourceGroupId() {
    return this.getStringAttribute('target_resource_group_id');
  }
  public set targetResourceGroupId(value: string) {
    this._targetResourceGroupId = value;
  }
  public resetTargetResourceGroupId() {
    this._targetResourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceGroupIdInput() {
    return this._targetResourceGroupId;
  }
}

export class SiteRecoveryReplicatedVmManagedDiskList extends cdktn.ComplexList {
  public internalValue? : SiteRecoveryReplicatedVmManagedDisk[] | cdktn.IResolvable

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
  public get(index: number): SiteRecoveryReplicatedVmManagedDiskOutputReference {
    return new SiteRecoveryReplicatedVmManagedDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteRecoveryReplicatedVmNetworkInterfaceIpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#failover_test_public_ip_address_id SiteRecoveryReplicatedVm#failover_test_public_ip_address_id}
  */
  readonly failoverTestPublicIpAddressId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#failover_test_static_ip SiteRecoveryReplicatedVm#failover_test_static_ip}
  */
  readonly failoverTestStaticIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#failover_test_subnet_name SiteRecoveryReplicatedVm#failover_test_subnet_name}
  */
  readonly failoverTestSubnetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#name SiteRecoveryReplicatedVm#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#primary SiteRecoveryReplicatedVm#primary}
  */
  readonly primary?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#recovery_load_balancer_backend_address_pool_ids SiteRecoveryReplicatedVm#recovery_load_balancer_backend_address_pool_ids}
  */
  readonly recoveryLoadBalancerBackendAddressPoolIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#recovery_public_ip_address_id SiteRecoveryReplicatedVm#recovery_public_ip_address_id}
  */
  readonly recoveryPublicIpAddressId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#target_static_ip SiteRecoveryReplicatedVm#target_static_ip}
  */
  readonly targetStaticIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#target_subnet_name SiteRecoveryReplicatedVm#target_subnet_name}
  */
  readonly targetSubnetName?: string;
}

export function siteRecoveryReplicatedVmNetworkInterfaceIpConfigurationToTerraform(struct?: SiteRecoveryReplicatedVmNetworkInterfaceIpConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    failover_test_public_ip_address_id: cdktn.stringToTerraform(struct!.failoverTestPublicIpAddressId),
    failover_test_static_ip: cdktn.stringToTerraform(struct!.failoverTestStaticIp),
    failover_test_subnet_name: cdktn.stringToTerraform(struct!.failoverTestSubnetName),
    name: cdktn.stringToTerraform(struct!.name),
    primary: cdktn.booleanToTerraform(struct!.primary),
    recovery_load_balancer_backend_address_pool_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.recoveryLoadBalancerBackendAddressPoolIds),
    recovery_public_ip_address_id: cdktn.stringToTerraform(struct!.recoveryPublicIpAddressId),
    target_static_ip: cdktn.stringToTerraform(struct!.targetStaticIp),
    target_subnet_name: cdktn.stringToTerraform(struct!.targetSubnetName),
  }
}


export function siteRecoveryReplicatedVmNetworkInterfaceIpConfigurationToHclTerraform(struct?: SiteRecoveryReplicatedVmNetworkInterfaceIpConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    failover_test_public_ip_address_id: {
      value: cdktn.stringToHclTerraform(struct!.failoverTestPublicIpAddressId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failover_test_static_ip: {
      value: cdktn.stringToHclTerraform(struct!.failoverTestStaticIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failover_test_subnet_name: {
      value: cdktn.stringToHclTerraform(struct!.failoverTestSubnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary: {
      value: cdktn.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recovery_load_balancer_backend_address_pool_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.recoveryLoadBalancerBackendAddressPoolIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    recovery_public_ip_address_id: {
      value: cdktn.stringToHclTerraform(struct!.recoveryPublicIpAddressId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_static_ip: {
      value: cdktn.stringToHclTerraform(struct!.targetStaticIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_subnet_name: {
      value: cdktn.stringToHclTerraform(struct!.targetSubnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteRecoveryReplicatedVmNetworkInterfaceIpConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SiteRecoveryReplicatedVmNetworkInterfaceIpConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failoverTestPublicIpAddressId !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverTestPublicIpAddressId = this._failoverTestPublicIpAddressId;
    }
    if (this._failoverTestStaticIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverTestStaticIp = this._failoverTestStaticIp;
    }
    if (this._failoverTestSubnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverTestSubnetName = this._failoverTestSubnetName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._recoveryLoadBalancerBackendAddressPoolIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryLoadBalancerBackendAddressPoolIds = this._recoveryLoadBalancerBackendAddressPoolIds;
    }
    if (this._recoveryPublicIpAddressId !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryPublicIpAddressId = this._recoveryPublicIpAddressId;
    }
    if (this._targetStaticIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetStaticIp = this._targetStaticIp;
    }
    if (this._targetSubnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetSubnetName = this._targetSubnetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteRecoveryReplicatedVmNetworkInterfaceIpConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failoverTestPublicIpAddressId = undefined;
      this._failoverTestStaticIp = undefined;
      this._failoverTestSubnetName = undefined;
      this._name = undefined;
      this._primary = undefined;
      this._recoveryLoadBalancerBackendAddressPoolIds = undefined;
      this._recoveryPublicIpAddressId = undefined;
      this._targetStaticIp = undefined;
      this._targetSubnetName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failoverTestPublicIpAddressId = value.failoverTestPublicIpAddressId;
      this._failoverTestStaticIp = value.failoverTestStaticIp;
      this._failoverTestSubnetName = value.failoverTestSubnetName;
      this._name = value.name;
      this._primary = value.primary;
      this._recoveryLoadBalancerBackendAddressPoolIds = value.recoveryLoadBalancerBackendAddressPoolIds;
      this._recoveryPublicIpAddressId = value.recoveryPublicIpAddressId;
      this._targetStaticIp = value.targetStaticIp;
      this._targetSubnetName = value.targetSubnetName;
    }
  }

  // failover_test_public_ip_address_id - computed: true, optional: true, required: false
  private _failoverTestPublicIpAddressId?: string; 
  public get failoverTestPublicIpAddressId() {
    return this.getStringAttribute('failover_test_public_ip_address_id');
  }
  public set failoverTestPublicIpAddressId(value: string) {
    this._failoverTestPublicIpAddressId = value;
  }
  public resetFailoverTestPublicIpAddressId() {
    this._failoverTestPublicIpAddressId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverTestPublicIpAddressIdInput() {
    return this._failoverTestPublicIpAddressId;
  }

  // failover_test_static_ip - computed: true, optional: true, required: false
  private _failoverTestStaticIp?: string; 
  public get failoverTestStaticIp() {
    return this.getStringAttribute('failover_test_static_ip');
  }
  public set failoverTestStaticIp(value: string) {
    this._failoverTestStaticIp = value;
  }
  public resetFailoverTestStaticIp() {
    this._failoverTestStaticIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverTestStaticIpInput() {
    return this._failoverTestStaticIp;
  }

  // failover_test_subnet_name - computed: true, optional: true, required: false
  private _failoverTestSubnetName?: string; 
  public get failoverTestSubnetName() {
    return this.getStringAttribute('failover_test_subnet_name');
  }
  public set failoverTestSubnetName(value: string) {
    this._failoverTestSubnetName = value;
  }
  public resetFailoverTestSubnetName() {
    this._failoverTestSubnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverTestSubnetNameInput() {
    return this._failoverTestSubnetName;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // primary - computed: true, optional: true, required: false
  private _primary?: boolean | cdktn.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktn.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // recovery_load_balancer_backend_address_pool_ids - computed: true, optional: true, required: false
  private _recoveryLoadBalancerBackendAddressPoolIds?: string[]; 
  public get recoveryLoadBalancerBackendAddressPoolIds() {
    return cdktn.Fn.tolist(this.getListAttribute('recovery_load_balancer_backend_address_pool_ids'));
  }
  public set recoveryLoadBalancerBackendAddressPoolIds(value: string[]) {
    this._recoveryLoadBalancerBackendAddressPoolIds = value;
  }
  public resetRecoveryLoadBalancerBackendAddressPoolIds() {
    this._recoveryLoadBalancerBackendAddressPoolIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryLoadBalancerBackendAddressPoolIdsInput() {
    return this._recoveryLoadBalancerBackendAddressPoolIds;
  }

  // recovery_public_ip_address_id - computed: true, optional: true, required: false
  private _recoveryPublicIpAddressId?: string; 
  public get recoveryPublicIpAddressId() {
    return this.getStringAttribute('recovery_public_ip_address_id');
  }
  public set recoveryPublicIpAddressId(value: string) {
    this._recoveryPublicIpAddressId = value;
  }
  public resetRecoveryPublicIpAddressId() {
    this._recoveryPublicIpAddressId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPublicIpAddressIdInput() {
    return this._recoveryPublicIpAddressId;
  }

  // target_static_ip - computed: true, optional: true, required: false
  private _targetStaticIp?: string; 
  public get targetStaticIp() {
    return this.getStringAttribute('target_static_ip');
  }
  public set targetStaticIp(value: string) {
    this._targetStaticIp = value;
  }
  public resetTargetStaticIp() {
    this._targetStaticIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetStaticIpInput() {
    return this._targetStaticIp;
  }

  // target_subnet_name - computed: true, optional: true, required: false
  private _targetSubnetName?: string; 
  public get targetSubnetName() {
    return this.getStringAttribute('target_subnet_name');
  }
  public set targetSubnetName(value: string) {
    this._targetSubnetName = value;
  }
  public resetTargetSubnetName() {
    this._targetSubnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSubnetNameInput() {
    return this._targetSubnetName;
  }
}

export class SiteRecoveryReplicatedVmNetworkInterfaceIpConfigurationList extends cdktn.ComplexList {
  public internalValue? : SiteRecoveryReplicatedVmNetworkInterfaceIpConfiguration[] | cdktn.IResolvable

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
  public get(index: number): SiteRecoveryReplicatedVmNetworkInterfaceIpConfigurationOutputReference {
    return new SiteRecoveryReplicatedVmNetworkInterfaceIpConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteRecoveryReplicatedVmNetworkInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#ip_configuration SiteRecoveryReplicatedVm#ip_configuration}
  */
  readonly ipConfiguration?: SiteRecoveryReplicatedVmNetworkInterfaceIpConfiguration[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#source_network_interface_id SiteRecoveryReplicatedVm#source_network_interface_id}
  */
  readonly sourceNetworkInterfaceId?: string;
}

export function siteRecoveryReplicatedVmNetworkInterfaceToTerraform(struct?: SiteRecoveryReplicatedVmNetworkInterface | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ip_configuration: cdktn.listMapper(siteRecoveryReplicatedVmNetworkInterfaceIpConfigurationToTerraform, false)(struct!.ipConfiguration),
    source_network_interface_id: struct!.sourceNetworkInterfaceId === undefined ? null : cdktn.stringToTerraform(struct!.sourceNetworkInterfaceId),
  }
}


export function siteRecoveryReplicatedVmNetworkInterfaceToHclTerraform(struct?: SiteRecoveryReplicatedVmNetworkInterface | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ip_configuration: {
      value: cdktn.listMapperHcl(siteRecoveryReplicatedVmNetworkInterfaceIpConfigurationToHclTerraform, false)(struct!.ipConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SiteRecoveryReplicatedVmNetworkInterfaceIpConfigurationList",
    },
    source_network_interface_id: {
      value: struct!.sourceNetworkInterfaceId === undefined ? null : cdktn.stringToHclTerraform(struct!.sourceNetworkInterfaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteRecoveryReplicatedVmNetworkInterfaceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SiteRecoveryReplicatedVmNetworkInterface | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipConfiguration = this._ipConfiguration?.internalValue;
    }
    if (this._sourceNetworkInterfaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceNetworkInterfaceId = this._sourceNetworkInterfaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteRecoveryReplicatedVmNetworkInterface | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipConfiguration.internalValue = undefined;
      this._sourceNetworkInterfaceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipConfiguration.internalValue = value.ipConfiguration;
      this._sourceNetworkInterfaceId = value.sourceNetworkInterfaceId;
    }
  }

  // ip_configuration - computed: true, optional: true, required: false
  private _ipConfiguration = new SiteRecoveryReplicatedVmNetworkInterfaceIpConfigurationList(this, "ip_configuration", false);
  public get ipConfiguration() {
    return this._ipConfiguration;
  }
  public putIpConfiguration(value: SiteRecoveryReplicatedVmNetworkInterfaceIpConfiguration[] | cdktn.IResolvable) {
    this._ipConfiguration.internalValue = value;
  }
  public resetIpConfiguration() {
    this._ipConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigurationInput() {
    return this._ipConfiguration.internalValue;
  }

  // source_network_interface_id - computed: true, optional: true, required: false
  private _sourceNetworkInterfaceId?: string; 
  public get sourceNetworkInterfaceId() {
    return this.getStringAttribute('source_network_interface_id');
  }
  public set sourceNetworkInterfaceId(value: string) {
    this._sourceNetworkInterfaceId = value;
  }
  public resetSourceNetworkInterfaceId() {
    this._sourceNetworkInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNetworkInterfaceIdInput() {
    return this._sourceNetworkInterfaceId;
  }
}

export class SiteRecoveryReplicatedVmNetworkInterfaceList extends cdktn.ComplexList {
  public internalValue? : SiteRecoveryReplicatedVmNetworkInterface[] | cdktn.IResolvable

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
  public get(index: number): SiteRecoveryReplicatedVmNetworkInterfaceOutputReference {
    return new SiteRecoveryReplicatedVmNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteRecoveryReplicatedVmUnmanagedDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#disk_uri SiteRecoveryReplicatedVm#disk_uri}
  */
  readonly diskUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#staging_storage_account_id SiteRecoveryReplicatedVm#staging_storage_account_id}
  */
  readonly stagingStorageAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#target_storage_account_id SiteRecoveryReplicatedVm#target_storage_account_id}
  */
  readonly targetStorageAccountId?: string;
}

export function siteRecoveryReplicatedVmUnmanagedDiskToTerraform(struct?: SiteRecoveryReplicatedVmUnmanagedDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disk_uri: cdktn.stringToTerraform(struct!.diskUri),
    staging_storage_account_id: cdktn.stringToTerraform(struct!.stagingStorageAccountId),
    target_storage_account_id: cdktn.stringToTerraform(struct!.targetStorageAccountId),
  }
}


export function siteRecoveryReplicatedVmUnmanagedDiskToHclTerraform(struct?: SiteRecoveryReplicatedVmUnmanagedDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disk_uri: {
      value: cdktn.stringToHclTerraform(struct!.diskUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    staging_storage_account_id: {
      value: cdktn.stringToHclTerraform(struct!.stagingStorageAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_storage_account_id: {
      value: cdktn.stringToHclTerraform(struct!.targetStorageAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteRecoveryReplicatedVmUnmanagedDiskOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SiteRecoveryReplicatedVmUnmanagedDisk | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskUri = this._diskUri;
    }
    if (this._stagingStorageAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.stagingStorageAccountId = this._stagingStorageAccountId;
    }
    if (this._targetStorageAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetStorageAccountId = this._targetStorageAccountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteRecoveryReplicatedVmUnmanagedDisk | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskUri = undefined;
      this._stagingStorageAccountId = undefined;
      this._targetStorageAccountId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskUri = value.diskUri;
      this._stagingStorageAccountId = value.stagingStorageAccountId;
      this._targetStorageAccountId = value.targetStorageAccountId;
    }
  }

  // disk_uri - computed: true, optional: true, required: false
  private _diskUri?: string; 
  public get diskUri() {
    return this.getStringAttribute('disk_uri');
  }
  public set diskUri(value: string) {
    this._diskUri = value;
  }
  public resetDiskUri() {
    this._diskUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskUriInput() {
    return this._diskUri;
  }

  // staging_storage_account_id - computed: true, optional: true, required: false
  private _stagingStorageAccountId?: string; 
  public get stagingStorageAccountId() {
    return this.getStringAttribute('staging_storage_account_id');
  }
  public set stagingStorageAccountId(value: string) {
    this._stagingStorageAccountId = value;
  }
  public resetStagingStorageAccountId() {
    this._stagingStorageAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingStorageAccountIdInput() {
    return this._stagingStorageAccountId;
  }

  // target_storage_account_id - computed: true, optional: true, required: false
  private _targetStorageAccountId?: string; 
  public get targetStorageAccountId() {
    return this.getStringAttribute('target_storage_account_id');
  }
  public set targetStorageAccountId(value: string) {
    this._targetStorageAccountId = value;
  }
  public resetTargetStorageAccountId() {
    this._targetStorageAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetStorageAccountIdInput() {
    return this._targetStorageAccountId;
  }
}

export class SiteRecoveryReplicatedVmUnmanagedDiskList extends cdktn.ComplexList {
  public internalValue? : SiteRecoveryReplicatedVmUnmanagedDisk[] | cdktn.IResolvable

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
  public get(index: number): SiteRecoveryReplicatedVmUnmanagedDiskOutputReference {
    return new SiteRecoveryReplicatedVmUnmanagedDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteRecoveryReplicatedVmTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#create SiteRecoveryReplicatedVm#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#delete SiteRecoveryReplicatedVm#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#read SiteRecoveryReplicatedVm#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#update SiteRecoveryReplicatedVm#update}
  */
  readonly update?: string;
}

export function siteRecoveryReplicatedVmTimeoutsToTerraform(struct?: SiteRecoveryReplicatedVmTimeouts | cdktn.IResolvable): any {
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


export function siteRecoveryReplicatedVmTimeoutsToHclTerraform(struct?: SiteRecoveryReplicatedVmTimeouts | cdktn.IResolvable): any {
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

export class SiteRecoveryReplicatedVmTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteRecoveryReplicatedVmTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SiteRecoveryReplicatedVmTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm azurerm_site_recovery_replicated_vm}
*/
export class SiteRecoveryReplicatedVm extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_site_recovery_replicated_vm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SiteRecoveryReplicatedVm resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SiteRecoveryReplicatedVm to import
  * @param importFromId The id of the existing SiteRecoveryReplicatedVm that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SiteRecoveryReplicatedVm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_site_recovery_replicated_vm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/site_recovery_replicated_vm azurerm_site_recovery_replicated_vm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteRecoveryReplicatedVmConfig
  */
  public constructor(scope: Construct, id: string, config: SiteRecoveryReplicatedVmConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_site_recovery_replicated_vm',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '5.1.0',
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
    this._id = config.id;
    this._managedDisk.internalValue = config.managedDisk;
    this._multiVmGroupName = config.multiVmGroupName;
    this._name = config.name;
    this._networkInterface.internalValue = config.networkInterface;
    this._recoveryReplicationPolicyId = config.recoveryReplicationPolicyId;
    this._recoveryVaultName = config.recoveryVaultName;
    this._resourceGroupName = config.resourceGroupName;
    this._sourceRecoveryFabricName = config.sourceRecoveryFabricName;
    this._sourceRecoveryProtectionContainerName = config.sourceRecoveryProtectionContainerName;
    this._sourceVmId = config.sourceVmId;
    this._targetAvailabilitySetId = config.targetAvailabilitySetId;
    this._targetBootDiagnosticStorageAccountId = config.targetBootDiagnosticStorageAccountId;
    this._targetCapacityReservationGroupId = config.targetCapacityReservationGroupId;
    this._targetEdgeZone = config.targetEdgeZone;
    this._targetNetworkId = config.targetNetworkId;
    this._targetProximityPlacementGroupId = config.targetProximityPlacementGroupId;
    this._targetRecoveryFabricId = config.targetRecoveryFabricId;
    this._targetRecoveryProtectionContainerId = config.targetRecoveryProtectionContainerId;
    this._targetResourceGroupId = config.targetResourceGroupId;
    this._targetVirtualMachineScaleSetId = config.targetVirtualMachineScaleSetId;
    this._targetVirtualMachineSize = config.targetVirtualMachineSize;
    this._targetZone = config.targetZone;
    this._testNetworkId = config.testNetworkId;
    this._unmanagedDisk.internalValue = config.unmanagedDisk;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // managed_disk - computed: true, optional: true, required: false
  private _managedDisk = new SiteRecoveryReplicatedVmManagedDiskList(this, "managed_disk", true);
  public get managedDisk() {
    return this._managedDisk;
  }
  public putManagedDisk(value: SiteRecoveryReplicatedVmManagedDisk[] | cdktn.IResolvable) {
    this._managedDisk.internalValue = value;
  }
  public resetManagedDisk() {
    this._managedDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDiskInput() {
    return this._managedDisk.internalValue;
  }

  // multi_vm_group_name - computed: false, optional: true, required: false
  private _multiVmGroupName?: string; 
  public get multiVmGroupName() {
    return this.getStringAttribute('multi_vm_group_name');
  }
  public set multiVmGroupName(value: string) {
    this._multiVmGroupName = value;
  }
  public resetMultiVmGroupName() {
    this._multiVmGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiVmGroupNameInput() {
    return this._multiVmGroupName;
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

  // network_interface - computed: true, optional: true, required: false
  private _networkInterface = new SiteRecoveryReplicatedVmNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: SiteRecoveryReplicatedVmNetworkInterface[] | cdktn.IResolvable) {
    this._networkInterface.internalValue = value;
  }
  public resetNetworkInterface() {
    this._networkInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface.internalValue;
  }

  // recovery_replication_policy_id - computed: false, optional: false, required: true
  private _recoveryReplicationPolicyId?: string; 
  public get recoveryReplicationPolicyId() {
    return this.getStringAttribute('recovery_replication_policy_id');
  }
  public set recoveryReplicationPolicyId(value: string) {
    this._recoveryReplicationPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryReplicationPolicyIdInput() {
    return this._recoveryReplicationPolicyId;
  }

  // recovery_vault_name - computed: false, optional: false, required: true
  private _recoveryVaultName?: string; 
  public get recoveryVaultName() {
    return this.getStringAttribute('recovery_vault_name');
  }
  public set recoveryVaultName(value: string) {
    this._recoveryVaultName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryVaultNameInput() {
    return this._recoveryVaultName;
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

  // source_recovery_fabric_name - computed: false, optional: false, required: true
  private _sourceRecoveryFabricName?: string; 
  public get sourceRecoveryFabricName() {
    return this.getStringAttribute('source_recovery_fabric_name');
  }
  public set sourceRecoveryFabricName(value: string) {
    this._sourceRecoveryFabricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRecoveryFabricNameInput() {
    return this._sourceRecoveryFabricName;
  }

  // source_recovery_protection_container_name - computed: false, optional: false, required: true
  private _sourceRecoveryProtectionContainerName?: string; 
  public get sourceRecoveryProtectionContainerName() {
    return this.getStringAttribute('source_recovery_protection_container_name');
  }
  public set sourceRecoveryProtectionContainerName(value: string) {
    this._sourceRecoveryProtectionContainerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRecoveryProtectionContainerNameInput() {
    return this._sourceRecoveryProtectionContainerName;
  }

  // source_vm_id - computed: false, optional: false, required: true
  private _sourceVmId?: string; 
  public get sourceVmId() {
    return this.getStringAttribute('source_vm_id');
  }
  public set sourceVmId(value: string) {
    this._sourceVmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVmIdInput() {
    return this._sourceVmId;
  }

  // target_availability_set_id - computed: false, optional: true, required: false
  private _targetAvailabilitySetId?: string; 
  public get targetAvailabilitySetId() {
    return this.getStringAttribute('target_availability_set_id');
  }
  public set targetAvailabilitySetId(value: string) {
    this._targetAvailabilitySetId = value;
  }
  public resetTargetAvailabilitySetId() {
    this._targetAvailabilitySetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAvailabilitySetIdInput() {
    return this._targetAvailabilitySetId;
  }

  // target_boot_diagnostic_storage_account_id - computed: false, optional: true, required: false
  private _targetBootDiagnosticStorageAccountId?: string; 
  public get targetBootDiagnosticStorageAccountId() {
    return this.getStringAttribute('target_boot_diagnostic_storage_account_id');
  }
  public set targetBootDiagnosticStorageAccountId(value: string) {
    this._targetBootDiagnosticStorageAccountId = value;
  }
  public resetTargetBootDiagnosticStorageAccountId() {
    this._targetBootDiagnosticStorageAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetBootDiagnosticStorageAccountIdInput() {
    return this._targetBootDiagnosticStorageAccountId;
  }

  // target_capacity_reservation_group_id - computed: false, optional: true, required: false
  private _targetCapacityReservationGroupId?: string; 
  public get targetCapacityReservationGroupId() {
    return this.getStringAttribute('target_capacity_reservation_group_id');
  }
  public set targetCapacityReservationGroupId(value: string) {
    this._targetCapacityReservationGroupId = value;
  }
  public resetTargetCapacityReservationGroupId() {
    this._targetCapacityReservationGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCapacityReservationGroupIdInput() {
    return this._targetCapacityReservationGroupId;
  }

  // target_edge_zone - computed: false, optional: true, required: false
  private _targetEdgeZone?: string; 
  public get targetEdgeZone() {
    return this.getStringAttribute('target_edge_zone');
  }
  public set targetEdgeZone(value: string) {
    this._targetEdgeZone = value;
  }
  public resetTargetEdgeZone() {
    this._targetEdgeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetEdgeZoneInput() {
    return this._targetEdgeZone;
  }

  // target_network_id - computed: true, optional: true, required: false
  private _targetNetworkId?: string; 
  public get targetNetworkId() {
    return this.getStringAttribute('target_network_id');
  }
  public set targetNetworkId(value: string) {
    this._targetNetworkId = value;
  }
  public resetTargetNetworkId() {
    this._targetNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNetworkIdInput() {
    return this._targetNetworkId;
  }

  // target_proximity_placement_group_id - computed: false, optional: true, required: false
  private _targetProximityPlacementGroupId?: string; 
  public get targetProximityPlacementGroupId() {
    return this.getStringAttribute('target_proximity_placement_group_id');
  }
  public set targetProximityPlacementGroupId(value: string) {
    this._targetProximityPlacementGroupId = value;
  }
  public resetTargetProximityPlacementGroupId() {
    this._targetProximityPlacementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetProximityPlacementGroupIdInput() {
    return this._targetProximityPlacementGroupId;
  }

  // target_recovery_fabric_id - computed: false, optional: false, required: true
  private _targetRecoveryFabricId?: string; 
  public get targetRecoveryFabricId() {
    return this.getStringAttribute('target_recovery_fabric_id');
  }
  public set targetRecoveryFabricId(value: string) {
    this._targetRecoveryFabricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRecoveryFabricIdInput() {
    return this._targetRecoveryFabricId;
  }

  // target_recovery_protection_container_id - computed: false, optional: false, required: true
  private _targetRecoveryProtectionContainerId?: string; 
  public get targetRecoveryProtectionContainerId() {
    return this.getStringAttribute('target_recovery_protection_container_id');
  }
  public set targetRecoveryProtectionContainerId(value: string) {
    this._targetRecoveryProtectionContainerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRecoveryProtectionContainerIdInput() {
    return this._targetRecoveryProtectionContainerId;
  }

  // target_resource_group_id - computed: false, optional: false, required: true
  private _targetResourceGroupId?: string; 
  public get targetResourceGroupId() {
    return this.getStringAttribute('target_resource_group_id');
  }
  public set targetResourceGroupId(value: string) {
    this._targetResourceGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceGroupIdInput() {
    return this._targetResourceGroupId;
  }

  // target_virtual_machine_scale_set_id - computed: false, optional: true, required: false
  private _targetVirtualMachineScaleSetId?: string; 
  public get targetVirtualMachineScaleSetId() {
    return this.getStringAttribute('target_virtual_machine_scale_set_id');
  }
  public set targetVirtualMachineScaleSetId(value: string) {
    this._targetVirtualMachineScaleSetId = value;
  }
  public resetTargetVirtualMachineScaleSetId() {
    this._targetVirtualMachineScaleSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVirtualMachineScaleSetIdInput() {
    return this._targetVirtualMachineScaleSetId;
  }

  // target_virtual_machine_size - computed: true, optional: true, required: false
  private _targetVirtualMachineSize?: string; 
  public get targetVirtualMachineSize() {
    return this.getStringAttribute('target_virtual_machine_size');
  }
  public set targetVirtualMachineSize(value: string) {
    this._targetVirtualMachineSize = value;
  }
  public resetTargetVirtualMachineSize() {
    this._targetVirtualMachineSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVirtualMachineSizeInput() {
    return this._targetVirtualMachineSize;
  }

  // target_zone - computed: false, optional: true, required: false
  private _targetZone?: string; 
  public get targetZone() {
    return this.getStringAttribute('target_zone');
  }
  public set targetZone(value: string) {
    this._targetZone = value;
  }
  public resetTargetZone() {
    this._targetZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetZoneInput() {
    return this._targetZone;
  }

  // test_network_id - computed: true, optional: true, required: false
  private _testNetworkId?: string; 
  public get testNetworkId() {
    return this.getStringAttribute('test_network_id');
  }
  public set testNetworkId(value: string) {
    this._testNetworkId = value;
  }
  public resetTestNetworkId() {
    this._testNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testNetworkIdInput() {
    return this._testNetworkId;
  }

  // unmanaged_disk - computed: true, optional: true, required: false
  private _unmanagedDisk = new SiteRecoveryReplicatedVmUnmanagedDiskList(this, "unmanaged_disk", true);
  public get unmanagedDisk() {
    return this._unmanagedDisk;
  }
  public putUnmanagedDisk(value: SiteRecoveryReplicatedVmUnmanagedDisk[] | cdktn.IResolvable) {
    this._unmanagedDisk.internalValue = value;
  }
  public resetUnmanagedDisk() {
    this._unmanagedDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unmanagedDiskInput() {
    return this._unmanagedDisk.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SiteRecoveryReplicatedVmTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SiteRecoveryReplicatedVmTimeouts) {
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
      id: cdktn.stringToTerraform(this._id),
      managed_disk: cdktn.listMapper(siteRecoveryReplicatedVmManagedDiskToTerraform, false)(this._managedDisk.internalValue),
      multi_vm_group_name: cdktn.stringToTerraform(this._multiVmGroupName),
      name: cdktn.stringToTerraform(this._name),
      network_interface: cdktn.listMapper(siteRecoveryReplicatedVmNetworkInterfaceToTerraform, false)(this._networkInterface.internalValue),
      recovery_replication_policy_id: cdktn.stringToTerraform(this._recoveryReplicationPolicyId),
      recovery_vault_name: cdktn.stringToTerraform(this._recoveryVaultName),
      resource_group_name: cdktn.stringToTerraform(this._resourceGroupName),
      source_recovery_fabric_name: cdktn.stringToTerraform(this._sourceRecoveryFabricName),
      source_recovery_protection_container_name: cdktn.stringToTerraform(this._sourceRecoveryProtectionContainerName),
      source_vm_id: cdktn.stringToTerraform(this._sourceVmId),
      target_availability_set_id: cdktn.stringToTerraform(this._targetAvailabilitySetId),
      target_boot_diagnostic_storage_account_id: cdktn.stringToTerraform(this._targetBootDiagnosticStorageAccountId),
      target_capacity_reservation_group_id: cdktn.stringToTerraform(this._targetCapacityReservationGroupId),
      target_edge_zone: cdktn.stringToTerraform(this._targetEdgeZone),
      target_network_id: cdktn.stringToTerraform(this._targetNetworkId),
      target_proximity_placement_group_id: cdktn.stringToTerraform(this._targetProximityPlacementGroupId),
      target_recovery_fabric_id: cdktn.stringToTerraform(this._targetRecoveryFabricId),
      target_recovery_protection_container_id: cdktn.stringToTerraform(this._targetRecoveryProtectionContainerId),
      target_resource_group_id: cdktn.stringToTerraform(this._targetResourceGroupId),
      target_virtual_machine_scale_set_id: cdktn.stringToTerraform(this._targetVirtualMachineScaleSetId),
      target_virtual_machine_size: cdktn.stringToTerraform(this._targetVirtualMachineSize),
      target_zone: cdktn.stringToTerraform(this._targetZone),
      test_network_id: cdktn.stringToTerraform(this._testNetworkId),
      unmanaged_disk: cdktn.listMapper(siteRecoveryReplicatedVmUnmanagedDiskToTerraform, false)(this._unmanagedDisk.internalValue),
      timeouts: siteRecoveryReplicatedVmTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_disk: {
        value: cdktn.listMapperHcl(siteRecoveryReplicatedVmManagedDiskToHclTerraform, false)(this._managedDisk.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SiteRecoveryReplicatedVmManagedDiskList",
      },
      multi_vm_group_name: {
        value: cdktn.stringToHclTerraform(this._multiVmGroupName),
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
      network_interface: {
        value: cdktn.listMapperHcl(siteRecoveryReplicatedVmNetworkInterfaceToHclTerraform, false)(this._networkInterface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SiteRecoveryReplicatedVmNetworkInterfaceList",
      },
      recovery_replication_policy_id: {
        value: cdktn.stringToHclTerraform(this._recoveryReplicationPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_vault_name: {
        value: cdktn.stringToHclTerraform(this._recoveryVaultName),
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
      source_recovery_fabric_name: {
        value: cdktn.stringToHclTerraform(this._sourceRecoveryFabricName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_recovery_protection_container_name: {
        value: cdktn.stringToHclTerraform(this._sourceRecoveryProtectionContainerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_vm_id: {
        value: cdktn.stringToHclTerraform(this._sourceVmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_availability_set_id: {
        value: cdktn.stringToHclTerraform(this._targetAvailabilitySetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_boot_diagnostic_storage_account_id: {
        value: cdktn.stringToHclTerraform(this._targetBootDiagnosticStorageAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_capacity_reservation_group_id: {
        value: cdktn.stringToHclTerraform(this._targetCapacityReservationGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_edge_zone: {
        value: cdktn.stringToHclTerraform(this._targetEdgeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_network_id: {
        value: cdktn.stringToHclTerraform(this._targetNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_proximity_placement_group_id: {
        value: cdktn.stringToHclTerraform(this._targetProximityPlacementGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_recovery_fabric_id: {
        value: cdktn.stringToHclTerraform(this._targetRecoveryFabricId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_recovery_protection_container_id: {
        value: cdktn.stringToHclTerraform(this._targetRecoveryProtectionContainerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_resource_group_id: {
        value: cdktn.stringToHclTerraform(this._targetResourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_virtual_machine_scale_set_id: {
        value: cdktn.stringToHclTerraform(this._targetVirtualMachineScaleSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_virtual_machine_size: {
        value: cdktn.stringToHclTerraform(this._targetVirtualMachineSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_zone: {
        value: cdktn.stringToHclTerraform(this._targetZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      test_network_id: {
        value: cdktn.stringToHclTerraform(this._testNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unmanaged_disk: {
        value: cdktn.listMapperHcl(siteRecoveryReplicatedVmUnmanagedDiskToHclTerraform, false)(this._unmanagedDisk.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SiteRecoveryReplicatedVmUnmanagedDiskList",
      },
      timeouts: {
        value: siteRecoveryReplicatedVmTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteRecoveryReplicatedVmTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
