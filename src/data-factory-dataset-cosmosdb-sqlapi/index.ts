/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataFactoryDatasetCosmosdbSqlapiConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#additional_properties DataFactoryDatasetCosmosdbSqlapi#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#annotations DataFactoryDatasetCosmosdbSqlapi#annotations}
  */
  readonly annotations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#collection_name DataFactoryDatasetCosmosdbSqlapi#collection_name}
  */
  readonly collectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#data_factory_id DataFactoryDatasetCosmosdbSqlapi#data_factory_id}
  */
  readonly dataFactoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#description DataFactoryDatasetCosmosdbSqlapi#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#folder DataFactoryDatasetCosmosdbSqlapi#folder}
  */
  readonly folder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#id DataFactoryDatasetCosmosdbSqlapi#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#linked_service_name DataFactoryDatasetCosmosdbSqlapi#linked_service_name}
  */
  readonly linkedServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#name DataFactoryDatasetCosmosdbSqlapi#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#parameters DataFactoryDatasetCosmosdbSqlapi#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * schema_column block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#schema_column DataFactoryDatasetCosmosdbSqlapi#schema_column}
  */
  readonly schemaColumn?: DataFactoryDatasetCosmosdbSqlapiSchemaColumn[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#timeouts DataFactoryDatasetCosmosdbSqlapi#timeouts}
  */
  readonly timeouts?: DataFactoryDatasetCosmosdbSqlapiTimeouts;
}
export interface DataFactoryDatasetCosmosdbSqlapiSchemaColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#description DataFactoryDatasetCosmosdbSqlapi#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#name DataFactoryDatasetCosmosdbSqlapi#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#type DataFactoryDatasetCosmosdbSqlapi#type}
  */
  readonly type?: string;
}

export function dataFactoryDatasetCosmosdbSqlapiSchemaColumnToTerraform(struct?: DataFactoryDatasetCosmosdbSqlapiSchemaColumn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function dataFactoryDatasetCosmosdbSqlapiSchemaColumnToHclTerraform(struct?: DataFactoryDatasetCosmosdbSqlapiSchemaColumn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFactoryDatasetCosmosdbSqlapiSchemaColumn | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryDatasetCosmosdbSqlapiSchemaColumn | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._type = value.type;
    }
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataFactoryDatasetCosmosdbSqlapiSchemaColumnList extends cdktn.ComplexList {
  public internalValue? : DataFactoryDatasetCosmosdbSqlapiSchemaColumn[] | cdktn.IResolvable

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
  public get(index: number): DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference {
    return new DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFactoryDatasetCosmosdbSqlapiTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#create DataFactoryDatasetCosmosdbSqlapi#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#delete DataFactoryDatasetCosmosdbSqlapi#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#read DataFactoryDatasetCosmosdbSqlapi#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#update DataFactoryDatasetCosmosdbSqlapi#update}
  */
  readonly update?: string;
}

export function dataFactoryDatasetCosmosdbSqlapiTimeoutsToTerraform(struct?: DataFactoryDatasetCosmosdbSqlapiTimeouts | cdktn.IResolvable): any {
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


export function dataFactoryDatasetCosmosdbSqlapiTimeoutsToHclTerraform(struct?: DataFactoryDatasetCosmosdbSqlapiTimeouts | cdktn.IResolvable): any {
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

export class DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFactoryDatasetCosmosdbSqlapiTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataFactoryDatasetCosmosdbSqlapiTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi azurerm_data_factory_dataset_cosmosdb_sqlapi}
*/
export class DataFactoryDatasetCosmosdbSqlapi extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_data_factory_dataset_cosmosdb_sqlapi";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataFactoryDatasetCosmosdbSqlapi resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFactoryDatasetCosmosdbSqlapi to import
  * @param importFromId The id of the existing DataFactoryDatasetCosmosdbSqlapi that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFactoryDatasetCosmosdbSqlapi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_data_factory_dataset_cosmosdb_sqlapi", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi azurerm_data_factory_dataset_cosmosdb_sqlapi} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryDatasetCosmosdbSqlapiConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryDatasetCosmosdbSqlapiConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_dataset_cosmosdb_sqlapi',
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
    this._additionalProperties = config.additionalProperties;
    this._annotations = config.annotations;
    this._collectionName = config.collectionName;
    this._dataFactoryId = config.dataFactoryId;
    this._description = config.description;
    this._folder = config.folder;
    this._id = config.id;
    this._linkedServiceName = config.linkedServiceName;
    this._name = config.name;
    this._parameters = config.parameters;
    this._schemaColumn.internalValue = config.schemaColumn;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string }; 
  public get additionalProperties() {
    return this.getStringMapAttribute('additional_properties');
  }
  public set additionalProperties(value: { [key: string]: string }) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: string[]; 
  public get annotations() {
    return this.getListAttribute('annotations');
  }
  public set annotations(value: string[]) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // collection_name - computed: false, optional: true, required: false
  private _collectionName?: string; 
  public get collectionName() {
    return this.getStringAttribute('collection_name');
  }
  public set collectionName(value: string) {
    this._collectionName = value;
  }
  public resetCollectionName() {
    this._collectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionNameInput() {
    return this._collectionName;
  }

  // data_factory_id - computed: false, optional: false, required: true
  private _dataFactoryId?: string; 
  public get dataFactoryId() {
    return this.getStringAttribute('data_factory_id');
  }
  public set dataFactoryId(value: string) {
    this._dataFactoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFactoryIdInput() {
    return this._dataFactoryId;
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

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
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

  // linked_service_name - computed: false, optional: false, required: true
  private _linkedServiceName?: string; 
  public get linkedServiceName() {
    return this.getStringAttribute('linked_service_name');
  }
  public set linkedServiceName(value: string) {
    this._linkedServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedServiceNameInput() {
    return this._linkedServiceName;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // schema_column - computed: false, optional: true, required: false
  private _schemaColumn = new DataFactoryDatasetCosmosdbSqlapiSchemaColumnList(this, "schema_column", false);
  public get schemaColumn() {
    return this._schemaColumn;
  }
  public putSchemaColumn(value: DataFactoryDatasetCosmosdbSqlapiSchemaColumn[] | cdktn.IResolvable) {
    this._schemaColumn.internalValue = value;
  }
  public resetSchemaColumn() {
    this._schemaColumn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaColumnInput() {
    return this._schemaColumn.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataFactoryDatasetCosmosdbSqlapiTimeouts) {
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
      additional_properties: cdktn.hashMapper(cdktn.stringToTerraform)(this._additionalProperties),
      annotations: cdktn.listMapper(cdktn.stringToTerraform, false)(this._annotations),
      collection_name: cdktn.stringToTerraform(this._collectionName),
      data_factory_id: cdktn.stringToTerraform(this._dataFactoryId),
      description: cdktn.stringToTerraform(this._description),
      folder: cdktn.stringToTerraform(this._folder),
      id: cdktn.stringToTerraform(this._id),
      linked_service_name: cdktn.stringToTerraform(this._linkedServiceName),
      name: cdktn.stringToTerraform(this._name),
      parameters: cdktn.hashMapper(cdktn.stringToTerraform)(this._parameters),
      schema_column: cdktn.listMapper(dataFactoryDatasetCosmosdbSqlapiSchemaColumnToTerraform, true)(this._schemaColumn.internalValue),
      timeouts: dataFactoryDatasetCosmosdbSqlapiTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_properties: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._additionalProperties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      annotations: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._annotations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      collection_name: {
        value: cdktn.stringToHclTerraform(this._collectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_factory_id: {
        value: cdktn.stringToHclTerraform(this._dataFactoryId),
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
      folder: {
        value: cdktn.stringToHclTerraform(this._folder),
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
      linked_service_name: {
        value: cdktn.stringToHclTerraform(this._linkedServiceName),
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
      parameters: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._parameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      schema_column: {
        value: cdktn.listMapperHcl(dataFactoryDatasetCosmosdbSqlapiSchemaColumnToHclTerraform, true)(this._schemaColumn.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFactoryDatasetCosmosdbSqlapiSchemaColumnList",
      },
      timeouts: {
        value: dataFactoryDatasetCosmosdbSqlapiTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFactoryDatasetCosmosdbSqlapiTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
