/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SharedImageVersionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#blob_uri SharedImageVersion#blob_uri}
  */
  readonly blobUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#deletion_of_replicated_locations_enabled SharedImageVersion#deletion_of_replicated_locations_enabled}
  */
  readonly deletionOfReplicatedLocationsEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#end_of_life_date SharedImageVersion#end_of_life_date}
  */
  readonly endOfLifeDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#exclude_from_latest SharedImageVersion#exclude_from_latest}
  */
  readonly excludeFromLatest?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#gallery_name SharedImageVersion#gallery_name}
  */
  readonly galleryName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#id SharedImageVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#image_name SharedImageVersion#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#location SharedImageVersion#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#managed_image_id SharedImageVersion#managed_image_id}
  */
  readonly managedImageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#name SharedImageVersion#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#os_disk_snapshot_id SharedImageVersion#os_disk_snapshot_id}
  */
  readonly osDiskSnapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#replication_mode SharedImageVersion#replication_mode}
  */
  readonly replicationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#resource_group_name SharedImageVersion#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#storage_account_id SharedImageVersion#storage_account_id}
  */
  readonly storageAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#tags SharedImageVersion#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * target_region block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#target_region SharedImageVersion#target_region}
  */
  readonly targetRegion: SharedImageVersionTargetRegion[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#timeouts SharedImageVersion#timeouts}
  */
  readonly timeouts?: SharedImageVersionTimeouts;
  /**
  * uefi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#uefi SharedImageVersion#uefi}
  */
  readonly uefi?: SharedImageVersionUefi;
}
export interface SharedImageVersionTargetRegion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#disk_encryption_set_id SharedImageVersion#disk_encryption_set_id}
  */
  readonly diskEncryptionSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#exclude_from_latest_enabled SharedImageVersion#exclude_from_latest_enabled}
  */
  readonly excludeFromLatestEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#name SharedImageVersion#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#regional_replica_count SharedImageVersion#regional_replica_count}
  */
  readonly regionalReplicaCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#storage_account_type SharedImageVersion#storage_account_type}
  */
  readonly storageAccountType?: string;
}

export function sharedImageVersionTargetRegionToTerraform(struct?: SharedImageVersionTargetRegion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disk_encryption_set_id: cdktn.stringToTerraform(struct!.diskEncryptionSetId),
    exclude_from_latest_enabled: cdktn.booleanToTerraform(struct!.excludeFromLatestEnabled),
    name: cdktn.stringToTerraform(struct!.name),
    regional_replica_count: cdktn.numberToTerraform(struct!.regionalReplicaCount),
    storage_account_type: cdktn.stringToTerraform(struct!.storageAccountType),
  }
}


export function sharedImageVersionTargetRegionToHclTerraform(struct?: SharedImageVersionTargetRegion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disk_encryption_set_id: {
      value: cdktn.stringToHclTerraform(struct!.diskEncryptionSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_from_latest_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.excludeFromLatestEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regional_replica_count: {
      value: cdktn.numberToHclTerraform(struct!.regionalReplicaCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_account_type: {
      value: cdktn.stringToHclTerraform(struct!.storageAccountType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SharedImageVersionTargetRegionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SharedImageVersionTargetRegion | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskEncryptionSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionSetId = this._diskEncryptionSetId;
    }
    if (this._excludeFromLatestEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeFromLatestEnabled = this._excludeFromLatestEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regionalReplicaCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionalReplicaCount = this._regionalReplicaCount;
    }
    if (this._storageAccountType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountType = this._storageAccountType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SharedImageVersionTargetRegion | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskEncryptionSetId = undefined;
      this._excludeFromLatestEnabled = undefined;
      this._name = undefined;
      this._regionalReplicaCount = undefined;
      this._storageAccountType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskEncryptionSetId = value.diskEncryptionSetId;
      this._excludeFromLatestEnabled = value.excludeFromLatestEnabled;
      this._name = value.name;
      this._regionalReplicaCount = value.regionalReplicaCount;
      this._storageAccountType = value.storageAccountType;
    }
  }

  // disk_encryption_set_id - computed: false, optional: true, required: false
  private _diskEncryptionSetId?: string; 
  public get diskEncryptionSetId() {
    return this.getStringAttribute('disk_encryption_set_id');
  }
  public set diskEncryptionSetId(value: string) {
    this._diskEncryptionSetId = value;
  }
  public resetDiskEncryptionSetId() {
    this._diskEncryptionSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionSetIdInput() {
    return this._diskEncryptionSetId;
  }

  // exclude_from_latest_enabled - computed: false, optional: true, required: false
  private _excludeFromLatestEnabled?: boolean | cdktn.IResolvable; 
  public get excludeFromLatestEnabled() {
    return this.getBooleanAttribute('exclude_from_latest_enabled');
  }
  public set excludeFromLatestEnabled(value: boolean | cdktn.IResolvable) {
    this._excludeFromLatestEnabled = value;
  }
  public resetExcludeFromLatestEnabled() {
    this._excludeFromLatestEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFromLatestEnabledInput() {
    return this._excludeFromLatestEnabled;
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

  // regional_replica_count - computed: false, optional: false, required: true
  private _regionalReplicaCount?: number; 
  public get regionalReplicaCount() {
    return this.getNumberAttribute('regional_replica_count');
  }
  public set regionalReplicaCount(value: number) {
    this._regionalReplicaCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionalReplicaCountInput() {
    return this._regionalReplicaCount;
  }

  // storage_account_type - computed: false, optional: true, required: false
  private _storageAccountType?: string; 
  public get storageAccountType() {
    return this.getStringAttribute('storage_account_type');
  }
  public set storageAccountType(value: string) {
    this._storageAccountType = value;
  }
  public resetStorageAccountType() {
    this._storageAccountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountTypeInput() {
    return this._storageAccountType;
  }
}

export class SharedImageVersionTargetRegionList extends cdktn.ComplexList {
  public internalValue? : SharedImageVersionTargetRegion[] | cdktn.IResolvable

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
  public get(index: number): SharedImageVersionTargetRegionOutputReference {
    return new SharedImageVersionTargetRegionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SharedImageVersionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#create SharedImageVersion#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#delete SharedImageVersion#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#read SharedImageVersion#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#update SharedImageVersion#update}
  */
  readonly update?: string;
}

export function sharedImageVersionTimeoutsToTerraform(struct?: SharedImageVersionTimeouts | cdktn.IResolvable): any {
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


export function sharedImageVersionTimeoutsToHclTerraform(struct?: SharedImageVersionTimeouts | cdktn.IResolvable): any {
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

export class SharedImageVersionTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SharedImageVersionTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SharedImageVersionTimeouts | cdktn.IResolvable | undefined) {
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
export interface SharedImageVersionUefiAdditionalSignaturesDb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#type SharedImageVersion#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#values_base64 SharedImageVersion#values_base64}
  */
  readonly valuesBase64: string[];
}

export function sharedImageVersionUefiAdditionalSignaturesDbToTerraform(struct?: SharedImageVersionUefiAdditionalSignaturesDb | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    values_base64: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.valuesBase64),
  }
}


export function sharedImageVersionUefiAdditionalSignaturesDbToHclTerraform(struct?: SharedImageVersionUefiAdditionalSignaturesDb | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values_base64: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.valuesBase64),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SharedImageVersionUefiAdditionalSignaturesDbOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SharedImageVersionUefiAdditionalSignaturesDb | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._valuesBase64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesBase64 = this._valuesBase64;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SharedImageVersionUefiAdditionalSignaturesDb | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._valuesBase64 = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._valuesBase64 = value.valuesBase64;
    }
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

  // values_base64 - computed: false, optional: false, required: true
  private _valuesBase64?: string[]; 
  public get valuesBase64() {
    return this.getListAttribute('values_base64');
  }
  public set valuesBase64(value: string[]) {
    this._valuesBase64 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesBase64Input() {
    return this._valuesBase64;
  }
}

export class SharedImageVersionUefiAdditionalSignaturesDbList extends cdktn.ComplexList {
  public internalValue? : SharedImageVersionUefiAdditionalSignaturesDb[] | cdktn.IResolvable

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
  public get(index: number): SharedImageVersionUefiAdditionalSignaturesDbOutputReference {
    return new SharedImageVersionUefiAdditionalSignaturesDbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SharedImageVersionUefiAdditionalSignaturesDbx {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#type SharedImageVersion#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#values_base64 SharedImageVersion#values_base64}
  */
  readonly valuesBase64: string[];
}

export function sharedImageVersionUefiAdditionalSignaturesDbxToTerraform(struct?: SharedImageVersionUefiAdditionalSignaturesDbx | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    values_base64: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.valuesBase64),
  }
}


export function sharedImageVersionUefiAdditionalSignaturesDbxToHclTerraform(struct?: SharedImageVersionUefiAdditionalSignaturesDbx | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values_base64: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.valuesBase64),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SharedImageVersionUefiAdditionalSignaturesDbxOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SharedImageVersionUefiAdditionalSignaturesDbx | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._valuesBase64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesBase64 = this._valuesBase64;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SharedImageVersionUefiAdditionalSignaturesDbx | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._valuesBase64 = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._valuesBase64 = value.valuesBase64;
    }
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

  // values_base64 - computed: false, optional: false, required: true
  private _valuesBase64?: string[]; 
  public get valuesBase64() {
    return this.getListAttribute('values_base64');
  }
  public set valuesBase64(value: string[]) {
    this._valuesBase64 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesBase64Input() {
    return this._valuesBase64;
  }
}

export class SharedImageVersionUefiAdditionalSignaturesDbxList extends cdktn.ComplexList {
  public internalValue? : SharedImageVersionUefiAdditionalSignaturesDbx[] | cdktn.IResolvable

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
  public get(index: number): SharedImageVersionUefiAdditionalSignaturesDbxOutputReference {
    return new SharedImageVersionUefiAdditionalSignaturesDbxOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SharedImageVersionUefiAdditionalSignaturesKek {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#type SharedImageVersion#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#values_base64 SharedImageVersion#values_base64}
  */
  readonly valuesBase64: string[];
}

export function sharedImageVersionUefiAdditionalSignaturesKekToTerraform(struct?: SharedImageVersionUefiAdditionalSignaturesKek | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    values_base64: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.valuesBase64),
  }
}


export function sharedImageVersionUefiAdditionalSignaturesKekToHclTerraform(struct?: SharedImageVersionUefiAdditionalSignaturesKek | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values_base64: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.valuesBase64),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SharedImageVersionUefiAdditionalSignaturesKekOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SharedImageVersionUefiAdditionalSignaturesKek | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._valuesBase64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesBase64 = this._valuesBase64;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SharedImageVersionUefiAdditionalSignaturesKek | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._valuesBase64 = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._valuesBase64 = value.valuesBase64;
    }
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

  // values_base64 - computed: false, optional: false, required: true
  private _valuesBase64?: string[]; 
  public get valuesBase64() {
    return this.getListAttribute('values_base64');
  }
  public set valuesBase64(value: string[]) {
    this._valuesBase64 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesBase64Input() {
    return this._valuesBase64;
  }
}

export class SharedImageVersionUefiAdditionalSignaturesKekList extends cdktn.ComplexList {
  public internalValue? : SharedImageVersionUefiAdditionalSignaturesKek[] | cdktn.IResolvable

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
  public get(index: number): SharedImageVersionUefiAdditionalSignaturesKekOutputReference {
    return new SharedImageVersionUefiAdditionalSignaturesKekOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SharedImageVersionUefiAdditionalSignaturesPk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#type SharedImageVersion#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#values_base64 SharedImageVersion#values_base64}
  */
  readonly valuesBase64: string[];
}

export function sharedImageVersionUefiAdditionalSignaturesPkToTerraform(struct?: SharedImageVersionUefiAdditionalSignaturesPkOutputReference | SharedImageVersionUefiAdditionalSignaturesPk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    values_base64: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.valuesBase64),
  }
}


export function sharedImageVersionUefiAdditionalSignaturesPkToHclTerraform(struct?: SharedImageVersionUefiAdditionalSignaturesPkOutputReference | SharedImageVersionUefiAdditionalSignaturesPk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values_base64: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.valuesBase64),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SharedImageVersionUefiAdditionalSignaturesPkOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SharedImageVersionUefiAdditionalSignaturesPk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._valuesBase64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesBase64 = this._valuesBase64;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SharedImageVersionUefiAdditionalSignaturesPk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._valuesBase64 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._valuesBase64 = value.valuesBase64;
    }
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

  // values_base64 - computed: false, optional: false, required: true
  private _valuesBase64?: string[]; 
  public get valuesBase64() {
    return this.getListAttribute('values_base64');
  }
  public set valuesBase64(value: string[]) {
    this._valuesBase64 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesBase64Input() {
    return this._valuesBase64;
  }
}
export interface SharedImageVersionUefiAdditionalSignatures {
  /**
  * db block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#db SharedImageVersion#db}
  */
  readonly db?: SharedImageVersionUefiAdditionalSignaturesDb[] | cdktn.IResolvable;
  /**
  * dbx block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#dbx SharedImageVersion#dbx}
  */
  readonly dbx?: SharedImageVersionUefiAdditionalSignaturesDbx[] | cdktn.IResolvable;
  /**
  * kek block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#kek SharedImageVersion#kek}
  */
  readonly kek?: SharedImageVersionUefiAdditionalSignaturesKek[] | cdktn.IResolvable;
  /**
  * pk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#pk SharedImageVersion#pk}
  */
  readonly pk?: SharedImageVersionUefiAdditionalSignaturesPk;
}

export function sharedImageVersionUefiAdditionalSignaturesToTerraform(struct?: SharedImageVersionUefiAdditionalSignaturesOutputReference | SharedImageVersionUefiAdditionalSignatures): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    db: cdktn.listMapper(sharedImageVersionUefiAdditionalSignaturesDbToTerraform, true)(struct!.db),
    dbx: cdktn.listMapper(sharedImageVersionUefiAdditionalSignaturesDbxToTerraform, true)(struct!.dbx),
    kek: cdktn.listMapper(sharedImageVersionUefiAdditionalSignaturesKekToTerraform, true)(struct!.kek),
    pk: sharedImageVersionUefiAdditionalSignaturesPkToTerraform(struct!.pk),
  }
}


export function sharedImageVersionUefiAdditionalSignaturesToHclTerraform(struct?: SharedImageVersionUefiAdditionalSignaturesOutputReference | SharedImageVersionUefiAdditionalSignatures): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    db: {
      value: cdktn.listMapperHcl(sharedImageVersionUefiAdditionalSignaturesDbToHclTerraform, true)(struct!.db),
      isBlock: true,
      type: "list",
      storageClassType: "SharedImageVersionUefiAdditionalSignaturesDbList",
    },
    dbx: {
      value: cdktn.listMapperHcl(sharedImageVersionUefiAdditionalSignaturesDbxToHclTerraform, true)(struct!.dbx),
      isBlock: true,
      type: "list",
      storageClassType: "SharedImageVersionUefiAdditionalSignaturesDbxList",
    },
    kek: {
      value: cdktn.listMapperHcl(sharedImageVersionUefiAdditionalSignaturesKekToHclTerraform, true)(struct!.kek),
      isBlock: true,
      type: "list",
      storageClassType: "SharedImageVersionUefiAdditionalSignaturesKekList",
    },
    pk: {
      value: sharedImageVersionUefiAdditionalSignaturesPkToHclTerraform(struct!.pk),
      isBlock: true,
      type: "list",
      storageClassType: "SharedImageVersionUefiAdditionalSignaturesPkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SharedImageVersionUefiAdditionalSignaturesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SharedImageVersionUefiAdditionalSignatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._db?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.db = this._db?.internalValue;
    }
    if (this._dbx?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbx = this._dbx?.internalValue;
    }
    if (this._kek?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kek = this._kek?.internalValue;
    }
    if (this._pk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pk = this._pk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SharedImageVersionUefiAdditionalSignatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._db.internalValue = undefined;
      this._dbx.internalValue = undefined;
      this._kek.internalValue = undefined;
      this._pk.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._db.internalValue = value.db;
      this._dbx.internalValue = value.dbx;
      this._kek.internalValue = value.kek;
      this._pk.internalValue = value.pk;
    }
  }

  // db - computed: false, optional: true, required: false
  private _db = new SharedImageVersionUefiAdditionalSignaturesDbList(this, "db", false);
  public get db() {
    return this._db;
  }
  public putDb(value: SharedImageVersionUefiAdditionalSignaturesDb[] | cdktn.IResolvable) {
    this._db.internalValue = value;
  }
  public resetDb() {
    this._db.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInput() {
    return this._db.internalValue;
  }

  // dbx - computed: false, optional: true, required: false
  private _dbx = new SharedImageVersionUefiAdditionalSignaturesDbxList(this, "dbx", false);
  public get dbx() {
    return this._dbx;
  }
  public putDbx(value: SharedImageVersionUefiAdditionalSignaturesDbx[] | cdktn.IResolvable) {
    this._dbx.internalValue = value;
  }
  public resetDbx() {
    this._dbx.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbxInput() {
    return this._dbx.internalValue;
  }

  // kek - computed: false, optional: true, required: false
  private _kek = new SharedImageVersionUefiAdditionalSignaturesKekList(this, "kek", false);
  public get kek() {
    return this._kek;
  }
  public putKek(value: SharedImageVersionUefiAdditionalSignaturesKek[] | cdktn.IResolvable) {
    this._kek.internalValue = value;
  }
  public resetKek() {
    this._kek.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kekInput() {
    return this._kek.internalValue;
  }

  // pk - computed: false, optional: true, required: false
  private _pk = new SharedImageVersionUefiAdditionalSignaturesPkOutputReference(this, "pk");
  public get pk() {
    return this._pk;
  }
  public putPk(value: SharedImageVersionUefiAdditionalSignaturesPk) {
    this._pk.internalValue = value;
  }
  public resetPk() {
    this._pk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkInput() {
    return this._pk.internalValue;
  }
}
export interface SharedImageVersionUefi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#signature_template_names SharedImageVersion#signature_template_names}
  */
  readonly signatureTemplateNames: string[];
  /**
  * additional_signatures block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#additional_signatures SharedImageVersion#additional_signatures}
  */
  readonly additionalSignatures?: SharedImageVersionUefiAdditionalSignatures;
}

export function sharedImageVersionUefiToTerraform(struct?: SharedImageVersionUefiOutputReference | SharedImageVersionUefi): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    signature_template_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.signatureTemplateNames),
    additional_signatures: sharedImageVersionUefiAdditionalSignaturesToTerraform(struct!.additionalSignatures),
  }
}


export function sharedImageVersionUefiToHclTerraform(struct?: SharedImageVersionUefiOutputReference | SharedImageVersionUefi): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    signature_template_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.signatureTemplateNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    additional_signatures: {
      value: sharedImageVersionUefiAdditionalSignaturesToHclTerraform(struct!.additionalSignatures),
      isBlock: true,
      type: "list",
      storageClassType: "SharedImageVersionUefiAdditionalSignaturesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SharedImageVersionUefiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SharedImageVersionUefi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._signatureTemplateNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureTemplateNames = this._signatureTemplateNames;
    }
    if (this._additionalSignatures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalSignatures = this._additionalSignatures?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SharedImageVersionUefi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._signatureTemplateNames = undefined;
      this._additionalSignatures.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._signatureTemplateNames = value.signatureTemplateNames;
      this._additionalSignatures.internalValue = value.additionalSignatures;
    }
  }

  // signature_template_names - computed: false, optional: false, required: true
  private _signatureTemplateNames?: string[]; 
  public get signatureTemplateNames() {
    return cdktn.Fn.tolist(this.getListAttribute('signature_template_names'));
  }
  public set signatureTemplateNames(value: string[]) {
    this._signatureTemplateNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureTemplateNamesInput() {
    return this._signatureTemplateNames;
  }

  // additional_signatures - computed: false, optional: true, required: false
  private _additionalSignatures = new SharedImageVersionUefiAdditionalSignaturesOutputReference(this, "additional_signatures");
  public get additionalSignatures() {
    return this._additionalSignatures;
  }
  public putAdditionalSignatures(value: SharedImageVersionUefiAdditionalSignatures) {
    this._additionalSignatures.internalValue = value;
  }
  public resetAdditionalSignatures() {
    this._additionalSignatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalSignaturesInput() {
    return this._additionalSignatures.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version azurerm_shared_image_version}
*/
export class SharedImageVersion extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_shared_image_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SharedImageVersion resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SharedImageVersion to import
  * @param importFromId The id of the existing SharedImageVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SharedImageVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_shared_image_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version azurerm_shared_image_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SharedImageVersionConfig
  */
  public constructor(scope: Construct, id: string, config: SharedImageVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_shared_image_version',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '5.10.0',
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
    this._blobUri = config.blobUri;
    this._deletionOfReplicatedLocationsEnabled = config.deletionOfReplicatedLocationsEnabled;
    this._endOfLifeDate = config.endOfLifeDate;
    this._excludeFromLatest = config.excludeFromLatest;
    this._galleryName = config.galleryName;
    this._id = config.id;
    this._imageName = config.imageName;
    this._location = config.location;
    this._managedImageId = config.managedImageId;
    this._name = config.name;
    this._osDiskSnapshotId = config.osDiskSnapshotId;
    this._replicationMode = config.replicationMode;
    this._resourceGroupName = config.resourceGroupName;
    this._storageAccountId = config.storageAccountId;
    this._tags = config.tags;
    this._targetRegion.internalValue = config.targetRegion;
    this._timeouts.internalValue = config.timeouts;
    this._uefi.internalValue = config.uefi;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blob_uri - computed: false, optional: true, required: false
  private _blobUri?: string; 
  public get blobUri() {
    return this.getStringAttribute('blob_uri');
  }
  public set blobUri(value: string) {
    this._blobUri = value;
  }
  public resetBlobUri() {
    this._blobUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blobUriInput() {
    return this._blobUri;
  }

  // deletion_of_replicated_locations_enabled - computed: false, optional: true, required: false
  private _deletionOfReplicatedLocationsEnabled?: boolean | cdktn.IResolvable; 
  public get deletionOfReplicatedLocationsEnabled() {
    return this.getBooleanAttribute('deletion_of_replicated_locations_enabled');
  }
  public set deletionOfReplicatedLocationsEnabled(value: boolean | cdktn.IResolvable) {
    this._deletionOfReplicatedLocationsEnabled = value;
  }
  public resetDeletionOfReplicatedLocationsEnabled() {
    this._deletionOfReplicatedLocationsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionOfReplicatedLocationsEnabledInput() {
    return this._deletionOfReplicatedLocationsEnabled;
  }

  // end_of_life_date - computed: false, optional: true, required: false
  private _endOfLifeDate?: string; 
  public get endOfLifeDate() {
    return this.getStringAttribute('end_of_life_date');
  }
  public set endOfLifeDate(value: string) {
    this._endOfLifeDate = value;
  }
  public resetEndOfLifeDate() {
    this._endOfLifeDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endOfLifeDateInput() {
    return this._endOfLifeDate;
  }

  // exclude_from_latest - computed: false, optional: true, required: false
  private _excludeFromLatest?: boolean | cdktn.IResolvable; 
  public get excludeFromLatest() {
    return this.getBooleanAttribute('exclude_from_latest');
  }
  public set excludeFromLatest(value: boolean | cdktn.IResolvable) {
    this._excludeFromLatest = value;
  }
  public resetExcludeFromLatest() {
    this._excludeFromLatest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFromLatestInput() {
    return this._excludeFromLatest;
  }

  // gallery_name - computed: false, optional: false, required: true
  private _galleryName?: string; 
  public get galleryName() {
    return this.getStringAttribute('gallery_name');
  }
  public set galleryName(value: string) {
    this._galleryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get galleryNameInput() {
    return this._galleryName;
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

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
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

  // managed_image_id - computed: false, optional: true, required: false
  private _managedImageId?: string; 
  public get managedImageId() {
    return this.getStringAttribute('managed_image_id');
  }
  public set managedImageId(value: string) {
    this._managedImageId = value;
  }
  public resetManagedImageId() {
    this._managedImageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedImageIdInput() {
    return this._managedImageId;
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

  // os_disk_snapshot_id - computed: false, optional: true, required: false
  private _osDiskSnapshotId?: string; 
  public get osDiskSnapshotId() {
    return this.getStringAttribute('os_disk_snapshot_id');
  }
  public set osDiskSnapshotId(value: string) {
    this._osDiskSnapshotId = value;
  }
  public resetOsDiskSnapshotId() {
    this._osDiskSnapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskSnapshotIdInput() {
    return this._osDiskSnapshotId;
  }

  // replication_mode - computed: false, optional: true, required: false
  private _replicationMode?: string; 
  public get replicationMode() {
    return this.getStringAttribute('replication_mode');
  }
  public set replicationMode(value: string) {
    this._replicationMode = value;
  }
  public resetReplicationMode() {
    this._replicationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationModeInput() {
    return this._replicationMode;
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

  // storage_account_id - computed: false, optional: true, required: false
  private _storageAccountId?: string; 
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  public resetStorageAccountId() {
    this._storageAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId;
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

  // target_region - computed: false, optional: false, required: true
  private _targetRegion = new SharedImageVersionTargetRegionList(this, "target_region", false);
  public get targetRegion() {
    return this._targetRegion;
  }
  public putTargetRegion(value: SharedImageVersionTargetRegion[] | cdktn.IResolvable) {
    this._targetRegion.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRegionInput() {
    return this._targetRegion.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SharedImageVersionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SharedImageVersionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // uefi - computed: false, optional: true, required: false
  private _uefi = new SharedImageVersionUefiOutputReference(this, "uefi");
  public get uefi() {
    return this._uefi;
  }
  public putUefi(value: SharedImageVersionUefi) {
    this._uefi.internalValue = value;
  }
  public resetUefi() {
    this._uefi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uefiInput() {
    return this._uefi.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blob_uri: cdktn.stringToTerraform(this._blobUri),
      deletion_of_replicated_locations_enabled: cdktn.booleanToTerraform(this._deletionOfReplicatedLocationsEnabled),
      end_of_life_date: cdktn.stringToTerraform(this._endOfLifeDate),
      exclude_from_latest: cdktn.booleanToTerraform(this._excludeFromLatest),
      gallery_name: cdktn.stringToTerraform(this._galleryName),
      id: cdktn.stringToTerraform(this._id),
      image_name: cdktn.stringToTerraform(this._imageName),
      location: cdktn.stringToTerraform(this._location),
      managed_image_id: cdktn.stringToTerraform(this._managedImageId),
      name: cdktn.stringToTerraform(this._name),
      os_disk_snapshot_id: cdktn.stringToTerraform(this._osDiskSnapshotId),
      replication_mode: cdktn.stringToTerraform(this._replicationMode),
      resource_group_name: cdktn.stringToTerraform(this._resourceGroupName),
      storage_account_id: cdktn.stringToTerraform(this._storageAccountId),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      target_region: cdktn.listMapper(sharedImageVersionTargetRegionToTerraform, true)(this._targetRegion.internalValue),
      timeouts: sharedImageVersionTimeoutsToTerraform(this._timeouts.internalValue),
      uefi: sharedImageVersionUefiToTerraform(this._uefi.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blob_uri: {
        value: cdktn.stringToHclTerraform(this._blobUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_of_replicated_locations_enabled: {
        value: cdktn.booleanToHclTerraform(this._deletionOfReplicatedLocationsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      end_of_life_date: {
        value: cdktn.stringToHclTerraform(this._endOfLifeDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_from_latest: {
        value: cdktn.booleanToHclTerraform(this._excludeFromLatest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gallery_name: {
        value: cdktn.stringToHclTerraform(this._galleryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_name: {
        value: cdktn.stringToHclTerraform(this._imageName),
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
      managed_image_id: {
        value: cdktn.stringToHclTerraform(this._managedImageId),
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
      os_disk_snapshot_id: {
        value: cdktn.stringToHclTerraform(this._osDiskSnapshotId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_mode: {
        value: cdktn.stringToHclTerraform(this._replicationMode),
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
      storage_account_id: {
        value: cdktn.stringToHclTerraform(this._storageAccountId),
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
      target_region: {
        value: cdktn.listMapperHcl(sharedImageVersionTargetRegionToHclTerraform, true)(this._targetRegion.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SharedImageVersionTargetRegionList",
      },
      timeouts: {
        value: sharedImageVersionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SharedImageVersionTimeouts",
      },
      uefi: {
        value: sharedImageVersionUefiToHclTerraform(this._uefi.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SharedImageVersionUefiList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
