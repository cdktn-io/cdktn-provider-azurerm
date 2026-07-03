/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket_with_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetappVolumeBucketWithServerConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket_with_server#file_system_cifs_username NetappVolumeBucketWithServer#file_system_cifs_username}
  */
  readonly fileSystemCifsUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket_with_server#id NetappVolumeBucketWithServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket_with_server#name NetappVolumeBucketWithServer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket_with_server#path NetappVolumeBucketWithServer#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket_with_server#permissions NetappVolumeBucketWithServer#permissions}
  */
  readonly permissions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket_with_server#volume_id NetappVolumeBucketWithServer#volume_id}
  */
  readonly volumeId: string;
  /**
  * file_system_nfs_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket_with_server#file_system_nfs_user NetappVolumeBucketWithServer#file_system_nfs_user}
  */
  readonly fileSystemNfsUser?: NetappVolumeBucketWithServerFileSystemNfsUser;
  /**
  * key_vault block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket_with_server#key_vault NetappVolumeBucketWithServer#key_vault}
  */
  readonly keyVault?: NetappVolumeBucketWithServerKeyVault;
  /**
  * server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket_with_server#server NetappVolumeBucketWithServer#server}
  */
  readonly server: NetappVolumeBucketWithServerServer;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket_with_server#timeouts NetappVolumeBucketWithServer#timeouts}
  */
  readonly timeouts?: NetappVolumeBucketWithServerTimeouts;
}
export interface NetappVolumeBucketWithServerFileSystemNfsUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket_with_server#group_id NetappVolumeBucketWithServer#group_id}
  */
  readonly groupId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket_with_server#user_id NetappVolumeBucketWithServer#user_id}
  */
  readonly userId: number;
}

export function netappVolumeBucketWithServerFileSystemNfsUserToTerraform(struct?: NetappVolumeBucketWithServerFileSystemNfsUserOutputReference | NetappVolumeBucketWithServerFileSystemNfsUser): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group_id: cdktn.numberToTerraform(struct!.groupId),
    user_id: cdktn.numberToTerraform(struct!.userId),
  }
}


export function netappVolumeBucketWithServerFileSystemNfsUserToHclTerraform(struct?: NetappVolumeBucketWithServerFileSystemNfsUserOutputReference | NetappVolumeBucketWithServerFileSystemNfsUser): any {
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

export class NetappVolumeBucketWithServerFileSystemNfsUserOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetappVolumeBucketWithServerFileSystemNfsUser | undefined {
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

  public set internalValue(value: NetappVolumeBucketWithServerFileSystemNfsUser | undefined) {
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
export interface NetappVolumeBucketWithServerKeyVault {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket_with_server#certificate_key_vault_uri NetappVolumeBucketWithServer#certificate_key_vault_uri}
  */
  readonly certificateKeyVaultUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket_with_server#certificate_name NetappVolumeBucketWithServer#certificate_name}
  */
  readonly certificateName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket_with_server#credentials_key_vault_uri NetappVolumeBucketWithServer#credentials_key_vault_uri}
  */
  readonly credentialsKeyVaultUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket_with_server#credentials_secret_name NetappVolumeBucketWithServer#credentials_secret_name}
  */
  readonly credentialsSecretName: string;
}

export function netappVolumeBucketWithServerKeyVaultToTerraform(struct?: NetappVolumeBucketWithServerKeyVaultOutputReference | NetappVolumeBucketWithServerKeyVault): any {
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


export function netappVolumeBucketWithServerKeyVaultToHclTerraform(struct?: NetappVolumeBucketWithServerKeyVaultOutputReference | NetappVolumeBucketWithServerKeyVault): any {
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

export class NetappVolumeBucketWithServerKeyVaultOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetappVolumeBucketWithServerKeyVault | undefined {
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

  public set internalValue(value: NetappVolumeBucketWithServerKeyVault | undefined) {
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
export interface NetappVolumeBucketWithServerServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket_with_server#certificate_pem NetappVolumeBucketWithServer#certificate_pem}
  */
  readonly certificatePem?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket_with_server#fqdn NetappVolumeBucketWithServer#fqdn}
  */
  readonly fqdn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket_with_server#on_certificate_conflict_action NetappVolumeBucketWithServer#on_certificate_conflict_action}
  */
  readonly onCertificateConflictAction?: string;
}

export function netappVolumeBucketWithServerServerToTerraform(struct?: NetappVolumeBucketWithServerServerOutputReference | NetappVolumeBucketWithServerServer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_pem: cdktn.stringToTerraform(struct!.certificatePem),
    fqdn: cdktn.stringToTerraform(struct!.fqdn),
    on_certificate_conflict_action: cdktn.stringToTerraform(struct!.onCertificateConflictAction),
  }
}


export function netappVolumeBucketWithServerServerToHclTerraform(struct?: NetappVolumeBucketWithServerServerOutputReference | NetappVolumeBucketWithServerServer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_pem: {
      value: cdktn.stringToHclTerraform(struct!.certificatePem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn: {
      value: cdktn.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_certificate_conflict_action: {
      value: cdktn.stringToHclTerraform(struct!.onCertificateConflictAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetappVolumeBucketWithServerServerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetappVolumeBucketWithServerServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificatePem !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificatePem = this._certificatePem;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._onCertificateConflictAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.onCertificateConflictAction = this._onCertificateConflictAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetappVolumeBucketWithServerServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificatePem = undefined;
      this._fqdn = undefined;
      this._onCertificateConflictAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificatePem = value.certificatePem;
      this._fqdn = value.fqdn;
      this._onCertificateConflictAction = value.onCertificateConflictAction;
    }
  }

  // certificate_pem - computed: false, optional: true, required: false
  private _certificatePem?: string; 
  public get certificatePem() {
    return this.getStringAttribute('certificate_pem');
  }
  public set certificatePem(value: string) {
    this._certificatePem = value;
  }
  public resetCertificatePem() {
    this._certificatePem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePemInput() {
    return this._certificatePem;
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // on_certificate_conflict_action - computed: false, optional: true, required: false
  private _onCertificateConflictAction?: string; 
  public get onCertificateConflictAction() {
    return this.getStringAttribute('on_certificate_conflict_action');
  }
  public set onCertificateConflictAction(value: string) {
    this._onCertificateConflictAction = value;
  }
  public resetOnCertificateConflictAction() {
    this._onCertificateConflictAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onCertificateConflictActionInput() {
    return this._onCertificateConflictAction;
  }
}
export interface NetappVolumeBucketWithServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket_with_server#create NetappVolumeBucketWithServer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket_with_server#delete NetappVolumeBucketWithServer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket_with_server#read NetappVolumeBucketWithServer#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket_with_server#update NetappVolumeBucketWithServer#update}
  */
  readonly update?: string;
}

export function netappVolumeBucketWithServerTimeoutsToTerraform(struct?: NetappVolumeBucketWithServerTimeouts | cdktn.IResolvable): any {
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


export function netappVolumeBucketWithServerTimeoutsToHclTerraform(struct?: NetappVolumeBucketWithServerTimeouts | cdktn.IResolvable): any {
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

export class NetappVolumeBucketWithServerTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetappVolumeBucketWithServerTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NetappVolumeBucketWithServerTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket_with_server azurerm_netapp_volume_bucket_with_server}
*/
export class NetappVolumeBucketWithServer extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_netapp_volume_bucket_with_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetappVolumeBucketWithServer resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetappVolumeBucketWithServer to import
  * @param importFromId The id of the existing NetappVolumeBucketWithServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket_with_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetappVolumeBucketWithServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_netapp_volume_bucket_with_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/netapp_volume_bucket_with_server azurerm_netapp_volume_bucket_with_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetappVolumeBucketWithServerConfig
  */
  public constructor(scope: Construct, id: string, config: NetappVolumeBucketWithServerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_netapp_volume_bucket_with_server',
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
    this._server.internalValue = config.server;
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
  private _fileSystemNfsUser = new NetappVolumeBucketWithServerFileSystemNfsUserOutputReference(this, "file_system_nfs_user");
  public get fileSystemNfsUser() {
    return this._fileSystemNfsUser;
  }
  public putFileSystemNfsUser(value: NetappVolumeBucketWithServerFileSystemNfsUser) {
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
  private _keyVault = new NetappVolumeBucketWithServerKeyVaultOutputReference(this, "key_vault");
  public get keyVault() {
    return this._keyVault;
  }
  public putKeyVault(value: NetappVolumeBucketWithServerKeyVault) {
    this._keyVault.internalValue = value;
  }
  public resetKeyVault() {
    this._keyVault.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultInput() {
    return this._keyVault.internalValue;
  }

  // server - computed: false, optional: false, required: true
  private _server = new NetappVolumeBucketWithServerServerOutputReference(this, "server");
  public get server() {
    return this._server;
  }
  public putServer(value: NetappVolumeBucketWithServerServer) {
    this._server.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetappVolumeBucketWithServerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetappVolumeBucketWithServerTimeouts) {
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
      file_system_nfs_user: netappVolumeBucketWithServerFileSystemNfsUserToTerraform(this._fileSystemNfsUser.internalValue),
      key_vault: netappVolumeBucketWithServerKeyVaultToTerraform(this._keyVault.internalValue),
      server: netappVolumeBucketWithServerServerToTerraform(this._server.internalValue),
      timeouts: netappVolumeBucketWithServerTimeoutsToTerraform(this._timeouts.internalValue),
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
        value: netappVolumeBucketWithServerFileSystemNfsUserToHclTerraform(this._fileSystemNfsUser.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetappVolumeBucketWithServerFileSystemNfsUserList",
      },
      key_vault: {
        value: netappVolumeBucketWithServerKeyVaultToHclTerraform(this._keyVault.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetappVolumeBucketWithServerKeyVaultList",
      },
      server: {
        value: netappVolumeBucketWithServerServerToHclTerraform(this._server.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetappVolumeBucketWithServerServerList",
      },
      timeouts: {
        value: netappVolumeBucketWithServerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetappVolumeBucketWithServerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
