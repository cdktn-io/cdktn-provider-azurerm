# `dataProtectionBackupPolicyDataLakeStorage` Submodule <a name="`dataProtectionBackupPolicyDataLakeStorage` Submodule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupPolicyDataLakeStorage <a name="DataProtectionBackupPolicyDataLakeStorage" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage azurerm_data_protection_backup_policy_data_lake_storage}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupPolicyDataLakeStorage(Construct Scope, string Id, DataProtectionBackupPolicyDataLakeStorageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig">DataProtectionBackupPolicyDataLakeStorageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig">DataProtectionBackupPolicyDataLakeStorageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.putRetentionRule">PutRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.resetRetentionRule">ResetRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRetentionRule` <a name="PutRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.putRetentionRule"></a>

```csharp
private void PutRetentionRule(IResolvable|DataProtectionBackupPolicyDataLakeStorageRetentionRule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.putRetentionRule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule">DataProtectionBackupPolicyDataLakeStorageRetentionRule</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.putTimeouts"></a>

```csharp
private void PutTimeouts(DataProtectionBackupPolicyDataLakeStorageTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts">DataProtectionBackupPolicyDataLakeStorageTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRetentionRule` <a name="ResetRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.resetRetentionRule"></a>

```csharp
private void ResetRetentionRule()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataProtectionBackupPolicyDataLakeStorage resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataProtectionBackupPolicyDataLakeStorage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataProtectionBackupPolicyDataLakeStorage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataProtectionBackupPolicyDataLakeStorage.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataProtectionBackupPolicyDataLakeStorage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataProtectionBackupPolicyDataLakeStorage resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataProtectionBackupPolicyDataLakeStorage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataProtectionBackupPolicyDataLakeStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupPolicyDataLakeStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.retentionRule">RetentionRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList">DataProtectionBackupPolicyDataLakeStorageRetentionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference">DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.backupScheduleInput">BackupScheduleInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.dataProtectionBackupVaultIdInput">DataProtectionBackupVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.defaultRetentionDurationInput">DefaultRetentionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.retentionRuleInput">RetentionRuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule">DataProtectionBackupPolicyDataLakeStorageRetentionRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts">DataProtectionBackupPolicyDataLakeStorageTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.backupSchedule">BackupSchedule</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.dataProtectionBackupVaultId">DataProtectionBackupVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.defaultRetentionDuration">DefaultRetentionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `RetentionRule`<sup>Required</sup> <a name="RetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.retentionRule"></a>

```csharp
public DataProtectionBackupPolicyDataLakeStorageRetentionRuleList RetentionRule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList">DataProtectionBackupPolicyDataLakeStorageRetentionRuleList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.timeouts"></a>

```csharp
public DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference">DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference</a>

---

##### `BackupScheduleInput`<sup>Optional</sup> <a name="BackupScheduleInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.backupScheduleInput"></a>

```csharp
public string[] BackupScheduleInput { get; }
```

- *Type:* string[]

---

##### `DataProtectionBackupVaultIdInput`<sup>Optional</sup> <a name="DataProtectionBackupVaultIdInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.dataProtectionBackupVaultIdInput"></a>

```csharp
public string DataProtectionBackupVaultIdInput { get; }
```

- *Type:* string

---

##### `DefaultRetentionDurationInput`<sup>Optional</sup> <a name="DefaultRetentionDurationInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.defaultRetentionDurationInput"></a>

```csharp
public string DefaultRetentionDurationInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RetentionRuleInput`<sup>Optional</sup> <a name="RetentionRuleInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.retentionRuleInput"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyDataLakeStorageRetentionRule[] RetentionRuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule">DataProtectionBackupPolicyDataLakeStorageRetentionRule</a>[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.timeoutsInput"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyDataLakeStorageTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts">DataProtectionBackupPolicyDataLakeStorageTimeouts</a>

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `BackupSchedule`<sup>Required</sup> <a name="BackupSchedule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.backupSchedule"></a>

```csharp
public string[] BackupSchedule { get; }
```

- *Type:* string[]

---

##### `DataProtectionBackupVaultId`<sup>Required</sup> <a name="DataProtectionBackupVaultId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.dataProtectionBackupVaultId"></a>

```csharp
public string DataProtectionBackupVaultId { get; }
```

- *Type:* string

---

##### `DefaultRetentionDuration`<sup>Required</sup> <a name="DefaultRetentionDuration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.defaultRetentionDuration"></a>

```csharp
public string DefaultRetentionDuration { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupPolicyDataLakeStorageConfig <a name="DataProtectionBackupPolicyDataLakeStorageConfig" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupPolicyDataLakeStorageConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] BackupSchedule,
    string DataProtectionBackupVaultId,
    string DefaultRetentionDuration,
    string Name,
    string Id = null,
    IResolvable|DataProtectionBackupPolicyDataLakeStorageRetentionRule[] RetentionRule = null,
    DataProtectionBackupPolicyDataLakeStorageTimeouts Timeouts = null,
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.backupSchedule">BackupSchedule</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#backup_schedule DataProtectionBackupPolicyDataLakeStorage#backup_schedule}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.dataProtectionBackupVaultId">DataProtectionBackupVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#data_protection_backup_vault_id DataProtectionBackupPolicyDataLakeStorage#data_protection_backup_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.defaultRetentionDuration">DefaultRetentionDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#default_retention_duration DataProtectionBackupPolicyDataLakeStorage#default_retention_duration}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#name DataProtectionBackupPolicyDataLakeStorage#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#id DataProtectionBackupPolicyDataLakeStorage#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.retentionRule">RetentionRule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule">DataProtectionBackupPolicyDataLakeStorageRetentionRule</a>[]</code> | retention_rule block. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts">DataProtectionBackupPolicyDataLakeStorageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#time_zone DataProtectionBackupPolicyDataLakeStorage#time_zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BackupSchedule`<sup>Required</sup> <a name="BackupSchedule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.backupSchedule"></a>

```csharp
public string[] BackupSchedule { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#backup_schedule DataProtectionBackupPolicyDataLakeStorage#backup_schedule}.

---

##### `DataProtectionBackupVaultId`<sup>Required</sup> <a name="DataProtectionBackupVaultId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.dataProtectionBackupVaultId"></a>

```csharp
public string DataProtectionBackupVaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#data_protection_backup_vault_id DataProtectionBackupPolicyDataLakeStorage#data_protection_backup_vault_id}.

---

##### `DefaultRetentionDuration`<sup>Required</sup> <a name="DefaultRetentionDuration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.defaultRetentionDuration"></a>

```csharp
public string DefaultRetentionDuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#default_retention_duration DataProtectionBackupPolicyDataLakeStorage#default_retention_duration}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#name DataProtectionBackupPolicyDataLakeStorage#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#id DataProtectionBackupPolicyDataLakeStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RetentionRule`<sup>Optional</sup> <a name="RetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.retentionRule"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyDataLakeStorageRetentionRule[] RetentionRule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule">DataProtectionBackupPolicyDataLakeStorageRetentionRule</a>[]

retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#retention_rule DataProtectionBackupPolicyDataLakeStorage#retention_rule}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.timeouts"></a>

```csharp
public DataProtectionBackupPolicyDataLakeStorageTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts">DataProtectionBackupPolicyDataLakeStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#timeouts DataProtectionBackupPolicyDataLakeStorage#timeouts}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#time_zone DataProtectionBackupPolicyDataLakeStorage#time_zone}.

---

### DataProtectionBackupPolicyDataLakeStorageRetentionRule <a name="DataProtectionBackupPolicyDataLakeStorageRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupPolicyDataLakeStorageRetentionRule {
    string Duration,
    string Name,
    string AbsoluteCriteria = null,
    string[] DaysOfWeek = null,
    string[] MonthsOfYear = null,
    string[] ScheduledBackupTimes = null,
    string[] WeeksOfMonth = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.duration">Duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#duration DataProtectionBackupPolicyDataLakeStorage#duration}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#name DataProtectionBackupPolicyDataLakeStorage#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.absoluteCriteria">AbsoluteCriteria</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#absolute_criteria DataProtectionBackupPolicyDataLakeStorage#absolute_criteria}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#days_of_week DataProtectionBackupPolicyDataLakeStorage#days_of_week}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.monthsOfYear">MonthsOfYear</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#months_of_year DataProtectionBackupPolicyDataLakeStorage#months_of_year}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.scheduledBackupTimes">ScheduledBackupTimes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#scheduled_backup_times DataProtectionBackupPolicyDataLakeStorage#scheduled_backup_times}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#weeks_of_month DataProtectionBackupPolicyDataLakeStorage#weeks_of_month}. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#duration DataProtectionBackupPolicyDataLakeStorage#duration}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#name DataProtectionBackupPolicyDataLakeStorage#name}.

---

##### `AbsoluteCriteria`<sup>Optional</sup> <a name="AbsoluteCriteria" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.absoluteCriteria"></a>

```csharp
public string AbsoluteCriteria { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#absolute_criteria DataProtectionBackupPolicyDataLakeStorage#absolute_criteria}.

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#days_of_week DataProtectionBackupPolicyDataLakeStorage#days_of_week}.

---

##### `MonthsOfYear`<sup>Optional</sup> <a name="MonthsOfYear" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.monthsOfYear"></a>

```csharp
public string[] MonthsOfYear { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#months_of_year DataProtectionBackupPolicyDataLakeStorage#months_of_year}.

---

##### `ScheduledBackupTimes`<sup>Optional</sup> <a name="ScheduledBackupTimes" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.scheduledBackupTimes"></a>

```csharp
public string[] ScheduledBackupTimes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#scheduled_backup_times DataProtectionBackupPolicyDataLakeStorage#scheduled_backup_times}.

---

##### `WeeksOfMonth`<sup>Optional</sup> <a name="WeeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.weeksOfMonth"></a>

```csharp
public string[] WeeksOfMonth { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#weeks_of_month DataProtectionBackupPolicyDataLakeStorage#weeks_of_month}.

---

### DataProtectionBackupPolicyDataLakeStorageTimeouts <a name="DataProtectionBackupPolicyDataLakeStorageTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupPolicyDataLakeStorageTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#create DataProtectionBackupPolicyDataLakeStorage#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#delete DataProtectionBackupPolicyDataLakeStorage#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#read DataProtectionBackupPolicyDataLakeStorage#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#create DataProtectionBackupPolicyDataLakeStorage#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#delete DataProtectionBackupPolicyDataLakeStorage#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_protection_backup_policy_data_lake_storage#read DataProtectionBackupPolicyDataLakeStorage#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupPolicyDataLakeStorageRetentionRuleList <a name="DataProtectionBackupPolicyDataLakeStorageRetentionRuleList" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupPolicyDataLakeStorageRetentionRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.get"></a>

```csharp
private DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule">DataProtectionBackupPolicyDataLakeStorageRetentionRule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.property.internalValue"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyDataLakeStorageRetentionRule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule">DataProtectionBackupPolicyDataLakeStorageRetentionRule</a>[]

---


### DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference <a name="DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resetAbsoluteCriteria">ResetAbsoluteCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resetMonthsOfYear">ResetMonthsOfYear</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resetScheduledBackupTimes">ResetScheduledBackupTimes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resetWeeksOfMonth">ResetWeeksOfMonth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAbsoluteCriteria` <a name="ResetAbsoluteCriteria" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resetAbsoluteCriteria"></a>

```csharp
private void ResetAbsoluteCriteria()
```

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resetDaysOfWeek"></a>

```csharp
private void ResetDaysOfWeek()
```

##### `ResetMonthsOfYear` <a name="ResetMonthsOfYear" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resetMonthsOfYear"></a>

```csharp
private void ResetMonthsOfYear()
```

##### `ResetScheduledBackupTimes` <a name="ResetScheduledBackupTimes" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resetScheduledBackupTimes"></a>

```csharp
private void ResetScheduledBackupTimes()
```

##### `ResetWeeksOfMonth` <a name="ResetWeeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resetWeeksOfMonth"></a>

```csharp
private void ResetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.absoluteCriteriaInput">AbsoluteCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.monthsOfYearInput">MonthsOfYearInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.scheduledBackupTimesInput">ScheduledBackupTimesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.weeksOfMonthInput">WeeksOfMonthInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.absoluteCriteria">AbsoluteCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.monthsOfYear">MonthsOfYear</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.scheduledBackupTimes">ScheduledBackupTimes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule">DataProtectionBackupPolicyDataLakeStorageRetentionRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AbsoluteCriteriaInput`<sup>Optional</sup> <a name="AbsoluteCriteriaInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.absoluteCriteriaInput"></a>

```csharp
public string AbsoluteCriteriaInput { get; }
```

- *Type:* string

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.daysOfWeekInput"></a>

```csharp
public string[] DaysOfWeekInput { get; }
```

- *Type:* string[]

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `MonthsOfYearInput`<sup>Optional</sup> <a name="MonthsOfYearInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.monthsOfYearInput"></a>

```csharp
public string[] MonthsOfYearInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ScheduledBackupTimesInput`<sup>Optional</sup> <a name="ScheduledBackupTimesInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.scheduledBackupTimesInput"></a>

```csharp
public string[] ScheduledBackupTimesInput { get; }
```

- *Type:* string[]

---

##### `WeeksOfMonthInput`<sup>Optional</sup> <a name="WeeksOfMonthInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.weeksOfMonthInput"></a>

```csharp
public string[] WeeksOfMonthInput { get; }
```

- *Type:* string[]

---

##### `AbsoluteCriteria`<sup>Required</sup> <a name="AbsoluteCriteria" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.absoluteCriteria"></a>

```csharp
public string AbsoluteCriteria { get; }
```

- *Type:* string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; }
```

- *Type:* string[]

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `MonthsOfYear`<sup>Required</sup> <a name="MonthsOfYear" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.monthsOfYear"></a>

```csharp
public string[] MonthsOfYear { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ScheduledBackupTimes`<sup>Required</sup> <a name="ScheduledBackupTimes" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.scheduledBackupTimes"></a>

```csharp
public string[] ScheduledBackupTimes { get; }
```

- *Type:* string[]

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.weeksOfMonth"></a>

```csharp
public string[] WeeksOfMonth { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyDataLakeStorageRetentionRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule">DataProtectionBackupPolicyDataLakeStorageRetentionRule</a>

---


### DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference <a name="DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts">DataProtectionBackupPolicyDataLakeStorageTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyDataLakeStorageTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts">DataProtectionBackupPolicyDataLakeStorageTimeouts</a>

---



