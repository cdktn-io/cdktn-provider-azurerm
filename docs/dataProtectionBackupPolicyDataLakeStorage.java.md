# `dataProtectionBackupPolicyDataLakeStorage` Submodule <a name="`dataProtectionBackupPolicyDataLakeStorage` Submodule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupPolicyDataLakeStorage <a name="DataProtectionBackupPolicyDataLakeStorage" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage azurerm_data_protection_backup_policy_data_lake_storage}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_policy_data_lake_storage.DataProtectionBackupPolicyDataLakeStorage;

DataProtectionBackupPolicyDataLakeStorage.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backupSchedule(java.util.List<java.lang.String>)
    .dataProtectionBackupVaultId(java.lang.String)
    .defaultRetentionDuration(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .retentionRule(IResolvable|java.util.List<DataProtectionBackupPolicyDataLakeStorageRetentionRule>)
//  .timeouts(DataProtectionBackupPolicyDataLakeStorageTimeouts)
//  .timeZone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.backupSchedule">backupSchedule</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#backup_schedule DataProtectionBackupPolicyDataLakeStorage#backup_schedule}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.dataProtectionBackupVaultId">dataProtectionBackupVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#data_protection_backup_vault_id DataProtectionBackupPolicyDataLakeStorage#data_protection_backup_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.defaultRetentionDuration">defaultRetentionDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#default_retention_duration DataProtectionBackupPolicyDataLakeStorage#default_retention_duration}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#name DataProtectionBackupPolicyDataLakeStorage#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#id DataProtectionBackupPolicyDataLakeStorage#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.retentionRule">retentionRule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule">DataProtectionBackupPolicyDataLakeStorageRetentionRule</a>></code> | retention_rule block. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts">DataProtectionBackupPolicyDataLakeStorageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#time_zone DataProtectionBackupPolicyDataLakeStorage#time_zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backupSchedule`<sup>Required</sup> <a name="backupSchedule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.backupSchedule"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#backup_schedule DataProtectionBackupPolicyDataLakeStorage#backup_schedule}.

---

##### `dataProtectionBackupVaultId`<sup>Required</sup> <a name="dataProtectionBackupVaultId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.dataProtectionBackupVaultId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#data_protection_backup_vault_id DataProtectionBackupPolicyDataLakeStorage#data_protection_backup_vault_id}.

---

##### `defaultRetentionDuration`<sup>Required</sup> <a name="defaultRetentionDuration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.defaultRetentionDuration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#default_retention_duration DataProtectionBackupPolicyDataLakeStorage#default_retention_duration}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#name DataProtectionBackupPolicyDataLakeStorage#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#id DataProtectionBackupPolicyDataLakeStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retentionRule`<sup>Optional</sup> <a name="retentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.retentionRule"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule">DataProtectionBackupPolicyDataLakeStorageRetentionRule</a>>

retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#retention_rule DataProtectionBackupPolicyDataLakeStorage#retention_rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts">DataProtectionBackupPolicyDataLakeStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#timeouts DataProtectionBackupPolicyDataLakeStorage#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.timeZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#time_zone DataProtectionBackupPolicyDataLakeStorage#time_zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.putRetentionRule">putRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.resetRetentionRule">resetRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRetentionRule` <a name="putRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.putRetentionRule"></a>

```java
public void putRetentionRule(IResolvable|java.util.List<DataProtectionBackupPolicyDataLakeStorageRetentionRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.putRetentionRule.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule">DataProtectionBackupPolicyDataLakeStorageRetentionRule</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.putTimeouts"></a>

```java
public void putTimeouts(DataProtectionBackupPolicyDataLakeStorageTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts">DataProtectionBackupPolicyDataLakeStorageTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.resetId"></a>

```java
public void resetId()
```

##### `resetRetentionRule` <a name="resetRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.resetRetentionRule"></a>

```java
public void resetRetentionRule()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.resetTimeZone"></a>

```java
public void resetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataProtectionBackupPolicyDataLakeStorage resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_policy_data_lake_storage.DataProtectionBackupPolicyDataLakeStorage;

DataProtectionBackupPolicyDataLakeStorage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_policy_data_lake_storage.DataProtectionBackupPolicyDataLakeStorage;

DataProtectionBackupPolicyDataLakeStorage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_policy_data_lake_storage.DataProtectionBackupPolicyDataLakeStorage;

DataProtectionBackupPolicyDataLakeStorage.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_policy_data_lake_storage.DataProtectionBackupPolicyDataLakeStorage;

DataProtectionBackupPolicyDataLakeStorage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataProtectionBackupPolicyDataLakeStorage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataProtectionBackupPolicyDataLakeStorage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataProtectionBackupPolicyDataLakeStorage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataProtectionBackupPolicyDataLakeStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupPolicyDataLakeStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.retentionRule">retentionRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList">DataProtectionBackupPolicyDataLakeStorageRetentionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference">DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.backupScheduleInput">backupScheduleInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.dataProtectionBackupVaultIdInput">dataProtectionBackupVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.defaultRetentionDurationInput">defaultRetentionDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.retentionRuleInput">retentionRuleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule">DataProtectionBackupPolicyDataLakeStorageRetentionRule</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts">DataProtectionBackupPolicyDataLakeStorageTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.backupSchedule">backupSchedule</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.dataProtectionBackupVaultId">dataProtectionBackupVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.defaultRetentionDuration">defaultRetentionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `retentionRule`<sup>Required</sup> <a name="retentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.retentionRule"></a>

```java
public DataProtectionBackupPolicyDataLakeStorageRetentionRuleList getRetentionRule();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList">DataProtectionBackupPolicyDataLakeStorageRetentionRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.timeouts"></a>

```java
public DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference">DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference</a>

---

##### `backupScheduleInput`<sup>Optional</sup> <a name="backupScheduleInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.backupScheduleInput"></a>

```java
public java.util.List<java.lang.String> getBackupScheduleInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataProtectionBackupVaultIdInput`<sup>Optional</sup> <a name="dataProtectionBackupVaultIdInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.dataProtectionBackupVaultIdInput"></a>

```java
public java.lang.String getDataProtectionBackupVaultIdInput();
```

- *Type:* java.lang.String

---

##### `defaultRetentionDurationInput`<sup>Optional</sup> <a name="defaultRetentionDurationInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.defaultRetentionDurationInput"></a>

```java
public java.lang.String getDefaultRetentionDurationInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `retentionRuleInput`<sup>Optional</sup> <a name="retentionRuleInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.retentionRuleInput"></a>

```java
public IResolvable|java.util.List<DataProtectionBackupPolicyDataLakeStorageRetentionRule> getRetentionRuleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule">DataProtectionBackupPolicyDataLakeStorageRetentionRule</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.timeoutsInput"></a>

```java
public IResolvable|DataProtectionBackupPolicyDataLakeStorageTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts">DataProtectionBackupPolicyDataLakeStorageTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `backupSchedule`<sup>Required</sup> <a name="backupSchedule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.backupSchedule"></a>

```java
public java.util.List<java.lang.String> getBackupSchedule();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataProtectionBackupVaultId`<sup>Required</sup> <a name="dataProtectionBackupVaultId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.dataProtectionBackupVaultId"></a>

```java
public java.lang.String getDataProtectionBackupVaultId();
```

- *Type:* java.lang.String

---

##### `defaultRetentionDuration`<sup>Required</sup> <a name="defaultRetentionDuration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.defaultRetentionDuration"></a>

```java
public java.lang.String getDefaultRetentionDuration();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupPolicyDataLakeStorageConfig <a name="DataProtectionBackupPolicyDataLakeStorageConfig" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_policy_data_lake_storage.DataProtectionBackupPolicyDataLakeStorageConfig;

DataProtectionBackupPolicyDataLakeStorageConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backupSchedule(java.util.List<java.lang.String>)
    .dataProtectionBackupVaultId(java.lang.String)
    .defaultRetentionDuration(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .retentionRule(IResolvable|java.util.List<DataProtectionBackupPolicyDataLakeStorageRetentionRule>)
//  .timeouts(DataProtectionBackupPolicyDataLakeStorageTimeouts)
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.backupSchedule">backupSchedule</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#backup_schedule DataProtectionBackupPolicyDataLakeStorage#backup_schedule}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.dataProtectionBackupVaultId">dataProtectionBackupVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#data_protection_backup_vault_id DataProtectionBackupPolicyDataLakeStorage#data_protection_backup_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.defaultRetentionDuration">defaultRetentionDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#default_retention_duration DataProtectionBackupPolicyDataLakeStorage#default_retention_duration}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#name DataProtectionBackupPolicyDataLakeStorage#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#id DataProtectionBackupPolicyDataLakeStorage#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.retentionRule">retentionRule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule">DataProtectionBackupPolicyDataLakeStorageRetentionRule</a>></code> | retention_rule block. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts">DataProtectionBackupPolicyDataLakeStorageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#time_zone DataProtectionBackupPolicyDataLakeStorage#time_zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backupSchedule`<sup>Required</sup> <a name="backupSchedule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.backupSchedule"></a>

```java
public java.util.List<java.lang.String> getBackupSchedule();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#backup_schedule DataProtectionBackupPolicyDataLakeStorage#backup_schedule}.

---

##### `dataProtectionBackupVaultId`<sup>Required</sup> <a name="dataProtectionBackupVaultId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.dataProtectionBackupVaultId"></a>

```java
public java.lang.String getDataProtectionBackupVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#data_protection_backup_vault_id DataProtectionBackupPolicyDataLakeStorage#data_protection_backup_vault_id}.

---

##### `defaultRetentionDuration`<sup>Required</sup> <a name="defaultRetentionDuration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.defaultRetentionDuration"></a>

```java
public java.lang.String getDefaultRetentionDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#default_retention_duration DataProtectionBackupPolicyDataLakeStorage#default_retention_duration}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#name DataProtectionBackupPolicyDataLakeStorage#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#id DataProtectionBackupPolicyDataLakeStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retentionRule`<sup>Optional</sup> <a name="retentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.retentionRule"></a>

```java
public IResolvable|java.util.List<DataProtectionBackupPolicyDataLakeStorageRetentionRule> getRetentionRule();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule">DataProtectionBackupPolicyDataLakeStorageRetentionRule</a>>

retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#retention_rule DataProtectionBackupPolicyDataLakeStorage#retention_rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.timeouts"></a>

```java
public DataProtectionBackupPolicyDataLakeStorageTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts">DataProtectionBackupPolicyDataLakeStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#timeouts DataProtectionBackupPolicyDataLakeStorage#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#time_zone DataProtectionBackupPolicyDataLakeStorage#time_zone}.

---

### DataProtectionBackupPolicyDataLakeStorageRetentionRule <a name="DataProtectionBackupPolicyDataLakeStorageRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_policy_data_lake_storage.DataProtectionBackupPolicyDataLakeStorageRetentionRule;

DataProtectionBackupPolicyDataLakeStorageRetentionRule.builder()
    .duration(java.lang.String)
    .name(java.lang.String)
//  .absoluteCriteria(java.lang.String)
//  .daysOfWeek(java.util.List<java.lang.String>)
//  .monthsOfYear(java.util.List<java.lang.String>)
//  .scheduledBackupTimes(java.util.List<java.lang.String>)
//  .weeksOfMonth(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.duration">duration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#duration DataProtectionBackupPolicyDataLakeStorage#duration}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#name DataProtectionBackupPolicyDataLakeStorage#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.absoluteCriteria">absoluteCriteria</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#absolute_criteria DataProtectionBackupPolicyDataLakeStorage#absolute_criteria}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#days_of_week DataProtectionBackupPolicyDataLakeStorage#days_of_week}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.monthsOfYear">monthsOfYear</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#months_of_year DataProtectionBackupPolicyDataLakeStorage#months_of_year}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.scheduledBackupTimes">scheduledBackupTimes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#scheduled_backup_times DataProtectionBackupPolicyDataLakeStorage#scheduled_backup_times}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#weeks_of_month DataProtectionBackupPolicyDataLakeStorage#weeks_of_month}. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#duration DataProtectionBackupPolicyDataLakeStorage#duration}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#name DataProtectionBackupPolicyDataLakeStorage#name}.

---

##### `absoluteCriteria`<sup>Optional</sup> <a name="absoluteCriteria" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.absoluteCriteria"></a>

```java
public java.lang.String getAbsoluteCriteria();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#absolute_criteria DataProtectionBackupPolicyDataLakeStorage#absolute_criteria}.

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#days_of_week DataProtectionBackupPolicyDataLakeStorage#days_of_week}.

---

##### `monthsOfYear`<sup>Optional</sup> <a name="monthsOfYear" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.monthsOfYear"></a>

```java
public java.util.List<java.lang.String> getMonthsOfYear();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#months_of_year DataProtectionBackupPolicyDataLakeStorage#months_of_year}.

---

##### `scheduledBackupTimes`<sup>Optional</sup> <a name="scheduledBackupTimes" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.scheduledBackupTimes"></a>

```java
public java.util.List<java.lang.String> getScheduledBackupTimes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#scheduled_backup_times DataProtectionBackupPolicyDataLakeStorage#scheduled_backup_times}.

---

##### `weeksOfMonth`<sup>Optional</sup> <a name="weeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.String> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#weeks_of_month DataProtectionBackupPolicyDataLakeStorage#weeks_of_month}.

---

### DataProtectionBackupPolicyDataLakeStorageTimeouts <a name="DataProtectionBackupPolicyDataLakeStorageTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_policy_data_lake_storage.DataProtectionBackupPolicyDataLakeStorageTimeouts;

DataProtectionBackupPolicyDataLakeStorageTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#create DataProtectionBackupPolicyDataLakeStorage#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#delete DataProtectionBackupPolicyDataLakeStorage#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#read DataProtectionBackupPolicyDataLakeStorage#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#create DataProtectionBackupPolicyDataLakeStorage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#delete DataProtectionBackupPolicyDataLakeStorage#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_protection_backup_policy_data_lake_storage#read DataProtectionBackupPolicyDataLakeStorage#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupPolicyDataLakeStorageRetentionRuleList <a name="DataProtectionBackupPolicyDataLakeStorageRetentionRuleList" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_policy_data_lake_storage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList;

new DataProtectionBackupPolicyDataLakeStorageRetentionRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.get"></a>

```java
public DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule">DataProtectionBackupPolicyDataLakeStorageRetentionRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataProtectionBackupPolicyDataLakeStorageRetentionRule> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule">DataProtectionBackupPolicyDataLakeStorageRetentionRule</a>>

---


### DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference <a name="DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_policy_data_lake_storage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference;

new DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resetAbsoluteCriteria">resetAbsoluteCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resetMonthsOfYear">resetMonthsOfYear</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resetScheduledBackupTimes">resetScheduledBackupTimes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resetWeeksOfMonth">resetWeeksOfMonth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAbsoluteCriteria` <a name="resetAbsoluteCriteria" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resetAbsoluteCriteria"></a>

```java
public void resetAbsoluteCriteria()
```

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resetDaysOfWeek"></a>

```java
public void resetDaysOfWeek()
```

##### `resetMonthsOfYear` <a name="resetMonthsOfYear" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resetMonthsOfYear"></a>

```java
public void resetMonthsOfYear()
```

##### `resetScheduledBackupTimes` <a name="resetScheduledBackupTimes" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resetScheduledBackupTimes"></a>

```java
public void resetScheduledBackupTimes()
```

##### `resetWeeksOfMonth` <a name="resetWeeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resetWeeksOfMonth"></a>

```java
public void resetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.absoluteCriteriaInput">absoluteCriteriaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.monthsOfYearInput">monthsOfYearInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.scheduledBackupTimesInput">scheduledBackupTimesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.weeksOfMonthInput">weeksOfMonthInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.absoluteCriteria">absoluteCriteria</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.monthsOfYear">monthsOfYear</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.scheduledBackupTimes">scheduledBackupTimes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule">DataProtectionBackupPolicyDataLakeStorageRetentionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `absoluteCriteriaInput`<sup>Optional</sup> <a name="absoluteCriteriaInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.absoluteCriteriaInput"></a>

```java
public java.lang.String getAbsoluteCriteriaInput();
```

- *Type:* java.lang.String

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.daysOfWeekInput"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeekInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `monthsOfYearInput`<sup>Optional</sup> <a name="monthsOfYearInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.monthsOfYearInput"></a>

```java
public java.util.List<java.lang.String> getMonthsOfYearInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `scheduledBackupTimesInput`<sup>Optional</sup> <a name="scheduledBackupTimesInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.scheduledBackupTimesInput"></a>

```java
public java.util.List<java.lang.String> getScheduledBackupTimesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `weeksOfMonthInput`<sup>Optional</sup> <a name="weeksOfMonthInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.weeksOfMonthInput"></a>

```java
public java.util.List<java.lang.String> getWeeksOfMonthInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `absoluteCriteria`<sup>Required</sup> <a name="absoluteCriteria" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.absoluteCriteria"></a>

```java
public java.lang.String getAbsoluteCriteria();
```

- *Type:* java.lang.String

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `monthsOfYear`<sup>Required</sup> <a name="monthsOfYear" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.monthsOfYear"></a>

```java
public java.util.List<java.lang.String> getMonthsOfYear();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `scheduledBackupTimes`<sup>Required</sup> <a name="scheduledBackupTimes" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.scheduledBackupTimes"></a>

```java
public java.util.List<java.lang.String> getScheduledBackupTimes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.String> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|DataProtectionBackupPolicyDataLakeStorageRetentionRule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule">DataProtectionBackupPolicyDataLakeStorageRetentionRule</a>

---


### DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference <a name="DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_policy_data_lake_storage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference;

new DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts">DataProtectionBackupPolicyDataLakeStorageTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataProtectionBackupPolicyDataLakeStorageTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts">DataProtectionBackupPolicyDataLakeStorageTimeouts</a>

---



