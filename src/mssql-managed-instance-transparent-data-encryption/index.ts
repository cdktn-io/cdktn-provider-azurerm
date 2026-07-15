/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MssqlManagedInstanceTransparentDataEncryptionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#auto_rotation_enabled MssqlManagedInstanceTransparentDataEncryption#auto_rotation_enabled}
  */
  readonly autoRotationEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#id MssqlManagedInstanceTransparentDataEncryption#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#key_vault_key_id MssqlManagedInstanceTransparentDataEncryption#key_vault_key_id}
  */
  readonly keyVaultKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#managed_hsm_key_id MssqlManagedInstanceTransparentDataEncryption#managed_hsm_key_id}
  */
  readonly managedHsmKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#managed_instance_id MssqlManagedInstanceTransparentDataEncryption#managed_instance_id}
  */
  readonly managedInstanceId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#timeouts MssqlManagedInstanceTransparentDataEncryption#timeouts}
  */
  readonly timeouts?: MssqlManagedInstanceTransparentDataEncryptionTimeouts;
}
export interface MssqlManagedInstanceTransparentDataEncryptionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#create MssqlManagedInstanceTransparentDataEncryption#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#delete MssqlManagedInstanceTransparentDataEncryption#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#read MssqlManagedInstanceTransparentDataEncryption#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#update MssqlManagedInstanceTransparentDataEncryption#update}
  */
  readonly update?: string;
}

export function mssqlManagedInstanceTransparentDataEncryptionTimeoutsToTerraform(struct?: MssqlManagedInstanceTransparentDataEncryptionTimeouts | cdktn.IResolvable): any {
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


export function mssqlManagedInstanceTransparentDataEncryptionTimeoutsToHclTerraform(struct?: MssqlManagedInstanceTransparentDataEncryptionTimeouts | cdktn.IResolvable): any {
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

export class MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MssqlManagedInstanceTransparentDataEncryptionTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MssqlManagedInstanceTransparentDataEncryptionTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption azurerm_mssql_managed_instance_transparent_data_encryption}
*/
export class MssqlManagedInstanceTransparentDataEncryption extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_mssql_managed_instance_transparent_data_encryption";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MssqlManagedInstanceTransparentDataEncryption resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MssqlManagedInstanceTransparentDataEncryption to import
  * @param importFromId The id of the existing MssqlManagedInstanceTransparentDataEncryption that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MssqlManagedInstanceTransparentDataEncryption to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_mssql_managed_instance_transparent_data_encryption", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption azurerm_mssql_managed_instance_transparent_data_encryption} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MssqlManagedInstanceTransparentDataEncryptionConfig
  */
  public constructor(scope: Construct, id: string, config: MssqlManagedInstanceTransparentDataEncryptionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mssql_managed_instance_transparent_data_encryption',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.81.0',
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
    this._autoRotationEnabled = config.autoRotationEnabled;
    this._id = config.id;
    this._keyVaultKeyId = config.keyVaultKeyId;
    this._managedHsmKeyId = config.managedHsmKeyId;
    this._managedInstanceId = config.managedInstanceId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_rotation_enabled - computed: false, optional: true, required: false
  private _autoRotationEnabled?: boolean | cdktn.IResolvable; 
  public get autoRotationEnabled() {
    return this.getBooleanAttribute('auto_rotation_enabled');
  }
  public set autoRotationEnabled(value: boolean | cdktn.IResolvable) {
    this._autoRotationEnabled = value;
  }
  public resetAutoRotationEnabled() {
    this._autoRotationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRotationEnabledInput() {
    return this._autoRotationEnabled;
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

  // key_vault_key_id - computed: false, optional: true, required: false
  private _keyVaultKeyId?: string; 
  public get keyVaultKeyId() {
    return this.getStringAttribute('key_vault_key_id');
  }
  public set keyVaultKeyId(value: string) {
    this._keyVaultKeyId = value;
  }
  public resetKeyVaultKeyId() {
    this._keyVaultKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultKeyIdInput() {
    return this._keyVaultKeyId;
  }

  // managed_hsm_key_id - computed: false, optional: true, required: false
  private _managedHsmKeyId?: string; 
  public get managedHsmKeyId() {
    return this.getStringAttribute('managed_hsm_key_id');
  }
  public set managedHsmKeyId(value: string) {
    this._managedHsmKeyId = value;
  }
  public resetManagedHsmKeyId() {
    this._managedHsmKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedHsmKeyIdInput() {
    return this._managedHsmKeyId;
  }

  // managed_instance_id - computed: false, optional: false, required: true
  private _managedInstanceId?: string; 
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }
  public set managedInstanceId(value: string) {
    this._managedInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceIdInput() {
    return this._managedInstanceId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MssqlManagedInstanceTransparentDataEncryptionTimeouts) {
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
      auto_rotation_enabled: cdktn.booleanToTerraform(this._autoRotationEnabled),
      id: cdktn.stringToTerraform(this._id),
      key_vault_key_id: cdktn.stringToTerraform(this._keyVaultKeyId),
      managed_hsm_key_id: cdktn.stringToTerraform(this._managedHsmKeyId),
      managed_instance_id: cdktn.stringToTerraform(this._managedInstanceId),
      timeouts: mssqlManagedInstanceTransparentDataEncryptionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_rotation_enabled: {
        value: cdktn.booleanToHclTerraform(this._autoRotationEnabled),
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
      key_vault_key_id: {
        value: cdktn.stringToHclTerraform(this._keyVaultKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_hsm_key_id: {
        value: cdktn.stringToHclTerraform(this._managedHsmKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_instance_id: {
        value: cdktn.stringToHclTerraform(this._managedInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: mssqlManagedInstanceTransparentDataEncryptionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MssqlManagedInstanceTransparentDataEncryptionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
