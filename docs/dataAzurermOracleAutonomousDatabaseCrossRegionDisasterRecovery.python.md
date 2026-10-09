# `dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery` Submodule <a name="`dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery` Submodule" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery <a name="DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/data-sources/oracle_autonomous_database_cross_region_disaster_recovery azurerm_oracle_autonomous_database_cross_region_disaster_recovery}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_oracle_autonomous_database_cross_region_disaster_recovery

dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery(
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
  id: str = None,
  timeouts: DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/data-sources/oracle_autonomous_database_cross_region_disaster_recovery#name DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/data-sources/oracle_autonomous_database_cross_region_disaster_recovery#resource_group_name DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/data-sources/oracle_autonomous_database_cross_region_disaster_recovery#id DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts">DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/data-sources/oracle_autonomous_database_cross_region_disaster_recovery#name DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/data-sources/oracle_autonomous_database_cross_region_disaster_recovery#resource_group_name DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/data-sources/oracle_autonomous_database_cross_region_disaster_recovery#id DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts">DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/data-sources/oracle_autonomous_database_cross_region_disaster_recovery#timeouts DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/data-sources/oracle_autonomous_database_cross_region_disaster_recovery#read DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.isConstruct"></a>

```python
from cdktn_provider_azurerm import data_azurerm_oracle_autonomous_database_cross_region_disaster_recovery

dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import data_azurerm_oracle_autonomous_database_cross_region_disaster_recovery

dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.isTerraformDataSource"></a>

```python
from cdktn_provider_azurerm import data_azurerm_oracle_autonomous_database_cross_region_disaster_recovery

dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import data_azurerm_oracle_autonomous_database_cross_region_disaster_recovery

dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/data-sources/oracle_autonomous_database_cross_region_disaster_recovery#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.actualUsedDataStorageSizeInTb">actual_used_data_storage_size_in_tb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.allocatedStorageSizeInTb">allocated_storage_size_in_tb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.autoScalingEnabled">auto_scaling_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.autoScalingForStorageEnabled">auto_scaling_for_storage_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.availableUpgradeVersions">available_upgrade_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.backupRetentionPeriodInDays">backup_retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.characterSet">character_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.customerContacts">customer_contacts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.databaseType">database_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.databaseVersion">database_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.databaseWorkload">database_workload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.dataStorageSizeInGb">data_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.dataStorageSizeInTb">data_storage_size_in_tb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.failedDataRecoveryInSeconds">failed_data_recovery_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.inMemoryAreaInGb">in_memory_area_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.localAdgAutoFailoverMaximumDataLossLimitInSeconds">local_adg_auto_failover_maximum_data_loss_limit_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.localDataGuardEnabled">local_data_guard_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.memoryPerOracleComputeUnitInGb">memory_per_oracle_compute_unit_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.mtlsConnectionRequired">mtls_connection_required</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.nationalCharacterSet">national_character_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.nextLongTermBackupTimestampInUtc">next_long_term_backup_timestamp_in_utc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.ociUrl">oci_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.peerDatabaseIds">peer_database_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.preview">preview</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.previewVersionWithServiceTermsAccepted">preview_version_with_service_terms_accepted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.privateEndpointIp">private_endpoint_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.privateEndpointLabel">private_endpoint_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.privateEndpointUrl">private_endpoint_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.provisionableCpus">provisionable_cpus</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.remoteDataGuardEnabled">remote_data_guard_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.remoteDisasterRecoveryType">remote_disaster_recovery_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.replicateAutomaticBackupsEnabled">replicate_automatic_backups_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.serviceConsoleUrl">service_console_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.sourceAutonomousDatabaseId">source_autonomous_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.sourceLocation">source_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.sourceOcid">source_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.sqlWebDeveloperUrl">sql_web_developer_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeCreatedInUtc">time_created_in_utc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeDataGuardRoleChangedInUtc">time_data_guard_role_changed_in_utc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeDeletionOfFreeAutonomousDatabaseInUtc">time_deletion_of_free_autonomous_database_in_utc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeLocalDataGuardEnabledInUtc">time_local_data_guard_enabled_in_utc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeMaintenanceBeginInUtc">time_maintenance_begin_in_utc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeMaintenanceEndInUtc">time_maintenance_end_in_utc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeOfLastFailoverInUtc">time_of_last_failover_in_utc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeOfLastRefreshInUtc">time_of_last_refresh_in_utc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeOfLastRefreshPointInUtc">time_of_last_refresh_point_in_utc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeOfLastSwitchoverInUtc">time_of_last_switchover_in_utc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference">DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeReclamationOfFreeAutonomousDatabaseInUtc">time_reclamation_of_free_autonomous_database_in_utc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.usedDataStorageSizeInGb">used_data_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.usedDataStorageSizeInTb">used_data_storage_size_in_tb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts">DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `actual_used_data_storage_size_in_tb`<sup>Required</sup> <a name="actual_used_data_storage_size_in_tb" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.actualUsedDataStorageSizeInTb"></a>

```python
actual_used_data_storage_size_in_tb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allocated_storage_size_in_tb`<sup>Required</sup> <a name="allocated_storage_size_in_tb" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.allocatedStorageSizeInTb"></a>

```python
allocated_storage_size_in_tb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_scaling_enabled`<sup>Required</sup> <a name="auto_scaling_enabled" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.autoScalingEnabled"></a>

```python
auto_scaling_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `auto_scaling_for_storage_enabled`<sup>Required</sup> <a name="auto_scaling_for_storage_enabled" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.autoScalingForStorageEnabled"></a>

```python
auto_scaling_for_storage_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `available_upgrade_versions`<sup>Required</sup> <a name="available_upgrade_versions" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.availableUpgradeVersions"></a>

```python
available_upgrade_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backup_retention_period_in_days`<sup>Required</sup> <a name="backup_retention_period_in_days" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.backupRetentionPeriodInDays"></a>

```python
backup_retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `character_set`<sup>Required</sup> <a name="character_set" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.characterSet"></a>

```python
character_set: str
```

- *Type:* str

---

##### `compute_count`<sup>Required</sup> <a name="compute_count" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `customer_contacts`<sup>Required</sup> <a name="customer_contacts" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.customerContacts"></a>

```python
customer_contacts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database_type`<sup>Required</sup> <a name="database_type" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.databaseType"></a>

```python
database_type: str
```

- *Type:* str

---

##### `database_version`<sup>Required</sup> <a name="database_version" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.databaseVersion"></a>

```python
database_version: str
```

- *Type:* str

---

##### `database_workload`<sup>Required</sup> <a name="database_workload" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.databaseWorkload"></a>

```python
database_workload: str
```

- *Type:* str

---

##### `data_storage_size_in_gb`<sup>Required</sup> <a name="data_storage_size_in_gb" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.dataStorageSizeInGb"></a>

```python
data_storage_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_tb`<sup>Required</sup> <a name="data_storage_size_in_tb" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.dataStorageSizeInTb"></a>

```python
data_storage_size_in_tb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `failed_data_recovery_in_seconds`<sup>Required</sup> <a name="failed_data_recovery_in_seconds" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.failedDataRecoveryInSeconds"></a>

```python
failed_data_recovery_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `in_memory_area_in_gb`<sup>Required</sup> <a name="in_memory_area_in_gb" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.inMemoryAreaInGb"></a>

```python
in_memory_area_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `local_adg_auto_failover_maximum_data_loss_limit_in_seconds`<sup>Required</sup> <a name="local_adg_auto_failover_maximum_data_loss_limit_in_seconds" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.localAdgAutoFailoverMaximumDataLossLimitInSeconds"></a>

```python
local_adg_auto_failover_maximum_data_loss_limit_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_data_guard_enabled`<sup>Required</sup> <a name="local_data_guard_enabled" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.localDataGuardEnabled"></a>

```python
local_data_guard_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `memory_per_oracle_compute_unit_in_gb`<sup>Required</sup> <a name="memory_per_oracle_compute_unit_in_gb" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.memoryPerOracleComputeUnitInGb"></a>

```python
memory_per_oracle_compute_unit_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mtls_connection_required`<sup>Required</sup> <a name="mtls_connection_required" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.mtlsConnectionRequired"></a>

```python
mtls_connection_required: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `national_character_set`<sup>Required</sup> <a name="national_character_set" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.nationalCharacterSet"></a>

```python
national_character_set: str
```

- *Type:* str

---

##### `next_long_term_backup_timestamp_in_utc`<sup>Required</sup> <a name="next_long_term_backup_timestamp_in_utc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.nextLongTermBackupTimestampInUtc"></a>

```python
next_long_term_backup_timestamp_in_utc: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `oci_url`<sup>Required</sup> <a name="oci_url" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.ociUrl"></a>

```python
oci_url: str
```

- *Type:* str

---

##### `peer_database_ids`<sup>Required</sup> <a name="peer_database_ids" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.peerDatabaseIds"></a>

```python
peer_database_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.preview"></a>

```python
preview: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `preview_version_with_service_terms_accepted`<sup>Required</sup> <a name="preview_version_with_service_terms_accepted" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.previewVersionWithServiceTermsAccepted"></a>

```python
preview_version_with_service_terms_accepted: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `private_endpoint_ip`<sup>Required</sup> <a name="private_endpoint_ip" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.privateEndpointIp"></a>

```python
private_endpoint_ip: str
```

- *Type:* str

---

##### `private_endpoint_label`<sup>Required</sup> <a name="private_endpoint_label" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.privateEndpointLabel"></a>

```python
private_endpoint_label: str
```

- *Type:* str

---

##### `private_endpoint_url`<sup>Required</sup> <a name="private_endpoint_url" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.privateEndpointUrl"></a>

```python
private_endpoint_url: str
```

- *Type:* str

---

##### `provisionable_cpus`<sup>Required</sup> <a name="provisionable_cpus" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.provisionableCpus"></a>

```python
provisionable_cpus: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `remote_data_guard_enabled`<sup>Required</sup> <a name="remote_data_guard_enabled" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.remoteDataGuardEnabled"></a>

```python
remote_data_guard_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `remote_disaster_recovery_type`<sup>Required</sup> <a name="remote_disaster_recovery_type" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.remoteDisasterRecoveryType"></a>

```python
remote_disaster_recovery_type: str
```

- *Type:* str

---

##### `replicate_automatic_backups_enabled`<sup>Required</sup> <a name="replicate_automatic_backups_enabled" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.replicateAutomaticBackupsEnabled"></a>

```python
replicate_automatic_backups_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `service_console_url`<sup>Required</sup> <a name="service_console_url" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.serviceConsoleUrl"></a>

```python
service_console_url: str
```

- *Type:* str

---

##### `source_autonomous_database_id`<sup>Required</sup> <a name="source_autonomous_database_id" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.sourceAutonomousDatabaseId"></a>

```python
source_autonomous_database_id: str
```

- *Type:* str

---

##### `source_location`<sup>Required</sup> <a name="source_location" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.sourceLocation"></a>

```python
source_location: str
```

- *Type:* str

---

##### `source_ocid`<sup>Required</sup> <a name="source_ocid" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.sourceOcid"></a>

```python
source_ocid: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `sql_web_developer_url`<sup>Required</sup> <a name="sql_web_developer_url" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.sqlWebDeveloperUrl"></a>

```python
sql_web_developer_url: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `time_created_in_utc`<sup>Required</sup> <a name="time_created_in_utc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeCreatedInUtc"></a>

```python
time_created_in_utc: str
```

- *Type:* str

---

##### `time_data_guard_role_changed_in_utc`<sup>Required</sup> <a name="time_data_guard_role_changed_in_utc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeDataGuardRoleChangedInUtc"></a>

```python
time_data_guard_role_changed_in_utc: str
```

- *Type:* str

---

##### `time_deletion_of_free_autonomous_database_in_utc`<sup>Required</sup> <a name="time_deletion_of_free_autonomous_database_in_utc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeDeletionOfFreeAutonomousDatabaseInUtc"></a>

```python
time_deletion_of_free_autonomous_database_in_utc: str
```

- *Type:* str

---

##### `time_local_data_guard_enabled_in_utc`<sup>Required</sup> <a name="time_local_data_guard_enabled_in_utc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeLocalDataGuardEnabledInUtc"></a>

```python
time_local_data_guard_enabled_in_utc: str
```

- *Type:* str

---

##### `time_maintenance_begin_in_utc`<sup>Required</sup> <a name="time_maintenance_begin_in_utc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeMaintenanceBeginInUtc"></a>

```python
time_maintenance_begin_in_utc: str
```

- *Type:* str

---

##### `time_maintenance_end_in_utc`<sup>Required</sup> <a name="time_maintenance_end_in_utc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeMaintenanceEndInUtc"></a>

```python
time_maintenance_end_in_utc: str
```

- *Type:* str

---

##### `time_of_last_failover_in_utc`<sup>Required</sup> <a name="time_of_last_failover_in_utc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeOfLastFailoverInUtc"></a>

```python
time_of_last_failover_in_utc: str
```

- *Type:* str

---

##### `time_of_last_refresh_in_utc`<sup>Required</sup> <a name="time_of_last_refresh_in_utc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeOfLastRefreshInUtc"></a>

```python
time_of_last_refresh_in_utc: str
```

- *Type:* str

---

##### `time_of_last_refresh_point_in_utc`<sup>Required</sup> <a name="time_of_last_refresh_point_in_utc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeOfLastRefreshPointInUtc"></a>

```python
time_of_last_refresh_point_in_utc: str
```

- *Type:* str

---

##### `time_of_last_switchover_in_utc`<sup>Required</sup> <a name="time_of_last_switchover_in_utc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeOfLastSwitchoverInUtc"></a>

```python
time_of_last_switchover_in_utc: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeouts"></a>

```python
timeouts: DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference">DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference</a>

---

##### `time_reclamation_of_free_autonomous_database_in_utc`<sup>Required</sup> <a name="time_reclamation_of_free_autonomous_database_in_utc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeReclamationOfFreeAutonomousDatabaseInUtc"></a>

```python
time_reclamation_of_free_autonomous_database_in_utc: str
```

- *Type:* str

---

##### `used_data_storage_size_in_gb`<sup>Required</sup> <a name="used_data_storage_size_in_gb" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.usedDataStorageSizeInGb"></a>

```python
used_data_storage_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `used_data_storage_size_in_tb`<sup>Required</sup> <a name="used_data_storage_size_in_tb" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.usedDataStorageSizeInTb"></a>

```python
used_data_storage_size_in_tb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts">DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig <a name="DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_oracle_autonomous_database_cross_region_disaster_recovery

dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/data-sources/oracle_autonomous_database_cross_region_disaster_recovery#name DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/data-sources/oracle_autonomous_database_cross_region_disaster_recovery#resource_group_name DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/data-sources/oracle_autonomous_database_cross_region_disaster_recovery#id DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts">DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/data-sources/oracle_autonomous_database_cross_region_disaster_recovery#name DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/data-sources/oracle_autonomous_database_cross_region_disaster_recovery#resource_group_name DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/data-sources/oracle_autonomous_database_cross_region_disaster_recovery#id DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.timeouts"></a>

```python
timeouts: DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts">DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/data-sources/oracle_autonomous_database_cross_region_disaster_recovery#timeouts DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery#timeouts}

---

### DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts <a name="DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_oracle_autonomous_database_cross_region_disaster_recovery

dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/data-sources/oracle_autonomous_database_cross_region_disaster_recovery#read DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/data-sources/oracle_autonomous_database_cross_region_disaster_recovery#read DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference <a name="DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_oracle_autonomous_database_cross_region_disaster_recovery

dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts">DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts">DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts</a>

---



