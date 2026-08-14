/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_center_project_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DevCenterProjectPoolConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_center_project_pool#dev_box_definition_name DevCenterProjectPool#dev_box_definition_name}
  */
  readonly devBoxDefinitionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_center_project_pool#dev_center_attached_network_name DevCenterProjectPool#dev_center_attached_network_name}
  */
  readonly devCenterAttachedNetworkName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_center_project_pool#dev_center_project_id DevCenterProjectPool#dev_center_project_id}
  */
  readonly devCenterProjectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_center_project_pool#id DevCenterProjectPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_center_project_pool#local_administrator_enabled DevCenterProjectPool#local_administrator_enabled}
  */
  readonly localAdministratorEnabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_center_project_pool#location DevCenterProjectPool#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_center_project_pool#managed_virtual_network_regions DevCenterProjectPool#managed_virtual_network_regions}
  */
  readonly managedVirtualNetworkRegions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_center_project_pool#name DevCenterProjectPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_center_project_pool#single_sign_on_enabled DevCenterProjectPool#single_sign_on_enabled}
  */
  readonly singleSignOnEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_center_project_pool#stop_on_disconnect_grace_period_minutes DevCenterProjectPool#stop_on_disconnect_grace_period_minutes}
  */
  readonly stopOnDisconnectGracePeriodMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_center_project_pool#tags DevCenterProjectPool#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_center_project_pool#timeouts DevCenterProjectPool#timeouts}
  */
  readonly timeouts?: DevCenterProjectPoolTimeouts;
}
export interface DevCenterProjectPoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_center_project_pool#create DevCenterProjectPool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_center_project_pool#delete DevCenterProjectPool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_center_project_pool#read DevCenterProjectPool#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_center_project_pool#update DevCenterProjectPool#update}
  */
  readonly update?: string;
}

export function devCenterProjectPoolTimeoutsToTerraform(struct?: DevCenterProjectPoolTimeouts | cdktn.IResolvable): any {
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


export function devCenterProjectPoolTimeoutsToHclTerraform(struct?: DevCenterProjectPoolTimeouts | cdktn.IResolvable): any {
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

export class DevCenterProjectPoolTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevCenterProjectPoolTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DevCenterProjectPoolTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_center_project_pool azurerm_dev_center_project_pool}
*/
export class DevCenterProjectPool extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_dev_center_project_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DevCenterProjectPool resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DevCenterProjectPool to import
  * @param importFromId The id of the existing DevCenterProjectPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_center_project_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DevCenterProjectPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_dev_center_project_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_center_project_pool azurerm_dev_center_project_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevCenterProjectPoolConfig
  */
  public constructor(scope: Construct, id: string, config: DevCenterProjectPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_dev_center_project_pool',
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
    this._devBoxDefinitionName = config.devBoxDefinitionName;
    this._devCenterAttachedNetworkName = config.devCenterAttachedNetworkName;
    this._devCenterProjectId = config.devCenterProjectId;
    this._id = config.id;
    this._localAdministratorEnabled = config.localAdministratorEnabled;
    this._location = config.location;
    this._managedVirtualNetworkRegions = config.managedVirtualNetworkRegions;
    this._name = config.name;
    this._singleSignOnEnabled = config.singleSignOnEnabled;
    this._stopOnDisconnectGracePeriodMinutes = config.stopOnDisconnectGracePeriodMinutes;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dev_box_definition_name - computed: false, optional: false, required: true
  private _devBoxDefinitionName?: string; 
  public get devBoxDefinitionName() {
    return this.getStringAttribute('dev_box_definition_name');
  }
  public set devBoxDefinitionName(value: string) {
    this._devBoxDefinitionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devBoxDefinitionNameInput() {
    return this._devBoxDefinitionName;
  }

  // dev_center_attached_network_name - computed: false, optional: false, required: true
  private _devCenterAttachedNetworkName?: string; 
  public get devCenterAttachedNetworkName() {
    return this.getStringAttribute('dev_center_attached_network_name');
  }
  public set devCenterAttachedNetworkName(value: string) {
    this._devCenterAttachedNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devCenterAttachedNetworkNameInput() {
    return this._devCenterAttachedNetworkName;
  }

  // dev_center_project_id - computed: false, optional: false, required: true
  private _devCenterProjectId?: string; 
  public get devCenterProjectId() {
    return this.getStringAttribute('dev_center_project_id');
  }
  public set devCenterProjectId(value: string) {
    this._devCenterProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devCenterProjectIdInput() {
    return this._devCenterProjectId;
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

  // local_administrator_enabled - computed: false, optional: false, required: true
  private _localAdministratorEnabled?: boolean | cdktn.IResolvable; 
  public get localAdministratorEnabled() {
    return this.getBooleanAttribute('local_administrator_enabled');
  }
  public set localAdministratorEnabled(value: boolean | cdktn.IResolvable) {
    this._localAdministratorEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localAdministratorEnabledInput() {
    return this._localAdministratorEnabled;
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

  // managed_virtual_network_regions - computed: false, optional: true, required: false
  private _managedVirtualNetworkRegions?: string[]; 
  public get managedVirtualNetworkRegions() {
    return this.getListAttribute('managed_virtual_network_regions');
  }
  public set managedVirtualNetworkRegions(value: string[]) {
    this._managedVirtualNetworkRegions = value;
  }
  public resetManagedVirtualNetworkRegions() {
    this._managedVirtualNetworkRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedVirtualNetworkRegionsInput() {
    return this._managedVirtualNetworkRegions;
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

  // single_sign_on_enabled - computed: false, optional: true, required: false
  private _singleSignOnEnabled?: boolean | cdktn.IResolvable; 
  public get singleSignOnEnabled() {
    return this.getBooleanAttribute('single_sign_on_enabled');
  }
  public set singleSignOnEnabled(value: boolean | cdktn.IResolvable) {
    this._singleSignOnEnabled = value;
  }
  public resetSingleSignOnEnabled() {
    this._singleSignOnEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleSignOnEnabledInput() {
    return this._singleSignOnEnabled;
  }

  // stop_on_disconnect_grace_period_minutes - computed: false, optional: true, required: false
  private _stopOnDisconnectGracePeriodMinutes?: number; 
  public get stopOnDisconnectGracePeriodMinutes() {
    return this.getNumberAttribute('stop_on_disconnect_grace_period_minutes');
  }
  public set stopOnDisconnectGracePeriodMinutes(value: number) {
    this._stopOnDisconnectGracePeriodMinutes = value;
  }
  public resetStopOnDisconnectGracePeriodMinutes() {
    this._stopOnDisconnectGracePeriodMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopOnDisconnectGracePeriodMinutesInput() {
    return this._stopOnDisconnectGracePeriodMinutes;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DevCenterProjectPoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DevCenterProjectPoolTimeouts) {
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
      dev_box_definition_name: cdktn.stringToTerraform(this._devBoxDefinitionName),
      dev_center_attached_network_name: cdktn.stringToTerraform(this._devCenterAttachedNetworkName),
      dev_center_project_id: cdktn.stringToTerraform(this._devCenterProjectId),
      id: cdktn.stringToTerraform(this._id),
      local_administrator_enabled: cdktn.booleanToTerraform(this._localAdministratorEnabled),
      location: cdktn.stringToTerraform(this._location),
      managed_virtual_network_regions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._managedVirtualNetworkRegions),
      name: cdktn.stringToTerraform(this._name),
      single_sign_on_enabled: cdktn.booleanToTerraform(this._singleSignOnEnabled),
      stop_on_disconnect_grace_period_minutes: cdktn.numberToTerraform(this._stopOnDisconnectGracePeriodMinutes),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      timeouts: devCenterProjectPoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dev_box_definition_name: {
        value: cdktn.stringToHclTerraform(this._devBoxDefinitionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dev_center_attached_network_name: {
        value: cdktn.stringToHclTerraform(this._devCenterAttachedNetworkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dev_center_project_id: {
        value: cdktn.stringToHclTerraform(this._devCenterProjectId),
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
      local_administrator_enabled: {
        value: cdktn.booleanToHclTerraform(this._localAdministratorEnabled),
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
      managed_virtual_network_regions: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._managedVirtualNetworkRegions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      single_sign_on_enabled: {
        value: cdktn.booleanToHclTerraform(this._singleSignOnEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stop_on_disconnect_grace_period_minutes: {
        value: cdktn.numberToHclTerraform(this._stopOnDisconnectGracePeriodMinutes),
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
      timeouts: {
        value: devCenterProjectPoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DevCenterProjectPoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
