# `dataProtectionBackupPolicyCosmosdbAccount` Submodule <a name="`dataProtectionBackupPolicyCosmosdbAccount` Submodule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupPolicyCosmosdbAccount <a name="DataProtectionBackupPolicyCosmosdbAccount" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account azurerm_data_protection_backup_policy_cosmosdb_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupPolicyCosmosdbAccount(Construct Scope, string Id, DataProtectionBackupPolicyCosmosdbAccountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig">DataProtectionBackupPolicyCosmosdbAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig">DataProtectionBackupPolicyCosmosdbAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putMonthlyRetentionRule">PutMonthlyRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putWeeklyRetentionRule">PutWeeklyRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putYearlyRetentionRule">PutYearlyRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetBackupFrequency">ResetBackupFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetMonthlyRetentionRule">ResetMonthlyRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetWeeklyRetentionRule">ResetWeeklyRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetYearlyRetentionRule">ResetYearlyRetentionRule</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMonthlyRetentionRule` <a name="PutMonthlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putMonthlyRetentionRule"></a>

```csharp
private void PutMonthlyRetentionRule(DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putMonthlyRetentionRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putTimeouts"></a>

```csharp
private void PutTimeouts(DataProtectionBackupPolicyCosmosdbAccountTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts">DataProtectionBackupPolicyCosmosdbAccountTimeouts</a>

---

##### `PutWeeklyRetentionRule` <a name="PutWeeklyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putWeeklyRetentionRule"></a>

```csharp
private void PutWeeklyRetentionRule(DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putWeeklyRetentionRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule</a>

---

##### `PutYearlyRetentionRule` <a name="PutYearlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putYearlyRetentionRule"></a>

```csharp
private void PutYearlyRetentionRule(DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putYearlyRetentionRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule</a>

---

##### `ResetBackupFrequency` <a name="ResetBackupFrequency" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetBackupFrequency"></a>

```csharp
private void ResetBackupFrequency()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMonthlyRetentionRule` <a name="ResetMonthlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetMonthlyRetentionRule"></a>

```csharp
private void ResetMonthlyRetentionRule()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWeeklyRetentionRule` <a name="ResetWeeklyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetWeeklyRetentionRule"></a>

```csharp
private void ResetWeeklyRetentionRule()
```

##### `ResetYearlyRetentionRule` <a name="ResetYearlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetYearlyRetentionRule"></a>

```csharp
private void ResetYearlyRetentionRule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataProtectionBackupPolicyCosmosdbAccount resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataProtectionBackupPolicyCosmosdbAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataProtectionBackupPolicyCosmosdbAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataProtectionBackupPolicyCosmosdbAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataProtectionBackupPolicyCosmosdbAccount.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataProtectionBackupPolicyCosmosdbAccount resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataProtectionBackupPolicyCosmosdbAccount to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataProtectionBackupPolicyCosmosdbAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupPolicyCosmosdbAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.incrementalBackupSchedules">IncrementalBackupSchedules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.monthlyRetentionRule">MonthlyRetentionRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference">DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.weeklyRetentionRule">WeeklyRetentionRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.yearlyRetentionRule">YearlyRetentionRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.backupFrequencyInput">BackupFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.backupScheduleInput">BackupScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.dataProtectionBackupVaultIdInput">DataProtectionBackupVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.defaultRetentionDurationInput">DefaultRetentionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.monthlyRetentionRuleInput">MonthlyRetentionRuleInput</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts">DataProtectionBackupPolicyCosmosdbAccountTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.weeklyRetentionRuleInput">WeeklyRetentionRuleInput</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.yearlyRetentionRuleInput">YearlyRetentionRuleInput</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.backupFrequency">BackupFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.backupSchedule">BackupSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.dataProtectionBackupVaultId">DataProtectionBackupVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.defaultRetentionDuration">DefaultRetentionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IncrementalBackupSchedules`<sup>Required</sup> <a name="IncrementalBackupSchedules" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.incrementalBackupSchedules"></a>

```csharp
public string[] IncrementalBackupSchedules { get; }
```

- *Type:* string[]

---

##### `MonthlyRetentionRule`<sup>Required</sup> <a name="MonthlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.monthlyRetentionRule"></a>

```csharp
public DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference MonthlyRetentionRule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.timeouts"></a>

```csharp
public DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference">DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference</a>

---

##### `WeeklyRetentionRule`<sup>Required</sup> <a name="WeeklyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.weeklyRetentionRule"></a>

```csharp
public DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference WeeklyRetentionRule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference</a>

---

##### `YearlyRetentionRule`<sup>Required</sup> <a name="YearlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.yearlyRetentionRule"></a>

```csharp
public DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference YearlyRetentionRule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference</a>

---

##### `BackupFrequencyInput`<sup>Optional</sup> <a name="BackupFrequencyInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.backupFrequencyInput"></a>

```csharp
public string BackupFrequencyInput { get; }
```

- *Type:* string

---

##### `BackupScheduleInput`<sup>Optional</sup> <a name="BackupScheduleInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.backupScheduleInput"></a>

```csharp
public string BackupScheduleInput { get; }
```

- *Type:* string

---

##### `DataProtectionBackupVaultIdInput`<sup>Optional</sup> <a name="DataProtectionBackupVaultIdInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.dataProtectionBackupVaultIdInput"></a>

```csharp
public string DataProtectionBackupVaultIdInput { get; }
```

- *Type:* string

---

##### `DefaultRetentionDurationInput`<sup>Optional</sup> <a name="DefaultRetentionDurationInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.defaultRetentionDurationInput"></a>

```csharp
public string DefaultRetentionDurationInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MonthlyRetentionRuleInput`<sup>Optional</sup> <a name="MonthlyRetentionRuleInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.monthlyRetentionRuleInput"></a>

```csharp
public DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule MonthlyRetentionRuleInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.timeoutsInput"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyCosmosdbAccountTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts">DataProtectionBackupPolicyCosmosdbAccountTimeouts</a>

---

##### `WeeklyRetentionRuleInput`<sup>Optional</sup> <a name="WeeklyRetentionRuleInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.weeklyRetentionRuleInput"></a>

```csharp
public DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule WeeklyRetentionRuleInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule</a>

---

##### `YearlyRetentionRuleInput`<sup>Optional</sup> <a name="YearlyRetentionRuleInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.yearlyRetentionRuleInput"></a>

```csharp
public DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule YearlyRetentionRuleInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule</a>

---

##### `BackupFrequency`<sup>Required</sup> <a name="BackupFrequency" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.backupFrequency"></a>

```csharp
public string BackupFrequency { get; }
```

- *Type:* string

---

##### `BackupSchedule`<sup>Required</sup> <a name="BackupSchedule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.backupSchedule"></a>

```csharp
public string BackupSchedule { get; }
```

- *Type:* string

---

##### `DataProtectionBackupVaultId`<sup>Required</sup> <a name="DataProtectionBackupVaultId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.dataProtectionBackupVaultId"></a>

```csharp
public string DataProtectionBackupVaultId { get; }
```

- *Type:* string

---

##### `DefaultRetentionDuration`<sup>Required</sup> <a name="DefaultRetentionDuration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.defaultRetentionDuration"></a>

```csharp
public string DefaultRetentionDuration { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupPolicyCosmosdbAccountConfig <a name="DataProtectionBackupPolicyCosmosdbAccountConfig" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupPolicyCosmosdbAccountConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BackupSchedule,
    string DataProtectionBackupVaultId,
    string DefaultRetentionDuration,
    string Name,
    string BackupFrequency = null,
    string Id = null,
    DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule MonthlyRetentionRule = null,
    DataProtectionBackupPolicyCosmosdbAccountTimeouts Timeouts = null,
    DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule WeeklyRetentionRule = null,
    DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule YearlyRetentionRule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.backupSchedule">BackupSchedule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#backup_schedule DataProtectionBackupPolicyCosmosdbAccount#backup_schedule}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.dataProtectionBackupVaultId">DataProtectionBackupVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#data_protection_backup_vault_id DataProtectionBackupPolicyCosmosdbAccount#data_protection_backup_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.defaultRetentionDuration">DefaultRetentionDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#default_retention_duration DataProtectionBackupPolicyCosmosdbAccount#default_retention_duration}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#name DataProtectionBackupPolicyCosmosdbAccount#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.backupFrequency">BackupFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#backup_frequency DataProtectionBackupPolicyCosmosdbAccount#backup_frequency}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#id DataProtectionBackupPolicyCosmosdbAccount#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.monthlyRetentionRule">MonthlyRetentionRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule</a></code> | monthly_retention_rule block. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts">DataProtectionBackupPolicyCosmosdbAccountTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.weeklyRetentionRule">WeeklyRetentionRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule</a></code> | weekly_retention_rule block. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.yearlyRetentionRule">YearlyRetentionRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule</a></code> | yearly_retention_rule block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BackupSchedule`<sup>Required</sup> <a name="BackupSchedule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.backupSchedule"></a>

```csharp
public string BackupSchedule { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#backup_schedule DataProtectionBackupPolicyCosmosdbAccount#backup_schedule}.

---

##### `DataProtectionBackupVaultId`<sup>Required</sup> <a name="DataProtectionBackupVaultId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.dataProtectionBackupVaultId"></a>

```csharp
public string DataProtectionBackupVaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#data_protection_backup_vault_id DataProtectionBackupPolicyCosmosdbAccount#data_protection_backup_vault_id}.

---

##### `DefaultRetentionDuration`<sup>Required</sup> <a name="DefaultRetentionDuration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.defaultRetentionDuration"></a>

```csharp
public string DefaultRetentionDuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#default_retention_duration DataProtectionBackupPolicyCosmosdbAccount#default_retention_duration}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#name DataProtectionBackupPolicyCosmosdbAccount#name}.

---

##### `BackupFrequency`<sup>Optional</sup> <a name="BackupFrequency" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.backupFrequency"></a>

```csharp
public string BackupFrequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#backup_frequency DataProtectionBackupPolicyCosmosdbAccount#backup_frequency}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#id DataProtectionBackupPolicyCosmosdbAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MonthlyRetentionRule`<sup>Optional</sup> <a name="MonthlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.monthlyRetentionRule"></a>

```csharp
public DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule MonthlyRetentionRule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule</a>

monthly_retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#monthly_retention_rule DataProtectionBackupPolicyCosmosdbAccount#monthly_retention_rule}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.timeouts"></a>

```csharp
public DataProtectionBackupPolicyCosmosdbAccountTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts">DataProtectionBackupPolicyCosmosdbAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#timeouts DataProtectionBackupPolicyCosmosdbAccount#timeouts}

---

##### `WeeklyRetentionRule`<sup>Optional</sup> <a name="WeeklyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.weeklyRetentionRule"></a>

```csharp
public DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule WeeklyRetentionRule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule</a>

weekly_retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#weekly_retention_rule DataProtectionBackupPolicyCosmosdbAccount#weekly_retention_rule}

---

##### `YearlyRetentionRule`<sup>Optional</sup> <a name="YearlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.yearlyRetentionRule"></a>

```csharp
public DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule YearlyRetentionRule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule</a>

yearly_retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#yearly_retention_rule DataProtectionBackupPolicyCosmosdbAccount#yearly_retention_rule}

---

### DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule <a name="DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule {
    string Duration,
    string[] DaysOfWeek = null,
    string[] WeeksOfMonth = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule.property.duration">Duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#duration DataProtectionBackupPolicyCosmosdbAccount#duration}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#days_of_week DataProtectionBackupPolicyCosmosdbAccount#days_of_week}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#weeks_of_month DataProtectionBackupPolicyCosmosdbAccount#weeks_of_month}. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#duration DataProtectionBackupPolicyCosmosdbAccount#duration}.

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#days_of_week DataProtectionBackupPolicyCosmosdbAccount#days_of_week}.

---

##### `WeeksOfMonth`<sup>Optional</sup> <a name="WeeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule.property.weeksOfMonth"></a>

```csharp
public string[] WeeksOfMonth { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#weeks_of_month DataProtectionBackupPolicyCosmosdbAccount#weeks_of_month}.

---

### DataProtectionBackupPolicyCosmosdbAccountTimeouts <a name="DataProtectionBackupPolicyCosmosdbAccountTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupPolicyCosmosdbAccountTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#create DataProtectionBackupPolicyCosmosdbAccount#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#delete DataProtectionBackupPolicyCosmosdbAccount#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#read DataProtectionBackupPolicyCosmosdbAccount#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#create DataProtectionBackupPolicyCosmosdbAccount#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#delete DataProtectionBackupPolicyCosmosdbAccount#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#read DataProtectionBackupPolicyCosmosdbAccount#read}.

---

### DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule <a name="DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule {
    string Duration,
    string[] DaysOfWeek = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule.property.duration">Duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#duration DataProtectionBackupPolicyCosmosdbAccount#duration}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#days_of_week DataProtectionBackupPolicyCosmosdbAccount#days_of_week}. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#duration DataProtectionBackupPolicyCosmosdbAccount#duration}.

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#days_of_week DataProtectionBackupPolicyCosmosdbAccount#days_of_week}.

---

### DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule <a name="DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule {
    string Duration,
    string[] DaysOfWeek = null,
    string[] MonthsOfYear = null,
    string[] WeeksOfMonth = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.property.duration">Duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#duration DataProtectionBackupPolicyCosmosdbAccount#duration}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#days_of_week DataProtectionBackupPolicyCosmosdbAccount#days_of_week}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.property.monthsOfYear">MonthsOfYear</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#months_of_year DataProtectionBackupPolicyCosmosdbAccount#months_of_year}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#weeks_of_month DataProtectionBackupPolicyCosmosdbAccount#weeks_of_month}. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#duration DataProtectionBackupPolicyCosmosdbAccount#duration}.

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#days_of_week DataProtectionBackupPolicyCosmosdbAccount#days_of_week}.

---

##### `MonthsOfYear`<sup>Optional</sup> <a name="MonthsOfYear" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.property.monthsOfYear"></a>

```csharp
public string[] MonthsOfYear { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#months_of_year DataProtectionBackupPolicyCosmosdbAccount#months_of_year}.

---

##### `WeeksOfMonth`<sup>Optional</sup> <a name="WeeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.property.weeksOfMonth"></a>

```csharp
public string[] WeeksOfMonth { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#weeks_of_month DataProtectionBackupPolicyCosmosdbAccount#weeks_of_month}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference <a name="DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.resetWeeksOfMonth">ResetWeeksOfMonth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.resetDaysOfWeek"></a>

```csharp
private void ResetDaysOfWeek()
```

##### `ResetWeeksOfMonth` <a name="ResetWeeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.resetWeeksOfMonth"></a>

```csharp
private void ResetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.weeksOfMonthInput">WeeksOfMonthInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.daysOfWeekInput"></a>

```csharp
public string[] DaysOfWeekInput { get; }
```

- *Type:* string[]

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `WeeksOfMonthInput`<sup>Optional</sup> <a name="WeeksOfMonthInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.weeksOfMonthInput"></a>

```csharp
public string[] WeeksOfMonthInput { get; }
```

- *Type:* string[]

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; }
```

- *Type:* string[]

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.weeksOfMonth"></a>

```csharp
public string[] WeeksOfMonth { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.internalValue"></a>

```csharp
public DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule</a>

---


### DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference <a name="DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts">DataProtectionBackupPolicyCosmosdbAccountTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyCosmosdbAccountTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts">DataProtectionBackupPolicyCosmosdbAccountTimeouts</a>

---


### DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference <a name="DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.resetDaysOfWeek"></a>

```csharp
private void ResetDaysOfWeek()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.daysOfWeekInput"></a>

```csharp
public string[] DaysOfWeekInput { get; }
```

- *Type:* string[]

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; }
```

- *Type:* string[]

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.internalValue"></a>

```csharp
public DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule</a>

---


### DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference <a name="DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resetMonthsOfYear">ResetMonthsOfYear</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resetWeeksOfMonth">ResetWeeksOfMonth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resetDaysOfWeek"></a>

```csharp
private void ResetDaysOfWeek()
```

##### `ResetMonthsOfYear` <a name="ResetMonthsOfYear" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resetMonthsOfYear"></a>

```csharp
private void ResetMonthsOfYear()
```

##### `ResetWeeksOfMonth` <a name="ResetWeeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resetWeeksOfMonth"></a>

```csharp
private void ResetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.monthsOfYearInput">MonthsOfYearInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.weeksOfMonthInput">WeeksOfMonthInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.monthsOfYear">MonthsOfYear</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.daysOfWeekInput"></a>

```csharp
public string[] DaysOfWeekInput { get; }
```

- *Type:* string[]

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `MonthsOfYearInput`<sup>Optional</sup> <a name="MonthsOfYearInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.monthsOfYearInput"></a>

```csharp
public string[] MonthsOfYearInput { get; }
```

- *Type:* string[]

---

##### `WeeksOfMonthInput`<sup>Optional</sup> <a name="WeeksOfMonthInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.weeksOfMonthInput"></a>

```csharp
public string[] WeeksOfMonthInput { get; }
```

- *Type:* string[]

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; }
```

- *Type:* string[]

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `MonthsOfYear`<sup>Required</sup> <a name="MonthsOfYear" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.monthsOfYear"></a>

```csharp
public string[] MonthsOfYear { get; }
```

- *Type:* string[]

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.weeksOfMonth"></a>

```csharp
public string[] WeeksOfMonth { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.internalValue"></a>

```csharp
public DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule</a>

---



