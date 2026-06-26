/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment_package
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AutomationRuntimeEnvironmentPackageConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment_package#automation_runtime_environment_id AutomationRuntimeEnvironmentPackage#automation_runtime_environment_id}
  */
  readonly automationRuntimeEnvironmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment_package#content_uri AutomationRuntimeEnvironmentPackage#content_uri}
  */
  readonly contentUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment_package#content_version AutomationRuntimeEnvironmentPackage#content_version}
  */
  readonly contentVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment_package#hash_algorithm AutomationRuntimeEnvironmentPackage#hash_algorithm}
  */
  readonly hashAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment_package#hash_value AutomationRuntimeEnvironmentPackage#hash_value}
  */
  readonly hashValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment_package#id AutomationRuntimeEnvironmentPackage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment_package#name AutomationRuntimeEnvironmentPackage#name}
  */
  readonly name: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment_package#timeouts AutomationRuntimeEnvironmentPackage#timeouts}
  */
  readonly timeouts?: AutomationRuntimeEnvironmentPackageTimeouts;
}
export interface AutomationRuntimeEnvironmentPackageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment_package#create AutomationRuntimeEnvironmentPackage#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment_package#delete AutomationRuntimeEnvironmentPackage#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment_package#read AutomationRuntimeEnvironmentPackage#read}
  */
  readonly read?: string;
}

export function automationRuntimeEnvironmentPackageTimeoutsToTerraform(struct?: AutomationRuntimeEnvironmentPackageTimeouts | cdktn.IResolvable): any {
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


export function automationRuntimeEnvironmentPackageTimeoutsToHclTerraform(struct?: AutomationRuntimeEnvironmentPackageTimeouts | cdktn.IResolvable): any {
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

export class AutomationRuntimeEnvironmentPackageTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationRuntimeEnvironmentPackageTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AutomationRuntimeEnvironmentPackageTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment_package azurerm_automation_runtime_environment_package}
*/
export class AutomationRuntimeEnvironmentPackage extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_automation_runtime_environment_package";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AutomationRuntimeEnvironmentPackage resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutomationRuntimeEnvironmentPackage to import
  * @param importFromId The id of the existing AutomationRuntimeEnvironmentPackage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment_package#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutomationRuntimeEnvironmentPackage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_automation_runtime_environment_package", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment_package azurerm_automation_runtime_environment_package} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomationRuntimeEnvironmentPackageConfig
  */
  public constructor(scope: Construct, id: string, config: AutomationRuntimeEnvironmentPackageConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_automation_runtime_environment_package',
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
    this._automationRuntimeEnvironmentId = config.automationRuntimeEnvironmentId;
    this._contentUri = config.contentUri;
    this._contentVersion = config.contentVersion;
    this._hashAlgorithm = config.hashAlgorithm;
    this._hashValue = config.hashValue;
    this._id = config.id;
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automation_runtime_environment_id - computed: false, optional: false, required: true
  private _automationRuntimeEnvironmentId?: string; 
  public get automationRuntimeEnvironmentId() {
    return this.getStringAttribute('automation_runtime_environment_id');
  }
  public set automationRuntimeEnvironmentId(value: string) {
    this._automationRuntimeEnvironmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get automationRuntimeEnvironmentIdInput() {
    return this._automationRuntimeEnvironmentId;
  }

  // content_uri - computed: false, optional: false, required: true
  private _contentUri?: string; 
  public get contentUri() {
    return this.getStringAttribute('content_uri');
  }
  public set contentUri(value: string) {
    this._contentUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentUriInput() {
    return this._contentUri;
  }

  // content_version - computed: false, optional: true, required: false
  private _contentVersion?: string; 
  public get contentVersion() {
    return this.getStringAttribute('content_version');
  }
  public set contentVersion(value: string) {
    this._contentVersion = value;
  }
  public resetContentVersion() {
    this._contentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentVersionInput() {
    return this._contentVersion;
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // hash_algorithm - computed: false, optional: true, required: false
  private _hashAlgorithm?: string; 
  public get hashAlgorithm() {
    return this.getStringAttribute('hash_algorithm');
  }
  public set hashAlgorithm(value: string) {
    this._hashAlgorithm = value;
  }
  public resetHashAlgorithm() {
    this._hashAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashAlgorithmInput() {
    return this._hashAlgorithm;
  }

  // hash_value - computed: false, optional: true, required: false
  private _hashValue?: string; 
  public get hashValue() {
    return this.getStringAttribute('hash_value');
  }
  public set hashValue(value: string) {
    this._hashValue = value;
  }
  public resetHashValue() {
    this._hashValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashValueInput() {
    return this._hashValue;
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

  // size_in_bytes - computed: true, optional: false, required: false
  public get sizeInBytes() {
    return this.getNumberAttribute('size_in_bytes');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AutomationRuntimeEnvironmentPackageTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AutomationRuntimeEnvironmentPackageTimeouts) {
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
      automation_runtime_environment_id: cdktn.stringToTerraform(this._automationRuntimeEnvironmentId),
      content_uri: cdktn.stringToTerraform(this._contentUri),
      content_version: cdktn.stringToTerraform(this._contentVersion),
      hash_algorithm: cdktn.stringToTerraform(this._hashAlgorithm),
      hash_value: cdktn.stringToTerraform(this._hashValue),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      timeouts: automationRuntimeEnvironmentPackageTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automation_runtime_environment_id: {
        value: cdktn.stringToHclTerraform(this._automationRuntimeEnvironmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_uri: {
        value: cdktn.stringToHclTerraform(this._contentUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_version: {
        value: cdktn.stringToHclTerraform(this._contentVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash_algorithm: {
        value: cdktn.stringToHclTerraform(this._hashAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash_value: {
        value: cdktn.stringToHclTerraform(this._hashValue),
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
      timeouts: {
        value: automationRuntimeEnvironmentPackageTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutomationRuntimeEnvironmentPackageTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
