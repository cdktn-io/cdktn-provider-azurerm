/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface HorizondbClusterConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_login HorizondbCluster#administrator_login}
  */
  readonly administratorLogin: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password HorizondbCluster#administrator_password}
  */
  readonly administratorPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password_wo HorizondbCluster#administrator_password_wo}
  */
  readonly administratorPasswordWo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password_wo_version HorizondbCluster#administrator_password_wo_version}
  */
  readonly administratorPasswordWoVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#backup_retention_in_days HorizondbCluster#backup_retention_in_days}
  */
  readonly backupRetentionInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#geo_redundant_backup_enabled HorizondbCluster#geo_redundant_backup_enabled}
  */
  readonly geoRedundantBackupEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#id HorizondbCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#location HorizondbCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#name HorizondbCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#postgresql_version HorizondbCluster#postgresql_version}
  */
  readonly postgresqlVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#public_network_access HorizondbCluster#public_network_access}
  */
  readonly publicNetworkAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#resource_group_name HorizondbCluster#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#tags HorizondbCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#identity HorizondbCluster#identity}
  */
  readonly identity?: HorizondbClusterIdentity;
  /**
  * point_in_time_restore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#point_in_time_restore HorizondbCluster#point_in_time_restore}
  */
  readonly pointInTimeRestore?: HorizondbClusterPointInTimeRestore;
  /**
  * read_write_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#read_write_pool HorizondbCluster#read_write_pool}
  */
  readonly readWritePool: HorizondbClusterReadWritePool;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#timeouts HorizondbCluster#timeouts}
  */
  readonly timeouts?: HorizondbClusterTimeouts;
}
export interface HorizondbClusterIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#identity_ids HorizondbCluster#identity_ids}
  */
  readonly identityIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#type HorizondbCluster#type}
  */
  readonly type: string;
}

export function horizondbClusterIdentityToTerraform(struct?: HorizondbClusterIdentityOutputReference | HorizondbClusterIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identity_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.identityIds),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function horizondbClusterIdentityToHclTerraform(struct?: HorizondbClusterIdentityOutputReference | HorizondbClusterIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identity_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.identityIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class HorizondbClusterIdentityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HorizondbClusterIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityIds = this._identityIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizondbClusterIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityIds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityIds = value.identityIds;
      this._type = value.type;
    }
  }

  // identity_ids - computed: false, optional: false, required: true
  private _identityIds?: string[]; 
  public get identityIds() {
    return cdktn.Fn.tolist(this.getListAttribute('identity_ids'));
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface HorizondbClusterPointInTimeRestore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#point_in_time_utc HorizondbCluster#point_in_time_utc}
  */
  readonly pointInTimeUtc: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#source_horizondb_cluster_id HorizondbCluster#source_horizondb_cluster_id}
  */
  readonly sourceHorizondbClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#source_location HorizondbCluster#source_location}
  */
  readonly sourceLocation?: string;
}

export function horizondbClusterPointInTimeRestoreToTerraform(struct?: HorizondbClusterPointInTimeRestoreOutputReference | HorizondbClusterPointInTimeRestore): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    point_in_time_utc: cdktn.stringToTerraform(struct!.pointInTimeUtc),
    source_horizondb_cluster_id: cdktn.stringToTerraform(struct!.sourceHorizondbClusterId),
    source_location: cdktn.stringToTerraform(struct!.sourceLocation),
  }
}


export function horizondbClusterPointInTimeRestoreToHclTerraform(struct?: HorizondbClusterPointInTimeRestoreOutputReference | HorizondbClusterPointInTimeRestore): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    point_in_time_utc: {
      value: cdktn.stringToHclTerraform(struct!.pointInTimeUtc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_horizondb_cluster_id: {
      value: cdktn.stringToHclTerraform(struct!.sourceHorizondbClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_location: {
      value: cdktn.stringToHclTerraform(struct!.sourceLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HorizondbClusterPointInTimeRestoreOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HorizondbClusterPointInTimeRestore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pointInTimeUtc !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointInTimeUtc = this._pointInTimeUtc;
    }
    if (this._sourceHorizondbClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceHorizondbClusterId = this._sourceHorizondbClusterId;
    }
    if (this._sourceLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLocation = this._sourceLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizondbClusterPointInTimeRestore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pointInTimeUtc = undefined;
      this._sourceHorizondbClusterId = undefined;
      this._sourceLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pointInTimeUtc = value.pointInTimeUtc;
      this._sourceHorizondbClusterId = value.sourceHorizondbClusterId;
      this._sourceLocation = value.sourceLocation;
    }
  }

  // point_in_time_utc - computed: false, optional: false, required: true
  private _pointInTimeUtc?: string; 
  public get pointInTimeUtc() {
    return this.getStringAttribute('point_in_time_utc');
  }
  public set pointInTimeUtc(value: string) {
    this._pointInTimeUtc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInTimeUtcInput() {
    return this._pointInTimeUtc;
  }

  // source_horizondb_cluster_id - computed: false, optional: false, required: true
  private _sourceHorizondbClusterId?: string; 
  public get sourceHorizondbClusterId() {
    return this.getStringAttribute('source_horizondb_cluster_id');
  }
  public set sourceHorizondbClusterId(value: string) {
    this._sourceHorizondbClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceHorizondbClusterIdInput() {
    return this._sourceHorizondbClusterId;
  }

  // source_location - computed: false, optional: true, required: false
  private _sourceLocation?: string; 
  public get sourceLocation() {
    return this.getStringAttribute('source_location');
  }
  public set sourceLocation(value: string) {
    this._sourceLocation = value;
  }
  public resetSourceLocation() {
    this._sourceLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLocationInput() {
    return this._sourceLocation;
  }
}
export interface HorizondbClusterReadWritePoolCompute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#generation HorizondbCluster#generation}
  */
  readonly generation: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#processor HorizondbCluster#processor}
  */
  readonly processor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#vcores HorizondbCluster#vcores}
  */
  readonly vcores: number;
}

export function horizondbClusterReadWritePoolComputeToTerraform(struct?: HorizondbClusterReadWritePoolComputeOutputReference | HorizondbClusterReadWritePoolCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    generation: cdktn.numberToTerraform(struct!.generation),
    processor: cdktn.stringToTerraform(struct!.processor),
    vcores: cdktn.numberToTerraform(struct!.vcores),
  }
}


export function horizondbClusterReadWritePoolComputeToHclTerraform(struct?: HorizondbClusterReadWritePoolComputeOutputReference | HorizondbClusterReadWritePoolCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    generation: {
      value: cdktn.numberToHclTerraform(struct!.generation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    processor: {
      value: cdktn.stringToHclTerraform(struct!.processor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcores: {
      value: cdktn.numberToHclTerraform(struct!.vcores),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HorizondbClusterReadWritePoolComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HorizondbClusterReadWritePoolCompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._processor !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor;
    }
    if (this._vcores !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcores = this._vcores;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizondbClusterReadWritePoolCompute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._generation = undefined;
      this._processor = undefined;
      this._vcores = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._generation = value.generation;
      this._processor = value.processor;
      this._vcores = value.vcores;
    }
  }

  // generation - computed: false, optional: false, required: true
  private _generation?: number; 
  public get generation() {
    return this.getNumberAttribute('generation');
  }
  public set generation(value: number) {
    this._generation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // processor - computed: false, optional: false, required: true
  private _processor?: string; 
  public get processor() {
    return this.getStringAttribute('processor');
  }
  public set processor(value: string) {
    this._processor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processorInput() {
    return this._processor;
  }

  // vcores - computed: false, optional: false, required: true
  private _vcores?: number; 
  public get vcores() {
    return this.getNumberAttribute('vcores');
  }
  public set vcores(value: number) {
    this._vcores = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcoresInput() {
    return this._vcores;
  }
}
export interface HorizondbClusterReadWritePool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#high_availability_mode HorizondbCluster#high_availability_mode}
  */
  readonly highAvailabilityMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#name HorizondbCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#node_count HorizondbCluster#node_count}
  */
  readonly nodeCount: number;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#compute HorizondbCluster#compute}
  */
  readonly compute: HorizondbClusterReadWritePoolCompute;
}

export function horizondbClusterReadWritePoolToTerraform(struct?: HorizondbClusterReadWritePoolOutputReference | HorizondbClusterReadWritePool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    high_availability_mode: cdktn.stringToTerraform(struct!.highAvailabilityMode),
    name: cdktn.stringToTerraform(struct!.name),
    node_count: cdktn.numberToTerraform(struct!.nodeCount),
    compute: horizondbClusterReadWritePoolComputeToTerraform(struct!.compute),
  }
}


export function horizondbClusterReadWritePoolToHclTerraform(struct?: HorizondbClusterReadWritePoolOutputReference | HorizondbClusterReadWritePool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    high_availability_mode: {
      value: cdktn.stringToHclTerraform(struct!.highAvailabilityMode),
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
    node_count: {
      value: cdktn.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compute: {
      value: horizondbClusterReadWritePoolComputeToHclTerraform(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "HorizondbClusterReadWritePoolComputeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HorizondbClusterReadWritePoolOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HorizondbClusterReadWritePool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._highAvailabilityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.highAvailabilityMode = this._highAvailabilityMode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._compute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compute = this._compute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizondbClusterReadWritePool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._highAvailabilityMode = undefined;
      this._name = undefined;
      this._nodeCount = undefined;
      this._compute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._highAvailabilityMode = value.highAvailabilityMode;
      this._name = value.name;
      this._nodeCount = value.nodeCount;
      this._compute.internalValue = value.compute;
    }
  }

  // high_availability_mode - computed: false, optional: false, required: true
  private _highAvailabilityMode?: string; 
  public get highAvailabilityMode() {
    return this.getStringAttribute('high_availability_mode');
  }
  public set highAvailabilityMode(value: string) {
    this._highAvailabilityMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get highAvailabilityModeInput() {
    return this._highAvailabilityMode;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // compute - computed: false, optional: false, required: true
  private _compute = new HorizondbClusterReadWritePoolComputeOutputReference(this, "compute");
  public get compute() {
    return this._compute;
  }
  public putCompute(value: HorizondbClusterReadWritePoolCompute) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }
}
export interface HorizondbClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#create HorizondbCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#delete HorizondbCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#read HorizondbCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#update HorizondbCluster#update}
  */
  readonly update?: string;
}

export function horizondbClusterTimeoutsToTerraform(struct?: HorizondbClusterTimeouts | cdktn.IResolvable): any {
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


export function horizondbClusterTimeoutsToHclTerraform(struct?: HorizondbClusterTimeouts | cdktn.IResolvable): any {
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

export class HorizondbClusterTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HorizondbClusterTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: HorizondbClusterTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster azurerm_horizondb_cluster}
*/
export class HorizondbCluster extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_horizondb_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a HorizondbCluster resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HorizondbCluster to import
  * @param importFromId The id of the existing HorizondbCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HorizondbCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_horizondb_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster azurerm_horizondb_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HorizondbClusterConfig
  */
  public constructor(scope: Construct, id: string, config: HorizondbClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_horizondb_cluster',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '5.15.0',
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
    this._administratorLogin = config.administratorLogin;
    this._administratorPassword = config.administratorPassword;
    this._administratorPasswordWo = config.administratorPasswordWo;
    this._administratorPasswordWoVersion = config.administratorPasswordWoVersion;
    this._backupRetentionInDays = config.backupRetentionInDays;
    this._geoRedundantBackupEnabled = config.geoRedundantBackupEnabled;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._postgresqlVersion = config.postgresqlVersion;
    this._publicNetworkAccess = config.publicNetworkAccess;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._identity.internalValue = config.identity;
    this._pointInTimeRestore.internalValue = config.pointInTimeRestore;
    this._readWritePool.internalValue = config.readWritePool;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administrator_login - computed: false, optional: false, required: true
  private _administratorLogin?: string; 
  public get administratorLogin() {
    return this.getStringAttribute('administrator_login');
  }
  public set administratorLogin(value: string) {
    this._administratorLogin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorLoginInput() {
    return this._administratorLogin;
  }

  // administrator_password - computed: false, optional: true, required: false
  private _administratorPassword?: string; 
  public get administratorPassword() {
    return this.getStringAttribute('administrator_password');
  }
  public set administratorPassword(value: string) {
    this._administratorPassword = value;
  }
  public resetAdministratorPassword() {
    this._administratorPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorPasswordInput() {
    return this._administratorPassword;
  }

  // administrator_password_wo - computed: false, optional: true, required: false
  private _administratorPasswordWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get administratorPasswordWo() {
    return this.getStringAttribute('administrator_password_wo');
  }
  public set administratorPasswordWo(value: string) {
    this._administratorPasswordWo = value;
  }
  public resetAdministratorPasswordWo() {
    this._administratorPasswordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorPasswordWoInput() {
    return this._administratorPasswordWo;
  }

  // administrator_password_wo_version - computed: false, optional: true, required: false
  private _administratorPasswordWoVersion?: number; 
  public get administratorPasswordWoVersion() {
    return this.getNumberAttribute('administrator_password_wo_version');
  }
  public set administratorPasswordWoVersion(value: number) {
    this._administratorPasswordWoVersion = value;
  }
  public resetAdministratorPasswordWoVersion() {
    this._administratorPasswordWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorPasswordWoVersionInput() {
    return this._administratorPasswordWoVersion;
  }

  // backup_retention_in_days - computed: false, optional: true, required: false
  private _backupRetentionInDays?: number; 
  public get backupRetentionInDays() {
    return this.getNumberAttribute('backup_retention_in_days');
  }
  public set backupRetentionInDays(value: number) {
    this._backupRetentionInDays = value;
  }
  public resetBackupRetentionInDays() {
    this._backupRetentionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionInDaysInput() {
    return this._backupRetentionInDays;
  }

  // geo_redundant_backup_enabled - computed: false, optional: true, required: false
  private _geoRedundantBackupEnabled?: boolean | cdktn.IResolvable; 
  public get geoRedundantBackupEnabled() {
    return this.getBooleanAttribute('geo_redundant_backup_enabled');
  }
  public set geoRedundantBackupEnabled(value: boolean | cdktn.IResolvable) {
    this._geoRedundantBackupEnabled = value;
  }
  public resetGeoRedundantBackupEnabled() {
    this._geoRedundantBackupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoRedundantBackupEnabledInput() {
    return this._geoRedundantBackupEnabled;
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

  // postgresql_version - computed: true, optional: true, required: false
  private _postgresqlVersion?: string; 
  public get postgresqlVersion() {
    return this.getStringAttribute('postgresql_version');
  }
  public set postgresqlVersion(value: string) {
    this._postgresqlVersion = value;
  }
  public resetPostgresqlVersion() {
    this._postgresqlVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlVersionInput() {
    return this._postgresqlVersion;
  }

  // public_network_access - computed: false, optional: true, required: false
  private _publicNetworkAccess?: string; 
  public get publicNetworkAccess() {
    return this.getStringAttribute('public_network_access');
  }
  public set publicNetworkAccess(value: string) {
    this._publicNetworkAccess = value;
  }
  public resetPublicNetworkAccess() {
    this._publicNetworkAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessInput() {
    return this._publicNetworkAccess;
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

  // identity - computed: false, optional: true, required: false
  private _identity = new HorizondbClusterIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: HorizondbClusterIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // point_in_time_restore - computed: false, optional: true, required: false
  private _pointInTimeRestore = new HorizondbClusterPointInTimeRestoreOutputReference(this, "point_in_time_restore");
  public get pointInTimeRestore() {
    return this._pointInTimeRestore;
  }
  public putPointInTimeRestore(value: HorizondbClusterPointInTimeRestore) {
    this._pointInTimeRestore.internalValue = value;
  }
  public resetPointInTimeRestore() {
    this._pointInTimeRestore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInTimeRestoreInput() {
    return this._pointInTimeRestore.internalValue;
  }

  // read_write_pool - computed: false, optional: false, required: true
  private _readWritePool = new HorizondbClusterReadWritePoolOutputReference(this, "read_write_pool");
  public get readWritePool() {
    return this._readWritePool;
  }
  public putReadWritePool(value: HorizondbClusterReadWritePool) {
    this._readWritePool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readWritePoolInput() {
    return this._readWritePool.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new HorizondbClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: HorizondbClusterTimeouts) {
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
      administrator_login: cdktn.stringToTerraform(this._administratorLogin),
      administrator_password: cdktn.stringToTerraform(this._administratorPassword),
      administrator_password_wo: this.markWriteOnlyAttribute(cdktn.stringToTerraform(this._administratorPasswordWo)),
      administrator_password_wo_version: cdktn.numberToTerraform(this._administratorPasswordWoVersion),
      backup_retention_in_days: cdktn.numberToTerraform(this._backupRetentionInDays),
      geo_redundant_backup_enabled: cdktn.booleanToTerraform(this._geoRedundantBackupEnabled),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      postgresql_version: cdktn.stringToTerraform(this._postgresqlVersion),
      public_network_access: cdktn.stringToTerraform(this._publicNetworkAccess),
      resource_group_name: cdktn.stringToTerraform(this._resourceGroupName),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      identity: horizondbClusterIdentityToTerraform(this._identity.internalValue),
      point_in_time_restore: horizondbClusterPointInTimeRestoreToTerraform(this._pointInTimeRestore.internalValue),
      read_write_pool: horizondbClusterReadWritePoolToTerraform(this._readWritePool.internalValue),
      timeouts: horizondbClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      administrator_login: {
        value: cdktn.stringToHclTerraform(this._administratorLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      administrator_password: {
        value: cdktn.stringToHclTerraform(this._administratorPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      administrator_password_wo: {
        value: this.markWriteOnlyAttribute(cdktn.stringToHclTerraform(this._administratorPasswordWo)),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      administrator_password_wo_version: {
        value: cdktn.numberToHclTerraform(this._administratorPasswordWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_retention_in_days: {
        value: cdktn.numberToHclTerraform(this._backupRetentionInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      geo_redundant_backup_enabled: {
        value: cdktn.booleanToHclTerraform(this._geoRedundantBackupEnabled),
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
      postgresql_version: {
        value: cdktn.stringToHclTerraform(this._postgresqlVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_network_access: {
        value: cdktn.stringToHclTerraform(this._publicNetworkAccess),
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
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      identity: {
        value: horizondbClusterIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HorizondbClusterIdentityList",
      },
      point_in_time_restore: {
        value: horizondbClusterPointInTimeRestoreToHclTerraform(this._pointInTimeRestore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HorizondbClusterPointInTimeRestoreList",
      },
      read_write_pool: {
        value: horizondbClusterReadWritePoolToHclTerraform(this._readWritePool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HorizondbClusterReadWritePoolList",
      },
      timeouts: {
        value: horizondbClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HorizondbClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
