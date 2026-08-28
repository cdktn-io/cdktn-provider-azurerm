# `dataProtectionBackupInstanceDataLakeStorage` Submodule <a name="`dataProtectionBackupInstanceDataLakeStorage` Submodule" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupInstanceDataLakeStorage <a name="DataProtectionBackupInstanceDataLakeStorage" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_protection_backup_instance_data_lake_storage azurerm_data_protection_backup_instance_data_lake_storage}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupInstanceDataLakeStorage(Construct Scope, string Id, DataProtectionBackupInstanceDataLakeStorageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig">DataProtectionBackupInstanceDataLakeStorageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig">DataProtectionBackupInstanceDataLakeStorageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.putTimeouts"></a>

```csharp
private void PutTimeouts(DataProtectionBackupInstanceDataLakeStorageTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts">DataProtectionBackupInstanceDataLakeStorageTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataProtectionBackupInstanceDataLakeStorage resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataProtectionBackupInstanceDataLakeStorage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataProtectionBackupInstanceDataLakeStorage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataProtectionBackupInstanceDataLakeStorage.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataProtectionBackupInstanceDataLakeStorage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataProtectionBackupInstanceDataLakeStorage resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataProtectionBackupInstanceDataLakeStorage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataProtectionBackupInstanceDataLakeStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_protection_backup_instance_data_lake_storage#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupInstanceDataLakeStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.protectionState">ProtectionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference">DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.backupPolicyDataLakeStorageIdInput">BackupPolicyDataLakeStorageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.dataProtectionBackupVaultIdInput">DataProtectionBackupVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.storageContainerNamesInput">StorageContainerNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts">DataProtectionBackupInstanceDataLakeStorageTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.backupPolicyDataLakeStorageId">BackupPolicyDataLakeStorageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.dataProtectionBackupVaultId">DataProtectionBackupVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.storageContainerNames">StorageContainerNames</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ProtectionState`<sup>Required</sup> <a name="ProtectionState" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.protectionState"></a>

```csharp
public string ProtectionState { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.timeouts"></a>

```csharp
public DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference">DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference</a>

---

##### `BackupPolicyDataLakeStorageIdInput`<sup>Optional</sup> <a name="BackupPolicyDataLakeStorageIdInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.backupPolicyDataLakeStorageIdInput"></a>

```csharp
public string BackupPolicyDataLakeStorageIdInput { get; }
```

- *Type:* string

---

##### `DataProtectionBackupVaultIdInput`<sup>Optional</sup> <a name="DataProtectionBackupVaultIdInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.dataProtectionBackupVaultIdInput"></a>

```csharp
public string DataProtectionBackupVaultIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.storageAccountIdInput"></a>

```csharp
public string StorageAccountIdInput { get; }
```

- *Type:* string

---

##### `StorageContainerNamesInput`<sup>Optional</sup> <a name="StorageContainerNamesInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.storageContainerNamesInput"></a>

```csharp
public string[] StorageContainerNamesInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.timeoutsInput"></a>

```csharp
public IResolvable|DataProtectionBackupInstanceDataLakeStorageTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts">DataProtectionBackupInstanceDataLakeStorageTimeouts</a>

---

##### `BackupPolicyDataLakeStorageId`<sup>Required</sup> <a name="BackupPolicyDataLakeStorageId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.backupPolicyDataLakeStorageId"></a>

```csharp
public string BackupPolicyDataLakeStorageId { get; }
```

- *Type:* string

---

##### `DataProtectionBackupVaultId`<sup>Required</sup> <a name="DataProtectionBackupVaultId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.dataProtectionBackupVaultId"></a>

```csharp
public string DataProtectionBackupVaultId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; }
```

- *Type:* string

---

##### `StorageContainerNames`<sup>Required</sup> <a name="StorageContainerNames" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.storageContainerNames"></a>

```csharp
public string[] StorageContainerNames { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupInstanceDataLakeStorageConfig <a name="DataProtectionBackupInstanceDataLakeStorageConfig" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupInstanceDataLakeStorageConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BackupPolicyDataLakeStorageId,
    string DataProtectionBackupVaultId,
    string Location,
    string Name,
    string StorageAccountId,
    string[] StorageContainerNames,
    string Id = null,
    DataProtectionBackupInstanceDataLakeStorageTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.backupPolicyDataLakeStorageId">BackupPolicyDataLakeStorageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_protection_backup_instance_data_lake_storage#backup_policy_data_lake_storage_id DataProtectionBackupInstanceDataLakeStorage#backup_policy_data_lake_storage_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.dataProtectionBackupVaultId">DataProtectionBackupVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_protection_backup_instance_data_lake_storage#data_protection_backup_vault_id DataProtectionBackupInstanceDataLakeStorage#data_protection_backup_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_protection_backup_instance_data_lake_storage#location DataProtectionBackupInstanceDataLakeStorage#location}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_protection_backup_instance_data_lake_storage#name DataProtectionBackupInstanceDataLakeStorage#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_protection_backup_instance_data_lake_storage#storage_account_id DataProtectionBackupInstanceDataLakeStorage#storage_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.storageContainerNames">StorageContainerNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_protection_backup_instance_data_lake_storage#storage_container_names DataProtectionBackupInstanceDataLakeStorage#storage_container_names}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_protection_backup_instance_data_lake_storage#id DataProtectionBackupInstanceDataLakeStorage#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts">DataProtectionBackupInstanceDataLakeStorageTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BackupPolicyDataLakeStorageId`<sup>Required</sup> <a name="BackupPolicyDataLakeStorageId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.backupPolicyDataLakeStorageId"></a>

```csharp
public string BackupPolicyDataLakeStorageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_protection_backup_instance_data_lake_storage#backup_policy_data_lake_storage_id DataProtectionBackupInstanceDataLakeStorage#backup_policy_data_lake_storage_id}.

---

##### `DataProtectionBackupVaultId`<sup>Required</sup> <a name="DataProtectionBackupVaultId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.dataProtectionBackupVaultId"></a>

```csharp
public string DataProtectionBackupVaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_protection_backup_instance_data_lake_storage#data_protection_backup_vault_id DataProtectionBackupInstanceDataLakeStorage#data_protection_backup_vault_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_protection_backup_instance_data_lake_storage#location DataProtectionBackupInstanceDataLakeStorage#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_protection_backup_instance_data_lake_storage#name DataProtectionBackupInstanceDataLakeStorage#name}.

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_protection_backup_instance_data_lake_storage#storage_account_id DataProtectionBackupInstanceDataLakeStorage#storage_account_id}.

---

##### `StorageContainerNames`<sup>Required</sup> <a name="StorageContainerNames" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.storageContainerNames"></a>

```csharp
public string[] StorageContainerNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_protection_backup_instance_data_lake_storage#storage_container_names DataProtectionBackupInstanceDataLakeStorage#storage_container_names}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_protection_backup_instance_data_lake_storage#id DataProtectionBackupInstanceDataLakeStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.timeouts"></a>

```csharp
public DataProtectionBackupInstanceDataLakeStorageTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts">DataProtectionBackupInstanceDataLakeStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_protection_backup_instance_data_lake_storage#timeouts DataProtectionBackupInstanceDataLakeStorage#timeouts}

---

### DataProtectionBackupInstanceDataLakeStorageTimeouts <a name="DataProtectionBackupInstanceDataLakeStorageTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupInstanceDataLakeStorageTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_protection_backup_instance_data_lake_storage#create DataProtectionBackupInstanceDataLakeStorage#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_protection_backup_instance_data_lake_storage#delete DataProtectionBackupInstanceDataLakeStorage#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_protection_backup_instance_data_lake_storage#read DataProtectionBackupInstanceDataLakeStorage#read}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_protection_backup_instance_data_lake_storage#update DataProtectionBackupInstanceDataLakeStorage#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_protection_backup_instance_data_lake_storage#create DataProtectionBackupInstanceDataLakeStorage#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_protection_backup_instance_data_lake_storage#delete DataProtectionBackupInstanceDataLakeStorage#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_protection_backup_instance_data_lake_storage#read DataProtectionBackupInstanceDataLakeStorage#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_protection_backup_instance_data_lake_storage#update DataProtectionBackupInstanceDataLakeStorage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference <a name="DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts">DataProtectionBackupInstanceDataLakeStorageTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataProtectionBackupInstanceDataLakeStorageTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts">DataProtectionBackupInstanceDataLakeStorageTimeouts</a>

---



