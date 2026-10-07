# `oracleAutonomousDatabaseCrossRegionDisasterRecovery` Submodule <a name="`oracleAutonomousDatabaseCrossRegionDisasterRecovery` Submodule" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleAutonomousDatabaseCrossRegionDisasterRecovery <a name="OracleAutonomousDatabaseCrossRegionDisasterRecovery" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery azurerm_oracle_autonomous_database_cross_region_disaster_recovery}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer"></a>

```python
from cdktn_provider_azurerm import oracle_autonomous_database_cross_region_disaster_recovery

oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  location: str,
  name: str,
  resource_group_name: str,
  source_autonomous_database_id: str,
  subnet_id: str,
  id: str = None,
  replicate_automatic_backups_enabled: bool | IResolvable = None,
  tags: typing.Mapping[str] = None,
  timeouts: OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#display_name OracleAutonomousDatabaseCrossRegionDisasterRecovery#display_name}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#location OracleAutonomousDatabaseCrossRegionDisasterRecovery#location}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#name OracleAutonomousDatabaseCrossRegionDisasterRecovery#name}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#resource_group_name OracleAutonomousDatabaseCrossRegionDisasterRecovery#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.sourceAutonomousDatabaseId">source_autonomous_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#source_autonomous_database_id OracleAutonomousDatabaseCrossRegionDisasterRecovery#source_autonomous_database_id}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#subnet_id OracleAutonomousDatabaseCrossRegionDisasterRecovery#subnet_id}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#id OracleAutonomousDatabaseCrossRegionDisasterRecovery#id}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.replicateAutomaticBackupsEnabled">replicate_automatic_backups_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#replicate_automatic_backups_enabled OracleAutonomousDatabaseCrossRegionDisasterRecovery#replicate_automatic_backups_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#tags OracleAutonomousDatabaseCrossRegionDisasterRecovery#tags}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts">OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#display_name OracleAutonomousDatabaseCrossRegionDisasterRecovery#display_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#location OracleAutonomousDatabaseCrossRegionDisasterRecovery#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#name OracleAutonomousDatabaseCrossRegionDisasterRecovery#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#resource_group_name OracleAutonomousDatabaseCrossRegionDisasterRecovery#resource_group_name}.

---

##### `source_autonomous_database_id`<sup>Required</sup> <a name="source_autonomous_database_id" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.sourceAutonomousDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#source_autonomous_database_id OracleAutonomousDatabaseCrossRegionDisasterRecovery#source_autonomous_database_id}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#subnet_id OracleAutonomousDatabaseCrossRegionDisasterRecovery#subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#id OracleAutonomousDatabaseCrossRegionDisasterRecovery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replicate_automatic_backups_enabled`<sup>Optional</sup> <a name="replicate_automatic_backups_enabled" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.replicateAutomaticBackupsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#replicate_automatic_backups_enabled OracleAutonomousDatabaseCrossRegionDisasterRecovery#replicate_automatic_backups_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#tags OracleAutonomousDatabaseCrossRegionDisasterRecovery#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts">OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#timeouts OracleAutonomousDatabaseCrossRegionDisasterRecovery#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.resetReplicateAutomaticBackupsEnabled">reset_replicate_automatic_backups_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#create OracleAutonomousDatabaseCrossRegionDisasterRecovery#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#delete OracleAutonomousDatabaseCrossRegionDisasterRecovery#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#read OracleAutonomousDatabaseCrossRegionDisasterRecovery#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_replicate_automatic_backups_enabled` <a name="reset_replicate_automatic_backups_enabled" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.resetReplicateAutomaticBackupsEnabled"></a>

```python
def reset_replicate_automatic_backups_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OracleAutonomousDatabaseCrossRegionDisasterRecovery resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.isConstruct"></a>

```python
from cdktn_provider_azurerm import oracle_autonomous_database_cross_region_disaster_recovery

oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import oracle_autonomous_database_cross_region_disaster_recovery

oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.isTerraformResource"></a>

```python
from cdktn_provider_azurerm import oracle_autonomous_database_cross_region_disaster_recovery

oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import oracle_autonomous_database_cross_region_disaster_recovery

oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OracleAutonomousDatabaseCrossRegionDisasterRecovery resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OracleAutonomousDatabaseCrossRegionDisasterRecovery to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OracleAutonomousDatabaseCrossRegionDisasterRecovery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OracleAutonomousDatabaseCrossRegionDisasterRecovery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.autoScalingEnabled">auto_scaling_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.autoScalingForStorageEnabled">auto_scaling_for_storage_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.backupRetentionPeriodInDays">backup_retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.characterSet">character_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.computeModel">compute_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.customerContacts">customer_contacts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.databaseVersion">database_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.databaseWorkload">database_workload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.dataStorageSizeInTb">data_storage_size_in_tb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.mtlsConnectionRequired">mtls_connection_required</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.nationalCharacterSet">national_character_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.remoteDisasterRecoveryType">remote_disaster_recovery_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference">OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.replicateAutomaticBackupsEnabledInput">replicate_automatic_backups_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.sourceAutonomousDatabaseIdInput">source_autonomous_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts">OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.replicateAutomaticBackupsEnabled">replicate_automatic_backups_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.sourceAutonomousDatabaseId">source_autonomous_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_scaling_enabled`<sup>Required</sup> <a name="auto_scaling_enabled" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.autoScalingEnabled"></a>

```python
auto_scaling_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `auto_scaling_for_storage_enabled`<sup>Required</sup> <a name="auto_scaling_for_storage_enabled" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.autoScalingForStorageEnabled"></a>

```python
auto_scaling_for_storage_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `backup_retention_period_in_days`<sup>Required</sup> <a name="backup_retention_period_in_days" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.backupRetentionPeriodInDays"></a>

```python
backup_retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `character_set`<sup>Required</sup> <a name="character_set" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.characterSet"></a>

```python
character_set: str
```

- *Type:* str

---

##### `compute_count`<sup>Required</sup> <a name="compute_count" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_model`<sup>Required</sup> <a name="compute_model" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.computeModel"></a>

```python
compute_model: str
```

- *Type:* str

---

##### `customer_contacts`<sup>Required</sup> <a name="customer_contacts" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.customerContacts"></a>

```python
customer_contacts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database_version`<sup>Required</sup> <a name="database_version" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.databaseVersion"></a>

```python
database_version: str
```

- *Type:* str

---

##### `database_workload`<sup>Required</sup> <a name="database_workload" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.databaseWorkload"></a>

```python
database_workload: str
```

- *Type:* str

---

##### `data_storage_size_in_tb`<sup>Required</sup> <a name="data_storage_size_in_tb" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.dataStorageSizeInTb"></a>

```python
data_storage_size_in_tb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `mtls_connection_required`<sup>Required</sup> <a name="mtls_connection_required" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.mtlsConnectionRequired"></a>

```python
mtls_connection_required: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `national_character_set`<sup>Required</sup> <a name="national_character_set" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.nationalCharacterSet"></a>

```python
national_character_set: str
```

- *Type:* str

---

##### `remote_disaster_recovery_type`<sup>Required</sup> <a name="remote_disaster_recovery_type" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.remoteDisasterRecoveryType"></a>

```python
remote_disaster_recovery_type: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeouts"></a>

```python
timeouts: OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference">OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `replicate_automatic_backups_enabled_input`<sup>Optional</sup> <a name="replicate_automatic_backups_enabled_input" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.replicateAutomaticBackupsEnabledInput"></a>

```python
replicate_automatic_backups_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `source_autonomous_database_id_input`<sup>Optional</sup> <a name="source_autonomous_database_id_input" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.sourceAutonomousDatabaseIdInput"></a>

```python
source_autonomous_database_id_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts">OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `replicate_automatic_backups_enabled`<sup>Required</sup> <a name="replicate_automatic_backups_enabled" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.replicateAutomaticBackupsEnabled"></a>

```python
replicate_automatic_backups_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `source_autonomous_database_id`<sup>Required</sup> <a name="source_autonomous_database_id" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.sourceAutonomousDatabaseId"></a>

```python
source_autonomous_database_id: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig <a name="OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import oracle_autonomous_database_cross_region_disaster_recovery

oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  location: str,
  name: str,
  resource_group_name: str,
  source_autonomous_database_id: str,
  subnet_id: str,
  id: str = None,
  replicate_automatic_backups_enabled: bool | IResolvable = None,
  tags: typing.Mapping[str] = None,
  timeouts: OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#display_name OracleAutonomousDatabaseCrossRegionDisasterRecovery#display_name}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#location OracleAutonomousDatabaseCrossRegionDisasterRecovery#location}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#name OracleAutonomousDatabaseCrossRegionDisasterRecovery#name}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#resource_group_name OracleAutonomousDatabaseCrossRegionDisasterRecovery#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.sourceAutonomousDatabaseId">source_autonomous_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#source_autonomous_database_id OracleAutonomousDatabaseCrossRegionDisasterRecovery#source_autonomous_database_id}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#subnet_id OracleAutonomousDatabaseCrossRegionDisasterRecovery#subnet_id}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#id OracleAutonomousDatabaseCrossRegionDisasterRecovery#id}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.replicateAutomaticBackupsEnabled">replicate_automatic_backups_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#replicate_automatic_backups_enabled OracleAutonomousDatabaseCrossRegionDisasterRecovery#replicate_automatic_backups_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#tags OracleAutonomousDatabaseCrossRegionDisasterRecovery#tags}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts">OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#display_name OracleAutonomousDatabaseCrossRegionDisasterRecovery#display_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#location OracleAutonomousDatabaseCrossRegionDisasterRecovery#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#name OracleAutonomousDatabaseCrossRegionDisasterRecovery#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#resource_group_name OracleAutonomousDatabaseCrossRegionDisasterRecovery#resource_group_name}.

---

##### `source_autonomous_database_id`<sup>Required</sup> <a name="source_autonomous_database_id" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.sourceAutonomousDatabaseId"></a>

```python
source_autonomous_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#source_autonomous_database_id OracleAutonomousDatabaseCrossRegionDisasterRecovery#source_autonomous_database_id}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#subnet_id OracleAutonomousDatabaseCrossRegionDisasterRecovery#subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#id OracleAutonomousDatabaseCrossRegionDisasterRecovery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replicate_automatic_backups_enabled`<sup>Optional</sup> <a name="replicate_automatic_backups_enabled" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.replicateAutomaticBackupsEnabled"></a>

```python
replicate_automatic_backups_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#replicate_automatic_backups_enabled OracleAutonomousDatabaseCrossRegionDisasterRecovery#replicate_automatic_backups_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#tags OracleAutonomousDatabaseCrossRegionDisasterRecovery#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.timeouts"></a>

```python
timeouts: OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts">OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#timeouts OracleAutonomousDatabaseCrossRegionDisasterRecovery#timeouts}

---

### OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts <a name="OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import oracle_autonomous_database_cross_region_disaster_recovery

oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#create OracleAutonomousDatabaseCrossRegionDisasterRecovery#create}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#delete OracleAutonomousDatabaseCrossRegionDisasterRecovery#delete}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#read OracleAutonomousDatabaseCrossRegionDisasterRecovery#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#create OracleAutonomousDatabaseCrossRegionDisasterRecovery#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#delete OracleAutonomousDatabaseCrossRegionDisasterRecovery#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.8.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#read OracleAutonomousDatabaseCrossRegionDisasterRecovery#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference <a name="OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import oracle_autonomous_database_cross_region_disaster_recovery

oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts">OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts">OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts</a>

---



