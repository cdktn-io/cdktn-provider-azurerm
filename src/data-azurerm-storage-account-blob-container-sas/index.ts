/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAzurermStorageAccountBlobContainerSasConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas#cache_control DataAzurermStorageAccountBlobContainerSas#cache_control}
  */
  readonly cacheControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas#connection_string DataAzurermStorageAccountBlobContainerSas#connection_string}
  */
  readonly connectionString: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas#container_name DataAzurermStorageAccountBlobContainerSas#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas#content_disposition DataAzurermStorageAccountBlobContainerSas#content_disposition}
  */
  readonly contentDisposition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas#content_encoding DataAzurermStorageAccountBlobContainerSas#content_encoding}
  */
  readonly contentEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas#content_language DataAzurermStorageAccountBlobContainerSas#content_language}
  */
  readonly contentLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas#content_type DataAzurermStorageAccountBlobContainerSas#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas#expiry DataAzurermStorageAccountBlobContainerSas#expiry}
  */
  readonly expiry: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas#https_only DataAzurermStorageAccountBlobContainerSas#https_only}
  */
  readonly httpsOnly?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas#id DataAzurermStorageAccountBlobContainerSas#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas#ip_address DataAzurermStorageAccountBlobContainerSas#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas#start DataAzurermStorageAccountBlobContainerSas#start}
  */
  readonly start: string;
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas#permissions DataAzurermStorageAccountBlobContainerSas#permissions}
  */
  readonly permissions?: DataAzurermStorageAccountBlobContainerSasPermissions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas#timeouts DataAzurermStorageAccountBlobContainerSas#timeouts}
  */
  readonly timeouts?: DataAzurermStorageAccountBlobContainerSasTimeouts;
}
export interface DataAzurermStorageAccountBlobContainerSasPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas#add DataAzurermStorageAccountBlobContainerSas#add}
  */
  readonly add?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas#create DataAzurermStorageAccountBlobContainerSas#create}
  */
  readonly create?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas#delete DataAzurermStorageAccountBlobContainerSas#delete}
  */
  readonly delete?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas#delete_version DataAzurermStorageAccountBlobContainerSas#delete_version}
  */
  readonly deleteVersion?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas#execute DataAzurermStorageAccountBlobContainerSas#execute}
  */
  readonly execute?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas#find DataAzurermStorageAccountBlobContainerSas#find}
  */
  readonly find?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas#list DataAzurermStorageAccountBlobContainerSas#list}
  */
  readonly list?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas#move DataAzurermStorageAccountBlobContainerSas#move}
  */
  readonly move?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas#ownership DataAzurermStorageAccountBlobContainerSas#ownership}
  */
  readonly ownership?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas#permissions DataAzurermStorageAccountBlobContainerSas#permissions}
  */
  readonly permissions?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas#read DataAzurermStorageAccountBlobContainerSas#read}
  */
  readonly read?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas#set_immutability_policy DataAzurermStorageAccountBlobContainerSas#set_immutability_policy}
  */
  readonly setImmutabilityPolicy?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas#tags DataAzurermStorageAccountBlobContainerSas#tags}
  */
  readonly tags?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas#write DataAzurermStorageAccountBlobContainerSas#write}
  */
  readonly write?: boolean | cdktn.IResolvable;
}

export function dataAzurermStorageAccountBlobContainerSasPermissionsToTerraform(struct?: DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference | DataAzurermStorageAccountBlobContainerSasPermissions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    add: cdktn.booleanToTerraform(struct!.add),
    create: cdktn.booleanToTerraform(struct!.create),
    delete: cdktn.booleanToTerraform(struct!.delete),
    delete_version: cdktn.booleanToTerraform(struct!.deleteVersion),
    execute: cdktn.booleanToTerraform(struct!.execute),
    find: cdktn.booleanToTerraform(struct!.find),
    list: cdktn.booleanToTerraform(struct!.list),
    move: cdktn.booleanToTerraform(struct!.move),
    ownership: cdktn.booleanToTerraform(struct!.ownership),
    permissions: cdktn.booleanToTerraform(struct!.permissions),
    read: cdktn.booleanToTerraform(struct!.read),
    set_immutability_policy: cdktn.booleanToTerraform(struct!.setImmutabilityPolicy),
    tags: cdktn.booleanToTerraform(struct!.tags),
    write: cdktn.booleanToTerraform(struct!.write),
  }
}


export function dataAzurermStorageAccountBlobContainerSasPermissionsToHclTerraform(struct?: DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference | DataAzurermStorageAccountBlobContainerSasPermissions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    add: {
      value: cdktn.booleanToHclTerraform(struct!.add),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    create: {
      value: cdktn.booleanToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delete: {
      value: cdktn.booleanToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delete_version: {
      value: cdktn.booleanToHclTerraform(struct!.deleteVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    execute: {
      value: cdktn.booleanToHclTerraform(struct!.execute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    find: {
      value: cdktn.booleanToHclTerraform(struct!.find),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    list: {
      value: cdktn.booleanToHclTerraform(struct!.list),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    move: {
      value: cdktn.booleanToHclTerraform(struct!.move),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ownership: {
      value: cdktn.booleanToHclTerraform(struct!.ownership),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    permissions: {
      value: cdktn.booleanToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read: {
      value: cdktn.booleanToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_immutability_policy: {
      value: cdktn.booleanToHclTerraform(struct!.setImmutabilityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktn.booleanToHclTerraform(struct!.tags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write: {
      value: cdktn.booleanToHclTerraform(struct!.write),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAzurermStorageAccountBlobContainerSasPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._deleteVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteVersion = this._deleteVersion;
    }
    if (this._execute !== undefined) {
      hasAnyValues = true;
      internalValueResult.execute = this._execute;
    }
    if (this._find !== undefined) {
      hasAnyValues = true;
      internalValueResult.find = this._find;
    }
    if (this._list !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list;
    }
    if (this._move !== undefined) {
      hasAnyValues = true;
      internalValueResult.move = this._move;
    }
    if (this._ownership !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownership = this._ownership;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._setImmutabilityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.setImmutabilityPolicy = this._setImmutabilityPolicy;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermStorageAccountBlobContainerSasPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._add = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._deleteVersion = undefined;
      this._execute = undefined;
      this._find = undefined;
      this._list = undefined;
      this._move = undefined;
      this._ownership = undefined;
      this._permissions = undefined;
      this._read = undefined;
      this._setImmutabilityPolicy = undefined;
      this._tags = undefined;
      this._write = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._add = value.add;
      this._create = value.create;
      this._delete = value.delete;
      this._deleteVersion = value.deleteVersion;
      this._execute = value.execute;
      this._find = value.find;
      this._list = value.list;
      this._move = value.move;
      this._ownership = value.ownership;
      this._permissions = value.permissions;
      this._read = value.read;
      this._setImmutabilityPolicy = value.setImmutabilityPolicy;
      this._tags = value.tags;
      this._write = value.write;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: boolean | cdktn.IResolvable; 
  public get add() {
    return this.getBooleanAttribute('add');
  }
  public set add(value: boolean | cdktn.IResolvable) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // create - computed: false, optional: true, required: false
  private _create?: boolean | cdktn.IResolvable; 
  public get create() {
    return this.getBooleanAttribute('create');
  }
  public set create(value: boolean | cdktn.IResolvable) {
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
  private _delete?: boolean | cdktn.IResolvable; 
  public get delete() {
    return this.getBooleanAttribute('delete');
  }
  public set delete(value: boolean | cdktn.IResolvable) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // delete_version - computed: false, optional: true, required: false
  private _deleteVersion?: boolean | cdktn.IResolvable; 
  public get deleteVersion() {
    return this.getBooleanAttribute('delete_version');
  }
  public set deleteVersion(value: boolean | cdktn.IResolvable) {
    this._deleteVersion = value;
  }
  public resetDeleteVersion() {
    this._deleteVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteVersionInput() {
    return this._deleteVersion;
  }

  // execute - computed: false, optional: true, required: false
  private _execute?: boolean | cdktn.IResolvable; 
  public get execute() {
    return this.getBooleanAttribute('execute');
  }
  public set execute(value: boolean | cdktn.IResolvable) {
    this._execute = value;
  }
  public resetExecute() {
    this._execute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeInput() {
    return this._execute;
  }

  // find - computed: false, optional: true, required: false
  private _find?: boolean | cdktn.IResolvable; 
  public get find() {
    return this.getBooleanAttribute('find');
  }
  public set find(value: boolean | cdktn.IResolvable) {
    this._find = value;
  }
  public resetFind() {
    this._find = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findInput() {
    return this._find;
  }

  // list - computed: false, optional: true, required: false
  private _list?: boolean | cdktn.IResolvable; 
  public get list() {
    return this.getBooleanAttribute('list');
  }
  public set list(value: boolean | cdktn.IResolvable) {
    this._list = value;
  }
  public resetList() {
    this._list = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list;
  }

  // move - computed: false, optional: true, required: false
  private _move?: boolean | cdktn.IResolvable; 
  public get move() {
    return this.getBooleanAttribute('move');
  }
  public set move(value: boolean | cdktn.IResolvable) {
    this._move = value;
  }
  public resetMove() {
    this._move = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moveInput() {
    return this._move;
  }

  // ownership - computed: false, optional: true, required: false
  private _ownership?: boolean | cdktn.IResolvable; 
  public get ownership() {
    return this.getBooleanAttribute('ownership');
  }
  public set ownership(value: boolean | cdktn.IResolvable) {
    this._ownership = value;
  }
  public resetOwnership() {
    this._ownership = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownershipInput() {
    return this._ownership;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: boolean | cdktn.IResolvable; 
  public get permissions() {
    return this.getBooleanAttribute('permissions');
  }
  public set permissions(value: boolean | cdktn.IResolvable) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // read - computed: false, optional: true, required: false
  private _read?: boolean | cdktn.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read');
  }
  public set read(value: boolean | cdktn.IResolvable) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // set_immutability_policy - computed: false, optional: true, required: false
  private _setImmutabilityPolicy?: boolean | cdktn.IResolvable; 
  public get setImmutabilityPolicy() {
    return this.getBooleanAttribute('set_immutability_policy');
  }
  public set setImmutabilityPolicy(value: boolean | cdktn.IResolvable) {
    this._setImmutabilityPolicy = value;
  }
  public resetSetImmutabilityPolicy() {
    this._setImmutabilityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setImmutabilityPolicyInput() {
    return this._setImmutabilityPolicy;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: boolean | cdktn.IResolvable; 
  public get tags() {
    return this.getBooleanAttribute('tags');
  }
  public set tags(value: boolean | cdktn.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // write - computed: false, optional: true, required: false
  private _write?: boolean | cdktn.IResolvable; 
  public get write() {
    return this.getBooleanAttribute('write');
  }
  public set write(value: boolean | cdktn.IResolvable) {
    this._write = value;
  }
  public resetWrite() {
    this._write = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}
export interface DataAzurermStorageAccountBlobContainerSasTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas#read DataAzurermStorageAccountBlobContainerSas#read}
  */
  readonly read?: string;
}

export function dataAzurermStorageAccountBlobContainerSasTimeoutsToTerraform(struct?: DataAzurermStorageAccountBlobContainerSasTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    read: cdktn.stringToTerraform(struct!.read),
  }
}


export function dataAzurermStorageAccountBlobContainerSasTimeoutsToHclTerraform(struct?: DataAzurermStorageAccountBlobContainerSasTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    read: {
      value: cdktn.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermStorageAccountBlobContainerSasTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermStorageAccountBlobContainerSasTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas azurerm_storage_account_blob_container_sas}
*/
export class DataAzurermStorageAccountBlobContainerSas extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_storage_account_blob_container_sas";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAzurermStorageAccountBlobContainerSas resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermStorageAccountBlobContainerSas to import
  * @param importFromId The id of the existing DataAzurermStorageAccountBlobContainerSas that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermStorageAccountBlobContainerSas to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_storage_account_blob_container_sas", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_account_blob_container_sas azurerm_storage_account_blob_container_sas} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermStorageAccountBlobContainerSasConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermStorageAccountBlobContainerSasConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_account_blob_container_sas',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.78.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cacheControl = config.cacheControl;
    this._connectionString = config.connectionString;
    this._containerName = config.containerName;
    this._contentDisposition = config.contentDisposition;
    this._contentEncoding = config.contentEncoding;
    this._contentLanguage = config.contentLanguage;
    this._contentType = config.contentType;
    this._expiry = config.expiry;
    this._httpsOnly = config.httpsOnly;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._start = config.start;
    this._permissions.internalValue = config.permissions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_control - computed: false, optional: true, required: false
  private _cacheControl?: string; 
  public get cacheControl() {
    return this.getStringAttribute('cache_control');
  }
  public set cacheControl(value: string) {
    this._cacheControl = value;
  }
  public resetCacheControl() {
    this._cacheControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheControlInput() {
    return this._cacheControl;
  }

  // connection_string - computed: false, optional: false, required: true
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // content_disposition - computed: false, optional: true, required: false
  private _contentDisposition?: string; 
  public get contentDisposition() {
    return this.getStringAttribute('content_disposition');
  }
  public set contentDisposition(value: string) {
    this._contentDisposition = value;
  }
  public resetContentDisposition() {
    this._contentDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDispositionInput() {
    return this._contentDisposition;
  }

  // content_encoding - computed: false, optional: true, required: false
  private _contentEncoding?: string; 
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }
  public set contentEncoding(value: string) {
    this._contentEncoding = value;
  }
  public resetContentEncoding() {
    this._contentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentEncodingInput() {
    return this._contentEncoding;
  }

  // content_language - computed: false, optional: true, required: false
  private _contentLanguage?: string; 
  public get contentLanguage() {
    return this.getStringAttribute('content_language');
  }
  public set contentLanguage(value: string) {
    this._contentLanguage = value;
  }
  public resetContentLanguage() {
    this._contentLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLanguageInput() {
    return this._contentLanguage;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // expiry - computed: false, optional: false, required: true
  private _expiry?: string; 
  public get expiry() {
    return this.getStringAttribute('expiry');
  }
  public set expiry(value: string) {
    this._expiry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInput() {
    return this._expiry;
  }

  // https_only - computed: false, optional: true, required: false
  private _httpsOnly?: boolean | cdktn.IResolvable; 
  public get httpsOnly() {
    return this.getBooleanAttribute('https_only');
  }
  public set httpsOnly(value: boolean | cdktn.IResolvable) {
    this._httpsOnly = value;
  }
  public resetHttpsOnly() {
    this._httpsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsOnlyInput() {
    return this._httpsOnly;
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

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // sas - computed: true, optional: false, required: false
  public get sas() {
    return this.getStringAttribute('sas');
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference(this, "permissions");
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: DataAzurermStorageAccountBlobContainerSasPermissions) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermStorageAccountBlobContainerSasTimeouts) {
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
      cache_control: cdktn.stringToTerraform(this._cacheControl),
      connection_string: cdktn.stringToTerraform(this._connectionString),
      container_name: cdktn.stringToTerraform(this._containerName),
      content_disposition: cdktn.stringToTerraform(this._contentDisposition),
      content_encoding: cdktn.stringToTerraform(this._contentEncoding),
      content_language: cdktn.stringToTerraform(this._contentLanguage),
      content_type: cdktn.stringToTerraform(this._contentType),
      expiry: cdktn.stringToTerraform(this._expiry),
      https_only: cdktn.booleanToTerraform(this._httpsOnly),
      id: cdktn.stringToTerraform(this._id),
      ip_address: cdktn.stringToTerraform(this._ipAddress),
      start: cdktn.stringToTerraform(this._start),
      permissions: dataAzurermStorageAccountBlobContainerSasPermissionsToTerraform(this._permissions.internalValue),
      timeouts: dataAzurermStorageAccountBlobContainerSasTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_control: {
        value: cdktn.stringToHclTerraform(this._cacheControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_string: {
        value: cdktn.stringToHclTerraform(this._connectionString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_name: {
        value: cdktn.stringToHclTerraform(this._containerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_disposition: {
        value: cdktn.stringToHclTerraform(this._contentDisposition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_encoding: {
        value: cdktn.stringToHclTerraform(this._contentEncoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_language: {
        value: cdktn.stringToHclTerraform(this._contentLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_type: {
        value: cdktn.stringToHclTerraform(this._contentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiry: {
        value: cdktn.stringToHclTerraform(this._expiry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_only: {
        value: cdktn.booleanToHclTerraform(this._httpsOnly),
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
      ip_address: {
        value: cdktn.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start: {
        value: cdktn.stringToHclTerraform(this._start),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions: {
        value: dataAzurermStorageAccountBlobContainerSasPermissionsToHclTerraform(this._permissions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAzurermStorageAccountBlobContainerSasPermissionsList",
      },
      timeouts: {
        value: dataAzurermStorageAccountBlobContainerSasTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermStorageAccountBlobContainerSasTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
