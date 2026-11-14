/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataProtectionBackupInstanceCosmosdbAccountConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#cosmosdb_account_id DataProtectionBackupInstanceCosmosdbAccount#cosmosdb_account_id}
  */
  readonly cosmosdbAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#data_protection_backup_policy_cosmosdb_account_id DataProtectionBackupInstanceCosmosdbAccount#data_protection_backup_policy_cosmosdb_account_id}
  */
  readonly dataProtectionBackupPolicyCosmosdbAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#data_protection_backup_vault_id DataProtectionBackupInstanceCosmosdbAccount#data_protection_backup_vault_id}
  */
  readonly dataProtectionBackupVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#id DataProtectionBackupInstanceCosmosdbAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#location DataProtectionBackupInstanceCosmosdbAccount#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#name DataProtectionBackupInstanceCosmosdbAccount#name}
  */
  readonly name: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#timeouts DataProtectionBackupInstanceCosmosdbAccount#timeouts}
  */
  readonly timeouts?: DataProtectionBackupInstanceCosmosdbAccountTimeouts;
}
export interface DataProtectionBackupInstanceCosmosdbAccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#create DataProtectionBackupInstanceCosmosdbAccount#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#delete DataProtectionBackupInstanceCosmosdbAccount#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#read DataProtectionBackupInstanceCosmosdbAccount#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#update DataProtectionBackupInstanceCosmosdbAccount#update}
  */
  readonly update?: string;
}

export function dataProtectionBackupInstanceCosmosdbAccountTimeoutsToTerraform(struct?: DataProtectionBackupInstanceCosmosdbAccountTimeouts | cdktn.IResolvable): any {
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


export function dataProtectionBackupInstanceCosmosdbAccountTimeoutsToHclTerraform(struct?: DataProtectionBackupInstanceCosmosdbAccountTimeouts | cdktn.IResolvable): any {
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

export class DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProtectionBackupInstanceCosmosdbAccountTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataProtectionBackupInstanceCosmosdbAccountTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account azurerm_data_protection_backup_instance_cosmosdb_account}
*/
export class DataProtectionBackupInstanceCosmosdbAccount extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_data_protection_backup_instance_cosmosdb_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataProtectionBackupInstanceCosmosdbAccount resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProtectionBackupInstanceCosmosdbAccount to import
  * @param importFromId The id of the existing DataProtectionBackupInstanceCosmosdbAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProtectionBackupInstanceCosmosdbAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_data_protection_backup_instance_cosmosdb_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account azurerm_data_protection_backup_instance_cosmosdb_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProtectionBackupInstanceCosmosdbAccountConfig
  */
  public constructor(scope: Construct, id: string, config: DataProtectionBackupInstanceCosmosdbAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_protection_backup_instance_cosmosdb_account',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '5.14.0',
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
    this._cosmosdbAccountId = config.cosmosdbAccountId;
    this._dataProtectionBackupPolicyCosmosdbAccountId = config.dataProtectionBackupPolicyCosmosdbAccountId;
    this._dataProtectionBackupVaultId = config.dataProtectionBackupVaultId;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cosmosdb_account_id - computed: false, optional: false, required: true
  private _cosmosdbAccountId?: string; 
  public get cosmosdbAccountId() {
    return this.getStringAttribute('cosmosdb_account_id');
  }
  public set cosmosdbAccountId(value: string) {
    this._cosmosdbAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cosmosdbAccountIdInput() {
    return this._cosmosdbAccountId;
  }

  // data_protection_backup_policy_cosmosdb_account_id - computed: false, optional: false, required: true
  private _dataProtectionBackupPolicyCosmosdbAccountId?: string; 
  public get dataProtectionBackupPolicyCosmosdbAccountId() {
    return this.getStringAttribute('data_protection_backup_policy_cosmosdb_account_id');
  }
  public set dataProtectionBackupPolicyCosmosdbAccountId(value: string) {
    this._dataProtectionBackupPolicyCosmosdbAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProtectionBackupPolicyCosmosdbAccountIdInput() {
    return this._dataProtectionBackupPolicyCosmosdbAccountId;
  }

  // data_protection_backup_vault_id - computed: false, optional: false, required: true
  private _dataProtectionBackupVaultId?: string; 
  public get dataProtectionBackupVaultId() {
    return this.getStringAttribute('data_protection_backup_vault_id');
  }
  public set dataProtectionBackupVaultId(value: string) {
    this._dataProtectionBackupVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProtectionBackupVaultIdInput() {
    return this._dataProtectionBackupVaultId;
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

  // protection_state - computed: true, optional: false, required: false
  public get protectionState() {
    return this.getStringAttribute('protection_state');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataProtectionBackupInstanceCosmosdbAccountTimeouts) {
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
      cosmosdb_account_id: cdktn.stringToTerraform(this._cosmosdbAccountId),
      data_protection_backup_policy_cosmosdb_account_id: cdktn.stringToTerraform(this._dataProtectionBackupPolicyCosmosdbAccountId),
      data_protection_backup_vault_id: cdktn.stringToTerraform(this._dataProtectionBackupVaultId),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      timeouts: dataProtectionBackupInstanceCosmosdbAccountTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cosmosdb_account_id: {
        value: cdktn.stringToHclTerraform(this._cosmosdbAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_protection_backup_policy_cosmosdb_account_id: {
        value: cdktn.stringToHclTerraform(this._dataProtectionBackupPolicyCosmosdbAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_protection_backup_vault_id: {
        value: cdktn.stringToHclTerraform(this._dataProtectionBackupVaultId),
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
      timeouts: {
        value: dataProtectionBackupInstanceCosmosdbAccountTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataProtectionBackupInstanceCosmosdbAccountTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
