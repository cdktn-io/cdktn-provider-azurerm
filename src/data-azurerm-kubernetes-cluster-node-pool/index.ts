/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/kubernetes_cluster_node_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAzurermKubernetesClusterNodePoolConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/kubernetes_cluster_node_pool#id DataAzurermKubernetesClusterNodePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/kubernetes_cluster_node_pool#kubernetes_cluster_name DataAzurermKubernetesClusterNodePool#kubernetes_cluster_name}
  */
  readonly kubernetesClusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/kubernetes_cluster_node_pool#name DataAzurermKubernetesClusterNodePool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/kubernetes_cluster_node_pool#resource_group_name DataAzurermKubernetesClusterNodePool#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/kubernetes_cluster_node_pool#timeouts DataAzurermKubernetesClusterNodePool#timeouts}
  */
  readonly timeouts?: DataAzurermKubernetesClusterNodePoolTimeouts;
}
export interface DataAzurermKubernetesClusterNodePoolUpgradeSettings {
}

export function dataAzurermKubernetesClusterNodePoolUpgradeSettingsToTerraform(struct?: DataAzurermKubernetesClusterNodePoolUpgradeSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermKubernetesClusterNodePoolUpgradeSettingsToHclTerraform(struct?: DataAzurermKubernetesClusterNodePoolUpgradeSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAzurermKubernetesClusterNodePoolUpgradeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKubernetesClusterNodePoolUpgradeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // drain_timeout_in_minutes - computed: true, optional: false, required: false
  public get drainTimeoutInMinutes() {
    return this.getNumberAttribute('drain_timeout_in_minutes');
  }

  // max_surge - computed: true, optional: false, required: false
  public get maxSurge() {
    return this.getStringAttribute('max_surge');
  }

  // max_unavailable - computed: true, optional: false, required: false
  public get maxUnavailable() {
    return this.getStringAttribute('max_unavailable');
  }

  // node_soak_duration_in_minutes - computed: true, optional: false, required: false
  public get nodeSoakDurationInMinutes() {
    return this.getNumberAttribute('node_soak_duration_in_minutes');
  }

  // undrainable_node_behavior - computed: true, optional: false, required: false
  public get undrainableNodeBehavior() {
    return this.getStringAttribute('undrainable_node_behavior');
  }
}

export class DataAzurermKubernetesClusterNodePoolUpgradeSettingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference {
    return new DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKubernetesClusterNodePoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/kubernetes_cluster_node_pool#read DataAzurermKubernetesClusterNodePool#read}
  */
  readonly read?: string;
}

export function dataAzurermKubernetesClusterNodePoolTimeoutsToTerraform(struct?: DataAzurermKubernetesClusterNodePoolTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    read: cdktn.stringToTerraform(struct!.read),
  }
}


export function dataAzurermKubernetesClusterNodePoolTimeoutsToHclTerraform(struct?: DataAzurermKubernetesClusterNodePoolTimeouts | cdktn.IResolvable): any {
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

export class DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermKubernetesClusterNodePoolTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataAzurermKubernetesClusterNodePoolTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/kubernetes_cluster_node_pool azurerm_kubernetes_cluster_node_pool}
*/
export class DataAzurermKubernetesClusterNodePool extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_kubernetes_cluster_node_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAzurermKubernetesClusterNodePool resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermKubernetesClusterNodePool to import
  * @param importFromId The id of the existing DataAzurermKubernetesClusterNodePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/kubernetes_cluster_node_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermKubernetesClusterNodePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_kubernetes_cluster_node_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/kubernetes_cluster_node_pool azurerm_kubernetes_cluster_node_pool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermKubernetesClusterNodePoolConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermKubernetesClusterNodePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kubernetes_cluster_node_pool',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.80.0',
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
    this._id = config.id;
    this._kubernetesClusterName = config.kubernetesClusterName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_scaling_enabled - computed: true, optional: false, required: false
  public get autoScalingEnabled() {
    return this.getBooleanAttribute('auto_scaling_enabled');
  }

  // eviction_policy - computed: true, optional: false, required: false
  public get evictionPolicy() {
    return this.getStringAttribute('eviction_policy');
  }

  // gpu_driver - computed: true, optional: false, required: false
  public get gpuDriver() {
    return this.getStringAttribute('gpu_driver');
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

  // kubernetes_cluster_name - computed: false, optional: false, required: true
  private _kubernetesClusterName?: string; 
  public get kubernetesClusterName() {
    return this.getStringAttribute('kubernetes_cluster_name');
  }
  public set kubernetesClusterName(value: string) {
    this._kubernetesClusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesClusterNameInput() {
    return this._kubernetesClusterName;
  }

  // max_count - computed: true, optional: false, required: false
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }

  // max_pods - computed: true, optional: false, required: false
  public get maxPods() {
    return this.getNumberAttribute('max_pods');
  }

  // min_count - computed: true, optional: false, required: false
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
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

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // node_image_version - computed: true, optional: false, required: false
  public get nodeImageVersion() {
    return this.getStringAttribute('node_image_version');
  }

  // node_labels - computed: true, optional: false, required: false
  private _nodeLabels = new cdktn.StringMap(this, "node_labels");
  public get nodeLabels() {
    return this._nodeLabels;
  }

  // node_public_ip_enabled - computed: true, optional: false, required: false
  public get nodePublicIpEnabled() {
    return this.getBooleanAttribute('node_public_ip_enabled');
  }

  // node_public_ip_prefix_id - computed: true, optional: false, required: false
  public get nodePublicIpPrefixId() {
    return this.getStringAttribute('node_public_ip_prefix_id');
  }

  // node_taints - computed: true, optional: false, required: false
  public get nodeTaints() {
    return this.getListAttribute('node_taints');
  }

  // orchestrator_version - computed: true, optional: false, required: false
  public get orchestratorVersion() {
    return this.getStringAttribute('orchestrator_version');
  }

  // os_disk_size_gb - computed: true, optional: false, required: false
  public get osDiskSizeGb() {
    return this.getNumberAttribute('os_disk_size_gb');
  }

  // os_disk_type - computed: true, optional: false, required: false
  public get osDiskType() {
    return this.getStringAttribute('os_disk_type');
  }

  // os_type - computed: true, optional: false, required: false
  public get osType() {
    return this.getStringAttribute('os_type');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }

  // proximity_placement_group_id - computed: true, optional: false, required: false
  public get proximityPlacementGroupId() {
    return this.getStringAttribute('proximity_placement_group_id');
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

  // spot_max_price - computed: true, optional: false, required: false
  public get spotMaxPrice() {
    return this.getNumberAttribute('spot_max_price');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // upgrade_settings - computed: true, optional: false, required: false
  private _upgradeSettings = new DataAzurermKubernetesClusterNodePoolUpgradeSettingsList(this, "upgrade_settings", false);
  public get upgradeSettings() {
    return this._upgradeSettings;
  }

  // vm_size - computed: true, optional: false, required: false
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }

  // vnet_subnet_id - computed: true, optional: false, required: false
  public get vnetSubnetId() {
    return this.getStringAttribute('vnet_subnet_id');
  }

  // zones - computed: true, optional: false, required: false
  public get zones() {
    return this.getListAttribute('zones');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermKubernetesClusterNodePoolTimeouts) {
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
      id: cdktn.stringToTerraform(this._id),
      kubernetes_cluster_name: cdktn.stringToTerraform(this._kubernetesClusterName),
      name: cdktn.stringToTerraform(this._name),
      resource_group_name: cdktn.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermKubernetesClusterNodePoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubernetes_cluster_name: {
        value: cdktn.stringToHclTerraform(this._kubernetesClusterName),
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
      resource_group_name: {
        value: cdktn.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataAzurermKubernetesClusterNodePoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermKubernetesClusterNodePoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
