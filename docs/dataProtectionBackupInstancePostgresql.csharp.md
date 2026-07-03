# `dataProtectionBackupInstancePostgresql` Submodule <a name="`dataProtectionBackupInstancePostgresql` Submodule" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupInstancePostgresql <a name="DataProtectionBackupInstancePostgresql" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_protection_backup_instance_postgresql azurerm_data_protection_backup_instance_postgresql}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupInstancePostgresql(Construct Scope, string Id, DataProtectionBackupInstancePostgresqlConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig">DataProtectionBackupInstancePostgresqlConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig">DataProtectionBackupInstancePostgresqlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.resetDatabaseCredentialKeyVaultSecretId">ResetDatabaseCredentialKeyVaultSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.putTimeouts"></a>

```csharp
private void PutTimeouts(DataProtectionBackupInstancePostgresqlTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts">DataProtectionBackupInstancePostgresqlTimeouts</a>

---

##### `ResetDatabaseCredentialKeyVaultSecretId` <a name="ResetDatabaseCredentialKeyVaultSecretId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.resetDatabaseCredentialKeyVaultSecretId"></a>

```csharp
private void ResetDatabaseCredentialKeyVaultSecretId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataProtectionBackupInstancePostgresql resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataProtectionBackupInstancePostgresql.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataProtectionBackupInstancePostgresql.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataProtectionBackupInstancePostgresql.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataProtectionBackupInstancePostgresql.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataProtectionBackupInstancePostgresql resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataProtectionBackupInstancePostgresql to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataProtectionBackupInstancePostgresql that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_protection_backup_instance_postgresql#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupInstancePostgresql to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.protectionState">ProtectionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference">DataProtectionBackupInstancePostgresqlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.backupPolicyIdInput">BackupPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.databaseCredentialKeyVaultSecretIdInput">DatabaseCredentialKeyVaultSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.databaseIdInput">DatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts">DataProtectionBackupInstancePostgresqlTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.vaultIdInput">VaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.backupPolicyId">BackupPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.databaseCredentialKeyVaultSecretId">DatabaseCredentialKeyVaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.databaseId">DatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ProtectionState`<sup>Required</sup> <a name="ProtectionState" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.protectionState"></a>

```csharp
public string ProtectionState { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.timeouts"></a>

```csharp
public DataProtectionBackupInstancePostgresqlTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference">DataProtectionBackupInstancePostgresqlTimeoutsOutputReference</a>

---

##### `BackupPolicyIdInput`<sup>Optional</sup> <a name="BackupPolicyIdInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.backupPolicyIdInput"></a>

```csharp
public string BackupPolicyIdInput { get; }
```

- *Type:* string

---

##### `DatabaseCredentialKeyVaultSecretIdInput`<sup>Optional</sup> <a name="DatabaseCredentialKeyVaultSecretIdInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.databaseCredentialKeyVaultSecretIdInput"></a>

```csharp
public string DatabaseCredentialKeyVaultSecretIdInput { get; }
```

- *Type:* string

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.databaseIdInput"></a>

```csharp
public string DatabaseIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.timeoutsInput"></a>

```csharp
public IResolvable|DataProtectionBackupInstancePostgresqlTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts">DataProtectionBackupInstancePostgresqlTimeouts</a>

---

##### `VaultIdInput`<sup>Optional</sup> <a name="VaultIdInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.vaultIdInput"></a>

```csharp
public string VaultIdInput { get; }
```

- *Type:* string

---

##### `BackupPolicyId`<sup>Required</sup> <a name="BackupPolicyId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.backupPolicyId"></a>

```csharp
public string BackupPolicyId { get; }
```

- *Type:* string

---

##### `DatabaseCredentialKeyVaultSecretId`<sup>Required</sup> <a name="DatabaseCredentialKeyVaultSecretId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.databaseCredentialKeyVaultSecretId"></a>

```csharp
public string DatabaseCredentialKeyVaultSecretId { get; }
```

- *Type:* string

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.databaseId"></a>

```csharp
public string DatabaseId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupInstancePostgresqlConfig <a name="DataProtectionBackupInstancePostgresqlConfig" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupInstancePostgresqlConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BackupPolicyId,
    string DatabaseId,
    string Location,
    string Name,
    string VaultId,
    string DatabaseCredentialKeyVaultSecretId = null,
    string Id = null,
    DataProtectionBackupInstancePostgresqlTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.backupPolicyId">BackupPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_protection_backup_instance_postgresql#backup_policy_id DataProtectionBackupInstancePostgresql#backup_policy_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.databaseId">DatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_protection_backup_instance_postgresql#database_id DataProtectionBackupInstancePostgresql#database_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_protection_backup_instance_postgresql#location DataProtectionBackupInstancePostgresql#location}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_protection_backup_instance_postgresql#name DataProtectionBackupInstancePostgresql#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.vaultId">VaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_protection_backup_instance_postgresql#vault_id DataProtectionBackupInstancePostgresql#vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.databaseCredentialKeyVaultSecretId">DatabaseCredentialKeyVaultSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_protection_backup_instance_postgresql#database_credential_key_vault_secret_id DataProtectionBackupInstancePostgresql#database_credential_key_vault_secret_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_protection_backup_instance_postgresql#id DataProtectionBackupInstancePostgresql#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts">DataProtectionBackupInstancePostgresqlTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BackupPolicyId`<sup>Required</sup> <a name="BackupPolicyId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.backupPolicyId"></a>

```csharp
public string BackupPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_protection_backup_instance_postgresql#backup_policy_id DataProtectionBackupInstancePostgresql#backup_policy_id}.

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.databaseId"></a>

```csharp
public string DatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_protection_backup_instance_postgresql#database_id DataProtectionBackupInstancePostgresql#database_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_protection_backup_instance_postgresql#location DataProtectionBackupInstancePostgresql#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_protection_backup_instance_postgresql#name DataProtectionBackupInstancePostgresql#name}.

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.vaultId"></a>

```csharp
public string VaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_protection_backup_instance_postgresql#vault_id DataProtectionBackupInstancePostgresql#vault_id}.

---

##### `DatabaseCredentialKeyVaultSecretId`<sup>Optional</sup> <a name="DatabaseCredentialKeyVaultSecretId" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.databaseCredentialKeyVaultSecretId"></a>

```csharp
public string DatabaseCredentialKeyVaultSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_protection_backup_instance_postgresql#database_credential_key_vault_secret_id DataProtectionBackupInstancePostgresql#database_credential_key_vault_secret_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_protection_backup_instance_postgresql#id DataProtectionBackupInstancePostgresql#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.timeouts"></a>

```csharp
public DataProtectionBackupInstancePostgresqlTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts">DataProtectionBackupInstancePostgresqlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_protection_backup_instance_postgresql#timeouts DataProtectionBackupInstancePostgresql#timeouts}

---

### DataProtectionBackupInstancePostgresqlTimeouts <a name="DataProtectionBackupInstancePostgresqlTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupInstancePostgresqlTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_protection_backup_instance_postgresql#create DataProtectionBackupInstancePostgresql#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_protection_backup_instance_postgresql#delete DataProtectionBackupInstancePostgresql#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_protection_backup_instance_postgresql#read DataProtectionBackupInstancePostgresql#read}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_protection_backup_instance_postgresql#update DataProtectionBackupInstancePostgresql#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_protection_backup_instance_postgresql#create DataProtectionBackupInstancePostgresql#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_protection_backup_instance_postgresql#delete DataProtectionBackupInstancePostgresql#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_protection_backup_instance_postgresql#read DataProtectionBackupInstancePostgresql#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_protection_backup_instance_postgresql#update DataProtectionBackupInstancePostgresql#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupInstancePostgresqlTimeoutsOutputReference <a name="DataProtectionBackupInstancePostgresqlTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupInstancePostgresqlTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts">DataProtectionBackupInstancePostgresqlTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataProtectionBackupInstancePostgresqlTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts">DataProtectionBackupInstancePostgresqlTimeouts</a>

---



