# `horizondbCluster` Submodule <a name="`horizondbCluster` Submodule" id="@cdktn/provider-azurerm.horizondbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HorizondbCluster <a name="HorizondbCluster" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster azurerm_horizondb_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer"></a>

```python
from cdktn_provider_azurerm import horizondb_cluster

horizondbCluster.HorizondbCluster(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  administrator_login: str,
  location: str,
  name: str,
  read_write_pool: HorizondbClusterReadWritePool,
  resource_group_name: str,
  administrator_password: str = None,
  administrator_password_wo: str = None,
  administrator_password_wo_version: typing.Union[int, float] = None,
  backup_retention_in_days: typing.Union[int, float] = None,
  geo_redundant_backup_enabled: bool | IResolvable = None,
  id: str = None,
  identity: HorizondbClusterIdentity = None,
  point_in_time_restore: HorizondbClusterPointInTimeRestore = None,
  postgresql_version: str = None,
  public_network_access: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: HorizondbClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.administratorLogin">administrator_login</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_login HorizondbCluster#administrator_login}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#location HorizondbCluster#location}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#name HorizondbCluster#name}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.readWritePool">read_write_pool</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool">HorizondbClusterReadWritePool</a></code> | read_write_pool block. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#resource_group_name HorizondbCluster#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.administratorPassword">administrator_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password HorizondbCluster#administrator_password}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.administratorPasswordWo">administrator_password_wo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password_wo HorizondbCluster#administrator_password_wo}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.administratorPasswordWoVersion">administrator_password_wo_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password_wo_version HorizondbCluster#administrator_password_wo_version}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.backupRetentionInDays">backup_retention_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#backup_retention_in_days HorizondbCluster#backup_retention_in_days}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.geoRedundantBackupEnabled">geo_redundant_backup_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#geo_redundant_backup_enabled HorizondbCluster#geo_redundant_backup_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#id HorizondbCluster#id}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity">HorizondbClusterIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.pointInTimeRestore">point_in_time_restore</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore">HorizondbClusterPointInTimeRestore</a></code> | point_in_time_restore block. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.postgresqlVersion">postgresql_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#postgresql_version HorizondbCluster#postgresql_version}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.publicNetworkAccess">public_network_access</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#public_network_access HorizondbCluster#public_network_access}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#tags HorizondbCluster#tags}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts">HorizondbClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `administrator_login`<sup>Required</sup> <a name="administrator_login" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.administratorLogin"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_login HorizondbCluster#administrator_login}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#location HorizondbCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#name HorizondbCluster#name}.

---

##### `read_write_pool`<sup>Required</sup> <a name="read_write_pool" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.readWritePool"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool">HorizondbClusterReadWritePool</a>

read_write_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#read_write_pool HorizondbCluster#read_write_pool}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#resource_group_name HorizondbCluster#resource_group_name}.

---

##### `administrator_password`<sup>Optional</sup> <a name="administrator_password" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.administratorPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password HorizondbCluster#administrator_password}.

---

##### `administrator_password_wo`<sup>Optional</sup> <a name="administrator_password_wo" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.administratorPasswordWo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password_wo HorizondbCluster#administrator_password_wo}.

---

##### `administrator_password_wo_version`<sup>Optional</sup> <a name="administrator_password_wo_version" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.administratorPasswordWoVersion"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password_wo_version HorizondbCluster#administrator_password_wo_version}.

---

##### `backup_retention_in_days`<sup>Optional</sup> <a name="backup_retention_in_days" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.backupRetentionInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#backup_retention_in_days HorizondbCluster#backup_retention_in_days}.

---

##### `geo_redundant_backup_enabled`<sup>Optional</sup> <a name="geo_redundant_backup_enabled" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.geoRedundantBackupEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#geo_redundant_backup_enabled HorizondbCluster#geo_redundant_backup_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#id HorizondbCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity">HorizondbClusterIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#identity HorizondbCluster#identity}

---

##### `point_in_time_restore`<sup>Optional</sup> <a name="point_in_time_restore" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.pointInTimeRestore"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore">HorizondbClusterPointInTimeRestore</a>

point_in_time_restore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#point_in_time_restore HorizondbCluster#point_in_time_restore}

---

##### `postgresql_version`<sup>Optional</sup> <a name="postgresql_version" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.postgresqlVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#postgresql_version HorizondbCluster#postgresql_version}.

---

##### `public_network_access`<sup>Optional</sup> <a name="public_network_access" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.publicNetworkAccess"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#public_network_access HorizondbCluster#public_network_access}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#tags HorizondbCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts">HorizondbClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#timeouts HorizondbCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putPointInTimeRestore">put_point_in_time_restore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putReadWritePool">put_read_write_pool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetAdministratorPassword">reset_administrator_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetAdministratorPasswordWo">reset_administrator_password_wo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetAdministratorPasswordWoVersion">reset_administrator_password_wo_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetBackupRetentionInDays">reset_backup_retention_in_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetGeoRedundantBackupEnabled">reset_geo_redundant_backup_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetPointInTimeRestore">reset_point_in_time_restore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetPostgresqlVersion">reset_postgresql_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetPublicNetworkAccess">reset_public_network_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_identity` <a name="put_identity" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putIdentity"></a>

```python
def put_identity(
  identity_ids: typing.List[str],
  type: str
) -> None
```

###### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#identity_ids HorizondbCluster#identity_ids}.

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#type HorizondbCluster#type}.

---

##### `put_point_in_time_restore` <a name="put_point_in_time_restore" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putPointInTimeRestore"></a>

```python
def put_point_in_time_restore(
  point_in_time_utc: str,
  source_horizondb_cluster_id: str,
  source_location: str = None
) -> None
```

###### `point_in_time_utc`<sup>Required</sup> <a name="point_in_time_utc" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putPointInTimeRestore.parameter.pointInTimeUtc"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#point_in_time_utc HorizondbCluster#point_in_time_utc}.

---

###### `source_horizondb_cluster_id`<sup>Required</sup> <a name="source_horizondb_cluster_id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putPointInTimeRestore.parameter.sourceHorizondbClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#source_horizondb_cluster_id HorizondbCluster#source_horizondb_cluster_id}.

---

###### `source_location`<sup>Optional</sup> <a name="source_location" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putPointInTimeRestore.parameter.sourceLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#source_location HorizondbCluster#source_location}.

---

##### `put_read_write_pool` <a name="put_read_write_pool" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putReadWritePool"></a>

```python
def put_read_write_pool(
  compute: HorizondbClusterReadWritePoolCompute,
  high_availability_mode: str,
  name: str,
  node_count: typing.Union[int, float]
) -> None
```

###### `compute`<sup>Required</sup> <a name="compute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putReadWritePool.parameter.compute"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute">HorizondbClusterReadWritePoolCompute</a>

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#compute HorizondbCluster#compute}

---

###### `high_availability_mode`<sup>Required</sup> <a name="high_availability_mode" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putReadWritePool.parameter.highAvailabilityMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#high_availability_mode HorizondbCluster#high_availability_mode}.

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putReadWritePool.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#name HorizondbCluster#name}.

---

###### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putReadWritePool.parameter.nodeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#node_count HorizondbCluster#node_count}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#create HorizondbCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#delete HorizondbCluster#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#read HorizondbCluster#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#update HorizondbCluster#update}.

---

##### `reset_administrator_password` <a name="reset_administrator_password" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetAdministratorPassword"></a>

```python
def reset_administrator_password() -> None
```

##### `reset_administrator_password_wo` <a name="reset_administrator_password_wo" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetAdministratorPasswordWo"></a>

```python
def reset_administrator_password_wo() -> None
```

##### `reset_administrator_password_wo_version` <a name="reset_administrator_password_wo_version" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetAdministratorPasswordWoVersion"></a>

```python
def reset_administrator_password_wo_version() -> None
```

##### `reset_backup_retention_in_days` <a name="reset_backup_retention_in_days" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetBackupRetentionInDays"></a>

```python
def reset_backup_retention_in_days() -> None
```

##### `reset_geo_redundant_backup_enabled` <a name="reset_geo_redundant_backup_enabled" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetGeoRedundantBackupEnabled"></a>

```python
def reset_geo_redundant_backup_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_point_in_time_restore` <a name="reset_point_in_time_restore" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetPointInTimeRestore"></a>

```python
def reset_point_in_time_restore() -> None
```

##### `reset_postgresql_version` <a name="reset_postgresql_version" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetPostgresqlVersion"></a>

```python
def reset_postgresql_version() -> None
```

##### `reset_public_network_access` <a name="reset_public_network_access" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetPublicNetworkAccess"></a>

```python
def reset_public_network_access() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a HorizondbCluster resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isConstruct"></a>

```python
from cdktn_provider_azurerm import horizondb_cluster

horizondbCluster.HorizondbCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import horizondb_cluster

horizondbCluster.HorizondbCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isTerraformResource"></a>

```python
from cdktn_provider_azurerm import horizondb_cluster

horizondbCluster.HorizondbCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import horizondb_cluster

horizondbCluster.HorizondbCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a HorizondbCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the HorizondbCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing HorizondbCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the HorizondbCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference">HorizondbClusterIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.pointInTimeRestore">point_in_time_restore</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference">HorizondbClusterPointInTimeRestoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.readWritePool">read_write_pool</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference">HorizondbClusterReadWritePoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference">HorizondbClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorLoginInput">administrator_login_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordInput">administrator_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordWoInput">administrator_password_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordWoVersionInput">administrator_password_wo_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.backupRetentionInDaysInput">backup_retention_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.geoRedundantBackupEnabledInput">geo_redundant_backup_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.identityInput">identity_input</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity">HorizondbClusterIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.pointInTimeRestoreInput">point_in_time_restore_input</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore">HorizondbClusterPointInTimeRestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.postgresqlVersionInput">postgresql_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.publicNetworkAccessInput">public_network_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.readWritePoolInput">read_write_pool_input</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool">HorizondbClusterReadWritePool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts">HorizondbClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorLogin">administrator_login</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPassword">administrator_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordWo">administrator_password_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordWoVersion">administrator_password_wo_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.backupRetentionInDays">backup_retention_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.geoRedundantBackupEnabled">geo_redundant_backup_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.postgresqlVersion">postgresql_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.publicNetworkAccess">public_network_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.identity"></a>

```python
identity: HorizondbClusterIdentityOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference">HorizondbClusterIdentityOutputReference</a>

---

##### `point_in_time_restore`<sup>Required</sup> <a name="point_in_time_restore" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.pointInTimeRestore"></a>

```python
point_in_time_restore: HorizondbClusterPointInTimeRestoreOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference">HorizondbClusterPointInTimeRestoreOutputReference</a>

---

##### `read_write_pool`<sup>Required</sup> <a name="read_write_pool" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.readWritePool"></a>

```python
read_write_pool: HorizondbClusterReadWritePoolOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference">HorizondbClusterReadWritePoolOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.timeouts"></a>

```python
timeouts: HorizondbClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference">HorizondbClusterTimeoutsOutputReference</a>

---

##### `administrator_login_input`<sup>Optional</sup> <a name="administrator_login_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorLoginInput"></a>

```python
administrator_login_input: str
```

- *Type:* str

---

##### `administrator_password_input`<sup>Optional</sup> <a name="administrator_password_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordInput"></a>

```python
administrator_password_input: str
```

- *Type:* str

---

##### `administrator_password_wo_input`<sup>Optional</sup> <a name="administrator_password_wo_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordWoInput"></a>

```python
administrator_password_wo_input: str
```

- *Type:* str

---

##### `administrator_password_wo_version_input`<sup>Optional</sup> <a name="administrator_password_wo_version_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordWoVersionInput"></a>

```python
administrator_password_wo_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_retention_in_days_input`<sup>Optional</sup> <a name="backup_retention_in_days_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.backupRetentionInDaysInput"></a>

```python
backup_retention_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `geo_redundant_backup_enabled_input`<sup>Optional</sup> <a name="geo_redundant_backup_enabled_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.geoRedundantBackupEnabledInput"></a>

```python
geo_redundant_backup_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.identityInput"></a>

```python
identity_input: HorizondbClusterIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity">HorizondbClusterIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `point_in_time_restore_input`<sup>Optional</sup> <a name="point_in_time_restore_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.pointInTimeRestoreInput"></a>

```python
point_in_time_restore_input: HorizondbClusterPointInTimeRestore
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore">HorizondbClusterPointInTimeRestore</a>

---

##### `postgresql_version_input`<sup>Optional</sup> <a name="postgresql_version_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.postgresqlVersionInput"></a>

```python
postgresql_version_input: str
```

- *Type:* str

---

##### `public_network_access_input`<sup>Optional</sup> <a name="public_network_access_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.publicNetworkAccessInput"></a>

```python
public_network_access_input: str
```

- *Type:* str

---

##### `read_write_pool_input`<sup>Optional</sup> <a name="read_write_pool_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.readWritePoolInput"></a>

```python
read_write_pool_input: HorizondbClusterReadWritePool
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool">HorizondbClusterReadWritePool</a>

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | HorizondbClusterTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts">HorizondbClusterTimeouts</a>

---

##### `administrator_login`<sup>Required</sup> <a name="administrator_login" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorLogin"></a>

```python
administrator_login: str
```

- *Type:* str

---

##### `administrator_password`<sup>Required</sup> <a name="administrator_password" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPassword"></a>

```python
administrator_password: str
```

- *Type:* str

---

##### ~~`administrator_password_wo`~~<sup>Required</sup> <a name="administrator_password_wo" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
administrator_password_wo: str
```

- *Type:* str

---

##### `administrator_password_wo_version`<sup>Required</sup> <a name="administrator_password_wo_version" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordWoVersion"></a>

```python
administrator_password_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_retention_in_days`<sup>Required</sup> <a name="backup_retention_in_days" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.backupRetentionInDays"></a>

```python
backup_retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `geo_redundant_backup_enabled`<sup>Required</sup> <a name="geo_redundant_backup_enabled" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.geoRedundantBackupEnabled"></a>

```python
geo_redundant_backup_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `postgresql_version`<sup>Required</sup> <a name="postgresql_version" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.postgresqlVersion"></a>

```python
postgresql_version: str
```

- *Type:* str

---

##### `public_network_access`<sup>Required</sup> <a name="public_network_access" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.publicNetworkAccess"></a>

```python
public_network_access: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HorizondbClusterConfig <a name="HorizondbClusterConfig" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import horizondb_cluster

horizondbCluster.HorizondbClusterConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  administrator_login: str,
  location: str,
  name: str,
  read_write_pool: HorizondbClusterReadWritePool,
  resource_group_name: str,
  administrator_password: str = None,
  administrator_password_wo: str = None,
  administrator_password_wo_version: typing.Union[int, float] = None,
  backup_retention_in_days: typing.Union[int, float] = None,
  geo_redundant_backup_enabled: bool | IResolvable = None,
  id: str = None,
  identity: HorizondbClusterIdentity = None,
  point_in_time_restore: HorizondbClusterPointInTimeRestore = None,
  postgresql_version: str = None,
  public_network_access: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: HorizondbClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.administratorLogin">administrator_login</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_login HorizondbCluster#administrator_login}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#location HorizondbCluster#location}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#name HorizondbCluster#name}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.readWritePool">read_write_pool</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool">HorizondbClusterReadWritePool</a></code> | read_write_pool block. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#resource_group_name HorizondbCluster#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.administratorPassword">administrator_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password HorizondbCluster#administrator_password}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.administratorPasswordWo">administrator_password_wo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password_wo HorizondbCluster#administrator_password_wo}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.administratorPasswordWoVersion">administrator_password_wo_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password_wo_version HorizondbCluster#administrator_password_wo_version}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.backupRetentionInDays">backup_retention_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#backup_retention_in_days HorizondbCluster#backup_retention_in_days}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.geoRedundantBackupEnabled">geo_redundant_backup_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#geo_redundant_backup_enabled HorizondbCluster#geo_redundant_backup_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#id HorizondbCluster#id}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity">HorizondbClusterIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.pointInTimeRestore">point_in_time_restore</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore">HorizondbClusterPointInTimeRestore</a></code> | point_in_time_restore block. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.postgresqlVersion">postgresql_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#postgresql_version HorizondbCluster#postgresql_version}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.publicNetworkAccess">public_network_access</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#public_network_access HorizondbCluster#public_network_access}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#tags HorizondbCluster#tags}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts">HorizondbClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `administrator_login`<sup>Required</sup> <a name="administrator_login" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.administratorLogin"></a>

```python
administrator_login: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_login HorizondbCluster#administrator_login}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#location HorizondbCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#name HorizondbCluster#name}.

---

##### `read_write_pool`<sup>Required</sup> <a name="read_write_pool" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.readWritePool"></a>

```python
read_write_pool: HorizondbClusterReadWritePool
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool">HorizondbClusterReadWritePool</a>

read_write_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#read_write_pool HorizondbCluster#read_write_pool}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#resource_group_name HorizondbCluster#resource_group_name}.

---

##### `administrator_password`<sup>Optional</sup> <a name="administrator_password" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.administratorPassword"></a>

```python
administrator_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password HorizondbCluster#administrator_password}.

---

##### `administrator_password_wo`<sup>Optional</sup> <a name="administrator_password_wo" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.administratorPasswordWo"></a>

```python
administrator_password_wo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password_wo HorizondbCluster#administrator_password_wo}.

---

##### `administrator_password_wo_version`<sup>Optional</sup> <a name="administrator_password_wo_version" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.administratorPasswordWoVersion"></a>

```python
administrator_password_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password_wo_version HorizondbCluster#administrator_password_wo_version}.

---

##### `backup_retention_in_days`<sup>Optional</sup> <a name="backup_retention_in_days" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.backupRetentionInDays"></a>

```python
backup_retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#backup_retention_in_days HorizondbCluster#backup_retention_in_days}.

---

##### `geo_redundant_backup_enabled`<sup>Optional</sup> <a name="geo_redundant_backup_enabled" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.geoRedundantBackupEnabled"></a>

```python
geo_redundant_backup_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#geo_redundant_backup_enabled HorizondbCluster#geo_redundant_backup_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#id HorizondbCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.identity"></a>

```python
identity: HorizondbClusterIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity">HorizondbClusterIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#identity HorizondbCluster#identity}

---

##### `point_in_time_restore`<sup>Optional</sup> <a name="point_in_time_restore" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.pointInTimeRestore"></a>

```python
point_in_time_restore: HorizondbClusterPointInTimeRestore
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore">HorizondbClusterPointInTimeRestore</a>

point_in_time_restore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#point_in_time_restore HorizondbCluster#point_in_time_restore}

---

##### `postgresql_version`<sup>Optional</sup> <a name="postgresql_version" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.postgresqlVersion"></a>

```python
postgresql_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#postgresql_version HorizondbCluster#postgresql_version}.

---

##### `public_network_access`<sup>Optional</sup> <a name="public_network_access" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.publicNetworkAccess"></a>

```python
public_network_access: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#public_network_access HorizondbCluster#public_network_access}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#tags HorizondbCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.timeouts"></a>

```python
timeouts: HorizondbClusterTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts">HorizondbClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#timeouts HorizondbCluster#timeouts}

---

### HorizondbClusterIdentity <a name="HorizondbClusterIdentity" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity.Initializer"></a>

```python
from cdktn_provider_azurerm import horizondb_cluster

horizondbCluster.HorizondbClusterIdentity(
  identity_ids: typing.List[str],
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#identity_ids HorizondbCluster#identity_ids}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#type HorizondbCluster#type}. |

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#identity_ids HorizondbCluster#identity_ids}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#type HorizondbCluster#type}.

---

### HorizondbClusterPointInTimeRestore <a name="HorizondbClusterPointInTimeRestore" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore.Initializer"></a>

```python
from cdktn_provider_azurerm import horizondb_cluster

horizondbCluster.HorizondbClusterPointInTimeRestore(
  point_in_time_utc: str,
  source_horizondb_cluster_id: str,
  source_location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore.property.pointInTimeUtc">point_in_time_utc</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#point_in_time_utc HorizondbCluster#point_in_time_utc}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore.property.sourceHorizondbClusterId">source_horizondb_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#source_horizondb_cluster_id HorizondbCluster#source_horizondb_cluster_id}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore.property.sourceLocation">source_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#source_location HorizondbCluster#source_location}. |

---

##### `point_in_time_utc`<sup>Required</sup> <a name="point_in_time_utc" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore.property.pointInTimeUtc"></a>

```python
point_in_time_utc: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#point_in_time_utc HorizondbCluster#point_in_time_utc}.

---

##### `source_horizondb_cluster_id`<sup>Required</sup> <a name="source_horizondb_cluster_id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore.property.sourceHorizondbClusterId"></a>

```python
source_horizondb_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#source_horizondb_cluster_id HorizondbCluster#source_horizondb_cluster_id}.

---

##### `source_location`<sup>Optional</sup> <a name="source_location" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore.property.sourceLocation"></a>

```python
source_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#source_location HorizondbCluster#source_location}.

---

### HorizondbClusterReadWritePool <a name="HorizondbClusterReadWritePool" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.Initializer"></a>

```python
from cdktn_provider_azurerm import horizondb_cluster

horizondbCluster.HorizondbClusterReadWritePool(
  compute: HorizondbClusterReadWritePoolCompute,
  high_availability_mode: str,
  name: str,
  node_count: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.property.compute">compute</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute">HorizondbClusterReadWritePoolCompute</a></code> | compute block. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.property.highAvailabilityMode">high_availability_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#high_availability_mode HorizondbCluster#high_availability_mode}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#name HorizondbCluster#name}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#node_count HorizondbCluster#node_count}. |

---

##### `compute`<sup>Required</sup> <a name="compute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.property.compute"></a>

```python
compute: HorizondbClusterReadWritePoolCompute
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute">HorizondbClusterReadWritePoolCompute</a>

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#compute HorizondbCluster#compute}

---

##### `high_availability_mode`<sup>Required</sup> <a name="high_availability_mode" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.property.highAvailabilityMode"></a>

```python
high_availability_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#high_availability_mode HorizondbCluster#high_availability_mode}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#name HorizondbCluster#name}.

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#node_count HorizondbCluster#node_count}.

---

### HorizondbClusterReadWritePoolCompute <a name="HorizondbClusterReadWritePoolCompute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute.Initializer"></a>

```python
from cdktn_provider_azurerm import horizondb_cluster

horizondbCluster.HorizondbClusterReadWritePoolCompute(
  generation: typing.Union[int, float],
  processor: str,
  vcores: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute.property.generation">generation</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#generation HorizondbCluster#generation}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute.property.processor">processor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#processor HorizondbCluster#processor}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute.property.vcores">vcores</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#vcores HorizondbCluster#vcores}. |

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute.property.generation"></a>

```python
generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#generation HorizondbCluster#generation}.

---

##### `processor`<sup>Required</sup> <a name="processor" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute.property.processor"></a>

```python
processor: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#processor HorizondbCluster#processor}.

---

##### `vcores`<sup>Required</sup> <a name="vcores" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute.property.vcores"></a>

```python
vcores: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#vcores HorizondbCluster#vcores}.

---

### HorizondbClusterTimeouts <a name="HorizondbClusterTimeouts" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import horizondb_cluster

horizondbCluster.HorizondbClusterTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#create HorizondbCluster#create}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#delete HorizondbCluster#delete}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#read HorizondbCluster#read}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#update HorizondbCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#create HorizondbCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#delete HorizondbCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#read HorizondbCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#update HorizondbCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HorizondbClusterIdentityOutputReference <a name="HorizondbClusterIdentityOutputReference" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import horizondb_cluster

horizondbCluster.HorizondbClusterIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity">HorizondbClusterIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.internalValue"></a>

```python
internal_value: HorizondbClusterIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity">HorizondbClusterIdentity</a>

---


### HorizondbClusterPointInTimeRestoreOutputReference <a name="HorizondbClusterPointInTimeRestoreOutputReference" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import horizondb_cluster

horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.resetSourceLocation">reset_source_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_source_location` <a name="reset_source_location" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.resetSourceLocation"></a>

```python
def reset_source_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.pointInTimeUtcInput">point_in_time_utc_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.sourceHorizondbClusterIdInput">source_horizondb_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.sourceLocationInput">source_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.pointInTimeUtc">point_in_time_utc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.sourceHorizondbClusterId">source_horizondb_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.sourceLocation">source_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore">HorizondbClusterPointInTimeRestore</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `point_in_time_utc_input`<sup>Optional</sup> <a name="point_in_time_utc_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.pointInTimeUtcInput"></a>

```python
point_in_time_utc_input: str
```

- *Type:* str

---

##### `source_horizondb_cluster_id_input`<sup>Optional</sup> <a name="source_horizondb_cluster_id_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.sourceHorizondbClusterIdInput"></a>

```python
source_horizondb_cluster_id_input: str
```

- *Type:* str

---

##### `source_location_input`<sup>Optional</sup> <a name="source_location_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.sourceLocationInput"></a>

```python
source_location_input: str
```

- *Type:* str

---

##### `point_in_time_utc`<sup>Required</sup> <a name="point_in_time_utc" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.pointInTimeUtc"></a>

```python
point_in_time_utc: str
```

- *Type:* str

---

##### `source_horizondb_cluster_id`<sup>Required</sup> <a name="source_horizondb_cluster_id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.sourceHorizondbClusterId"></a>

```python
source_horizondb_cluster_id: str
```

- *Type:* str

---

##### `source_location`<sup>Required</sup> <a name="source_location" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.sourceLocation"></a>

```python
source_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.internalValue"></a>

```python
internal_value: HorizondbClusterPointInTimeRestore
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore">HorizondbClusterPointInTimeRestore</a>

---


### HorizondbClusterReadWritePoolComputeOutputReference <a name="HorizondbClusterReadWritePoolComputeOutputReference" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import horizondb_cluster

horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.generationInput">generation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.processorInput">processor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.vcoresInput">vcores_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.generation">generation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.processor">processor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.vcores">vcores</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute">HorizondbClusterReadWritePoolCompute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generation_input`<sup>Optional</sup> <a name="generation_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.generationInput"></a>

```python
generation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `processor_input`<sup>Optional</sup> <a name="processor_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.processorInput"></a>

```python
processor_input: str
```

- *Type:* str

---

##### `vcores_input`<sup>Optional</sup> <a name="vcores_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.vcoresInput"></a>

```python
vcores_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.generation"></a>

```python
generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `processor`<sup>Required</sup> <a name="processor" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.processor"></a>

```python
processor: str
```

- *Type:* str

---

##### `vcores`<sup>Required</sup> <a name="vcores" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.vcores"></a>

```python
vcores: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.internalValue"></a>

```python
internal_value: HorizondbClusterReadWritePoolCompute
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute">HorizondbClusterReadWritePoolCompute</a>

---


### HorizondbClusterReadWritePoolOutputReference <a name="HorizondbClusterReadWritePoolOutputReference" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import horizondb_cluster

horizondbCluster.HorizondbClusterReadWritePoolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.putCompute">put_compute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_compute` <a name="put_compute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.putCompute"></a>

```python
def put_compute(
  generation: typing.Union[int, float],
  processor: str,
  vcores: typing.Union[int, float]
) -> None
```

###### `generation`<sup>Required</sup> <a name="generation" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.putCompute.parameter.generation"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#generation HorizondbCluster#generation}.

---

###### `processor`<sup>Required</sup> <a name="processor" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.putCompute.parameter.processor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#processor HorizondbCluster#processor}.

---

###### `vcores`<sup>Required</sup> <a name="vcores" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.putCompute.parameter.vcores"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#vcores HorizondbCluster#vcores}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.compute">compute</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference">HorizondbClusterReadWritePoolComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.computeInput">compute_input</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute">HorizondbClusterReadWritePoolCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.highAvailabilityModeInput">high_availability_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.highAvailabilityMode">high_availability_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool">HorizondbClusterReadWritePool</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute`<sup>Required</sup> <a name="compute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.compute"></a>

```python
compute: HorizondbClusterReadWritePoolComputeOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference">HorizondbClusterReadWritePoolComputeOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `compute_input`<sup>Optional</sup> <a name="compute_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.computeInput"></a>

```python
compute_input: HorizondbClusterReadWritePoolCompute
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute">HorizondbClusterReadWritePoolCompute</a>

---

##### `high_availability_mode_input`<sup>Optional</sup> <a name="high_availability_mode_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.highAvailabilityModeInput"></a>

```python
high_availability_mode_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `high_availability_mode`<sup>Required</sup> <a name="high_availability_mode" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.highAvailabilityMode"></a>

```python
high_availability_mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.internalValue"></a>

```python
internal_value: HorizondbClusterReadWritePool
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool">HorizondbClusterReadWritePool</a>

---


### HorizondbClusterTimeoutsOutputReference <a name="HorizondbClusterTimeoutsOutputReference" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import horizondb_cluster

horizondbCluster.HorizondbClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts">HorizondbClusterTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | HorizondbClusterTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts">HorizondbClusterTimeouts</a>

---



