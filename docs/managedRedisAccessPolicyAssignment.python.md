# `managedRedisAccessPolicyAssignment` Submodule <a name="`managedRedisAccessPolicyAssignment` Submodule" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedRedisAccessPolicyAssignment <a name="ManagedRedisAccessPolicyAssignment" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_redis_access_policy_assignment azurerm_managed_redis_access_policy_assignment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_redis_access_policy_assignment

managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  managed_redis_id: str,
  object_id: str,
  id: str = None,
  timeouts: ManagedRedisAccessPolicyAssignmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer.parameter.managedRedisId">managed_redis_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_redis_access_policy_assignment#managed_redis_id ManagedRedisAccessPolicyAssignment#managed_redis_id}. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer.parameter.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_redis_access_policy_assignment#object_id ManagedRedisAccessPolicyAssignment#object_id}. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_redis_access_policy_assignment#id ManagedRedisAccessPolicyAssignment#id}. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts">ManagedRedisAccessPolicyAssignmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `managed_redis_id`<sup>Required</sup> <a name="managed_redis_id" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer.parameter.managedRedisId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_redis_access_policy_assignment#managed_redis_id ManagedRedisAccessPolicyAssignment#managed_redis_id}.

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer.parameter.objectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_redis_access_policy_assignment#object_id ManagedRedisAccessPolicyAssignment#object_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_redis_access_policy_assignment#id ManagedRedisAccessPolicyAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts">ManagedRedisAccessPolicyAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_redis_access_policy_assignment#timeouts ManagedRedisAccessPolicyAssignment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_redis_access_policy_assignment#create ManagedRedisAccessPolicyAssignment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_redis_access_policy_assignment#delete ManagedRedisAccessPolicyAssignment#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_redis_access_policy_assignment#read ManagedRedisAccessPolicyAssignment#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ManagedRedisAccessPolicyAssignment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.isConstruct"></a>

```python
from cdktn_provider_azurerm import managed_redis_access_policy_assignment

managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import managed_redis_access_policy_assignment

managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.isTerraformResource"></a>

```python
from cdktn_provider_azurerm import managed_redis_access_policy_assignment

managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import managed_redis_access_policy_assignment

managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ManagedRedisAccessPolicyAssignment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ManagedRedisAccessPolicyAssignment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ManagedRedisAccessPolicyAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_redis_access_policy_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ManagedRedisAccessPolicyAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference">ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.managedRedisIdInput">managed_redis_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.objectIdInput">object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts">ManagedRedisAccessPolicyAssignmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.managedRedisId">managed_redis_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.timeouts"></a>

```python
timeouts: ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference">ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_redis_id_input`<sup>Optional</sup> <a name="managed_redis_id_input" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.managedRedisIdInput"></a>

```python
managed_redis_id_input: str
```

- *Type:* str

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.objectIdInput"></a>

```python
object_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ManagedRedisAccessPolicyAssignmentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts">ManagedRedisAccessPolicyAssignmentTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_redis_id`<sup>Required</sup> <a name="managed_redis_id" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.managedRedisId"></a>

```python
managed_redis_id: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedRedisAccessPolicyAssignmentConfig <a name="ManagedRedisAccessPolicyAssignmentConfig" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_redis_access_policy_assignment

managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  managed_redis_id: str,
  object_id: str,
  id: str = None,
  timeouts: ManagedRedisAccessPolicyAssignmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.managedRedisId">managed_redis_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_redis_access_policy_assignment#managed_redis_id ManagedRedisAccessPolicyAssignment#managed_redis_id}. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_redis_access_policy_assignment#object_id ManagedRedisAccessPolicyAssignment#object_id}. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_redis_access_policy_assignment#id ManagedRedisAccessPolicyAssignment#id}. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts">ManagedRedisAccessPolicyAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `managed_redis_id`<sup>Required</sup> <a name="managed_redis_id" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.managedRedisId"></a>

```python
managed_redis_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_redis_access_policy_assignment#managed_redis_id ManagedRedisAccessPolicyAssignment#managed_redis_id}.

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_redis_access_policy_assignment#object_id ManagedRedisAccessPolicyAssignment#object_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_redis_access_policy_assignment#id ManagedRedisAccessPolicyAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.timeouts"></a>

```python
timeouts: ManagedRedisAccessPolicyAssignmentTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts">ManagedRedisAccessPolicyAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_redis_access_policy_assignment#timeouts ManagedRedisAccessPolicyAssignment#timeouts}

---

### ManagedRedisAccessPolicyAssignmentTimeouts <a name="ManagedRedisAccessPolicyAssignmentTimeouts" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_redis_access_policy_assignment

managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_redis_access_policy_assignment#create ManagedRedisAccessPolicyAssignment#create}. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_redis_access_policy_assignment#delete ManagedRedisAccessPolicyAssignment#delete}. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_redis_access_policy_assignment#read ManagedRedisAccessPolicyAssignment#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_redis_access_policy_assignment#create ManagedRedisAccessPolicyAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_redis_access_policy_assignment#delete ManagedRedisAccessPolicyAssignment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_redis_access_policy_assignment#read ManagedRedisAccessPolicyAssignment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference <a name="ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_redis_access_policy_assignment

managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts">ManagedRedisAccessPolicyAssignmentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ManagedRedisAccessPolicyAssignmentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts">ManagedRedisAccessPolicyAssignmentTimeouts</a>

---



