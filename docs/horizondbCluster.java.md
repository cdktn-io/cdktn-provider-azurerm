# `horizondbCluster` Submodule <a name="`horizondbCluster` Submodule" id="@cdktn/provider-azurerm.horizondbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HorizondbCluster <a name="HorizondbCluster" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster azurerm_horizondb_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer"></a>

```java
import io.cdktn.providers.azurerm.horizondb_cluster.HorizondbCluster;

HorizondbCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .administratorLogin(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .readWritePool(HorizondbClusterReadWritePool)
    .resourceGroupName(java.lang.String)
//  .administratorPassword(java.lang.String)
//  .administratorPasswordWo(java.lang.String)
//  .administratorPasswordWoVersion(java.lang.Number)
//  .backupRetentionInDays(java.lang.Number)
//  .geoRedundantBackupEnabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .identity(HorizondbClusterIdentity)
//  .pointInTimeRestore(HorizondbClusterPointInTimeRestore)
//  .postgresqlVersion(java.lang.String)
//  .publicNetworkAccess(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(HorizondbClusterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.administratorLogin">administratorLogin</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_login HorizondbCluster#administrator_login}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#location HorizondbCluster#location}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#name HorizondbCluster#name}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.readWritePool">readWritePool</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool">HorizondbClusterReadWritePool</a></code> | read_write_pool block. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#resource_group_name HorizondbCluster#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.administratorPassword">administratorPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password HorizondbCluster#administrator_password}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.administratorPasswordWo">administratorPasswordWo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password_wo HorizondbCluster#administrator_password_wo}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.administratorPasswordWoVersion">administratorPasswordWoVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password_wo_version HorizondbCluster#administrator_password_wo_version}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.backupRetentionInDays">backupRetentionInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#backup_retention_in_days HorizondbCluster#backup_retention_in_days}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.geoRedundantBackupEnabled">geoRedundantBackupEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#geo_redundant_backup_enabled HorizondbCluster#geo_redundant_backup_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#id HorizondbCluster#id}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity">HorizondbClusterIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.pointInTimeRestore">pointInTimeRestore</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore">HorizondbClusterPointInTimeRestore</a></code> | point_in_time_restore block. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.postgresqlVersion">postgresqlVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#postgresql_version HorizondbCluster#postgresql_version}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.publicNetworkAccess">publicNetworkAccess</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#public_network_access HorizondbCluster#public_network_access}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#tags HorizondbCluster#tags}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts">HorizondbClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `administratorLogin`<sup>Required</sup> <a name="administratorLogin" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.administratorLogin"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_login HorizondbCluster#administrator_login}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#location HorizondbCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#name HorizondbCluster#name}.

---

##### `readWritePool`<sup>Required</sup> <a name="readWritePool" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.readWritePool"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool">HorizondbClusterReadWritePool</a>

read_write_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#read_write_pool HorizondbCluster#read_write_pool}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#resource_group_name HorizondbCluster#resource_group_name}.

---

##### `administratorPassword`<sup>Optional</sup> <a name="administratorPassword" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.administratorPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password HorizondbCluster#administrator_password}.

---

##### `administratorPasswordWo`<sup>Optional</sup> <a name="administratorPasswordWo" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.administratorPasswordWo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password_wo HorizondbCluster#administrator_password_wo}.

---

##### `administratorPasswordWoVersion`<sup>Optional</sup> <a name="administratorPasswordWoVersion" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.administratorPasswordWoVersion"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password_wo_version HorizondbCluster#administrator_password_wo_version}.

---

##### `backupRetentionInDays`<sup>Optional</sup> <a name="backupRetentionInDays" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.backupRetentionInDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#backup_retention_in_days HorizondbCluster#backup_retention_in_days}.

---

##### `geoRedundantBackupEnabled`<sup>Optional</sup> <a name="geoRedundantBackupEnabled" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.geoRedundantBackupEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#geo_redundant_backup_enabled HorizondbCluster#geo_redundant_backup_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#id HorizondbCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity">HorizondbClusterIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#identity HorizondbCluster#identity}

---

##### `pointInTimeRestore`<sup>Optional</sup> <a name="pointInTimeRestore" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.pointInTimeRestore"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore">HorizondbClusterPointInTimeRestore</a>

point_in_time_restore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#point_in_time_restore HorizondbCluster#point_in_time_restore}

---

##### `postgresqlVersion`<sup>Optional</sup> <a name="postgresqlVersion" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.postgresqlVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#postgresql_version HorizondbCluster#postgresql_version}.

---

##### `publicNetworkAccess`<sup>Optional</sup> <a name="publicNetworkAccess" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.publicNetworkAccess"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#public_network_access HorizondbCluster#public_network_access}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

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
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putPointInTimeRestore">putPointInTimeRestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putReadWritePool">putReadWritePool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetAdministratorPassword">resetAdministratorPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetAdministratorPasswordWo">resetAdministratorPasswordWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetAdministratorPasswordWoVersion">resetAdministratorPasswordWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetBackupRetentionInDays">resetBackupRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetGeoRedundantBackupEnabled">resetGeoRedundantBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetPointInTimeRestore">resetPointInTimeRestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetPostgresqlVersion">resetPostgresqlVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetPublicNetworkAccess">resetPublicNetworkAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putIdentity"></a>

```java
public void putIdentity(HorizondbClusterIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity">HorizondbClusterIdentity</a>

---

##### `putPointInTimeRestore` <a name="putPointInTimeRestore" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putPointInTimeRestore"></a>

```java
public void putPointInTimeRestore(HorizondbClusterPointInTimeRestore value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putPointInTimeRestore.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore">HorizondbClusterPointInTimeRestore</a>

---

##### `putReadWritePool` <a name="putReadWritePool" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putReadWritePool"></a>

```java
public void putReadWritePool(HorizondbClusterReadWritePool value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putReadWritePool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool">HorizondbClusterReadWritePool</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putTimeouts"></a>

```java
public void putTimeouts(HorizondbClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts">HorizondbClusterTimeouts</a>

---

##### `resetAdministratorPassword` <a name="resetAdministratorPassword" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetAdministratorPassword"></a>

```java
public void resetAdministratorPassword()
```

##### `resetAdministratorPasswordWo` <a name="resetAdministratorPasswordWo" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetAdministratorPasswordWo"></a>

```java
public void resetAdministratorPasswordWo()
```

##### `resetAdministratorPasswordWoVersion` <a name="resetAdministratorPasswordWoVersion" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetAdministratorPasswordWoVersion"></a>

```java
public void resetAdministratorPasswordWoVersion()
```

##### `resetBackupRetentionInDays` <a name="resetBackupRetentionInDays" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetBackupRetentionInDays"></a>

```java
public void resetBackupRetentionInDays()
```

##### `resetGeoRedundantBackupEnabled` <a name="resetGeoRedundantBackupEnabled" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetGeoRedundantBackupEnabled"></a>

```java
public void resetGeoRedundantBackupEnabled()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetPointInTimeRestore` <a name="resetPointInTimeRestore" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetPointInTimeRestore"></a>

```java
public void resetPointInTimeRestore()
```

##### `resetPostgresqlVersion` <a name="resetPostgresqlVersion" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetPostgresqlVersion"></a>

```java
public void resetPostgresqlVersion()
```

##### `resetPublicNetworkAccess` <a name="resetPublicNetworkAccess" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetPublicNetworkAccess"></a>

```java
public void resetPublicNetworkAccess()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a HorizondbCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.horizondb_cluster.HorizondbCluster;

HorizondbCluster.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.horizondb_cluster.HorizondbCluster;

HorizondbCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.horizondb_cluster.HorizondbCluster;

HorizondbCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.horizondb_cluster.HorizondbCluster;

HorizondbCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),HorizondbCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a HorizondbCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the HorizondbCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing HorizondbCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the HorizondbCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference">HorizondbClusterIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.pointInTimeRestore">pointInTimeRestore</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference">HorizondbClusterPointInTimeRestoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.readWritePool">readWritePool</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference">HorizondbClusterReadWritePoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference">HorizondbClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorLoginInput">administratorLoginInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordInput">administratorPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordWoInput">administratorPasswordWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordWoVersionInput">administratorPasswordWoVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.backupRetentionInDaysInput">backupRetentionInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.geoRedundantBackupEnabledInput">geoRedundantBackupEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.identityInput">identityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity">HorizondbClusterIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.pointInTimeRestoreInput">pointInTimeRestoreInput</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore">HorizondbClusterPointInTimeRestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.postgresqlVersionInput">postgresqlVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.publicNetworkAccessInput">publicNetworkAccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.readWritePoolInput">readWritePoolInput</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool">HorizondbClusterReadWritePool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts">HorizondbClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorLogin">administratorLogin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPassword">administratorPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordWo">administratorPasswordWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordWoVersion">administratorPasswordWoVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.backupRetentionInDays">backupRetentionInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.geoRedundantBackupEnabled">geoRedundantBackupEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.postgresqlVersion">postgresqlVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.publicNetworkAccess">publicNetworkAccess</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.identity"></a>

```java
public HorizondbClusterIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference">HorizondbClusterIdentityOutputReference</a>

---

##### `pointInTimeRestore`<sup>Required</sup> <a name="pointInTimeRestore" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.pointInTimeRestore"></a>

```java
public HorizondbClusterPointInTimeRestoreOutputReference getPointInTimeRestore();
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference">HorizondbClusterPointInTimeRestoreOutputReference</a>

---

##### `readWritePool`<sup>Required</sup> <a name="readWritePool" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.readWritePool"></a>

```java
public HorizondbClusterReadWritePoolOutputReference getReadWritePool();
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference">HorizondbClusterReadWritePoolOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.timeouts"></a>

```java
public HorizondbClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference">HorizondbClusterTimeoutsOutputReference</a>

---

##### `administratorLoginInput`<sup>Optional</sup> <a name="administratorLoginInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorLoginInput"></a>

```java
public java.lang.String getAdministratorLoginInput();
```

- *Type:* java.lang.String

---

##### `administratorPasswordInput`<sup>Optional</sup> <a name="administratorPasswordInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordInput"></a>

```java
public java.lang.String getAdministratorPasswordInput();
```

- *Type:* java.lang.String

---

##### `administratorPasswordWoInput`<sup>Optional</sup> <a name="administratorPasswordWoInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordWoInput"></a>

```java
public java.lang.String getAdministratorPasswordWoInput();
```

- *Type:* java.lang.String

---

##### `administratorPasswordWoVersionInput`<sup>Optional</sup> <a name="administratorPasswordWoVersionInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordWoVersionInput"></a>

```java
public java.lang.Number getAdministratorPasswordWoVersionInput();
```

- *Type:* java.lang.Number

---

##### `backupRetentionInDaysInput`<sup>Optional</sup> <a name="backupRetentionInDaysInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.backupRetentionInDaysInput"></a>

```java
public java.lang.Number getBackupRetentionInDaysInput();
```

- *Type:* java.lang.Number

---

##### `geoRedundantBackupEnabledInput`<sup>Optional</sup> <a name="geoRedundantBackupEnabledInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.geoRedundantBackupEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getGeoRedundantBackupEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.identityInput"></a>

```java
public HorizondbClusterIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity">HorizondbClusterIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pointInTimeRestoreInput`<sup>Optional</sup> <a name="pointInTimeRestoreInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.pointInTimeRestoreInput"></a>

```java
public HorizondbClusterPointInTimeRestore getPointInTimeRestoreInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore">HorizondbClusterPointInTimeRestore</a>

---

##### `postgresqlVersionInput`<sup>Optional</sup> <a name="postgresqlVersionInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.postgresqlVersionInput"></a>

```java
public java.lang.String getPostgresqlVersionInput();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessInput`<sup>Optional</sup> <a name="publicNetworkAccessInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.publicNetworkAccessInput"></a>

```java
public java.lang.String getPublicNetworkAccessInput();
```

- *Type:* java.lang.String

---

##### `readWritePoolInput`<sup>Optional</sup> <a name="readWritePoolInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.readWritePoolInput"></a>

```java
public HorizondbClusterReadWritePool getReadWritePoolInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool">HorizondbClusterReadWritePool</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.timeoutsInput"></a>

```java
public IResolvable|HorizondbClusterTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts">HorizondbClusterTimeouts</a>

---

##### `administratorLogin`<sup>Required</sup> <a name="administratorLogin" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorLogin"></a>

```java
public java.lang.String getAdministratorLogin();
```

- *Type:* java.lang.String

---

##### `administratorPassword`<sup>Required</sup> <a name="administratorPassword" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPassword"></a>

```java
public java.lang.String getAdministratorPassword();
```

- *Type:* java.lang.String

---

##### ~~`administratorPasswordWo`~~<sup>Required</sup> <a name="administratorPasswordWo" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```java
public java.lang.String getAdministratorPasswordWo();
```

- *Type:* java.lang.String

---

##### `administratorPasswordWoVersion`<sup>Required</sup> <a name="administratorPasswordWoVersion" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordWoVersion"></a>

```java
public java.lang.Number getAdministratorPasswordWoVersion();
```

- *Type:* java.lang.Number

---

##### `backupRetentionInDays`<sup>Required</sup> <a name="backupRetentionInDays" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.backupRetentionInDays"></a>

```java
public java.lang.Number getBackupRetentionInDays();
```

- *Type:* java.lang.Number

---

##### `geoRedundantBackupEnabled`<sup>Required</sup> <a name="geoRedundantBackupEnabled" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.geoRedundantBackupEnabled"></a>

```java
public java.lang.Boolean|IResolvable getGeoRedundantBackupEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `postgresqlVersion`<sup>Required</sup> <a name="postgresqlVersion" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.postgresqlVersion"></a>

```java
public java.lang.String getPostgresqlVersion();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccess`<sup>Required</sup> <a name="publicNetworkAccess" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.publicNetworkAccess"></a>

```java
public java.lang.String getPublicNetworkAccess();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### HorizondbClusterConfig <a name="HorizondbClusterConfig" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.horizondb_cluster.HorizondbClusterConfig;

HorizondbClusterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .administratorLogin(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .readWritePool(HorizondbClusterReadWritePool)
    .resourceGroupName(java.lang.String)
//  .administratorPassword(java.lang.String)
//  .administratorPasswordWo(java.lang.String)
//  .administratorPasswordWoVersion(java.lang.Number)
//  .backupRetentionInDays(java.lang.Number)
//  .geoRedundantBackupEnabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .identity(HorizondbClusterIdentity)
//  .pointInTimeRestore(HorizondbClusterPointInTimeRestore)
//  .postgresqlVersion(java.lang.String)
//  .publicNetworkAccess(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(HorizondbClusterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.administratorLogin">administratorLogin</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_login HorizondbCluster#administrator_login}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#location HorizondbCluster#location}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#name HorizondbCluster#name}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.readWritePool">readWritePool</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool">HorizondbClusterReadWritePool</a></code> | read_write_pool block. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#resource_group_name HorizondbCluster#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.administratorPassword">administratorPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password HorizondbCluster#administrator_password}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.administratorPasswordWo">administratorPasswordWo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password_wo HorizondbCluster#administrator_password_wo}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.administratorPasswordWoVersion">administratorPasswordWoVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password_wo_version HorizondbCluster#administrator_password_wo_version}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.backupRetentionInDays">backupRetentionInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#backup_retention_in_days HorizondbCluster#backup_retention_in_days}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.geoRedundantBackupEnabled">geoRedundantBackupEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#geo_redundant_backup_enabled HorizondbCluster#geo_redundant_backup_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#id HorizondbCluster#id}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity">HorizondbClusterIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.pointInTimeRestore">pointInTimeRestore</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore">HorizondbClusterPointInTimeRestore</a></code> | point_in_time_restore block. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.postgresqlVersion">postgresqlVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#postgresql_version HorizondbCluster#postgresql_version}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.publicNetworkAccess">publicNetworkAccess</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#public_network_access HorizondbCluster#public_network_access}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#tags HorizondbCluster#tags}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts">HorizondbClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `administratorLogin`<sup>Required</sup> <a name="administratorLogin" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.administratorLogin"></a>

```java
public java.lang.String getAdministratorLogin();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_login HorizondbCluster#administrator_login}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#location HorizondbCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#name HorizondbCluster#name}.

---

##### `readWritePool`<sup>Required</sup> <a name="readWritePool" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.readWritePool"></a>

```java
public HorizondbClusterReadWritePool getReadWritePool();
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool">HorizondbClusterReadWritePool</a>

read_write_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#read_write_pool HorizondbCluster#read_write_pool}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#resource_group_name HorizondbCluster#resource_group_name}.

---

##### `administratorPassword`<sup>Optional</sup> <a name="administratorPassword" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.administratorPassword"></a>

```java
public java.lang.String getAdministratorPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password HorizondbCluster#administrator_password}.

---

##### `administratorPasswordWo`<sup>Optional</sup> <a name="administratorPasswordWo" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.administratorPasswordWo"></a>

```java
public java.lang.String getAdministratorPasswordWo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password_wo HorizondbCluster#administrator_password_wo}.

---

##### `administratorPasswordWoVersion`<sup>Optional</sup> <a name="administratorPasswordWoVersion" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.administratorPasswordWoVersion"></a>

```java
public java.lang.Number getAdministratorPasswordWoVersion();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password_wo_version HorizondbCluster#administrator_password_wo_version}.

---

##### `backupRetentionInDays`<sup>Optional</sup> <a name="backupRetentionInDays" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.backupRetentionInDays"></a>

```java
public java.lang.Number getBackupRetentionInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#backup_retention_in_days HorizondbCluster#backup_retention_in_days}.

---

##### `geoRedundantBackupEnabled`<sup>Optional</sup> <a name="geoRedundantBackupEnabled" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.geoRedundantBackupEnabled"></a>

```java
public java.lang.Boolean|IResolvable getGeoRedundantBackupEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#geo_redundant_backup_enabled HorizondbCluster#geo_redundant_backup_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#id HorizondbCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.identity"></a>

```java
public HorizondbClusterIdentity getIdentity();
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity">HorizondbClusterIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#identity HorizondbCluster#identity}

---

##### `pointInTimeRestore`<sup>Optional</sup> <a name="pointInTimeRestore" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.pointInTimeRestore"></a>

```java
public HorizondbClusterPointInTimeRestore getPointInTimeRestore();
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore">HorizondbClusterPointInTimeRestore</a>

point_in_time_restore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#point_in_time_restore HorizondbCluster#point_in_time_restore}

---

##### `postgresqlVersion`<sup>Optional</sup> <a name="postgresqlVersion" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.postgresqlVersion"></a>

```java
public java.lang.String getPostgresqlVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#postgresql_version HorizondbCluster#postgresql_version}.

---

##### `publicNetworkAccess`<sup>Optional</sup> <a name="publicNetworkAccess" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.publicNetworkAccess"></a>

```java
public java.lang.String getPublicNetworkAccess();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#public_network_access HorizondbCluster#public_network_access}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#tags HorizondbCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.timeouts"></a>

```java
public HorizondbClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts">HorizondbClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#timeouts HorizondbCluster#timeouts}

---

### HorizondbClusterIdentity <a name="HorizondbClusterIdentity" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity.Initializer"></a>

```java
import io.cdktn.providers.azurerm.horizondb_cluster.HorizondbClusterIdentity;

HorizondbClusterIdentity.builder()
    .identityIds(java.util.List<java.lang.String>)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#identity_ids HorizondbCluster#identity_ids}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#type HorizondbCluster#type}. |

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#identity_ids HorizondbCluster#identity_ids}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#type HorizondbCluster#type}.

---

### HorizondbClusterPointInTimeRestore <a name="HorizondbClusterPointInTimeRestore" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore.Initializer"></a>

```java
import io.cdktn.providers.azurerm.horizondb_cluster.HorizondbClusterPointInTimeRestore;

HorizondbClusterPointInTimeRestore.builder()
    .pointInTimeUtc(java.lang.String)
    .sourceHorizondbClusterId(java.lang.String)
//  .sourceLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore.property.pointInTimeUtc">pointInTimeUtc</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#point_in_time_utc HorizondbCluster#point_in_time_utc}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore.property.sourceHorizondbClusterId">sourceHorizondbClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#source_horizondb_cluster_id HorizondbCluster#source_horizondb_cluster_id}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore.property.sourceLocation">sourceLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#source_location HorizondbCluster#source_location}. |

---

##### `pointInTimeUtc`<sup>Required</sup> <a name="pointInTimeUtc" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore.property.pointInTimeUtc"></a>

```java
public java.lang.String getPointInTimeUtc();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#point_in_time_utc HorizondbCluster#point_in_time_utc}.

---

##### `sourceHorizondbClusterId`<sup>Required</sup> <a name="sourceHorizondbClusterId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore.property.sourceHorizondbClusterId"></a>

```java
public java.lang.String getSourceHorizondbClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#source_horizondb_cluster_id HorizondbCluster#source_horizondb_cluster_id}.

---

##### `sourceLocation`<sup>Optional</sup> <a name="sourceLocation" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore.property.sourceLocation"></a>

```java
public java.lang.String getSourceLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#source_location HorizondbCluster#source_location}.

---

### HorizondbClusterReadWritePool <a name="HorizondbClusterReadWritePool" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.Initializer"></a>

```java
import io.cdktn.providers.azurerm.horizondb_cluster.HorizondbClusterReadWritePool;

HorizondbClusterReadWritePool.builder()
    .compute(HorizondbClusterReadWritePoolCompute)
    .highAvailabilityMode(java.lang.String)
    .name(java.lang.String)
    .nodeCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.property.compute">compute</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute">HorizondbClusterReadWritePoolCompute</a></code> | compute block. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.property.highAvailabilityMode">highAvailabilityMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#high_availability_mode HorizondbCluster#high_availability_mode}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#name HorizondbCluster#name}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#node_count HorizondbCluster#node_count}. |

---

##### `compute`<sup>Required</sup> <a name="compute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.property.compute"></a>

```java
public HorizondbClusterReadWritePoolCompute getCompute();
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute">HorizondbClusterReadWritePoolCompute</a>

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#compute HorizondbCluster#compute}

---

##### `highAvailabilityMode`<sup>Required</sup> <a name="highAvailabilityMode" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.property.highAvailabilityMode"></a>

```java
public java.lang.String getHighAvailabilityMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#high_availability_mode HorizondbCluster#high_availability_mode}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#name HorizondbCluster#name}.

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#node_count HorizondbCluster#node_count}.

---

### HorizondbClusterReadWritePoolCompute <a name="HorizondbClusterReadWritePoolCompute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute.Initializer"></a>

```java
import io.cdktn.providers.azurerm.horizondb_cluster.HorizondbClusterReadWritePoolCompute;

HorizondbClusterReadWritePoolCompute.builder()
    .generation(java.lang.Number)
    .processor(java.lang.String)
    .vcores(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute.property.generation">generation</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#generation HorizondbCluster#generation}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute.property.processor">processor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#processor HorizondbCluster#processor}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute.property.vcores">vcores</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#vcores HorizondbCluster#vcores}. |

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute.property.generation"></a>

```java
public java.lang.Number getGeneration();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#generation HorizondbCluster#generation}.

---

##### `processor`<sup>Required</sup> <a name="processor" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute.property.processor"></a>

```java
public java.lang.String getProcessor();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#processor HorizondbCluster#processor}.

---

##### `vcores`<sup>Required</sup> <a name="vcores" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute.property.vcores"></a>

```java
public java.lang.Number getVcores();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#vcores HorizondbCluster#vcores}.

---

### HorizondbClusterTimeouts <a name="HorizondbClusterTimeouts" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.horizondb_cluster.HorizondbClusterTimeouts;

HorizondbClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#create HorizondbCluster#create}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#delete HorizondbCluster#delete}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#read HorizondbCluster#read}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#update HorizondbCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#create HorizondbCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#delete HorizondbCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#read HorizondbCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#update HorizondbCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HorizondbClusterIdentityOutputReference <a name="HorizondbClusterIdentityOutputReference" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.horizondb_cluster.HorizondbClusterIdentityOutputReference;

new HorizondbClusterIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity">HorizondbClusterIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.internalValue"></a>

```java
public HorizondbClusterIdentity getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity">HorizondbClusterIdentity</a>

---


### HorizondbClusterPointInTimeRestoreOutputReference <a name="HorizondbClusterPointInTimeRestoreOutputReference" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.horizondb_cluster.HorizondbClusterPointInTimeRestoreOutputReference;

new HorizondbClusterPointInTimeRestoreOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.resetSourceLocation">resetSourceLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceLocation` <a name="resetSourceLocation" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.resetSourceLocation"></a>

```java
public void resetSourceLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.pointInTimeUtcInput">pointInTimeUtcInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.sourceHorizondbClusterIdInput">sourceHorizondbClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.sourceLocationInput">sourceLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.pointInTimeUtc">pointInTimeUtc</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.sourceHorizondbClusterId">sourceHorizondbClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.sourceLocation">sourceLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore">HorizondbClusterPointInTimeRestore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pointInTimeUtcInput`<sup>Optional</sup> <a name="pointInTimeUtcInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.pointInTimeUtcInput"></a>

```java
public java.lang.String getPointInTimeUtcInput();
```

- *Type:* java.lang.String

---

##### `sourceHorizondbClusterIdInput`<sup>Optional</sup> <a name="sourceHorizondbClusterIdInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.sourceHorizondbClusterIdInput"></a>

```java
public java.lang.String getSourceHorizondbClusterIdInput();
```

- *Type:* java.lang.String

---

##### `sourceLocationInput`<sup>Optional</sup> <a name="sourceLocationInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.sourceLocationInput"></a>

```java
public java.lang.String getSourceLocationInput();
```

- *Type:* java.lang.String

---

##### `pointInTimeUtc`<sup>Required</sup> <a name="pointInTimeUtc" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.pointInTimeUtc"></a>

```java
public java.lang.String getPointInTimeUtc();
```

- *Type:* java.lang.String

---

##### `sourceHorizondbClusterId`<sup>Required</sup> <a name="sourceHorizondbClusterId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.sourceHorizondbClusterId"></a>

```java
public java.lang.String getSourceHorizondbClusterId();
```

- *Type:* java.lang.String

---

##### `sourceLocation`<sup>Required</sup> <a name="sourceLocation" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.sourceLocation"></a>

```java
public java.lang.String getSourceLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.internalValue"></a>

```java
public HorizondbClusterPointInTimeRestore getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore">HorizondbClusterPointInTimeRestore</a>

---


### HorizondbClusterReadWritePoolComputeOutputReference <a name="HorizondbClusterReadWritePoolComputeOutputReference" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.horizondb_cluster.HorizondbClusterReadWritePoolComputeOutputReference;

new HorizondbClusterReadWritePoolComputeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.generationInput">generationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.processorInput">processorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.vcoresInput">vcoresInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.generation">generation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.processor">processor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.vcores">vcores</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute">HorizondbClusterReadWritePoolCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `generationInput`<sup>Optional</sup> <a name="generationInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.generationInput"></a>

```java
public java.lang.Number getGenerationInput();
```

- *Type:* java.lang.Number

---

##### `processorInput`<sup>Optional</sup> <a name="processorInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.processorInput"></a>

```java
public java.lang.String getProcessorInput();
```

- *Type:* java.lang.String

---

##### `vcoresInput`<sup>Optional</sup> <a name="vcoresInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.vcoresInput"></a>

```java
public java.lang.Number getVcoresInput();
```

- *Type:* java.lang.Number

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.generation"></a>

```java
public java.lang.Number getGeneration();
```

- *Type:* java.lang.Number

---

##### `processor`<sup>Required</sup> <a name="processor" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.processor"></a>

```java
public java.lang.String getProcessor();
```

- *Type:* java.lang.String

---

##### `vcores`<sup>Required</sup> <a name="vcores" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.vcores"></a>

```java
public java.lang.Number getVcores();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.internalValue"></a>

```java
public HorizondbClusterReadWritePoolCompute getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute">HorizondbClusterReadWritePoolCompute</a>

---


### HorizondbClusterReadWritePoolOutputReference <a name="HorizondbClusterReadWritePoolOutputReference" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.horizondb_cluster.HorizondbClusterReadWritePoolOutputReference;

new HorizondbClusterReadWritePoolOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.putCompute">putCompute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCompute` <a name="putCompute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.putCompute"></a>

```java
public void putCompute(HorizondbClusterReadWritePoolCompute value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.putCompute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute">HorizondbClusterReadWritePoolCompute</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.compute">compute</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference">HorizondbClusterReadWritePoolComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.computeInput">computeInput</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute">HorizondbClusterReadWritePoolCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.highAvailabilityModeInput">highAvailabilityModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.nodeCountInput">nodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.highAvailabilityMode">highAvailabilityMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool">HorizondbClusterReadWritePool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compute`<sup>Required</sup> <a name="compute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.compute"></a>

```java
public HorizondbClusterReadWritePoolComputeOutputReference getCompute();
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference">HorizondbClusterReadWritePoolComputeOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `computeInput`<sup>Optional</sup> <a name="computeInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.computeInput"></a>

```java
public HorizondbClusterReadWritePoolCompute getComputeInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute">HorizondbClusterReadWritePoolCompute</a>

---

##### `highAvailabilityModeInput`<sup>Optional</sup> <a name="highAvailabilityModeInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.highAvailabilityModeInput"></a>

```java
public java.lang.String getHighAvailabilityModeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.nodeCountInput"></a>

```java
public java.lang.Number getNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `highAvailabilityMode`<sup>Required</sup> <a name="highAvailabilityMode" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.highAvailabilityMode"></a>

```java
public java.lang.String getHighAvailabilityMode();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.internalValue"></a>

```java
public HorizondbClusterReadWritePool getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool">HorizondbClusterReadWritePool</a>

---


### HorizondbClusterTimeoutsOutputReference <a name="HorizondbClusterTimeoutsOutputReference" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.horizondb_cluster.HorizondbClusterTimeoutsOutputReference;

new HorizondbClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts">HorizondbClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|HorizondbClusterTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts">HorizondbClusterTimeouts</a>

---



