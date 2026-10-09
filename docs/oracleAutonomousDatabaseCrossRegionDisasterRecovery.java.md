# `oracleAutonomousDatabaseCrossRegionDisasterRecovery` Submodule <a name="`oracleAutonomousDatabaseCrossRegionDisasterRecovery` Submodule" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleAutonomousDatabaseCrossRegionDisasterRecovery <a name="OracleAutonomousDatabaseCrossRegionDisasterRecovery" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery azurerm_oracle_autonomous_database_cross_region_disaster_recovery}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer"></a>

```java
import io.cdktn.providers.azurerm.oracle_autonomous_database_cross_region_disaster_recovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery;

OracleAutonomousDatabaseCrossRegionDisasterRecovery.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .sourceAutonomousDatabaseId(java.lang.String)
    .subnetId(java.lang.String)
//  .id(java.lang.String)
//  .replicateAutomaticBackupsEnabled(java.lang.Boolean|IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#display_name OracleAutonomousDatabaseCrossRegionDisasterRecovery#display_name}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#location OracleAutonomousDatabaseCrossRegionDisasterRecovery#location}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#name OracleAutonomousDatabaseCrossRegionDisasterRecovery#name}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#resource_group_name OracleAutonomousDatabaseCrossRegionDisasterRecovery#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.sourceAutonomousDatabaseId">sourceAutonomousDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#source_autonomous_database_id OracleAutonomousDatabaseCrossRegionDisasterRecovery#source_autonomous_database_id}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#subnet_id OracleAutonomousDatabaseCrossRegionDisasterRecovery#subnet_id}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#id OracleAutonomousDatabaseCrossRegionDisasterRecovery#id}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.replicateAutomaticBackupsEnabled">replicateAutomaticBackupsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#replicate_automatic_backups_enabled OracleAutonomousDatabaseCrossRegionDisasterRecovery#replicate_automatic_backups_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#tags OracleAutonomousDatabaseCrossRegionDisasterRecovery#tags}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts">OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#display_name OracleAutonomousDatabaseCrossRegionDisasterRecovery#display_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#location OracleAutonomousDatabaseCrossRegionDisasterRecovery#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#name OracleAutonomousDatabaseCrossRegionDisasterRecovery#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#resource_group_name OracleAutonomousDatabaseCrossRegionDisasterRecovery#resource_group_name}.

---

##### `sourceAutonomousDatabaseId`<sup>Required</sup> <a name="sourceAutonomousDatabaseId" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.sourceAutonomousDatabaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#source_autonomous_database_id OracleAutonomousDatabaseCrossRegionDisasterRecovery#source_autonomous_database_id}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#subnet_id OracleAutonomousDatabaseCrossRegionDisasterRecovery#subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#id OracleAutonomousDatabaseCrossRegionDisasterRecovery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replicateAutomaticBackupsEnabled`<sup>Optional</sup> <a name="replicateAutomaticBackupsEnabled" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.replicateAutomaticBackupsEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#replicate_automatic_backups_enabled OracleAutonomousDatabaseCrossRegionDisasterRecovery#replicate_automatic_backups_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#tags OracleAutonomousDatabaseCrossRegionDisasterRecovery#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts">OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#timeouts OracleAutonomousDatabaseCrossRegionDisasterRecovery#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.resetReplicateAutomaticBackupsEnabled">resetReplicateAutomaticBackupsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.putTimeouts"></a>

```java
public void putTimeouts(OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts">OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.resetId"></a>

```java
public void resetId()
```

##### `resetReplicateAutomaticBackupsEnabled` <a name="resetReplicateAutomaticBackupsEnabled" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.resetReplicateAutomaticBackupsEnabled"></a>

```java
public void resetReplicateAutomaticBackupsEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OracleAutonomousDatabaseCrossRegionDisasterRecovery resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.oracle_autonomous_database_cross_region_disaster_recovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery;

OracleAutonomousDatabaseCrossRegionDisasterRecovery.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.oracle_autonomous_database_cross_region_disaster_recovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery;

OracleAutonomousDatabaseCrossRegionDisasterRecovery.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.oracle_autonomous_database_cross_region_disaster_recovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery;

OracleAutonomousDatabaseCrossRegionDisasterRecovery.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.oracle_autonomous_database_cross_region_disaster_recovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery;

OracleAutonomousDatabaseCrossRegionDisasterRecovery.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OracleAutonomousDatabaseCrossRegionDisasterRecovery.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OracleAutonomousDatabaseCrossRegionDisasterRecovery resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OracleAutonomousDatabaseCrossRegionDisasterRecovery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OracleAutonomousDatabaseCrossRegionDisasterRecovery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OracleAutonomousDatabaseCrossRegionDisasterRecovery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.autoScalingEnabled">autoScalingEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.autoScalingForStorageEnabled">autoScalingForStorageEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.backupRetentionPeriodInDays">backupRetentionPeriodInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.characterSet">characterSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.computeModel">computeModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.customerContacts">customerContacts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.databaseVersion">databaseVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.databaseWorkload">databaseWorkload</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.dataStorageSizeInTb">dataStorageSizeInTb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.mtlsConnectionRequired">mtlsConnectionRequired</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.nationalCharacterSet">nationalCharacterSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.remoteDisasterRecoveryType">remoteDisasterRecoveryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference">OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.replicateAutomaticBackupsEnabledInput">replicateAutomaticBackupsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.sourceAutonomousDatabaseIdInput">sourceAutonomousDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts">OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.replicateAutomaticBackupsEnabled">replicateAutomaticBackupsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.sourceAutonomousDatabaseId">sourceAutonomousDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoScalingEnabled`<sup>Required</sup> <a name="autoScalingEnabled" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.autoScalingEnabled"></a>

```java
public IResolvable getAutoScalingEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `autoScalingForStorageEnabled`<sup>Required</sup> <a name="autoScalingForStorageEnabled" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.autoScalingForStorageEnabled"></a>

```java
public IResolvable getAutoScalingForStorageEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `backupRetentionPeriodInDays`<sup>Required</sup> <a name="backupRetentionPeriodInDays" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.backupRetentionPeriodInDays"></a>

```java
public java.lang.Number getBackupRetentionPeriodInDays();
```

- *Type:* java.lang.Number

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.characterSet"></a>

```java
public java.lang.String getCharacterSet();
```

- *Type:* java.lang.String

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.computeModel"></a>

```java
public java.lang.String getComputeModel();
```

- *Type:* java.lang.String

---

##### `customerContacts`<sup>Required</sup> <a name="customerContacts" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.customerContacts"></a>

```java
public java.util.List<java.lang.String> getCustomerContacts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.databaseVersion"></a>

```java
public java.lang.String getDatabaseVersion();
```

- *Type:* java.lang.String

---

##### `databaseWorkload`<sup>Required</sup> <a name="databaseWorkload" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.databaseWorkload"></a>

```java
public java.lang.String getDatabaseWorkload();
```

- *Type:* java.lang.String

---

##### `dataStorageSizeInTb`<sup>Required</sup> <a name="dataStorageSizeInTb" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.dataStorageSizeInTb"></a>

```java
public java.lang.Number getDataStorageSizeInTb();
```

- *Type:* java.lang.Number

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `mtlsConnectionRequired`<sup>Required</sup> <a name="mtlsConnectionRequired" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.mtlsConnectionRequired"></a>

```java
public IResolvable getMtlsConnectionRequired();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `nationalCharacterSet`<sup>Required</sup> <a name="nationalCharacterSet" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.nationalCharacterSet"></a>

```java
public java.lang.String getNationalCharacterSet();
```

- *Type:* java.lang.String

---

##### `remoteDisasterRecoveryType`<sup>Required</sup> <a name="remoteDisasterRecoveryType" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.remoteDisasterRecoveryType"></a>

```java
public java.lang.String getRemoteDisasterRecoveryType();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeouts"></a>

```java
public OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference">OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `replicateAutomaticBackupsEnabledInput`<sup>Optional</sup> <a name="replicateAutomaticBackupsEnabledInput" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.replicateAutomaticBackupsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getReplicateAutomaticBackupsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `sourceAutonomousDatabaseIdInput`<sup>Optional</sup> <a name="sourceAutonomousDatabaseIdInput" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.sourceAutonomousDatabaseIdInput"></a>

```java
public java.lang.String getSourceAutonomousDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeoutsInput"></a>

```java
public IResolvable|OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts">OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `replicateAutomaticBackupsEnabled`<sup>Required</sup> <a name="replicateAutomaticBackupsEnabled" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.replicateAutomaticBackupsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getReplicateAutomaticBackupsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `sourceAutonomousDatabaseId`<sup>Required</sup> <a name="sourceAutonomousDatabaseId" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.sourceAutonomousDatabaseId"></a>

```java
public java.lang.String getSourceAutonomousDatabaseId();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecovery.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig <a name="OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.oracle_autonomous_database_cross_region_disaster_recovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig;

OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .sourceAutonomousDatabaseId(java.lang.String)
    .subnetId(java.lang.String)
//  .id(java.lang.String)
//  .replicateAutomaticBackupsEnabled(java.lang.Boolean|IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#display_name OracleAutonomousDatabaseCrossRegionDisasterRecovery#display_name}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#location OracleAutonomousDatabaseCrossRegionDisasterRecovery#location}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#name OracleAutonomousDatabaseCrossRegionDisasterRecovery#name}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#resource_group_name OracleAutonomousDatabaseCrossRegionDisasterRecovery#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.sourceAutonomousDatabaseId">sourceAutonomousDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#source_autonomous_database_id OracleAutonomousDatabaseCrossRegionDisasterRecovery#source_autonomous_database_id}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#subnet_id OracleAutonomousDatabaseCrossRegionDisasterRecovery#subnet_id}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#id OracleAutonomousDatabaseCrossRegionDisasterRecovery#id}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.replicateAutomaticBackupsEnabled">replicateAutomaticBackupsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#replicate_automatic_backups_enabled OracleAutonomousDatabaseCrossRegionDisasterRecovery#replicate_automatic_backups_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#tags OracleAutonomousDatabaseCrossRegionDisasterRecovery#tags}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts">OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#display_name OracleAutonomousDatabaseCrossRegionDisasterRecovery#display_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#location OracleAutonomousDatabaseCrossRegionDisasterRecovery#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#name OracleAutonomousDatabaseCrossRegionDisasterRecovery#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#resource_group_name OracleAutonomousDatabaseCrossRegionDisasterRecovery#resource_group_name}.

---

##### `sourceAutonomousDatabaseId`<sup>Required</sup> <a name="sourceAutonomousDatabaseId" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.sourceAutonomousDatabaseId"></a>

```java
public java.lang.String getSourceAutonomousDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#source_autonomous_database_id OracleAutonomousDatabaseCrossRegionDisasterRecovery#source_autonomous_database_id}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#subnet_id OracleAutonomousDatabaseCrossRegionDisasterRecovery#subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#id OracleAutonomousDatabaseCrossRegionDisasterRecovery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replicateAutomaticBackupsEnabled`<sup>Optional</sup> <a name="replicateAutomaticBackupsEnabled" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.replicateAutomaticBackupsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getReplicateAutomaticBackupsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#replicate_automatic_backups_enabled OracleAutonomousDatabaseCrossRegionDisasterRecovery#replicate_automatic_backups_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#tags OracleAutonomousDatabaseCrossRegionDisasterRecovery#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.timeouts"></a>

```java
public OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts">OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#timeouts OracleAutonomousDatabaseCrossRegionDisasterRecovery#timeouts}

---

### OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts <a name="OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.oracle_autonomous_database_cross_region_disaster_recovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts;

OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#create OracleAutonomousDatabaseCrossRegionDisasterRecovery#create}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#delete OracleAutonomousDatabaseCrossRegionDisasterRecovery#delete}. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#read OracleAutonomousDatabaseCrossRegionDisasterRecovery#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#create OracleAutonomousDatabaseCrossRegionDisasterRecovery#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#delete OracleAutonomousDatabaseCrossRegionDisasterRecovery#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/resources/oracle_autonomous_database_cross_region_disaster_recovery#read OracleAutonomousDatabaseCrossRegionDisasterRecovery#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference <a name="OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.oracle_autonomous_database_cross_region_disaster_recovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference;

new OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts">OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.oracleAutonomousDatabaseCrossRegionDisasterRecovery.OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts">OracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts</a>

---



