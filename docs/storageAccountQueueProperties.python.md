# `storageAccountQueueProperties` Submodule <a name="`storageAccountQueueProperties` Submodule" id="@cdktn/provider-azurerm.storageAccountQueueProperties"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageAccountQueueProperties <a name="StorageAccountQueueProperties" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties azurerm_storage_account_queue_properties}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueueProperties(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  storage_account_id: str,
  cors_rule: IResolvable | typing.List[StorageAccountQueuePropertiesCorsRule] = None,
  hour_metrics: StorageAccountQueuePropertiesHourMetrics = None,
  id: str = None,
  logging: StorageAccountQueuePropertiesLogging = None,
  minute_metrics: StorageAccountQueuePropertiesMinuteMetrics = None,
  timeouts: StorageAccountQueuePropertiesTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#storage_account_id StorageAccountQueueProperties#storage_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.corsRule">cors_rule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>]</code> | cors_rule block. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.hourMetrics">hour_metrics</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a></code> | hour_metrics block. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#id StorageAccountQueueProperties#id}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.logging">logging</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a></code> | logging block. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.minuteMetrics">minute_metrics</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a></code> | minute_metrics block. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.storageAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#storage_account_id StorageAccountQueueProperties#storage_account_id}.

---

##### `cors_rule`<sup>Optional</sup> <a name="cors_rule" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.corsRule"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>]

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#cors_rule StorageAccountQueueProperties#cors_rule}

---

##### `hour_metrics`<sup>Optional</sup> <a name="hour_metrics" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.hourMetrics"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a>

hour_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#hour_metrics StorageAccountQueueProperties#hour_metrics}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#id StorageAccountQueueProperties#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.logging"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#logging StorageAccountQueueProperties#logging}

---

##### `minute_metrics`<sup>Optional</sup> <a name="minute_metrics" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.minuteMetrics"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a>

minute_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#minute_metrics StorageAccountQueueProperties#minute_metrics}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#timeouts StorageAccountQueueProperties#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putCorsRule">put_cors_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putHourMetrics">put_hour_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putLogging">put_logging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putMinuteMetrics">put_minute_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.resetCorsRule">reset_cors_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.resetHourMetrics">reset_hour_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.resetLogging">reset_logging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.resetMinuteMetrics">reset_minute_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cors_rule` <a name="put_cors_rule" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putCorsRule"></a>

```python
def put_cors_rule(
  value: IResolvable | typing.List[StorageAccountQueuePropertiesCorsRule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putCorsRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>]

---

##### `put_hour_metrics` <a name="put_hour_metrics" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putHourMetrics"></a>

```python
def put_hour_metrics(
  version: str,
  include_apis: bool | IResolvable = None,
  retention_policy_days: typing.Union[int, float] = None
) -> None
```

###### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putHourMetrics.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#version StorageAccountQueueProperties#version}.

---

###### `include_apis`<sup>Optional</sup> <a name="include_apis" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putHourMetrics.parameter.includeApis"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueueProperties#include_apis}.

---

###### `retention_policy_days`<sup>Optional</sup> <a name="retention_policy_days" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putHourMetrics.parameter.retentionPolicyDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueueProperties#retention_policy_days}.

---

##### `put_logging` <a name="put_logging" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putLogging"></a>

```python
def put_logging(
  delete: bool | IResolvable,
  read: bool | IResolvable,
  version: str,
  write: bool | IResolvable,
  retention_policy_days: typing.Union[int, float] = None
) -> None
```

###### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putLogging.parameter.delete"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueueProperties#delete}.

---

###### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putLogging.parameter.read"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#read StorageAccountQueueProperties#read}.

---

###### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putLogging.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#version StorageAccountQueueProperties#version}.

---

###### `write`<sup>Required</sup> <a name="write" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putLogging.parameter.write"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#write StorageAccountQueueProperties#write}.

---

###### `retention_policy_days`<sup>Optional</sup> <a name="retention_policy_days" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putLogging.parameter.retentionPolicyDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueueProperties#retention_policy_days}.

---

##### `put_minute_metrics` <a name="put_minute_metrics" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putMinuteMetrics"></a>

```python
def put_minute_metrics(
  version: str,
  include_apis: bool | IResolvable = None,
  retention_policy_days: typing.Union[int, float] = None
) -> None
```

###### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putMinuteMetrics.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#version StorageAccountQueueProperties#version}.

---

###### `include_apis`<sup>Optional</sup> <a name="include_apis" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putMinuteMetrics.parameter.includeApis"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueueProperties#include_apis}.

---

###### `retention_policy_days`<sup>Optional</sup> <a name="retention_policy_days" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putMinuteMetrics.parameter.retentionPolicyDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueueProperties#retention_policy_days}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#create StorageAccountQueueProperties#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueueProperties#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#read StorageAccountQueueProperties#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#update StorageAccountQueueProperties#update}.

---

##### `reset_cors_rule` <a name="reset_cors_rule" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.resetCorsRule"></a>

```python
def reset_cors_rule() -> None
```

##### `reset_hour_metrics` <a name="reset_hour_metrics" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.resetHourMetrics"></a>

```python
def reset_hour_metrics() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_logging` <a name="reset_logging" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.resetLogging"></a>

```python
def reset_logging() -> None
```

##### `reset_minute_metrics` <a name="reset_minute_metrics" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.resetMinuteMetrics"></a>

```python
def reset_minute_metrics() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a StorageAccountQueueProperties resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.isConstruct"></a>

```python
from cdktn_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueueProperties.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueueProperties.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.isTerraformResource"></a>

```python
from cdktn_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueueProperties.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueueProperties.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a StorageAccountQueueProperties resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StorageAccountQueueProperties to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StorageAccountQueueProperties that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StorageAccountQueueProperties to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.corsRule">cors_rule</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList">StorageAccountQueuePropertiesCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.hourMetrics">hour_metrics</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference">StorageAccountQueuePropertiesHourMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.logging">logging</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference">StorageAccountQueuePropertiesLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.minuteMetrics">minute_metrics</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference">StorageAccountQueuePropertiesMinuteMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference">StorageAccountQueuePropertiesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.corsRuleInput">cors_rule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.hourMetricsInput">hour_metrics_input</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.loggingInput">logging_input</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.minuteMetricsInput">minute_metrics_input</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.storageAccountIdInput">storage_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cors_rule`<sup>Required</sup> <a name="cors_rule" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.corsRule"></a>

```python
cors_rule: StorageAccountQueuePropertiesCorsRuleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList">StorageAccountQueuePropertiesCorsRuleList</a>

---

##### `hour_metrics`<sup>Required</sup> <a name="hour_metrics" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.hourMetrics"></a>

```python
hour_metrics: StorageAccountQueuePropertiesHourMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference">StorageAccountQueuePropertiesHourMetricsOutputReference</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.logging"></a>

```python
logging: StorageAccountQueuePropertiesLoggingOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference">StorageAccountQueuePropertiesLoggingOutputReference</a>

---

##### `minute_metrics`<sup>Required</sup> <a name="minute_metrics" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.minuteMetrics"></a>

```python
minute_metrics: StorageAccountQueuePropertiesMinuteMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference">StorageAccountQueuePropertiesMinuteMetricsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.timeouts"></a>

```python
timeouts: StorageAccountQueuePropertiesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference">StorageAccountQueuePropertiesTimeoutsOutputReference</a>

---

##### `cors_rule_input`<sup>Optional</sup> <a name="cors_rule_input" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.corsRuleInput"></a>

```python
cors_rule_input: IResolvable | typing.List[StorageAccountQueuePropertiesCorsRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>]

---

##### `hour_metrics_input`<sup>Optional</sup> <a name="hour_metrics_input" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.hourMetricsInput"></a>

```python
hour_metrics_input: StorageAccountQueuePropertiesHourMetrics
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `logging_input`<sup>Optional</sup> <a name="logging_input" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.loggingInput"></a>

```python
logging_input: StorageAccountQueuePropertiesLogging
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a>

---

##### `minute_metrics_input`<sup>Optional</sup> <a name="minute_metrics_input" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.minuteMetricsInput"></a>

```python
minute_metrics_input: StorageAccountQueuePropertiesMinuteMetrics
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a>

---

##### `storage_account_id_input`<sup>Optional</sup> <a name="storage_account_id_input" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.storageAccountIdInput"></a>

```python
storage_account_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | StorageAccountQueuePropertiesTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageAccountQueuePropertiesConfig <a name="StorageAccountQueuePropertiesConfig" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueuePropertiesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  storage_account_id: str,
  cors_rule: IResolvable | typing.List[StorageAccountQueuePropertiesCorsRule] = None,
  hour_metrics: StorageAccountQueuePropertiesHourMetrics = None,
  id: str = None,
  logging: StorageAccountQueuePropertiesLogging = None,
  minute_metrics: StorageAccountQueuePropertiesMinuteMetrics = None,
  timeouts: StorageAccountQueuePropertiesTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#storage_account_id StorageAccountQueueProperties#storage_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.corsRule">cors_rule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>]</code> | cors_rule block. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.hourMetrics">hour_metrics</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a></code> | hour_metrics block. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#id StorageAccountQueueProperties#id}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.logging">logging</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a></code> | logging block. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.minuteMetrics">minute_metrics</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a></code> | minute_metrics block. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#storage_account_id StorageAccountQueueProperties#storage_account_id}.

---

##### `cors_rule`<sup>Optional</sup> <a name="cors_rule" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.corsRule"></a>

```python
cors_rule: IResolvable | typing.List[StorageAccountQueuePropertiesCorsRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>]

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#cors_rule StorageAccountQueueProperties#cors_rule}

---

##### `hour_metrics`<sup>Optional</sup> <a name="hour_metrics" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.hourMetrics"></a>

```python
hour_metrics: StorageAccountQueuePropertiesHourMetrics
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a>

hour_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#hour_metrics StorageAccountQueueProperties#hour_metrics}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#id StorageAccountQueueProperties#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.logging"></a>

```python
logging: StorageAccountQueuePropertiesLogging
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#logging StorageAccountQueueProperties#logging}

---

##### `minute_metrics`<sup>Optional</sup> <a name="minute_metrics" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.minuteMetrics"></a>

```python
minute_metrics: StorageAccountQueuePropertiesMinuteMetrics
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a>

minute_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#minute_metrics StorageAccountQueueProperties#minute_metrics}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.timeouts"></a>

```python
timeouts: StorageAccountQueuePropertiesTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#timeouts StorageAccountQueueProperties#timeouts}

---

### StorageAccountQueuePropertiesCorsRule <a name="StorageAccountQueuePropertiesCorsRule" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule(
  allowed_headers: typing.List[str],
  allowed_methods: typing.List[str],
  allowed_origins: typing.List[str],
  exposed_headers: typing.List[str],
  max_age_in_seconds: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule.property.allowedHeaders">allowed_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#allowed_headers StorageAccountQueueProperties#allowed_headers}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#allowed_methods StorageAccountQueueProperties#allowed_methods}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#allowed_origins StorageAccountQueueProperties#allowed_origins}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule.property.exposedHeaders">exposed_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#exposed_headers StorageAccountQueueProperties#exposed_headers}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule.property.maxAgeInSeconds">max_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#max_age_in_seconds StorageAccountQueueProperties#max_age_in_seconds}. |

---

##### `allowed_headers`<sup>Required</sup> <a name="allowed_headers" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule.property.allowedHeaders"></a>

```python
allowed_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#allowed_headers StorageAccountQueueProperties#allowed_headers}.

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#allowed_methods StorageAccountQueueProperties#allowed_methods}.

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#allowed_origins StorageAccountQueueProperties#allowed_origins}.

---

##### `exposed_headers`<sup>Required</sup> <a name="exposed_headers" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule.property.exposedHeaders"></a>

```python
exposed_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#exposed_headers StorageAccountQueueProperties#exposed_headers}.

---

##### `max_age_in_seconds`<sup>Required</sup> <a name="max_age_in_seconds" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule.property.maxAgeInSeconds"></a>

```python
max_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#max_age_in_seconds StorageAccountQueueProperties#max_age_in_seconds}.

---

### StorageAccountQueuePropertiesHourMetrics <a name="StorageAccountQueuePropertiesHourMetrics" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics(
  version: str,
  include_apis: bool | IResolvable = None,
  retention_policy_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#version StorageAccountQueueProperties#version}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics.property.includeApis">include_apis</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueueProperties#include_apis}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics.property.retentionPolicyDays">retention_policy_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueueProperties#retention_policy_days}. |

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#version StorageAccountQueueProperties#version}.

---

##### `include_apis`<sup>Optional</sup> <a name="include_apis" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics.property.includeApis"></a>

```python
include_apis: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueueProperties#include_apis}.

---

##### `retention_policy_days`<sup>Optional</sup> <a name="retention_policy_days" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics.property.retentionPolicyDays"></a>

```python
retention_policy_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueueProperties#retention_policy_days}.

---

### StorageAccountQueuePropertiesLogging <a name="StorageAccountQueuePropertiesLogging" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueuePropertiesLogging(
  delete: bool | IResolvable,
  read: bool | IResolvable,
  version: str,
  write: bool | IResolvable,
  retention_policy_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging.property.delete">delete</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueueProperties#delete}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging.property.read">read</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#read StorageAccountQueueProperties#read}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#version StorageAccountQueueProperties#version}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging.property.write">write</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#write StorageAccountQueueProperties#write}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging.property.retentionPolicyDays">retention_policy_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueueProperties#retention_policy_days}. |

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging.property.delete"></a>

```python
delete: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueueProperties#delete}.

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging.property.read"></a>

```python
read: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#read StorageAccountQueueProperties#read}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#version StorageAccountQueueProperties#version}.

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging.property.write"></a>

```python
write: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#write StorageAccountQueueProperties#write}.

---

##### `retention_policy_days`<sup>Optional</sup> <a name="retention_policy_days" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging.property.retentionPolicyDays"></a>

```python
retention_policy_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueueProperties#retention_policy_days}.

---

### StorageAccountQueuePropertiesMinuteMetrics <a name="StorageAccountQueuePropertiesMinuteMetrics" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics(
  version: str,
  include_apis: bool | IResolvable = None,
  retention_policy_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#version StorageAccountQueueProperties#version}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics.property.includeApis">include_apis</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueueProperties#include_apis}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics.property.retentionPolicyDays">retention_policy_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueueProperties#retention_policy_days}. |

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#version StorageAccountQueueProperties#version}.

---

##### `include_apis`<sup>Optional</sup> <a name="include_apis" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics.property.includeApis"></a>

```python
include_apis: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueueProperties#include_apis}.

---

##### `retention_policy_days`<sup>Optional</sup> <a name="retention_policy_days" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics.property.retentionPolicyDays"></a>

```python
retention_policy_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueueProperties#retention_policy_days}.

---

### StorageAccountQueuePropertiesTimeouts <a name="StorageAccountQueuePropertiesTimeouts" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#create StorageAccountQueueProperties#create}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueueProperties#delete}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#read StorageAccountQueueProperties#read}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#update StorageAccountQueueProperties#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#create StorageAccountQueueProperties#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueueProperties#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#read StorageAccountQueueProperties#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/storage_account_queue_properties#update StorageAccountQueueProperties#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageAccountQueuePropertiesCorsRuleList <a name="StorageAccountQueuePropertiesCorsRuleList" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageAccountQueuePropertiesCorsRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[StorageAccountQueuePropertiesCorsRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>]

---


### StorageAccountQueuePropertiesCorsRuleOutputReference <a name="StorageAccountQueuePropertiesCorsRuleOutputReference" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedHeadersInput">allowed_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedMethodsInput">allowed_methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedOriginsInput">allowed_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.exposedHeadersInput">exposed_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput">max_age_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedHeaders">allowed_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.exposedHeaders">exposed_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.maxAgeInSeconds">max_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_headers_input`<sup>Optional</sup> <a name="allowed_headers_input" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedHeadersInput"></a>

```python
allowed_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_methods_input`<sup>Optional</sup> <a name="allowed_methods_input" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedMethodsInput"></a>

```python
allowed_methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins_input`<sup>Optional</sup> <a name="allowed_origins_input" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedOriginsInput"></a>

```python
allowed_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exposed_headers_input`<sup>Optional</sup> <a name="exposed_headers_input" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.exposedHeadersInput"></a>

```python
exposed_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age_in_seconds_input`<sup>Optional</sup> <a name="max_age_in_seconds_input" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput"></a>

```python
max_age_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowed_headers`<sup>Required</sup> <a name="allowed_headers" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedHeaders"></a>

```python
allowed_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exposed_headers`<sup>Required</sup> <a name="exposed_headers" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.exposedHeaders"></a>

```python
exposed_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age_in_seconds`<sup>Required</sup> <a name="max_age_in_seconds" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.maxAgeInSeconds"></a>

```python
max_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StorageAccountQueuePropertiesCorsRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>

---


### StorageAccountQueuePropertiesHourMetricsOutputReference <a name="StorageAccountQueuePropertiesHourMetricsOutputReference" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.resetIncludeApis">reset_include_apis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.resetRetentionPolicyDays">reset_retention_policy_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_include_apis` <a name="reset_include_apis" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.resetIncludeApis"></a>

```python
def reset_include_apis() -> None
```

##### `reset_retention_policy_days` <a name="reset_retention_policy_days" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.resetRetentionPolicyDays"></a>

```python
def reset_retention_policy_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.includeApisInput">include_apis_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.retentionPolicyDaysInput">retention_policy_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.includeApis">include_apis</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.retentionPolicyDays">retention_policy_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_apis_input`<sup>Optional</sup> <a name="include_apis_input" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.includeApisInput"></a>

```python
include_apis_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retention_policy_days_input`<sup>Optional</sup> <a name="retention_policy_days_input" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.retentionPolicyDaysInput"></a>

```python
retention_policy_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `include_apis`<sup>Required</sup> <a name="include_apis" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.includeApis"></a>

```python
include_apis: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retention_policy_days`<sup>Required</sup> <a name="retention_policy_days" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.retentionPolicyDays"></a>

```python
retention_policy_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.internalValue"></a>

```python
internal_value: StorageAccountQueuePropertiesHourMetrics
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a>

---


### StorageAccountQueuePropertiesLoggingOutputReference <a name="StorageAccountQueuePropertiesLoggingOutputReference" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.resetRetentionPolicyDays">reset_retention_policy_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_retention_policy_days` <a name="reset_retention_policy_days" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.resetRetentionPolicyDays"></a>

```python
def reset_retention_policy_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.deleteInput">delete_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.readInput">read_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.retentionPolicyDaysInput">retention_policy_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.writeInput">write_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.delete">delete</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.read">read</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.retentionPolicyDays">retention_policy_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.write">write</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.deleteInput"></a>

```python
delete_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.readInput"></a>

```python
read_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retention_policy_days_input`<sup>Optional</sup> <a name="retention_policy_days_input" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.retentionPolicyDaysInput"></a>

```python
retention_policy_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `write_input`<sup>Optional</sup> <a name="write_input" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.writeInput"></a>

```python
write_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.delete"></a>

```python
delete: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.read"></a>

```python
read: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retention_policy_days`<sup>Required</sup> <a name="retention_policy_days" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.retentionPolicyDays"></a>

```python
retention_policy_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.write"></a>

```python
write: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.internalValue"></a>

```python
internal_value: StorageAccountQueuePropertiesLogging
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a>

---


### StorageAccountQueuePropertiesMinuteMetricsOutputReference <a name="StorageAccountQueuePropertiesMinuteMetricsOutputReference" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resetIncludeApis">reset_include_apis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resetRetentionPolicyDays">reset_retention_policy_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_include_apis` <a name="reset_include_apis" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resetIncludeApis"></a>

```python
def reset_include_apis() -> None
```

##### `reset_retention_policy_days` <a name="reset_retention_policy_days" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resetRetentionPolicyDays"></a>

```python
def reset_retention_policy_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.includeApisInput">include_apis_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.retentionPolicyDaysInput">retention_policy_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.includeApis">include_apis</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.retentionPolicyDays">retention_policy_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_apis_input`<sup>Optional</sup> <a name="include_apis_input" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.includeApisInput"></a>

```python
include_apis_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retention_policy_days_input`<sup>Optional</sup> <a name="retention_policy_days_input" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.retentionPolicyDaysInput"></a>

```python
retention_policy_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `include_apis`<sup>Required</sup> <a name="include_apis" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.includeApis"></a>

```python
include_apis: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retention_policy_days`<sup>Required</sup> <a name="retention_policy_days" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.retentionPolicyDays"></a>

```python
retention_policy_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.internalValue"></a>

```python
internal_value: StorageAccountQueuePropertiesMinuteMetrics
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a>

---


### StorageAccountQueuePropertiesTimeoutsOutputReference <a name="StorageAccountQueuePropertiesTimeoutsOutputReference" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StorageAccountQueuePropertiesTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a>

---



