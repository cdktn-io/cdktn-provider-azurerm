/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/databricks_virtual_network_peering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DatabricksVirtualNetworkPeeringConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/databricks_virtual_network_peering#allow_forwarded_traffic DatabricksVirtualNetworkPeering#allow_forwarded_traffic}
  */
  readonly allowForwardedTraffic?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/databricks_virtual_network_peering#allow_gateway_transit DatabricksVirtualNetworkPeering#allow_gateway_transit}
  */
  readonly allowGatewayTransit?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/databricks_virtual_network_peering#allow_virtual_network_access DatabricksVirtualNetworkPeering#allow_virtual_network_access}
  */
  readonly allowVirtualNetworkAccess?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/databricks_virtual_network_peering#id DatabricksVirtualNetworkPeering#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/databricks_virtual_network_peering#name DatabricksVirtualNetworkPeering#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/databricks_virtual_network_peering#remote_address_space_prefixes DatabricksVirtualNetworkPeering#remote_address_space_prefixes}
  */
  readonly remoteAddressSpacePrefixes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/databricks_virtual_network_peering#remote_virtual_network_id DatabricksVirtualNetworkPeering#remote_virtual_network_id}
  */
  readonly remoteVirtualNetworkId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/databricks_virtual_network_peering#resource_group_name DatabricksVirtualNetworkPeering#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/databricks_virtual_network_peering#use_remote_gateways DatabricksVirtualNetworkPeering#use_remote_gateways}
  */
  readonly useRemoteGateways?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/databricks_virtual_network_peering#workspace_id DatabricksVirtualNetworkPeering#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/databricks_virtual_network_peering#timeouts DatabricksVirtualNetworkPeering#timeouts}
  */
  readonly timeouts?: DatabricksVirtualNetworkPeeringTimeouts;
}
export interface DatabricksVirtualNetworkPeeringTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/databricks_virtual_network_peering#create DatabricksVirtualNetworkPeering#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/databricks_virtual_network_peering#delete DatabricksVirtualNetworkPeering#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/databricks_virtual_network_peering#read DatabricksVirtualNetworkPeering#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/databricks_virtual_network_peering#update DatabricksVirtualNetworkPeering#update}
  */
  readonly update?: string;
}

export function databricksVirtualNetworkPeeringTimeoutsToTerraform(struct?: DatabricksVirtualNetworkPeeringTimeouts | cdktn.IResolvable): any {
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


export function databricksVirtualNetworkPeeringTimeoutsToHclTerraform(struct?: DatabricksVirtualNetworkPeeringTimeouts | cdktn.IResolvable): any {
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

export class DatabricksVirtualNetworkPeeringTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabricksVirtualNetworkPeeringTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DatabricksVirtualNetworkPeeringTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/databricks_virtual_network_peering azurerm_databricks_virtual_network_peering}
*/
export class DatabricksVirtualNetworkPeering extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_databricks_virtual_network_peering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DatabricksVirtualNetworkPeering resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabricksVirtualNetworkPeering to import
  * @param importFromId The id of the existing DatabricksVirtualNetworkPeering that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/databricks_virtual_network_peering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabricksVirtualNetworkPeering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_databricks_virtual_network_peering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/databricks_virtual_network_peering azurerm_databricks_virtual_network_peering} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabricksVirtualNetworkPeeringConfig
  */
  public constructor(scope: Construct, id: string, config: DatabricksVirtualNetworkPeeringConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_databricks_virtual_network_peering',
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
    this._allowForwardedTraffic = config.allowForwardedTraffic;
    this._allowGatewayTransit = config.allowGatewayTransit;
    this._allowVirtualNetworkAccess = config.allowVirtualNetworkAccess;
    this._id = config.id;
    this._name = config.name;
    this._remoteAddressSpacePrefixes = config.remoteAddressSpacePrefixes;
    this._remoteVirtualNetworkId = config.remoteVirtualNetworkId;
    this._resourceGroupName = config.resourceGroupName;
    this._useRemoteGateways = config.useRemoteGateways;
    this._workspaceId = config.workspaceId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_space_prefixes - computed: true, optional: false, required: false
  public get addressSpacePrefixes() {
    return this.getListAttribute('address_space_prefixes');
  }

  // allow_forwarded_traffic - computed: false, optional: true, required: false
  private _allowForwardedTraffic?: boolean | cdktn.IResolvable; 
  public get allowForwardedTraffic() {
    return this.getBooleanAttribute('allow_forwarded_traffic');
  }
  public set allowForwardedTraffic(value: boolean | cdktn.IResolvable) {
    this._allowForwardedTraffic = value;
  }
  public resetAllowForwardedTraffic() {
    this._allowForwardedTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowForwardedTrafficInput() {
    return this._allowForwardedTraffic;
  }

  // allow_gateway_transit - computed: false, optional: true, required: false
  private _allowGatewayTransit?: boolean | cdktn.IResolvable; 
  public get allowGatewayTransit() {
    return this.getBooleanAttribute('allow_gateway_transit');
  }
  public set allowGatewayTransit(value: boolean | cdktn.IResolvable) {
    this._allowGatewayTransit = value;
  }
  public resetAllowGatewayTransit() {
    this._allowGatewayTransit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowGatewayTransitInput() {
    return this._allowGatewayTransit;
  }

  // allow_virtual_network_access - computed: false, optional: true, required: false
  private _allowVirtualNetworkAccess?: boolean | cdktn.IResolvable; 
  public get allowVirtualNetworkAccess() {
    return this.getBooleanAttribute('allow_virtual_network_access');
  }
  public set allowVirtualNetworkAccess(value: boolean | cdktn.IResolvable) {
    this._allowVirtualNetworkAccess = value;
  }
  public resetAllowVirtualNetworkAccess() {
    this._allowVirtualNetworkAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowVirtualNetworkAccessInput() {
    return this._allowVirtualNetworkAccess;
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

  // remote_address_space_prefixes - computed: false, optional: false, required: true
  private _remoteAddressSpacePrefixes?: string[]; 
  public get remoteAddressSpacePrefixes() {
    return this.getListAttribute('remote_address_space_prefixes');
  }
  public set remoteAddressSpacePrefixes(value: string[]) {
    this._remoteAddressSpacePrefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAddressSpacePrefixesInput() {
    return this._remoteAddressSpacePrefixes;
  }

  // remote_virtual_network_id - computed: false, optional: false, required: true
  private _remoteVirtualNetworkId?: string; 
  public get remoteVirtualNetworkId() {
    return this.getStringAttribute('remote_virtual_network_id');
  }
  public set remoteVirtualNetworkId(value: string) {
    this._remoteVirtualNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteVirtualNetworkIdInput() {
    return this._remoteVirtualNetworkId;
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

  // use_remote_gateways - computed: false, optional: true, required: false
  private _useRemoteGateways?: boolean | cdktn.IResolvable; 
  public get useRemoteGateways() {
    return this.getBooleanAttribute('use_remote_gateways');
  }
  public set useRemoteGateways(value: boolean | cdktn.IResolvable) {
    this._useRemoteGateways = value;
  }
  public resetUseRemoteGateways() {
    this._useRemoteGateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRemoteGatewaysInput() {
    return this._useRemoteGateways;
  }

  // virtual_network_id - computed: true, optional: false, required: false
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabricksVirtualNetworkPeeringTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabricksVirtualNetworkPeeringTimeouts) {
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
      allow_forwarded_traffic: cdktn.booleanToTerraform(this._allowForwardedTraffic),
      allow_gateway_transit: cdktn.booleanToTerraform(this._allowGatewayTransit),
      allow_virtual_network_access: cdktn.booleanToTerraform(this._allowVirtualNetworkAccess),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      remote_address_space_prefixes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._remoteAddressSpacePrefixes),
      remote_virtual_network_id: cdktn.stringToTerraform(this._remoteVirtualNetworkId),
      resource_group_name: cdktn.stringToTerraform(this._resourceGroupName),
      use_remote_gateways: cdktn.booleanToTerraform(this._useRemoteGateways),
      workspace_id: cdktn.stringToTerraform(this._workspaceId),
      timeouts: databricksVirtualNetworkPeeringTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_forwarded_traffic: {
        value: cdktn.booleanToHclTerraform(this._allowForwardedTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_gateway_transit: {
        value: cdktn.booleanToHclTerraform(this._allowGatewayTransit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_virtual_network_access: {
        value: cdktn.booleanToHclTerraform(this._allowVirtualNetworkAccess),
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
      remote_address_space_prefixes: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._remoteAddressSpacePrefixes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      remote_virtual_network_id: {
        value: cdktn.stringToHclTerraform(this._remoteVirtualNetworkId),
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
      use_remote_gateways: {
        value: cdktn.booleanToHclTerraform(this._useRemoteGateways),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      workspace_id: {
        value: cdktn.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: databricksVirtualNetworkPeeringTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabricksVirtualNetworkPeeringTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
