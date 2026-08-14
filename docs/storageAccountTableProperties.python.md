# `storageAccountTableProperties` Submodule <a name="`storageAccountTableProperties` Submodule" id="@cdktn/provider-azurerm.storageAccountTableProperties"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageAccountTableProperties <a name="StorageAccountTableProperties" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties azurerm_storage_account_table_properties}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_account_table_properties

storageAccountTableProperties.StorageAccountTableProperties(
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
  cors_rule: IResolvable | typing.List[StorageAccountTablePropertiesCorsRule] = None,
  hour_metrics: StorageAccountTablePropertiesHourMetrics = None,
  id: str = None,
  logging: StorageAccountTablePropertiesLogging = None,
  minute_metrics: StorageAccountTablePropertiesMinuteMetrics = None,
  timeouts: StorageAccountTablePropertiesTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#storage_account_id StorageAccountTableProperties#storage_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.corsRule">cors_rule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule">StorageAccountTablePropertiesCorsRule</a>]</code> | cors_rule block. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.hourMetrics">hour_metrics</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics">StorageAccountTablePropertiesHourMetrics</a></code> | hour_metrics block. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#id StorageAccountTableProperties#id}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.logging">logging</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging">StorageAccountTablePropertiesLogging</a></code> | logging block. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.minuteMetrics">minute_metrics</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics">StorageAccountTablePropertiesMinuteMetrics</a></code> | minute_metrics block. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts">StorageAccountTablePropertiesTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.storageAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#storage_account_id StorageAccountTableProperties#storage_account_id}.

---

##### `cors_rule`<sup>Optional</sup> <a name="cors_rule" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.corsRule"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule">StorageAccountTablePropertiesCorsRule</a>]

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#cors_rule StorageAccountTableProperties#cors_rule}

---

##### `hour_metrics`<sup>Optional</sup> <a name="hour_metrics" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.hourMetrics"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics">StorageAccountTablePropertiesHourMetrics</a>

hour_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#hour_metrics StorageAccountTableProperties#hour_metrics}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#id StorageAccountTableProperties#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.logging"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging">StorageAccountTablePropertiesLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#logging StorageAccountTableProperties#logging}

---

##### `minute_metrics`<sup>Optional</sup> <a name="minute_metrics" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.minuteMetrics"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics">StorageAccountTablePropertiesMinuteMetrics</a>

minute_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#minute_metrics StorageAccountTableProperties#minute_metrics}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts">StorageAccountTablePropertiesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#timeouts StorageAccountTableProperties#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putCorsRule">put_cors_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putHourMetrics">put_hour_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putLogging">put_logging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putMinuteMetrics">put_minute_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetCorsRule">reset_cors_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetHourMetrics">reset_hour_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetLogging">reset_logging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetMinuteMetrics">reset_minute_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cors_rule` <a name="put_cors_rule" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putCorsRule"></a>

```python
def put_cors_rule(
  value: IResolvable | typing.List[StorageAccountTablePropertiesCorsRule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putCorsRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule">StorageAccountTablePropertiesCorsRule</a>]

---

##### `put_hour_metrics` <a name="put_hour_metrics" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putHourMetrics"></a>

```python
def put_hour_metrics(
  version: str,
  include_apis: bool | IResolvable = None,
  retention_policy_days: typing.Union[int, float] = None
) -> None
```

###### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putHourMetrics.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#version StorageAccountTableProperties#version}.

---

###### `include_apis`<sup>Optional</sup> <a name="include_apis" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putHourMetrics.parameter.includeApis"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#include_apis StorageAccountTableProperties#include_apis}.

---

###### `retention_policy_days`<sup>Optional</sup> <a name="retention_policy_days" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putHourMetrics.parameter.retentionPolicyDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#retention_policy_days StorageAccountTableProperties#retention_policy_days}.

---

##### `put_logging` <a name="put_logging" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putLogging"></a>

```python
def put_logging(
  delete: bool | IResolvable,
  read: bool | IResolvable,
  version: str,
  write: bool | IResolvable,
  retention_policy_days: typing.Union[int, float] = None
) -> None
```

###### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putLogging.parameter.delete"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#delete StorageAccountTableProperties#delete}.

---

###### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putLogging.parameter.read"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#read StorageAccountTableProperties#read}.

---

###### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putLogging.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#version StorageAccountTableProperties#version}.

---

###### `write`<sup>Required</sup> <a name="write" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putLogging.parameter.write"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#write StorageAccountTableProperties#write}.

---

###### `retention_policy_days`<sup>Optional</sup> <a name="retention_policy_days" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putLogging.parameter.retentionPolicyDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#retention_policy_days StorageAccountTableProperties#retention_policy_days}.

---

##### `put_minute_metrics` <a name="put_minute_metrics" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putMinuteMetrics"></a>

```python
def put_minute_metrics(
  version: str,
  include_apis: bool | IResolvable = None,
  retention_policy_days: typing.Union[int, float] = None
) -> None
```

###### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putMinuteMetrics.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#version StorageAccountTableProperties#version}.

---

###### `include_apis`<sup>Optional</sup> <a name="include_apis" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putMinuteMetrics.parameter.includeApis"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#include_apis StorageAccountTableProperties#include_apis}.

---

###### `retention_policy_days`<sup>Optional</sup> <a name="retention_policy_days" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putMinuteMetrics.parameter.retentionPolicyDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#retention_policy_days StorageAccountTableProperties#retention_policy_days}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#create StorageAccountTableProperties#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#delete StorageAccountTableProperties#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#read StorageAccountTableProperties#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#update StorageAccountTableProperties#update}.

---

##### `reset_cors_rule` <a name="reset_cors_rule" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetCorsRule"></a>

```python
def reset_cors_rule() -> None
```

##### `reset_hour_metrics` <a name="reset_hour_metrics" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetHourMetrics"></a>

```python
def reset_hour_metrics() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_logging` <a name="reset_logging" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetLogging"></a>

```python
def reset_logging() -> None
```

##### `reset_minute_metrics` <a name="reset_minute_metrics" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetMinuteMetrics"></a>

```python
def reset_minute_metrics() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a StorageAccountTableProperties resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.isConstruct"></a>

```python
from cdktn_provider_azurerm import storage_account_table_properties

storageAccountTableProperties.StorageAccountTableProperties.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import storage_account_table_properties

storageAccountTableProperties.StorageAccountTableProperties.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.isTerraformResource"></a>

```python
from cdktn_provider_azurerm import storage_account_table_properties

storageAccountTableProperties.StorageAccountTableProperties.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import storage_account_table_properties

storageAccountTableProperties.StorageAccountTableProperties.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a StorageAccountTableProperties resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StorageAccountTableProperties to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StorageAccountTableProperties that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StorageAccountTableProperties to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.corsRule">cors_rule</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList">StorageAccountTablePropertiesCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.hourMetrics">hour_metrics</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference">StorageAccountTablePropertiesHourMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.logging">logging</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference">StorageAccountTablePropertiesLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.minuteMetrics">minute_metrics</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference">StorageAccountTablePropertiesMinuteMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference">StorageAccountTablePropertiesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.corsRuleInput">cors_rule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule">StorageAccountTablePropertiesCorsRule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.hourMetricsInput">hour_metrics_input</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics">StorageAccountTablePropertiesHourMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.loggingInput">logging_input</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging">StorageAccountTablePropertiesLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.minuteMetricsInput">minute_metrics_input</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics">StorageAccountTablePropertiesMinuteMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.storageAccountIdInput">storage_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts">StorageAccountTablePropertiesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cors_rule`<sup>Required</sup> <a name="cors_rule" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.corsRule"></a>

```python
cors_rule: StorageAccountTablePropertiesCorsRuleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList">StorageAccountTablePropertiesCorsRuleList</a>

---

##### `hour_metrics`<sup>Required</sup> <a name="hour_metrics" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.hourMetrics"></a>

```python
hour_metrics: StorageAccountTablePropertiesHourMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference">StorageAccountTablePropertiesHourMetricsOutputReference</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.logging"></a>

```python
logging: StorageAccountTablePropertiesLoggingOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference">StorageAccountTablePropertiesLoggingOutputReference</a>

---

##### `minute_metrics`<sup>Required</sup> <a name="minute_metrics" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.minuteMetrics"></a>

```python
minute_metrics: StorageAccountTablePropertiesMinuteMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference">StorageAccountTablePropertiesMinuteMetricsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.timeouts"></a>

```python
timeouts: StorageAccountTablePropertiesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference">StorageAccountTablePropertiesTimeoutsOutputReference</a>

---

##### `cors_rule_input`<sup>Optional</sup> <a name="cors_rule_input" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.corsRuleInput"></a>

```python
cors_rule_input: IResolvable | typing.List[StorageAccountTablePropertiesCorsRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule">StorageAccountTablePropertiesCorsRule</a>]

---

##### `hour_metrics_input`<sup>Optional</sup> <a name="hour_metrics_input" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.hourMetricsInput"></a>

```python
hour_metrics_input: StorageAccountTablePropertiesHourMetrics
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics">StorageAccountTablePropertiesHourMetrics</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `logging_input`<sup>Optional</sup> <a name="logging_input" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.loggingInput"></a>

```python
logging_input: StorageAccountTablePropertiesLogging
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging">StorageAccountTablePropertiesLogging</a>

---

##### `minute_metrics_input`<sup>Optional</sup> <a name="minute_metrics_input" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.minuteMetricsInput"></a>

```python
minute_metrics_input: StorageAccountTablePropertiesMinuteMetrics
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics">StorageAccountTablePropertiesMinuteMetrics</a>

---

##### `storage_account_id_input`<sup>Optional</sup> <a name="storage_account_id_input" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.storageAccountIdInput"></a>

```python
storage_account_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | StorageAccountTablePropertiesTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts">StorageAccountTablePropertiesTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageAccountTablePropertiesConfig <a name="StorageAccountTablePropertiesConfig" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_account_table_properties

storageAccountTableProperties.StorageAccountTablePropertiesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  storage_account_id: str,
  cors_rule: IResolvable | typing.List[StorageAccountTablePropertiesCorsRule] = None,
  hour_metrics: StorageAccountTablePropertiesHourMetrics = None,
  id: str = None,
  logging: StorageAccountTablePropertiesLogging = None,
  minute_metrics: StorageAccountTablePropertiesMinuteMetrics = None,
  timeouts: StorageAccountTablePropertiesTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#storage_account_id StorageAccountTableProperties#storage_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.corsRule">cors_rule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule">StorageAccountTablePropertiesCorsRule</a>]</code> | cors_rule block. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.hourMetrics">hour_metrics</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics">StorageAccountTablePropertiesHourMetrics</a></code> | hour_metrics block. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#id StorageAccountTableProperties#id}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.logging">logging</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging">StorageAccountTablePropertiesLogging</a></code> | logging block. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.minuteMetrics">minute_metrics</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics">StorageAccountTablePropertiesMinuteMetrics</a></code> | minute_metrics block. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts">StorageAccountTablePropertiesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#storage_account_id StorageAccountTableProperties#storage_account_id}.

---

##### `cors_rule`<sup>Optional</sup> <a name="cors_rule" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.corsRule"></a>

```python
cors_rule: IResolvable | typing.List[StorageAccountTablePropertiesCorsRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule">StorageAccountTablePropertiesCorsRule</a>]

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#cors_rule StorageAccountTableProperties#cors_rule}

---

##### `hour_metrics`<sup>Optional</sup> <a name="hour_metrics" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.hourMetrics"></a>

```python
hour_metrics: StorageAccountTablePropertiesHourMetrics
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics">StorageAccountTablePropertiesHourMetrics</a>

hour_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#hour_metrics StorageAccountTableProperties#hour_metrics}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#id StorageAccountTableProperties#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.logging"></a>

```python
logging: StorageAccountTablePropertiesLogging
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging">StorageAccountTablePropertiesLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#logging StorageAccountTableProperties#logging}

---

##### `minute_metrics`<sup>Optional</sup> <a name="minute_metrics" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.minuteMetrics"></a>

```python
minute_metrics: StorageAccountTablePropertiesMinuteMetrics
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics">StorageAccountTablePropertiesMinuteMetrics</a>

minute_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#minute_metrics StorageAccountTableProperties#minute_metrics}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.timeouts"></a>

```python
timeouts: StorageAccountTablePropertiesTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts">StorageAccountTablePropertiesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#timeouts StorageAccountTableProperties#timeouts}

---

### StorageAccountTablePropertiesCorsRule <a name="StorageAccountTablePropertiesCorsRule" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_account_table_properties

storageAccountTableProperties.StorageAccountTablePropertiesCorsRule(
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
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.property.allowedHeaders">allowed_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#allowed_headers StorageAccountTableProperties#allowed_headers}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#allowed_methods StorageAccountTableProperties#allowed_methods}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#allowed_origins StorageAccountTableProperties#allowed_origins}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.property.exposedHeaders">exposed_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#exposed_headers StorageAccountTableProperties#exposed_headers}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.property.maxAgeInSeconds">max_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#max_age_in_seconds StorageAccountTableProperties#max_age_in_seconds}. |

---

##### `allowed_headers`<sup>Required</sup> <a name="allowed_headers" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.property.allowedHeaders"></a>

```python
allowed_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#allowed_headers StorageAccountTableProperties#allowed_headers}.

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#allowed_methods StorageAccountTableProperties#allowed_methods}.

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#allowed_origins StorageAccountTableProperties#allowed_origins}.

---

##### `exposed_headers`<sup>Required</sup> <a name="exposed_headers" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.property.exposedHeaders"></a>

```python
exposed_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#exposed_headers StorageAccountTableProperties#exposed_headers}.

---

##### `max_age_in_seconds`<sup>Required</sup> <a name="max_age_in_seconds" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.property.maxAgeInSeconds"></a>

```python
max_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#max_age_in_seconds StorageAccountTableProperties#max_age_in_seconds}.

---

### StorageAccountTablePropertiesHourMetrics <a name="StorageAccountTablePropertiesHourMetrics" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_account_table_properties

storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics(
  version: str,
  include_apis: bool | IResolvable = None,
  retention_policy_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#version StorageAccountTableProperties#version}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics.property.includeApis">include_apis</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#include_apis StorageAccountTableProperties#include_apis}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics.property.retentionPolicyDays">retention_policy_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#retention_policy_days StorageAccountTableProperties#retention_policy_days}. |

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#version StorageAccountTableProperties#version}.

---

##### `include_apis`<sup>Optional</sup> <a name="include_apis" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics.property.includeApis"></a>

```python
include_apis: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#include_apis StorageAccountTableProperties#include_apis}.

---

##### `retention_policy_days`<sup>Optional</sup> <a name="retention_policy_days" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics.property.retentionPolicyDays"></a>

```python
retention_policy_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#retention_policy_days StorageAccountTableProperties#retention_policy_days}.

---

### StorageAccountTablePropertiesLogging <a name="StorageAccountTablePropertiesLogging" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_account_table_properties

storageAccountTableProperties.StorageAccountTablePropertiesLogging(
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
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.property.delete">delete</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#delete StorageAccountTableProperties#delete}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.property.read">read</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#read StorageAccountTableProperties#read}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#version StorageAccountTableProperties#version}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.property.write">write</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#write StorageAccountTableProperties#write}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.property.retentionPolicyDays">retention_policy_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#retention_policy_days StorageAccountTableProperties#retention_policy_days}. |

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.property.delete"></a>

```python
delete: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#delete StorageAccountTableProperties#delete}.

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.property.read"></a>

```python
read: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#read StorageAccountTableProperties#read}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#version StorageAccountTableProperties#version}.

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.property.write"></a>

```python
write: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#write StorageAccountTableProperties#write}.

---

##### `retention_policy_days`<sup>Optional</sup> <a name="retention_policy_days" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.property.retentionPolicyDays"></a>

```python
retention_policy_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#retention_policy_days StorageAccountTableProperties#retention_policy_days}.

---

### StorageAccountTablePropertiesMinuteMetrics <a name="StorageAccountTablePropertiesMinuteMetrics" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_account_table_properties

storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics(
  version: str,
  include_apis: bool | IResolvable = None,
  retention_policy_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#version StorageAccountTableProperties#version}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics.property.includeApis">include_apis</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#include_apis StorageAccountTableProperties#include_apis}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics.property.retentionPolicyDays">retention_policy_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#retention_policy_days StorageAccountTableProperties#retention_policy_days}. |

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#version StorageAccountTableProperties#version}.

---

##### `include_apis`<sup>Optional</sup> <a name="include_apis" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics.property.includeApis"></a>

```python
include_apis: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#include_apis StorageAccountTableProperties#include_apis}.

---

##### `retention_policy_days`<sup>Optional</sup> <a name="retention_policy_days" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics.property.retentionPolicyDays"></a>

```python
retention_policy_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#retention_policy_days StorageAccountTableProperties#retention_policy_days}.

---

### StorageAccountTablePropertiesTimeouts <a name="StorageAccountTablePropertiesTimeouts" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_account_table_properties

storageAccountTableProperties.StorageAccountTablePropertiesTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#create StorageAccountTableProperties#create}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#delete StorageAccountTableProperties#delete}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#read StorageAccountTableProperties#read}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#update StorageAccountTableProperties#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#create StorageAccountTableProperties#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#delete StorageAccountTableProperties#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#read StorageAccountTableProperties#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#update StorageAccountTableProperties#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageAccountTablePropertiesCorsRuleList <a name="StorageAccountTablePropertiesCorsRuleList" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_account_table_properties

storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageAccountTablePropertiesCorsRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule">StorageAccountTablePropertiesCorsRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[StorageAccountTablePropertiesCorsRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule">StorageAccountTablePropertiesCorsRule</a>]

---


### StorageAccountTablePropertiesCorsRuleOutputReference <a name="StorageAccountTablePropertiesCorsRuleOutputReference" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_account_table_properties

storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedHeadersInput">allowed_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedMethodsInput">allowed_methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedOriginsInput">allowed_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.exposedHeadersInput">exposed_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput">max_age_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedHeaders">allowed_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.exposedHeaders">exposed_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.maxAgeInSeconds">max_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule">StorageAccountTablePropertiesCorsRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_headers_input`<sup>Optional</sup> <a name="allowed_headers_input" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedHeadersInput"></a>

```python
allowed_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_methods_input`<sup>Optional</sup> <a name="allowed_methods_input" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedMethodsInput"></a>

```python
allowed_methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins_input`<sup>Optional</sup> <a name="allowed_origins_input" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedOriginsInput"></a>

```python
allowed_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exposed_headers_input`<sup>Optional</sup> <a name="exposed_headers_input" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.exposedHeadersInput"></a>

```python
exposed_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age_in_seconds_input`<sup>Optional</sup> <a name="max_age_in_seconds_input" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput"></a>

```python
max_age_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowed_headers`<sup>Required</sup> <a name="allowed_headers" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedHeaders"></a>

```python
allowed_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exposed_headers`<sup>Required</sup> <a name="exposed_headers" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.exposedHeaders"></a>

```python
exposed_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age_in_seconds`<sup>Required</sup> <a name="max_age_in_seconds" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.maxAgeInSeconds"></a>

```python
max_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StorageAccountTablePropertiesCorsRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule">StorageAccountTablePropertiesCorsRule</a>

---


### StorageAccountTablePropertiesHourMetricsOutputReference <a name="StorageAccountTablePropertiesHourMetricsOutputReference" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_account_table_properties

storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.resetIncludeApis">reset_include_apis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.resetRetentionPolicyDays">reset_retention_policy_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_include_apis` <a name="reset_include_apis" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.resetIncludeApis"></a>

```python
def reset_include_apis() -> None
```

##### `reset_retention_policy_days` <a name="reset_retention_policy_days" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.resetRetentionPolicyDays"></a>

```python
def reset_retention_policy_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.includeApisInput">include_apis_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.retentionPolicyDaysInput">retention_policy_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.includeApis">include_apis</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.retentionPolicyDays">retention_policy_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics">StorageAccountTablePropertiesHourMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_apis_input`<sup>Optional</sup> <a name="include_apis_input" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.includeApisInput"></a>

```python
include_apis_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retention_policy_days_input`<sup>Optional</sup> <a name="retention_policy_days_input" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.retentionPolicyDaysInput"></a>

```python
retention_policy_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `include_apis`<sup>Required</sup> <a name="include_apis" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.includeApis"></a>

```python
include_apis: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retention_policy_days`<sup>Required</sup> <a name="retention_policy_days" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.retentionPolicyDays"></a>

```python
retention_policy_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.internalValue"></a>

```python
internal_value: StorageAccountTablePropertiesHourMetrics
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics">StorageAccountTablePropertiesHourMetrics</a>

---


### StorageAccountTablePropertiesLoggingOutputReference <a name="StorageAccountTablePropertiesLoggingOutputReference" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_account_table_properties

storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.resetRetentionPolicyDays">reset_retention_policy_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_retention_policy_days` <a name="reset_retention_policy_days" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.resetRetentionPolicyDays"></a>

```python
def reset_retention_policy_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.deleteInput">delete_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.readInput">read_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.retentionPolicyDaysInput">retention_policy_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.writeInput">write_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.delete">delete</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.read">read</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.retentionPolicyDays">retention_policy_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.write">write</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging">StorageAccountTablePropertiesLogging</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.deleteInput"></a>

```python
delete_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.readInput"></a>

```python
read_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retention_policy_days_input`<sup>Optional</sup> <a name="retention_policy_days_input" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.retentionPolicyDaysInput"></a>

```python
retention_policy_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `write_input`<sup>Optional</sup> <a name="write_input" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.writeInput"></a>

```python
write_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.delete"></a>

```python
delete: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.read"></a>

```python
read: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retention_policy_days`<sup>Required</sup> <a name="retention_policy_days" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.retentionPolicyDays"></a>

```python
retention_policy_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.write"></a>

```python
write: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.internalValue"></a>

```python
internal_value: StorageAccountTablePropertiesLogging
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging">StorageAccountTablePropertiesLogging</a>

---


### StorageAccountTablePropertiesMinuteMetricsOutputReference <a name="StorageAccountTablePropertiesMinuteMetricsOutputReference" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_account_table_properties

storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.resetIncludeApis">reset_include_apis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.resetRetentionPolicyDays">reset_retention_policy_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_include_apis` <a name="reset_include_apis" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.resetIncludeApis"></a>

```python
def reset_include_apis() -> None
```

##### `reset_retention_policy_days` <a name="reset_retention_policy_days" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.resetRetentionPolicyDays"></a>

```python
def reset_retention_policy_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.includeApisInput">include_apis_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.retentionPolicyDaysInput">retention_policy_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.includeApis">include_apis</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.retentionPolicyDays">retention_policy_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics">StorageAccountTablePropertiesMinuteMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_apis_input`<sup>Optional</sup> <a name="include_apis_input" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.includeApisInput"></a>

```python
include_apis_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retention_policy_days_input`<sup>Optional</sup> <a name="retention_policy_days_input" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.retentionPolicyDaysInput"></a>

```python
retention_policy_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `include_apis`<sup>Required</sup> <a name="include_apis" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.includeApis"></a>

```python
include_apis: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retention_policy_days`<sup>Required</sup> <a name="retention_policy_days" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.retentionPolicyDays"></a>

```python
retention_policy_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.internalValue"></a>

```python
internal_value: StorageAccountTablePropertiesMinuteMetrics
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics">StorageAccountTablePropertiesMinuteMetrics</a>

---


### StorageAccountTablePropertiesTimeoutsOutputReference <a name="StorageAccountTablePropertiesTimeoutsOutputReference" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_account_table_properties

storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts">StorageAccountTablePropertiesTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StorageAccountTablePropertiesTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts">StorageAccountTablePropertiesTimeouts</a>

---



