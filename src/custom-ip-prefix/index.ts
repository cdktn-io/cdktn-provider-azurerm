/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/custom_ip_prefix
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CustomIpPrefixConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/custom_ip_prefix#cidr CustomIpPrefix#cidr}
  */
  readonly cidr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/custom_ip_prefix#commissioning_enabled CustomIpPrefix#commissioning_enabled}
  */
  readonly commissioningEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/custom_ip_prefix#id CustomIpPrefix#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/custom_ip_prefix#internet_advertising_disabled CustomIpPrefix#internet_advertising_disabled}
  */
  readonly internetAdvertisingDisabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/custom_ip_prefix#location CustomIpPrefix#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/custom_ip_prefix#name CustomIpPrefix#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/custom_ip_prefix#parent_custom_ip_prefix_id CustomIpPrefix#parent_custom_ip_prefix_id}
  */
  readonly parentCustomIpPrefixId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/custom_ip_prefix#resource_group_name CustomIpPrefix#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/custom_ip_prefix#roa_validity_end_date CustomIpPrefix#roa_validity_end_date}
  */
  readonly roaValidityEndDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/custom_ip_prefix#tags CustomIpPrefix#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/custom_ip_prefix#wan_validation_signed_message CustomIpPrefix#wan_validation_signed_message}
  */
  readonly wanValidationSignedMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/custom_ip_prefix#zones CustomIpPrefix#zones}
  */
  readonly zones?: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/custom_ip_prefix#timeouts CustomIpPrefix#timeouts}
  */
  readonly timeouts?: CustomIpPrefixTimeouts;
}
export interface CustomIpPrefixTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/custom_ip_prefix#create CustomIpPrefix#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/custom_ip_prefix#delete CustomIpPrefix#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/custom_ip_prefix#read CustomIpPrefix#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/custom_ip_prefix#update CustomIpPrefix#update}
  */
  readonly update?: string;
}

export function customIpPrefixTimeoutsToTerraform(struct?: CustomIpPrefixTimeouts | cdktn.IResolvable): any {
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


export function customIpPrefixTimeoutsToHclTerraform(struct?: CustomIpPrefixTimeouts | cdktn.IResolvable): any {
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

export class CustomIpPrefixTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomIpPrefixTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CustomIpPrefixTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/custom_ip_prefix azurerm_custom_ip_prefix}
*/
export class CustomIpPrefix extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_custom_ip_prefix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CustomIpPrefix resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomIpPrefix to import
  * @param importFromId The id of the existing CustomIpPrefix that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/custom_ip_prefix#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomIpPrefix to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_custom_ip_prefix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/custom_ip_prefix azurerm_custom_ip_prefix} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomIpPrefixConfig
  */
  public constructor(scope: Construct, id: string, config: CustomIpPrefixConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_custom_ip_prefix',
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
    this._cidr = config.cidr;
    this._commissioningEnabled = config.commissioningEnabled;
    this._id = config.id;
    this._internetAdvertisingDisabled = config.internetAdvertisingDisabled;
    this._location = config.location;
    this._name = config.name;
    this._parentCustomIpPrefixId = config.parentCustomIpPrefixId;
    this._resourceGroupName = config.resourceGroupName;
    this._roaValidityEndDate = config.roaValidityEndDate;
    this._tags = config.tags;
    this._wanValidationSignedMessage = config.wanValidationSignedMessage;
    this._zones = config.zones;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // commissioning_enabled - computed: false, optional: true, required: false
  private _commissioningEnabled?: boolean | cdktn.IResolvable; 
  public get commissioningEnabled() {
    return this.getBooleanAttribute('commissioning_enabled');
  }
  public set commissioningEnabled(value: boolean | cdktn.IResolvable) {
    this._commissioningEnabled = value;
  }
  public resetCommissioningEnabled() {
    this._commissioningEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commissioningEnabledInput() {
    return this._commissioningEnabled;
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

  // internet_advertising_disabled - computed: false, optional: true, required: false
  private _internetAdvertisingDisabled?: boolean | cdktn.IResolvable; 
  public get internetAdvertisingDisabled() {
    return this.getBooleanAttribute('internet_advertising_disabled');
  }
  public set internetAdvertisingDisabled(value: boolean | cdktn.IResolvable) {
    this._internetAdvertisingDisabled = value;
  }
  public resetInternetAdvertisingDisabled() {
    this._internetAdvertisingDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetAdvertisingDisabledInput() {
    return this._internetAdvertisingDisabled;
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

  // parent_custom_ip_prefix_id - computed: false, optional: true, required: false
  private _parentCustomIpPrefixId?: string; 
  public get parentCustomIpPrefixId() {
    return this.getStringAttribute('parent_custom_ip_prefix_id');
  }
  public set parentCustomIpPrefixId(value: string) {
    this._parentCustomIpPrefixId = value;
  }
  public resetParentCustomIpPrefixId() {
    this._parentCustomIpPrefixId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentCustomIpPrefixIdInput() {
    return this._parentCustomIpPrefixId;
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

  // roa_validity_end_date - computed: false, optional: true, required: false
  private _roaValidityEndDate?: string; 
  public get roaValidityEndDate() {
    return this.getStringAttribute('roa_validity_end_date');
  }
  public set roaValidityEndDate(value: string) {
    this._roaValidityEndDate = value;
  }
  public resetRoaValidityEndDate() {
    this._roaValidityEndDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roaValidityEndDateInput() {
    return this._roaValidityEndDate;
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

  // wan_validation_signed_message - computed: false, optional: true, required: false
  private _wanValidationSignedMessage?: string; 
  public get wanValidationSignedMessage() {
    return this.getStringAttribute('wan_validation_signed_message');
  }
  public set wanValidationSignedMessage(value: string) {
    this._wanValidationSignedMessage = value;
  }
  public resetWanValidationSignedMessage() {
    this._wanValidationSignedMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanValidationSignedMessageInput() {
    return this._wanValidationSignedMessage;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CustomIpPrefixTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CustomIpPrefixTimeouts) {
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
      cidr: cdktn.stringToTerraform(this._cidr),
      commissioning_enabled: cdktn.booleanToTerraform(this._commissioningEnabled),
      id: cdktn.stringToTerraform(this._id),
      internet_advertising_disabled: cdktn.booleanToTerraform(this._internetAdvertisingDisabled),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      parent_custom_ip_prefix_id: cdktn.stringToTerraform(this._parentCustomIpPrefixId),
      resource_group_name: cdktn.stringToTerraform(this._resourceGroupName),
      roa_validity_end_date: cdktn.stringToTerraform(this._roaValidityEndDate),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      wan_validation_signed_message: cdktn.stringToTerraform(this._wanValidationSignedMessage),
      zones: cdktn.listMapper(cdktn.stringToTerraform, false)(this._zones),
      timeouts: customIpPrefixTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr: {
        value: cdktn.stringToHclTerraform(this._cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      commissioning_enabled: {
        value: cdktn.booleanToHclTerraform(this._commissioningEnabled),
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
      internet_advertising_disabled: {
        value: cdktn.booleanToHclTerraform(this._internetAdvertisingDisabled),
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
      parent_custom_ip_prefix_id: {
        value: cdktn.stringToHclTerraform(this._parentCustomIpPrefixId),
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
      roa_validity_end_date: {
        value: cdktn.stringToHclTerraform(this._roaValidityEndDate),
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
      wan_validation_signed_message: {
        value: cdktn.stringToHclTerraform(this._wanValidationSignedMessage),
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
      timeouts: {
        value: customIpPrefixTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CustomIpPrefixTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
