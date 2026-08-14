# `logAnalyticsStorageInsights` Submodule <a name="`logAnalyticsStorageInsights` Submodule" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsStorageInsights <a name="LogAnalyticsStorageInsights" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/log_analytics_storage_insights azurerm_log_analytics_storage_insights}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new LogAnalyticsStorageInsights(Construct Scope, string Id, LogAnalyticsStorageInsightsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig">LogAnalyticsStorageInsightsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig">LogAnalyticsStorageInsightsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.resetBlobContainerNames">ResetBlobContainerNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.resetTableNames">ResetTableNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.putTimeouts"></a>

```csharp
private void PutTimeouts(LogAnalyticsStorageInsightsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts">LogAnalyticsStorageInsightsTimeouts</a>

---

##### `ResetBlobContainerNames` <a name="ResetBlobContainerNames" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.resetBlobContainerNames"></a>

```csharp
private void ResetBlobContainerNames()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTableNames` <a name="ResetTableNames" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.resetTableNames"></a>

```csharp
private void ResetTableNames()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LogAnalyticsStorageInsights resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

LogAnalyticsStorageInsights.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

LogAnalyticsStorageInsights.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

LogAnalyticsStorageInsights.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

LogAnalyticsStorageInsights.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LogAnalyticsStorageInsights resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogAnalyticsStorageInsights to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogAnalyticsStorageInsights that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/log_analytics_storage_insights#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LogAnalyticsStorageInsights to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference">LogAnalyticsStorageInsightsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.blobContainerNamesInput">BlobContainerNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.storageAccountKeyInput">StorageAccountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.tableNamesInput">TableNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts">LogAnalyticsStorageInsightsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.blobContainerNames">BlobContainerNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.storageAccountKey">StorageAccountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.tableNames">TableNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.timeouts"></a>

```csharp
public LogAnalyticsStorageInsightsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference">LogAnalyticsStorageInsightsTimeoutsOutputReference</a>

---

##### `BlobContainerNamesInput`<sup>Optional</sup> <a name="BlobContainerNamesInput" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.blobContainerNamesInput"></a>

```csharp
public string[] BlobContainerNamesInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.storageAccountIdInput"></a>

```csharp
public string StorageAccountIdInput { get; }
```

- *Type:* string

---

##### `StorageAccountKeyInput`<sup>Optional</sup> <a name="StorageAccountKeyInput" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.storageAccountKeyInput"></a>

```csharp
public string StorageAccountKeyInput { get; }
```

- *Type:* string

---

##### `TableNamesInput`<sup>Optional</sup> <a name="TableNamesInput" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.tableNamesInput"></a>

```csharp
public string[] TableNamesInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.timeoutsInput"></a>

```csharp
public IResolvable|LogAnalyticsStorageInsightsTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts">LogAnalyticsStorageInsightsTimeouts</a>

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `BlobContainerNames`<sup>Required</sup> <a name="BlobContainerNames" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.blobContainerNames"></a>

```csharp
public string[] BlobContainerNames { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; }
```

- *Type:* string

---

##### `StorageAccountKey`<sup>Required</sup> <a name="StorageAccountKey" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.storageAccountKey"></a>

```csharp
public string StorageAccountKey { get; }
```

- *Type:* string

---

##### `TableNames`<sup>Required</sup> <a name="TableNames" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.tableNames"></a>

```csharp
public string[] TableNames { get; }
```

- *Type:* string[]

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsights.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsStorageInsightsConfig <a name="LogAnalyticsStorageInsightsConfig" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new LogAnalyticsStorageInsightsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string ResourceGroupName,
    string StorageAccountId,
    string StorageAccountKey,
    string WorkspaceId,
    string[] BlobContainerNames = null,
    string Id = null,
    string[] TableNames = null,
    LogAnalyticsStorageInsightsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/log_analytics_storage_insights#name LogAnalyticsStorageInsights#name}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/log_analytics_storage_insights#resource_group_name LogAnalyticsStorageInsights#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/log_analytics_storage_insights#storage_account_id LogAnalyticsStorageInsights#storage_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.storageAccountKey">StorageAccountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/log_analytics_storage_insights#storage_account_key LogAnalyticsStorageInsights#storage_account_key}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/log_analytics_storage_insights#workspace_id LogAnalyticsStorageInsights#workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.blobContainerNames">BlobContainerNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/log_analytics_storage_insights#blob_container_names LogAnalyticsStorageInsights#blob_container_names}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/log_analytics_storage_insights#id LogAnalyticsStorageInsights#id}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.tableNames">TableNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/log_analytics_storage_insights#table_names LogAnalyticsStorageInsights#table_names}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts">LogAnalyticsStorageInsightsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/log_analytics_storage_insights#name LogAnalyticsStorageInsights#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/log_analytics_storage_insights#resource_group_name LogAnalyticsStorageInsights#resource_group_name}.

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/log_analytics_storage_insights#storage_account_id LogAnalyticsStorageInsights#storage_account_id}.

---

##### `StorageAccountKey`<sup>Required</sup> <a name="StorageAccountKey" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.storageAccountKey"></a>

```csharp
public string StorageAccountKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/log_analytics_storage_insights#storage_account_key LogAnalyticsStorageInsights#storage_account_key}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/log_analytics_storage_insights#workspace_id LogAnalyticsStorageInsights#workspace_id}.

---

##### `BlobContainerNames`<sup>Optional</sup> <a name="BlobContainerNames" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.blobContainerNames"></a>

```csharp
public string[] BlobContainerNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/log_analytics_storage_insights#blob_container_names LogAnalyticsStorageInsights#blob_container_names}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/log_analytics_storage_insights#id LogAnalyticsStorageInsights#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TableNames`<sup>Optional</sup> <a name="TableNames" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.tableNames"></a>

```csharp
public string[] TableNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/log_analytics_storage_insights#table_names LogAnalyticsStorageInsights#table_names}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsConfig.property.timeouts"></a>

```csharp
public LogAnalyticsStorageInsightsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts">LogAnalyticsStorageInsightsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/log_analytics_storage_insights#timeouts LogAnalyticsStorageInsights#timeouts}

---

### LogAnalyticsStorageInsightsTimeouts <a name="LogAnalyticsStorageInsightsTimeouts" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new LogAnalyticsStorageInsightsTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/log_analytics_storage_insights#create LogAnalyticsStorageInsights#create}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/log_analytics_storage_insights#delete LogAnalyticsStorageInsights#delete}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/log_analytics_storage_insights#read LogAnalyticsStorageInsights#read}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/log_analytics_storage_insights#update LogAnalyticsStorageInsights#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/log_analytics_storage_insights#create LogAnalyticsStorageInsights#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/log_analytics_storage_insights#delete LogAnalyticsStorageInsights#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/log_analytics_storage_insights#read LogAnalyticsStorageInsights#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/log_analytics_storage_insights#update LogAnalyticsStorageInsights#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsStorageInsightsTimeoutsOutputReference <a name="LogAnalyticsStorageInsightsTimeoutsOutputReference" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new LogAnalyticsStorageInsightsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts">LogAnalyticsStorageInsightsTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LogAnalyticsStorageInsightsTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.logAnalyticsStorageInsights.LogAnalyticsStorageInsightsTimeouts">LogAnalyticsStorageInsightsTimeouts</a>

---



