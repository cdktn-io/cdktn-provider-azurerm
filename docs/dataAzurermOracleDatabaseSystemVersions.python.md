# `dataAzurermOracleDatabaseSystemVersions` Submodule <a name="`dataAzurermOracleDatabaseSystemVersions` Submodule" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleDatabaseSystemVersions <a name="DataAzurermOracleDatabaseSystemVersions" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions azurerm_oracle_database_system_versions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_oracle_database_system_versions

dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  database_software_image_supported: bool | IResolvable = None,
  database_system_shape: str = None,
  id: str = None,
  shape_family: str = None,
  storage_management: str = None,
  timeouts: DataAzurermOracleDatabaseSystemVersionsTimeouts = None,
  upgrade_supported: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#location DataAzurermOracleDatabaseSystemVersions#location}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.databaseSoftwareImageSupported">database_software_image_supported</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#database_software_image_supported DataAzurermOracleDatabaseSystemVersions#database_software_image_supported}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.databaseSystemShape">database_system_shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#database_system_shape DataAzurermOracleDatabaseSystemVersions#database_system_shape}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#id DataAzurermOracleDatabaseSystemVersions#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.shapeFamily">shape_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#shape_family DataAzurermOracleDatabaseSystemVersions#shape_family}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.storageManagement">storage_management</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#storage_management DataAzurermOracleDatabaseSystemVersions#storage_management}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts">DataAzurermOracleDatabaseSystemVersionsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.upgradeSupported">upgrade_supported</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#upgrade_supported DataAzurermOracleDatabaseSystemVersions#upgrade_supported}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#location DataAzurermOracleDatabaseSystemVersions#location}.

---

##### `database_software_image_supported`<sup>Optional</sup> <a name="database_software_image_supported" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.databaseSoftwareImageSupported"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#database_software_image_supported DataAzurermOracleDatabaseSystemVersions#database_software_image_supported}.

---

##### `database_system_shape`<sup>Optional</sup> <a name="database_system_shape" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.databaseSystemShape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#database_system_shape DataAzurermOracleDatabaseSystemVersions#database_system_shape}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#id DataAzurermOracleDatabaseSystemVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `shape_family`<sup>Optional</sup> <a name="shape_family" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.shapeFamily"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#shape_family DataAzurermOracleDatabaseSystemVersions#shape_family}.

---

##### `storage_management`<sup>Optional</sup> <a name="storage_management" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.storageManagement"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#storage_management DataAzurermOracleDatabaseSystemVersions#storage_management}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts">DataAzurermOracleDatabaseSystemVersionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#timeouts DataAzurermOracleDatabaseSystemVersions#timeouts}

---

##### `upgrade_supported`<sup>Optional</sup> <a name="upgrade_supported" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.upgradeSupported"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#upgrade_supported DataAzurermOracleDatabaseSystemVersions#upgrade_supported}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetDatabaseSoftwareImageSupported">reset_database_software_image_supported</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetDatabaseSystemShape">reset_database_system_shape</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetShapeFamily">reset_shape_family</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetStorageManagement">reset_storage_management</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetUpgradeSupported">reset_upgrade_supported</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#read DataAzurermOracleDatabaseSystemVersions#read}.

---

##### `reset_database_software_image_supported` <a name="reset_database_software_image_supported" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetDatabaseSoftwareImageSupported"></a>

```python
def reset_database_software_image_supported() -> None
```

##### `reset_database_system_shape` <a name="reset_database_system_shape" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetDatabaseSystemShape"></a>

```python
def reset_database_system_shape() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_shape_family` <a name="reset_shape_family" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetShapeFamily"></a>

```python
def reset_shape_family() -> None
```

##### `reset_storage_management` <a name="reset_storage_management" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetStorageManagement"></a>

```python
def reset_storage_management() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_upgrade_supported` <a name="reset_upgrade_supported" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetUpgradeSupported"></a>

```python
def reset_upgrade_supported() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAzurermOracleDatabaseSystemVersions resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isConstruct"></a>

```python
from cdktn_provider_azurerm import data_azurerm_oracle_database_system_versions

dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import data_azurerm_oracle_database_system_versions

dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isTerraformDataSource"></a>

```python
from cdktn_provider_azurerm import data_azurerm_oracle_database_system_versions

dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import data_azurerm_oracle_database_system_versions

dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAzurermOracleDatabaseSystemVersions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermOracleDatabaseSystemVersions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermOracleDatabaseSystemVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleDatabaseSystemVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference">DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.versions">versions</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList">DataAzurermOracleDatabaseSystemVersionsVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.databaseSoftwareImageSupportedInput">database_software_image_supported_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.databaseSystemShapeInput">database_system_shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.shapeFamilyInput">shape_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.storageManagementInput">storage_management_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts">DataAzurermOracleDatabaseSystemVersionsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.upgradeSupportedInput">upgrade_supported_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.databaseSoftwareImageSupported">database_software_image_supported</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.databaseSystemShape">database_system_shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.shapeFamily">shape_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.storageManagement">storage_management</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.upgradeSupported">upgrade_supported</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.timeouts"></a>

```python
timeouts: DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference">DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference</a>

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.versions"></a>

```python
versions: DataAzurermOracleDatabaseSystemVersionsVersionsList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList">DataAzurermOracleDatabaseSystemVersionsVersionsList</a>

---

##### `database_software_image_supported_input`<sup>Optional</sup> <a name="database_software_image_supported_input" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.databaseSoftwareImageSupportedInput"></a>

```python
database_software_image_supported_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `database_system_shape_input`<sup>Optional</sup> <a name="database_system_shape_input" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.databaseSystemShapeInput"></a>

```python
database_system_shape_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `shape_family_input`<sup>Optional</sup> <a name="shape_family_input" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.shapeFamilyInput"></a>

```python
shape_family_input: str
```

- *Type:* str

---

##### `storage_management_input`<sup>Optional</sup> <a name="storage_management_input" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.storageManagementInput"></a>

```python
storage_management_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataAzurermOracleDatabaseSystemVersionsTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts">DataAzurermOracleDatabaseSystemVersionsTimeouts</a>

---

##### `upgrade_supported_input`<sup>Optional</sup> <a name="upgrade_supported_input" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.upgradeSupportedInput"></a>

```python
upgrade_supported_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `database_software_image_supported`<sup>Required</sup> <a name="database_software_image_supported" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.databaseSoftwareImageSupported"></a>

```python
database_software_image_supported: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `database_system_shape`<sup>Required</sup> <a name="database_system_shape" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.databaseSystemShape"></a>

```python
database_system_shape: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `shape_family`<sup>Required</sup> <a name="shape_family" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.shapeFamily"></a>

```python
shape_family: str
```

- *Type:* str

---

##### `storage_management`<sup>Required</sup> <a name="storage_management" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.storageManagement"></a>

```python
storage_management: str
```

- *Type:* str

---

##### `upgrade_supported`<sup>Required</sup> <a name="upgrade_supported" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.upgradeSupported"></a>

```python
upgrade_supported: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleDatabaseSystemVersionsConfig <a name="DataAzurermOracleDatabaseSystemVersionsConfig" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_oracle_database_system_versions

dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  database_software_image_supported: bool | IResolvable = None,
  database_system_shape: str = None,
  id: str = None,
  shape_family: str = None,
  storage_management: str = None,
  timeouts: DataAzurermOracleDatabaseSystemVersionsTimeouts = None,
  upgrade_supported: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#location DataAzurermOracleDatabaseSystemVersions#location}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.databaseSoftwareImageSupported">database_software_image_supported</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#database_software_image_supported DataAzurermOracleDatabaseSystemVersions#database_software_image_supported}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.databaseSystemShape">database_system_shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#database_system_shape DataAzurermOracleDatabaseSystemVersions#database_system_shape}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#id DataAzurermOracleDatabaseSystemVersions#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.shapeFamily">shape_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#shape_family DataAzurermOracleDatabaseSystemVersions#shape_family}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.storageManagement">storage_management</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#storage_management DataAzurermOracleDatabaseSystemVersions#storage_management}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts">DataAzurermOracleDatabaseSystemVersionsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.upgradeSupported">upgrade_supported</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#upgrade_supported DataAzurermOracleDatabaseSystemVersions#upgrade_supported}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#location DataAzurermOracleDatabaseSystemVersions#location}.

---

##### `database_software_image_supported`<sup>Optional</sup> <a name="database_software_image_supported" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.databaseSoftwareImageSupported"></a>

```python
database_software_image_supported: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#database_software_image_supported DataAzurermOracleDatabaseSystemVersions#database_software_image_supported}.

---

##### `database_system_shape`<sup>Optional</sup> <a name="database_system_shape" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.databaseSystemShape"></a>

```python
database_system_shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#database_system_shape DataAzurermOracleDatabaseSystemVersions#database_system_shape}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#id DataAzurermOracleDatabaseSystemVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `shape_family`<sup>Optional</sup> <a name="shape_family" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.shapeFamily"></a>

```python
shape_family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#shape_family DataAzurermOracleDatabaseSystemVersions#shape_family}.

---

##### `storage_management`<sup>Optional</sup> <a name="storage_management" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.storageManagement"></a>

```python
storage_management: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#storage_management DataAzurermOracleDatabaseSystemVersions#storage_management}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.timeouts"></a>

```python
timeouts: DataAzurermOracleDatabaseSystemVersionsTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts">DataAzurermOracleDatabaseSystemVersionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#timeouts DataAzurermOracleDatabaseSystemVersions#timeouts}

---

##### `upgrade_supported`<sup>Optional</sup> <a name="upgrade_supported" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.upgradeSupported"></a>

```python
upgrade_supported: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#upgrade_supported DataAzurermOracleDatabaseSystemVersions#upgrade_supported}.

---

### DataAzurermOracleDatabaseSystemVersionsTimeouts <a name="DataAzurermOracleDatabaseSystemVersionsTimeouts" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_oracle_database_system_versions

dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#read DataAzurermOracleDatabaseSystemVersions#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/oracle_database_system_versions#read DataAzurermOracleDatabaseSystemVersions#read}.

---

### DataAzurermOracleDatabaseSystemVersionsVersions <a name="DataAzurermOracleDatabaseSystemVersionsVersions" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersions.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_oracle_database_system_versions

dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference <a name="DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_oracle_database_system_versions

dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts">DataAzurermOracleDatabaseSystemVersionsTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAzurermOracleDatabaseSystemVersionsTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts">DataAzurermOracleDatabaseSystemVersionsTimeouts</a>

---


### DataAzurermOracleDatabaseSystemVersionsVersionsList <a name="DataAzurermOracleDatabaseSystemVersionsVersionsList" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_oracle_database_system_versions

dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference <a name="DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_oracle_database_system_versions

dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.latestVersion">latest_version</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.pluggableDatabaseSupported">pluggable_database_supported</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersions">DataAzurermOracleDatabaseSystemVersionsVersions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `latest_version`<sup>Required</sup> <a name="latest_version" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.latestVersion"></a>

```python
latest_version: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `pluggable_database_supported`<sup>Required</sup> <a name="pluggable_database_supported" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.pluggableDatabaseSupported"></a>

```python
pluggable_database_supported: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermOracleDatabaseSystemVersionsVersions
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersions">DataAzurermOracleDatabaseSystemVersionsVersions</a>

---



