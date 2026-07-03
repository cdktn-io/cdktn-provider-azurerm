/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bastion_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BastionHostConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bastion_host#copy_paste_enabled BastionHost#copy_paste_enabled}
  */
  readonly copyPasteEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bastion_host#file_copy_enabled BastionHost#file_copy_enabled}
  */
  readonly fileCopyEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bastion_host#id BastionHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bastion_host#ip_connect_enabled BastionHost#ip_connect_enabled}
  */
  readonly ipConnectEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bastion_host#kerberos_enabled BastionHost#kerberos_enabled}
  */
  readonly kerberosEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bastion_host#location BastionHost#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bastion_host#name BastionHost#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bastion_host#resource_group_name BastionHost#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bastion_host#scale_units BastionHost#scale_units}
  */
  readonly scaleUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bastion_host#session_recording_enabled BastionHost#session_recording_enabled}
  */
  readonly sessionRecordingEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bastion_host#shareable_link_enabled BastionHost#shareable_link_enabled}
  */
  readonly shareableLinkEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bastion_host#sku BastionHost#sku}
  */
  readonly sku?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bastion_host#tags BastionHost#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bastion_host#tunneling_enabled BastionHost#tunneling_enabled}
  */
  readonly tunnelingEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bastion_host#virtual_network_id BastionHost#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bastion_host#zones BastionHost#zones}
  */
  readonly zones?: string[];
  /**
  * ip_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bastion_host#ip_configuration BastionHost#ip_configuration}
  */
  readonly ipConfiguration?: BastionHostIpConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bastion_host#timeouts BastionHost#timeouts}
  */
  readonly timeouts?: BastionHostTimeouts;
}
export interface BastionHostIpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bastion_host#name BastionHost#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bastion_host#public_ip_address_id BastionHost#public_ip_address_id}
  */
  readonly publicIpAddressId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bastion_host#subnet_id BastionHost#subnet_id}
  */
  readonly subnetId: string;
}

export function bastionHostIpConfigurationToTerraform(struct?: BastionHostIpConfigurationOutputReference | BastionHostIpConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    public_ip_address_id: cdktn.stringToTerraform(struct!.publicIpAddressId),
    subnet_id: cdktn.stringToTerraform(struct!.subnetId),
  }
}


export function bastionHostIpConfigurationToHclTerraform(struct?: BastionHostIpConfigurationOutputReference | BastionHostIpConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip_address_id: {
      value: cdktn.stringToHclTerraform(struct!.publicIpAddressId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktn.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BastionHostIpConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BastionHostIpConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._publicIpAddressId !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpAddressId = this._publicIpAddressId;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BastionHostIpConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._publicIpAddressId = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._publicIpAddressId = value.publicIpAddressId;
      this._subnetId = value.subnetId;
    }
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

  // public_ip_address_id - computed: false, optional: true, required: false
  private _publicIpAddressId?: string; 
  public get publicIpAddressId() {
    return this.getStringAttribute('public_ip_address_id');
  }
  public set publicIpAddressId(value: string) {
    this._publicIpAddressId = value;
  }
  public resetPublicIpAddressId() {
    this._publicIpAddressId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddressIdInput() {
    return this._publicIpAddressId;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}
export interface BastionHostTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bastion_host#create BastionHost#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bastion_host#delete BastionHost#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bastion_host#read BastionHost#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bastion_host#update BastionHost#update}
  */
  readonly update?: string;
}

export function bastionHostTimeoutsToTerraform(struct?: BastionHostTimeouts | cdktn.IResolvable): any {
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


export function bastionHostTimeoutsToHclTerraform(struct?: BastionHostTimeouts | cdktn.IResolvable): any {
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

export class BastionHostTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BastionHostTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BastionHostTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bastion_host azurerm_bastion_host}
*/
export class BastionHost extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_bastion_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BastionHost resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BastionHost to import
  * @param importFromId The id of the existing BastionHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bastion_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BastionHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_bastion_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bastion_host azurerm_bastion_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BastionHostConfig
  */
  public constructor(scope: Construct, id: string, config: BastionHostConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_bastion_host',
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
    this._copyPasteEnabled = config.copyPasteEnabled;
    this._fileCopyEnabled = config.fileCopyEnabled;
    this._id = config.id;
    this._ipConnectEnabled = config.ipConnectEnabled;
    this._kerberosEnabled = config.kerberosEnabled;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._scaleUnits = config.scaleUnits;
    this._sessionRecordingEnabled = config.sessionRecordingEnabled;
    this._shareableLinkEnabled = config.shareableLinkEnabled;
    this._sku = config.sku;
    this._tags = config.tags;
    this._tunnelingEnabled = config.tunnelingEnabled;
    this._virtualNetworkId = config.virtualNetworkId;
    this._zones = config.zones;
    this._ipConfiguration.internalValue = config.ipConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // copy_paste_enabled - computed: false, optional: true, required: false
  private _copyPasteEnabled?: boolean | cdktn.IResolvable; 
  public get copyPasteEnabled() {
    return this.getBooleanAttribute('copy_paste_enabled');
  }
  public set copyPasteEnabled(value: boolean | cdktn.IResolvable) {
    this._copyPasteEnabled = value;
  }
  public resetCopyPasteEnabled() {
    this._copyPasteEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyPasteEnabledInput() {
    return this._copyPasteEnabled;
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // file_copy_enabled - computed: false, optional: true, required: false
  private _fileCopyEnabled?: boolean | cdktn.IResolvable; 
  public get fileCopyEnabled() {
    return this.getBooleanAttribute('file_copy_enabled');
  }
  public set fileCopyEnabled(value: boolean | cdktn.IResolvable) {
    this._fileCopyEnabled = value;
  }
  public resetFileCopyEnabled() {
    this._fileCopyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileCopyEnabledInput() {
    return this._fileCopyEnabled;
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

  // ip_connect_enabled - computed: false, optional: true, required: false
  private _ipConnectEnabled?: boolean | cdktn.IResolvable; 
  public get ipConnectEnabled() {
    return this.getBooleanAttribute('ip_connect_enabled');
  }
  public set ipConnectEnabled(value: boolean | cdktn.IResolvable) {
    this._ipConnectEnabled = value;
  }
  public resetIpConnectEnabled() {
    this._ipConnectEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConnectEnabledInput() {
    return this._ipConnectEnabled;
  }

  // kerberos_enabled - computed: false, optional: true, required: false
  private _kerberosEnabled?: boolean | cdktn.IResolvable; 
  public get kerberosEnabled() {
    return this.getBooleanAttribute('kerberos_enabled');
  }
  public set kerberosEnabled(value: boolean | cdktn.IResolvable) {
    this._kerberosEnabled = value;
  }
  public resetKerberosEnabled() {
    this._kerberosEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosEnabledInput() {
    return this._kerberosEnabled;
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

  // private_only_enabled - computed: true, optional: false, required: false
  public get privateOnlyEnabled() {
    return this.getBooleanAttribute('private_only_enabled');
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

  // scale_units - computed: false, optional: true, required: false
  private _scaleUnits?: number; 
  public get scaleUnits() {
    return this.getNumberAttribute('scale_units');
  }
  public set scaleUnits(value: number) {
    this._scaleUnits = value;
  }
  public resetScaleUnits() {
    this._scaleUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleUnitsInput() {
    return this._scaleUnits;
  }

  // session_recording_enabled - computed: false, optional: true, required: false
  private _sessionRecordingEnabled?: boolean | cdktn.IResolvable; 
  public get sessionRecordingEnabled() {
    return this.getBooleanAttribute('session_recording_enabled');
  }
  public set sessionRecordingEnabled(value: boolean | cdktn.IResolvable) {
    this._sessionRecordingEnabled = value;
  }
  public resetSessionRecordingEnabled() {
    this._sessionRecordingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionRecordingEnabledInput() {
    return this._sessionRecordingEnabled;
  }

  // shareable_link_enabled - computed: false, optional: true, required: false
  private _shareableLinkEnabled?: boolean | cdktn.IResolvable; 
  public get shareableLinkEnabled() {
    return this.getBooleanAttribute('shareable_link_enabled');
  }
  public set shareableLinkEnabled(value: boolean | cdktn.IResolvable) {
    this._shareableLinkEnabled = value;
  }
  public resetShareableLinkEnabled() {
    this._shareableLinkEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareableLinkEnabledInput() {
    return this._shareableLinkEnabled;
  }

  // sku - computed: false, optional: true, required: false
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  public resetSku() {
    this._sku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
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

  // tunneling_enabled - computed: false, optional: true, required: false
  private _tunnelingEnabled?: boolean | cdktn.IResolvable; 
  public get tunnelingEnabled() {
    return this.getBooleanAttribute('tunneling_enabled');
  }
  public set tunnelingEnabled(value: boolean | cdktn.IResolvable) {
    this._tunnelingEnabled = value;
  }
  public resetTunnelingEnabled() {
    this._tunnelingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelingEnabledInput() {
    return this._tunnelingEnabled;
  }

  // virtual_network_id - computed: false, optional: true, required: false
  private _virtualNetworkId?: string; 
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string) {
    this._virtualNetworkId = value;
  }
  public resetVirtualNetworkId() {
    this._virtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return cdktn.Fn.tolist(this.getListAttribute('zones'));
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // ip_configuration - computed: false, optional: true, required: false
  private _ipConfiguration = new BastionHostIpConfigurationOutputReference(this, "ip_configuration");
  public get ipConfiguration() {
    return this._ipConfiguration;
  }
  public putIpConfiguration(value: BastionHostIpConfiguration) {
    this._ipConfiguration.internalValue = value;
  }
  public resetIpConfiguration() {
    this._ipConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigurationInput() {
    return this._ipConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BastionHostTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BastionHostTimeouts) {
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
      copy_paste_enabled: cdktn.booleanToTerraform(this._copyPasteEnabled),
      file_copy_enabled: cdktn.booleanToTerraform(this._fileCopyEnabled),
      id: cdktn.stringToTerraform(this._id),
      ip_connect_enabled: cdktn.booleanToTerraform(this._ipConnectEnabled),
      kerberos_enabled: cdktn.booleanToTerraform(this._kerberosEnabled),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      resource_group_name: cdktn.stringToTerraform(this._resourceGroupName),
      scale_units: cdktn.numberToTerraform(this._scaleUnits),
      session_recording_enabled: cdktn.booleanToTerraform(this._sessionRecordingEnabled),
      shareable_link_enabled: cdktn.booleanToTerraform(this._shareableLinkEnabled),
      sku: cdktn.stringToTerraform(this._sku),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tunneling_enabled: cdktn.booleanToTerraform(this._tunnelingEnabled),
      virtual_network_id: cdktn.stringToTerraform(this._virtualNetworkId),
      zones: cdktn.listMapper(cdktn.stringToTerraform, false)(this._zones),
      ip_configuration: bastionHostIpConfigurationToTerraform(this._ipConfiguration.internalValue),
      timeouts: bastionHostTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      copy_paste_enabled: {
        value: cdktn.booleanToHclTerraform(this._copyPasteEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      file_copy_enabled: {
        value: cdktn.booleanToHclTerraform(this._fileCopyEnabled),
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
      ip_connect_enabled: {
        value: cdktn.booleanToHclTerraform(this._ipConnectEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kerberos_enabled: {
        value: cdktn.booleanToHclTerraform(this._kerberosEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      resource_group_name: {
        value: cdktn.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scale_units: {
        value: cdktn.numberToHclTerraform(this._scaleUnits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_recording_enabled: {
        value: cdktn.booleanToHclTerraform(this._sessionRecordingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shareable_link_enabled: {
        value: cdktn.booleanToHclTerraform(this._shareableLinkEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sku: {
        value: cdktn.stringToHclTerraform(this._sku),
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
      tunneling_enabled: {
        value: cdktn.booleanToHclTerraform(this._tunnelingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      virtual_network_id: {
        value: cdktn.stringToHclTerraform(this._virtualNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zones: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._zones),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ip_configuration: {
        value: bastionHostIpConfigurationToHclTerraform(this._ipConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BastionHostIpConfigurationList",
      },
      timeouts: {
        value: bastionHostTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BastionHostTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
