# `dataAzurermOracleDatabaseSystemVersions` Submodule <a name="`dataAzurermOracleDatabaseSystemVersions` Submodule" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleDatabaseSystemVersions <a name="DataAzurermOracleDatabaseSystemVersions" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions azurerm_oracle_database_system_versions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_oracle_database_system_versions.DataAzurermOracleDatabaseSystemVersions;

DataAzurermOracleDatabaseSystemVersions.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
//  .databaseSoftwareImageSupported(java.lang.Boolean|IResolvable)
//  .databaseSystemShape(java.lang.String)
//  .id(java.lang.String)
//  .shapeFamily(java.lang.String)
//  .storageManagement(java.lang.String)
//  .timeouts(DataAzurermOracleDatabaseSystemVersionsTimeouts)
//  .upgradeSupported(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#location DataAzurermOracleDatabaseSystemVersions#location}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.databaseSoftwareImageSupported">databaseSoftwareImageSupported</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#database_software_image_supported DataAzurermOracleDatabaseSystemVersions#database_software_image_supported}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.databaseSystemShape">databaseSystemShape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#database_system_shape DataAzurermOracleDatabaseSystemVersions#database_system_shape}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#id DataAzurermOracleDatabaseSystemVersions#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.shapeFamily">shapeFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#shape_family DataAzurermOracleDatabaseSystemVersions#shape_family}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.storageManagement">storageManagement</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#storage_management DataAzurermOracleDatabaseSystemVersions#storage_management}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts">DataAzurermOracleDatabaseSystemVersionsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.upgradeSupported">upgradeSupported</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#upgrade_supported DataAzurermOracleDatabaseSystemVersions#upgrade_supported}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#location DataAzurermOracleDatabaseSystemVersions#location}.

---

##### `databaseSoftwareImageSupported`<sup>Optional</sup> <a name="databaseSoftwareImageSupported" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.databaseSoftwareImageSupported"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#database_software_image_supported DataAzurermOracleDatabaseSystemVersions#database_software_image_supported}.

---

##### `databaseSystemShape`<sup>Optional</sup> <a name="databaseSystemShape" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.databaseSystemShape"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#database_system_shape DataAzurermOracleDatabaseSystemVersions#database_system_shape}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#id DataAzurermOracleDatabaseSystemVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `shapeFamily`<sup>Optional</sup> <a name="shapeFamily" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.shapeFamily"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#shape_family DataAzurermOracleDatabaseSystemVersions#shape_family}.

---

##### `storageManagement`<sup>Optional</sup> <a name="storageManagement" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.storageManagement"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#storage_management DataAzurermOracleDatabaseSystemVersions#storage_management}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts">DataAzurermOracleDatabaseSystemVersionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#timeouts DataAzurermOracleDatabaseSystemVersions#timeouts}

---

##### `upgradeSupported`<sup>Optional</sup> <a name="upgradeSupported" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.upgradeSupported"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#upgrade_supported DataAzurermOracleDatabaseSystemVersions#upgrade_supported}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetDatabaseSoftwareImageSupported">resetDatabaseSoftwareImageSupported</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetDatabaseSystemShape">resetDatabaseSystemShape</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetShapeFamily">resetShapeFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetStorageManagement">resetStorageManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetUpgradeSupported">resetUpgradeSupported</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermOracleDatabaseSystemVersionsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts">DataAzurermOracleDatabaseSystemVersionsTimeouts</a>

---

##### `resetDatabaseSoftwareImageSupported` <a name="resetDatabaseSoftwareImageSupported" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetDatabaseSoftwareImageSupported"></a>

```java
public void resetDatabaseSoftwareImageSupported()
```

##### `resetDatabaseSystemShape` <a name="resetDatabaseSystemShape" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetDatabaseSystemShape"></a>

```java
public void resetDatabaseSystemShape()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetId"></a>

```java
public void resetId()
```

##### `resetShapeFamily` <a name="resetShapeFamily" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetShapeFamily"></a>

```java
public void resetShapeFamily()
```

##### `resetStorageManagement` <a name="resetStorageManagement" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetStorageManagement"></a>

```java
public void resetStorageManagement()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUpgradeSupported` <a name="resetUpgradeSupported" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetUpgradeSupported"></a>

```java
public void resetUpgradeSupported()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermOracleDatabaseSystemVersions resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_oracle_database_system_versions.DataAzurermOracleDatabaseSystemVersions;

DataAzurermOracleDatabaseSystemVersions.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_oracle_database_system_versions.DataAzurermOracleDatabaseSystemVersions;

DataAzurermOracleDatabaseSystemVersions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isTerraformDataSource"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_oracle_database_system_versions.DataAzurermOracleDatabaseSystemVersions;

DataAzurermOracleDatabaseSystemVersions.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_oracle_database_system_versions.DataAzurermOracleDatabaseSystemVersions;

DataAzurermOracleDatabaseSystemVersions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermOracleDatabaseSystemVersions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAzurermOracleDatabaseSystemVersions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermOracleDatabaseSystemVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermOracleDatabaseSystemVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleDatabaseSystemVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference">DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.versions">versions</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList">DataAzurermOracleDatabaseSystemVersionsVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.databaseSoftwareImageSupportedInput">databaseSoftwareImageSupportedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.databaseSystemShapeInput">databaseSystemShapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.shapeFamilyInput">shapeFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.storageManagementInput">storageManagementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts">DataAzurermOracleDatabaseSystemVersionsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.upgradeSupportedInput">upgradeSupportedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.databaseSoftwareImageSupported">databaseSoftwareImageSupported</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.databaseSystemShape">databaseSystemShape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.shapeFamily">shapeFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.storageManagement">storageManagement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.upgradeSupported">upgradeSupported</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.timeouts"></a>

```java
public DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference">DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference</a>

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.versions"></a>

```java
public DataAzurermOracleDatabaseSystemVersionsVersionsList getVersions();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList">DataAzurermOracleDatabaseSystemVersionsVersionsList</a>

---

##### `databaseSoftwareImageSupportedInput`<sup>Optional</sup> <a name="databaseSoftwareImageSupportedInput" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.databaseSoftwareImageSupportedInput"></a>

```java
public java.lang.Boolean|IResolvable getDatabaseSoftwareImageSupportedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `databaseSystemShapeInput`<sup>Optional</sup> <a name="databaseSystemShapeInput" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.databaseSystemShapeInput"></a>

```java
public java.lang.String getDatabaseSystemShapeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `shapeFamilyInput`<sup>Optional</sup> <a name="shapeFamilyInput" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.shapeFamilyInput"></a>

```java
public java.lang.String getShapeFamilyInput();
```

- *Type:* java.lang.String

---

##### `storageManagementInput`<sup>Optional</sup> <a name="storageManagementInput" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.storageManagementInput"></a>

```java
public java.lang.String getStorageManagementInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.timeoutsInput"></a>

```java
public IResolvable|DataAzurermOracleDatabaseSystemVersionsTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts">DataAzurermOracleDatabaseSystemVersionsTimeouts</a>

---

##### `upgradeSupportedInput`<sup>Optional</sup> <a name="upgradeSupportedInput" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.upgradeSupportedInput"></a>

```java
public java.lang.Boolean|IResolvable getUpgradeSupportedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `databaseSoftwareImageSupported`<sup>Required</sup> <a name="databaseSoftwareImageSupported" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.databaseSoftwareImageSupported"></a>

```java
public java.lang.Boolean|IResolvable getDatabaseSoftwareImageSupported();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `databaseSystemShape`<sup>Required</sup> <a name="databaseSystemShape" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.databaseSystemShape"></a>

```java
public java.lang.String getDatabaseSystemShape();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `shapeFamily`<sup>Required</sup> <a name="shapeFamily" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.shapeFamily"></a>

```java
public java.lang.String getShapeFamily();
```

- *Type:* java.lang.String

---

##### `storageManagement`<sup>Required</sup> <a name="storageManagement" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.storageManagement"></a>

```java
public java.lang.String getStorageManagement();
```

- *Type:* java.lang.String

---

##### `upgradeSupported`<sup>Required</sup> <a name="upgradeSupported" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.upgradeSupported"></a>

```java
public java.lang.Boolean|IResolvable getUpgradeSupported();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleDatabaseSystemVersionsConfig <a name="DataAzurermOracleDatabaseSystemVersionsConfig" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_oracle_database_system_versions.DataAzurermOracleDatabaseSystemVersionsConfig;

DataAzurermOracleDatabaseSystemVersionsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
//  .databaseSoftwareImageSupported(java.lang.Boolean|IResolvable)
//  .databaseSystemShape(java.lang.String)
//  .id(java.lang.String)
//  .shapeFamily(java.lang.String)
//  .storageManagement(java.lang.String)
//  .timeouts(DataAzurermOracleDatabaseSystemVersionsTimeouts)
//  .upgradeSupported(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#location DataAzurermOracleDatabaseSystemVersions#location}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.databaseSoftwareImageSupported">databaseSoftwareImageSupported</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#database_software_image_supported DataAzurermOracleDatabaseSystemVersions#database_software_image_supported}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.databaseSystemShape">databaseSystemShape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#database_system_shape DataAzurermOracleDatabaseSystemVersions#database_system_shape}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#id DataAzurermOracleDatabaseSystemVersions#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.shapeFamily">shapeFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#shape_family DataAzurermOracleDatabaseSystemVersions#shape_family}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.storageManagement">storageManagement</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#storage_management DataAzurermOracleDatabaseSystemVersions#storage_management}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts">DataAzurermOracleDatabaseSystemVersionsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.upgradeSupported">upgradeSupported</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#upgrade_supported DataAzurermOracleDatabaseSystemVersions#upgrade_supported}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#location DataAzurermOracleDatabaseSystemVersions#location}.

---

##### `databaseSoftwareImageSupported`<sup>Optional</sup> <a name="databaseSoftwareImageSupported" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.databaseSoftwareImageSupported"></a>

```java
public java.lang.Boolean|IResolvable getDatabaseSoftwareImageSupported();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#database_software_image_supported DataAzurermOracleDatabaseSystemVersions#database_software_image_supported}.

---

##### `databaseSystemShape`<sup>Optional</sup> <a name="databaseSystemShape" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.databaseSystemShape"></a>

```java
public java.lang.String getDatabaseSystemShape();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#database_system_shape DataAzurermOracleDatabaseSystemVersions#database_system_shape}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#id DataAzurermOracleDatabaseSystemVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `shapeFamily`<sup>Optional</sup> <a name="shapeFamily" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.shapeFamily"></a>

```java
public java.lang.String getShapeFamily();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#shape_family DataAzurermOracleDatabaseSystemVersions#shape_family}.

---

##### `storageManagement`<sup>Optional</sup> <a name="storageManagement" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.storageManagement"></a>

```java
public java.lang.String getStorageManagement();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#storage_management DataAzurermOracleDatabaseSystemVersions#storage_management}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.timeouts"></a>

```java
public DataAzurermOracleDatabaseSystemVersionsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts">DataAzurermOracleDatabaseSystemVersionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#timeouts DataAzurermOracleDatabaseSystemVersions#timeouts}

---

##### `upgradeSupported`<sup>Optional</sup> <a name="upgradeSupported" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.upgradeSupported"></a>

```java
public java.lang.Boolean|IResolvable getUpgradeSupported();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#upgrade_supported DataAzurermOracleDatabaseSystemVersions#upgrade_supported}.

---

### DataAzurermOracleDatabaseSystemVersionsTimeouts <a name="DataAzurermOracleDatabaseSystemVersionsTimeouts" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_oracle_database_system_versions.DataAzurermOracleDatabaseSystemVersionsTimeouts;

DataAzurermOracleDatabaseSystemVersionsTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#read DataAzurermOracleDatabaseSystemVersions#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_database_system_versions#read DataAzurermOracleDatabaseSystemVersions#read}.

---

### DataAzurermOracleDatabaseSystemVersionsVersions <a name="DataAzurermOracleDatabaseSystemVersionsVersions" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersions.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_oracle_database_system_versions.DataAzurermOracleDatabaseSystemVersionsVersions;

DataAzurermOracleDatabaseSystemVersionsVersions.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference <a name="DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_oracle_database_system_versions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference;

new DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts">DataAzurermOracleDatabaseSystemVersionsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAzurermOracleDatabaseSystemVersionsTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts">DataAzurermOracleDatabaseSystemVersionsTimeouts</a>

---


### DataAzurermOracleDatabaseSystemVersionsVersionsList <a name="DataAzurermOracleDatabaseSystemVersionsVersionsList" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_oracle_database_system_versions.DataAzurermOracleDatabaseSystemVersionsVersionsList;

new DataAzurermOracleDatabaseSystemVersionsVersionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.get"></a>

```java
public DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference <a name="DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_oracle_database_system_versions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference;

new DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.latestVersion">latestVersion</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.pluggableDatabaseSupported">pluggableDatabaseSupported</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersions">DataAzurermOracleDatabaseSystemVersionsVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.latestVersion"></a>

```java
public IResolvable getLatestVersion();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pluggableDatabaseSupported`<sup>Required</sup> <a name="pluggableDatabaseSupported" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.pluggableDatabaseSupported"></a>

```java
public IResolvable getPluggableDatabaseSupported();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.internalValue"></a>

```java
public DataAzurermOracleDatabaseSystemVersionsVersions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersions">DataAzurermOracleDatabaseSystemVersionsVersions</a>

---



