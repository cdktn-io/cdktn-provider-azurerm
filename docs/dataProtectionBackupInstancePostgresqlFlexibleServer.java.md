# `dataProtectionBackupInstancePostgresqlFlexibleServer` Submodule <a name="`dataProtectionBackupInstancePostgresqlFlexibleServer` Submodule" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupInstancePostgresqlFlexibleServer <a name="DataProtectionBackupInstancePostgresqlFlexibleServer" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server azurerm_data_protection_backup_instance_postgresql_flexible_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_instance_postgresql_flexible_server.DataProtectionBackupInstancePostgresqlFlexibleServer;

DataProtectionBackupInstancePostgresqlFlexibleServer.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backupPolicyId(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .serverId(java.lang.String)
    .vaultId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer.parameter.backupPolicyId">backupPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#backup_policy_id DataProtectionBackupInstancePostgresqlFlexibleServer#backup_policy_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#location DataProtectionBackupInstancePostgresqlFlexibleServer#location}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#name DataProtectionBackupInstancePostgresqlFlexibleServer#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer.parameter.serverId">serverId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#server_id DataProtectionBackupInstancePostgresqlFlexibleServer#server_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer.parameter.vaultId">vaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#vault_id DataProtectionBackupInstancePostgresqlFlexibleServer#vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#id DataProtectionBackupInstancePostgresqlFlexibleServer#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts">DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backupPolicyId`<sup>Required</sup> <a name="backupPolicyId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer.parameter.backupPolicyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#backup_policy_id DataProtectionBackupInstancePostgresqlFlexibleServer#backup_policy_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#location DataProtectionBackupInstancePostgresqlFlexibleServer#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#name DataProtectionBackupInstancePostgresqlFlexibleServer#name}.

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer.parameter.serverId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#server_id DataProtectionBackupInstancePostgresqlFlexibleServer#server_id}.

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer.parameter.vaultId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#vault_id DataProtectionBackupInstancePostgresqlFlexibleServer#vault_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#id DataProtectionBackupInstancePostgresqlFlexibleServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts">DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#timeouts DataProtectionBackupInstancePostgresqlFlexibleServer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.putTimeouts"></a>

```java
public void putTimeouts(DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts">DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataProtectionBackupInstancePostgresqlFlexibleServer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_instance_postgresql_flexible_server.DataProtectionBackupInstancePostgresqlFlexibleServer;

DataProtectionBackupInstancePostgresqlFlexibleServer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_instance_postgresql_flexible_server.DataProtectionBackupInstancePostgresqlFlexibleServer;

DataProtectionBackupInstancePostgresqlFlexibleServer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_instance_postgresql_flexible_server.DataProtectionBackupInstancePostgresqlFlexibleServer;

DataProtectionBackupInstancePostgresqlFlexibleServer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_instance_postgresql_flexible_server.DataProtectionBackupInstancePostgresqlFlexibleServer;

DataProtectionBackupInstancePostgresqlFlexibleServer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataProtectionBackupInstancePostgresqlFlexibleServer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataProtectionBackupInstancePostgresqlFlexibleServer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataProtectionBackupInstancePostgresqlFlexibleServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataProtectionBackupInstancePostgresqlFlexibleServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupInstancePostgresqlFlexibleServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.protectionState">protectionState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference">DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.backupPolicyIdInput">backupPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.serverIdInput">serverIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts">DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.vaultIdInput">vaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.backupPolicyId">backupPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.serverId">serverId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `protectionState`<sup>Required</sup> <a name="protectionState" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.protectionState"></a>

```java
public java.lang.String getProtectionState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.timeouts"></a>

```java
public DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference">DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference</a>

---

##### `backupPolicyIdInput`<sup>Optional</sup> <a name="backupPolicyIdInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.backupPolicyIdInput"></a>

```java
public java.lang.String getBackupPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `serverIdInput`<sup>Optional</sup> <a name="serverIdInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.serverIdInput"></a>

```java
public java.lang.String getServerIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.timeoutsInput"></a>

```java
public IResolvable|DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts">DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts</a>

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.vaultIdInput"></a>

```java
public java.lang.String getVaultIdInput();
```

- *Type:* java.lang.String

---

##### `backupPolicyId`<sup>Required</sup> <a name="backupPolicyId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.backupPolicyId"></a>

```java
public java.lang.String getBackupPolicyId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.serverId"></a>

```java
public java.lang.String getServerId();
```

- *Type:* java.lang.String

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupInstancePostgresqlFlexibleServerConfig <a name="DataProtectionBackupInstancePostgresqlFlexibleServerConfig" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_instance_postgresql_flexible_server.DataProtectionBackupInstancePostgresqlFlexibleServerConfig;

DataProtectionBackupInstancePostgresqlFlexibleServerConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backupPolicyId(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .serverId(java.lang.String)
    .vaultId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerConfig.property.backupPolicyId">backupPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#backup_policy_id DataProtectionBackupInstancePostgresqlFlexibleServer#backup_policy_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#location DataProtectionBackupInstancePostgresqlFlexibleServer#location}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#name DataProtectionBackupInstancePostgresqlFlexibleServer#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerConfig.property.serverId">serverId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#server_id DataProtectionBackupInstancePostgresqlFlexibleServer#server_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerConfig.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#vault_id DataProtectionBackupInstancePostgresqlFlexibleServer#vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#id DataProtectionBackupInstancePostgresqlFlexibleServer#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts">DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backupPolicyId`<sup>Required</sup> <a name="backupPolicyId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerConfig.property.backupPolicyId"></a>

```java
public java.lang.String getBackupPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#backup_policy_id DataProtectionBackupInstancePostgresqlFlexibleServer#backup_policy_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#location DataProtectionBackupInstancePostgresqlFlexibleServer#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#name DataProtectionBackupInstancePostgresqlFlexibleServer#name}.

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerConfig.property.serverId"></a>

```java
public java.lang.String getServerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#server_id DataProtectionBackupInstancePostgresqlFlexibleServer#server_id}.

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerConfig.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#vault_id DataProtectionBackupInstancePostgresqlFlexibleServer#vault_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#id DataProtectionBackupInstancePostgresqlFlexibleServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerConfig.property.timeouts"></a>

```java
public DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts">DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#timeouts DataProtectionBackupInstancePostgresqlFlexibleServer#timeouts}

---

### DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts <a name="DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_instance_postgresql_flexible_server.DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts;

DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#create DataProtectionBackupInstancePostgresqlFlexibleServer#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#delete DataProtectionBackupInstancePostgresqlFlexibleServer#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#read DataProtectionBackupInstancePostgresqlFlexibleServer#read}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#update DataProtectionBackupInstancePostgresqlFlexibleServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#create DataProtectionBackupInstancePostgresqlFlexibleServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#delete DataProtectionBackupInstancePostgresqlFlexibleServer#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#read DataProtectionBackupInstancePostgresqlFlexibleServer#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_protection_backup_instance_postgresql_flexible_server#update DataProtectionBackupInstancePostgresqlFlexibleServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference <a name="DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_instance_postgresql_flexible_server.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference;

new DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts">DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresqlFlexibleServer.DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts">DataProtectionBackupInstancePostgresqlFlexibleServerTimeouts</a>

---



