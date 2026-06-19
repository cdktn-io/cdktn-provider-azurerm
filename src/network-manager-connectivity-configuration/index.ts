/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/network_manager_connectivity_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworkManagerConnectivityConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/network_manager_connectivity_configuration#connected_group_address_overlap_enabled NetworkManagerConnectivityConfiguration#connected_group_address_overlap_enabled}
  */
  readonly connectedGroupAddressOverlapEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/network_manager_connectivity_configuration#connected_group_private_endpoints_scale NetworkManagerConnectivityConfiguration#connected_group_private_endpoints_scale}
  */
  readonly connectedGroupPrivateEndpointsScale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/network_manager_connectivity_configuration#connectivity_topology NetworkManagerConnectivityConfiguration#connectivity_topology}
  */
  readonly connectivityTopology: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/network_manager_connectivity_configuration#delete_existing_peering_enabled NetworkManagerConnectivityConfiguration#delete_existing_peering_enabled}
  */
  readonly deleteExistingPeeringEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/network_manager_connectivity_configuration#description NetworkManagerConnectivityConfiguration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/network_manager_connectivity_configuration#global_mesh_enabled NetworkManagerConnectivityConfiguration#global_mesh_enabled}
  */
  readonly globalMeshEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/network_manager_connectivity_configuration#id NetworkManagerConnectivityConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/network_manager_connectivity_configuration#name NetworkManagerConnectivityConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/network_manager_connectivity_configuration#network_manager_id NetworkManagerConnectivityConfiguration#network_manager_id}
  */
  readonly networkManagerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/network_manager_connectivity_configuration#peering_enforcement_enabled NetworkManagerConnectivityConfiguration#peering_enforcement_enabled}
  */
  readonly peeringEnforcementEnabled?: boolean | cdktn.IResolvable;
  /**
  * applies_to_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/network_manager_connectivity_configuration#applies_to_group NetworkManagerConnectivityConfiguration#applies_to_group}
  */
  readonly appliesToGroup: NetworkManagerConnectivityConfigurationAppliesToGroup[] | cdktn.IResolvable;
  /**
  * hub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/network_manager_connectivity_configuration#hub NetworkManagerConnectivityConfiguration#hub}
  */
  readonly hub?: NetworkManagerConnectivityConfigurationHub;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/network_manager_connectivity_configuration#timeouts NetworkManagerConnectivityConfiguration#timeouts}
  */
  readonly timeouts?: NetworkManagerConnectivityConfigurationTimeouts;
}
export interface NetworkManagerConnectivityConfigurationAppliesToGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/network_manager_connectivity_configuration#global_mesh_enabled NetworkManagerConnectivityConfiguration#global_mesh_enabled}
  */
  readonly globalMeshEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/network_manager_connectivity_configuration#group_connectivity NetworkManagerConnectivityConfiguration#group_connectivity}
  */
  readonly groupConnectivity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/network_manager_connectivity_configuration#network_group_id NetworkManagerConnectivityConfiguration#network_group_id}
  */
  readonly networkGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/network_manager_connectivity_configuration#use_hub_gateway NetworkManagerConnectivityConfiguration#use_hub_gateway}
  */
  readonly useHubGateway?: boolean | cdktn.IResolvable;
}

export function networkManagerConnectivityConfigurationAppliesToGroupToTerraform(struct?: NetworkManagerConnectivityConfigurationAppliesToGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    global_mesh_enabled: cdktn.booleanToTerraform(struct!.globalMeshEnabled),
    group_connectivity: cdktn.stringToTerraform(struct!.groupConnectivity),
    network_group_id: cdktn.stringToTerraform(struct!.networkGroupId),
    use_hub_gateway: cdktn.booleanToTerraform(struct!.useHubGateway),
  }
}


export function networkManagerConnectivityConfigurationAppliesToGroupToHclTerraform(struct?: NetworkManagerConnectivityConfigurationAppliesToGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    global_mesh_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.globalMeshEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_connectivity: {
      value: cdktn.stringToHclTerraform(struct!.groupConnectivity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_group_id: {
      value: cdktn.stringToHclTerraform(struct!.networkGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_hub_gateway: {
      value: cdktn.booleanToHclTerraform(struct!.useHubGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkManagerConnectivityConfigurationAppliesToGroup | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalMeshEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalMeshEnabled = this._globalMeshEnabled;
    }
    if (this._groupConnectivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupConnectivity = this._groupConnectivity;
    }
    if (this._networkGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkGroupId = this._networkGroupId;
    }
    if (this._useHubGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHubGateway = this._useHubGateway;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkManagerConnectivityConfigurationAppliesToGroup | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._globalMeshEnabled = undefined;
      this._groupConnectivity = undefined;
      this._networkGroupId = undefined;
      this._useHubGateway = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._globalMeshEnabled = value.globalMeshEnabled;
      this._groupConnectivity = value.groupConnectivity;
      this._networkGroupId = value.networkGroupId;
      this._useHubGateway = value.useHubGateway;
    }
  }

  // global_mesh_enabled - computed: false, optional: true, required: false
  private _globalMeshEnabled?: boolean | cdktn.IResolvable; 
  public get globalMeshEnabled() {
    return this.getBooleanAttribute('global_mesh_enabled');
  }
  public set globalMeshEnabled(value: boolean | cdktn.IResolvable) {
    this._globalMeshEnabled = value;
  }
  public resetGlobalMeshEnabled() {
    this._globalMeshEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalMeshEnabledInput() {
    return this._globalMeshEnabled;
  }

  // group_connectivity - computed: false, optional: false, required: true
  private _groupConnectivity?: string; 
  public get groupConnectivity() {
    return this.getStringAttribute('group_connectivity');
  }
  public set groupConnectivity(value: string) {
    this._groupConnectivity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupConnectivityInput() {
    return this._groupConnectivity;
  }

  // network_group_id - computed: false, optional: false, required: true
  private _networkGroupId?: string; 
  public get networkGroupId() {
    return this.getStringAttribute('network_group_id');
  }
  public set networkGroupId(value: string) {
    this._networkGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkGroupIdInput() {
    return this._networkGroupId;
  }

  // use_hub_gateway - computed: false, optional: true, required: false
  private _useHubGateway?: boolean | cdktn.IResolvable; 
  public get useHubGateway() {
    return this.getBooleanAttribute('use_hub_gateway');
  }
  public set useHubGateway(value: boolean | cdktn.IResolvable) {
    this._useHubGateway = value;
  }
  public resetUseHubGateway() {
    this._useHubGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHubGatewayInput() {
    return this._useHubGateway;
  }
}

export class NetworkManagerConnectivityConfigurationAppliesToGroupList extends cdktn.ComplexList {
  public internalValue? : NetworkManagerConnectivityConfigurationAppliesToGroup[] | cdktn.IResolvable

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
  public get(index: number): NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference {
    return new NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkManagerConnectivityConfigurationHub {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/network_manager_connectivity_configuration#resource_id NetworkManagerConnectivityConfiguration#resource_id}
  */
  readonly resourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/network_manager_connectivity_configuration#resource_type NetworkManagerConnectivityConfiguration#resource_type}
  */
  readonly resourceType: string;
}

export function networkManagerConnectivityConfigurationHubToTerraform(struct?: NetworkManagerConnectivityConfigurationHubOutputReference | NetworkManagerConnectivityConfigurationHub): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_id: cdktn.stringToTerraform(struct!.resourceId),
    resource_type: cdktn.stringToTerraform(struct!.resourceType),
  }
}


export function networkManagerConnectivityConfigurationHubToHclTerraform(struct?: NetworkManagerConnectivityConfigurationHubOutputReference | NetworkManagerConnectivityConfigurationHub): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_id: {
      value: cdktn.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktn.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkManagerConnectivityConfigurationHubOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkManagerConnectivityConfigurationHub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkManagerConnectivityConfigurationHub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceId = undefined;
      this._resourceType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceId = value.resourceId;
      this._resourceType = value.resourceType;
    }
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}
export interface NetworkManagerConnectivityConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/network_manager_connectivity_configuration#create NetworkManagerConnectivityConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/network_manager_connectivity_configuration#delete NetworkManagerConnectivityConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/network_manager_connectivity_configuration#read NetworkManagerConnectivityConfiguration#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/network_manager_connectivity_configuration#update NetworkManagerConnectivityConfiguration#update}
  */
  readonly update?: string;
}

export function networkManagerConnectivityConfigurationTimeoutsToTerraform(struct?: NetworkManagerConnectivityConfigurationTimeouts | cdktn.IResolvable): any {
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


export function networkManagerConnectivityConfigurationTimeoutsToHclTerraform(struct?: NetworkManagerConnectivityConfigurationTimeouts | cdktn.IResolvable): any {
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

export class NetworkManagerConnectivityConfigurationTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkManagerConnectivityConfigurationTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NetworkManagerConnectivityConfigurationTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/network_manager_connectivity_configuration azurerm_network_manager_connectivity_configuration}
*/
export class NetworkManagerConnectivityConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_network_manager_connectivity_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworkManagerConnectivityConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkManagerConnectivityConfiguration to import
  * @param importFromId The id of the existing NetworkManagerConnectivityConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/network_manager_connectivity_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkManagerConnectivityConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_network_manager_connectivity_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/network_manager_connectivity_configuration azurerm_network_manager_connectivity_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkManagerConnectivityConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkManagerConnectivityConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_network_manager_connectivity_configuration',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.78.0',
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
    this._connectedGroupAddressOverlapEnabled = config.connectedGroupAddressOverlapEnabled;
    this._connectedGroupPrivateEndpointsScale = config.connectedGroupPrivateEndpointsScale;
    this._connectivityTopology = config.connectivityTopology;
    this._deleteExistingPeeringEnabled = config.deleteExistingPeeringEnabled;
    this._description = config.description;
    this._globalMeshEnabled = config.globalMeshEnabled;
    this._id = config.id;
    this._name = config.name;
    this._networkManagerId = config.networkManagerId;
    this._peeringEnforcementEnabled = config.peeringEnforcementEnabled;
    this._appliesToGroup.internalValue = config.appliesToGroup;
    this._hub.internalValue = config.hub;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connected_group_address_overlap_enabled - computed: false, optional: true, required: false
  private _connectedGroupAddressOverlapEnabled?: boolean | cdktn.IResolvable; 
  public get connectedGroupAddressOverlapEnabled() {
    return this.getBooleanAttribute('connected_group_address_overlap_enabled');
  }
  public set connectedGroupAddressOverlapEnabled(value: boolean | cdktn.IResolvable) {
    this._connectedGroupAddressOverlapEnabled = value;
  }
  public resetConnectedGroupAddressOverlapEnabled() {
    this._connectedGroupAddressOverlapEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedGroupAddressOverlapEnabledInput() {
    return this._connectedGroupAddressOverlapEnabled;
  }

  // connected_group_private_endpoints_scale - computed: false, optional: true, required: false
  private _connectedGroupPrivateEndpointsScale?: string; 
  public get connectedGroupPrivateEndpointsScale() {
    return this.getStringAttribute('connected_group_private_endpoints_scale');
  }
  public set connectedGroupPrivateEndpointsScale(value: string) {
    this._connectedGroupPrivateEndpointsScale = value;
  }
  public resetConnectedGroupPrivateEndpointsScale() {
    this._connectedGroupPrivateEndpointsScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedGroupPrivateEndpointsScaleInput() {
    return this._connectedGroupPrivateEndpointsScale;
  }

  // connectivity_topology - computed: false, optional: false, required: true
  private _connectivityTopology?: string; 
  public get connectivityTopology() {
    return this.getStringAttribute('connectivity_topology');
  }
  public set connectivityTopology(value: string) {
    this._connectivityTopology = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityTopologyInput() {
    return this._connectivityTopology;
  }

  // delete_existing_peering_enabled - computed: false, optional: true, required: false
  private _deleteExistingPeeringEnabled?: boolean | cdktn.IResolvable; 
  public get deleteExistingPeeringEnabled() {
    return this.getBooleanAttribute('delete_existing_peering_enabled');
  }
  public set deleteExistingPeeringEnabled(value: boolean | cdktn.IResolvable) {
    this._deleteExistingPeeringEnabled = value;
  }
  public resetDeleteExistingPeeringEnabled() {
    this._deleteExistingPeeringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteExistingPeeringEnabledInput() {
    return this._deleteExistingPeeringEnabled;
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

  // global_mesh_enabled - computed: false, optional: true, required: false
  private _globalMeshEnabled?: boolean | cdktn.IResolvable; 
  public get globalMeshEnabled() {
    return this.getBooleanAttribute('global_mesh_enabled');
  }
  public set globalMeshEnabled(value: boolean | cdktn.IResolvable) {
    this._globalMeshEnabled = value;
  }
  public resetGlobalMeshEnabled() {
    this._globalMeshEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalMeshEnabledInput() {
    return this._globalMeshEnabled;
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

  // network_manager_id - computed: false, optional: false, required: true
  private _networkManagerId?: string; 
  public get networkManagerId() {
    return this.getStringAttribute('network_manager_id');
  }
  public set networkManagerId(value: string) {
    this._networkManagerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkManagerIdInput() {
    return this._networkManagerId;
  }

  // peering_enforcement_enabled - computed: false, optional: true, required: false
  private _peeringEnforcementEnabled?: boolean | cdktn.IResolvable; 
  public get peeringEnforcementEnabled() {
    return this.getBooleanAttribute('peering_enforcement_enabled');
  }
  public set peeringEnforcementEnabled(value: boolean | cdktn.IResolvable) {
    this._peeringEnforcementEnabled = value;
  }
  public resetPeeringEnforcementEnabled() {
    this._peeringEnforcementEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringEnforcementEnabledInput() {
    return this._peeringEnforcementEnabled;
  }

  // applies_to_group - computed: false, optional: false, required: true
  private _appliesToGroup = new NetworkManagerConnectivityConfigurationAppliesToGroupList(this, "applies_to_group", false);
  public get appliesToGroup() {
    return this._appliesToGroup;
  }
  public putAppliesToGroup(value: NetworkManagerConnectivityConfigurationAppliesToGroup[] | cdktn.IResolvable) {
    this._appliesToGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appliesToGroupInput() {
    return this._appliesToGroup.internalValue;
  }

  // hub - computed: false, optional: true, required: false
  private _hub = new NetworkManagerConnectivityConfigurationHubOutputReference(this, "hub");
  public get hub() {
    return this._hub;
  }
  public putHub(value: NetworkManagerConnectivityConfigurationHub) {
    this._hub.internalValue = value;
  }
  public resetHub() {
    this._hub.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubInput() {
    return this._hub.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkManagerConnectivityConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkManagerConnectivityConfigurationTimeouts) {
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
      connected_group_address_overlap_enabled: cdktn.booleanToTerraform(this._connectedGroupAddressOverlapEnabled),
      connected_group_private_endpoints_scale: cdktn.stringToTerraform(this._connectedGroupPrivateEndpointsScale),
      connectivity_topology: cdktn.stringToTerraform(this._connectivityTopology),
      delete_existing_peering_enabled: cdktn.booleanToTerraform(this._deleteExistingPeeringEnabled),
      description: cdktn.stringToTerraform(this._description),
      global_mesh_enabled: cdktn.booleanToTerraform(this._globalMeshEnabled),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      network_manager_id: cdktn.stringToTerraform(this._networkManagerId),
      peering_enforcement_enabled: cdktn.booleanToTerraform(this._peeringEnforcementEnabled),
      applies_to_group: cdktn.listMapper(networkManagerConnectivityConfigurationAppliesToGroupToTerraform, true)(this._appliesToGroup.internalValue),
      hub: networkManagerConnectivityConfigurationHubToTerraform(this._hub.internalValue),
      timeouts: networkManagerConnectivityConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connected_group_address_overlap_enabled: {
        value: cdktn.booleanToHclTerraform(this._connectedGroupAddressOverlapEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      connected_group_private_endpoints_scale: {
        value: cdktn.stringToHclTerraform(this._connectedGroupPrivateEndpointsScale),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connectivity_topology: {
        value: cdktn.stringToHclTerraform(this._connectivityTopology),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_existing_peering_enabled: {
        value: cdktn.booleanToHclTerraform(this._deleteExistingPeeringEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_mesh_enabled: {
        value: cdktn.booleanToHclTerraform(this._globalMeshEnabled),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_manager_id: {
        value: cdktn.stringToHclTerraform(this._networkManagerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peering_enforcement_enabled: {
        value: cdktn.booleanToHclTerraform(this._peeringEnforcementEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      applies_to_group: {
        value: cdktn.listMapperHcl(networkManagerConnectivityConfigurationAppliesToGroupToHclTerraform, true)(this._appliesToGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkManagerConnectivityConfigurationAppliesToGroupList",
      },
      hub: {
        value: networkManagerConnectivityConfigurationHubToHclTerraform(this._hub.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkManagerConnectivityConfigurationHubList",
      },
      timeouts: {
        value: networkManagerConnectivityConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkManagerConnectivityConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
