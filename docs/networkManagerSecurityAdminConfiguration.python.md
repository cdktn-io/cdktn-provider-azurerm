# `networkManagerSecurityAdminConfiguration` Submodule <a name="`networkManagerSecurityAdminConfiguration` Submodule" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagerSecurityAdminConfiguration <a name="NetworkManagerSecurityAdminConfiguration" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration azurerm_network_manager_security_admin_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer"></a>

```python
from cdktn_provider_azurerm import network_manager_security_admin_configuration

networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration(
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
  network_manager_id: str,
  apply_on_network_intent_policy_based_services: typing.List[str] = None,
  description: str = None,
  id: str = None,
  timeouts: NetworkManagerSecurityAdminConfigurationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#name NetworkManagerSecurityAdminConfiguration#name}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.networkManagerId">network_manager_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#network_manager_id NetworkManagerSecurityAdminConfiguration#network_manager_id}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.applyOnNetworkIntentPolicyBasedServices">apply_on_network_intent_policy_based_services</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#apply_on_network_intent_policy_based_services NetworkManagerSecurityAdminConfiguration#apply_on_network_intent_policy_based_services}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#description NetworkManagerSecurityAdminConfiguration#description}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#id NetworkManagerSecurityAdminConfiguration#id}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts">NetworkManagerSecurityAdminConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#name NetworkManagerSecurityAdminConfiguration#name}.

---

##### `network_manager_id`<sup>Required</sup> <a name="network_manager_id" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.networkManagerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#network_manager_id NetworkManagerSecurityAdminConfiguration#network_manager_id}.

---

##### `apply_on_network_intent_policy_based_services`<sup>Optional</sup> <a name="apply_on_network_intent_policy_based_services" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.applyOnNetworkIntentPolicyBasedServices"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#apply_on_network_intent_policy_based_services NetworkManagerSecurityAdminConfiguration#apply_on_network_intent_policy_based_services}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#description NetworkManagerSecurityAdminConfiguration#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#id NetworkManagerSecurityAdminConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts">NetworkManagerSecurityAdminConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#timeouts NetworkManagerSecurityAdminConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetApplyOnNetworkIntentPolicyBasedServices">reset_apply_on_network_intent_policy_based_services</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#create NetworkManagerSecurityAdminConfiguration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#delete NetworkManagerSecurityAdminConfiguration#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#read NetworkManagerSecurityAdminConfiguration#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#update NetworkManagerSecurityAdminConfiguration#update}.

---

##### `reset_apply_on_network_intent_policy_based_services` <a name="reset_apply_on_network_intent_policy_based_services" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetApplyOnNetworkIntentPolicyBasedServices"></a>

```python
def reset_apply_on_network_intent_policy_based_services() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworkManagerSecurityAdminConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isConstruct"></a>

```python
from cdktn_provider_azurerm import network_manager_security_admin_configuration

networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import network_manager_security_admin_configuration

networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_azurerm import network_manager_security_admin_configuration

networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import network_manager_security_admin_configuration

networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworkManagerSecurityAdminConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkManagerSecurityAdminConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkManagerSecurityAdminConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkManagerSecurityAdminConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference">NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.applyOnNetworkIntentPolicyBasedServicesInput">apply_on_network_intent_policy_based_services_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.networkManagerIdInput">network_manager_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts">NetworkManagerSecurityAdminConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.applyOnNetworkIntentPolicyBasedServices">apply_on_network_intent_policy_based_services</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.networkManagerId">network_manager_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.timeouts"></a>

```python
timeouts: NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference">NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference</a>

---

##### `apply_on_network_intent_policy_based_services_input`<sup>Optional</sup> <a name="apply_on_network_intent_policy_based_services_input" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.applyOnNetworkIntentPolicyBasedServicesInput"></a>

```python
apply_on_network_intent_policy_based_services_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_manager_id_input`<sup>Optional</sup> <a name="network_manager_id_input" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.networkManagerIdInput"></a>

```python
network_manager_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | NetworkManagerSecurityAdminConfigurationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts">NetworkManagerSecurityAdminConfigurationTimeouts</a>

---

##### `apply_on_network_intent_policy_based_services`<sup>Required</sup> <a name="apply_on_network_intent_policy_based_services" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.applyOnNetworkIntentPolicyBasedServices"></a>

```python
apply_on_network_intent_policy_based_services: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_manager_id`<sup>Required</sup> <a name="network_manager_id" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.networkManagerId"></a>

```python
network_manager_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagerSecurityAdminConfigurationConfig <a name="NetworkManagerSecurityAdminConfigurationConfig" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import network_manager_security_admin_configuration

networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  network_manager_id: str,
  apply_on_network_intent_policy_based_services: typing.List[str] = None,
  description: str = None,
  id: str = None,
  timeouts: NetworkManagerSecurityAdminConfigurationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#name NetworkManagerSecurityAdminConfiguration#name}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.networkManagerId">network_manager_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#network_manager_id NetworkManagerSecurityAdminConfiguration#network_manager_id}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.applyOnNetworkIntentPolicyBasedServices">apply_on_network_intent_policy_based_services</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#apply_on_network_intent_policy_based_services NetworkManagerSecurityAdminConfiguration#apply_on_network_intent_policy_based_services}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#description NetworkManagerSecurityAdminConfiguration#description}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#id NetworkManagerSecurityAdminConfiguration#id}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts">NetworkManagerSecurityAdminConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#name NetworkManagerSecurityAdminConfiguration#name}.

---

##### `network_manager_id`<sup>Required</sup> <a name="network_manager_id" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.networkManagerId"></a>

```python
network_manager_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#network_manager_id NetworkManagerSecurityAdminConfiguration#network_manager_id}.

---

##### `apply_on_network_intent_policy_based_services`<sup>Optional</sup> <a name="apply_on_network_intent_policy_based_services" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.applyOnNetworkIntentPolicyBasedServices"></a>

```python
apply_on_network_intent_policy_based_services: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#apply_on_network_intent_policy_based_services NetworkManagerSecurityAdminConfiguration#apply_on_network_intent_policy_based_services}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#description NetworkManagerSecurityAdminConfiguration#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#id NetworkManagerSecurityAdminConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.timeouts"></a>

```python
timeouts: NetworkManagerSecurityAdminConfigurationTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts">NetworkManagerSecurityAdminConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#timeouts NetworkManagerSecurityAdminConfiguration#timeouts}

---

### NetworkManagerSecurityAdminConfigurationTimeouts <a name="NetworkManagerSecurityAdminConfigurationTimeouts" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import network_manager_security_admin_configuration

networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#create NetworkManagerSecurityAdminConfiguration#create}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#delete NetworkManagerSecurityAdminConfiguration#delete}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#read NetworkManagerSecurityAdminConfiguration#read}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#update NetworkManagerSecurityAdminConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#create NetworkManagerSecurityAdminConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#delete NetworkManagerSecurityAdminConfiguration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#read NetworkManagerSecurityAdminConfiguration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_manager_security_admin_configuration#update NetworkManagerSecurityAdminConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference <a name="NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import network_manager_security_admin_configuration

networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts">NetworkManagerSecurityAdminConfigurationTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkManagerSecurityAdminConfigurationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts">NetworkManagerSecurityAdminConfigurationTimeouts</a>

---



