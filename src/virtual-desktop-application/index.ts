/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/virtual_desktop_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface VirtualDesktopApplicationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/virtual_desktop_application#application_group_id VirtualDesktopApplication#application_group_id}
  */
  readonly applicationGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/virtual_desktop_application#command_line_argument_policy VirtualDesktopApplication#command_line_argument_policy}
  */
  readonly commandLineArgumentPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/virtual_desktop_application#command_line_arguments VirtualDesktopApplication#command_line_arguments}
  */
  readonly commandLineArguments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/virtual_desktop_application#description VirtualDesktopApplication#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/virtual_desktop_application#friendly_name VirtualDesktopApplication#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/virtual_desktop_application#icon_index VirtualDesktopApplication#icon_index}
  */
  readonly iconIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/virtual_desktop_application#icon_path VirtualDesktopApplication#icon_path}
  */
  readonly iconPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/virtual_desktop_application#id VirtualDesktopApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/virtual_desktop_application#name VirtualDesktopApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/virtual_desktop_application#path VirtualDesktopApplication#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/virtual_desktop_application#show_in_portal VirtualDesktopApplication#show_in_portal}
  */
  readonly showInPortal?: boolean | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/virtual_desktop_application#timeouts VirtualDesktopApplication#timeouts}
  */
  readonly timeouts?: VirtualDesktopApplicationTimeouts;
}
export interface VirtualDesktopApplicationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/virtual_desktop_application#create VirtualDesktopApplication#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/virtual_desktop_application#delete VirtualDesktopApplication#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/virtual_desktop_application#read VirtualDesktopApplication#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/virtual_desktop_application#update VirtualDesktopApplication#update}
  */
  readonly update?: string;
}

export function virtualDesktopApplicationTimeoutsToTerraform(struct?: VirtualDesktopApplicationTimeouts | cdktn.IResolvable): any {
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


export function virtualDesktopApplicationTimeoutsToHclTerraform(struct?: VirtualDesktopApplicationTimeouts | cdktn.IResolvable): any {
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

export class VirtualDesktopApplicationTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualDesktopApplicationTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: VirtualDesktopApplicationTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/virtual_desktop_application azurerm_virtual_desktop_application}
*/
export class VirtualDesktopApplication extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_virtual_desktop_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a VirtualDesktopApplication resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualDesktopApplication to import
  * @param importFromId The id of the existing VirtualDesktopApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/virtual_desktop_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualDesktopApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_virtual_desktop_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/virtual_desktop_application azurerm_virtual_desktop_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualDesktopApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualDesktopApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_desktop_application',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.79.0',
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
    this._applicationGroupId = config.applicationGroupId;
    this._commandLineArgumentPolicy = config.commandLineArgumentPolicy;
    this._commandLineArguments = config.commandLineArguments;
    this._description = config.description;
    this._friendlyName = config.friendlyName;
    this._iconIndex = config.iconIndex;
    this._iconPath = config.iconPath;
    this._id = config.id;
    this._name = config.name;
    this._path = config.path;
    this._showInPortal = config.showInPortal;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_group_id - computed: false, optional: false, required: true
  private _applicationGroupId?: string; 
  public get applicationGroupId() {
    return this.getStringAttribute('application_group_id');
  }
  public set applicationGroupId(value: string) {
    this._applicationGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationGroupIdInput() {
    return this._applicationGroupId;
  }

  // command_line_argument_policy - computed: false, optional: false, required: true
  private _commandLineArgumentPolicy?: string; 
  public get commandLineArgumentPolicy() {
    return this.getStringAttribute('command_line_argument_policy');
  }
  public set commandLineArgumentPolicy(value: string) {
    this._commandLineArgumentPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandLineArgumentPolicyInput() {
    return this._commandLineArgumentPolicy;
  }

  // command_line_arguments - computed: false, optional: true, required: false
  private _commandLineArguments?: string; 
  public get commandLineArguments() {
    return this.getStringAttribute('command_line_arguments');
  }
  public set commandLineArguments(value: string) {
    this._commandLineArguments = value;
  }
  public resetCommandLineArguments() {
    this._commandLineArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandLineArgumentsInput() {
    return this._commandLineArguments;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // friendly_name - computed: true, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
  }

  // icon_index - computed: false, optional: true, required: false
  private _iconIndex?: number; 
  public get iconIndex() {
    return this.getNumberAttribute('icon_index');
  }
  public set iconIndex(value: number) {
    this._iconIndex = value;
  }
  public resetIconIndex() {
    this._iconIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconIndexInput() {
    return this._iconIndex;
  }

  // icon_path - computed: true, optional: true, required: false
  private _iconPath?: string; 
  public get iconPath() {
    return this.getStringAttribute('icon_path');
  }
  public set iconPath(value: string) {
    this._iconPath = value;
  }
  public resetIconPath() {
    this._iconPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconPathInput() {
    return this._iconPath;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // show_in_portal - computed: false, optional: true, required: false
  private _showInPortal?: boolean | cdktn.IResolvable; 
  public get showInPortal() {
    return this.getBooleanAttribute('show_in_portal');
  }
  public set showInPortal(value: boolean | cdktn.IResolvable) {
    this._showInPortal = value;
  }
  public resetShowInPortal() {
    this._showInPortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showInPortalInput() {
    return this._showInPortal;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VirtualDesktopApplicationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VirtualDesktopApplicationTimeouts) {
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
      application_group_id: cdktn.stringToTerraform(this._applicationGroupId),
      command_line_argument_policy: cdktn.stringToTerraform(this._commandLineArgumentPolicy),
      command_line_arguments: cdktn.stringToTerraform(this._commandLineArguments),
      description: cdktn.stringToTerraform(this._description),
      friendly_name: cdktn.stringToTerraform(this._friendlyName),
      icon_index: cdktn.numberToTerraform(this._iconIndex),
      icon_path: cdktn.stringToTerraform(this._iconPath),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      path: cdktn.stringToTerraform(this._path),
      show_in_portal: cdktn.booleanToTerraform(this._showInPortal),
      timeouts: virtualDesktopApplicationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_group_id: {
        value: cdktn.stringToHclTerraform(this._applicationGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command_line_argument_policy: {
        value: cdktn.stringToHclTerraform(this._commandLineArgumentPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command_line_arguments: {
        value: cdktn.stringToHclTerraform(this._commandLineArguments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      friendly_name: {
        value: cdktn.stringToHclTerraform(this._friendlyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icon_index: {
        value: cdktn.numberToHclTerraform(this._iconIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icon_path: {
        value: cdktn.stringToHclTerraform(this._iconPath),
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
      show_in_portal: {
        value: cdktn.booleanToHclTerraform(this._showInPortal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: virtualDesktopApplicationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualDesktopApplicationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
