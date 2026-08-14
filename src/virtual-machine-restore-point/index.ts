/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_machine_restore_point
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface VirtualMachineRestorePointConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_machine_restore_point#crash_consistency_mode_enabled VirtualMachineRestorePoint#crash_consistency_mode_enabled}
  */
  readonly crashConsistencyModeEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_machine_restore_point#excluded_disks VirtualMachineRestorePoint#excluded_disks}
  */
  readonly excludedDisks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_machine_restore_point#id VirtualMachineRestorePoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_machine_restore_point#name VirtualMachineRestorePoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_machine_restore_point#virtual_machine_restore_point_collection_id VirtualMachineRestorePoint#virtual_machine_restore_point_collection_id}
  */
  readonly virtualMachineRestorePointCollectionId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_machine_restore_point#timeouts VirtualMachineRestorePoint#timeouts}
  */
  readonly timeouts?: VirtualMachineRestorePointTimeouts;
}
export interface VirtualMachineRestorePointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_machine_restore_point#create VirtualMachineRestorePoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_machine_restore_point#delete VirtualMachineRestorePoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_machine_restore_point#read VirtualMachineRestorePoint#read}
  */
  readonly read?: string;
}

export function virtualMachineRestorePointTimeoutsToTerraform(struct?: VirtualMachineRestorePointTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    read: cdktn.stringToTerraform(struct!.read),
  }
}


export function virtualMachineRestorePointTimeoutsToHclTerraform(struct?: VirtualMachineRestorePointTimeouts | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineRestorePointTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualMachineRestorePointTimeouts | cdktn.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineRestorePointTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_machine_restore_point azurerm_virtual_machine_restore_point}
*/
export class VirtualMachineRestorePoint extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_virtual_machine_restore_point";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a VirtualMachineRestorePoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualMachineRestorePoint to import
  * @param importFromId The id of the existing VirtualMachineRestorePoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_machine_restore_point#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualMachineRestorePoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_virtual_machine_restore_point", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_machine_restore_point azurerm_virtual_machine_restore_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualMachineRestorePointConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualMachineRestorePointConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_machine_restore_point',
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
    this._crashConsistencyModeEnabled = config.crashConsistencyModeEnabled;
    this._excludedDisks = config.excludedDisks;
    this._id = config.id;
    this._name = config.name;
    this._virtualMachineRestorePointCollectionId = config.virtualMachineRestorePointCollectionId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // crash_consistency_mode_enabled - computed: false, optional: true, required: false
  private _crashConsistencyModeEnabled?: boolean | cdktn.IResolvable; 
  public get crashConsistencyModeEnabled() {
    return this.getBooleanAttribute('crash_consistency_mode_enabled');
  }
  public set crashConsistencyModeEnabled(value: boolean | cdktn.IResolvable) {
    this._crashConsistencyModeEnabled = value;
  }
  public resetCrashConsistencyModeEnabled() {
    this._crashConsistencyModeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crashConsistencyModeEnabledInput() {
    return this._crashConsistencyModeEnabled;
  }

  // excluded_disks - computed: false, optional: true, required: false
  private _excludedDisks?: string[]; 
  public get excludedDisks() {
    return cdktn.Fn.tolist(this.getListAttribute('excluded_disks'));
  }
  public set excludedDisks(value: string[]) {
    this._excludedDisks = value;
  }
  public resetExcludedDisks() {
    this._excludedDisks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedDisksInput() {
    return this._excludedDisks;
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

  // virtual_machine_restore_point_collection_id - computed: false, optional: false, required: true
  private _virtualMachineRestorePointCollectionId?: string; 
  public get virtualMachineRestorePointCollectionId() {
    return this.getStringAttribute('virtual_machine_restore_point_collection_id');
  }
  public set virtualMachineRestorePointCollectionId(value: string) {
    this._virtualMachineRestorePointCollectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineRestorePointCollectionIdInput() {
    return this._virtualMachineRestorePointCollectionId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VirtualMachineRestorePointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VirtualMachineRestorePointTimeouts) {
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
      crash_consistency_mode_enabled: cdktn.booleanToTerraform(this._crashConsistencyModeEnabled),
      excluded_disks: cdktn.listMapper(cdktn.stringToTerraform, false)(this._excludedDisks),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      virtual_machine_restore_point_collection_id: cdktn.stringToTerraform(this._virtualMachineRestorePointCollectionId),
      timeouts: virtualMachineRestorePointTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      crash_consistency_mode_enabled: {
        value: cdktn.booleanToHclTerraform(this._crashConsistencyModeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      excluded_disks: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._excludedDisks),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      virtual_machine_restore_point_collection_id: {
        value: cdktn.stringToHclTerraform(this._virtualMachineRestorePointCollectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: virtualMachineRestorePointTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualMachineRestorePointTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
