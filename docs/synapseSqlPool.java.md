# `synapseSqlPool` Submodule <a name="`synapseSqlPool` Submodule" id="@cdktn/provider-azurerm.synapseSqlPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseSqlPool <a name="SynapseSqlPool" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool azurerm_synapse_sql_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer"></a>

```java
import io.cdktn.providers.azurerm.synapse_sql_pool.SynapseSqlPool;

SynapseSqlPool.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .skuName(java.lang.String)
    .storageAccountType(java.lang.String)
    .synapseWorkspaceId(java.lang.String)
//  .collation(java.lang.String)
//  .createMode(java.lang.String)
//  .dataEncrypted(java.lang.Boolean|IResolvable)
//  .geoBackupPolicyEnabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .recoveryDatabaseId(java.lang.String)
//  .restore(SynapseSqlPoolRestore)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SynapseSqlPoolTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#name SynapseSqlPool#name}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#sku_name SynapseSqlPool#sku_name}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.storageAccountType">storageAccountType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#storage_account_type SynapseSqlPool#storage_account_type}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.synapseWorkspaceId">synapseWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#synapse_workspace_id SynapseSqlPool#synapse_workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.collation">collation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#collation SynapseSqlPool#collation}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.createMode">createMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#create_mode SynapseSqlPool#create_mode}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.dataEncrypted">dataEncrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#data_encrypted SynapseSqlPool#data_encrypted}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.geoBackupPolicyEnabled">geoBackupPolicyEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#geo_backup_policy_enabled SynapseSqlPool#geo_backup_policy_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#id SynapseSqlPool#id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.recoveryDatabaseId">recoveryDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#recovery_database_id SynapseSqlPool#recovery_database_id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.restore">restore</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestore">SynapseSqlPoolRestore</a></code> | restore block. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#tags SynapseSqlPool#tags}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts">SynapseSqlPoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#name SynapseSqlPool#name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.skuName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#sku_name SynapseSqlPool#sku_name}.

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.storageAccountType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#storage_account_type SynapseSqlPool#storage_account_type}.

---

##### `synapseWorkspaceId`<sup>Required</sup> <a name="synapseWorkspaceId" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.synapseWorkspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#synapse_workspace_id SynapseSqlPool#synapse_workspace_id}.

---

##### `collation`<sup>Optional</sup> <a name="collation" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.collation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#collation SynapseSqlPool#collation}.

---

##### `createMode`<sup>Optional</sup> <a name="createMode" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.createMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#create_mode SynapseSqlPool#create_mode}.

---

##### `dataEncrypted`<sup>Optional</sup> <a name="dataEncrypted" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.dataEncrypted"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#data_encrypted SynapseSqlPool#data_encrypted}.

---

##### `geoBackupPolicyEnabled`<sup>Optional</sup> <a name="geoBackupPolicyEnabled" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.geoBackupPolicyEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#geo_backup_policy_enabled SynapseSqlPool#geo_backup_policy_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#id SynapseSqlPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `recoveryDatabaseId`<sup>Optional</sup> <a name="recoveryDatabaseId" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.recoveryDatabaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#recovery_database_id SynapseSqlPool#recovery_database_id}.

---

##### `restore`<sup>Optional</sup> <a name="restore" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.restore"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestore">SynapseSqlPoolRestore</a>

restore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#restore SynapseSqlPool#restore}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#tags SynapseSqlPool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts">SynapseSqlPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#timeouts SynapseSqlPool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.putRestore">putRestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetCollation">resetCollation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetCreateMode">resetCreateMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetDataEncrypted">resetDataEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetGeoBackupPolicyEnabled">resetGeoBackupPolicyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetRecoveryDatabaseId">resetRecoveryDatabaseId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetRestore">resetRestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRestore` <a name="putRestore" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.putRestore"></a>

```java
public void putRestore(SynapseSqlPoolRestore value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.putRestore.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestore">SynapseSqlPoolRestore</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.putTimeouts"></a>

```java
public void putTimeouts(SynapseSqlPoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts">SynapseSqlPoolTimeouts</a>

---

##### `resetCollation` <a name="resetCollation" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetCollation"></a>

```java
public void resetCollation()
```

##### `resetCreateMode` <a name="resetCreateMode" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetCreateMode"></a>

```java
public void resetCreateMode()
```

##### `resetDataEncrypted` <a name="resetDataEncrypted" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetDataEncrypted"></a>

```java
public void resetDataEncrypted()
```

##### `resetGeoBackupPolicyEnabled` <a name="resetGeoBackupPolicyEnabled" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetGeoBackupPolicyEnabled"></a>

```java
public void resetGeoBackupPolicyEnabled()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetId"></a>

```java
public void resetId()
```

##### `resetRecoveryDatabaseId` <a name="resetRecoveryDatabaseId" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetRecoveryDatabaseId"></a>

```java
public void resetRecoveryDatabaseId()
```

##### `resetRestore` <a name="resetRestore" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetRestore"></a>

```java
public void resetRestore()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SynapseSqlPool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.synapse_sql_pool.SynapseSqlPool;

SynapseSqlPool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.synapse_sql_pool.SynapseSqlPool;

SynapseSqlPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.synapse_sql_pool.SynapseSqlPool;

SynapseSqlPool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.synapse_sql_pool.SynapseSqlPool;

SynapseSqlPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SynapseSqlPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SynapseSqlPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SynapseSqlPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SynapseSqlPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SynapseSqlPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.restore">restore</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference">SynapseSqlPoolRestoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference">SynapseSqlPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.collationInput">collationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.createModeInput">createModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.dataEncryptedInput">dataEncryptedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.geoBackupPolicyEnabledInput">geoBackupPolicyEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.recoveryDatabaseIdInput">recoveryDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.restoreInput">restoreInput</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestore">SynapseSqlPoolRestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.skuNameInput">skuNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.storageAccountTypeInput">storageAccountTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.synapseWorkspaceIdInput">synapseWorkspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts">SynapseSqlPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.collation">collation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.createMode">createMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.dataEncrypted">dataEncrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.geoBackupPolicyEnabled">geoBackupPolicyEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.recoveryDatabaseId">recoveryDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.skuName">skuName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.storageAccountType">storageAccountType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.synapseWorkspaceId">synapseWorkspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `restore`<sup>Required</sup> <a name="restore" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.restore"></a>

```java
public SynapseSqlPoolRestoreOutputReference getRestore();
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference">SynapseSqlPoolRestoreOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.timeouts"></a>

```java
public SynapseSqlPoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference">SynapseSqlPoolTimeoutsOutputReference</a>

---

##### `collationInput`<sup>Optional</sup> <a name="collationInput" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.collationInput"></a>

```java
public java.lang.String getCollationInput();
```

- *Type:* java.lang.String

---

##### `createModeInput`<sup>Optional</sup> <a name="createModeInput" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.createModeInput"></a>

```java
public java.lang.String getCreateModeInput();
```

- *Type:* java.lang.String

---

##### `dataEncryptedInput`<sup>Optional</sup> <a name="dataEncryptedInput" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.dataEncryptedInput"></a>

```java
public java.lang.Boolean|IResolvable getDataEncryptedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `geoBackupPolicyEnabledInput`<sup>Optional</sup> <a name="geoBackupPolicyEnabledInput" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.geoBackupPolicyEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getGeoBackupPolicyEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `recoveryDatabaseIdInput`<sup>Optional</sup> <a name="recoveryDatabaseIdInput" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.recoveryDatabaseIdInput"></a>

```java
public java.lang.String getRecoveryDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `restoreInput`<sup>Optional</sup> <a name="restoreInput" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.restoreInput"></a>

```java
public SynapseSqlPoolRestore getRestoreInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestore">SynapseSqlPoolRestore</a>

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.skuNameInput"></a>

```java
public java.lang.String getSkuNameInput();
```

- *Type:* java.lang.String

---

##### `storageAccountTypeInput`<sup>Optional</sup> <a name="storageAccountTypeInput" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.storageAccountTypeInput"></a>

```java
public java.lang.String getStorageAccountTypeInput();
```

- *Type:* java.lang.String

---

##### `synapseWorkspaceIdInput`<sup>Optional</sup> <a name="synapseWorkspaceIdInput" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.synapseWorkspaceIdInput"></a>

```java
public java.lang.String getSynapseWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.timeoutsInput"></a>

```java
public IResolvable|SynapseSqlPoolTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts">SynapseSqlPoolTimeouts</a>

---

##### `collation`<sup>Required</sup> <a name="collation" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.collation"></a>

```java
public java.lang.String getCollation();
```

- *Type:* java.lang.String

---

##### `createMode`<sup>Required</sup> <a name="createMode" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.createMode"></a>

```java
public java.lang.String getCreateMode();
```

- *Type:* java.lang.String

---

##### `dataEncrypted`<sup>Required</sup> <a name="dataEncrypted" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.dataEncrypted"></a>

```java
public java.lang.Boolean|IResolvable getDataEncrypted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `geoBackupPolicyEnabled`<sup>Required</sup> <a name="geoBackupPolicyEnabled" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.geoBackupPolicyEnabled"></a>

```java
public java.lang.Boolean|IResolvable getGeoBackupPolicyEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `recoveryDatabaseId`<sup>Required</sup> <a name="recoveryDatabaseId" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.recoveryDatabaseId"></a>

```java
public java.lang.String getRecoveryDatabaseId();
```

- *Type:* java.lang.String

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.storageAccountType"></a>

```java
public java.lang.String getStorageAccountType();
```

- *Type:* java.lang.String

---

##### `synapseWorkspaceId`<sup>Required</sup> <a name="synapseWorkspaceId" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.synapseWorkspaceId"></a>

```java
public java.lang.String getSynapseWorkspaceId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseSqlPoolConfig <a name="SynapseSqlPoolConfig" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.synapse_sql_pool.SynapseSqlPoolConfig;

SynapseSqlPoolConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .skuName(java.lang.String)
    .storageAccountType(java.lang.String)
    .synapseWorkspaceId(java.lang.String)
//  .collation(java.lang.String)
//  .createMode(java.lang.String)
//  .dataEncrypted(java.lang.Boolean|IResolvable)
//  .geoBackupPolicyEnabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .recoveryDatabaseId(java.lang.String)
//  .restore(SynapseSqlPoolRestore)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SynapseSqlPoolTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#name SynapseSqlPool#name}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#sku_name SynapseSqlPool#sku_name}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.storageAccountType">storageAccountType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#storage_account_type SynapseSqlPool#storage_account_type}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.synapseWorkspaceId">synapseWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#synapse_workspace_id SynapseSqlPool#synapse_workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.collation">collation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#collation SynapseSqlPool#collation}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.createMode">createMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#create_mode SynapseSqlPool#create_mode}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.dataEncrypted">dataEncrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#data_encrypted SynapseSqlPool#data_encrypted}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.geoBackupPolicyEnabled">geoBackupPolicyEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#geo_backup_policy_enabled SynapseSqlPool#geo_backup_policy_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#id SynapseSqlPool#id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.recoveryDatabaseId">recoveryDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#recovery_database_id SynapseSqlPool#recovery_database_id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.restore">restore</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestore">SynapseSqlPoolRestore</a></code> | restore block. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#tags SynapseSqlPool#tags}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts">SynapseSqlPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#name SynapseSqlPool#name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#sku_name SynapseSqlPool#sku_name}.

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.storageAccountType"></a>

```java
public java.lang.String getStorageAccountType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#storage_account_type SynapseSqlPool#storage_account_type}.

---

##### `synapseWorkspaceId`<sup>Required</sup> <a name="synapseWorkspaceId" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.synapseWorkspaceId"></a>

```java
public java.lang.String getSynapseWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#synapse_workspace_id SynapseSqlPool#synapse_workspace_id}.

---

##### `collation`<sup>Optional</sup> <a name="collation" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.collation"></a>

```java
public java.lang.String getCollation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#collation SynapseSqlPool#collation}.

---

##### `createMode`<sup>Optional</sup> <a name="createMode" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.createMode"></a>

```java
public java.lang.String getCreateMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#create_mode SynapseSqlPool#create_mode}.

---

##### `dataEncrypted`<sup>Optional</sup> <a name="dataEncrypted" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.dataEncrypted"></a>

```java
public java.lang.Boolean|IResolvable getDataEncrypted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#data_encrypted SynapseSqlPool#data_encrypted}.

---

##### `geoBackupPolicyEnabled`<sup>Optional</sup> <a name="geoBackupPolicyEnabled" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.geoBackupPolicyEnabled"></a>

```java
public java.lang.Boolean|IResolvable getGeoBackupPolicyEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#geo_backup_policy_enabled SynapseSqlPool#geo_backup_policy_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#id SynapseSqlPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `recoveryDatabaseId`<sup>Optional</sup> <a name="recoveryDatabaseId" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.recoveryDatabaseId"></a>

```java
public java.lang.String getRecoveryDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#recovery_database_id SynapseSqlPool#recovery_database_id}.

---

##### `restore`<sup>Optional</sup> <a name="restore" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.restore"></a>

```java
public SynapseSqlPoolRestore getRestore();
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestore">SynapseSqlPoolRestore</a>

restore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#restore SynapseSqlPool#restore}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#tags SynapseSqlPool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolConfig.property.timeouts"></a>

```java
public SynapseSqlPoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts">SynapseSqlPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#timeouts SynapseSqlPool#timeouts}

---

### SynapseSqlPoolRestore <a name="SynapseSqlPoolRestore" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestore.Initializer"></a>

```java
import io.cdktn.providers.azurerm.synapse_sql_pool.SynapseSqlPoolRestore;

SynapseSqlPoolRestore.builder()
    .pointInTime(java.lang.String)
    .sourceDatabaseId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestore.property.pointInTime">pointInTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#point_in_time SynapseSqlPool#point_in_time}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestore.property.sourceDatabaseId">sourceDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#source_database_id SynapseSqlPool#source_database_id}. |

---

##### `pointInTime`<sup>Required</sup> <a name="pointInTime" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestore.property.pointInTime"></a>

```java
public java.lang.String getPointInTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#point_in_time SynapseSqlPool#point_in_time}.

---

##### `sourceDatabaseId`<sup>Required</sup> <a name="sourceDatabaseId" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestore.property.sourceDatabaseId"></a>

```java
public java.lang.String getSourceDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#source_database_id SynapseSqlPool#source_database_id}.

---

### SynapseSqlPoolTimeouts <a name="SynapseSqlPoolTimeouts" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.synapse_sql_pool.SynapseSqlPoolTimeouts;

SynapseSqlPoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#create SynapseSqlPool#create}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#delete SynapseSqlPool#delete}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#read SynapseSqlPool#read}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#update SynapseSqlPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#create SynapseSqlPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#delete SynapseSqlPool#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#read SynapseSqlPool#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/synapse_sql_pool#update SynapseSqlPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseSqlPoolRestoreOutputReference <a name="SynapseSqlPoolRestoreOutputReference" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.synapse_sql_pool.SynapseSqlPoolRestoreOutputReference;

new SynapseSqlPoolRestoreOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.property.pointInTimeInput">pointInTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.property.sourceDatabaseIdInput">sourceDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.property.pointInTime">pointInTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.property.sourceDatabaseId">sourceDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestore">SynapseSqlPoolRestore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pointInTimeInput`<sup>Optional</sup> <a name="pointInTimeInput" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.property.pointInTimeInput"></a>

```java
public java.lang.String getPointInTimeInput();
```

- *Type:* java.lang.String

---

##### `sourceDatabaseIdInput`<sup>Optional</sup> <a name="sourceDatabaseIdInput" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.property.sourceDatabaseIdInput"></a>

```java
public java.lang.String getSourceDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `pointInTime`<sup>Required</sup> <a name="pointInTime" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.property.pointInTime"></a>

```java
public java.lang.String getPointInTime();
```

- *Type:* java.lang.String

---

##### `sourceDatabaseId`<sup>Required</sup> <a name="sourceDatabaseId" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.property.sourceDatabaseId"></a>

```java
public java.lang.String getSourceDatabaseId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestoreOutputReference.property.internalValue"></a>

```java
public SynapseSqlPoolRestore getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolRestore">SynapseSqlPoolRestore</a>

---


### SynapseSqlPoolTimeoutsOutputReference <a name="SynapseSqlPoolTimeoutsOutputReference" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.synapse_sql_pool.SynapseSqlPoolTimeoutsOutputReference;

new SynapseSqlPoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts">SynapseSqlPoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|SynapseSqlPoolTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.synapseSqlPool.SynapseSqlPoolTimeouts">SynapseSqlPoolTimeouts</a>

---



