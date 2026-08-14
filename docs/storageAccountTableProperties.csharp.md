# `storageAccountTableProperties` Submodule <a name="`storageAccountTableProperties` Submodule" id="@cdktn/provider-azurerm.storageAccountTableProperties"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageAccountTableProperties <a name="StorageAccountTableProperties" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties azurerm_storage_account_table_properties}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new StorageAccountTableProperties(Construct Scope, string Id, StorageAccountTablePropertiesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig">StorageAccountTablePropertiesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig">StorageAccountTablePropertiesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putCorsRule">PutCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putHourMetrics">PutHourMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putLogging">PutLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putMinuteMetrics">PutMinuteMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetCorsRule">ResetCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetHourMetrics">ResetHourMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetLogging">ResetLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetMinuteMetrics">ResetMinuteMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCorsRule` <a name="PutCorsRule" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putCorsRule"></a>

```csharp
private void PutCorsRule(IResolvable|StorageAccountTablePropertiesCorsRule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putCorsRule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule">StorageAccountTablePropertiesCorsRule</a>[]

---

##### `PutHourMetrics` <a name="PutHourMetrics" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putHourMetrics"></a>

```csharp
private void PutHourMetrics(StorageAccountTablePropertiesHourMetrics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putHourMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics">StorageAccountTablePropertiesHourMetrics</a>

---

##### `PutLogging` <a name="PutLogging" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putLogging"></a>

```csharp
private void PutLogging(StorageAccountTablePropertiesLogging Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging">StorageAccountTablePropertiesLogging</a>

---

##### `PutMinuteMetrics` <a name="PutMinuteMetrics" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putMinuteMetrics"></a>

```csharp
private void PutMinuteMetrics(StorageAccountTablePropertiesMinuteMetrics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putMinuteMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics">StorageAccountTablePropertiesMinuteMetrics</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putTimeouts"></a>

```csharp
private void PutTimeouts(StorageAccountTablePropertiesTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts">StorageAccountTablePropertiesTimeouts</a>

---

##### `ResetCorsRule` <a name="ResetCorsRule" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetCorsRule"></a>

```csharp
private void ResetCorsRule()
```

##### `ResetHourMetrics` <a name="ResetHourMetrics" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetHourMetrics"></a>

```csharp
private void ResetHourMetrics()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetLogging"></a>

```csharp
private void ResetLogging()
```

##### `ResetMinuteMetrics` <a name="ResetMinuteMetrics" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetMinuteMetrics"></a>

```csharp
private void ResetMinuteMetrics()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StorageAccountTableProperties resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

StorageAccountTableProperties.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

StorageAccountTableProperties.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

StorageAccountTableProperties.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

StorageAccountTableProperties.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a StorageAccountTableProperties resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageAccountTableProperties to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageAccountTableProperties that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the StorageAccountTableProperties to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.corsRule">CorsRule</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList">StorageAccountTablePropertiesCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.hourMetrics">HourMetrics</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference">StorageAccountTablePropertiesHourMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.logging">Logging</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference">StorageAccountTablePropertiesLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.minuteMetrics">MinuteMetrics</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference">StorageAccountTablePropertiesMinuteMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference">StorageAccountTablePropertiesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.corsRuleInput">CorsRuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule">StorageAccountTablePropertiesCorsRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.hourMetricsInput">HourMetricsInput</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics">StorageAccountTablePropertiesHourMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.loggingInput">LoggingInput</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging">StorageAccountTablePropertiesLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.minuteMetricsInput">MinuteMetricsInput</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics">StorageAccountTablePropertiesMinuteMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts">StorageAccountTablePropertiesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CorsRule`<sup>Required</sup> <a name="CorsRule" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.corsRule"></a>

```csharp
public StorageAccountTablePropertiesCorsRuleList CorsRule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList">StorageAccountTablePropertiesCorsRuleList</a>

---

##### `HourMetrics`<sup>Required</sup> <a name="HourMetrics" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.hourMetrics"></a>

```csharp
public StorageAccountTablePropertiesHourMetricsOutputReference HourMetrics { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference">StorageAccountTablePropertiesHourMetricsOutputReference</a>

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.logging"></a>

```csharp
public StorageAccountTablePropertiesLoggingOutputReference Logging { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference">StorageAccountTablePropertiesLoggingOutputReference</a>

---

##### `MinuteMetrics`<sup>Required</sup> <a name="MinuteMetrics" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.minuteMetrics"></a>

```csharp
public StorageAccountTablePropertiesMinuteMetricsOutputReference MinuteMetrics { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference">StorageAccountTablePropertiesMinuteMetricsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.timeouts"></a>

```csharp
public StorageAccountTablePropertiesTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference">StorageAccountTablePropertiesTimeoutsOutputReference</a>

---

##### `CorsRuleInput`<sup>Optional</sup> <a name="CorsRuleInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.corsRuleInput"></a>

```csharp
public IResolvable|StorageAccountTablePropertiesCorsRule[] CorsRuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule">StorageAccountTablePropertiesCorsRule</a>[]

---

##### `HourMetricsInput`<sup>Optional</sup> <a name="HourMetricsInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.hourMetricsInput"></a>

```csharp
public StorageAccountTablePropertiesHourMetrics HourMetricsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics">StorageAccountTablePropertiesHourMetrics</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.loggingInput"></a>

```csharp
public StorageAccountTablePropertiesLogging LoggingInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging">StorageAccountTablePropertiesLogging</a>

---

##### `MinuteMetricsInput`<sup>Optional</sup> <a name="MinuteMetricsInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.minuteMetricsInput"></a>

```csharp
public StorageAccountTablePropertiesMinuteMetrics MinuteMetricsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics">StorageAccountTablePropertiesMinuteMetrics</a>

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.storageAccountIdInput"></a>

```csharp
public string StorageAccountIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.timeoutsInput"></a>

```csharp
public IResolvable|StorageAccountTablePropertiesTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts">StorageAccountTablePropertiesTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageAccountTablePropertiesConfig <a name="StorageAccountTablePropertiesConfig" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new StorageAccountTablePropertiesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string StorageAccountId,
    IResolvable|StorageAccountTablePropertiesCorsRule[] CorsRule = null,
    StorageAccountTablePropertiesHourMetrics HourMetrics = null,
    string Id = null,
    StorageAccountTablePropertiesLogging Logging = null,
    StorageAccountTablePropertiesMinuteMetrics MinuteMetrics = null,
    StorageAccountTablePropertiesTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#storage_account_id StorageAccountTableProperties#storage_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.corsRule">CorsRule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule">StorageAccountTablePropertiesCorsRule</a>[]</code> | cors_rule block. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.hourMetrics">HourMetrics</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics">StorageAccountTablePropertiesHourMetrics</a></code> | hour_metrics block. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#id StorageAccountTableProperties#id}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.logging">Logging</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging">StorageAccountTablePropertiesLogging</a></code> | logging block. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.minuteMetrics">MinuteMetrics</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics">StorageAccountTablePropertiesMinuteMetrics</a></code> | minute_metrics block. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts">StorageAccountTablePropertiesTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#storage_account_id StorageAccountTableProperties#storage_account_id}.

---

##### `CorsRule`<sup>Optional</sup> <a name="CorsRule" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.corsRule"></a>

```csharp
public IResolvable|StorageAccountTablePropertiesCorsRule[] CorsRule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule">StorageAccountTablePropertiesCorsRule</a>[]

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#cors_rule StorageAccountTableProperties#cors_rule}

---

##### `HourMetrics`<sup>Optional</sup> <a name="HourMetrics" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.hourMetrics"></a>

```csharp
public StorageAccountTablePropertiesHourMetrics HourMetrics { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics">StorageAccountTablePropertiesHourMetrics</a>

hour_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#hour_metrics StorageAccountTableProperties#hour_metrics}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#id StorageAccountTableProperties#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.logging"></a>

```csharp
public StorageAccountTablePropertiesLogging Logging { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging">StorageAccountTablePropertiesLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#logging StorageAccountTableProperties#logging}

---

##### `MinuteMetrics`<sup>Optional</sup> <a name="MinuteMetrics" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.minuteMetrics"></a>

```csharp
public StorageAccountTablePropertiesMinuteMetrics MinuteMetrics { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics">StorageAccountTablePropertiesMinuteMetrics</a>

minute_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#minute_metrics StorageAccountTableProperties#minute_metrics}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.timeouts"></a>

```csharp
public StorageAccountTablePropertiesTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts">StorageAccountTablePropertiesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#timeouts StorageAccountTableProperties#timeouts}

---

### StorageAccountTablePropertiesCorsRule <a name="StorageAccountTablePropertiesCorsRule" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new StorageAccountTablePropertiesCorsRule {
    string[] AllowedHeaders,
    string[] AllowedMethods,
    string[] AllowedOrigins,
    string[] ExposedHeaders,
    double MaxAgeInSeconds
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.property.allowedHeaders">AllowedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#allowed_headers StorageAccountTableProperties#allowed_headers}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#allowed_methods StorageAccountTableProperties#allowed_methods}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#allowed_origins StorageAccountTableProperties#allowed_origins}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.property.exposedHeaders">ExposedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#exposed_headers StorageAccountTableProperties#exposed_headers}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#max_age_in_seconds StorageAccountTableProperties#max_age_in_seconds}. |

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.property.allowedHeaders"></a>

```csharp
public string[] AllowedHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#allowed_headers StorageAccountTableProperties#allowed_headers}.

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#allowed_methods StorageAccountTableProperties#allowed_methods}.

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#allowed_origins StorageAccountTableProperties#allowed_origins}.

---

##### `ExposedHeaders`<sup>Required</sup> <a name="ExposedHeaders" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.property.exposedHeaders"></a>

```csharp
public string[] ExposedHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#exposed_headers StorageAccountTableProperties#exposed_headers}.

---

##### `MaxAgeInSeconds`<sup>Required</sup> <a name="MaxAgeInSeconds" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.property.maxAgeInSeconds"></a>

```csharp
public double MaxAgeInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#max_age_in_seconds StorageAccountTableProperties#max_age_in_seconds}.

---

### StorageAccountTablePropertiesHourMetrics <a name="StorageAccountTablePropertiesHourMetrics" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new StorageAccountTablePropertiesHourMetrics {
    string Version,
    bool|IResolvable IncludeApis = null,
    double RetentionPolicyDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#version StorageAccountTableProperties#version}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics.property.includeApis">IncludeApis</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#include_apis StorageAccountTableProperties#include_apis}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#retention_policy_days StorageAccountTableProperties#retention_policy_days}. |

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#version StorageAccountTableProperties#version}.

---

##### `IncludeApis`<sup>Optional</sup> <a name="IncludeApis" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics.property.includeApis"></a>

```csharp
public bool|IResolvable IncludeApis { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#include_apis StorageAccountTableProperties#include_apis}.

---

##### `RetentionPolicyDays`<sup>Optional</sup> <a name="RetentionPolicyDays" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics.property.retentionPolicyDays"></a>

```csharp
public double RetentionPolicyDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#retention_policy_days StorageAccountTableProperties#retention_policy_days}.

---

### StorageAccountTablePropertiesLogging <a name="StorageAccountTablePropertiesLogging" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new StorageAccountTablePropertiesLogging {
    bool|IResolvable Delete,
    bool|IResolvable Read,
    string Version,
    bool|IResolvable Write,
    double RetentionPolicyDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.property.delete">Delete</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#delete StorageAccountTableProperties#delete}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.property.read">Read</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#read StorageAccountTableProperties#read}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#version StorageAccountTableProperties#version}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.property.write">Write</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#write StorageAccountTableProperties#write}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#retention_policy_days StorageAccountTableProperties#retention_policy_days}. |

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.property.delete"></a>

```csharp
public bool|IResolvable Delete { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#delete StorageAccountTableProperties#delete}.

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.property.read"></a>

```csharp
public bool|IResolvable Read { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#read StorageAccountTableProperties#read}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#version StorageAccountTableProperties#version}.

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.property.write"></a>

```csharp
public bool|IResolvable Write { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#write StorageAccountTableProperties#write}.

---

##### `RetentionPolicyDays`<sup>Optional</sup> <a name="RetentionPolicyDays" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.property.retentionPolicyDays"></a>

```csharp
public double RetentionPolicyDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#retention_policy_days StorageAccountTableProperties#retention_policy_days}.

---

### StorageAccountTablePropertiesMinuteMetrics <a name="StorageAccountTablePropertiesMinuteMetrics" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new StorageAccountTablePropertiesMinuteMetrics {
    string Version,
    bool|IResolvable IncludeApis = null,
    double RetentionPolicyDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#version StorageAccountTableProperties#version}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics.property.includeApis">IncludeApis</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#include_apis StorageAccountTableProperties#include_apis}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#retention_policy_days StorageAccountTableProperties#retention_policy_days}. |

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#version StorageAccountTableProperties#version}.

---

##### `IncludeApis`<sup>Optional</sup> <a name="IncludeApis" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics.property.includeApis"></a>

```csharp
public bool|IResolvable IncludeApis { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#include_apis StorageAccountTableProperties#include_apis}.

---

##### `RetentionPolicyDays`<sup>Optional</sup> <a name="RetentionPolicyDays" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics.property.retentionPolicyDays"></a>

```csharp
public double RetentionPolicyDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#retention_policy_days StorageAccountTableProperties#retention_policy_days}.

---

### StorageAccountTablePropertiesTimeouts <a name="StorageAccountTablePropertiesTimeouts" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new StorageAccountTablePropertiesTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#create StorageAccountTableProperties#create}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#delete StorageAccountTableProperties#delete}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#read StorageAccountTableProperties#read}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#update StorageAccountTableProperties#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#create StorageAccountTableProperties#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#delete StorageAccountTableProperties#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#read StorageAccountTableProperties#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#update StorageAccountTableProperties#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageAccountTablePropertiesCorsRuleList <a name="StorageAccountTablePropertiesCorsRuleList" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new StorageAccountTablePropertiesCorsRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.get"></a>

```csharp
private StorageAccountTablePropertiesCorsRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule">StorageAccountTablePropertiesCorsRule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.property.internalValue"></a>

```csharp
public IResolvable|StorageAccountTablePropertiesCorsRule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule">StorageAccountTablePropertiesCorsRule</a>[]

---


### StorageAccountTablePropertiesCorsRuleOutputReference <a name="StorageAccountTablePropertiesCorsRuleOutputReference" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new StorageAccountTablePropertiesCorsRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedHeadersInput">AllowedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedMethodsInput">AllowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.exposedHeadersInput">ExposedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput">MaxAgeInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedHeaders">AllowedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.exposedHeaders">ExposedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule">StorageAccountTablePropertiesCorsRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedHeadersInput`<sup>Optional</sup> <a name="AllowedHeadersInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedHeadersInput"></a>

```csharp
public string[] AllowedHeadersInput { get; }
```

- *Type:* string[]

---

##### `AllowedMethodsInput`<sup>Optional</sup> <a name="AllowedMethodsInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedMethodsInput"></a>

```csharp
public string[] AllowedMethodsInput { get; }
```

- *Type:* string[]

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedOriginsInput"></a>

```csharp
public string[] AllowedOriginsInput { get; }
```

- *Type:* string[]

---

##### `ExposedHeadersInput`<sup>Optional</sup> <a name="ExposedHeadersInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.exposedHeadersInput"></a>

```csharp
public string[] ExposedHeadersInput { get; }
```

- *Type:* string[]

---

##### `MaxAgeInSecondsInput`<sup>Optional</sup> <a name="MaxAgeInSecondsInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput"></a>

```csharp
public double MaxAgeInSecondsInput { get; }
```

- *Type:* double

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedHeaders"></a>

```csharp
public string[] AllowedHeaders { get; }
```

- *Type:* string[]

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; }
```

- *Type:* string[]

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; }
```

- *Type:* string[]

---

##### `ExposedHeaders`<sup>Required</sup> <a name="ExposedHeaders" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.exposedHeaders"></a>

```csharp
public string[] ExposedHeaders { get; }
```

- *Type:* string[]

---

##### `MaxAgeInSeconds`<sup>Required</sup> <a name="MaxAgeInSeconds" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.maxAgeInSeconds"></a>

```csharp
public double MaxAgeInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StorageAccountTablePropertiesCorsRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule">StorageAccountTablePropertiesCorsRule</a>

---


### StorageAccountTablePropertiesHourMetricsOutputReference <a name="StorageAccountTablePropertiesHourMetricsOutputReference" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new StorageAccountTablePropertiesHourMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.resetIncludeApis">ResetIncludeApis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.resetRetentionPolicyDays">ResetRetentionPolicyDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeApis` <a name="ResetIncludeApis" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.resetIncludeApis"></a>

```csharp
private void ResetIncludeApis()
```

##### `ResetRetentionPolicyDays` <a name="ResetRetentionPolicyDays" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.resetRetentionPolicyDays"></a>

```csharp
private void ResetRetentionPolicyDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.includeApisInput">IncludeApisInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.retentionPolicyDaysInput">RetentionPolicyDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.includeApis">IncludeApis</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics">StorageAccountTablePropertiesHourMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeApisInput`<sup>Optional</sup> <a name="IncludeApisInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.includeApisInput"></a>

```csharp
public bool|IResolvable IncludeApisInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetentionPolicyDaysInput`<sup>Optional</sup> <a name="RetentionPolicyDaysInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.retentionPolicyDaysInput"></a>

```csharp
public double RetentionPolicyDaysInput { get; }
```

- *Type:* double

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `IncludeApis`<sup>Required</sup> <a name="IncludeApis" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.includeApis"></a>

```csharp
public bool|IResolvable IncludeApis { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetentionPolicyDays`<sup>Required</sup> <a name="RetentionPolicyDays" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.retentionPolicyDays"></a>

```csharp
public double RetentionPolicyDays { get; }
```

- *Type:* double

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.internalValue"></a>

```csharp
public StorageAccountTablePropertiesHourMetrics InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics">StorageAccountTablePropertiesHourMetrics</a>

---


### StorageAccountTablePropertiesLoggingOutputReference <a name="StorageAccountTablePropertiesLoggingOutputReference" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new StorageAccountTablePropertiesLoggingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.resetRetentionPolicyDays">ResetRetentionPolicyDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRetentionPolicyDays` <a name="ResetRetentionPolicyDays" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.resetRetentionPolicyDays"></a>

```csharp
private void ResetRetentionPolicyDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.deleteInput">DeleteInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.readInput">ReadInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.retentionPolicyDaysInput">RetentionPolicyDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.writeInput">WriteInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.delete">Delete</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.read">Read</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.write">Write</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging">StorageAccountTablePropertiesLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.deleteInput"></a>

```csharp
public bool|IResolvable DeleteInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.readInput"></a>

```csharp
public bool|IResolvable ReadInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetentionPolicyDaysInput`<sup>Optional</sup> <a name="RetentionPolicyDaysInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.retentionPolicyDaysInput"></a>

```csharp
public double RetentionPolicyDaysInput { get; }
```

- *Type:* double

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `WriteInput`<sup>Optional</sup> <a name="WriteInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.writeInput"></a>

```csharp
public bool|IResolvable WriteInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.delete"></a>

```csharp
public bool|IResolvable Delete { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.read"></a>

```csharp
public bool|IResolvable Read { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetentionPolicyDays`<sup>Required</sup> <a name="RetentionPolicyDays" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.retentionPolicyDays"></a>

```csharp
public double RetentionPolicyDays { get; }
```

- *Type:* double

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.write"></a>

```csharp
public bool|IResolvable Write { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.internalValue"></a>

```csharp
public StorageAccountTablePropertiesLogging InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging">StorageAccountTablePropertiesLogging</a>

---


### StorageAccountTablePropertiesMinuteMetricsOutputReference <a name="StorageAccountTablePropertiesMinuteMetricsOutputReference" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new StorageAccountTablePropertiesMinuteMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.resetIncludeApis">ResetIncludeApis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.resetRetentionPolicyDays">ResetRetentionPolicyDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeApis` <a name="ResetIncludeApis" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.resetIncludeApis"></a>

```csharp
private void ResetIncludeApis()
```

##### `ResetRetentionPolicyDays` <a name="ResetRetentionPolicyDays" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.resetRetentionPolicyDays"></a>

```csharp
private void ResetRetentionPolicyDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.includeApisInput">IncludeApisInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.retentionPolicyDaysInput">RetentionPolicyDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.includeApis">IncludeApis</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics">StorageAccountTablePropertiesMinuteMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeApisInput`<sup>Optional</sup> <a name="IncludeApisInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.includeApisInput"></a>

```csharp
public bool|IResolvable IncludeApisInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetentionPolicyDaysInput`<sup>Optional</sup> <a name="RetentionPolicyDaysInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.retentionPolicyDaysInput"></a>

```csharp
public double RetentionPolicyDaysInput { get; }
```

- *Type:* double

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `IncludeApis`<sup>Required</sup> <a name="IncludeApis" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.includeApis"></a>

```csharp
public bool|IResolvable IncludeApis { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetentionPolicyDays`<sup>Required</sup> <a name="RetentionPolicyDays" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.retentionPolicyDays"></a>

```csharp
public double RetentionPolicyDays { get; }
```

- *Type:* double

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.internalValue"></a>

```csharp
public StorageAccountTablePropertiesMinuteMetrics InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics">StorageAccountTablePropertiesMinuteMetrics</a>

---


### StorageAccountTablePropertiesTimeoutsOutputReference <a name="StorageAccountTablePropertiesTimeoutsOutputReference" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new StorageAccountTablePropertiesTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts">StorageAccountTablePropertiesTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StorageAccountTablePropertiesTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts">StorageAccountTablePropertiesTimeouts</a>

---



