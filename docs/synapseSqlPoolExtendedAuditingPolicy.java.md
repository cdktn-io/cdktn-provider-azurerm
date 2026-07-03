# `synapseSqlPoolExtendedAuditingPolicy` Submodule <a name="`synapseSqlPoolExtendedAuditingPolicy` Submodule" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseSqlPoolExtendedAuditingPolicy <a name="SynapseSqlPoolExtendedAuditingPolicy" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy azurerm_synapse_sql_pool_extended_auditing_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer"></a>

```java
import io.cdktn.providers.azurerm.synapse_sql_pool_extended_auditing_policy.SynapseSqlPoolExtendedAuditingPolicy;

SynapseSqlPoolExtendedAuditingPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .sqlPoolId(java.lang.String)
//  .id(java.lang.String)
//  .logMonitoringEnabled(java.lang.Boolean|IResolvable)
//  .retentionInDays(java.lang.Number)
//  .storageAccountAccessKey(java.lang.String)
//  .storageAccountAccessKeyIsSecondary(java.lang.Boolean|IResolvable)
//  .storageEndpoint(java.lang.String)
//  .timeouts(SynapseSqlPoolExtendedAuditingPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.sqlPoolId">sqlPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#sql_pool_id SynapseSqlPoolExtendedAuditingPolicy#sql_pool_id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#id SynapseSqlPoolExtendedAuditingPolicy#id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.logMonitoringEnabled">logMonitoringEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#log_monitoring_enabled SynapseSqlPoolExtendedAuditingPolicy#log_monitoring_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.retentionInDays">retentionInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#retention_in_days SynapseSqlPoolExtendedAuditingPolicy#retention_in_days}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#storage_account_access_key SynapseSqlPoolExtendedAuditingPolicy#storage_account_access_key}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.storageAccountAccessKeyIsSecondary">storageAccountAccessKeyIsSecondary</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#storage_account_access_key_is_secondary SynapseSqlPoolExtendedAuditingPolicy#storage_account_access_key_is_secondary}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.storageEndpoint">storageEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#storage_endpoint SynapseSqlPoolExtendedAuditingPolicy#storage_endpoint}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts">SynapseSqlPoolExtendedAuditingPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `sqlPoolId`<sup>Required</sup> <a name="sqlPoolId" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.sqlPoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#sql_pool_id SynapseSqlPoolExtendedAuditingPolicy#sql_pool_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#id SynapseSqlPoolExtendedAuditingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logMonitoringEnabled`<sup>Optional</sup> <a name="logMonitoringEnabled" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.logMonitoringEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#log_monitoring_enabled SynapseSqlPoolExtendedAuditingPolicy#log_monitoring_enabled}.

---

##### `retentionInDays`<sup>Optional</sup> <a name="retentionInDays" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.retentionInDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#retention_in_days SynapseSqlPoolExtendedAuditingPolicy#retention_in_days}.

---

##### `storageAccountAccessKey`<sup>Optional</sup> <a name="storageAccountAccessKey" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.storageAccountAccessKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#storage_account_access_key SynapseSqlPoolExtendedAuditingPolicy#storage_account_access_key}.

---

##### `storageAccountAccessKeyIsSecondary`<sup>Optional</sup> <a name="storageAccountAccessKeyIsSecondary" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.storageAccountAccessKeyIsSecondary"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#storage_account_access_key_is_secondary SynapseSqlPoolExtendedAuditingPolicy#storage_account_access_key_is_secondary}.

---

##### `storageEndpoint`<sup>Optional</sup> <a name="storageEndpoint" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.storageEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#storage_endpoint SynapseSqlPoolExtendedAuditingPolicy#storage_endpoint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts">SynapseSqlPoolExtendedAuditingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#timeouts SynapseSqlPoolExtendedAuditingPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetLogMonitoringEnabled">resetLogMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetRetentionInDays">resetRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetStorageAccountAccessKey">resetStorageAccountAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetStorageAccountAccessKeyIsSecondary">resetStorageAccountAccessKeyIsSecondary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetStorageEndpoint">resetStorageEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.putTimeouts"></a>

```java
public void putTimeouts(SynapseSqlPoolExtendedAuditingPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts">SynapseSqlPoolExtendedAuditingPolicyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetLogMonitoringEnabled` <a name="resetLogMonitoringEnabled" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetLogMonitoringEnabled"></a>

```java
public void resetLogMonitoringEnabled()
```

##### `resetRetentionInDays` <a name="resetRetentionInDays" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetRetentionInDays"></a>

```java
public void resetRetentionInDays()
```

##### `resetStorageAccountAccessKey` <a name="resetStorageAccountAccessKey" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetStorageAccountAccessKey"></a>

```java
public void resetStorageAccountAccessKey()
```

##### `resetStorageAccountAccessKeyIsSecondary` <a name="resetStorageAccountAccessKeyIsSecondary" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetStorageAccountAccessKeyIsSecondary"></a>

```java
public void resetStorageAccountAccessKeyIsSecondary()
```

##### `resetStorageEndpoint` <a name="resetStorageEndpoint" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetStorageEndpoint"></a>

```java
public void resetStorageEndpoint()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SynapseSqlPoolExtendedAuditingPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.synapse_sql_pool_extended_auditing_policy.SynapseSqlPoolExtendedAuditingPolicy;

SynapseSqlPoolExtendedAuditingPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.synapse_sql_pool_extended_auditing_policy.SynapseSqlPoolExtendedAuditingPolicy;

SynapseSqlPoolExtendedAuditingPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.synapse_sql_pool_extended_auditing_policy.SynapseSqlPoolExtendedAuditingPolicy;

SynapseSqlPoolExtendedAuditingPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.synapse_sql_pool_extended_auditing_policy.SynapseSqlPoolExtendedAuditingPolicy;

SynapseSqlPoolExtendedAuditingPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SynapseSqlPoolExtendedAuditingPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SynapseSqlPoolExtendedAuditingPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SynapseSqlPoolExtendedAuditingPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SynapseSqlPoolExtendedAuditingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SynapseSqlPoolExtendedAuditingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference">SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.logMonitoringEnabledInput">logMonitoringEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.retentionInDaysInput">retentionInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.sqlPoolIdInput">sqlPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageAccountAccessKeyInput">storageAccountAccessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondaryInput">storageAccountAccessKeyIsSecondaryInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageEndpointInput">storageEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts">SynapseSqlPoolExtendedAuditingPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.logMonitoringEnabled">logMonitoringEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.retentionInDays">retentionInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.sqlPoolId">sqlPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondary">storageAccountAccessKeyIsSecondary</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageEndpoint">storageEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.timeouts"></a>

```java
public SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference">SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logMonitoringEnabledInput`<sup>Optional</sup> <a name="logMonitoringEnabledInput" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.logMonitoringEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getLogMonitoringEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `retentionInDaysInput`<sup>Optional</sup> <a name="retentionInDaysInput" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.retentionInDaysInput"></a>

```java
public java.lang.Number getRetentionInDaysInput();
```

- *Type:* java.lang.Number

---

##### `sqlPoolIdInput`<sup>Optional</sup> <a name="sqlPoolIdInput" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.sqlPoolIdInput"></a>

```java
public java.lang.String getSqlPoolIdInput();
```

- *Type:* java.lang.String

---

##### `storageAccountAccessKeyInput`<sup>Optional</sup> <a name="storageAccountAccessKeyInput" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageAccountAccessKeyInput"></a>

```java
public java.lang.String getStorageAccountAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `storageAccountAccessKeyIsSecondaryInput`<sup>Optional</sup> <a name="storageAccountAccessKeyIsSecondaryInput" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondaryInput"></a>

```java
public java.lang.Boolean|IResolvable getStorageAccountAccessKeyIsSecondaryInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `storageEndpointInput`<sup>Optional</sup> <a name="storageEndpointInput" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageEndpointInput"></a>

```java
public java.lang.String getStorageEndpointInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.timeoutsInput"></a>

```java
public IResolvable|SynapseSqlPoolExtendedAuditingPolicyTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts">SynapseSqlPoolExtendedAuditingPolicyTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logMonitoringEnabled`<sup>Required</sup> <a name="logMonitoringEnabled" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.logMonitoringEnabled"></a>

```java
public java.lang.Boolean|IResolvable getLogMonitoringEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.retentionInDays"></a>

```java
public java.lang.Number getRetentionInDays();
```

- *Type:* java.lang.Number

---

##### `sqlPoolId`<sup>Required</sup> <a name="sqlPoolId" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.sqlPoolId"></a>

```java
public java.lang.String getSqlPoolId();
```

- *Type:* java.lang.String

---

##### `storageAccountAccessKey`<sup>Required</sup> <a name="storageAccountAccessKey" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageAccountAccessKey"></a>

```java
public java.lang.String getStorageAccountAccessKey();
```

- *Type:* java.lang.String

---

##### `storageAccountAccessKeyIsSecondary`<sup>Required</sup> <a name="storageAccountAccessKeyIsSecondary" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondary"></a>

```java
public java.lang.Boolean|IResolvable getStorageAccountAccessKeyIsSecondary();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `storageEndpoint`<sup>Required</sup> <a name="storageEndpoint" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageEndpoint"></a>

```java
public java.lang.String getStorageEndpoint();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseSqlPoolExtendedAuditingPolicyConfig <a name="SynapseSqlPoolExtendedAuditingPolicyConfig" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.synapse_sql_pool_extended_auditing_policy.SynapseSqlPoolExtendedAuditingPolicyConfig;

SynapseSqlPoolExtendedAuditingPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .sqlPoolId(java.lang.String)
//  .id(java.lang.String)
//  .logMonitoringEnabled(java.lang.Boolean|IResolvable)
//  .retentionInDays(java.lang.Number)
//  .storageAccountAccessKey(java.lang.String)
//  .storageAccountAccessKeyIsSecondary(java.lang.Boolean|IResolvable)
//  .storageEndpoint(java.lang.String)
//  .timeouts(SynapseSqlPoolExtendedAuditingPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.sqlPoolId">sqlPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#sql_pool_id SynapseSqlPoolExtendedAuditingPolicy#sql_pool_id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#id SynapseSqlPoolExtendedAuditingPolicy#id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.logMonitoringEnabled">logMonitoringEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#log_monitoring_enabled SynapseSqlPoolExtendedAuditingPolicy#log_monitoring_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.retentionInDays">retentionInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#retention_in_days SynapseSqlPoolExtendedAuditingPolicy#retention_in_days}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#storage_account_access_key SynapseSqlPoolExtendedAuditingPolicy#storage_account_access_key}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.storageAccountAccessKeyIsSecondary">storageAccountAccessKeyIsSecondary</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#storage_account_access_key_is_secondary SynapseSqlPoolExtendedAuditingPolicy#storage_account_access_key_is_secondary}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.storageEndpoint">storageEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#storage_endpoint SynapseSqlPoolExtendedAuditingPolicy#storage_endpoint}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts">SynapseSqlPoolExtendedAuditingPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `sqlPoolId`<sup>Required</sup> <a name="sqlPoolId" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.sqlPoolId"></a>

```java
public java.lang.String getSqlPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#sql_pool_id SynapseSqlPoolExtendedAuditingPolicy#sql_pool_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#id SynapseSqlPoolExtendedAuditingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logMonitoringEnabled`<sup>Optional</sup> <a name="logMonitoringEnabled" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.logMonitoringEnabled"></a>

```java
public java.lang.Boolean|IResolvable getLogMonitoringEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#log_monitoring_enabled SynapseSqlPoolExtendedAuditingPolicy#log_monitoring_enabled}.

---

##### `retentionInDays`<sup>Optional</sup> <a name="retentionInDays" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.retentionInDays"></a>

```java
public java.lang.Number getRetentionInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#retention_in_days SynapseSqlPoolExtendedAuditingPolicy#retention_in_days}.

---

##### `storageAccountAccessKey`<sup>Optional</sup> <a name="storageAccountAccessKey" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.storageAccountAccessKey"></a>

```java
public java.lang.String getStorageAccountAccessKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#storage_account_access_key SynapseSqlPoolExtendedAuditingPolicy#storage_account_access_key}.

---

##### `storageAccountAccessKeyIsSecondary`<sup>Optional</sup> <a name="storageAccountAccessKeyIsSecondary" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.storageAccountAccessKeyIsSecondary"></a>

```java
public java.lang.Boolean|IResolvable getStorageAccountAccessKeyIsSecondary();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#storage_account_access_key_is_secondary SynapseSqlPoolExtendedAuditingPolicy#storage_account_access_key_is_secondary}.

---

##### `storageEndpoint`<sup>Optional</sup> <a name="storageEndpoint" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.storageEndpoint"></a>

```java
public java.lang.String getStorageEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#storage_endpoint SynapseSqlPoolExtendedAuditingPolicy#storage_endpoint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.timeouts"></a>

```java
public SynapseSqlPoolExtendedAuditingPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts">SynapseSqlPoolExtendedAuditingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#timeouts SynapseSqlPoolExtendedAuditingPolicy#timeouts}

---

### SynapseSqlPoolExtendedAuditingPolicyTimeouts <a name="SynapseSqlPoolExtendedAuditingPolicyTimeouts" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.synapse_sql_pool_extended_auditing_policy.SynapseSqlPoolExtendedAuditingPolicyTimeouts;

SynapseSqlPoolExtendedAuditingPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#create SynapseSqlPoolExtendedAuditingPolicy#create}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#delete SynapseSqlPoolExtendedAuditingPolicy#delete}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#read SynapseSqlPoolExtendedAuditingPolicy#read}. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#update SynapseSqlPoolExtendedAuditingPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#create SynapseSqlPoolExtendedAuditingPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#delete SynapseSqlPoolExtendedAuditingPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#read SynapseSqlPoolExtendedAuditingPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_sql_pool_extended_auditing_policy#update SynapseSqlPoolExtendedAuditingPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference <a name="SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.synapse_sql_pool_extended_auditing_policy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference;

new SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts">SynapseSqlPoolExtendedAuditingPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|SynapseSqlPoolExtendedAuditingPolicyTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts">SynapseSqlPoolExtendedAuditingPolicyTimeouts</a>

---



