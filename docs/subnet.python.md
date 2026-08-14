# `subnet` Submodule <a name="`subnet` Submodule" id="@cdktn/provider-azurerm.subnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Subnet <a name="Subnet" id="@cdktn/provider-azurerm.subnet.Subnet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet azurerm_subnet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.subnet.Subnet.Initializer"></a>

```python
from cdktn_provider_azurerm import subnet

subnet.Subnet(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  resource_group_name: str,
  virtual_network_name: str,
  address_prefixes: typing.List[str] = None,
  default_outbound_access_enabled: bool | IResolvable = None,
  delegation: IResolvable | typing.List[SubnetDelegation] = None,
  id: str = None,
  ip_address_pool: SubnetIpAddressPool = None,
  network_security_group_id_wo: str = None,
  network_security_group_id_wo_version: typing.Union[int, float] = None,
  private_endpoint_network_policies: str = None,
  private_link_service_network_policies_enabled: bool | IResolvable = None,
  route_table_id_wo: str = None,
  route_table_id_wo_version: typing.Union[int, float] = None,
  service_endpoint: IResolvable | typing.List[SubnetServiceEndpoint] = None,
  service_endpoint_policy_ids: typing.List[str] = None,
  sharing_scope: str = None,
  timeouts: SubnetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#name Subnet#name}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#resource_group_name Subnet#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.virtualNetworkName">virtual_network_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#virtual_network_name Subnet#virtual_network_name}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.addressPrefixes">address_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#address_prefixes Subnet#address_prefixes}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.defaultOutboundAccessEnabled">default_outbound_access_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#default_outbound_access_enabled Subnet#default_outbound_access_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.delegation">delegation</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.subnet.SubnetDelegation">SubnetDelegation</a>]</code> | delegation block. |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#id Subnet#id}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.ipAddressPool">ip_address_pool</a></code> | <code><a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPool">SubnetIpAddressPool</a></code> | ip_address_pool block. |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.networkSecurityGroupIdWo">network_security_group_id_wo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#network_security_group_id_wo Subnet#network_security_group_id_wo}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.networkSecurityGroupIdWoVersion">network_security_group_id_wo_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#network_security_group_id_wo_version Subnet#network_security_group_id_wo_version}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.privateEndpointNetworkPolicies">private_endpoint_network_policies</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#private_endpoint_network_policies Subnet#private_endpoint_network_policies}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.privateLinkServiceNetworkPoliciesEnabled">private_link_service_network_policies_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#private_link_service_network_policies_enabled Subnet#private_link_service_network_policies_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.routeTableIdWo">route_table_id_wo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#route_table_id_wo Subnet#route_table_id_wo}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.routeTableIdWoVersion">route_table_id_wo_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#route_table_id_wo_version Subnet#route_table_id_wo_version}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.serviceEndpoint">service_endpoint</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpoint">SubnetServiceEndpoint</a>]</code> | service_endpoint block. |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.serviceEndpointPolicyIds">service_endpoint_policy_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#service_endpoint_policy_ids Subnet#service_endpoint_policy_ids}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.sharingScope">sharing_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#sharing_scope Subnet#sharing_scope}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeouts">SubnetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#name Subnet#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#resource_group_name Subnet#resource_group_name}.

---

##### `virtual_network_name`<sup>Required</sup> <a name="virtual_network_name" id="@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.virtualNetworkName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#virtual_network_name Subnet#virtual_network_name}.

---

##### `address_prefixes`<sup>Optional</sup> <a name="address_prefixes" id="@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.addressPrefixes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#address_prefixes Subnet#address_prefixes}.

---

##### `default_outbound_access_enabled`<sup>Optional</sup> <a name="default_outbound_access_enabled" id="@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.defaultOutboundAccessEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#default_outbound_access_enabled Subnet#default_outbound_access_enabled}.

---

##### `delegation`<sup>Optional</sup> <a name="delegation" id="@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.delegation"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.subnet.SubnetDelegation">SubnetDelegation</a>]

delegation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#delegation Subnet#delegation}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#id Subnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_address_pool`<sup>Optional</sup> <a name="ip_address_pool" id="@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.ipAddressPool"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPool">SubnetIpAddressPool</a>

ip_address_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#ip_address_pool Subnet#ip_address_pool}

---

##### `network_security_group_id_wo`<sup>Optional</sup> <a name="network_security_group_id_wo" id="@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.networkSecurityGroupIdWo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#network_security_group_id_wo Subnet#network_security_group_id_wo}.

---

##### `network_security_group_id_wo_version`<sup>Optional</sup> <a name="network_security_group_id_wo_version" id="@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.networkSecurityGroupIdWoVersion"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#network_security_group_id_wo_version Subnet#network_security_group_id_wo_version}.

---

##### `private_endpoint_network_policies`<sup>Optional</sup> <a name="private_endpoint_network_policies" id="@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.privateEndpointNetworkPolicies"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#private_endpoint_network_policies Subnet#private_endpoint_network_policies}.

---

##### `private_link_service_network_policies_enabled`<sup>Optional</sup> <a name="private_link_service_network_policies_enabled" id="@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.privateLinkServiceNetworkPoliciesEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#private_link_service_network_policies_enabled Subnet#private_link_service_network_policies_enabled}.

---

##### `route_table_id_wo`<sup>Optional</sup> <a name="route_table_id_wo" id="@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.routeTableIdWo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#route_table_id_wo Subnet#route_table_id_wo}.

---

##### `route_table_id_wo_version`<sup>Optional</sup> <a name="route_table_id_wo_version" id="@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.routeTableIdWoVersion"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#route_table_id_wo_version Subnet#route_table_id_wo_version}.

---

##### `service_endpoint`<sup>Optional</sup> <a name="service_endpoint" id="@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.serviceEndpoint"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpoint">SubnetServiceEndpoint</a>]

service_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#service_endpoint Subnet#service_endpoint}

---

##### `service_endpoint_policy_ids`<sup>Optional</sup> <a name="service_endpoint_policy_ids" id="@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.serviceEndpointPolicyIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#service_endpoint_policy_ids Subnet#service_endpoint_policy_ids}.

---

##### `sharing_scope`<sup>Optional</sup> <a name="sharing_scope" id="@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.sharingScope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#sharing_scope Subnet#sharing_scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.subnet.Subnet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.subnet.SubnetTimeouts">SubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#timeouts Subnet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.putDelegation">put_delegation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.putIpAddressPool">put_ip_address_pool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.putServiceEndpoint">put_service_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.resetAddressPrefixes">reset_address_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.resetDefaultOutboundAccessEnabled">reset_default_outbound_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.resetDelegation">reset_delegation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.resetIpAddressPool">reset_ip_address_pool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.resetNetworkSecurityGroupIdWo">reset_network_security_group_id_wo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.resetNetworkSecurityGroupIdWoVersion">reset_network_security_group_id_wo_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.resetPrivateEndpointNetworkPolicies">reset_private_endpoint_network_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.resetPrivateLinkServiceNetworkPoliciesEnabled">reset_private_link_service_network_policies_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.resetRouteTableIdWo">reset_route_table_id_wo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.resetRouteTableIdWoVersion">reset_route_table_id_wo_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.resetServiceEndpoint">reset_service_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.resetServiceEndpointPolicyIds">reset_service_endpoint_policy_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.resetSharingScope">reset_sharing_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.subnet.Subnet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.subnet.Subnet.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.subnet.Subnet.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.subnet.Subnet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.subnet.Subnet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.subnet.Subnet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.subnet.Subnet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.subnet.Subnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.subnet.Subnet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.subnet.Subnet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.subnet.Subnet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.subnet.Subnet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azurerm.subnet.Subnet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.subnet.Subnet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.subnet.Subnet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.Subnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.subnet.Subnet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.Subnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.subnet.Subnet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.Subnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.subnet.Subnet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.Subnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.subnet.Subnet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.Subnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.subnet.Subnet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.Subnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.subnet.Subnet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.Subnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.subnet.Subnet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.Subnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.subnet.Subnet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.Subnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azurerm.subnet.Subnet.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azurerm.subnet.Subnet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.subnet.Subnet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.subnet.Subnet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.subnet.Subnet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.Subnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azurerm.subnet.Subnet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.subnet.Subnet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azurerm.subnet.Subnet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.subnet.Subnet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.subnet.Subnet.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azurerm.subnet.Subnet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.subnet.Subnet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_delegation` <a name="put_delegation" id="@cdktn/provider-azurerm.subnet.Subnet.putDelegation"></a>

```python
def put_delegation(
  value: IResolvable | typing.List[SubnetDelegation]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.subnet.Subnet.putDelegation.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.subnet.SubnetDelegation">SubnetDelegation</a>]

---

##### `put_ip_address_pool` <a name="put_ip_address_pool" id="@cdktn/provider-azurerm.subnet.Subnet.putIpAddressPool"></a>

```python
def put_ip_address_pool(
  id: str,
  number_of_ip_addresses: str
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.subnet.Subnet.putIpAddressPool.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#id Subnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `number_of_ip_addresses`<sup>Required</sup> <a name="number_of_ip_addresses" id="@cdktn/provider-azurerm.subnet.Subnet.putIpAddressPool.parameter.numberOfIpAddresses"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#number_of_ip_addresses Subnet#number_of_ip_addresses}.

---

##### `put_service_endpoint` <a name="put_service_endpoint" id="@cdktn/provider-azurerm.subnet.Subnet.putServiceEndpoint"></a>

```python
def put_service_endpoint(
  value: IResolvable | typing.List[SubnetServiceEndpoint]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.subnet.Subnet.putServiceEndpoint.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpoint">SubnetServiceEndpoint</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.subnet.Subnet.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.subnet.Subnet.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#create Subnet#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.subnet.Subnet.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#delete Subnet#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.subnet.Subnet.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#read Subnet#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.subnet.Subnet.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#update Subnet#update}.

---

##### `reset_address_prefixes` <a name="reset_address_prefixes" id="@cdktn/provider-azurerm.subnet.Subnet.resetAddressPrefixes"></a>

```python
def reset_address_prefixes() -> None
```

##### `reset_default_outbound_access_enabled` <a name="reset_default_outbound_access_enabled" id="@cdktn/provider-azurerm.subnet.Subnet.resetDefaultOutboundAccessEnabled"></a>

```python
def reset_default_outbound_access_enabled() -> None
```

##### `reset_delegation` <a name="reset_delegation" id="@cdktn/provider-azurerm.subnet.Subnet.resetDelegation"></a>

```python
def reset_delegation() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.subnet.Subnet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_address_pool` <a name="reset_ip_address_pool" id="@cdktn/provider-azurerm.subnet.Subnet.resetIpAddressPool"></a>

```python
def reset_ip_address_pool() -> None
```

##### `reset_network_security_group_id_wo` <a name="reset_network_security_group_id_wo" id="@cdktn/provider-azurerm.subnet.Subnet.resetNetworkSecurityGroupIdWo"></a>

```python
def reset_network_security_group_id_wo() -> None
```

##### `reset_network_security_group_id_wo_version` <a name="reset_network_security_group_id_wo_version" id="@cdktn/provider-azurerm.subnet.Subnet.resetNetworkSecurityGroupIdWoVersion"></a>

```python
def reset_network_security_group_id_wo_version() -> None
```

##### `reset_private_endpoint_network_policies` <a name="reset_private_endpoint_network_policies" id="@cdktn/provider-azurerm.subnet.Subnet.resetPrivateEndpointNetworkPolicies"></a>

```python
def reset_private_endpoint_network_policies() -> None
```

##### `reset_private_link_service_network_policies_enabled` <a name="reset_private_link_service_network_policies_enabled" id="@cdktn/provider-azurerm.subnet.Subnet.resetPrivateLinkServiceNetworkPoliciesEnabled"></a>

```python
def reset_private_link_service_network_policies_enabled() -> None
```

##### `reset_route_table_id_wo` <a name="reset_route_table_id_wo" id="@cdktn/provider-azurerm.subnet.Subnet.resetRouteTableIdWo"></a>

```python
def reset_route_table_id_wo() -> None
```

##### `reset_route_table_id_wo_version` <a name="reset_route_table_id_wo_version" id="@cdktn/provider-azurerm.subnet.Subnet.resetRouteTableIdWoVersion"></a>

```python
def reset_route_table_id_wo_version() -> None
```

##### `reset_service_endpoint` <a name="reset_service_endpoint" id="@cdktn/provider-azurerm.subnet.Subnet.resetServiceEndpoint"></a>

```python
def reset_service_endpoint() -> None
```

##### `reset_service_endpoint_policy_ids` <a name="reset_service_endpoint_policy_ids" id="@cdktn/provider-azurerm.subnet.Subnet.resetServiceEndpointPolicyIds"></a>

```python
def reset_service_endpoint_policy_ids() -> None
```

##### `reset_sharing_scope` <a name="reset_sharing_scope" id="@cdktn/provider-azurerm.subnet.Subnet.resetSharingScope"></a>

```python
def reset_sharing_scope() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.subnet.Subnet.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Subnet resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.subnet.Subnet.isConstruct"></a>

```python
from cdktn_provider_azurerm import subnet

subnet.Subnet.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.subnet.Subnet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.subnet.Subnet.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import subnet

subnet.Subnet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.subnet.Subnet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azurerm.subnet.Subnet.isTerraformResource"></a>

```python
from cdktn_provider_azurerm import subnet

subnet.Subnet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.subnet.Subnet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.subnet.Subnet.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import subnet

subnet.Subnet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Subnet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.subnet.Subnet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.subnet.Subnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Subnet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.subnet.Subnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Subnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.subnet.Subnet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Subnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.delegation">delegation</a></code> | <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationList">SubnetDelegationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.ipAddressPool">ip_address_pool</a></code> | <code><a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference">SubnetIpAddressPoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.networkSecurityGroupId">network_security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.routeTableId">route_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.serviceEndpoint">service_endpoint</a></code> | <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointList">SubnetServiceEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference">SubnetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.addressPrefixesInput">address_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.defaultOutboundAccessEnabledInput">default_outbound_access_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.delegationInput">delegation_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.subnet.SubnetDelegation">SubnetDelegation</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.ipAddressPoolInput">ip_address_pool_input</a></code> | <code><a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPool">SubnetIpAddressPool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.networkSecurityGroupIdWoInput">network_security_group_id_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.networkSecurityGroupIdWoVersionInput">network_security_group_id_wo_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.privateEndpointNetworkPoliciesInput">private_endpoint_network_policies_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.privateLinkServiceNetworkPoliciesEnabledInput">private_link_service_network_policies_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.routeTableIdWoInput">route_table_id_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.routeTableIdWoVersionInput">route_table_id_wo_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.serviceEndpointInput">service_endpoint_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpoint">SubnetServiceEndpoint</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.serviceEndpointPolicyIdsInput">service_endpoint_policy_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.sharingScopeInput">sharing_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.subnet.SubnetTimeouts">SubnetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.virtualNetworkNameInput">virtual_network_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.addressPrefixes">address_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.defaultOutboundAccessEnabled">default_outbound_access_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.networkSecurityGroupIdWo">network_security_group_id_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.networkSecurityGroupIdWoVersion">network_security_group_id_wo_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.privateEndpointNetworkPolicies">private_endpoint_network_policies</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.privateLinkServiceNetworkPoliciesEnabled">private_link_service_network_policies_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.routeTableIdWo">route_table_id_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.routeTableIdWoVersion">route_table_id_wo_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.serviceEndpointPolicyIds">service_endpoint_policy_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.sharingScope">sharing_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.virtualNetworkName">virtual_network_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.subnet.Subnet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.subnet.Subnet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.subnet.Subnet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.subnet.Subnet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.subnet.Subnet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.subnet.Subnet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.subnet.Subnet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.subnet.Subnet.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.subnet.Subnet.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.subnet.Subnet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.subnet.Subnet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.subnet.Subnet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.subnet.Subnet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.subnet.Subnet.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `delegation`<sup>Required</sup> <a name="delegation" id="@cdktn/provider-azurerm.subnet.Subnet.property.delegation"></a>

```python
delegation: SubnetDelegationList
```

- *Type:* <a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationList">SubnetDelegationList</a>

---

##### `ip_address_pool`<sup>Required</sup> <a name="ip_address_pool" id="@cdktn/provider-azurerm.subnet.Subnet.property.ipAddressPool"></a>

```python
ip_address_pool: SubnetIpAddressPoolOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference">SubnetIpAddressPoolOutputReference</a>

---

##### `network_security_group_id`<sup>Required</sup> <a name="network_security_group_id" id="@cdktn/provider-azurerm.subnet.Subnet.property.networkSecurityGroupId"></a>

```python
network_security_group_id: str
```

- *Type:* str

---

##### `route_table_id`<sup>Required</sup> <a name="route_table_id" id="@cdktn/provider-azurerm.subnet.Subnet.property.routeTableId"></a>

```python
route_table_id: str
```

- *Type:* str

---

##### `service_endpoint`<sup>Required</sup> <a name="service_endpoint" id="@cdktn/provider-azurerm.subnet.Subnet.property.serviceEndpoint"></a>

```python
service_endpoint: SubnetServiceEndpointList
```

- *Type:* <a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointList">SubnetServiceEndpointList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.subnet.Subnet.property.timeouts"></a>

```python
timeouts: SubnetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference">SubnetTimeoutsOutputReference</a>

---

##### `address_prefixes_input`<sup>Optional</sup> <a name="address_prefixes_input" id="@cdktn/provider-azurerm.subnet.Subnet.property.addressPrefixesInput"></a>

```python
address_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_outbound_access_enabled_input`<sup>Optional</sup> <a name="default_outbound_access_enabled_input" id="@cdktn/provider-azurerm.subnet.Subnet.property.defaultOutboundAccessEnabledInput"></a>

```python
default_outbound_access_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `delegation_input`<sup>Optional</sup> <a name="delegation_input" id="@cdktn/provider-azurerm.subnet.Subnet.property.delegationInput"></a>

```python
delegation_input: IResolvable | typing.List[SubnetDelegation]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.subnet.SubnetDelegation">SubnetDelegation</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.subnet.Subnet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_address_pool_input`<sup>Optional</sup> <a name="ip_address_pool_input" id="@cdktn/provider-azurerm.subnet.Subnet.property.ipAddressPoolInput"></a>

```python
ip_address_pool_input: SubnetIpAddressPool
```

- *Type:* <a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPool">SubnetIpAddressPool</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.subnet.Subnet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_security_group_id_wo_input`<sup>Optional</sup> <a name="network_security_group_id_wo_input" id="@cdktn/provider-azurerm.subnet.Subnet.property.networkSecurityGroupIdWoInput"></a>

```python
network_security_group_id_wo_input: str
```

- *Type:* str

---

##### `network_security_group_id_wo_version_input`<sup>Optional</sup> <a name="network_security_group_id_wo_version_input" id="@cdktn/provider-azurerm.subnet.Subnet.property.networkSecurityGroupIdWoVersionInput"></a>

```python
network_security_group_id_wo_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_endpoint_network_policies_input`<sup>Optional</sup> <a name="private_endpoint_network_policies_input" id="@cdktn/provider-azurerm.subnet.Subnet.property.privateEndpointNetworkPoliciesInput"></a>

```python
private_endpoint_network_policies_input: str
```

- *Type:* str

---

##### `private_link_service_network_policies_enabled_input`<sup>Optional</sup> <a name="private_link_service_network_policies_enabled_input" id="@cdktn/provider-azurerm.subnet.Subnet.property.privateLinkServiceNetworkPoliciesEnabledInput"></a>

```python
private_link_service_network_policies_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktn/provider-azurerm.subnet.Subnet.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `route_table_id_wo_input`<sup>Optional</sup> <a name="route_table_id_wo_input" id="@cdktn/provider-azurerm.subnet.Subnet.property.routeTableIdWoInput"></a>

```python
route_table_id_wo_input: str
```

- *Type:* str

---

##### `route_table_id_wo_version_input`<sup>Optional</sup> <a name="route_table_id_wo_version_input" id="@cdktn/provider-azurerm.subnet.Subnet.property.routeTableIdWoVersionInput"></a>

```python
route_table_id_wo_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_endpoint_input`<sup>Optional</sup> <a name="service_endpoint_input" id="@cdktn/provider-azurerm.subnet.Subnet.property.serviceEndpointInput"></a>

```python
service_endpoint_input: IResolvable | typing.List[SubnetServiceEndpoint]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpoint">SubnetServiceEndpoint</a>]

---

##### `service_endpoint_policy_ids_input`<sup>Optional</sup> <a name="service_endpoint_policy_ids_input" id="@cdktn/provider-azurerm.subnet.Subnet.property.serviceEndpointPolicyIdsInput"></a>

```python
service_endpoint_policy_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sharing_scope_input`<sup>Optional</sup> <a name="sharing_scope_input" id="@cdktn/provider-azurerm.subnet.Subnet.property.sharingScopeInput"></a>

```python
sharing_scope_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.subnet.Subnet.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | SubnetTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.subnet.SubnetTimeouts">SubnetTimeouts</a>

---

##### `virtual_network_name_input`<sup>Optional</sup> <a name="virtual_network_name_input" id="@cdktn/provider-azurerm.subnet.Subnet.property.virtualNetworkNameInput"></a>

```python
virtual_network_name_input: str
```

- *Type:* str

---

##### `address_prefixes`<sup>Required</sup> <a name="address_prefixes" id="@cdktn/provider-azurerm.subnet.Subnet.property.addressPrefixes"></a>

```python
address_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_outbound_access_enabled`<sup>Required</sup> <a name="default_outbound_access_enabled" id="@cdktn/provider-azurerm.subnet.Subnet.property.defaultOutboundAccessEnabled"></a>

```python
default_outbound_access_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.subnet.Subnet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.subnet.Subnet.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### ~~`network_security_group_id_wo`~~<sup>Required</sup> <a name="network_security_group_id_wo" id="@cdktn/provider-azurerm.subnet.Subnet.property.networkSecurityGroupIdWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
network_security_group_id_wo: str
```

- *Type:* str

---

##### `network_security_group_id_wo_version`<sup>Required</sup> <a name="network_security_group_id_wo_version" id="@cdktn/provider-azurerm.subnet.Subnet.property.networkSecurityGroupIdWoVersion"></a>

```python
network_security_group_id_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_endpoint_network_policies`<sup>Required</sup> <a name="private_endpoint_network_policies" id="@cdktn/provider-azurerm.subnet.Subnet.property.privateEndpointNetworkPolicies"></a>

```python
private_endpoint_network_policies: str
```

- *Type:* str

---

##### `private_link_service_network_policies_enabled`<sup>Required</sup> <a name="private_link_service_network_policies_enabled" id="@cdktn/provider-azurerm.subnet.Subnet.property.privateLinkServiceNetworkPoliciesEnabled"></a>

```python
private_link_service_network_policies_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.subnet.Subnet.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### ~~`route_table_id_wo`~~<sup>Required</sup> <a name="route_table_id_wo" id="@cdktn/provider-azurerm.subnet.Subnet.property.routeTableIdWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
route_table_id_wo: str
```

- *Type:* str

---

##### `route_table_id_wo_version`<sup>Required</sup> <a name="route_table_id_wo_version" id="@cdktn/provider-azurerm.subnet.Subnet.property.routeTableIdWoVersion"></a>

```python
route_table_id_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_endpoint_policy_ids`<sup>Required</sup> <a name="service_endpoint_policy_ids" id="@cdktn/provider-azurerm.subnet.Subnet.property.serviceEndpointPolicyIds"></a>

```python
service_endpoint_policy_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sharing_scope`<sup>Required</sup> <a name="sharing_scope" id="@cdktn/provider-azurerm.subnet.Subnet.property.sharingScope"></a>

```python
sharing_scope: str
```

- *Type:* str

---

##### `virtual_network_name`<sup>Required</sup> <a name="virtual_network_name" id="@cdktn/provider-azurerm.subnet.Subnet.property.virtualNetworkName"></a>

```python
virtual_network_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnet.Subnet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.subnet.Subnet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SubnetConfig <a name="SubnetConfig" id="@cdktn/provider-azurerm.subnet.SubnetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.subnet.SubnetConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import subnet

subnet.SubnetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  resource_group_name: str,
  virtual_network_name: str,
  address_prefixes: typing.List[str] = None,
  default_outbound_access_enabled: bool | IResolvable = None,
  delegation: IResolvable | typing.List[SubnetDelegation] = None,
  id: str = None,
  ip_address_pool: SubnetIpAddressPool = None,
  network_security_group_id_wo: str = None,
  network_security_group_id_wo_version: typing.Union[int, float] = None,
  private_endpoint_network_policies: str = None,
  private_link_service_network_policies_enabled: bool | IResolvable = None,
  route_table_id_wo: str = None,
  route_table_id_wo_version: typing.Union[int, float] = None,
  service_endpoint: IResolvable | typing.List[SubnetServiceEndpoint] = None,
  service_endpoint_policy_ids: typing.List[str] = None,
  sharing_scope: str = None,
  timeouts: SubnetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#name Subnet#name}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#resource_group_name Subnet#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetConfig.property.virtualNetworkName">virtual_network_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#virtual_network_name Subnet#virtual_network_name}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetConfig.property.addressPrefixes">address_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#address_prefixes Subnet#address_prefixes}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetConfig.property.defaultOutboundAccessEnabled">default_outbound_access_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#default_outbound_access_enabled Subnet#default_outbound_access_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetConfig.property.delegation">delegation</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.subnet.SubnetDelegation">SubnetDelegation</a>]</code> | delegation block. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#id Subnet#id}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetConfig.property.ipAddressPool">ip_address_pool</a></code> | <code><a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPool">SubnetIpAddressPool</a></code> | ip_address_pool block. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetConfig.property.networkSecurityGroupIdWo">network_security_group_id_wo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#network_security_group_id_wo Subnet#network_security_group_id_wo}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetConfig.property.networkSecurityGroupIdWoVersion">network_security_group_id_wo_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#network_security_group_id_wo_version Subnet#network_security_group_id_wo_version}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetConfig.property.privateEndpointNetworkPolicies">private_endpoint_network_policies</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#private_endpoint_network_policies Subnet#private_endpoint_network_policies}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetConfig.property.privateLinkServiceNetworkPoliciesEnabled">private_link_service_network_policies_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#private_link_service_network_policies_enabled Subnet#private_link_service_network_policies_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetConfig.property.routeTableIdWo">route_table_id_wo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#route_table_id_wo Subnet#route_table_id_wo}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetConfig.property.routeTableIdWoVersion">route_table_id_wo_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#route_table_id_wo_version Subnet#route_table_id_wo_version}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetConfig.property.serviceEndpoint">service_endpoint</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpoint">SubnetServiceEndpoint</a>]</code> | service_endpoint block. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetConfig.property.serviceEndpointPolicyIds">service_endpoint_policy_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#service_endpoint_policy_ids Subnet#service_endpoint_policy_ids}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetConfig.property.sharingScope">sharing_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#sharing_scope Subnet#sharing_scope}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeouts">SubnetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.subnet.SubnetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.subnet.SubnetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.subnet.SubnetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.subnet.SubnetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.subnet.SubnetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.subnet.SubnetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.subnet.SubnetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.subnet.SubnetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#name Subnet#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.subnet.SubnetConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#resource_group_name Subnet#resource_group_name}.

---

##### `virtual_network_name`<sup>Required</sup> <a name="virtual_network_name" id="@cdktn/provider-azurerm.subnet.SubnetConfig.property.virtualNetworkName"></a>

```python
virtual_network_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#virtual_network_name Subnet#virtual_network_name}.

---

##### `address_prefixes`<sup>Optional</sup> <a name="address_prefixes" id="@cdktn/provider-azurerm.subnet.SubnetConfig.property.addressPrefixes"></a>

```python
address_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#address_prefixes Subnet#address_prefixes}.

---

##### `default_outbound_access_enabled`<sup>Optional</sup> <a name="default_outbound_access_enabled" id="@cdktn/provider-azurerm.subnet.SubnetConfig.property.defaultOutboundAccessEnabled"></a>

```python
default_outbound_access_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#default_outbound_access_enabled Subnet#default_outbound_access_enabled}.

---

##### `delegation`<sup>Optional</sup> <a name="delegation" id="@cdktn/provider-azurerm.subnet.SubnetConfig.property.delegation"></a>

```python
delegation: IResolvable | typing.List[SubnetDelegation]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.subnet.SubnetDelegation">SubnetDelegation</a>]

delegation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#delegation Subnet#delegation}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.subnet.SubnetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#id Subnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_address_pool`<sup>Optional</sup> <a name="ip_address_pool" id="@cdktn/provider-azurerm.subnet.SubnetConfig.property.ipAddressPool"></a>

```python
ip_address_pool: SubnetIpAddressPool
```

- *Type:* <a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPool">SubnetIpAddressPool</a>

ip_address_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#ip_address_pool Subnet#ip_address_pool}

---

##### `network_security_group_id_wo`<sup>Optional</sup> <a name="network_security_group_id_wo" id="@cdktn/provider-azurerm.subnet.SubnetConfig.property.networkSecurityGroupIdWo"></a>

```python
network_security_group_id_wo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#network_security_group_id_wo Subnet#network_security_group_id_wo}.

---

##### `network_security_group_id_wo_version`<sup>Optional</sup> <a name="network_security_group_id_wo_version" id="@cdktn/provider-azurerm.subnet.SubnetConfig.property.networkSecurityGroupIdWoVersion"></a>

```python
network_security_group_id_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#network_security_group_id_wo_version Subnet#network_security_group_id_wo_version}.

---

##### `private_endpoint_network_policies`<sup>Optional</sup> <a name="private_endpoint_network_policies" id="@cdktn/provider-azurerm.subnet.SubnetConfig.property.privateEndpointNetworkPolicies"></a>

```python
private_endpoint_network_policies: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#private_endpoint_network_policies Subnet#private_endpoint_network_policies}.

---

##### `private_link_service_network_policies_enabled`<sup>Optional</sup> <a name="private_link_service_network_policies_enabled" id="@cdktn/provider-azurerm.subnet.SubnetConfig.property.privateLinkServiceNetworkPoliciesEnabled"></a>

```python
private_link_service_network_policies_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#private_link_service_network_policies_enabled Subnet#private_link_service_network_policies_enabled}.

---

##### `route_table_id_wo`<sup>Optional</sup> <a name="route_table_id_wo" id="@cdktn/provider-azurerm.subnet.SubnetConfig.property.routeTableIdWo"></a>

```python
route_table_id_wo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#route_table_id_wo Subnet#route_table_id_wo}.

---

##### `route_table_id_wo_version`<sup>Optional</sup> <a name="route_table_id_wo_version" id="@cdktn/provider-azurerm.subnet.SubnetConfig.property.routeTableIdWoVersion"></a>

```python
route_table_id_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#route_table_id_wo_version Subnet#route_table_id_wo_version}.

---

##### `service_endpoint`<sup>Optional</sup> <a name="service_endpoint" id="@cdktn/provider-azurerm.subnet.SubnetConfig.property.serviceEndpoint"></a>

```python
service_endpoint: IResolvable | typing.List[SubnetServiceEndpoint]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpoint">SubnetServiceEndpoint</a>]

service_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#service_endpoint Subnet#service_endpoint}

---

##### `service_endpoint_policy_ids`<sup>Optional</sup> <a name="service_endpoint_policy_ids" id="@cdktn/provider-azurerm.subnet.SubnetConfig.property.serviceEndpointPolicyIds"></a>

```python
service_endpoint_policy_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#service_endpoint_policy_ids Subnet#service_endpoint_policy_ids}.

---

##### `sharing_scope`<sup>Optional</sup> <a name="sharing_scope" id="@cdktn/provider-azurerm.subnet.SubnetConfig.property.sharingScope"></a>

```python
sharing_scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#sharing_scope Subnet#sharing_scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.subnet.SubnetConfig.property.timeouts"></a>

```python
timeouts: SubnetTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.subnet.SubnetTimeouts">SubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#timeouts Subnet#timeouts}

---

### SubnetDelegation <a name="SubnetDelegation" id="@cdktn/provider-azurerm.subnet.SubnetDelegation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.subnet.SubnetDelegation.Initializer"></a>

```python
from cdktn_provider_azurerm import subnet

subnet.SubnetDelegation(
  name: str,
  service_delegation: SubnetDelegationServiceDelegation
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegation.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#name Subnet#name}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegation.property.serviceDelegation">service_delegation</a></code> | <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegation">SubnetDelegationServiceDelegation</a></code> | service_delegation block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.subnet.SubnetDelegation.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#name Subnet#name}.

---

##### `service_delegation`<sup>Required</sup> <a name="service_delegation" id="@cdktn/provider-azurerm.subnet.SubnetDelegation.property.serviceDelegation"></a>

```python
service_delegation: SubnetDelegationServiceDelegation
```

- *Type:* <a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegation">SubnetDelegationServiceDelegation</a>

service_delegation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#service_delegation Subnet#service_delegation}

---

### SubnetDelegationServiceDelegation <a name="SubnetDelegationServiceDelegation" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegation.Initializer"></a>

```python
from cdktn_provider_azurerm import subnet

subnet.SubnetDelegationServiceDelegation(
  name: str,
  actions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegation.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#name Subnet#name}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegation.property.actions">actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#actions Subnet#actions}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegation.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#name Subnet#name}.

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegation.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#actions Subnet#actions}.

---

### SubnetIpAddressPool <a name="SubnetIpAddressPool" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPool.Initializer"></a>

```python
from cdktn_provider_azurerm import subnet

subnet.SubnetIpAddressPool(
  id: str,
  number_of_ip_addresses: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPool.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#id Subnet#id}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPool.property.numberOfIpAddresses">number_of_ip_addresses</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#number_of_ip_addresses Subnet#number_of_ip_addresses}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPool.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#id Subnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `number_of_ip_addresses`<sup>Required</sup> <a name="number_of_ip_addresses" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPool.property.numberOfIpAddresses"></a>

```python
number_of_ip_addresses: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#number_of_ip_addresses Subnet#number_of_ip_addresses}.

---

### SubnetServiceEndpoint <a name="SubnetServiceEndpoint" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpoint.Initializer"></a>

```python
from cdktn_provider_azurerm import subnet

subnet.SubnetServiceEndpoint(
  service: str,
  network_identifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpoint.property.service">service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#service Subnet#service}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpoint.property.networkIdentifier">network_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#network_identifier Subnet#network_identifier}. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpoint.property.service"></a>

```python
service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#service Subnet#service}.

---

##### `network_identifier`<sup>Optional</sup> <a name="network_identifier" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpoint.property.networkIdentifier"></a>

```python
network_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#network_identifier Subnet#network_identifier}.

---

### SubnetTimeouts <a name="SubnetTimeouts" id="@cdktn/provider-azurerm.subnet.SubnetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.subnet.SubnetTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import subnet

subnet.SubnetTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#create Subnet#create}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#delete Subnet#delete}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#read Subnet#read}. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#update Subnet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.subnet.SubnetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#create Subnet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.subnet.SubnetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#delete Subnet#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.subnet.SubnetTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#read Subnet#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.subnet.SubnetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#update Subnet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SubnetDelegationList <a name="SubnetDelegationList" id="@cdktn/provider-azurerm.subnet.SubnetDelegationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.subnet.SubnetDelegationList.Initializer"></a>

```python
from cdktn_provider_azurerm import subnet

subnet.SubnetDelegationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.subnet.SubnetDelegationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.subnet.SubnetDelegationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.subnet.SubnetDelegationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.subnet.SubnetDelegationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.subnet.SubnetDelegationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.subnet.SubnetDelegationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.subnet.SubnetDelegationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.subnet.SubnetDelegationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.subnet.SubnetDelegationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SubnetDelegationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.subnet.SubnetDelegationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.subnet.SubnetDelegation">SubnetDelegation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.subnet.SubnetDelegationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.subnet.SubnetDelegationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.subnet.SubnetDelegationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SubnetDelegation]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.subnet.SubnetDelegation">SubnetDelegation</a>]

---


### SubnetDelegationOutputReference <a name="SubnetDelegationOutputReference" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import subnet

subnet.SubnetDelegationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.putServiceDelegation">put_service_delegation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_service_delegation` <a name="put_service_delegation" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.putServiceDelegation"></a>

```python
def put_service_delegation(
  name: str,
  actions: typing.List[str] = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.putServiceDelegation.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#name Subnet#name}.

---

###### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.putServiceDelegation.parameter.actions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/subnet#actions Subnet#actions}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.property.serviceDelegation">service_delegation</a></code> | <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference">SubnetDelegationServiceDelegationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.property.serviceDelegationInput">service_delegation_input</a></code> | <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegation">SubnetDelegationServiceDelegation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.subnet.SubnetDelegation">SubnetDelegation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_delegation`<sup>Required</sup> <a name="service_delegation" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.property.serviceDelegation"></a>

```python
service_delegation: SubnetDelegationServiceDelegationOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference">SubnetDelegationServiceDelegationOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `service_delegation_input`<sup>Optional</sup> <a name="service_delegation_input" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.property.serviceDelegationInput"></a>

```python
service_delegation_input: SubnetDelegationServiceDelegation
```

- *Type:* <a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegation">SubnetDelegationServiceDelegation</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.subnet.SubnetDelegationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SubnetDelegation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.subnet.SubnetDelegation">SubnetDelegation</a>

---


### SubnetDelegationServiceDelegationOutputReference <a name="SubnetDelegationServiceDelegationOutputReference" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import subnet

subnet.SubnetDelegationServiceDelegationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.resetActions">reset_actions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_actions` <a name="reset_actions" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.resetActions"></a>

```python
def reset_actions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.actionsInput">actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegation">SubnetDelegationServiceDelegation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.actionsInput"></a>

```python
actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.internalValue"></a>

```python
internal_value: SubnetDelegationServiceDelegation
```

- *Type:* <a href="#@cdktn/provider-azurerm.subnet.SubnetDelegationServiceDelegation">SubnetDelegationServiceDelegation</a>

---


### SubnetIpAddressPoolOutputReference <a name="SubnetIpAddressPoolOutputReference" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import subnet

subnet.SubnetIpAddressPoolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.property.allocatedIpAddressPrefixes">allocated_ip_address_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.property.numberOfIpAddressesInput">number_of_ip_addresses_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.property.numberOfIpAddresses">number_of_ip_addresses</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPool">SubnetIpAddressPool</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocated_ip_address_prefixes`<sup>Required</sup> <a name="allocated_ip_address_prefixes" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.property.allocatedIpAddressPrefixes"></a>

```python
allocated_ip_address_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `number_of_ip_addresses_input`<sup>Optional</sup> <a name="number_of_ip_addresses_input" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.property.numberOfIpAddressesInput"></a>

```python
number_of_ip_addresses_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `number_of_ip_addresses`<sup>Required</sup> <a name="number_of_ip_addresses" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.property.numberOfIpAddresses"></a>

```python
number_of_ip_addresses: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference.property.internalValue"></a>

```python
internal_value: SubnetIpAddressPool
```

- *Type:* <a href="#@cdktn/provider-azurerm.subnet.SubnetIpAddressPool">SubnetIpAddressPool</a>

---


### SubnetServiceEndpointList <a name="SubnetServiceEndpointList" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointList.Initializer"></a>

```python
from cdktn_provider_azurerm import subnet

subnet.SubnetServiceEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SubnetServiceEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpoint">SubnetServiceEndpoint</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SubnetServiceEndpoint]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpoint">SubnetServiceEndpoint</a>]

---


### SubnetServiceEndpointOutputReference <a name="SubnetServiceEndpointOutputReference" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import subnet

subnet.SubnetServiceEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.resetNetworkIdentifier">reset_network_identifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_network_identifier` <a name="reset_network_identifier" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.resetNetworkIdentifier"></a>

```python
def reset_network_identifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.property.networkIdentifierInput">network_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.property.networkIdentifier">network_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpoint">SubnetServiceEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_identifier_input`<sup>Optional</sup> <a name="network_identifier_input" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.property.networkIdentifierInput"></a>

```python
network_identifier_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `network_identifier`<sup>Required</sup> <a name="network_identifier" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.property.networkIdentifier"></a>

```python
network_identifier: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.subnet.SubnetServiceEndpointOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SubnetServiceEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.subnet.SubnetServiceEndpoint">SubnetServiceEndpoint</a>

---


### SubnetTimeoutsOutputReference <a name="SubnetTimeoutsOutputReference" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import subnet

subnet.SubnetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.subnet.SubnetTimeouts">SubnetTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SubnetTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.subnet.SubnetTimeouts">SubnetTimeouts</a>

---



