# `dataProtectionBackupInstanceDataLakeStorage` Submodule <a name="`dataProtectionBackupInstanceDataLakeStorage` Submodule" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupInstanceDataLakeStorage <a name="DataProtectionBackupInstanceDataLakeStorage" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage azurerm_data_protection_backup_instance_data_lake_storage}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer"></a>

```python
from cdktn_provider_azurerm import data_protection_backup_instance_data_lake_storage

dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backup_policy_data_lake_storage_id: str,
  data_protection_backup_vault_id: str,
  location: str,
  name: str,
  storage_account_id: str,
  storage_container_names: typing.List[str],
  id: str = None,
  timeouts: DataProtectionBackupInstanceDataLakeStorageTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.backupPolicyDataLakeStorageId">backup_policy_data_lake_storage_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#backup_policy_data_lake_storage_id DataProtectionBackupInstanceDataLakeStorage#backup_policy_data_lake_storage_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.dataProtectionBackupVaultId">data_protection_backup_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#data_protection_backup_vault_id DataProtectionBackupInstanceDataLakeStorage#data_protection_backup_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#location DataProtectionBackupInstanceDataLakeStorage#location}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#name DataProtectionBackupInstanceDataLakeStorage#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#storage_account_id DataProtectionBackupInstanceDataLakeStorage#storage_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.storageContainerNames">storage_container_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#storage_container_names DataProtectionBackupInstanceDataLakeStorage#storage_container_names}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#id DataProtectionBackupInstanceDataLakeStorage#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts">DataProtectionBackupInstanceDataLakeStorageTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `backup_policy_data_lake_storage_id`<sup>Required</sup> <a name="backup_policy_data_lake_storage_id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.backupPolicyDataLakeStorageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#backup_policy_data_lake_storage_id DataProtectionBackupInstanceDataLakeStorage#backup_policy_data_lake_storage_id}.

---

##### `data_protection_backup_vault_id`<sup>Required</sup> <a name="data_protection_backup_vault_id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.dataProtectionBackupVaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#data_protection_backup_vault_id DataProtectionBackupInstanceDataLakeStorage#data_protection_backup_vault_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#location DataProtectionBackupInstanceDataLakeStorage#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#name DataProtectionBackupInstanceDataLakeStorage#name}.

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.storageAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#storage_account_id DataProtectionBackupInstanceDataLakeStorage#storage_account_id}.

---

##### `storage_container_names`<sup>Required</sup> <a name="storage_container_names" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.storageContainerNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#storage_container_names DataProtectionBackupInstanceDataLakeStorage#storage_container_names}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#id DataProtectionBackupInstanceDataLakeStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts">DataProtectionBackupInstanceDataLakeStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#timeouts DataProtectionBackupInstanceDataLakeStorage#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#create DataProtectionBackupInstanceDataLakeStorage#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#delete DataProtectionBackupInstanceDataLakeStorage#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#read DataProtectionBackupInstanceDataLakeStorage#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#update DataProtectionBackupInstanceDataLakeStorage#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataProtectionBackupInstanceDataLakeStorage resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.isConstruct"></a>

```python
from cdktn_provider_azurerm import data_protection_backup_instance_data_lake_storage

dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import data_protection_backup_instance_data_lake_storage

dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.isTerraformResource"></a>

```python
from cdktn_provider_azurerm import data_protection_backup_instance_data_lake_storage

dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import data_protection_backup_instance_data_lake_storage

dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataProtectionBackupInstanceDataLakeStorage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataProtectionBackupInstanceDataLakeStorage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataProtectionBackupInstanceDataLakeStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupInstanceDataLakeStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.protectionState">protection_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference">DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.backupPolicyDataLakeStorageIdInput">backup_policy_data_lake_storage_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.dataProtectionBackupVaultIdInput">data_protection_backup_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.storageAccountIdInput">storage_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.storageContainerNamesInput">storage_container_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts">DataProtectionBackupInstanceDataLakeStorageTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.backupPolicyDataLakeStorageId">backup_policy_data_lake_storage_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.dataProtectionBackupVaultId">data_protection_backup_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.storageContainerNames">storage_container_names</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `protection_state`<sup>Required</sup> <a name="protection_state" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.protectionState"></a>

```python
protection_state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.timeouts"></a>

```python
timeouts: DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference">DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference</a>

---

##### `backup_policy_data_lake_storage_id_input`<sup>Optional</sup> <a name="backup_policy_data_lake_storage_id_input" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.backupPolicyDataLakeStorageIdInput"></a>

```python
backup_policy_data_lake_storage_id_input: str
```

- *Type:* str

---

##### `data_protection_backup_vault_id_input`<sup>Optional</sup> <a name="data_protection_backup_vault_id_input" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.dataProtectionBackupVaultIdInput"></a>

```python
data_protection_backup_vault_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `storage_account_id_input`<sup>Optional</sup> <a name="storage_account_id_input" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.storageAccountIdInput"></a>

```python
storage_account_id_input: str
```

- *Type:* str

---

##### `storage_container_names_input`<sup>Optional</sup> <a name="storage_container_names_input" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.storageContainerNamesInput"></a>

```python
storage_container_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataProtectionBackupInstanceDataLakeStorageTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts">DataProtectionBackupInstanceDataLakeStorageTimeouts</a>

---

##### `backup_policy_data_lake_storage_id`<sup>Required</sup> <a name="backup_policy_data_lake_storage_id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.backupPolicyDataLakeStorageId"></a>

```python
backup_policy_data_lake_storage_id: str
```

- *Type:* str

---

##### `data_protection_backup_vault_id`<sup>Required</sup> <a name="data_protection_backup_vault_id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.dataProtectionBackupVaultId"></a>

```python
data_protection_backup_vault_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

---

##### `storage_container_names`<sup>Required</sup> <a name="storage_container_names" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.storageContainerNames"></a>

```python
storage_container_names: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupInstanceDataLakeStorageConfig <a name="DataProtectionBackupInstanceDataLakeStorageConfig" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import data_protection_backup_instance_data_lake_storage

dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backup_policy_data_lake_storage_id: str,
  data_protection_backup_vault_id: str,
  location: str,
  name: str,
  storage_account_id: str,
  storage_container_names: typing.List[str],
  id: str = None,
  timeouts: DataProtectionBackupInstanceDataLakeStorageTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.backupPolicyDataLakeStorageId">backup_policy_data_lake_storage_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#backup_policy_data_lake_storage_id DataProtectionBackupInstanceDataLakeStorage#backup_policy_data_lake_storage_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.dataProtectionBackupVaultId">data_protection_backup_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#data_protection_backup_vault_id DataProtectionBackupInstanceDataLakeStorage#data_protection_backup_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#location DataProtectionBackupInstanceDataLakeStorage#location}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#name DataProtectionBackupInstanceDataLakeStorage#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#storage_account_id DataProtectionBackupInstanceDataLakeStorage#storage_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.storageContainerNames">storage_container_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#storage_container_names DataProtectionBackupInstanceDataLakeStorage#storage_container_names}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#id DataProtectionBackupInstanceDataLakeStorage#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts">DataProtectionBackupInstanceDataLakeStorageTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `backup_policy_data_lake_storage_id`<sup>Required</sup> <a name="backup_policy_data_lake_storage_id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.backupPolicyDataLakeStorageId"></a>

```python
backup_policy_data_lake_storage_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#backup_policy_data_lake_storage_id DataProtectionBackupInstanceDataLakeStorage#backup_policy_data_lake_storage_id}.

---

##### `data_protection_backup_vault_id`<sup>Required</sup> <a name="data_protection_backup_vault_id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.dataProtectionBackupVaultId"></a>

```python
data_protection_backup_vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#data_protection_backup_vault_id DataProtectionBackupInstanceDataLakeStorage#data_protection_backup_vault_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#location DataProtectionBackupInstanceDataLakeStorage#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#name DataProtectionBackupInstanceDataLakeStorage#name}.

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#storage_account_id DataProtectionBackupInstanceDataLakeStorage#storage_account_id}.

---

##### `storage_container_names`<sup>Required</sup> <a name="storage_container_names" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.storageContainerNames"></a>

```python
storage_container_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#storage_container_names DataProtectionBackupInstanceDataLakeStorage#storage_container_names}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#id DataProtectionBackupInstanceDataLakeStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.timeouts"></a>

```python
timeouts: DataProtectionBackupInstanceDataLakeStorageTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts">DataProtectionBackupInstanceDataLakeStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#timeouts DataProtectionBackupInstanceDataLakeStorage#timeouts}

---

### DataProtectionBackupInstanceDataLakeStorageTimeouts <a name="DataProtectionBackupInstanceDataLakeStorageTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import data_protection_backup_instance_data_lake_storage

dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#create DataProtectionBackupInstanceDataLakeStorage#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#delete DataProtectionBackupInstanceDataLakeStorage#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#read DataProtectionBackupInstanceDataLakeStorage#read}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#update DataProtectionBackupInstanceDataLakeStorage#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#create DataProtectionBackupInstanceDataLakeStorage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#delete DataProtectionBackupInstanceDataLakeStorage#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#read DataProtectionBackupInstanceDataLakeStorage#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_instance_data_lake_storage#update DataProtectionBackupInstanceDataLakeStorage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference <a name="DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_protection_backup_instance_data_lake_storage

dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts">DataProtectionBackupInstanceDataLakeStorageTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataProtectionBackupInstanceDataLakeStorageTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts">DataProtectionBackupInstanceDataLakeStorageTimeouts</a>

---



