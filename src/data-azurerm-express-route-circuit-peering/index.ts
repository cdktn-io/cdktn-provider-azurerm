/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAzurermExpressRouteCircuitPeeringConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering#express_route_circuit_name DataAzurermExpressRouteCircuitPeering#express_route_circuit_name}
  */
  readonly expressRouteCircuitName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering#id DataAzurermExpressRouteCircuitPeering#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering#peering_type DataAzurermExpressRouteCircuitPeering#peering_type}
  */
  readonly peeringType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering#resource_group_name DataAzurermExpressRouteCircuitPeering#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering#timeouts DataAzurermExpressRouteCircuitPeering#timeouts}
  */
  readonly timeouts?: DataAzurermExpressRouteCircuitPeeringTimeouts;
}
export interface DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeering {
}

export function dataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringToTerraform(struct?: DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeering): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringToHclTerraform(struct?: DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeering): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeering | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeering | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertised_communities - computed: true, optional: false, required: false
  public get advertisedCommunities() {
    return this.getListAttribute('advertised_communities');
  }

  // advertised_public_prefixes - computed: true, optional: false, required: false
  public get advertisedPublicPrefixes() {
    return this.getListAttribute('advertised_public_prefixes');
  }

  // customer_asn - computed: true, optional: false, required: false
  public get customerAsn() {
    return this.getNumberAttribute('customer_asn');
  }

  // routing_registry_name - computed: true, optional: false, required: false
  public get routingRegistryName() {
    return this.getStringAttribute('routing_registry_name');
  }
}

export class DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference {
    return new DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermExpressRouteCircuitPeeringIpv6 {
}

export function dataAzurermExpressRouteCircuitPeeringIpv6ToTerraform(struct?: DataAzurermExpressRouteCircuitPeeringIpv6): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermExpressRouteCircuitPeeringIpv6ToHclTerraform(struct?: DataAzurermExpressRouteCircuitPeeringIpv6): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermExpressRouteCircuitPeeringIpv6OutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAzurermExpressRouteCircuitPeeringIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermExpressRouteCircuitPeeringIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // microsoft_peering - computed: true, optional: false, required: false
  private _microsoftPeering = new DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList(this, "microsoft_peering", false);
  public get microsoftPeering() {
    return this._microsoftPeering;
  }

  // primary_peer_address_prefix - computed: true, optional: false, required: false
  public get primaryPeerAddressPrefix() {
    return this.getStringAttribute('primary_peer_address_prefix');
  }

  // route_filter_id - computed: true, optional: false, required: false
  public get routeFilterId() {
    return this.getStringAttribute('route_filter_id');
  }

  // secondary_peer_address_prefix - computed: true, optional: false, required: false
  public get secondaryPeerAddressPrefix() {
    return this.getStringAttribute('secondary_peer_address_prefix');
  }
}

export class DataAzurermExpressRouteCircuitPeeringIpv6List extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermExpressRouteCircuitPeeringIpv6OutputReference {
    return new DataAzurermExpressRouteCircuitPeeringIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfig {
}

export function dataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigToTerraform(struct?: DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigToHclTerraform(struct?: DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertised_communities - computed: true, optional: false, required: false
  public get advertisedCommunities() {
    return this.getListAttribute('advertised_communities');
  }

  // advertised_public_prefixes - computed: true, optional: false, required: false
  public get advertisedPublicPrefixes() {
    return this.getListAttribute('advertised_public_prefixes');
  }

  // customer_asn - computed: true, optional: false, required: false
  public get customerAsn() {
    return this.getNumberAttribute('customer_asn');
  }

  // routing_registry_name - computed: true, optional: false, required: false
  public get routingRegistryName() {
    return this.getStringAttribute('routing_registry_name');
  }
}

export class DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference {
    return new DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermExpressRouteCircuitPeeringTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering#read DataAzurermExpressRouteCircuitPeering#read}
  */
  readonly read?: string;
}

export function dataAzurermExpressRouteCircuitPeeringTimeoutsToTerraform(struct?: DataAzurermExpressRouteCircuitPeeringTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    read: cdktn.stringToTerraform(struct!.read),
  }
}


export function dataAzurermExpressRouteCircuitPeeringTimeoutsToHclTerraform(struct?: DataAzurermExpressRouteCircuitPeeringTimeouts | cdktn.IResolvable): any {
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

export class DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermExpressRouteCircuitPeeringTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataAzurermExpressRouteCircuitPeeringTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering azurerm_express_route_circuit_peering}
*/
export class DataAzurermExpressRouteCircuitPeering extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_express_route_circuit_peering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAzurermExpressRouteCircuitPeering resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermExpressRouteCircuitPeering to import
  * @param importFromId The id of the existing DataAzurermExpressRouteCircuitPeering that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermExpressRouteCircuitPeering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_express_route_circuit_peering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering azurerm_express_route_circuit_peering} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermExpressRouteCircuitPeeringConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermExpressRouteCircuitPeeringConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_express_route_circuit_peering',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '5.7.0',
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
    this._expressRouteCircuitName = config.expressRouteCircuitName;
    this._id = config.id;
    this._peeringType = config.peeringType;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_asn - computed: true, optional: false, required: false
  public get azureAsn() {
    return this.getNumberAttribute('azure_asn');
  }

  // express_route_circuit_name - computed: false, optional: false, required: true
  private _expressRouteCircuitName?: string; 
  public get expressRouteCircuitName() {
    return this.getStringAttribute('express_route_circuit_name');
  }
  public set expressRouteCircuitName(value: string) {
    this._expressRouteCircuitName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressRouteCircuitNameInput() {
    return this._expressRouteCircuitName;
  }

  // gateway_manager_etag - computed: true, optional: false, required: false
  public get gatewayManagerEtag() {
    return this.getStringAttribute('gateway_manager_etag');
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

  // ipv4_enabled - computed: true, optional: false, required: false
  public get ipv4Enabled() {
    return this.getBooleanAttribute('ipv4_enabled');
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataAzurermExpressRouteCircuitPeeringIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }

  // microsoft_peering_config - computed: true, optional: false, required: false
  private _microsoftPeeringConfig = new DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList(this, "microsoft_peering_config", false);
  public get microsoftPeeringConfig() {
    return this._microsoftPeeringConfig;
  }

  // peer_asn - computed: true, optional: false, required: false
  public get peerAsn() {
    return this.getNumberAttribute('peer_asn');
  }

  // peering_type - computed: false, optional: false, required: true
  private _peeringType?: string; 
  public get peeringType() {
    return this.getStringAttribute('peering_type');
  }
  public set peeringType(value: string) {
    this._peeringType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringTypeInput() {
    return this._peeringType;
  }

  // primary_azure_port - computed: true, optional: false, required: false
  public get primaryAzurePort() {
    return this.getStringAttribute('primary_azure_port');
  }

  // primary_peer_address_prefix - computed: true, optional: false, required: false
  public get primaryPeerAddressPrefix() {
    return this.getStringAttribute('primary_peer_address_prefix');
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

  // route_filter_id - computed: true, optional: false, required: false
  public get routeFilterId() {
    return this.getStringAttribute('route_filter_id');
  }

  // secondary_azure_port - computed: true, optional: false, required: false
  public get secondaryAzurePort() {
    return this.getStringAttribute('secondary_azure_port');
  }

  // secondary_peer_address_prefix - computed: true, optional: false, required: false
  public get secondaryPeerAddressPrefix() {
    return this.getStringAttribute('secondary_peer_address_prefix');
  }

  // shared_key - computed: true, optional: false, required: false
  public get sharedKey() {
    return this.getStringAttribute('shared_key');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermExpressRouteCircuitPeeringTimeouts) {
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
      express_route_circuit_name: cdktn.stringToTerraform(this._expressRouteCircuitName),
      id: cdktn.stringToTerraform(this._id),
      peering_type: cdktn.stringToTerraform(this._peeringType),
      resource_group_name: cdktn.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermExpressRouteCircuitPeeringTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      express_route_circuit_name: {
        value: cdktn.stringToHclTerraform(this._expressRouteCircuitName),
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
      peering_type: {
        value: cdktn.stringToHclTerraform(this._peeringType),
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
        value: dataAzurermExpressRouteCircuitPeeringTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermExpressRouteCircuitPeeringTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
