# `cognitiveAccountConnectionCustomKeys` Submodule <a name="`cognitiveAccountConnectionCustomKeys` Submodule" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitiveAccountConnectionCustomKeys <a name="CognitiveAccountConnectionCustomKeys" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys azurerm_cognitive_account_connection_custom_keys}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer"></a>

```python
from cdktn_provider_azurerm import cognitive_account_connection_custom_keys

cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  category: str,
  cognitive_account_id: str,
  custom_keys: typing.Mapping[str],
  name: str,
  target: str,
  id: str = None,
  metadata: typing.Mapping[str] = None,
  timeouts: CognitiveAccountConnectionCustomKeysTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.category">category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#category CognitiveAccountConnectionCustomKeys#category}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.cognitiveAccountId">cognitive_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#cognitive_account_id CognitiveAccountConnectionCustomKeys#cognitive_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.customKeys">custom_keys</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#custom_keys CognitiveAccountConnectionCustomKeys#custom_keys}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#name CognitiveAccountConnectionCustomKeys#name}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#target CognitiveAccountConnectionCustomKeys#target}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#id CognitiveAccountConnectionCustomKeys#id}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#metadata CognitiveAccountConnectionCustomKeys#metadata}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts">CognitiveAccountConnectionCustomKeysTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.category"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#category CognitiveAccountConnectionCustomKeys#category}.

---

##### `cognitive_account_id`<sup>Required</sup> <a name="cognitive_account_id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.cognitiveAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#cognitive_account_id CognitiveAccountConnectionCustomKeys#cognitive_account_id}.

---

##### `custom_keys`<sup>Required</sup> <a name="custom_keys" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.customKeys"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#custom_keys CognitiveAccountConnectionCustomKeys#custom_keys}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#name CognitiveAccountConnectionCustomKeys#name}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.target"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#target CognitiveAccountConnectionCustomKeys#target}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#id CognitiveAccountConnectionCustomKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#metadata CognitiveAccountConnectionCustomKeys#metadata}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts">CognitiveAccountConnectionCustomKeysTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#timeouts CognitiveAccountConnectionCustomKeys#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#create CognitiveAccountConnectionCustomKeys#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#delete CognitiveAccountConnectionCustomKeys#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#read CognitiveAccountConnectionCustomKeys#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#update CognitiveAccountConnectionCustomKeys#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CognitiveAccountConnectionCustomKeys resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.isConstruct"></a>

```python
from cdktn_provider_azurerm import cognitive_account_connection_custom_keys

cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import cognitive_account_connection_custom_keys

cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.isTerraformResource"></a>

```python
from cdktn_provider_azurerm import cognitive_account_connection_custom_keys

cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import cognitive_account_connection_custom_keys

cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CognitiveAccountConnectionCustomKeys resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CognitiveAccountConnectionCustomKeys to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CognitiveAccountConnectionCustomKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CognitiveAccountConnectionCustomKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference">CognitiveAccountConnectionCustomKeysTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.cognitiveAccountIdInput">cognitive_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.customKeysInput">custom_keys_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts">CognitiveAccountConnectionCustomKeysTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.cognitiveAccountId">cognitive_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.customKeys">custom_keys</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.target">target</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.timeouts"></a>

```python
timeouts: CognitiveAccountConnectionCustomKeysTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference">CognitiveAccountConnectionCustomKeysTimeoutsOutputReference</a>

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `cognitive_account_id_input`<sup>Optional</sup> <a name="cognitive_account_id_input" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.cognitiveAccountIdInput"></a>

```python
cognitive_account_id_input: str
```

- *Type:* str

---

##### `custom_keys_input`<sup>Optional</sup> <a name="custom_keys_input" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.customKeysInput"></a>

```python
custom_keys_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | CognitiveAccountConnectionCustomKeysTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts">CognitiveAccountConnectionCustomKeysTimeouts</a>

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `cognitive_account_id`<sup>Required</sup> <a name="cognitive_account_id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.cognitiveAccountId"></a>

```python
cognitive_account_id: str
```

- *Type:* str

---

##### `custom_keys`<sup>Required</sup> <a name="custom_keys" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.customKeys"></a>

```python
custom_keys: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.target"></a>

```python
target: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CognitiveAccountConnectionCustomKeysConfig <a name="CognitiveAccountConnectionCustomKeysConfig" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import cognitive_account_connection_custom_keys

cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  category: str,
  cognitive_account_id: str,
  custom_keys: typing.Mapping[str],
  name: str,
  target: str,
  id: str = None,
  metadata: typing.Mapping[str] = None,
  timeouts: CognitiveAccountConnectionCustomKeysTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.category">category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#category CognitiveAccountConnectionCustomKeys#category}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.cognitiveAccountId">cognitive_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#cognitive_account_id CognitiveAccountConnectionCustomKeys#cognitive_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.customKeys">custom_keys</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#custom_keys CognitiveAccountConnectionCustomKeys#custom_keys}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#name CognitiveAccountConnectionCustomKeys#name}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#target CognitiveAccountConnectionCustomKeys#target}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#id CognitiveAccountConnectionCustomKeys#id}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#metadata CognitiveAccountConnectionCustomKeys#metadata}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts">CognitiveAccountConnectionCustomKeysTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.category"></a>

```python
category: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#category CognitiveAccountConnectionCustomKeys#category}.

---

##### `cognitive_account_id`<sup>Required</sup> <a name="cognitive_account_id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.cognitiveAccountId"></a>

```python
cognitive_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#cognitive_account_id CognitiveAccountConnectionCustomKeys#cognitive_account_id}.

---

##### `custom_keys`<sup>Required</sup> <a name="custom_keys" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.customKeys"></a>

```python
custom_keys: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#custom_keys CognitiveAccountConnectionCustomKeys#custom_keys}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#name CognitiveAccountConnectionCustomKeys#name}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.target"></a>

```python
target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#target CognitiveAccountConnectionCustomKeys#target}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#id CognitiveAccountConnectionCustomKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#metadata CognitiveAccountConnectionCustomKeys#metadata}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.timeouts"></a>

```python
timeouts: CognitiveAccountConnectionCustomKeysTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts">CognitiveAccountConnectionCustomKeysTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#timeouts CognitiveAccountConnectionCustomKeys#timeouts}

---

### CognitiveAccountConnectionCustomKeysTimeouts <a name="CognitiveAccountConnectionCustomKeysTimeouts" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import cognitive_account_connection_custom_keys

cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#create CognitiveAccountConnectionCustomKeys#create}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#delete CognitiveAccountConnectionCustomKeys#delete}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#read CognitiveAccountConnectionCustomKeys#read}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#update CognitiveAccountConnectionCustomKeys#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#create CognitiveAccountConnectionCustomKeys#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#delete CognitiveAccountConnectionCustomKeys#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#read CognitiveAccountConnectionCustomKeys#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_custom_keys#update CognitiveAccountConnectionCustomKeys#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitiveAccountConnectionCustomKeysTimeoutsOutputReference <a name="CognitiveAccountConnectionCustomKeysTimeoutsOutputReference" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import cognitive_account_connection_custom_keys

cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts">CognitiveAccountConnectionCustomKeysTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CognitiveAccountConnectionCustomKeysTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts">CognitiveAccountConnectionCustomKeysTimeouts</a>

---



