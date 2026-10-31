# `dataProtectionBackupPolicyCosmosdbAccount` Submodule <a name="`dataProtectionBackupPolicyCosmosdbAccount` Submodule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupPolicyCosmosdbAccount <a name="DataProtectionBackupPolicyCosmosdbAccount" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account azurerm_data_protection_backup_policy_cosmosdb_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_policy_cosmosdb_account.DataProtectionBackupPolicyCosmosdbAccount;

DataProtectionBackupPolicyCosmosdbAccount.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backupSchedule(java.lang.String)
    .dataProtectionBackupVaultId(java.lang.String)
    .defaultRetentionDuration(java.lang.String)
    .name(java.lang.String)
//  .backupFrequency(java.lang.String)
//  .id(java.lang.String)
//  .monthlyRetentionRule(DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule)
//  .timeouts(DataProtectionBackupPolicyCosmosdbAccountTimeouts)
//  .weeklyRetentionRule(DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule)
//  .yearlyRetentionRule(DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.backupSchedule">backupSchedule</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#backup_schedule DataProtectionBackupPolicyCosmosdbAccount#backup_schedule}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.dataProtectionBackupVaultId">dataProtectionBackupVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#data_protection_backup_vault_id DataProtectionBackupPolicyCosmosdbAccount#data_protection_backup_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.defaultRetentionDuration">defaultRetentionDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#default_retention_duration DataProtectionBackupPolicyCosmosdbAccount#default_retention_duration}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#name DataProtectionBackupPolicyCosmosdbAccount#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.backupFrequency">backupFrequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#backup_frequency DataProtectionBackupPolicyCosmosdbAccount#backup_frequency}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#id DataProtectionBackupPolicyCosmosdbAccount#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.monthlyRetentionRule">monthlyRetentionRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule</a></code> | monthly_retention_rule block. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts">DataProtectionBackupPolicyCosmosdbAccountTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.weeklyRetentionRule">weeklyRetentionRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule</a></code> | weekly_retention_rule block. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.yearlyRetentionRule">yearlyRetentionRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule</a></code> | yearly_retention_rule block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backupSchedule`<sup>Required</sup> <a name="backupSchedule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.backupSchedule"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#backup_schedule DataProtectionBackupPolicyCosmosdbAccount#backup_schedule}.

---

##### `dataProtectionBackupVaultId`<sup>Required</sup> <a name="dataProtectionBackupVaultId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.dataProtectionBackupVaultId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#data_protection_backup_vault_id DataProtectionBackupPolicyCosmosdbAccount#data_protection_backup_vault_id}.

---

##### `defaultRetentionDuration`<sup>Required</sup> <a name="defaultRetentionDuration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.defaultRetentionDuration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#default_retention_duration DataProtectionBackupPolicyCosmosdbAccount#default_retention_duration}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#name DataProtectionBackupPolicyCosmosdbAccount#name}.

---

##### `backupFrequency`<sup>Optional</sup> <a name="backupFrequency" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.backupFrequency"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#backup_frequency DataProtectionBackupPolicyCosmosdbAccount#backup_frequency}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#id DataProtectionBackupPolicyCosmosdbAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monthlyRetentionRule`<sup>Optional</sup> <a name="monthlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.monthlyRetentionRule"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule</a>

monthly_retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#monthly_retention_rule DataProtectionBackupPolicyCosmosdbAccount#monthly_retention_rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts">DataProtectionBackupPolicyCosmosdbAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#timeouts DataProtectionBackupPolicyCosmosdbAccount#timeouts}

---

##### `weeklyRetentionRule`<sup>Optional</sup> <a name="weeklyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.weeklyRetentionRule"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule</a>

weekly_retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#weekly_retention_rule DataProtectionBackupPolicyCosmosdbAccount#weekly_retention_rule}

---

##### `yearlyRetentionRule`<sup>Optional</sup> <a name="yearlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.yearlyRetentionRule"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule</a>

yearly_retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#yearly_retention_rule DataProtectionBackupPolicyCosmosdbAccount#yearly_retention_rule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putMonthlyRetentionRule">putMonthlyRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putWeeklyRetentionRule">putWeeklyRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putYearlyRetentionRule">putYearlyRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetBackupFrequency">resetBackupFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetMonthlyRetentionRule">resetMonthlyRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetWeeklyRetentionRule">resetWeeklyRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetYearlyRetentionRule">resetYearlyRetentionRule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMonthlyRetentionRule` <a name="putMonthlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putMonthlyRetentionRule"></a>

```java
public void putMonthlyRetentionRule(DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putMonthlyRetentionRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putTimeouts"></a>

```java
public void putTimeouts(DataProtectionBackupPolicyCosmosdbAccountTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts">DataProtectionBackupPolicyCosmosdbAccountTimeouts</a>

---

##### `putWeeklyRetentionRule` <a name="putWeeklyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putWeeklyRetentionRule"></a>

```java
public void putWeeklyRetentionRule(DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putWeeklyRetentionRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule</a>

---

##### `putYearlyRetentionRule` <a name="putYearlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putYearlyRetentionRule"></a>

```java
public void putYearlyRetentionRule(DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putYearlyRetentionRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule</a>

---

##### `resetBackupFrequency` <a name="resetBackupFrequency" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetBackupFrequency"></a>

```java
public void resetBackupFrequency()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetId"></a>

```java
public void resetId()
```

##### `resetMonthlyRetentionRule` <a name="resetMonthlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetMonthlyRetentionRule"></a>

```java
public void resetMonthlyRetentionRule()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWeeklyRetentionRule` <a name="resetWeeklyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetWeeklyRetentionRule"></a>

```java
public void resetWeeklyRetentionRule()
```

##### `resetYearlyRetentionRule` <a name="resetYearlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetYearlyRetentionRule"></a>

```java
public void resetYearlyRetentionRule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataProtectionBackupPolicyCosmosdbAccount resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_policy_cosmosdb_account.DataProtectionBackupPolicyCosmosdbAccount;

DataProtectionBackupPolicyCosmosdbAccount.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_policy_cosmosdb_account.DataProtectionBackupPolicyCosmosdbAccount;

DataProtectionBackupPolicyCosmosdbAccount.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_policy_cosmosdb_account.DataProtectionBackupPolicyCosmosdbAccount;

DataProtectionBackupPolicyCosmosdbAccount.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_policy_cosmosdb_account.DataProtectionBackupPolicyCosmosdbAccount;

DataProtectionBackupPolicyCosmosdbAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataProtectionBackupPolicyCosmosdbAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataProtectionBackupPolicyCosmosdbAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataProtectionBackupPolicyCosmosdbAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataProtectionBackupPolicyCosmosdbAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupPolicyCosmosdbAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.incrementalBackupSchedules">incrementalBackupSchedules</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.monthlyRetentionRule">monthlyRetentionRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference">DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.weeklyRetentionRule">weeklyRetentionRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.yearlyRetentionRule">yearlyRetentionRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.backupFrequencyInput">backupFrequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.backupScheduleInput">backupScheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.dataProtectionBackupVaultIdInput">dataProtectionBackupVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.defaultRetentionDurationInput">defaultRetentionDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.monthlyRetentionRuleInput">monthlyRetentionRuleInput</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts">DataProtectionBackupPolicyCosmosdbAccountTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.weeklyRetentionRuleInput">weeklyRetentionRuleInput</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.yearlyRetentionRuleInput">yearlyRetentionRuleInput</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.backupFrequency">backupFrequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.backupSchedule">backupSchedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.dataProtectionBackupVaultId">dataProtectionBackupVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.defaultRetentionDuration">defaultRetentionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `incrementalBackupSchedules`<sup>Required</sup> <a name="incrementalBackupSchedules" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.incrementalBackupSchedules"></a>

```java
public java.util.List<java.lang.String> getIncrementalBackupSchedules();
```

- *Type:* java.util.List<java.lang.String>

---

##### `monthlyRetentionRule`<sup>Required</sup> <a name="monthlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.monthlyRetentionRule"></a>

```java
public DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference getMonthlyRetentionRule();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.timeouts"></a>

```java
public DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference">DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference</a>

---

##### `weeklyRetentionRule`<sup>Required</sup> <a name="weeklyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.weeklyRetentionRule"></a>

```java
public DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference getWeeklyRetentionRule();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference</a>

---

##### `yearlyRetentionRule`<sup>Required</sup> <a name="yearlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.yearlyRetentionRule"></a>

```java
public DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference getYearlyRetentionRule();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference</a>

---

##### `backupFrequencyInput`<sup>Optional</sup> <a name="backupFrequencyInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.backupFrequencyInput"></a>

```java
public java.lang.String getBackupFrequencyInput();
```

- *Type:* java.lang.String

---

##### `backupScheduleInput`<sup>Optional</sup> <a name="backupScheduleInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.backupScheduleInput"></a>

```java
public java.lang.String getBackupScheduleInput();
```

- *Type:* java.lang.String

---

##### `dataProtectionBackupVaultIdInput`<sup>Optional</sup> <a name="dataProtectionBackupVaultIdInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.dataProtectionBackupVaultIdInput"></a>

```java
public java.lang.String getDataProtectionBackupVaultIdInput();
```

- *Type:* java.lang.String

---

##### `defaultRetentionDurationInput`<sup>Optional</sup> <a name="defaultRetentionDurationInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.defaultRetentionDurationInput"></a>

```java
public java.lang.String getDefaultRetentionDurationInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `monthlyRetentionRuleInput`<sup>Optional</sup> <a name="monthlyRetentionRuleInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.monthlyRetentionRuleInput"></a>

```java
public DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule getMonthlyRetentionRuleInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.timeoutsInput"></a>

```java
public IResolvable|DataProtectionBackupPolicyCosmosdbAccountTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts">DataProtectionBackupPolicyCosmosdbAccountTimeouts</a>

---

##### `weeklyRetentionRuleInput`<sup>Optional</sup> <a name="weeklyRetentionRuleInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.weeklyRetentionRuleInput"></a>

```java
public DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule getWeeklyRetentionRuleInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule</a>

---

##### `yearlyRetentionRuleInput`<sup>Optional</sup> <a name="yearlyRetentionRuleInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.yearlyRetentionRuleInput"></a>

```java
public DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule getYearlyRetentionRuleInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule</a>

---

##### `backupFrequency`<sup>Required</sup> <a name="backupFrequency" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.backupFrequency"></a>

```java
public java.lang.String getBackupFrequency();
```

- *Type:* java.lang.String

---

##### `backupSchedule`<sup>Required</sup> <a name="backupSchedule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.backupSchedule"></a>

```java
public java.lang.String getBackupSchedule();
```

- *Type:* java.lang.String

---

##### `dataProtectionBackupVaultId`<sup>Required</sup> <a name="dataProtectionBackupVaultId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.dataProtectionBackupVaultId"></a>

```java
public java.lang.String getDataProtectionBackupVaultId();
```

- *Type:* java.lang.String

---

##### `defaultRetentionDuration`<sup>Required</sup> <a name="defaultRetentionDuration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.defaultRetentionDuration"></a>

```java
public java.lang.String getDefaultRetentionDuration();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupPolicyCosmosdbAccountConfig <a name="DataProtectionBackupPolicyCosmosdbAccountConfig" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_policy_cosmosdb_account.DataProtectionBackupPolicyCosmosdbAccountConfig;

DataProtectionBackupPolicyCosmosdbAccountConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backupSchedule(java.lang.String)
    .dataProtectionBackupVaultId(java.lang.String)
    .defaultRetentionDuration(java.lang.String)
    .name(java.lang.String)
//  .backupFrequency(java.lang.String)
//  .id(java.lang.String)
//  .monthlyRetentionRule(DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule)
//  .timeouts(DataProtectionBackupPolicyCosmosdbAccountTimeouts)
//  .weeklyRetentionRule(DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule)
//  .yearlyRetentionRule(DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.backupSchedule">backupSchedule</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#backup_schedule DataProtectionBackupPolicyCosmosdbAccount#backup_schedule}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.dataProtectionBackupVaultId">dataProtectionBackupVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#data_protection_backup_vault_id DataProtectionBackupPolicyCosmosdbAccount#data_protection_backup_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.defaultRetentionDuration">defaultRetentionDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#default_retention_duration DataProtectionBackupPolicyCosmosdbAccount#default_retention_duration}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#name DataProtectionBackupPolicyCosmosdbAccount#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.backupFrequency">backupFrequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#backup_frequency DataProtectionBackupPolicyCosmosdbAccount#backup_frequency}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#id DataProtectionBackupPolicyCosmosdbAccount#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.monthlyRetentionRule">monthlyRetentionRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule</a></code> | monthly_retention_rule block. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts">DataProtectionBackupPolicyCosmosdbAccountTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.weeklyRetentionRule">weeklyRetentionRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule</a></code> | weekly_retention_rule block. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.yearlyRetentionRule">yearlyRetentionRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule</a></code> | yearly_retention_rule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backupSchedule`<sup>Required</sup> <a name="backupSchedule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.backupSchedule"></a>

```java
public java.lang.String getBackupSchedule();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#backup_schedule DataProtectionBackupPolicyCosmosdbAccount#backup_schedule}.

---

##### `dataProtectionBackupVaultId`<sup>Required</sup> <a name="dataProtectionBackupVaultId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.dataProtectionBackupVaultId"></a>

```java
public java.lang.String getDataProtectionBackupVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#data_protection_backup_vault_id DataProtectionBackupPolicyCosmosdbAccount#data_protection_backup_vault_id}.

---

##### `defaultRetentionDuration`<sup>Required</sup> <a name="defaultRetentionDuration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.defaultRetentionDuration"></a>

```java
public java.lang.String getDefaultRetentionDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#default_retention_duration DataProtectionBackupPolicyCosmosdbAccount#default_retention_duration}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#name DataProtectionBackupPolicyCosmosdbAccount#name}.

---

##### `backupFrequency`<sup>Optional</sup> <a name="backupFrequency" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.backupFrequency"></a>

```java
public java.lang.String getBackupFrequency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#backup_frequency DataProtectionBackupPolicyCosmosdbAccount#backup_frequency}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#id DataProtectionBackupPolicyCosmosdbAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monthlyRetentionRule`<sup>Optional</sup> <a name="monthlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.monthlyRetentionRule"></a>

```java
public DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule getMonthlyRetentionRule();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule</a>

monthly_retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#monthly_retention_rule DataProtectionBackupPolicyCosmosdbAccount#monthly_retention_rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.timeouts"></a>

```java
public DataProtectionBackupPolicyCosmosdbAccountTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts">DataProtectionBackupPolicyCosmosdbAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#timeouts DataProtectionBackupPolicyCosmosdbAccount#timeouts}

---

##### `weeklyRetentionRule`<sup>Optional</sup> <a name="weeklyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.weeklyRetentionRule"></a>

```java
public DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule getWeeklyRetentionRule();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule</a>

weekly_retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#weekly_retention_rule DataProtectionBackupPolicyCosmosdbAccount#weekly_retention_rule}

---

##### `yearlyRetentionRule`<sup>Optional</sup> <a name="yearlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.yearlyRetentionRule"></a>

```java
public DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule getYearlyRetentionRule();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule</a>

yearly_retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#yearly_retention_rule DataProtectionBackupPolicyCosmosdbAccount#yearly_retention_rule}

---

### DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule <a name="DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_policy_cosmosdb_account.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule;

DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule.builder()
    .duration(java.lang.String)
//  .daysOfWeek(java.util.List<java.lang.String>)
//  .weeksOfMonth(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule.property.duration">duration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#duration DataProtectionBackupPolicyCosmosdbAccount#duration}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#days_of_week DataProtectionBackupPolicyCosmosdbAccount#days_of_week}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#weeks_of_month DataProtectionBackupPolicyCosmosdbAccount#weeks_of_month}. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#duration DataProtectionBackupPolicyCosmosdbAccount#duration}.

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#days_of_week DataProtectionBackupPolicyCosmosdbAccount#days_of_week}.

---

##### `weeksOfMonth`<sup>Optional</sup> <a name="weeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.String> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#weeks_of_month DataProtectionBackupPolicyCosmosdbAccount#weeks_of_month}.

---

### DataProtectionBackupPolicyCosmosdbAccountTimeouts <a name="DataProtectionBackupPolicyCosmosdbAccountTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_policy_cosmosdb_account.DataProtectionBackupPolicyCosmosdbAccountTimeouts;

DataProtectionBackupPolicyCosmosdbAccountTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#create DataProtectionBackupPolicyCosmosdbAccount#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#delete DataProtectionBackupPolicyCosmosdbAccount#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#read DataProtectionBackupPolicyCosmosdbAccount#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#create DataProtectionBackupPolicyCosmosdbAccount#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#delete DataProtectionBackupPolicyCosmosdbAccount#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#read DataProtectionBackupPolicyCosmosdbAccount#read}.

---

### DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule <a name="DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_policy_cosmosdb_account.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule;

DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule.builder()
    .duration(java.lang.String)
//  .daysOfWeek(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule.property.duration">duration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#duration DataProtectionBackupPolicyCosmosdbAccount#duration}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#days_of_week DataProtectionBackupPolicyCosmosdbAccount#days_of_week}. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#duration DataProtectionBackupPolicyCosmosdbAccount#duration}.

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#days_of_week DataProtectionBackupPolicyCosmosdbAccount#days_of_week}.

---

### DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule <a name="DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_policy_cosmosdb_account.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule;

DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.builder()
    .duration(java.lang.String)
//  .daysOfWeek(java.util.List<java.lang.String>)
//  .monthsOfYear(java.util.List<java.lang.String>)
//  .weeksOfMonth(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.property.duration">duration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#duration DataProtectionBackupPolicyCosmosdbAccount#duration}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#days_of_week DataProtectionBackupPolicyCosmosdbAccount#days_of_week}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.property.monthsOfYear">monthsOfYear</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#months_of_year DataProtectionBackupPolicyCosmosdbAccount#months_of_year}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#weeks_of_month DataProtectionBackupPolicyCosmosdbAccount#weeks_of_month}. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#duration DataProtectionBackupPolicyCosmosdbAccount#duration}.

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#days_of_week DataProtectionBackupPolicyCosmosdbAccount#days_of_week}.

---

##### `monthsOfYear`<sup>Optional</sup> <a name="monthsOfYear" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.property.monthsOfYear"></a>

```java
public java.util.List<java.lang.String> getMonthsOfYear();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#months_of_year DataProtectionBackupPolicyCosmosdbAccount#months_of_year}.

---

##### `weeksOfMonth`<sup>Optional</sup> <a name="weeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.String> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#weeks_of_month DataProtectionBackupPolicyCosmosdbAccount#weeks_of_month}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference <a name="DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_policy_cosmosdb_account.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference;

new DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.resetWeeksOfMonth">resetWeeksOfMonth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.resetDaysOfWeek"></a>

```java
public void resetDaysOfWeek()
```

##### `resetWeeksOfMonth` <a name="resetWeeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.resetWeeksOfMonth"></a>

```java
public void resetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.weeksOfMonthInput">weeksOfMonthInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.daysOfWeekInput"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeekInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `weeksOfMonthInput`<sup>Optional</sup> <a name="weeksOfMonthInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.weeksOfMonthInput"></a>

```java
public java.util.List<java.lang.String> getWeeksOfMonthInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.String> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.internalValue"></a>

```java
public DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule</a>

---


### DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference <a name="DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_policy_cosmosdb_account.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference;

new DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts">DataProtectionBackupPolicyCosmosdbAccountTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataProtectionBackupPolicyCosmosdbAccountTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts">DataProtectionBackupPolicyCosmosdbAccountTimeouts</a>

---


### DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference <a name="DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_policy_cosmosdb_account.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference;

new DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.resetDaysOfWeek"></a>

```java
public void resetDaysOfWeek()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.daysOfWeekInput"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeekInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.internalValue"></a>

```java
public DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule</a>

---


### DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference <a name="DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_policy_cosmosdb_account.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference;

new DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resetMonthsOfYear">resetMonthsOfYear</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resetWeeksOfMonth">resetWeeksOfMonth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resetDaysOfWeek"></a>

```java
public void resetDaysOfWeek()
```

##### `resetMonthsOfYear` <a name="resetMonthsOfYear" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resetMonthsOfYear"></a>

```java
public void resetMonthsOfYear()
```

##### `resetWeeksOfMonth` <a name="resetWeeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resetWeeksOfMonth"></a>

```java
public void resetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.monthsOfYearInput">monthsOfYearInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.weeksOfMonthInput">weeksOfMonthInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.monthsOfYear">monthsOfYear</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.daysOfWeekInput"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeekInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `monthsOfYearInput`<sup>Optional</sup> <a name="monthsOfYearInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.monthsOfYearInput"></a>

```java
public java.util.List<java.lang.String> getMonthsOfYearInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `weeksOfMonthInput`<sup>Optional</sup> <a name="weeksOfMonthInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.weeksOfMonthInput"></a>

```java
public java.util.List<java.lang.String> getWeeksOfMonthInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `monthsOfYear`<sup>Required</sup> <a name="monthsOfYear" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.monthsOfYear"></a>

```java
public java.util.List<java.lang.String> getMonthsOfYear();
```

- *Type:* java.util.List<java.lang.String>

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.String> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.internalValue"></a>

```java
public DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule</a>

---



