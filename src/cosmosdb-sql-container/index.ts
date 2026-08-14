/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CosmosdbSqlContainerConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#account_name CosmosdbSqlContainer#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#analytical_storage_ttl CosmosdbSqlContainer#analytical_storage_ttl}
  */
  readonly analyticalStorageTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#database_name CosmosdbSqlContainer#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#default_ttl CosmosdbSqlContainer#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#id CosmosdbSqlContainer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#name CosmosdbSqlContainer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#partition_key_kind CosmosdbSqlContainer#partition_key_kind}
  */
  readonly partitionKeyKind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#partition_key_paths CosmosdbSqlContainer#partition_key_paths}
  */
  readonly partitionKeyPaths: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#partition_key_version CosmosdbSqlContainer#partition_key_version}
  */
  readonly partitionKeyVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#resource_group_name CosmosdbSqlContainer#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#throughput CosmosdbSqlContainer#throughput}
  */
  readonly throughput?: number;
  /**
  * autoscale_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#autoscale_settings CosmosdbSqlContainer#autoscale_settings}
  */
  readonly autoscaleSettings?: CosmosdbSqlContainerAutoscaleSettings;
  /**
  * conflict_resolution_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#conflict_resolution_policy CosmosdbSqlContainer#conflict_resolution_policy}
  */
  readonly conflictResolutionPolicy?: CosmosdbSqlContainerConflictResolutionPolicy;
  /**
  * indexing_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#indexing_policy CosmosdbSqlContainer#indexing_policy}
  */
  readonly indexingPolicy?: CosmosdbSqlContainerIndexingPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#timeouts CosmosdbSqlContainer#timeouts}
  */
  readonly timeouts?: CosmosdbSqlContainerTimeouts;
  /**
  * unique_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#unique_key CosmosdbSqlContainer#unique_key}
  */
  readonly uniqueKey?: CosmosdbSqlContainerUniqueKey[] | cdktn.IResolvable;
}
export interface CosmosdbSqlContainerAutoscaleSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#max_throughput CosmosdbSqlContainer#max_throughput}
  */
  readonly maxThroughput?: number;
}

export function cosmosdbSqlContainerAutoscaleSettingsToTerraform(struct?: CosmosdbSqlContainerAutoscaleSettingsOutputReference | CosmosdbSqlContainerAutoscaleSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_throughput: cdktn.numberToTerraform(struct!.maxThroughput),
  }
}


export function cosmosdbSqlContainerAutoscaleSettingsToHclTerraform(struct?: CosmosdbSqlContainerAutoscaleSettingsOutputReference | CosmosdbSqlContainerAutoscaleSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_throughput: {
      value: cdktn.numberToHclTerraform(struct!.maxThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosmosdbSqlContainerAutoscaleSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosmosdbSqlContainerAutoscaleSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxThroughput = this._maxThroughput;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbSqlContainerAutoscaleSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxThroughput = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxThroughput = value.maxThroughput;
    }
  }

  // max_throughput - computed: true, optional: true, required: false
  private _maxThroughput?: number; 
  public get maxThroughput() {
    return this.getNumberAttribute('max_throughput');
  }
  public set maxThroughput(value: number) {
    this._maxThroughput = value;
  }
  public resetMaxThroughput() {
    this._maxThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxThroughputInput() {
    return this._maxThroughput;
  }
}
export interface CosmosdbSqlContainerConflictResolutionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#conflict_resolution_path CosmosdbSqlContainer#conflict_resolution_path}
  */
  readonly conflictResolutionPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#conflict_resolution_procedure CosmosdbSqlContainer#conflict_resolution_procedure}
  */
  readonly conflictResolutionProcedure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#mode CosmosdbSqlContainer#mode}
  */
  readonly mode: string;
}

export function cosmosdbSqlContainerConflictResolutionPolicyToTerraform(struct?: CosmosdbSqlContainerConflictResolutionPolicyOutputReference | CosmosdbSqlContainerConflictResolutionPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    conflict_resolution_path: cdktn.stringToTerraform(struct!.conflictResolutionPath),
    conflict_resolution_procedure: cdktn.stringToTerraform(struct!.conflictResolutionProcedure),
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function cosmosdbSqlContainerConflictResolutionPolicyToHclTerraform(struct?: CosmosdbSqlContainerConflictResolutionPolicyOutputReference | CosmosdbSqlContainerConflictResolutionPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    conflict_resolution_path: {
      value: cdktn.stringToHclTerraform(struct!.conflictResolutionPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conflict_resolution_procedure: {
      value: cdktn.stringToHclTerraform(struct!.conflictResolutionProcedure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosmosdbSqlContainerConflictResolutionPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosmosdbSqlContainerConflictResolutionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conflictResolutionPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.conflictResolutionPath = this._conflictResolutionPath;
    }
    if (this._conflictResolutionProcedure !== undefined) {
      hasAnyValues = true;
      internalValueResult.conflictResolutionProcedure = this._conflictResolutionProcedure;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbSqlContainerConflictResolutionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conflictResolutionPath = undefined;
      this._conflictResolutionProcedure = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conflictResolutionPath = value.conflictResolutionPath;
      this._conflictResolutionProcedure = value.conflictResolutionProcedure;
      this._mode = value.mode;
    }
  }

  // conflict_resolution_path - computed: false, optional: true, required: false
  private _conflictResolutionPath?: string; 
  public get conflictResolutionPath() {
    return this.getStringAttribute('conflict_resolution_path');
  }
  public set conflictResolutionPath(value: string) {
    this._conflictResolutionPath = value;
  }
  public resetConflictResolutionPath() {
    this._conflictResolutionPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictResolutionPathInput() {
    return this._conflictResolutionPath;
  }

  // conflict_resolution_procedure - computed: false, optional: true, required: false
  private _conflictResolutionProcedure?: string; 
  public get conflictResolutionProcedure() {
    return this.getStringAttribute('conflict_resolution_procedure');
  }
  public set conflictResolutionProcedure(value: string) {
    this._conflictResolutionProcedure = value;
  }
  public resetConflictResolutionProcedure() {
    this._conflictResolutionProcedure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictResolutionProcedureInput() {
    return this._conflictResolutionProcedure;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#order CosmosdbSqlContainer#order}
  */
  readonly order: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#path CosmosdbSqlContainer#path}
  */
  readonly path: string;
}

export function cosmosdbSqlContainerIndexingPolicyCompositeIndexIndexToTerraform(struct?: CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    order: cdktn.stringToTerraform(struct!.order),
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function cosmosdbSqlContainerIndexingPolicyCompositeIndexIndexToHclTerraform(struct?: CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    order: {
      value: cdktn.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._order = undefined;
      this._path = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._order = value.order;
      this._path = value.path;
    }
  }

  // order - computed: false, optional: false, required: true
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
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
}

export class CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList extends cdktn.ComplexList {
  public internalValue? : CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex[] | cdktn.IResolvable

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
  public get(index: number): CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference {
    return new CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CosmosdbSqlContainerIndexingPolicyCompositeIndex {
  /**
  * index block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#index CosmosdbSqlContainer#index}
  */
  readonly index: CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex[] | cdktn.IResolvable;
}

export function cosmosdbSqlContainerIndexingPolicyCompositeIndexToTerraform(struct?: CosmosdbSqlContainerIndexingPolicyCompositeIndex | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.listMapper(cosmosdbSqlContainerIndexingPolicyCompositeIndexIndexToTerraform, true)(struct!.index),
  }
}


export function cosmosdbSqlContainerIndexingPolicyCompositeIndexToHclTerraform(struct?: CosmosdbSqlContainerIndexingPolicyCompositeIndex | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    index: {
      value: cdktn.listMapperHcl(cosmosdbSqlContainerIndexingPolicyCompositeIndexIndexToHclTerraform, true)(struct!.index),
      isBlock: true,
      type: "list",
      storageClassType: "CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CosmosdbSqlContainerIndexingPolicyCompositeIndex | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbSqlContainerIndexingPolicyCompositeIndex | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index.internalValue = value.index;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index = new CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList(this, "index", false);
  public get index() {
    return this._index;
  }
  public putIndex(value: CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex[] | cdktn.IResolvable) {
    this._index.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index.internalValue;
  }
}

export class CosmosdbSqlContainerIndexingPolicyCompositeIndexList extends cdktn.ComplexList {
  public internalValue? : CosmosdbSqlContainerIndexingPolicyCompositeIndex[] | cdktn.IResolvable

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
  public get(index: number): CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference {
    return new CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CosmosdbSqlContainerIndexingPolicyExcludedPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#path CosmosdbSqlContainer#path}
  */
  readonly path: string;
}

export function cosmosdbSqlContainerIndexingPolicyExcludedPathToTerraform(struct?: CosmosdbSqlContainerIndexingPolicyExcludedPath | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function cosmosdbSqlContainerIndexingPolicyExcludedPathToHclTerraform(struct?: CosmosdbSqlContainerIndexingPolicyExcludedPath | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CosmosdbSqlContainerIndexingPolicyExcludedPath | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbSqlContainerIndexingPolicyExcludedPath | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
    }
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
}

export class CosmosdbSqlContainerIndexingPolicyExcludedPathList extends cdktn.ComplexList {
  public internalValue? : CosmosdbSqlContainerIndexingPolicyExcludedPath[] | cdktn.IResolvable

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
  public get(index: number): CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference {
    return new CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CosmosdbSqlContainerIndexingPolicyIncludedPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#path CosmosdbSqlContainer#path}
  */
  readonly path: string;
}

export function cosmosdbSqlContainerIndexingPolicyIncludedPathToTerraform(struct?: CosmosdbSqlContainerIndexingPolicyIncludedPath | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function cosmosdbSqlContainerIndexingPolicyIncludedPathToHclTerraform(struct?: CosmosdbSqlContainerIndexingPolicyIncludedPath | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CosmosdbSqlContainerIndexingPolicyIncludedPath | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbSqlContainerIndexingPolicyIncludedPath | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
    }
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
}

export class CosmosdbSqlContainerIndexingPolicyIncludedPathList extends cdktn.ComplexList {
  public internalValue? : CosmosdbSqlContainerIndexingPolicyIncludedPath[] | cdktn.IResolvable

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
  public get(index: number): CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference {
    return new CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CosmosdbSqlContainerIndexingPolicySpatialIndex {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#path CosmosdbSqlContainer#path}
  */
  readonly path: string;
}

export function cosmosdbSqlContainerIndexingPolicySpatialIndexToTerraform(struct?: CosmosdbSqlContainerIndexingPolicySpatialIndex | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function cosmosdbSqlContainerIndexingPolicySpatialIndexToHclTerraform(struct?: CosmosdbSqlContainerIndexingPolicySpatialIndex | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CosmosdbSqlContainerIndexingPolicySpatialIndex | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbSqlContainerIndexingPolicySpatialIndex | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
    }
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

  // types - computed: true, optional: false, required: false
  public get types() {
    return cdktn.Fn.tolist(this.getListAttribute('types'));
  }
}

export class CosmosdbSqlContainerIndexingPolicySpatialIndexList extends cdktn.ComplexList {
  public internalValue? : CosmosdbSqlContainerIndexingPolicySpatialIndex[] | cdktn.IResolvable

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
  public get(index: number): CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference {
    return new CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CosmosdbSqlContainerIndexingPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#indexing_mode CosmosdbSqlContainer#indexing_mode}
  */
  readonly indexingMode?: string;
  /**
  * composite_index block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#composite_index CosmosdbSqlContainer#composite_index}
  */
  readonly compositeIndex?: CosmosdbSqlContainerIndexingPolicyCompositeIndex[] | cdktn.IResolvable;
  /**
  * excluded_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#excluded_path CosmosdbSqlContainer#excluded_path}
  */
  readonly excludedPath?: CosmosdbSqlContainerIndexingPolicyExcludedPath[] | cdktn.IResolvable;
  /**
  * included_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#included_path CosmosdbSqlContainer#included_path}
  */
  readonly includedPath?: CosmosdbSqlContainerIndexingPolicyIncludedPath[] | cdktn.IResolvable;
  /**
  * spatial_index block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#spatial_index CosmosdbSqlContainer#spatial_index}
  */
  readonly spatialIndex?: CosmosdbSqlContainerIndexingPolicySpatialIndex[] | cdktn.IResolvable;
}

export function cosmosdbSqlContainerIndexingPolicyToTerraform(struct?: CosmosdbSqlContainerIndexingPolicyOutputReference | CosmosdbSqlContainerIndexingPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    indexing_mode: cdktn.stringToTerraform(struct!.indexingMode),
    composite_index: cdktn.listMapper(cosmosdbSqlContainerIndexingPolicyCompositeIndexToTerraform, true)(struct!.compositeIndex),
    excluded_path: cdktn.listMapper(cosmosdbSqlContainerIndexingPolicyExcludedPathToTerraform, true)(struct!.excludedPath),
    included_path: cdktn.listMapper(cosmosdbSqlContainerIndexingPolicyIncludedPathToTerraform, true)(struct!.includedPath),
    spatial_index: cdktn.listMapper(cosmosdbSqlContainerIndexingPolicySpatialIndexToTerraform, true)(struct!.spatialIndex),
  }
}


export function cosmosdbSqlContainerIndexingPolicyToHclTerraform(struct?: CosmosdbSqlContainerIndexingPolicyOutputReference | CosmosdbSqlContainerIndexingPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    indexing_mode: {
      value: cdktn.stringToHclTerraform(struct!.indexingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    composite_index: {
      value: cdktn.listMapperHcl(cosmosdbSqlContainerIndexingPolicyCompositeIndexToHclTerraform, true)(struct!.compositeIndex),
      isBlock: true,
      type: "list",
      storageClassType: "CosmosdbSqlContainerIndexingPolicyCompositeIndexList",
    },
    excluded_path: {
      value: cdktn.listMapperHcl(cosmosdbSqlContainerIndexingPolicyExcludedPathToHclTerraform, true)(struct!.excludedPath),
      isBlock: true,
      type: "list",
      storageClassType: "CosmosdbSqlContainerIndexingPolicyExcludedPathList",
    },
    included_path: {
      value: cdktn.listMapperHcl(cosmosdbSqlContainerIndexingPolicyIncludedPathToHclTerraform, true)(struct!.includedPath),
      isBlock: true,
      type: "list",
      storageClassType: "CosmosdbSqlContainerIndexingPolicyIncludedPathList",
    },
    spatial_index: {
      value: cdktn.listMapperHcl(cosmosdbSqlContainerIndexingPolicySpatialIndexToHclTerraform, true)(struct!.spatialIndex),
      isBlock: true,
      type: "list",
      storageClassType: "CosmosdbSqlContainerIndexingPolicySpatialIndexList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosmosdbSqlContainerIndexingPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosmosdbSqlContainerIndexingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indexingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexingMode = this._indexingMode;
    }
    if (this._compositeIndex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compositeIndex = this._compositeIndex?.internalValue;
    }
    if (this._excludedPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedPath = this._excludedPath?.internalValue;
    }
    if (this._includedPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedPath = this._includedPath?.internalValue;
    }
    if (this._spatialIndex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spatialIndex = this._spatialIndex?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbSqlContainerIndexingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._indexingMode = undefined;
      this._compositeIndex.internalValue = undefined;
      this._excludedPath.internalValue = undefined;
      this._includedPath.internalValue = undefined;
      this._spatialIndex.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._indexingMode = value.indexingMode;
      this._compositeIndex.internalValue = value.compositeIndex;
      this._excludedPath.internalValue = value.excludedPath;
      this._includedPath.internalValue = value.includedPath;
      this._spatialIndex.internalValue = value.spatialIndex;
    }
  }

  // indexing_mode - computed: false, optional: true, required: false
  private _indexingMode?: string; 
  public get indexingMode() {
    return this.getStringAttribute('indexing_mode');
  }
  public set indexingMode(value: string) {
    this._indexingMode = value;
  }
  public resetIndexingMode() {
    this._indexingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexingModeInput() {
    return this._indexingMode;
  }

  // composite_index - computed: false, optional: true, required: false
  private _compositeIndex = new CosmosdbSqlContainerIndexingPolicyCompositeIndexList(this, "composite_index", false);
  public get compositeIndex() {
    return this._compositeIndex;
  }
  public putCompositeIndex(value: CosmosdbSqlContainerIndexingPolicyCompositeIndex[] | cdktn.IResolvable) {
    this._compositeIndex.internalValue = value;
  }
  public resetCompositeIndex() {
    this._compositeIndex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeIndexInput() {
    return this._compositeIndex.internalValue;
  }

  // excluded_path - computed: false, optional: true, required: false
  private _excludedPath = new CosmosdbSqlContainerIndexingPolicyExcludedPathList(this, "excluded_path", false);
  public get excludedPath() {
    return this._excludedPath;
  }
  public putExcludedPath(value: CosmosdbSqlContainerIndexingPolicyExcludedPath[] | cdktn.IResolvable) {
    this._excludedPath.internalValue = value;
  }
  public resetExcludedPath() {
    this._excludedPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedPathInput() {
    return this._excludedPath.internalValue;
  }

  // included_path - computed: false, optional: true, required: false
  private _includedPath = new CosmosdbSqlContainerIndexingPolicyIncludedPathList(this, "included_path", false);
  public get includedPath() {
    return this._includedPath;
  }
  public putIncludedPath(value: CosmosdbSqlContainerIndexingPolicyIncludedPath[] | cdktn.IResolvable) {
    this._includedPath.internalValue = value;
  }
  public resetIncludedPath() {
    this._includedPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedPathInput() {
    return this._includedPath.internalValue;
  }

  // spatial_index - computed: false, optional: true, required: false
  private _spatialIndex = new CosmosdbSqlContainerIndexingPolicySpatialIndexList(this, "spatial_index", false);
  public get spatialIndex() {
    return this._spatialIndex;
  }
  public putSpatialIndex(value: CosmosdbSqlContainerIndexingPolicySpatialIndex[] | cdktn.IResolvable) {
    this._spatialIndex.internalValue = value;
  }
  public resetSpatialIndex() {
    this._spatialIndex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spatialIndexInput() {
    return this._spatialIndex.internalValue;
  }
}
export interface CosmosdbSqlContainerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#create CosmosdbSqlContainer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#delete CosmosdbSqlContainer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#read CosmosdbSqlContainer#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#update CosmosdbSqlContainer#update}
  */
  readonly update?: string;
}

export function cosmosdbSqlContainerTimeoutsToTerraform(struct?: CosmosdbSqlContainerTimeouts | cdktn.IResolvable): any {
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


export function cosmosdbSqlContainerTimeoutsToHclTerraform(struct?: CosmosdbSqlContainerTimeouts | cdktn.IResolvable): any {
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

export class CosmosdbSqlContainerTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CosmosdbSqlContainerTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CosmosdbSqlContainerTimeouts | cdktn.IResolvable | undefined) {
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
export interface CosmosdbSqlContainerUniqueKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#paths CosmosdbSqlContainer#paths}
  */
  readonly paths: string[];
}

export function cosmosdbSqlContainerUniqueKeyToTerraform(struct?: CosmosdbSqlContainerUniqueKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    paths: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.paths),
  }
}


export function cosmosdbSqlContainerUniqueKeyToHclTerraform(struct?: CosmosdbSqlContainerUniqueKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    paths: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosmosdbSqlContainerUniqueKeyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CosmosdbSqlContainerUniqueKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbSqlContainerUniqueKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._paths = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._paths = value.paths;
    }
  }

  // paths - computed: false, optional: false, required: true
  private _paths?: string[]; 
  public get paths() {
    return cdktn.Fn.tolist(this.getListAttribute('paths'));
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }
}

export class CosmosdbSqlContainerUniqueKeyList extends cdktn.ComplexList {
  public internalValue? : CosmosdbSqlContainerUniqueKey[] | cdktn.IResolvable

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
  public get(index: number): CosmosdbSqlContainerUniqueKeyOutputReference {
    return new CosmosdbSqlContainerUniqueKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container azurerm_cosmosdb_sql_container}
*/
export class CosmosdbSqlContainer extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_cosmosdb_sql_container";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CosmosdbSqlContainer resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CosmosdbSqlContainer to import
  * @param importFromId The id of the existing CosmosdbSqlContainer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CosmosdbSqlContainer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_cosmosdb_sql_container", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cosmosdb_sql_container azurerm_cosmosdb_sql_container} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CosmosdbSqlContainerConfig
  */
  public constructor(scope: Construct, id: string, config: CosmosdbSqlContainerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cosmosdb_sql_container',
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
    this._accountName = config.accountName;
    this._analyticalStorageTtl = config.analyticalStorageTtl;
    this._databaseName = config.databaseName;
    this._defaultTtl = config.defaultTtl;
    this._id = config.id;
    this._name = config.name;
    this._partitionKeyKind = config.partitionKeyKind;
    this._partitionKeyPaths = config.partitionKeyPaths;
    this._partitionKeyVersion = config.partitionKeyVersion;
    this._resourceGroupName = config.resourceGroupName;
    this._throughput = config.throughput;
    this._autoscaleSettings.internalValue = config.autoscaleSettings;
    this._conflictResolutionPolicy.internalValue = config.conflictResolutionPolicy;
    this._indexingPolicy.internalValue = config.indexingPolicy;
    this._timeouts.internalValue = config.timeouts;
    this._uniqueKey.internalValue = config.uniqueKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // analytical_storage_ttl - computed: false, optional: true, required: false
  private _analyticalStorageTtl?: number; 
  public get analyticalStorageTtl() {
    return this.getNumberAttribute('analytical_storage_ttl');
  }
  public set analyticalStorageTtl(value: number) {
    this._analyticalStorageTtl = value;
  }
  public resetAnalyticalStorageTtl() {
    this._analyticalStorageTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticalStorageTtlInput() {
    return this._analyticalStorageTtl;
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // default_ttl - computed: false, optional: true, required: false
  private _defaultTtl?: number; 
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }
  public set defaultTtl(value: number) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
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

  // partition_key_kind - computed: false, optional: true, required: false
  private _partitionKeyKind?: string; 
  public get partitionKeyKind() {
    return this.getStringAttribute('partition_key_kind');
  }
  public set partitionKeyKind(value: string) {
    this._partitionKeyKind = value;
  }
  public resetPartitionKeyKind() {
    this._partitionKeyKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeyKindInput() {
    return this._partitionKeyKind;
  }

  // partition_key_paths - computed: false, optional: false, required: true
  private _partitionKeyPaths?: string[]; 
  public get partitionKeyPaths() {
    return this.getListAttribute('partition_key_paths');
  }
  public set partitionKeyPaths(value: string[]) {
    this._partitionKeyPaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeyPathsInput() {
    return this._partitionKeyPaths;
  }

  // partition_key_version - computed: false, optional: true, required: false
  private _partitionKeyVersion?: number; 
  public get partitionKeyVersion() {
    return this.getNumberAttribute('partition_key_version');
  }
  public set partitionKeyVersion(value: number) {
    this._partitionKeyVersion = value;
  }
  public resetPartitionKeyVersion() {
    this._partitionKeyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeyVersionInput() {
    return this._partitionKeyVersion;
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

  // throughput - computed: true, optional: true, required: false
  private _throughput?: number; 
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }

  // autoscale_settings - computed: false, optional: true, required: false
  private _autoscaleSettings = new CosmosdbSqlContainerAutoscaleSettingsOutputReference(this, "autoscale_settings");
  public get autoscaleSettings() {
    return this._autoscaleSettings;
  }
  public putAutoscaleSettings(value: CosmosdbSqlContainerAutoscaleSettings) {
    this._autoscaleSettings.internalValue = value;
  }
  public resetAutoscaleSettings() {
    this._autoscaleSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleSettingsInput() {
    return this._autoscaleSettings.internalValue;
  }

  // conflict_resolution_policy - computed: false, optional: true, required: false
  private _conflictResolutionPolicy = new CosmosdbSqlContainerConflictResolutionPolicyOutputReference(this, "conflict_resolution_policy");
  public get conflictResolutionPolicy() {
    return this._conflictResolutionPolicy;
  }
  public putConflictResolutionPolicy(value: CosmosdbSqlContainerConflictResolutionPolicy) {
    this._conflictResolutionPolicy.internalValue = value;
  }
  public resetConflictResolutionPolicy() {
    this._conflictResolutionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictResolutionPolicyInput() {
    return this._conflictResolutionPolicy.internalValue;
  }

  // indexing_policy - computed: false, optional: true, required: false
  private _indexingPolicy = new CosmosdbSqlContainerIndexingPolicyOutputReference(this, "indexing_policy");
  public get indexingPolicy() {
    return this._indexingPolicy;
  }
  public putIndexingPolicy(value: CosmosdbSqlContainerIndexingPolicy) {
    this._indexingPolicy.internalValue = value;
  }
  public resetIndexingPolicy() {
    this._indexingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexingPolicyInput() {
    return this._indexingPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CosmosdbSqlContainerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CosmosdbSqlContainerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // unique_key - computed: false, optional: true, required: false
  private _uniqueKey = new CosmosdbSqlContainerUniqueKeyList(this, "unique_key", true);
  public get uniqueKey() {
    return this._uniqueKey;
  }
  public putUniqueKey(value: CosmosdbSqlContainerUniqueKey[] | cdktn.IResolvable) {
    this._uniqueKey.internalValue = value;
  }
  public resetUniqueKey() {
    this._uniqueKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueKeyInput() {
    return this._uniqueKey.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: cdktn.stringToTerraform(this._accountName),
      analytical_storage_ttl: cdktn.numberToTerraform(this._analyticalStorageTtl),
      database_name: cdktn.stringToTerraform(this._databaseName),
      default_ttl: cdktn.numberToTerraform(this._defaultTtl),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      partition_key_kind: cdktn.stringToTerraform(this._partitionKeyKind),
      partition_key_paths: cdktn.listMapper(cdktn.stringToTerraform, false)(this._partitionKeyPaths),
      partition_key_version: cdktn.numberToTerraform(this._partitionKeyVersion),
      resource_group_name: cdktn.stringToTerraform(this._resourceGroupName),
      throughput: cdktn.numberToTerraform(this._throughput),
      autoscale_settings: cosmosdbSqlContainerAutoscaleSettingsToTerraform(this._autoscaleSettings.internalValue),
      conflict_resolution_policy: cosmosdbSqlContainerConflictResolutionPolicyToTerraform(this._conflictResolutionPolicy.internalValue),
      indexing_policy: cosmosdbSqlContainerIndexingPolicyToTerraform(this._indexingPolicy.internalValue),
      timeouts: cosmosdbSqlContainerTimeoutsToTerraform(this._timeouts.internalValue),
      unique_key: cdktn.listMapper(cosmosdbSqlContainerUniqueKeyToTerraform, true)(this._uniqueKey.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_name: {
        value: cdktn.stringToHclTerraform(this._accountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      analytical_storage_ttl: {
        value: cdktn.numberToHclTerraform(this._analyticalStorageTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      database_name: {
        value: cdktn.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_ttl: {
        value: cdktn.numberToHclTerraform(this._defaultTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      partition_key_kind: {
        value: cdktn.stringToHclTerraform(this._partitionKeyKind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_key_paths: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._partitionKeyPaths),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      partition_key_version: {
        value: cdktn.numberToHclTerraform(this._partitionKeyVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_group_name: {
        value: cdktn.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      throughput: {
        value: cdktn.numberToHclTerraform(this._throughput),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      autoscale_settings: {
        value: cosmosdbSqlContainerAutoscaleSettingsToHclTerraform(this._autoscaleSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CosmosdbSqlContainerAutoscaleSettingsList",
      },
      conflict_resolution_policy: {
        value: cosmosdbSqlContainerConflictResolutionPolicyToHclTerraform(this._conflictResolutionPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CosmosdbSqlContainerConflictResolutionPolicyList",
      },
      indexing_policy: {
        value: cosmosdbSqlContainerIndexingPolicyToHclTerraform(this._indexingPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CosmosdbSqlContainerIndexingPolicyList",
      },
      timeouts: {
        value: cosmosdbSqlContainerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CosmosdbSqlContainerTimeouts",
      },
      unique_key: {
        value: cdktn.listMapperHcl(cosmosdbSqlContainerUniqueKeyToHclTerraform, true)(this._uniqueKey.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CosmosdbSqlContainerUniqueKeyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
