# `dataProtectionBackupInstanceCosmosdbAccount` Submodule <a name="`dataProtectionBackupInstanceCosmosdbAccount` Submodule" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupInstanceCosmosdbAccount <a name="DataProtectionBackupInstanceCosmosdbAccount" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account azurerm_data_protection_backup_instance_cosmosdb_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupInstanceCosmosdbAccount(Construct Scope, string Id, DataProtectionBackupInstanceCosmosdbAccountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig">DataProtectionBackupInstanceCosmosdbAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig">DataProtectionBackupInstanceCosmosdbAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.putTimeouts"></a>

```csharp
private void PutTimeouts(DataProtectionBackupInstanceCosmosdbAccountTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeouts">DataProtectionBackupInstanceCosmosdbAccountTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataProtectionBackupInstanceCosmosdbAccount resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataProtectionBackupInstanceCosmosdbAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataProtectionBackupInstanceCosmosdbAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataProtectionBackupInstanceCosmosdbAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataProtectionBackupInstanceCosmosdbAccount.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataProtectionBackupInstanceCosmosdbAccount resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataProtectionBackupInstanceCosmosdbAccount to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataProtectionBackupInstanceCosmosdbAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupInstanceCosmosdbAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.protectionState">ProtectionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference">DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.cosmosdbAccountIdInput">CosmosdbAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.dataProtectionBackupPolicyCosmosdbAccountIdInput">DataProtectionBackupPolicyCosmosdbAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.dataProtectionBackupVaultIdInput">DataProtectionBackupVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeouts">DataProtectionBackupInstanceCosmosdbAccountTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.cosmosdbAccountId">CosmosdbAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.dataProtectionBackupPolicyCosmosdbAccountId">DataProtectionBackupPolicyCosmosdbAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.dataProtectionBackupVaultId">DataProtectionBackupVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ProtectionState`<sup>Required</sup> <a name="ProtectionState" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.protectionState"></a>

```csharp
public string ProtectionState { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.timeouts"></a>

```csharp
public DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference">DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference</a>

---

##### `CosmosdbAccountIdInput`<sup>Optional</sup> <a name="CosmosdbAccountIdInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.cosmosdbAccountIdInput"></a>

```csharp
public string CosmosdbAccountIdInput { get; }
```

- *Type:* string

---

##### `DataProtectionBackupPolicyCosmosdbAccountIdInput`<sup>Optional</sup> <a name="DataProtectionBackupPolicyCosmosdbAccountIdInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.dataProtectionBackupPolicyCosmosdbAccountIdInput"></a>

```csharp
public string DataProtectionBackupPolicyCosmosdbAccountIdInput { get; }
```

- *Type:* string

---

##### `DataProtectionBackupVaultIdInput`<sup>Optional</sup> <a name="DataProtectionBackupVaultIdInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.dataProtectionBackupVaultIdInput"></a>

```csharp
public string DataProtectionBackupVaultIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.timeoutsInput"></a>

```csharp
public IResolvable|DataProtectionBackupInstanceCosmosdbAccountTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeouts">DataProtectionBackupInstanceCosmosdbAccountTimeouts</a>

---

##### `CosmosdbAccountId`<sup>Required</sup> <a name="CosmosdbAccountId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.cosmosdbAccountId"></a>

```csharp
public string CosmosdbAccountId { get; }
```

- *Type:* string

---

##### `DataProtectionBackupPolicyCosmosdbAccountId`<sup>Required</sup> <a name="DataProtectionBackupPolicyCosmosdbAccountId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.dataProtectionBackupPolicyCosmosdbAccountId"></a>

```csharp
public string DataProtectionBackupPolicyCosmosdbAccountId { get; }
```

- *Type:* string

---

##### `DataProtectionBackupVaultId`<sup>Required</sup> <a name="DataProtectionBackupVaultId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.dataProtectionBackupVaultId"></a>

```csharp
public string DataProtectionBackupVaultId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupInstanceCosmosdbAccountConfig <a name="DataProtectionBackupInstanceCosmosdbAccountConfig" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupInstanceCosmosdbAccountConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CosmosdbAccountId,
    string DataProtectionBackupPolicyCosmosdbAccountId,
    string DataProtectionBackupVaultId,
    string Location,
    string Name,
    string Id = null,
    DataProtectionBackupInstanceCosmosdbAccountTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.cosmosdbAccountId">CosmosdbAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#cosmosdb_account_id DataProtectionBackupInstanceCosmosdbAccount#cosmosdb_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.dataProtectionBackupPolicyCosmosdbAccountId">DataProtectionBackupPolicyCosmosdbAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#data_protection_backup_policy_cosmosdb_account_id DataProtectionBackupInstanceCosmosdbAccount#data_protection_backup_policy_cosmosdb_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.dataProtectionBackupVaultId">DataProtectionBackupVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#data_protection_backup_vault_id DataProtectionBackupInstanceCosmosdbAccount#data_protection_backup_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#location DataProtectionBackupInstanceCosmosdbAccount#location}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#name DataProtectionBackupInstanceCosmosdbAccount#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#id DataProtectionBackupInstanceCosmosdbAccount#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeouts">DataProtectionBackupInstanceCosmosdbAccountTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CosmosdbAccountId`<sup>Required</sup> <a name="CosmosdbAccountId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.cosmosdbAccountId"></a>

```csharp
public string CosmosdbAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#cosmosdb_account_id DataProtectionBackupInstanceCosmosdbAccount#cosmosdb_account_id}.

---

##### `DataProtectionBackupPolicyCosmosdbAccountId`<sup>Required</sup> <a name="DataProtectionBackupPolicyCosmosdbAccountId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.dataProtectionBackupPolicyCosmosdbAccountId"></a>

```csharp
public string DataProtectionBackupPolicyCosmosdbAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#data_protection_backup_policy_cosmosdb_account_id DataProtectionBackupInstanceCosmosdbAccount#data_protection_backup_policy_cosmosdb_account_id}.

---

##### `DataProtectionBackupVaultId`<sup>Required</sup> <a name="DataProtectionBackupVaultId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.dataProtectionBackupVaultId"></a>

```csharp
public string DataProtectionBackupVaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#data_protection_backup_vault_id DataProtectionBackupInstanceCosmosdbAccount#data_protection_backup_vault_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#location DataProtectionBackupInstanceCosmosdbAccount#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#name DataProtectionBackupInstanceCosmosdbAccount#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#id DataProtectionBackupInstanceCosmosdbAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.timeouts"></a>

```csharp
public DataProtectionBackupInstanceCosmosdbAccountTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeouts">DataProtectionBackupInstanceCosmosdbAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#timeouts DataProtectionBackupInstanceCosmosdbAccount#timeouts}

---

### DataProtectionBackupInstanceCosmosdbAccountTimeouts <a name="DataProtectionBackupInstanceCosmosdbAccountTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupInstanceCosmosdbAccountTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#create DataProtectionBackupInstanceCosmosdbAccount#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#delete DataProtectionBackupInstanceCosmosdbAccount#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#read DataProtectionBackupInstanceCosmosdbAccount#read}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#update DataProtectionBackupInstanceCosmosdbAccount#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#create DataProtectionBackupInstanceCosmosdbAccount#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#delete DataProtectionBackupInstanceCosmosdbAccount#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#read DataProtectionBackupInstanceCosmosdbAccount#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#update DataProtectionBackupInstanceCosmosdbAccount#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference <a name="DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeouts">DataProtectionBackupInstanceCosmosdbAccountTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataProtectionBackupInstanceCosmosdbAccountTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeouts">DataProtectionBackupInstanceCosmosdbAccountTimeouts</a>

---



