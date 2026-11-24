# `horizondbFirewallRule` Submodule <a name="`horizondbFirewallRule` Submodule" id="@cdktn/provider-azurerm.horizondbFirewallRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HorizondbFirewallRule <a name="HorizondbFirewallRule" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule azurerm_horizondb_firewall_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.Initializer"></a>

```python
from cdktn_provider_azurerm import horizondb_firewall_rule

horizondbFirewallRule.HorizondbFirewallRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  end_ip_address: str,
  horizondb_pool_id: str,
  name: str,
  start_ip_address: str,
  id: str = None,
  timeouts: HorizondbFirewallRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.Initializer.parameter.endIpAddress">end_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#end_ip_address HorizondbFirewallRule#end_ip_address}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.Initializer.parameter.horizondbPoolId">horizondb_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#horizondb_pool_id HorizondbFirewallRule#horizondb_pool_id}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#name HorizondbFirewallRule#name}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.Initializer.parameter.startIpAddress">start_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#start_ip_address HorizondbFirewallRule#start_ip_address}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#id HorizondbFirewallRule#id}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeouts">HorizondbFirewallRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `end_ip_address`<sup>Required</sup> <a name="end_ip_address" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.Initializer.parameter.endIpAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#end_ip_address HorizondbFirewallRule#end_ip_address}.

---

##### `horizondb_pool_id`<sup>Required</sup> <a name="horizondb_pool_id" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.Initializer.parameter.horizondbPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#horizondb_pool_id HorizondbFirewallRule#horizondb_pool_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#name HorizondbFirewallRule#name}.

---

##### `start_ip_address`<sup>Required</sup> <a name="start_ip_address" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.Initializer.parameter.startIpAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#start_ip_address HorizondbFirewallRule#start_ip_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#id HorizondbFirewallRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeouts">HorizondbFirewallRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#timeouts HorizondbFirewallRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#create HorizondbFirewallRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#delete HorizondbFirewallRule#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#read HorizondbFirewallRule#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#update HorizondbFirewallRule#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a HorizondbFirewallRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.isConstruct"></a>

```python
from cdktn_provider_azurerm import horizondb_firewall_rule

horizondbFirewallRule.HorizondbFirewallRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import horizondb_firewall_rule

horizondbFirewallRule.HorizondbFirewallRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.isTerraformResource"></a>

```python
from cdktn_provider_azurerm import horizondb_firewall_rule

horizondbFirewallRule.HorizondbFirewallRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import horizondb_firewall_rule

horizondbFirewallRule.HorizondbFirewallRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a HorizondbFirewallRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the HorizondbFirewallRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing HorizondbFirewallRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the HorizondbFirewallRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference">HorizondbFirewallRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.endIpAddressInput">end_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.horizondbPoolIdInput">horizondb_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.startIpAddressInput">start_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeouts">HorizondbFirewallRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.endIpAddress">end_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.horizondbPoolId">horizondb_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.startIpAddress">start_ip_address</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.timeouts"></a>

```python
timeouts: HorizondbFirewallRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference">HorizondbFirewallRuleTimeoutsOutputReference</a>

---

##### `end_ip_address_input`<sup>Optional</sup> <a name="end_ip_address_input" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.endIpAddressInput"></a>

```python
end_ip_address_input: str
```

- *Type:* str

---

##### `horizondb_pool_id_input`<sup>Optional</sup> <a name="horizondb_pool_id_input" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.horizondbPoolIdInput"></a>

```python
horizondb_pool_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `start_ip_address_input`<sup>Optional</sup> <a name="start_ip_address_input" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.startIpAddressInput"></a>

```python
start_ip_address_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | HorizondbFirewallRuleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeouts">HorizondbFirewallRuleTimeouts</a>

---

##### `end_ip_address`<sup>Required</sup> <a name="end_ip_address" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.endIpAddress"></a>

```python
end_ip_address: str
```

- *Type:* str

---

##### `horizondb_pool_id`<sup>Required</sup> <a name="horizondb_pool_id" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.horizondbPoolId"></a>

```python
horizondb_pool_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `start_ip_address`<sup>Required</sup> <a name="start_ip_address" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.startIpAddress"></a>

```python
start_ip_address: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HorizondbFirewallRuleConfig <a name="HorizondbFirewallRuleConfig" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import horizondb_firewall_rule

horizondbFirewallRule.HorizondbFirewallRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  end_ip_address: str,
  horizondb_pool_id: str,
  name: str,
  start_ip_address: str,
  id: str = None,
  timeouts: HorizondbFirewallRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleConfig.property.endIpAddress">end_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#end_ip_address HorizondbFirewallRule#end_ip_address}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleConfig.property.horizondbPoolId">horizondb_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#horizondb_pool_id HorizondbFirewallRule#horizondb_pool_id}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#name HorizondbFirewallRule#name}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleConfig.property.startIpAddress">start_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#start_ip_address HorizondbFirewallRule#start_ip_address}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#id HorizondbFirewallRule#id}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeouts">HorizondbFirewallRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `end_ip_address`<sup>Required</sup> <a name="end_ip_address" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleConfig.property.endIpAddress"></a>

```python
end_ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#end_ip_address HorizondbFirewallRule#end_ip_address}.

---

##### `horizondb_pool_id`<sup>Required</sup> <a name="horizondb_pool_id" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleConfig.property.horizondbPoolId"></a>

```python
horizondb_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#horizondb_pool_id HorizondbFirewallRule#horizondb_pool_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#name HorizondbFirewallRule#name}.

---

##### `start_ip_address`<sup>Required</sup> <a name="start_ip_address" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleConfig.property.startIpAddress"></a>

```python
start_ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#start_ip_address HorizondbFirewallRule#start_ip_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#id HorizondbFirewallRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleConfig.property.timeouts"></a>

```python
timeouts: HorizondbFirewallRuleTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeouts">HorizondbFirewallRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#timeouts HorizondbFirewallRule#timeouts}

---

### HorizondbFirewallRuleTimeouts <a name="HorizondbFirewallRuleTimeouts" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import horizondb_firewall_rule

horizondbFirewallRule.HorizondbFirewallRuleTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#create HorizondbFirewallRule#create}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#delete HorizondbFirewallRule#delete}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#read HorizondbFirewallRule#read}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#update HorizondbFirewallRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#create HorizondbFirewallRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#delete HorizondbFirewallRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#read HorizondbFirewallRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_firewall_rule#update HorizondbFirewallRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HorizondbFirewallRuleTimeoutsOutputReference <a name="HorizondbFirewallRuleTimeoutsOutputReference" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import horizondb_firewall_rule

horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeouts">HorizondbFirewallRuleTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | HorizondbFirewallRuleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.horizondbFirewallRule.HorizondbFirewallRuleTimeouts">HorizondbFirewallRuleTimeouts</a>

---



