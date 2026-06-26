# `databricksVirtualNetworkPeering` Submodule <a name="`databricksVirtualNetworkPeering` Submodule" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabricksVirtualNetworkPeering <a name="DatabricksVirtualNetworkPeering" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering azurerm_databricks_virtual_network_peering}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer"></a>

```python
from cdktn_provider_azurerm import databricks_virtual_network_peering

databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering(
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
  remote_address_space_prefixes: typing.List[str],
  remote_virtual_network_id: str,
  resource_group_name: str,
  workspace_id: str,
  allow_forwarded_traffic: bool | IResolvable = None,
  allow_gateway_transit: bool | IResolvable = None,
  allow_virtual_network_access: bool | IResolvable = None,
  id: str = None,
  timeouts: DatabricksVirtualNetworkPeeringTimeouts = None,
  use_remote_gateways: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#name DatabricksVirtualNetworkPeering#name}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.remoteAddressSpacePrefixes">remote_address_space_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#remote_address_space_prefixes DatabricksVirtualNetworkPeering#remote_address_space_prefixes}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.remoteVirtualNetworkId">remote_virtual_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#remote_virtual_network_id DatabricksVirtualNetworkPeering#remote_virtual_network_id}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#resource_group_name DatabricksVirtualNetworkPeering#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#workspace_id DatabricksVirtualNetworkPeering#workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.allowForwardedTraffic">allow_forwarded_traffic</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#allow_forwarded_traffic DatabricksVirtualNetworkPeering#allow_forwarded_traffic}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.allowGatewayTransit">allow_gateway_transit</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#allow_gateway_transit DatabricksVirtualNetworkPeering#allow_gateway_transit}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.allowVirtualNetworkAccess">allow_virtual_network_access</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#allow_virtual_network_access DatabricksVirtualNetworkPeering#allow_virtual_network_access}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#id DatabricksVirtualNetworkPeering#id}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.useRemoteGateways">use_remote_gateways</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#use_remote_gateways DatabricksVirtualNetworkPeering#use_remote_gateways}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#name DatabricksVirtualNetworkPeering#name}.

---

##### `remote_address_space_prefixes`<sup>Required</sup> <a name="remote_address_space_prefixes" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.remoteAddressSpacePrefixes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#remote_address_space_prefixes DatabricksVirtualNetworkPeering#remote_address_space_prefixes}.

---

##### `remote_virtual_network_id`<sup>Required</sup> <a name="remote_virtual_network_id" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.remoteVirtualNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#remote_virtual_network_id DatabricksVirtualNetworkPeering#remote_virtual_network_id}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#resource_group_name DatabricksVirtualNetworkPeering#resource_group_name}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#workspace_id DatabricksVirtualNetworkPeering#workspace_id}.

---

##### `allow_forwarded_traffic`<sup>Optional</sup> <a name="allow_forwarded_traffic" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.allowForwardedTraffic"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#allow_forwarded_traffic DatabricksVirtualNetworkPeering#allow_forwarded_traffic}.

---

##### `allow_gateway_transit`<sup>Optional</sup> <a name="allow_gateway_transit" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.allowGatewayTransit"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#allow_gateway_transit DatabricksVirtualNetworkPeering#allow_gateway_transit}.

---

##### `allow_virtual_network_access`<sup>Optional</sup> <a name="allow_virtual_network_access" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.allowVirtualNetworkAccess"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#allow_virtual_network_access DatabricksVirtualNetworkPeering#allow_virtual_network_access}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#id DatabricksVirtualNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#timeouts DatabricksVirtualNetworkPeering#timeouts}

---

##### `use_remote_gateways`<sup>Optional</sup> <a name="use_remote_gateways" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.useRemoteGateways"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#use_remote_gateways DatabricksVirtualNetworkPeering#use_remote_gateways}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetAllowForwardedTraffic">reset_allow_forwarded_traffic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetAllowGatewayTransit">reset_allow_gateway_transit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetAllowVirtualNetworkAccess">reset_allow_virtual_network_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetUseRemoteGateways">reset_use_remote_gateways</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#create DatabricksVirtualNetworkPeering#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#delete DatabricksVirtualNetworkPeering#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#read DatabricksVirtualNetworkPeering#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#update DatabricksVirtualNetworkPeering#update}.

---

##### `reset_allow_forwarded_traffic` <a name="reset_allow_forwarded_traffic" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetAllowForwardedTraffic"></a>

```python
def reset_allow_forwarded_traffic() -> None
```

##### `reset_allow_gateway_transit` <a name="reset_allow_gateway_transit" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetAllowGatewayTransit"></a>

```python
def reset_allow_gateway_transit() -> None
```

##### `reset_allow_virtual_network_access` <a name="reset_allow_virtual_network_access" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetAllowVirtualNetworkAccess"></a>

```python
def reset_allow_virtual_network_access() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_use_remote_gateways` <a name="reset_use_remote_gateways" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetUseRemoteGateways"></a>

```python
def reset_use_remote_gateways() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DatabricksVirtualNetworkPeering resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isConstruct"></a>

```python
from cdktn_provider_azurerm import databricks_virtual_network_peering

databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import databricks_virtual_network_peering

databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isTerraformResource"></a>

```python
from cdktn_provider_azurerm import databricks_virtual_network_peering

databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import databricks_virtual_network_peering

databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DatabricksVirtualNetworkPeering resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabricksVirtualNetworkPeering to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabricksVirtualNetworkPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatabricksVirtualNetworkPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.addressSpacePrefixes">address_space_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference">DatabricksVirtualNetworkPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowForwardedTrafficInput">allow_forwarded_traffic_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowGatewayTransitInput">allow_gateway_transit_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowVirtualNetworkAccessInput">allow_virtual_network_access_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteAddressSpacePrefixesInput">remote_address_space_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteVirtualNetworkIdInput">remote_virtual_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.useRemoteGatewaysInput">use_remote_gateways_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowForwardedTraffic">allow_forwarded_traffic</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowGatewayTransit">allow_gateway_transit</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowVirtualNetworkAccess">allow_virtual_network_access</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteAddressSpacePrefixes">remote_address_space_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteVirtualNetworkId">remote_virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.useRemoteGateways">use_remote_gateways</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `address_space_prefixes`<sup>Required</sup> <a name="address_space_prefixes" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.addressSpacePrefixes"></a>

```python
address_space_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.timeouts"></a>

```python
timeouts: DatabricksVirtualNetworkPeeringTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference">DatabricksVirtualNetworkPeeringTimeoutsOutputReference</a>

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

##### `allow_forwarded_traffic_input`<sup>Optional</sup> <a name="allow_forwarded_traffic_input" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowForwardedTrafficInput"></a>

```python
allow_forwarded_traffic_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allow_gateway_transit_input`<sup>Optional</sup> <a name="allow_gateway_transit_input" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowGatewayTransitInput"></a>

```python
allow_gateway_transit_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allow_virtual_network_access_input`<sup>Optional</sup> <a name="allow_virtual_network_access_input" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowVirtualNetworkAccessInput"></a>

```python
allow_virtual_network_access_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `remote_address_space_prefixes_input`<sup>Optional</sup> <a name="remote_address_space_prefixes_input" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteAddressSpacePrefixesInput"></a>

```python
remote_address_space_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `remote_virtual_network_id_input`<sup>Optional</sup> <a name="remote_virtual_network_id_input" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteVirtualNetworkIdInput"></a>

```python
remote_virtual_network_id_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DatabricksVirtualNetworkPeeringTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a>

---

##### `use_remote_gateways_input`<sup>Optional</sup> <a name="use_remote_gateways_input" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.useRemoteGatewaysInput"></a>

```python
use_remote_gateways_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `allow_forwarded_traffic`<sup>Required</sup> <a name="allow_forwarded_traffic" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowForwardedTraffic"></a>

```python
allow_forwarded_traffic: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allow_gateway_transit`<sup>Required</sup> <a name="allow_gateway_transit" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowGatewayTransit"></a>

```python
allow_gateway_transit: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allow_virtual_network_access`<sup>Required</sup> <a name="allow_virtual_network_access" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowVirtualNetworkAccess"></a>

```python
allow_virtual_network_access: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `remote_address_space_prefixes`<sup>Required</sup> <a name="remote_address_space_prefixes" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteAddressSpacePrefixes"></a>

```python
remote_address_space_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `remote_virtual_network_id`<sup>Required</sup> <a name="remote_virtual_network_id" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteVirtualNetworkId"></a>

```python
remote_virtual_network_id: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `use_remote_gateways`<sup>Required</sup> <a name="use_remote_gateways" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.useRemoteGateways"></a>

```python
use_remote_gateways: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabricksVirtualNetworkPeeringConfig <a name="DatabricksVirtualNetworkPeeringConfig" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import databricks_virtual_network_peering

databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  remote_address_space_prefixes: typing.List[str],
  remote_virtual_network_id: str,
  resource_group_name: str,
  workspace_id: str,
  allow_forwarded_traffic: bool | IResolvable = None,
  allow_gateway_transit: bool | IResolvable = None,
  allow_virtual_network_access: bool | IResolvable = None,
  id: str = None,
  timeouts: DatabricksVirtualNetworkPeeringTimeouts = None,
  use_remote_gateways: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#name DatabricksVirtualNetworkPeering#name}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.remoteAddressSpacePrefixes">remote_address_space_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#remote_address_space_prefixes DatabricksVirtualNetworkPeering#remote_address_space_prefixes}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.remoteVirtualNetworkId">remote_virtual_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#remote_virtual_network_id DatabricksVirtualNetworkPeering#remote_virtual_network_id}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#resource_group_name DatabricksVirtualNetworkPeering#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#workspace_id DatabricksVirtualNetworkPeering#workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.allowForwardedTraffic">allow_forwarded_traffic</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#allow_forwarded_traffic DatabricksVirtualNetworkPeering#allow_forwarded_traffic}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.allowGatewayTransit">allow_gateway_transit</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#allow_gateway_transit DatabricksVirtualNetworkPeering#allow_gateway_transit}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.allowVirtualNetworkAccess">allow_virtual_network_access</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#allow_virtual_network_access DatabricksVirtualNetworkPeering#allow_virtual_network_access}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#id DatabricksVirtualNetworkPeering#id}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.useRemoteGateways">use_remote_gateways</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#use_remote_gateways DatabricksVirtualNetworkPeering#use_remote_gateways}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#name DatabricksVirtualNetworkPeering#name}.

---

##### `remote_address_space_prefixes`<sup>Required</sup> <a name="remote_address_space_prefixes" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.remoteAddressSpacePrefixes"></a>

```python
remote_address_space_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#remote_address_space_prefixes DatabricksVirtualNetworkPeering#remote_address_space_prefixes}.

---

##### `remote_virtual_network_id`<sup>Required</sup> <a name="remote_virtual_network_id" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.remoteVirtualNetworkId"></a>

```python
remote_virtual_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#remote_virtual_network_id DatabricksVirtualNetworkPeering#remote_virtual_network_id}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#resource_group_name DatabricksVirtualNetworkPeering#resource_group_name}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#workspace_id DatabricksVirtualNetworkPeering#workspace_id}.

---

##### `allow_forwarded_traffic`<sup>Optional</sup> <a name="allow_forwarded_traffic" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.allowForwardedTraffic"></a>

```python
allow_forwarded_traffic: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#allow_forwarded_traffic DatabricksVirtualNetworkPeering#allow_forwarded_traffic}.

---

##### `allow_gateway_transit`<sup>Optional</sup> <a name="allow_gateway_transit" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.allowGatewayTransit"></a>

```python
allow_gateway_transit: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#allow_gateway_transit DatabricksVirtualNetworkPeering#allow_gateway_transit}.

---

##### `allow_virtual_network_access`<sup>Optional</sup> <a name="allow_virtual_network_access" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.allowVirtualNetworkAccess"></a>

```python
allow_virtual_network_access: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#allow_virtual_network_access DatabricksVirtualNetworkPeering#allow_virtual_network_access}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#id DatabricksVirtualNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.timeouts"></a>

```python
timeouts: DatabricksVirtualNetworkPeeringTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#timeouts DatabricksVirtualNetworkPeering#timeouts}

---

##### `use_remote_gateways`<sup>Optional</sup> <a name="use_remote_gateways" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.useRemoteGateways"></a>

```python
use_remote_gateways: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#use_remote_gateways DatabricksVirtualNetworkPeering#use_remote_gateways}.

---

### DatabricksVirtualNetworkPeeringTimeouts <a name="DatabricksVirtualNetworkPeeringTimeouts" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import databricks_virtual_network_peering

databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#create DatabricksVirtualNetworkPeering#create}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#delete DatabricksVirtualNetworkPeering#delete}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#read DatabricksVirtualNetworkPeering#read}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#update DatabricksVirtualNetworkPeering#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#create DatabricksVirtualNetworkPeering#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#delete DatabricksVirtualNetworkPeering#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#read DatabricksVirtualNetworkPeering#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/databricks_virtual_network_peering#update DatabricksVirtualNetworkPeering#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabricksVirtualNetworkPeeringTimeoutsOutputReference <a name="DatabricksVirtualNetworkPeeringTimeoutsOutputReference" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import databricks_virtual_network_peering

databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabricksVirtualNetworkPeeringTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a>

---



