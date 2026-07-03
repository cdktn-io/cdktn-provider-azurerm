/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetappVolumeBucketConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket#file_system_cifs_username NetappVolumeBucket#file_system_cifs_username}
  */
  readonly fileSystemCifsUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket#id NetappVolumeBucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket#name NetappVolumeBucket#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket#path NetappVolumeBucket#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket#permissions NetappVolumeBucket#permissions}
  */
  readonly permissions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket#volume_id NetappVolumeBucket#volume_id}
  */
  readonly volumeId: string;
  /**
  * file_system_nfs_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket#file_system_nfs_user NetappVolumeBucket#file_system_nfs_user}
  */
  readonly fileSystemNfsUser?: NetappVolumeBucketFileSystemNfsUser;
  /**
  * key_vault block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket#key_vault NetappVolumeBucket#key_vault}
  */
  readonly keyVault?: NetappVolumeBucketKeyVault;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket#timeouts NetappVolumeBucket#timeouts}
  */
  readonly timeouts?: NetappVolumeBucketTimeouts;
}
export interface NetappVolumeBucketFileSystemNfsUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket#group_id NetappVolumeBucket#group_id}
  */
  readonly groupId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket#user_id NetappVolumeBucket#user_id}
  */
  readonly userId: number;
}

export function netappVolumeBucketFileSystemNfsUserToTerraform(struct?: NetappVolumeBucketFileSystemNfsUserOutputReference | NetappVolumeBucketFileSystemNfsUser): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group_id: cdktn.numberToTerraform(struct!.groupId),
    user_id: cdktn.numberToTerraform(struct!.userId),
  }
}


export function netappVolumeBucketFileSystemNfsUserToHclTerraform(struct?: NetappVolumeBucketFileSystemNfsUserOutputReference | NetappVolumeBucketFileSystemNfsUser): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    group_id: {
      value: cdktn.numberToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_id: {
      value: cdktn.numberToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetappVolumeBucketFileSystemNfsUserOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetappVolumeBucketFileSystemNfsUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetappVolumeBucketFileSystemNfsUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupId = undefined;
      this._userId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupId = value.groupId;
      this._userId = value.userId;
    }
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: number; 
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
  public set userId(value: number) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}
export interface NetappVolumeBucketKeyVault {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket#certificate_key_vault_uri NetappVolumeBucket#certificate_key_vault_uri}
  */
  readonly certificateKeyVaultUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket#certificate_name NetappVolumeBucket#certificate_name}
  */
  readonly certificateName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket#credentials_key_vault_uri NetappVolumeBucket#credentials_key_vault_uri}
  */
  readonly credentialsKeyVaultUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket#credentials_secret_name NetappVolumeBucket#credentials_secret_name}
  */
  readonly credentialsSecretName: string;
}

export function netappVolumeBucketKeyVaultToTerraform(struct?: NetappVolumeBucketKeyVaultOutputReference | NetappVolumeBucketKeyVault): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_key_vault_uri: cdktn.stringToTerraform(struct!.certificateKeyVaultUri),
    certificate_name: cdktn.stringToTerraform(struct!.certificateName),
    credentials_key_vault_uri: cdktn.stringToTerraform(struct!.credentialsKeyVaultUri),
    credentials_secret_name: cdktn.stringToTerraform(struct!.credentialsSecretName),
  }
}


export function netappVolumeBucketKeyVaultToHclTerraform(struct?: NetappVolumeBucketKeyVaultOutputReference | NetappVolumeBucketKeyVault): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_key_vault_uri: {
      value: cdktn.stringToHclTerraform(struct!.certificateKeyVaultUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_name: {
      value: cdktn.stringToHclTerraform(struct!.certificateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_key_vault_uri: {
      value: cdktn.stringToHclTerraform(struct!.credentialsKeyVaultUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_secret_name: {
      value: cdktn.stringToHclTerraform(struct!.credentialsSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetappVolumeBucketKeyVaultOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetappVolumeBucketKeyVault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateKeyVaultUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateKeyVaultUri = this._certificateKeyVaultUri;
    }
    if (this._certificateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateName = this._certificateName;
    }
    if (this._credentialsKeyVaultUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsKeyVaultUri = this._credentialsKeyVaultUri;
    }
    if (this._credentialsSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretName = this._credentialsSecretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetappVolumeBucketKeyVault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateKeyVaultUri = undefined;
      this._certificateName = undefined;
      this._credentialsKeyVaultUri = undefined;
      this._credentialsSecretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateKeyVaultUri = value.certificateKeyVaultUri;
      this._certificateName = value.certificateName;
      this._credentialsKeyVaultUri = value.credentialsKeyVaultUri;
      this._credentialsSecretName = value.credentialsSecretName;
    }
  }

  // certificate_key_vault_uri - computed: false, optional: false, required: true
  private _certificateKeyVaultUri?: string; 
  public get certificateKeyVaultUri() {
    return this.getStringAttribute('certificate_key_vault_uri');
  }
  public set certificateKeyVaultUri(value: string) {
    this._certificateKeyVaultUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateKeyVaultUriInput() {
    return this._certificateKeyVaultUri;
  }

  // certificate_name - computed: false, optional: false, required: true
  private _certificateName?: string; 
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }
  public set certificateName(value: string) {
    this._certificateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateNameInput() {
    return this._certificateName;
  }

  // credentials_key_vault_uri - computed: false, optional: false, required: true
  private _credentialsKeyVaultUri?: string; 
  public get credentialsKeyVaultUri() {
    return this.getStringAttribute('credentials_key_vault_uri');
  }
  public set credentialsKeyVaultUri(value: string) {
    this._credentialsKeyVaultUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsKeyVaultUriInput() {
    return this._credentialsKeyVaultUri;
  }

  // credentials_secret_name - computed: false, optional: false, required: true
  private _credentialsSecretName?: string; 
  public get credentialsSecretName() {
    return this.getStringAttribute('credentials_secret_name');
  }
  public set credentialsSecretName(value: string) {
    this._credentialsSecretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretNameInput() {
    return this._credentialsSecretName;
  }
}
export interface NetappVolumeBucketTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket#create NetappVolumeBucket#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket#delete NetappVolumeBucket#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket#read NetappVolumeBucket#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket#update NetappVolumeBucket#update}
  */
  readonly update?: string;
}

export function netappVolumeBucketTimeoutsToTerraform(struct?: NetappVolumeBucketTimeouts | cdktn.IResolvable): any {
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


export function netappVolumeBucketTimeoutsToHclTerraform(struct?: NetappVolumeBucketTimeouts | cdktn.IResolvable): any {
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

export class NetappVolumeBucketTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetappVolumeBucketTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NetappVolumeBucketTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket azurerm_netapp_volume_bucket}
*/
export class NetappVolumeBucket extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_netapp_volume_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetappVolumeBucket resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetappVolumeBucket to import
  * @param importFromId The id of the existing NetappVolumeBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetappVolumeBucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_netapp_volume_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket azurerm_netapp_volume_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetappVolumeBucketConfig
  */
  public constructor(scope: Construct, id: string, config: NetappVolumeBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_netapp_volume_bucket',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.80.0',
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
    this._fileSystemCifsUsername = config.fileSystemCifsUsername;
    this._id = config.id;
    this._name = config.name;
    this._path = config.path;
    this._permissions = config.permissions;
    this._volumeId = config.volumeId;
    this._fileSystemNfsUser.internalValue = config.fileSystemNfsUser;
    this._keyVault.internalValue = config.keyVault;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // file_system_cifs_username - computed: false, optional: true, required: false
  private _fileSystemCifsUsername?: string; 
  public get fileSystemCifsUsername() {
    return this.getStringAttribute('file_system_cifs_username');
  }
  public set fileSystemCifsUsername(value: string) {
    this._fileSystemCifsUsername = value;
  }
  public resetFileSystemCifsUsername() {
    this._fileSystemCifsUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemCifsUsernameInput() {
    return this._fileSystemCifsUsername;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // server_certificate_common_name - computed: true, optional: false, required: false
  public get serverCertificateCommonName() {
    return this.getStringAttribute('server_certificate_common_name');
  }

  // server_certificate_expiry_date - computed: true, optional: false, required: false
  public get serverCertificateExpiryDate() {
    return this.getStringAttribute('server_certificate_expiry_date');
  }

  // server_ip_address - computed: true, optional: false, required: false
  public get serverIpAddress() {
    return this.getStringAttribute('server_ip_address');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }

  // file_system_nfs_user - computed: false, optional: true, required: false
  private _fileSystemNfsUser = new NetappVolumeBucketFileSystemNfsUserOutputReference(this, "file_system_nfs_user");
  public get fileSystemNfsUser() {
    return this._fileSystemNfsUser;
  }
  public putFileSystemNfsUser(value: NetappVolumeBucketFileSystemNfsUser) {
    this._fileSystemNfsUser.internalValue = value;
  }
  public resetFileSystemNfsUser() {
    this._fileSystemNfsUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemNfsUserInput() {
    return this._fileSystemNfsUser.internalValue;
  }

  // key_vault - computed: false, optional: true, required: false
  private _keyVault = new NetappVolumeBucketKeyVaultOutputReference(this, "key_vault");
  public get keyVault() {
    return this._keyVault;
  }
  public putKeyVault(value: NetappVolumeBucketKeyVault) {
    this._keyVault.internalValue = value;
  }
  public resetKeyVault() {
    this._keyVault.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultInput() {
    return this._keyVault.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetappVolumeBucketTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetappVolumeBucketTimeouts) {
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
      file_system_cifs_username: cdktn.stringToTerraform(this._fileSystemCifsUsername),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      path: cdktn.stringToTerraform(this._path),
      permissions: cdktn.stringToTerraform(this._permissions),
      volume_id: cdktn.stringToTerraform(this._volumeId),
      file_system_nfs_user: netappVolumeBucketFileSystemNfsUserToTerraform(this._fileSystemNfsUser.internalValue),
      key_vault: netappVolumeBucketKeyVaultToTerraform(this._keyVault.internalValue),
      timeouts: netappVolumeBucketTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      file_system_cifs_username: {
        value: cdktn.stringToHclTerraform(this._fileSystemCifsUsername),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktn.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions: {
        value: cdktn.stringToHclTerraform(this._permissions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_id: {
        value: cdktn.stringToHclTerraform(this._volumeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_system_nfs_user: {
        value: netappVolumeBucketFileSystemNfsUserToHclTerraform(this._fileSystemNfsUser.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetappVolumeBucketFileSystemNfsUserList",
      },
      key_vault: {
        value: netappVolumeBucketKeyVaultToHclTerraform(this._keyVault.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetappVolumeBucketKeyVaultList",
      },
      timeouts: {
        value: netappVolumeBucketTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetappVolumeBucketTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
