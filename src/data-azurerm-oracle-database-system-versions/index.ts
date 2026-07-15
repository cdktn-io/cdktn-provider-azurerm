/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/oracle_database_system_versions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAzurermOracleDatabaseSystemVersionsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/oracle_database_system_versions#database_software_image_supported DataAzurermOracleDatabaseSystemVersions#database_software_image_supported}
  */
  readonly databaseSoftwareImageSupported?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/oracle_database_system_versions#database_system_shape DataAzurermOracleDatabaseSystemVersions#database_system_shape}
  */
  readonly databaseSystemShape?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/oracle_database_system_versions#id DataAzurermOracleDatabaseSystemVersions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/oracle_database_system_versions#location DataAzurermOracleDatabaseSystemVersions#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/oracle_database_system_versions#shape_family DataAzurermOracleDatabaseSystemVersions#shape_family}
  */
  readonly shapeFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/oracle_database_system_versions#storage_management DataAzurermOracleDatabaseSystemVersions#storage_management}
  */
  readonly storageManagement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/oracle_database_system_versions#upgrade_supported DataAzurermOracleDatabaseSystemVersions#upgrade_supported}
  */
  readonly upgradeSupported?: boolean | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/oracle_database_system_versions#timeouts DataAzurermOracleDatabaseSystemVersions#timeouts}
  */
  readonly timeouts?: DataAzurermOracleDatabaseSystemVersionsTimeouts;
}
export interface DataAzurermOracleDatabaseSystemVersionsVersions {
}

export function dataAzurermOracleDatabaseSystemVersionsVersionsToTerraform(struct?: DataAzurermOracleDatabaseSystemVersionsVersions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermOracleDatabaseSystemVersionsVersionsToHclTerraform(struct?: DataAzurermOracleDatabaseSystemVersionsVersions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermOracleDatabaseSystemVersionsVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermOracleDatabaseSystemVersionsVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // latest_version - computed: true, optional: false, required: false
  public get latestVersion() {
    return this.getBooleanAttribute('latest_version');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pluggable_database_supported - computed: true, optional: false, required: false
  public get pluggableDatabaseSupported() {
    return this.getBooleanAttribute('pluggable_database_supported');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataAzurermOracleDatabaseSystemVersionsVersionsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference {
    return new DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermOracleDatabaseSystemVersionsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/oracle_database_system_versions#read DataAzurermOracleDatabaseSystemVersions#read}
  */
  readonly read?: string;
}

export function dataAzurermOracleDatabaseSystemVersionsTimeoutsToTerraform(struct?: DataAzurermOracleDatabaseSystemVersionsTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    read: cdktn.stringToTerraform(struct!.read),
  }
}


export function dataAzurermOracleDatabaseSystemVersionsTimeoutsToHclTerraform(struct?: DataAzurermOracleDatabaseSystemVersionsTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermOracleDatabaseSystemVersionsTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermOracleDatabaseSystemVersionsTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/oracle_database_system_versions azurerm_oracle_database_system_versions}
*/
export class DataAzurermOracleDatabaseSystemVersions extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_oracle_database_system_versions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAzurermOracleDatabaseSystemVersions resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermOracleDatabaseSystemVersions to import
  * @param importFromId The id of the existing DataAzurermOracleDatabaseSystemVersions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/oracle_database_system_versions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermOracleDatabaseSystemVersions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_oracle_database_system_versions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/oracle_database_system_versions azurerm_oracle_database_system_versions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermOracleDatabaseSystemVersionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermOracleDatabaseSystemVersionsConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_oracle_database_system_versions',
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
    this._databaseSoftwareImageSupported = config.databaseSoftwareImageSupported;
    this._databaseSystemShape = config.databaseSystemShape;
    this._id = config.id;
    this._location = config.location;
    this._shapeFamily = config.shapeFamily;
    this._storageManagement = config.storageManagement;
    this._upgradeSupported = config.upgradeSupported;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_software_image_supported - computed: false, optional: true, required: false
  private _databaseSoftwareImageSupported?: boolean | cdktn.IResolvable; 
  public get databaseSoftwareImageSupported() {
    return this.getBooleanAttribute('database_software_image_supported');
  }
  public set databaseSoftwareImageSupported(value: boolean | cdktn.IResolvable) {
    this._databaseSoftwareImageSupported = value;
  }
  public resetDatabaseSoftwareImageSupported() {
    this._databaseSoftwareImageSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseSoftwareImageSupportedInput() {
    return this._databaseSoftwareImageSupported;
  }

  // database_system_shape - computed: false, optional: true, required: false
  private _databaseSystemShape?: string; 
  public get databaseSystemShape() {
    return this.getStringAttribute('database_system_shape');
  }
  public set databaseSystemShape(value: string) {
    this._databaseSystemShape = value;
  }
  public resetDatabaseSystemShape() {
    this._databaseSystemShape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseSystemShapeInput() {
    return this._databaseSystemShape;
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

  // shape_family - computed: false, optional: true, required: false
  private _shapeFamily?: string; 
  public get shapeFamily() {
    return this.getStringAttribute('shape_family');
  }
  public set shapeFamily(value: string) {
    this._shapeFamily = value;
  }
  public resetShapeFamily() {
    this._shapeFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeFamilyInput() {
    return this._shapeFamily;
  }

  // storage_management - computed: false, optional: true, required: false
  private _storageManagement?: string; 
  public get storageManagement() {
    return this.getStringAttribute('storage_management');
  }
  public set storageManagement(value: string) {
    this._storageManagement = value;
  }
  public resetStorageManagement() {
    this._storageManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageManagementInput() {
    return this._storageManagement;
  }

  // upgrade_supported - computed: false, optional: true, required: false
  private _upgradeSupported?: boolean | cdktn.IResolvable; 
  public get upgradeSupported() {
    return this.getBooleanAttribute('upgrade_supported');
  }
  public set upgradeSupported(value: boolean | cdktn.IResolvable) {
    this._upgradeSupported = value;
  }
  public resetUpgradeSupported() {
    this._upgradeSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeSupportedInput() {
    return this._upgradeSupported;
  }

  // versions - computed: true, optional: false, required: false
  private _versions = new DataAzurermOracleDatabaseSystemVersionsVersionsList(this, "versions", false);
  public get versions() {
    return this._versions;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermOracleDatabaseSystemVersionsTimeouts) {
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
      database_software_image_supported: cdktn.booleanToTerraform(this._databaseSoftwareImageSupported),
      database_system_shape: cdktn.stringToTerraform(this._databaseSystemShape),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      shape_family: cdktn.stringToTerraform(this._shapeFamily),
      storage_management: cdktn.stringToTerraform(this._storageManagement),
      upgrade_supported: cdktn.booleanToTerraform(this._upgradeSupported),
      timeouts: dataAzurermOracleDatabaseSystemVersionsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_software_image_supported: {
        value: cdktn.booleanToHclTerraform(this._databaseSoftwareImageSupported),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      database_system_shape: {
        value: cdktn.stringToHclTerraform(this._databaseSystemShape),
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
      shape_family: {
        value: cdktn.stringToHclTerraform(this._shapeFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_management: {
        value: cdktn.stringToHclTerraform(this._storageManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_supported: {
        value: cdktn.booleanToHclTerraform(this._upgradeSupported),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: dataAzurermOracleDatabaseSystemVersionsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermOracleDatabaseSystemVersionsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
