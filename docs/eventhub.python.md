# `eventhub` Submodule <a name="`eventhub` Submodule" id="@cdktn/provider-azurerm.eventhub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Eventhub <a name="Eventhub" id="@cdktn/provider-azurerm.eventhub.Eventhub"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub azurerm_eventhub}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.eventhub.Eventhub.Initializer"></a>

```python
from cdktn_provider_azurerm import eventhub

eventhub.Eventhub(
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
  namespace_id: str,
  partition_count: typing.Union[int, float],
  capture_description: EventhubCaptureDescription = None,
  id: str = None,
  message_retention: typing.Union[int, float] = None,
  retention_description: EventhubRetentionDescription = None,
  status: str = None,
  timeouts: EventhubTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#name Eventhub#name}. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.namespaceId">namespace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#namespace_id Eventhub#namespace_id}. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.partitionCount">partition_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#partition_count Eventhub#partition_count}. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.captureDescription">capture_description</a></code> | <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescription">EventhubCaptureDescription</a></code> | capture_description block. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#id Eventhub#id}. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.messageRetention">message_retention</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#message_retention Eventhub#message_retention}. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.retentionDescription">retention_description</a></code> | <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescription">EventhubRetentionDescription</a></code> | retention_description block. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#status Eventhub#status}. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeouts">EventhubTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#name Eventhub#name}.

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.namespaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#namespace_id Eventhub#namespace_id}.

---

##### `partition_count`<sup>Required</sup> <a name="partition_count" id="@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.partitionCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#partition_count Eventhub#partition_count}.

---

##### `capture_description`<sup>Optional</sup> <a name="capture_description" id="@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.captureDescription"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescription">EventhubCaptureDescription</a>

capture_description block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#capture_description Eventhub#capture_description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#id Eventhub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `message_retention`<sup>Optional</sup> <a name="message_retention" id="@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.messageRetention"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#message_retention Eventhub#message_retention}.

---

##### `retention_description`<sup>Optional</sup> <a name="retention_description" id="@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.retentionDescription"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescription">EventhubRetentionDescription</a>

retention_description block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#retention_description Eventhub#retention_description}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#status Eventhub#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.eventhub.Eventhub.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeouts">EventhubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#timeouts Eventhub#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.putCaptureDescription">put_capture_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.putRetentionDescription">put_retention_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.resetCaptureDescription">reset_capture_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.resetMessageRetention">reset_message_retention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.resetRetentionDescription">reset_retention_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.eventhub.Eventhub.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.eventhub.Eventhub.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.eventhub.Eventhub.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.eventhub.Eventhub.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.eventhub.Eventhub.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.eventhub.Eventhub.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.eventhub.Eventhub.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.eventhub.Eventhub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.eventhub.Eventhub.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.eventhub.Eventhub.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.eventhub.Eventhub.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.eventhub.Eventhub.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azurerm.eventhub.Eventhub.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.eventhub.Eventhub.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.eventhub.Eventhub.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.Eventhub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.eventhub.Eventhub.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.Eventhub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.eventhub.Eventhub.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.Eventhub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.eventhub.Eventhub.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.Eventhub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.eventhub.Eventhub.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.Eventhub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.eventhub.Eventhub.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.Eventhub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.eventhub.Eventhub.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.Eventhub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.eventhub.Eventhub.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.Eventhub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.eventhub.Eventhub.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.Eventhub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azurerm.eventhub.Eventhub.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azurerm.eventhub.Eventhub.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.eventhub.Eventhub.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.eventhub.Eventhub.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.eventhub.Eventhub.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.Eventhub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azurerm.eventhub.Eventhub.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.eventhub.Eventhub.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azurerm.eventhub.Eventhub.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.eventhub.Eventhub.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.eventhub.Eventhub.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azurerm.eventhub.Eventhub.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.eventhub.Eventhub.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_capture_description` <a name="put_capture_description" id="@cdktn/provider-azurerm.eventhub.Eventhub.putCaptureDescription"></a>

```python
def put_capture_description(
  destination: EventhubCaptureDescriptionDestination,
  enabled: bool | IResolvable,
  encoding: str,
  interval_in_seconds: typing.Union[int, float] = None,
  size_limit_in_bytes: typing.Union[int, float] = None,
  skip_empty_archives: bool | IResolvable = None
) -> None
```

###### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-azurerm.eventhub.Eventhub.putCaptureDescription.parameter.destination"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestination">EventhubCaptureDescriptionDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#destination Eventhub#destination}

---

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-azurerm.eventhub.Eventhub.putCaptureDescription.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#enabled Eventhub#enabled}.

---

###### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktn/provider-azurerm.eventhub.Eventhub.putCaptureDescription.parameter.encoding"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#encoding Eventhub#encoding}.

---

###### `interval_in_seconds`<sup>Optional</sup> <a name="interval_in_seconds" id="@cdktn/provider-azurerm.eventhub.Eventhub.putCaptureDescription.parameter.intervalInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#interval_in_seconds Eventhub#interval_in_seconds}.

---

###### `size_limit_in_bytes`<sup>Optional</sup> <a name="size_limit_in_bytes" id="@cdktn/provider-azurerm.eventhub.Eventhub.putCaptureDescription.parameter.sizeLimitInBytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#size_limit_in_bytes Eventhub#size_limit_in_bytes}.

---

###### `skip_empty_archives`<sup>Optional</sup> <a name="skip_empty_archives" id="@cdktn/provider-azurerm.eventhub.Eventhub.putCaptureDescription.parameter.skipEmptyArchives"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#skip_empty_archives Eventhub#skip_empty_archives}.

---

##### `put_retention_description` <a name="put_retention_description" id="@cdktn/provider-azurerm.eventhub.Eventhub.putRetentionDescription"></a>

```python
def put_retention_description(
  cleanup_policy: str,
  retention_time_in_hours: typing.Union[int, float] = None,
  tombstone_retention_time_in_hours: typing.Union[int, float] = None
) -> None
```

###### `cleanup_policy`<sup>Required</sup> <a name="cleanup_policy" id="@cdktn/provider-azurerm.eventhub.Eventhub.putRetentionDescription.parameter.cleanupPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#cleanup_policy Eventhub#cleanup_policy}.

---

###### `retention_time_in_hours`<sup>Optional</sup> <a name="retention_time_in_hours" id="@cdktn/provider-azurerm.eventhub.Eventhub.putRetentionDescription.parameter.retentionTimeInHours"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#retention_time_in_hours Eventhub#retention_time_in_hours}.

---

###### `tombstone_retention_time_in_hours`<sup>Optional</sup> <a name="tombstone_retention_time_in_hours" id="@cdktn/provider-azurerm.eventhub.Eventhub.putRetentionDescription.parameter.tombstoneRetentionTimeInHours"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#tombstone_retention_time_in_hours Eventhub#tombstone_retention_time_in_hours}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.eventhub.Eventhub.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.eventhub.Eventhub.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#create Eventhub#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.eventhub.Eventhub.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#delete Eventhub#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.eventhub.Eventhub.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#read Eventhub#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.eventhub.Eventhub.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#update Eventhub#update}.

---

##### `reset_capture_description` <a name="reset_capture_description" id="@cdktn/provider-azurerm.eventhub.Eventhub.resetCaptureDescription"></a>

```python
def reset_capture_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.eventhub.Eventhub.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_message_retention` <a name="reset_message_retention" id="@cdktn/provider-azurerm.eventhub.Eventhub.resetMessageRetention"></a>

```python
def reset_message_retention() -> None
```

##### `reset_retention_description` <a name="reset_retention_description" id="@cdktn/provider-azurerm.eventhub.Eventhub.resetRetentionDescription"></a>

```python
def reset_retention_description() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-azurerm.eventhub.Eventhub.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.eventhub.Eventhub.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Eventhub resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.eventhub.Eventhub.isConstruct"></a>

```python
from cdktn_provider_azurerm import eventhub

eventhub.Eventhub.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.eventhub.Eventhub.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.eventhub.Eventhub.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import eventhub

eventhub.Eventhub.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.eventhub.Eventhub.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azurerm.eventhub.Eventhub.isTerraformResource"></a>

```python
from cdktn_provider_azurerm import eventhub

eventhub.Eventhub.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.eventhub.Eventhub.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.eventhub.Eventhub.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import eventhub

eventhub.Eventhub.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Eventhub resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.eventhub.Eventhub.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.eventhub.Eventhub.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Eventhub to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.eventhub.Eventhub.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Eventhub that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.eventhub.Eventhub.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Eventhub to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.captureDescription">capture_description</a></code> | <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference">EventhubCaptureDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.partitionIds">partition_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.retentionDescription">retention_description</a></code> | <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference">EventhubRetentionDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference">EventhubTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.captureDescriptionInput">capture_description_input</a></code> | <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescription">EventhubCaptureDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.messageRetentionInput">message_retention_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.namespaceIdInput">namespace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.partitionCountInput">partition_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.retentionDescriptionInput">retention_description_input</a></code> | <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescription">EventhubRetentionDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeouts">EventhubTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.messageRetention">message_retention</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.namespaceId">namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.partitionCount">partition_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `capture_description`<sup>Required</sup> <a name="capture_description" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.captureDescription"></a>

```python
capture_description: EventhubCaptureDescriptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference">EventhubCaptureDescriptionOutputReference</a>

---

##### `partition_ids`<sup>Required</sup> <a name="partition_ids" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.partitionIds"></a>

```python
partition_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `retention_description`<sup>Required</sup> <a name="retention_description" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.retentionDescription"></a>

```python
retention_description: EventhubRetentionDescriptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference">EventhubRetentionDescriptionOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.timeouts"></a>

```python
timeouts: EventhubTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference">EventhubTimeoutsOutputReference</a>

---

##### `capture_description_input`<sup>Optional</sup> <a name="capture_description_input" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.captureDescriptionInput"></a>

```python
capture_description_input: EventhubCaptureDescription
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescription">EventhubCaptureDescription</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `message_retention_input`<sup>Optional</sup> <a name="message_retention_input" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.messageRetentionInput"></a>

```python
message_retention_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_id_input`<sup>Optional</sup> <a name="namespace_id_input" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.namespaceIdInput"></a>

```python
namespace_id_input: str
```

- *Type:* str

---

##### `partition_count_input`<sup>Optional</sup> <a name="partition_count_input" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.partitionCountInput"></a>

```python
partition_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_description_input`<sup>Optional</sup> <a name="retention_description_input" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.retentionDescriptionInput"></a>

```python
retention_description_input: EventhubRetentionDescription
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescription">EventhubRetentionDescription</a>

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | EventhubTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeouts">EventhubTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `message_retention`<sup>Required</sup> <a name="message_retention" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.messageRetention"></a>

```python
message_retention: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

---

##### `partition_count`<sup>Required</sup> <a name="partition_count" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.partitionCount"></a>

```python
partition_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhub.Eventhub.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.eventhub.Eventhub.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EventhubCaptureDescription <a name="EventhubCaptureDescription" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescription.Initializer"></a>

```python
from cdktn_provider_azurerm import eventhub

eventhub.EventhubCaptureDescription(
  destination: EventhubCaptureDescriptionDestination,
  enabled: bool | IResolvable,
  encoding: str,
  interval_in_seconds: typing.Union[int, float] = None,
  size_limit_in_bytes: typing.Union[int, float] = None,
  skip_empty_archives: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescription.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestination">EventhubCaptureDescriptionDestination</a></code> | destination block. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescription.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#enabled Eventhub#enabled}. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescription.property.encoding">encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#encoding Eventhub#encoding}. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescription.property.intervalInSeconds">interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#interval_in_seconds Eventhub#interval_in_seconds}. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescription.property.sizeLimitInBytes">size_limit_in_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#size_limit_in_bytes Eventhub#size_limit_in_bytes}. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescription.property.skipEmptyArchives">skip_empty_archives</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#skip_empty_archives Eventhub#skip_empty_archives}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescription.property.destination"></a>

```python
destination: EventhubCaptureDescriptionDestination
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestination">EventhubCaptureDescriptionDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#destination Eventhub#destination}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescription.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#enabled Eventhub#enabled}.

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescription.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#encoding Eventhub#encoding}.

---

##### `interval_in_seconds`<sup>Optional</sup> <a name="interval_in_seconds" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescription.property.intervalInSeconds"></a>

```python
interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#interval_in_seconds Eventhub#interval_in_seconds}.

---

##### `size_limit_in_bytes`<sup>Optional</sup> <a name="size_limit_in_bytes" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescription.property.sizeLimitInBytes"></a>

```python
size_limit_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#size_limit_in_bytes Eventhub#size_limit_in_bytes}.

---

##### `skip_empty_archives`<sup>Optional</sup> <a name="skip_empty_archives" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescription.property.skipEmptyArchives"></a>

```python
skip_empty_archives: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#skip_empty_archives Eventhub#skip_empty_archives}.

---

### EventhubCaptureDescriptionDestination <a name="EventhubCaptureDescriptionDestination" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestination.Initializer"></a>

```python
from cdktn_provider_azurerm import eventhub

eventhub.EventhubCaptureDescriptionDestination(
  archive_name_format: str,
  blob_container_name: str,
  name: str,
  storage_account_id: str,
  storage_authentication_id: str = None,
  storage_authentication_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestination.property.archiveNameFormat">archive_name_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#archive_name_format Eventhub#archive_name_format}. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestination.property.blobContainerName">blob_container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#blob_container_name Eventhub#blob_container_name}. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestination.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#name Eventhub#name}. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestination.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#storage_account_id Eventhub#storage_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestination.property.storageAuthenticationId">storage_authentication_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#storage_authentication_id Eventhub#storage_authentication_id}. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestination.property.storageAuthenticationType">storage_authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#storage_authentication_type Eventhub#storage_authentication_type}. |

---

##### `archive_name_format`<sup>Required</sup> <a name="archive_name_format" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestination.property.archiveNameFormat"></a>

```python
archive_name_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#archive_name_format Eventhub#archive_name_format}.

---

##### `blob_container_name`<sup>Required</sup> <a name="blob_container_name" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestination.property.blobContainerName"></a>

```python
blob_container_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#blob_container_name Eventhub#blob_container_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestination.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#name Eventhub#name}.

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestination.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#storage_account_id Eventhub#storage_account_id}.

---

##### `storage_authentication_id`<sup>Optional</sup> <a name="storage_authentication_id" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestination.property.storageAuthenticationId"></a>

```python
storage_authentication_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#storage_authentication_id Eventhub#storage_authentication_id}.

---

##### `storage_authentication_type`<sup>Optional</sup> <a name="storage_authentication_type" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestination.property.storageAuthenticationType"></a>

```python
storage_authentication_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#storage_authentication_type Eventhub#storage_authentication_type}.

---

### EventhubConfig <a name="EventhubConfig" id="@cdktn/provider-azurerm.eventhub.EventhubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.eventhub.EventhubConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import eventhub

eventhub.EventhubConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  namespace_id: str,
  partition_count: typing.Union[int, float],
  capture_description: EventhubCaptureDescription = None,
  id: str = None,
  message_retention: typing.Union[int, float] = None,
  retention_description: EventhubRetentionDescription = None,
  status: str = None,
  timeouts: EventhubTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#name Eventhub#name}. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubConfig.property.namespaceId">namespace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#namespace_id Eventhub#namespace_id}. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubConfig.property.partitionCount">partition_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#partition_count Eventhub#partition_count}. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubConfig.property.captureDescription">capture_description</a></code> | <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescription">EventhubCaptureDescription</a></code> | capture_description block. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#id Eventhub#id}. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubConfig.property.messageRetention">message_retention</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#message_retention Eventhub#message_retention}. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubConfig.property.retentionDescription">retention_description</a></code> | <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescription">EventhubRetentionDescription</a></code> | retention_description block. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#status Eventhub#status}. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeouts">EventhubTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.eventhub.EventhubConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.eventhub.EventhubConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.eventhub.EventhubConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.eventhub.EventhubConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.eventhub.EventhubConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.eventhub.EventhubConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.eventhub.EventhubConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.eventhub.EventhubConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#name Eventhub#name}.

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktn/provider-azurerm.eventhub.EventhubConfig.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#namespace_id Eventhub#namespace_id}.

---

##### `partition_count`<sup>Required</sup> <a name="partition_count" id="@cdktn/provider-azurerm.eventhub.EventhubConfig.property.partitionCount"></a>

```python
partition_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#partition_count Eventhub#partition_count}.

---

##### `capture_description`<sup>Optional</sup> <a name="capture_description" id="@cdktn/provider-azurerm.eventhub.EventhubConfig.property.captureDescription"></a>

```python
capture_description: EventhubCaptureDescription
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescription">EventhubCaptureDescription</a>

capture_description block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#capture_description Eventhub#capture_description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.eventhub.EventhubConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#id Eventhub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `message_retention`<sup>Optional</sup> <a name="message_retention" id="@cdktn/provider-azurerm.eventhub.EventhubConfig.property.messageRetention"></a>

```python
message_retention: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#message_retention Eventhub#message_retention}.

---

##### `retention_description`<sup>Optional</sup> <a name="retention_description" id="@cdktn/provider-azurerm.eventhub.EventhubConfig.property.retentionDescription"></a>

```python
retention_description: EventhubRetentionDescription
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescription">EventhubRetentionDescription</a>

retention_description block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#retention_description Eventhub#retention_description}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-azurerm.eventhub.EventhubConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#status Eventhub#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.eventhub.EventhubConfig.property.timeouts"></a>

```python
timeouts: EventhubTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeouts">EventhubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#timeouts Eventhub#timeouts}

---

### EventhubRetentionDescription <a name="EventhubRetentionDescription" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescription.Initializer"></a>

```python
from cdktn_provider_azurerm import eventhub

eventhub.EventhubRetentionDescription(
  cleanup_policy: str,
  retention_time_in_hours: typing.Union[int, float] = None,
  tombstone_retention_time_in_hours: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescription.property.cleanupPolicy">cleanup_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#cleanup_policy Eventhub#cleanup_policy}. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescription.property.retentionTimeInHours">retention_time_in_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#retention_time_in_hours Eventhub#retention_time_in_hours}. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescription.property.tombstoneRetentionTimeInHours">tombstone_retention_time_in_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#tombstone_retention_time_in_hours Eventhub#tombstone_retention_time_in_hours}. |

---

##### `cleanup_policy`<sup>Required</sup> <a name="cleanup_policy" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescription.property.cleanupPolicy"></a>

```python
cleanup_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#cleanup_policy Eventhub#cleanup_policy}.

---

##### `retention_time_in_hours`<sup>Optional</sup> <a name="retention_time_in_hours" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescription.property.retentionTimeInHours"></a>

```python
retention_time_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#retention_time_in_hours Eventhub#retention_time_in_hours}.

---

##### `tombstone_retention_time_in_hours`<sup>Optional</sup> <a name="tombstone_retention_time_in_hours" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescription.property.tombstoneRetentionTimeInHours"></a>

```python
tombstone_retention_time_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#tombstone_retention_time_in_hours Eventhub#tombstone_retention_time_in_hours}.

---

### EventhubTimeouts <a name="EventhubTimeouts" id="@cdktn/provider-azurerm.eventhub.EventhubTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.eventhub.EventhubTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import eventhub

eventhub.EventhubTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#create Eventhub#create}. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#delete Eventhub#delete}. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#read Eventhub#read}. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#update Eventhub#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.eventhub.EventhubTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#create Eventhub#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.eventhub.EventhubTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#delete Eventhub#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.eventhub.EventhubTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#read Eventhub#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.eventhub.EventhubTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#update Eventhub#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventhubCaptureDescriptionDestinationOutputReference <a name="EventhubCaptureDescriptionDestinationOutputReference" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import eventhub

eventhub.EventhubCaptureDescriptionDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.resetStorageAuthenticationId">reset_storage_authentication_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.resetStorageAuthenticationType">reset_storage_authentication_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_storage_authentication_id` <a name="reset_storage_authentication_id" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.resetStorageAuthenticationId"></a>

```python
def reset_storage_authentication_id() -> None
```

##### `reset_storage_authentication_type` <a name="reset_storage_authentication_type" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.resetStorageAuthenticationType"></a>

```python
def reset_storage_authentication_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.property.archiveNameFormatInput">archive_name_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.property.blobContainerNameInput">blob_container_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.property.storageAccountIdInput">storage_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.property.storageAuthenticationIdInput">storage_authentication_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.property.storageAuthenticationTypeInput">storage_authentication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.property.archiveNameFormat">archive_name_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.property.blobContainerName">blob_container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.property.storageAuthenticationId">storage_authentication_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.property.storageAuthenticationType">storage_authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestination">EventhubCaptureDescriptionDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `archive_name_format_input`<sup>Optional</sup> <a name="archive_name_format_input" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.property.archiveNameFormatInput"></a>

```python
archive_name_format_input: str
```

- *Type:* str

---

##### `blob_container_name_input`<sup>Optional</sup> <a name="blob_container_name_input" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.property.blobContainerNameInput"></a>

```python
blob_container_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `storage_account_id_input`<sup>Optional</sup> <a name="storage_account_id_input" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.property.storageAccountIdInput"></a>

```python
storage_account_id_input: str
```

- *Type:* str

---

##### `storage_authentication_id_input`<sup>Optional</sup> <a name="storage_authentication_id_input" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.property.storageAuthenticationIdInput"></a>

```python
storage_authentication_id_input: str
```

- *Type:* str

---

##### `storage_authentication_type_input`<sup>Optional</sup> <a name="storage_authentication_type_input" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.property.storageAuthenticationTypeInput"></a>

```python
storage_authentication_type_input: str
```

- *Type:* str

---

##### `archive_name_format`<sup>Required</sup> <a name="archive_name_format" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.property.archiveNameFormat"></a>

```python
archive_name_format: str
```

- *Type:* str

---

##### `blob_container_name`<sup>Required</sup> <a name="blob_container_name" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.property.blobContainerName"></a>

```python
blob_container_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

---

##### `storage_authentication_id`<sup>Required</sup> <a name="storage_authentication_id" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.property.storageAuthenticationId"></a>

```python
storage_authentication_id: str
```

- *Type:* str

---

##### `storage_authentication_type`<sup>Required</sup> <a name="storage_authentication_type" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.property.storageAuthenticationType"></a>

```python
storage_authentication_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference.property.internalValue"></a>

```python
internal_value: EventhubCaptureDescriptionDestination
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestination">EventhubCaptureDescriptionDestination</a>

---


### EventhubCaptureDescriptionOutputReference <a name="EventhubCaptureDescriptionOutputReference" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import eventhub

eventhub.EventhubCaptureDescriptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.putDestination">put_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.resetIntervalInSeconds">reset_interval_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.resetSizeLimitInBytes">reset_size_limit_in_bytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.resetSkipEmptyArchives">reset_skip_empty_archives</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination` <a name="put_destination" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.putDestination"></a>

```python
def put_destination(
  archive_name_format: str,
  blob_container_name: str,
  name: str,
  storage_account_id: str,
  storage_authentication_id: str = None,
  storage_authentication_type: str = None
) -> None
```

###### `archive_name_format`<sup>Required</sup> <a name="archive_name_format" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.putDestination.parameter.archiveNameFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#archive_name_format Eventhub#archive_name_format}.

---

###### `blob_container_name`<sup>Required</sup> <a name="blob_container_name" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.putDestination.parameter.blobContainerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#blob_container_name Eventhub#blob_container_name}.

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.putDestination.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#name Eventhub#name}.

---

###### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.putDestination.parameter.storageAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#storage_account_id Eventhub#storage_account_id}.

---

###### `storage_authentication_id`<sup>Optional</sup> <a name="storage_authentication_id" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.putDestination.parameter.storageAuthenticationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#storage_authentication_id Eventhub#storage_authentication_id}.

---

###### `storage_authentication_type`<sup>Optional</sup> <a name="storage_authentication_type" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.putDestination.parameter.storageAuthenticationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/eventhub#storage_authentication_type Eventhub#storage_authentication_type}.

---

##### `reset_interval_in_seconds` <a name="reset_interval_in_seconds" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.resetIntervalInSeconds"></a>

```python
def reset_interval_in_seconds() -> None
```

##### `reset_size_limit_in_bytes` <a name="reset_size_limit_in_bytes" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.resetSizeLimitInBytes"></a>

```python
def reset_size_limit_in_bytes() -> None
```

##### `reset_skip_empty_archives` <a name="reset_skip_empty_archives" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.resetSkipEmptyArchives"></a>

```python
def reset_skip_empty_archives() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference">EventhubCaptureDescriptionDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.property.destinationInput">destination_input</a></code> | <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestination">EventhubCaptureDescriptionDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.property.intervalInSecondsInput">interval_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.property.sizeLimitInBytesInput">size_limit_in_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.property.skipEmptyArchivesInput">skip_empty_archives_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.property.intervalInSeconds">interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.property.sizeLimitInBytes">size_limit_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.property.skipEmptyArchives">skip_empty_archives</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescription">EventhubCaptureDescription</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.property.destination"></a>

```python
destination: EventhubCaptureDescriptionDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestinationOutputReference">EventhubCaptureDescriptionDestinationOutputReference</a>

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.property.destinationInput"></a>

```python
destination_input: EventhubCaptureDescriptionDestination
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionDestination">EventhubCaptureDescriptionDestination</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `interval_in_seconds_input`<sup>Optional</sup> <a name="interval_in_seconds_input" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.property.intervalInSecondsInput"></a>

```python
interval_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_limit_in_bytes_input`<sup>Optional</sup> <a name="size_limit_in_bytes_input" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.property.sizeLimitInBytesInput"></a>

```python
size_limit_in_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `skip_empty_archives_input`<sup>Optional</sup> <a name="skip_empty_archives_input" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.property.skipEmptyArchivesInput"></a>

```python
skip_empty_archives_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `interval_in_seconds`<sup>Required</sup> <a name="interval_in_seconds" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.property.intervalInSeconds"></a>

```python
interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_limit_in_bytes`<sup>Required</sup> <a name="size_limit_in_bytes" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.property.sizeLimitInBytes"></a>

```python
size_limit_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `skip_empty_archives`<sup>Required</sup> <a name="skip_empty_archives" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.property.skipEmptyArchives"></a>

```python
skip_empty_archives: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.eventhub.EventhubCaptureDescriptionOutputReference.property.internalValue"></a>

```python
internal_value: EventhubCaptureDescription
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventhub.EventhubCaptureDescription">EventhubCaptureDescription</a>

---


### EventhubRetentionDescriptionOutputReference <a name="EventhubRetentionDescriptionOutputReference" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import eventhub

eventhub.EventhubRetentionDescriptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.resetRetentionTimeInHours">reset_retention_time_in_hours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.resetTombstoneRetentionTimeInHours">reset_tombstone_retention_time_in_hours</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_retention_time_in_hours` <a name="reset_retention_time_in_hours" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.resetRetentionTimeInHours"></a>

```python
def reset_retention_time_in_hours() -> None
```

##### `reset_tombstone_retention_time_in_hours` <a name="reset_tombstone_retention_time_in_hours" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.resetTombstoneRetentionTimeInHours"></a>

```python
def reset_tombstone_retention_time_in_hours() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.property.cleanupPolicyInput">cleanup_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.property.retentionTimeInHoursInput">retention_time_in_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.property.tombstoneRetentionTimeInHoursInput">tombstone_retention_time_in_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.property.cleanupPolicy">cleanup_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.property.retentionTimeInHours">retention_time_in_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.property.tombstoneRetentionTimeInHours">tombstone_retention_time_in_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescription">EventhubRetentionDescription</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cleanup_policy_input`<sup>Optional</sup> <a name="cleanup_policy_input" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.property.cleanupPolicyInput"></a>

```python
cleanup_policy_input: str
```

- *Type:* str

---

##### `retention_time_in_hours_input`<sup>Optional</sup> <a name="retention_time_in_hours_input" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.property.retentionTimeInHoursInput"></a>

```python
retention_time_in_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tombstone_retention_time_in_hours_input`<sup>Optional</sup> <a name="tombstone_retention_time_in_hours_input" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.property.tombstoneRetentionTimeInHoursInput"></a>

```python
tombstone_retention_time_in_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cleanup_policy`<sup>Required</sup> <a name="cleanup_policy" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.property.cleanupPolicy"></a>

```python
cleanup_policy: str
```

- *Type:* str

---

##### `retention_time_in_hours`<sup>Required</sup> <a name="retention_time_in_hours" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.property.retentionTimeInHours"></a>

```python
retention_time_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tombstone_retention_time_in_hours`<sup>Required</sup> <a name="tombstone_retention_time_in_hours" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.property.tombstoneRetentionTimeInHours"></a>

```python
tombstone_retention_time_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.eventhub.EventhubRetentionDescriptionOutputReference.property.internalValue"></a>

```python
internal_value: EventhubRetentionDescription
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventhub.EventhubRetentionDescription">EventhubRetentionDescription</a>

---


### EventhubTimeoutsOutputReference <a name="EventhubTimeoutsOutputReference" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import eventhub

eventhub.EventhubTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeouts">EventhubTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.eventhub.EventhubTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventhubTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.eventhub.EventhubTimeouts">EventhubTimeouts</a>

---



