# `dataProtectionBackupPolicyPostgresql` Submodule <a name="`dataProtectionBackupPolicyPostgresql` Submodule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupPolicyPostgresql <a name="DataProtectionBackupPolicyPostgresql" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql azurerm_data_protection_backup_policy_postgresql}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupPolicyPostgresql(Construct Scope, string Id, DataProtectionBackupPolicyPostgresqlConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig">DataProtectionBackupPolicyPostgresqlConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig">DataProtectionBackupPolicyPostgresqlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.putRetentionRule">PutRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.resetRetentionRule">ResetRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRetentionRule` <a name="PutRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.putRetentionRule"></a>

```csharp
private void PutRetentionRule(IResolvable|DataProtectionBackupPolicyPostgresqlRetentionRule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.putRetentionRule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule">DataProtectionBackupPolicyPostgresqlRetentionRule</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.putTimeouts"></a>

```csharp
private void PutTimeouts(DataProtectionBackupPolicyPostgresqlTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts">DataProtectionBackupPolicyPostgresqlTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRetentionRule` <a name="ResetRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.resetRetentionRule"></a>

```csharp
private void ResetRetentionRule()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataProtectionBackupPolicyPostgresql resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataProtectionBackupPolicyPostgresql.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataProtectionBackupPolicyPostgresql.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataProtectionBackupPolicyPostgresql.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataProtectionBackupPolicyPostgresql.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataProtectionBackupPolicyPostgresql resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataProtectionBackupPolicyPostgresql to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataProtectionBackupPolicyPostgresql that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupPolicyPostgresql to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.retentionRule">RetentionRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList">DataProtectionBackupPolicyPostgresqlRetentionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference">DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.backupRepeatingTimeIntervalsInput">BackupRepeatingTimeIntervalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.defaultRetentionDurationInput">DefaultRetentionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.retentionRuleInput">RetentionRuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule">DataProtectionBackupPolicyPostgresqlRetentionRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts">DataProtectionBackupPolicyPostgresqlTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.vaultNameInput">VaultNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.backupRepeatingTimeIntervals">BackupRepeatingTimeIntervals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.defaultRetentionDuration">DefaultRetentionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.vaultName">VaultName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `RetentionRule`<sup>Required</sup> <a name="RetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.retentionRule"></a>

```csharp
public DataProtectionBackupPolicyPostgresqlRetentionRuleList RetentionRule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList">DataProtectionBackupPolicyPostgresqlRetentionRuleList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.timeouts"></a>

```csharp
public DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference">DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference</a>

---

##### `BackupRepeatingTimeIntervalsInput`<sup>Optional</sup> <a name="BackupRepeatingTimeIntervalsInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.backupRepeatingTimeIntervalsInput"></a>

```csharp
public string[] BackupRepeatingTimeIntervalsInput { get; }
```

- *Type:* string[]

---

##### `DefaultRetentionDurationInput`<sup>Optional</sup> <a name="DefaultRetentionDurationInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.defaultRetentionDurationInput"></a>

```csharp
public string DefaultRetentionDurationInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `RetentionRuleInput`<sup>Optional</sup> <a name="RetentionRuleInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.retentionRuleInput"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyPostgresqlRetentionRule[] RetentionRuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule">DataProtectionBackupPolicyPostgresqlRetentionRule</a>[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.timeoutsInput"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyPostgresqlTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts">DataProtectionBackupPolicyPostgresqlTimeouts</a>

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `VaultNameInput`<sup>Optional</sup> <a name="VaultNameInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.vaultNameInput"></a>

```csharp
public string VaultNameInput { get; }
```

- *Type:* string

---

##### `BackupRepeatingTimeIntervals`<sup>Required</sup> <a name="BackupRepeatingTimeIntervals" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.backupRepeatingTimeIntervals"></a>

```csharp
public string[] BackupRepeatingTimeIntervals { get; }
```

- *Type:* string[]

---

##### `DefaultRetentionDuration`<sup>Required</sup> <a name="DefaultRetentionDuration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.defaultRetentionDuration"></a>

```csharp
public string DefaultRetentionDuration { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `VaultName`<sup>Required</sup> <a name="VaultName" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.vaultName"></a>

```csharp
public string VaultName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresql.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupPolicyPostgresqlConfig <a name="DataProtectionBackupPolicyPostgresqlConfig" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupPolicyPostgresqlConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] BackupRepeatingTimeIntervals,
    string DefaultRetentionDuration,
    string Name,
    string ResourceGroupName,
    string VaultName,
    string Id = null,
    IResolvable|DataProtectionBackupPolicyPostgresqlRetentionRule[] RetentionRule = null,
    DataProtectionBackupPolicyPostgresqlTimeouts Timeouts = null,
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.backupRepeatingTimeIntervals">BackupRepeatingTimeIntervals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#backup_repeating_time_intervals DataProtectionBackupPolicyPostgresql#backup_repeating_time_intervals}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.defaultRetentionDuration">DefaultRetentionDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#default_retention_duration DataProtectionBackupPolicyPostgresql#default_retention_duration}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#name DataProtectionBackupPolicyPostgresql#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#resource_group_name DataProtectionBackupPolicyPostgresql#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.vaultName">VaultName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#vault_name DataProtectionBackupPolicyPostgresql#vault_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#id DataProtectionBackupPolicyPostgresql#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.retentionRule">RetentionRule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule">DataProtectionBackupPolicyPostgresqlRetentionRule</a>[]</code> | retention_rule block. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts">DataProtectionBackupPolicyPostgresqlTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#time_zone DataProtectionBackupPolicyPostgresql#time_zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BackupRepeatingTimeIntervals`<sup>Required</sup> <a name="BackupRepeatingTimeIntervals" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.backupRepeatingTimeIntervals"></a>

```csharp
public string[] BackupRepeatingTimeIntervals { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#backup_repeating_time_intervals DataProtectionBackupPolicyPostgresql#backup_repeating_time_intervals}.

---

##### `DefaultRetentionDuration`<sup>Required</sup> <a name="DefaultRetentionDuration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.defaultRetentionDuration"></a>

```csharp
public string DefaultRetentionDuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#default_retention_duration DataProtectionBackupPolicyPostgresql#default_retention_duration}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#name DataProtectionBackupPolicyPostgresql#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#resource_group_name DataProtectionBackupPolicyPostgresql#resource_group_name}.

---

##### `VaultName`<sup>Required</sup> <a name="VaultName" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.vaultName"></a>

```csharp
public string VaultName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#vault_name DataProtectionBackupPolicyPostgresql#vault_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#id DataProtectionBackupPolicyPostgresql#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RetentionRule`<sup>Optional</sup> <a name="RetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.retentionRule"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyPostgresqlRetentionRule[] RetentionRule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule">DataProtectionBackupPolicyPostgresqlRetentionRule</a>[]

retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#retention_rule DataProtectionBackupPolicyPostgresql#retention_rule}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.timeouts"></a>

```csharp
public DataProtectionBackupPolicyPostgresqlTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts">DataProtectionBackupPolicyPostgresqlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#timeouts DataProtectionBackupPolicyPostgresql#timeouts}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlConfig.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#time_zone DataProtectionBackupPolicyPostgresql#time_zone}.

---

### DataProtectionBackupPolicyPostgresqlRetentionRule <a name="DataProtectionBackupPolicyPostgresqlRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupPolicyPostgresqlRetentionRule {
    DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria Criteria,
    string Duration,
    string Name,
    double Priority
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule.property.criteria">Criteria</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria</a></code> | criteria block. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule.property.duration">Duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#duration DataProtectionBackupPolicyPostgresql#duration}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#name DataProtectionBackupPolicyPostgresql#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#priority DataProtectionBackupPolicyPostgresql#priority}. |

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule.property.criteria"></a>

```csharp
public DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria Criteria { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#criteria DataProtectionBackupPolicyPostgresql#criteria}

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#duration DataProtectionBackupPolicyPostgresql#duration}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#name DataProtectionBackupPolicyPostgresql#name}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#priority DataProtectionBackupPolicyPostgresql#priority}.

---

### DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria <a name="DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria {
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
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria.property.absoluteCriteria">AbsoluteCriteria</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#absolute_criteria DataProtectionBackupPolicyPostgresql#absolute_criteria}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#days_of_week DataProtectionBackupPolicyPostgresql#days_of_week}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria.property.monthsOfYear">MonthsOfYear</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#months_of_year DataProtectionBackupPolicyPostgresql#months_of_year}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria.property.scheduledBackupTimes">ScheduledBackupTimes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#scheduled_backup_times DataProtectionBackupPolicyPostgresql#scheduled_backup_times}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#weeks_of_month DataProtectionBackupPolicyPostgresql#weeks_of_month}. |

---

##### `AbsoluteCriteria`<sup>Optional</sup> <a name="AbsoluteCriteria" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria.property.absoluteCriteria"></a>

```csharp
public string AbsoluteCriteria { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#absolute_criteria DataProtectionBackupPolicyPostgresql#absolute_criteria}.

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#days_of_week DataProtectionBackupPolicyPostgresql#days_of_week}.

---

##### `MonthsOfYear`<sup>Optional</sup> <a name="MonthsOfYear" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria.property.monthsOfYear"></a>

```csharp
public string[] MonthsOfYear { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#months_of_year DataProtectionBackupPolicyPostgresql#months_of_year}.

---

##### `ScheduledBackupTimes`<sup>Optional</sup> <a name="ScheduledBackupTimes" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria.property.scheduledBackupTimes"></a>

```csharp
public string[] ScheduledBackupTimes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#scheduled_backup_times DataProtectionBackupPolicyPostgresql#scheduled_backup_times}.

---

##### `WeeksOfMonth`<sup>Optional</sup> <a name="WeeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria.property.weeksOfMonth"></a>

```csharp
public string[] WeeksOfMonth { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#weeks_of_month DataProtectionBackupPolicyPostgresql#weeks_of_month}.

---

### DataProtectionBackupPolicyPostgresqlTimeouts <a name="DataProtectionBackupPolicyPostgresqlTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupPolicyPostgresqlTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#create DataProtectionBackupPolicyPostgresql#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#delete DataProtectionBackupPolicyPostgresql#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#read DataProtectionBackupPolicyPostgresql#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#create DataProtectionBackupPolicyPostgresql#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#delete DataProtectionBackupPolicyPostgresql#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_protection_backup_policy_postgresql#read DataProtectionBackupPolicyPostgresql#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference <a name="DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.resetAbsoluteCriteria">ResetAbsoluteCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.resetMonthsOfYear">ResetMonthsOfYear</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.resetScheduledBackupTimes">ResetScheduledBackupTimes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.resetWeeksOfMonth">ResetWeeksOfMonth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAbsoluteCriteria` <a name="ResetAbsoluteCriteria" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.resetAbsoluteCriteria"></a>

```csharp
private void ResetAbsoluteCriteria()
```

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.resetDaysOfWeek"></a>

```csharp
private void ResetDaysOfWeek()
```

##### `ResetMonthsOfYear` <a name="ResetMonthsOfYear" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.resetMonthsOfYear"></a>

```csharp
private void ResetMonthsOfYear()
```

##### `ResetScheduledBackupTimes` <a name="ResetScheduledBackupTimes" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.resetScheduledBackupTimes"></a>

```csharp
private void ResetScheduledBackupTimes()
```

##### `ResetWeeksOfMonth` <a name="ResetWeeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.resetWeeksOfMonth"></a>

```csharp
private void ResetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.absoluteCriteriaInput">AbsoluteCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.monthsOfYearInput">MonthsOfYearInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.scheduledBackupTimesInput">ScheduledBackupTimesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.weeksOfMonthInput">WeeksOfMonthInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.absoluteCriteria">AbsoluteCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.monthsOfYear">MonthsOfYear</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.scheduledBackupTimes">ScheduledBackupTimes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AbsoluteCriteriaInput`<sup>Optional</sup> <a name="AbsoluteCriteriaInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.absoluteCriteriaInput"></a>

```csharp
public string AbsoluteCriteriaInput { get; }
```

- *Type:* string

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.daysOfWeekInput"></a>

```csharp
public string[] DaysOfWeekInput { get; }
```

- *Type:* string[]

---

##### `MonthsOfYearInput`<sup>Optional</sup> <a name="MonthsOfYearInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.monthsOfYearInput"></a>

```csharp
public string[] MonthsOfYearInput { get; }
```

- *Type:* string[]

---

##### `ScheduledBackupTimesInput`<sup>Optional</sup> <a name="ScheduledBackupTimesInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.scheduledBackupTimesInput"></a>

```csharp
public string[] ScheduledBackupTimesInput { get; }
```

- *Type:* string[]

---

##### `WeeksOfMonthInput`<sup>Optional</sup> <a name="WeeksOfMonthInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.weeksOfMonthInput"></a>

```csharp
public string[] WeeksOfMonthInput { get; }
```

- *Type:* string[]

---

##### `AbsoluteCriteria`<sup>Required</sup> <a name="AbsoluteCriteria" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.absoluteCriteria"></a>

```csharp
public string AbsoluteCriteria { get; }
```

- *Type:* string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; }
```

- *Type:* string[]

---

##### `MonthsOfYear`<sup>Required</sup> <a name="MonthsOfYear" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.monthsOfYear"></a>

```csharp
public string[] MonthsOfYear { get; }
```

- *Type:* string[]

---

##### `ScheduledBackupTimes`<sup>Required</sup> <a name="ScheduledBackupTimes" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.scheduledBackupTimes"></a>

```csharp
public string[] ScheduledBackupTimes { get; }
```

- *Type:* string[]

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.weeksOfMonth"></a>

```csharp
public string[] WeeksOfMonth { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference.property.internalValue"></a>

```csharp
public DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria</a>

---


### DataProtectionBackupPolicyPostgresqlRetentionRuleList <a name="DataProtectionBackupPolicyPostgresqlRetentionRuleList" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupPolicyPostgresqlRetentionRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.get"></a>

```csharp
private DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule">DataProtectionBackupPolicyPostgresqlRetentionRule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleList.property.internalValue"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyPostgresqlRetentionRule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule">DataProtectionBackupPolicyPostgresqlRetentionRule</a>[]

---


### DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference <a name="DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.putCriteria">PutCriteria</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCriteria` <a name="PutCriteria" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.putCriteria"></a>

```csharp
private void PutCriteria(DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.criteria">Criteria</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference">DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.criteriaInput">CriteriaInput</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule">DataProtectionBackupPolicyPostgresqlRetentionRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.criteria"></a>

```csharp
public DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference Criteria { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference">DataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaOutputReference</a>

---

##### `CriteriaInput`<sup>Optional</sup> <a name="CriteriaInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.criteriaInput"></a>

```csharp
public DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria CriteriaInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria</a>

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyPostgresqlRetentionRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlRetentionRule">DataProtectionBackupPolicyPostgresqlRetentionRule</a>

---


### DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference <a name="DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts">DataProtectionBackupPolicyPostgresqlTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyPostgresqlTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyPostgresql.DataProtectionBackupPolicyPostgresqlTimeouts">DataProtectionBackupPolicyPostgresqlTimeouts</a>

---



