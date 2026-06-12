/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/traffic_manager_nested_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface TrafficManagerNestedEndpointConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/traffic_manager_nested_endpoint#enabled TrafficManagerNestedEndpoint#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/traffic_manager_nested_endpoint#endpoint_location TrafficManagerNestedEndpoint#endpoint_location}
  */
  readonly endpointLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/traffic_manager_nested_endpoint#geo_mappings TrafficManagerNestedEndpoint#geo_mappings}
  */
  readonly geoMappings?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/traffic_manager_nested_endpoint#id TrafficManagerNestedEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/traffic_manager_nested_endpoint#minimum_child_endpoints TrafficManagerNestedEndpoint#minimum_child_endpoints}
  */
  readonly minimumChildEndpoints: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/traffic_manager_nested_endpoint#minimum_required_child_endpoints_ipv4 TrafficManagerNestedEndpoint#minimum_required_child_endpoints_ipv4}
  */
  readonly minimumRequiredChildEndpointsIpv4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/traffic_manager_nested_endpoint#minimum_required_child_endpoints_ipv6 TrafficManagerNestedEndpoint#minimum_required_child_endpoints_ipv6}
  */
  readonly minimumRequiredChildEndpointsIpv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/traffic_manager_nested_endpoint#name TrafficManagerNestedEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/traffic_manager_nested_endpoint#priority TrafficManagerNestedEndpoint#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/traffic_manager_nested_endpoint#profile_id TrafficManagerNestedEndpoint#profile_id}
  */
  readonly profileId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/traffic_manager_nested_endpoint#target_resource_id TrafficManagerNestedEndpoint#target_resource_id}
  */
  readonly targetResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/traffic_manager_nested_endpoint#weight TrafficManagerNestedEndpoint#weight}
  */
  readonly weight?: number;
  /**
  * custom_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/traffic_manager_nested_endpoint#custom_header TrafficManagerNestedEndpoint#custom_header}
  */
  readonly customHeader?: TrafficManagerNestedEndpointCustomHeader[] | cdktn.IResolvable;
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/traffic_manager_nested_endpoint#subnet TrafficManagerNestedEndpoint#subnet}
  */
  readonly subnet?: TrafficManagerNestedEndpointSubnet[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/traffic_manager_nested_endpoint#timeouts TrafficManagerNestedEndpoint#timeouts}
  */
  readonly timeouts?: TrafficManagerNestedEndpointTimeouts;
}
export interface TrafficManagerNestedEndpointCustomHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/traffic_manager_nested_endpoint#name TrafficManagerNestedEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/traffic_manager_nested_endpoint#value TrafficManagerNestedEndpoint#value}
  */
  readonly value: string;
}

export function trafficManagerNestedEndpointCustomHeaderToTerraform(struct?: TrafficManagerNestedEndpointCustomHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function trafficManagerNestedEndpointCustomHeaderToHclTerraform(struct?: TrafficManagerNestedEndpointCustomHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrafficManagerNestedEndpointCustomHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrafficManagerNestedEndpointCustomHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficManagerNestedEndpointCustomHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TrafficManagerNestedEndpointCustomHeaderList extends cdktn.ComplexList {
  public internalValue? : TrafficManagerNestedEndpointCustomHeader[] | cdktn.IResolvable

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
  public get(index: number): TrafficManagerNestedEndpointCustomHeaderOutputReference {
    return new TrafficManagerNestedEndpointCustomHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrafficManagerNestedEndpointSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/traffic_manager_nested_endpoint#first TrafficManagerNestedEndpoint#first}
  */
  readonly first: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/traffic_manager_nested_endpoint#last TrafficManagerNestedEndpoint#last}
  */
  readonly last?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/traffic_manager_nested_endpoint#scope TrafficManagerNestedEndpoint#scope}
  */
  readonly scope?: number;
}

export function trafficManagerNestedEndpointSubnetToTerraform(struct?: TrafficManagerNestedEndpointSubnet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    first: cdktn.stringToTerraform(struct!.first),
    last: cdktn.stringToTerraform(struct!.last),
    scope: cdktn.numberToTerraform(struct!.scope),
  }
}


export function trafficManagerNestedEndpointSubnetToHclTerraform(struct?: TrafficManagerNestedEndpointSubnet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    first: {
      value: cdktn.stringToHclTerraform(struct!.first),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last: {
      value: cdktn.stringToHclTerraform(struct!.last),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktn.numberToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrafficManagerNestedEndpointSubnetOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrafficManagerNestedEndpointSubnet | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._first !== undefined) {
      hasAnyValues = true;
      internalValueResult.first = this._first;
    }
    if (this._last !== undefined) {
      hasAnyValues = true;
      internalValueResult.last = this._last;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficManagerNestedEndpointSubnet | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._first = undefined;
      this._last = undefined;
      this._scope = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._first = value.first;
      this._last = value.last;
      this._scope = value.scope;
    }
  }

  // first - computed: false, optional: false, required: true
  private _first?: string; 
  public get first() {
    return this.getStringAttribute('first');
  }
  public set first(value: string) {
    this._first = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstInput() {
    return this._first;
  }

  // last - computed: false, optional: true, required: false
  private _last?: string; 
  public get last() {
    return this.getStringAttribute('last');
  }
  public set last(value: string) {
    this._last = value;
  }
  public resetLast() {
    this._last = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastInput() {
    return this._last;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: number; 
  public get scope() {
    return this.getNumberAttribute('scope');
  }
  public set scope(value: number) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}

export class TrafficManagerNestedEndpointSubnetList extends cdktn.ComplexList {
  public internalValue? : TrafficManagerNestedEndpointSubnet[] | cdktn.IResolvable

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
  public get(index: number): TrafficManagerNestedEndpointSubnetOutputReference {
    return new TrafficManagerNestedEndpointSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrafficManagerNestedEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/traffic_manager_nested_endpoint#create TrafficManagerNestedEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/traffic_manager_nested_endpoint#delete TrafficManagerNestedEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/traffic_manager_nested_endpoint#read TrafficManagerNestedEndpoint#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/traffic_manager_nested_endpoint#update TrafficManagerNestedEndpoint#update}
  */
  readonly update?: string;
}

export function trafficManagerNestedEndpointTimeoutsToTerraform(struct?: TrafficManagerNestedEndpointTimeouts | cdktn.IResolvable): any {
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


export function trafficManagerNestedEndpointTimeoutsToHclTerraform(struct?: TrafficManagerNestedEndpointTimeouts | cdktn.IResolvable): any {
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

export class TrafficManagerNestedEndpointTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrafficManagerNestedEndpointTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: TrafficManagerNestedEndpointTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/traffic_manager_nested_endpoint azurerm_traffic_manager_nested_endpoint}
*/
export class TrafficManagerNestedEndpoint extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_traffic_manager_nested_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TrafficManagerNestedEndpoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrafficManagerNestedEndpoint to import
  * @param importFromId The id of the existing TrafficManagerNestedEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/traffic_manager_nested_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrafficManagerNestedEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_traffic_manager_nested_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/traffic_manager_nested_endpoint azurerm_traffic_manager_nested_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrafficManagerNestedEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: TrafficManagerNestedEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_traffic_manager_nested_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.77.0',
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
    this._enabled = config.enabled;
    this._endpointLocation = config.endpointLocation;
    this._geoMappings = config.geoMappings;
    this._id = config.id;
    this._minimumChildEndpoints = config.minimumChildEndpoints;
    this._minimumRequiredChildEndpointsIpv4 = config.minimumRequiredChildEndpointsIpv4;
    this._minimumRequiredChildEndpointsIpv6 = config.minimumRequiredChildEndpointsIpv6;
    this._name = config.name;
    this._priority = config.priority;
    this._profileId = config.profileId;
    this._targetResourceId = config.targetResourceId;
    this._weight = config.weight;
    this._customHeader.internalValue = config.customHeader;
    this._subnet.internalValue = config.subnet;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // endpoint_location - computed: true, optional: true, required: false
  private _endpointLocation?: string; 
  public get endpointLocation() {
    return this.getStringAttribute('endpoint_location');
  }
  public set endpointLocation(value: string) {
    this._endpointLocation = value;
  }
  public resetEndpointLocation() {
    this._endpointLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointLocationInput() {
    return this._endpointLocation;
  }

  // geo_mappings - computed: false, optional: true, required: false
  private _geoMappings?: string[]; 
  public get geoMappings() {
    return this.getListAttribute('geo_mappings');
  }
  public set geoMappings(value: string[]) {
    this._geoMappings = value;
  }
  public resetGeoMappings() {
    this._geoMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoMappingsInput() {
    return this._geoMappings;
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

  // minimum_child_endpoints - computed: false, optional: false, required: true
  private _minimumChildEndpoints?: number; 
  public get minimumChildEndpoints() {
    return this.getNumberAttribute('minimum_child_endpoints');
  }
  public set minimumChildEndpoints(value: number) {
    this._minimumChildEndpoints = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumChildEndpointsInput() {
    return this._minimumChildEndpoints;
  }

  // minimum_required_child_endpoints_ipv4 - computed: false, optional: true, required: false
  private _minimumRequiredChildEndpointsIpv4?: number; 
  public get minimumRequiredChildEndpointsIpv4() {
    return this.getNumberAttribute('minimum_required_child_endpoints_ipv4');
  }
  public set minimumRequiredChildEndpointsIpv4(value: number) {
    this._minimumRequiredChildEndpointsIpv4 = value;
  }
  public resetMinimumRequiredChildEndpointsIpv4() {
    this._minimumRequiredChildEndpointsIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumRequiredChildEndpointsIpv4Input() {
    return this._minimumRequiredChildEndpointsIpv4;
  }

  // minimum_required_child_endpoints_ipv6 - computed: false, optional: true, required: false
  private _minimumRequiredChildEndpointsIpv6?: number; 
  public get minimumRequiredChildEndpointsIpv6() {
    return this.getNumberAttribute('minimum_required_child_endpoints_ipv6');
  }
  public set minimumRequiredChildEndpointsIpv6(value: number) {
    this._minimumRequiredChildEndpointsIpv6 = value;
  }
  public resetMinimumRequiredChildEndpointsIpv6() {
    this._minimumRequiredChildEndpointsIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumRequiredChildEndpointsIpv6Input() {
    return this._minimumRequiredChildEndpointsIpv6;
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

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // profile_id - computed: false, optional: false, required: true
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // target_resource_id - computed: false, optional: false, required: true
  private _targetResourceId?: string; 
  public get targetResourceId() {
    return this.getStringAttribute('target_resource_id');
  }
  public set targetResourceId(value: string) {
    this._targetResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceIdInput() {
    return this._targetResourceId;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // custom_header - computed: false, optional: true, required: false
  private _customHeader = new TrafficManagerNestedEndpointCustomHeaderList(this, "custom_header", false);
  public get customHeader() {
    return this._customHeader;
  }
  public putCustomHeader(value: TrafficManagerNestedEndpointCustomHeader[] | cdktn.IResolvable) {
    this._customHeader.internalValue = value;
  }
  public resetCustomHeader() {
    this._customHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderInput() {
    return this._customHeader.internalValue;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet = new TrafficManagerNestedEndpointSubnetList(this, "subnet", false);
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: TrafficManagerNestedEndpointSubnet[] | cdktn.IResolvable) {
    this._subnet.internalValue = value;
  }
  public resetSubnet() {
    this._subnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TrafficManagerNestedEndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TrafficManagerNestedEndpointTimeouts) {
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
      enabled: cdktn.booleanToTerraform(this._enabled),
      endpoint_location: cdktn.stringToTerraform(this._endpointLocation),
      geo_mappings: cdktn.listMapper(cdktn.stringToTerraform, false)(this._geoMappings),
      id: cdktn.stringToTerraform(this._id),
      minimum_child_endpoints: cdktn.numberToTerraform(this._minimumChildEndpoints),
      minimum_required_child_endpoints_ipv4: cdktn.numberToTerraform(this._minimumRequiredChildEndpointsIpv4),
      minimum_required_child_endpoints_ipv6: cdktn.numberToTerraform(this._minimumRequiredChildEndpointsIpv6),
      name: cdktn.stringToTerraform(this._name),
      priority: cdktn.numberToTerraform(this._priority),
      profile_id: cdktn.stringToTerraform(this._profileId),
      target_resource_id: cdktn.stringToTerraform(this._targetResourceId),
      weight: cdktn.numberToTerraform(this._weight),
      custom_header: cdktn.listMapper(trafficManagerNestedEndpointCustomHeaderToTerraform, true)(this._customHeader.internalValue),
      subnet: cdktn.listMapper(trafficManagerNestedEndpointSubnetToTerraform, true)(this._subnet.internalValue),
      timeouts: trafficManagerNestedEndpointTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint_location: {
        value: cdktn.stringToHclTerraform(this._endpointLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geo_mappings: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._geoMappings),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimum_child_endpoints: {
        value: cdktn.numberToHclTerraform(this._minimumChildEndpoints),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_required_child_endpoints_ipv4: {
        value: cdktn.numberToHclTerraform(this._minimumRequiredChildEndpointsIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_required_child_endpoints_ipv6: {
        value: cdktn.numberToHclTerraform(this._minimumRequiredChildEndpointsIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktn.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      profile_id: {
        value: cdktn.stringToHclTerraform(this._profileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_resource_id: {
        value: cdktn.stringToHclTerraform(this._targetResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktn.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_header: {
        value: cdktn.listMapperHcl(trafficManagerNestedEndpointCustomHeaderToHclTerraform, true)(this._customHeader.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TrafficManagerNestedEndpointCustomHeaderList",
      },
      subnet: {
        value: cdktn.listMapperHcl(trafficManagerNestedEndpointSubnetToHclTerraform, true)(this._subnet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TrafficManagerNestedEndpointSubnetList",
      },
      timeouts: {
        value: trafficManagerNestedEndpointTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TrafficManagerNestedEndpointTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
