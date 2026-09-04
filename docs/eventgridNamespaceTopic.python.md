# `eventgridNamespaceTopic` Submodule <a name="`eventgridNamespaceTopic` Submodule" id="@cdktn/provider-azurerm.eventgridNamespaceTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventgridNamespaceTopic <a name="EventgridNamespaceTopic" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/eventgrid_namespace_topic azurerm_eventgrid_namespace_topic}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer"></a>

```python
from cdktn_provider_azurerm import eventgrid_namespace_topic

eventgridNamespaceTopic.EventgridNamespaceTopic(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  eventgrid_namespace_id: str,
  name: str,
  event_retention_in_days: typing.Union[int, float] = None,
  id: str = None,
  timeouts: EventgridNamespaceTopicTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.eventgridNamespaceId">eventgrid_namespace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/eventgrid_namespace_topic#eventgrid_namespace_id EventgridNamespaceTopic#eventgrid_namespace_id}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/eventgrid_namespace_topic#name EventgridNamespaceTopic#name}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.eventRetentionInDays">event_retention_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/eventgrid_namespace_topic#event_retention_in_days EventgridNamespaceTopic#event_retention_in_days}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/eventgrid_namespace_topic#id EventgridNamespaceTopic#id}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts">EventgridNamespaceTopicTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `eventgrid_namespace_id`<sup>Required</sup> <a name="eventgrid_namespace_id" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.eventgridNamespaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/eventgrid_namespace_topic#eventgrid_namespace_id EventgridNamespaceTopic#eventgrid_namespace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/eventgrid_namespace_topic#name EventgridNamespaceTopic#name}.

---

##### `event_retention_in_days`<sup>Optional</sup> <a name="event_retention_in_days" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.eventRetentionInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/eventgrid_namespace_topic#event_retention_in_days EventgridNamespaceTopic#event_retention_in_days}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/eventgrid_namespace_topic#id EventgridNamespaceTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts">EventgridNamespaceTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/eventgrid_namespace_topic#timeouts EventgridNamespaceTopic#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.resetEventRetentionInDays">reset_event_retention_in_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/eventgrid_namespace_topic#create EventgridNamespaceTopic#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/eventgrid_namespace_topic#delete EventgridNamespaceTopic#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/eventgrid_namespace_topic#read EventgridNamespaceTopic#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/eventgrid_namespace_topic#update EventgridNamespaceTopic#update}.

---

##### `reset_event_retention_in_days` <a name="reset_event_retention_in_days" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.resetEventRetentionInDays"></a>

```python
def reset_event_retention_in_days() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EventgridNamespaceTopic resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.isConstruct"></a>

```python
from cdktn_provider_azurerm import eventgrid_namespace_topic

eventgridNamespaceTopic.EventgridNamespaceTopic.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import eventgrid_namespace_topic

eventgridNamespaceTopic.EventgridNamespaceTopic.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.isTerraformResource"></a>

```python
from cdktn_provider_azurerm import eventgrid_namespace_topic

eventgridNamespaceTopic.EventgridNamespaceTopic.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import eventgrid_namespace_topic

eventgridNamespaceTopic.EventgridNamespaceTopic.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EventgridNamespaceTopic resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EventgridNamespaceTopic to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EventgridNamespaceTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/eventgrid_namespace_topic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EventgridNamespaceTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference">EventgridNamespaceTopicTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.eventgridNamespaceIdInput">eventgrid_namespace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.eventRetentionInDaysInput">event_retention_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts">EventgridNamespaceTopicTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.eventgridNamespaceId">eventgrid_namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.eventRetentionInDays">event_retention_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.timeouts"></a>

```python
timeouts: EventgridNamespaceTopicTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference">EventgridNamespaceTopicTimeoutsOutputReference</a>

---

##### `eventgrid_namespace_id_input`<sup>Optional</sup> <a name="eventgrid_namespace_id_input" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.eventgridNamespaceIdInput"></a>

```python
eventgrid_namespace_id_input: str
```

- *Type:* str

---

##### `event_retention_in_days_input`<sup>Optional</sup> <a name="event_retention_in_days_input" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.eventRetentionInDaysInput"></a>

```python
event_retention_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | EventgridNamespaceTopicTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts">EventgridNamespaceTopicTimeouts</a>

---

##### `eventgrid_namespace_id`<sup>Required</sup> <a name="eventgrid_namespace_id" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.eventgridNamespaceId"></a>

```python
eventgrid_namespace_id: str
```

- *Type:* str

---

##### `event_retention_in_days`<sup>Required</sup> <a name="event_retention_in_days" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.eventRetentionInDays"></a>

```python
event_retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EventgridNamespaceTopicConfig <a name="EventgridNamespaceTopicConfig" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import eventgrid_namespace_topic

eventgridNamespaceTopic.EventgridNamespaceTopicConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  eventgrid_namespace_id: str,
  name: str,
  event_retention_in_days: typing.Union[int, float] = None,
  id: str = None,
  timeouts: EventgridNamespaceTopicTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.eventgridNamespaceId">eventgrid_namespace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/eventgrid_namespace_topic#eventgrid_namespace_id EventgridNamespaceTopic#eventgrid_namespace_id}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/eventgrid_namespace_topic#name EventgridNamespaceTopic#name}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.eventRetentionInDays">event_retention_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/eventgrid_namespace_topic#event_retention_in_days EventgridNamespaceTopic#event_retention_in_days}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/eventgrid_namespace_topic#id EventgridNamespaceTopic#id}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts">EventgridNamespaceTopicTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `eventgrid_namespace_id`<sup>Required</sup> <a name="eventgrid_namespace_id" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.eventgridNamespaceId"></a>

```python
eventgrid_namespace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/eventgrid_namespace_topic#eventgrid_namespace_id EventgridNamespaceTopic#eventgrid_namespace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/eventgrid_namespace_topic#name EventgridNamespaceTopic#name}.

---

##### `event_retention_in_days`<sup>Optional</sup> <a name="event_retention_in_days" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.eventRetentionInDays"></a>

```python
event_retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/eventgrid_namespace_topic#event_retention_in_days EventgridNamespaceTopic#event_retention_in_days}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/eventgrid_namespace_topic#id EventgridNamespaceTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.timeouts"></a>

```python
timeouts: EventgridNamespaceTopicTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts">EventgridNamespaceTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/eventgrid_namespace_topic#timeouts EventgridNamespaceTopic#timeouts}

---

### EventgridNamespaceTopicTimeouts <a name="EventgridNamespaceTopicTimeouts" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import eventgrid_namespace_topic

eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/eventgrid_namespace_topic#create EventgridNamespaceTopic#create}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/eventgrid_namespace_topic#delete EventgridNamespaceTopic#delete}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/eventgrid_namespace_topic#read EventgridNamespaceTopic#read}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/eventgrid_namespace_topic#update EventgridNamespaceTopic#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/eventgrid_namespace_topic#create EventgridNamespaceTopic#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/eventgrid_namespace_topic#delete EventgridNamespaceTopic#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/eventgrid_namespace_topic#read EventgridNamespaceTopic#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/eventgrid_namespace_topic#update EventgridNamespaceTopic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventgridNamespaceTopicTimeoutsOutputReference <a name="EventgridNamespaceTopicTimeoutsOutputReference" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import eventgrid_namespace_topic

eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts">EventgridNamespaceTopicTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventgridNamespaceTopicTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts">EventgridNamespaceTopicTimeouts</a>

---



