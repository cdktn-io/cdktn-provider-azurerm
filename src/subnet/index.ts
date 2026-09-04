/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SubnetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet#address_prefixes Subnet#address_prefixes}
  */
  readonly addressPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet#default_outbound_access_enabled Subnet#default_outbound_access_enabled}
  */
  readonly defaultOutboundAccessEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet#id Subnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet#name Subnet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet#network_security_group_id_wo Subnet#network_security_group_id_wo}
  */
  readonly networkSecurityGroupIdWo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet#network_security_group_id_wo_version Subnet#network_security_group_id_wo_version}
  */
  readonly networkSecurityGroupIdWoVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet#private_endpoint_network_policies Subnet#private_endpoint_network_policies}
  */
  readonly privateEndpointNetworkPolicies?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet#private_link_service_network_policies_enabled Subnet#private_link_service_network_policies_enabled}
  */
  readonly privateLinkServiceNetworkPoliciesEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet#resource_group_name Subnet#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet#route_table_id_wo Subnet#route_table_id_wo}
  */
  readonly routeTableIdWo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet#route_table_id_wo_version Subnet#route_table_id_wo_version}
  */
  readonly routeTableIdWoVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet#service_endpoint_policy_ids Subnet#service_endpoint_policy_ids}
  */
  readonly serviceEndpointPolicyIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet#sharing_scope Subnet#sharing_scope}
  */
  readonly sharingScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet#virtual_network_name Subnet#virtual_network_name}
  */
  readonly virtualNetworkName: string;
  /**
  * delegation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet#delegation Subnet#delegation}
  */
  readonly delegation?: SubnetDelegation[] | cdktn.IResolvable;
  /**
  * ip_address_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet#ip_address_pool Subnet#ip_address_pool}
  */
  readonly ipAddressPool?: SubnetIpAddressPool;
  /**
  * service_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet#service_endpoint Subnet#service_endpoint}
  */
  readonly serviceEndpoint?: SubnetServiceEndpoint[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet#timeouts Subnet#timeouts}
  */
  readonly timeouts?: SubnetTimeouts;
}
export interface SubnetDelegationServiceDelegation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet#actions Subnet#actions}
  */
  readonly actions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet#name Subnet#name}
  */
  readonly name: string;
}

export function subnetDelegationServiceDelegationToTerraform(struct?: SubnetDelegationServiceDelegationOutputReference | SubnetDelegationServiceDelegation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function subnetDelegationServiceDelegationToHclTerraform(struct?: SubnetDelegationServiceDelegationOutputReference | SubnetDelegationServiceDelegation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SubnetDelegationServiceDelegationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SubnetDelegationServiceDelegation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubnetDelegationServiceDelegation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actions = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actions = value.actions;
      this._name = value.name;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return cdktn.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
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
}
export interface SubnetDelegation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet#name Subnet#name}
  */
  readonly name: string;
  /**
  * service_delegation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet#service_delegation Subnet#service_delegation}
  */
  readonly serviceDelegation: SubnetDelegationServiceDelegation;
}

export function subnetDelegationToTerraform(struct?: SubnetDelegation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    service_delegation: subnetDelegationServiceDelegationToTerraform(struct!.serviceDelegation),
  }
}


export function subnetDelegationToHclTerraform(struct?: SubnetDelegation | cdktn.IResolvable): any {
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
    service_delegation: {
      value: subnetDelegationServiceDelegationToHclTerraform(struct!.serviceDelegation),
      isBlock: true,
      type: "list",
      storageClassType: "SubnetDelegationServiceDelegationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SubnetDelegationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SubnetDelegation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._serviceDelegation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDelegation = this._serviceDelegation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubnetDelegation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._serviceDelegation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._serviceDelegation.internalValue = value.serviceDelegation;
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

  // service_delegation - computed: false, optional: false, required: true
  private _serviceDelegation = new SubnetDelegationServiceDelegationOutputReference(this, "service_delegation");
  public get serviceDelegation() {
    return this._serviceDelegation;
  }
  public putServiceDelegation(value: SubnetDelegationServiceDelegation) {
    this._serviceDelegation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDelegationInput() {
    return this._serviceDelegation.internalValue;
  }
}

export class SubnetDelegationList extends cdktn.ComplexList {
  public internalValue? : SubnetDelegation[] | cdktn.IResolvable

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
  public get(index: number): SubnetDelegationOutputReference {
    return new SubnetDelegationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SubnetIpAddressPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet#id Subnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet#number_of_ip_addresses Subnet#number_of_ip_addresses}
  */
  readonly numberOfIpAddresses: string;
}

export function subnetIpAddressPoolToTerraform(struct?: SubnetIpAddressPoolOutputReference | SubnetIpAddressPool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    number_of_ip_addresses: cdktn.stringToTerraform(struct!.numberOfIpAddresses),
  }
}


export function subnetIpAddressPoolToHclTerraform(struct?: SubnetIpAddressPoolOutputReference | SubnetIpAddressPool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_ip_addresses: {
      value: cdktn.stringToHclTerraform(struct!.numberOfIpAddresses),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SubnetIpAddressPoolOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SubnetIpAddressPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._numberOfIpAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfIpAddresses = this._numberOfIpAddresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubnetIpAddressPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._numberOfIpAddresses = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._numberOfIpAddresses = value.numberOfIpAddresses;
    }
  }

  // allocated_ip_address_prefixes - computed: true, optional: false, required: false
  public get allocatedIpAddressPrefixes() {
    return this.getListAttribute('allocated_ip_address_prefixes');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // number_of_ip_addresses - computed: false, optional: false, required: true
  private _numberOfIpAddresses?: string; 
  public get numberOfIpAddresses() {
    return this.getStringAttribute('number_of_ip_addresses');
  }
  public set numberOfIpAddresses(value: string) {
    this._numberOfIpAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfIpAddressesInput() {
    return this._numberOfIpAddresses;
  }
}
export interface SubnetServiceEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet#network_identifier Subnet#network_identifier}
  */
  readonly networkIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet#service Subnet#service}
  */
  readonly service: string;
}

export function subnetServiceEndpointToTerraform(struct?: SubnetServiceEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network_identifier: cdktn.stringToTerraform(struct!.networkIdentifier),
    service: cdktn.stringToTerraform(struct!.service),
  }
}


export function subnetServiceEndpointToHclTerraform(struct?: SubnetServiceEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    network_identifier: {
      value: cdktn.stringToHclTerraform(struct!.networkIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktn.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SubnetServiceEndpointOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SubnetServiceEndpoint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkIdentifier = this._networkIdentifier;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubnetServiceEndpoint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkIdentifier = undefined;
      this._service = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkIdentifier = value.networkIdentifier;
      this._service = value.service;
    }
  }

  // network_identifier - computed: false, optional: true, required: false
  private _networkIdentifier?: string; 
  public get networkIdentifier() {
    return this.getStringAttribute('network_identifier');
  }
  public set networkIdentifier(value: string) {
    this._networkIdentifier = value;
  }
  public resetNetworkIdentifier() {
    this._networkIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdentifierInput() {
    return this._networkIdentifier;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}

export class SubnetServiceEndpointList extends cdktn.ComplexList {
  public internalValue? : SubnetServiceEndpoint[] | cdktn.IResolvable

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
  public get(index: number): SubnetServiceEndpointOutputReference {
    return new SubnetServiceEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SubnetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet#create Subnet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet#delete Subnet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet#read Subnet#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet#update Subnet#update}
  */
  readonly update?: string;
}

export function subnetTimeoutsToTerraform(struct?: SubnetTimeouts | cdktn.IResolvable): any {
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


export function subnetTimeoutsToHclTerraform(struct?: SubnetTimeouts | cdktn.IResolvable): any {
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

export class SubnetTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SubnetTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SubnetTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet azurerm_subnet}
*/
export class Subnet extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_subnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Subnet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Subnet to import
  * @param importFromId The id of the existing Subnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Subnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_subnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/subnet azurerm_subnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubnetConfig
  */
  public constructor(scope: Construct, id: string, config: SubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_subnet',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '5.4.0',
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
    this._addressPrefixes = config.addressPrefixes;
    this._defaultOutboundAccessEnabled = config.defaultOutboundAccessEnabled;
    this._id = config.id;
    this._name = config.name;
    this._networkSecurityGroupIdWo = config.networkSecurityGroupIdWo;
    this._networkSecurityGroupIdWoVersion = config.networkSecurityGroupIdWoVersion;
    this._privateEndpointNetworkPolicies = config.privateEndpointNetworkPolicies;
    this._privateLinkServiceNetworkPoliciesEnabled = config.privateLinkServiceNetworkPoliciesEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._routeTableIdWo = config.routeTableIdWo;
    this._routeTableIdWoVersion = config.routeTableIdWoVersion;
    this._serviceEndpointPolicyIds = config.serviceEndpointPolicyIds;
    this._sharingScope = config.sharingScope;
    this._virtualNetworkName = config.virtualNetworkName;
    this._delegation.internalValue = config.delegation;
    this._ipAddressPool.internalValue = config.ipAddressPool;
    this._serviceEndpoint.internalValue = config.serviceEndpoint;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_prefixes - computed: false, optional: true, required: false
  private _addressPrefixes?: string[]; 
  public get addressPrefixes() {
    return this.getListAttribute('address_prefixes');
  }
  public set addressPrefixes(value: string[]) {
    this._addressPrefixes = value;
  }
  public resetAddressPrefixes() {
    this._addressPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPrefixesInput() {
    return this._addressPrefixes;
  }

  // default_outbound_access_enabled - computed: false, optional: true, required: false
  private _defaultOutboundAccessEnabled?: boolean | cdktn.IResolvable; 
  public get defaultOutboundAccessEnabled() {
    return this.getBooleanAttribute('default_outbound_access_enabled');
  }
  public set defaultOutboundAccessEnabled(value: boolean | cdktn.IResolvable) {
    this._defaultOutboundAccessEnabled = value;
  }
  public resetDefaultOutboundAccessEnabled() {
    this._defaultOutboundAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOutboundAccessEnabledInput() {
    return this._defaultOutboundAccessEnabled;
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

  // network_security_group_id - computed: true, optional: false, required: false
  public get networkSecurityGroupId() {
    return this.getStringAttribute('network_security_group_id');
  }

  // network_security_group_id_wo - computed: false, optional: true, required: false
  private _networkSecurityGroupIdWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get networkSecurityGroupIdWo() {
    return this.getStringAttribute('network_security_group_id_wo');
  }
  public set networkSecurityGroupIdWo(value: string) {
    this._networkSecurityGroupIdWo = value;
  }
  public resetNetworkSecurityGroupIdWo() {
    this._networkSecurityGroupIdWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSecurityGroupIdWoInput() {
    return this._networkSecurityGroupIdWo;
  }

  // network_security_group_id_wo_version - computed: false, optional: true, required: false
  private _networkSecurityGroupIdWoVersion?: number; 
  public get networkSecurityGroupIdWoVersion() {
    return this.getNumberAttribute('network_security_group_id_wo_version');
  }
  public set networkSecurityGroupIdWoVersion(value: number) {
    this._networkSecurityGroupIdWoVersion = value;
  }
  public resetNetworkSecurityGroupIdWoVersion() {
    this._networkSecurityGroupIdWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSecurityGroupIdWoVersionInput() {
    return this._networkSecurityGroupIdWoVersion;
  }

  // private_endpoint_network_policies - computed: false, optional: true, required: false
  private _privateEndpointNetworkPolicies?: string; 
  public get privateEndpointNetworkPolicies() {
    return this.getStringAttribute('private_endpoint_network_policies');
  }
  public set privateEndpointNetworkPolicies(value: string) {
    this._privateEndpointNetworkPolicies = value;
  }
  public resetPrivateEndpointNetworkPolicies() {
    this._privateEndpointNetworkPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointNetworkPoliciesInput() {
    return this._privateEndpointNetworkPolicies;
  }

  // private_link_service_network_policies_enabled - computed: false, optional: true, required: false
  private _privateLinkServiceNetworkPoliciesEnabled?: boolean | cdktn.IResolvable; 
  public get privateLinkServiceNetworkPoliciesEnabled() {
    return this.getBooleanAttribute('private_link_service_network_policies_enabled');
  }
  public set privateLinkServiceNetworkPoliciesEnabled(value: boolean | cdktn.IResolvable) {
    this._privateLinkServiceNetworkPoliciesEnabled = value;
  }
  public resetPrivateLinkServiceNetworkPoliciesEnabled() {
    this._privateLinkServiceNetworkPoliciesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkServiceNetworkPoliciesEnabledInput() {
    return this._privateLinkServiceNetworkPoliciesEnabled;
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

  // route_table_id - computed: true, optional: false, required: false
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }

  // route_table_id_wo - computed: false, optional: true, required: false
  private _routeTableIdWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get routeTableIdWo() {
    return this.getStringAttribute('route_table_id_wo');
  }
  public set routeTableIdWo(value: string) {
    this._routeTableIdWo = value;
  }
  public resetRouteTableIdWo() {
    this._routeTableIdWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdWoInput() {
    return this._routeTableIdWo;
  }

  // route_table_id_wo_version - computed: false, optional: true, required: false
  private _routeTableIdWoVersion?: number; 
  public get routeTableIdWoVersion() {
    return this.getNumberAttribute('route_table_id_wo_version');
  }
  public set routeTableIdWoVersion(value: number) {
    this._routeTableIdWoVersion = value;
  }
  public resetRouteTableIdWoVersion() {
    this._routeTableIdWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdWoVersionInput() {
    return this._routeTableIdWoVersion;
  }

  // service_endpoint_policy_ids - computed: false, optional: true, required: false
  private _serviceEndpointPolicyIds?: string[]; 
  public get serviceEndpointPolicyIds() {
    return cdktn.Fn.tolist(this.getListAttribute('service_endpoint_policy_ids'));
  }
  public set serviceEndpointPolicyIds(value: string[]) {
    this._serviceEndpointPolicyIds = value;
  }
  public resetServiceEndpointPolicyIds() {
    this._serviceEndpointPolicyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEndpointPolicyIdsInput() {
    return this._serviceEndpointPolicyIds;
  }

  // sharing_scope - computed: false, optional: true, required: false
  private _sharingScope?: string; 
  public get sharingScope() {
    return this.getStringAttribute('sharing_scope');
  }
  public set sharingScope(value: string) {
    this._sharingScope = value;
  }
  public resetSharingScope() {
    this._sharingScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingScopeInput() {
    return this._sharingScope;
  }

  // virtual_network_name - computed: false, optional: false, required: true
  private _virtualNetworkName?: string; 
  public get virtualNetworkName() {
    return this.getStringAttribute('virtual_network_name');
  }
  public set virtualNetworkName(value: string) {
    this._virtualNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkNameInput() {
    return this._virtualNetworkName;
  }

  // delegation - computed: false, optional: true, required: false
  private _delegation = new SubnetDelegationList(this, "delegation", false);
  public get delegation() {
    return this._delegation;
  }
  public putDelegation(value: SubnetDelegation[] | cdktn.IResolvable) {
    this._delegation.internalValue = value;
  }
  public resetDelegation() {
    this._delegation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegationInput() {
    return this._delegation.internalValue;
  }

  // ip_address_pool - computed: false, optional: true, required: false
  private _ipAddressPool = new SubnetIpAddressPoolOutputReference(this, "ip_address_pool");
  public get ipAddressPool() {
    return this._ipAddressPool;
  }
  public putIpAddressPool(value: SubnetIpAddressPool) {
    this._ipAddressPool.internalValue = value;
  }
  public resetIpAddressPool() {
    this._ipAddressPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressPoolInput() {
    return this._ipAddressPool.internalValue;
  }

  // service_endpoint - computed: false, optional: true, required: false
  private _serviceEndpoint = new SubnetServiceEndpointList(this, "service_endpoint", false);
  public get serviceEndpoint() {
    return this._serviceEndpoint;
  }
  public putServiceEndpoint(value: SubnetServiceEndpoint[] | cdktn.IResolvable) {
    this._serviceEndpoint.internalValue = value;
  }
  public resetServiceEndpoint() {
    this._serviceEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEndpointInput() {
    return this._serviceEndpoint.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SubnetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SubnetTimeouts) {
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
      address_prefixes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._addressPrefixes),
      default_outbound_access_enabled: cdktn.booleanToTerraform(this._defaultOutboundAccessEnabled),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      network_security_group_id_wo: this.markWriteOnlyAttribute(cdktn.stringToTerraform(this._networkSecurityGroupIdWo)),
      network_security_group_id_wo_version: cdktn.numberToTerraform(this._networkSecurityGroupIdWoVersion),
      private_endpoint_network_policies: cdktn.stringToTerraform(this._privateEndpointNetworkPolicies),
      private_link_service_network_policies_enabled: cdktn.booleanToTerraform(this._privateLinkServiceNetworkPoliciesEnabled),
      resource_group_name: cdktn.stringToTerraform(this._resourceGroupName),
      route_table_id_wo: this.markWriteOnlyAttribute(cdktn.stringToTerraform(this._routeTableIdWo)),
      route_table_id_wo_version: cdktn.numberToTerraform(this._routeTableIdWoVersion),
      service_endpoint_policy_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._serviceEndpointPolicyIds),
      sharing_scope: cdktn.stringToTerraform(this._sharingScope),
      virtual_network_name: cdktn.stringToTerraform(this._virtualNetworkName),
      delegation: cdktn.listMapper(subnetDelegationToTerraform, true)(this._delegation.internalValue),
      ip_address_pool: subnetIpAddressPoolToTerraform(this._ipAddressPool.internalValue),
      service_endpoint: cdktn.listMapper(subnetServiceEndpointToTerraform, true)(this._serviceEndpoint.internalValue),
      timeouts: subnetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_prefixes: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._addressPrefixes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      default_outbound_access_enabled: {
        value: cdktn.booleanToHclTerraform(this._defaultOutboundAccessEnabled),
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
      network_security_group_id_wo: {
        value: this.markWriteOnlyAttribute(cdktn.stringToHclTerraform(this._networkSecurityGroupIdWo)),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_security_group_id_wo_version: {
        value: cdktn.numberToHclTerraform(this._networkSecurityGroupIdWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_endpoint_network_policies: {
        value: cdktn.stringToHclTerraform(this._privateEndpointNetworkPolicies),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_link_service_network_policies_enabled: {
        value: cdktn.booleanToHclTerraform(this._privateLinkServiceNetworkPoliciesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_group_name: {
        value: cdktn.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_table_id_wo: {
        value: this.markWriteOnlyAttribute(cdktn.stringToHclTerraform(this._routeTableIdWo)),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_table_id_wo_version: {
        value: cdktn.numberToHclTerraform(this._routeTableIdWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_endpoint_policy_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._serviceEndpointPolicyIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sharing_scope: {
        value: cdktn.stringToHclTerraform(this._sharingScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_network_name: {
        value: cdktn.stringToHclTerraform(this._virtualNetworkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delegation: {
        value: cdktn.listMapperHcl(subnetDelegationToHclTerraform, true)(this._delegation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SubnetDelegationList",
      },
      ip_address_pool: {
        value: subnetIpAddressPoolToHclTerraform(this._ipAddressPool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SubnetIpAddressPoolList",
      },
      service_endpoint: {
        value: cdktn.listMapperHcl(subnetServiceEndpointToHclTerraform, true)(this._serviceEndpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SubnetServiceEndpointList",
      },
      timeouts: {
        value: subnetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SubnetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
