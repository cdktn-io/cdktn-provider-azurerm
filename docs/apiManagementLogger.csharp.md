# `apiManagementLogger` Submodule <a name="`apiManagementLogger` Submodule" id="@cdktn/provider-azurerm.apiManagementLogger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementLogger <a name="ApiManagementLogger" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger azurerm_api_management_logger}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ApiManagementLogger(Construct Scope, string Id, ApiManagementLoggerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig">ApiManagementLoggerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig">ApiManagementLoggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.putApplicationInsights">PutApplicationInsights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.putEventhub">PutEventhub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.resetApplicationInsights">ResetApplicationInsights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.resetBuffered">ResetBuffered</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.resetEventhub">ResetEventhub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.resetResourceId">ResetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApplicationInsights` <a name="PutApplicationInsights" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.putApplicationInsights"></a>

```csharp
private void PutApplicationInsights(ApiManagementLoggerApplicationInsights Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.putApplicationInsights.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsights">ApiManagementLoggerApplicationInsights</a>

---

##### `PutEventhub` <a name="PutEventhub" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.putEventhub"></a>

```csharp
private void PutEventhub(ApiManagementLoggerEventhub Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.putEventhub.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhub">ApiManagementLoggerEventhub</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.putTimeouts"></a>

```csharp
private void PutTimeouts(ApiManagementLoggerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeouts">ApiManagementLoggerTimeouts</a>

---

##### `ResetApplicationInsights` <a name="ResetApplicationInsights" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.resetApplicationInsights"></a>

```csharp
private void ResetApplicationInsights()
```

##### `ResetBuffered` <a name="ResetBuffered" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.resetBuffered"></a>

```csharp
private void ResetBuffered()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEventhub` <a name="ResetEventhub" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.resetEventhub"></a>

```csharp
private void ResetEventhub()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.resetResourceId"></a>

```csharp
private void ResetResourceId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApiManagementLogger resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ApiManagementLogger.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ApiManagementLogger.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ApiManagementLogger.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ApiManagementLogger.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApiManagementLogger resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiManagementLogger to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiManagementLogger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApiManagementLogger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.applicationInsights">ApplicationInsights</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference">ApiManagementLoggerApplicationInsightsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.eventhub">Eventhub</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference">ApiManagementLoggerEventhubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference">ApiManagementLoggerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.apiManagementNameInput">ApiManagementNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.applicationInsightsInput">ApplicationInsightsInput</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsights">ApiManagementLoggerApplicationInsights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.bufferedInput">BufferedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.eventhubInput">EventhubInput</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhub">ApiManagementLoggerEventhub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeouts">ApiManagementLoggerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.apiManagementName">ApiManagementName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.buffered">Buffered</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationInsights`<sup>Required</sup> <a name="ApplicationInsights" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.applicationInsights"></a>

```csharp
public ApiManagementLoggerApplicationInsightsOutputReference ApplicationInsights { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference">ApiManagementLoggerApplicationInsightsOutputReference</a>

---

##### `Eventhub`<sup>Required</sup> <a name="Eventhub" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.eventhub"></a>

```csharp
public ApiManagementLoggerEventhubOutputReference Eventhub { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference">ApiManagementLoggerEventhubOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.timeouts"></a>

```csharp
public ApiManagementLoggerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference">ApiManagementLoggerTimeoutsOutputReference</a>

---

##### `ApiManagementNameInput`<sup>Optional</sup> <a name="ApiManagementNameInput" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.apiManagementNameInput"></a>

```csharp
public string ApiManagementNameInput { get; }
```

- *Type:* string

---

##### `ApplicationInsightsInput`<sup>Optional</sup> <a name="ApplicationInsightsInput" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.applicationInsightsInput"></a>

```csharp
public ApiManagementLoggerApplicationInsights ApplicationInsightsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsights">ApiManagementLoggerApplicationInsights</a>

---

##### `BufferedInput`<sup>Optional</sup> <a name="BufferedInput" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.bufferedInput"></a>

```csharp
public bool|IResolvable BufferedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EventhubInput`<sup>Optional</sup> <a name="EventhubInput" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.eventhubInput"></a>

```csharp
public ApiManagementLoggerEventhub EventhubInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhub">ApiManagementLoggerEventhub</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.timeoutsInput"></a>

```csharp
public IResolvable|ApiManagementLoggerTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeouts">ApiManagementLoggerTimeouts</a>

---

##### `ApiManagementName`<sup>Required</sup> <a name="ApiManagementName" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.apiManagementName"></a>

```csharp
public string ApiManagementName { get; }
```

- *Type:* string

---

##### `Buffered`<sup>Required</sup> <a name="Buffered" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.buffered"></a>

```csharp
public bool|IResolvable Buffered { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLogger.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementLoggerApplicationInsights <a name="ApiManagementLoggerApplicationInsights" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsights.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ApiManagementLoggerApplicationInsights {
    string ConnectionString = null,
    string IdentityClientId = null,
    string InstrumentationKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsights.property.connectionString">ConnectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#connection_string ApiManagementLogger#connection_string}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsights.property.identityClientId">IdentityClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#identity_client_id ApiManagementLogger#identity_client_id}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsights.property.instrumentationKey">InstrumentationKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#instrumentation_key ApiManagementLogger#instrumentation_key}. |

---

##### `ConnectionString`<sup>Optional</sup> <a name="ConnectionString" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsights.property.connectionString"></a>

```csharp
public string ConnectionString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#connection_string ApiManagementLogger#connection_string}.

---

##### `IdentityClientId`<sup>Optional</sup> <a name="IdentityClientId" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsights.property.identityClientId"></a>

```csharp
public string IdentityClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#identity_client_id ApiManagementLogger#identity_client_id}.

---

##### `InstrumentationKey`<sup>Optional</sup> <a name="InstrumentationKey" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsights.property.instrumentationKey"></a>

```csharp
public string InstrumentationKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#instrumentation_key ApiManagementLogger#instrumentation_key}.

---

### ApiManagementLoggerConfig <a name="ApiManagementLoggerConfig" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ApiManagementLoggerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApiManagementName,
    string Name,
    string ResourceGroupName,
    ApiManagementLoggerApplicationInsights ApplicationInsights = null,
    bool|IResolvable Buffered = null,
    string Description = null,
    ApiManagementLoggerEventhub Eventhub = null,
    string Id = null,
    string ResourceId = null,
    ApiManagementLoggerTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.apiManagementName">ApiManagementName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#api_management_name ApiManagementLogger#api_management_name}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#name ApiManagementLogger#name}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#resource_group_name ApiManagementLogger#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.applicationInsights">ApplicationInsights</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsights">ApiManagementLoggerApplicationInsights</a></code> | application_insights block. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.buffered">Buffered</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#buffered ApiManagementLogger#buffered}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#description ApiManagementLogger#description}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.eventhub">Eventhub</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhub">ApiManagementLoggerEventhub</a></code> | eventhub block. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#id ApiManagementLogger#id}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.resourceId">ResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#resource_id ApiManagementLogger#resource_id}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeouts">ApiManagementLoggerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApiManagementName`<sup>Required</sup> <a name="ApiManagementName" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.apiManagementName"></a>

```csharp
public string ApiManagementName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#api_management_name ApiManagementLogger#api_management_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#name ApiManagementLogger#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#resource_group_name ApiManagementLogger#resource_group_name}.

---

##### `ApplicationInsights`<sup>Optional</sup> <a name="ApplicationInsights" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.applicationInsights"></a>

```csharp
public ApiManagementLoggerApplicationInsights ApplicationInsights { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsights">ApiManagementLoggerApplicationInsights</a>

application_insights block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#application_insights ApiManagementLogger#application_insights}

---

##### `Buffered`<sup>Optional</sup> <a name="Buffered" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.buffered"></a>

```csharp
public bool|IResolvable Buffered { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#buffered ApiManagementLogger#buffered}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#description ApiManagementLogger#description}.

---

##### `Eventhub`<sup>Optional</sup> <a name="Eventhub" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.eventhub"></a>

```csharp
public ApiManagementLoggerEventhub Eventhub { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhub">ApiManagementLoggerEventhub</a>

eventhub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#eventhub ApiManagementLogger#eventhub}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#id ApiManagementLogger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#resource_id ApiManagementLogger#resource_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerConfig.property.timeouts"></a>

```csharp
public ApiManagementLoggerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeouts">ApiManagementLoggerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#timeouts ApiManagementLogger#timeouts}

---

### ApiManagementLoggerEventhub <a name="ApiManagementLoggerEventhub" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhub.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ApiManagementLoggerEventhub {
    string Name,
    string ConnectionString = null,
    string EndpointUri = null,
    string UserAssignedIdentityClientId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhub.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#name ApiManagementLogger#name}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhub.property.connectionString">ConnectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#connection_string ApiManagementLogger#connection_string}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhub.property.endpointUri">EndpointUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#endpoint_uri ApiManagementLogger#endpoint_uri}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhub.property.userAssignedIdentityClientId">UserAssignedIdentityClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#user_assigned_identity_client_id ApiManagementLogger#user_assigned_identity_client_id}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhub.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#name ApiManagementLogger#name}.

---

##### `ConnectionString`<sup>Optional</sup> <a name="ConnectionString" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhub.property.connectionString"></a>

```csharp
public string ConnectionString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#connection_string ApiManagementLogger#connection_string}.

---

##### `EndpointUri`<sup>Optional</sup> <a name="EndpointUri" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhub.property.endpointUri"></a>

```csharp
public string EndpointUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#endpoint_uri ApiManagementLogger#endpoint_uri}.

---

##### `UserAssignedIdentityClientId`<sup>Optional</sup> <a name="UserAssignedIdentityClientId" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhub.property.userAssignedIdentityClientId"></a>

```csharp
public string UserAssignedIdentityClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#user_assigned_identity_client_id ApiManagementLogger#user_assigned_identity_client_id}.

---

### ApiManagementLoggerTimeouts <a name="ApiManagementLoggerTimeouts" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ApiManagementLoggerTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#create ApiManagementLogger#create}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#delete ApiManagementLogger#delete}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#read ApiManagementLogger#read}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#update ApiManagementLogger#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#create ApiManagementLogger#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#delete ApiManagementLogger#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#read ApiManagementLogger#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_logger#update ApiManagementLogger#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementLoggerApplicationInsightsOutputReference <a name="ApiManagementLoggerApplicationInsightsOutputReference" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ApiManagementLoggerApplicationInsightsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.resetConnectionString">ResetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.resetIdentityClientId">ResetIdentityClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.resetInstrumentationKey">ResetInstrumentationKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionString` <a name="ResetConnectionString" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.resetConnectionString"></a>

```csharp
private void ResetConnectionString()
```

##### `ResetIdentityClientId` <a name="ResetIdentityClientId" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.resetIdentityClientId"></a>

```csharp
private void ResetIdentityClientId()
```

##### `ResetInstrumentationKey` <a name="ResetInstrumentationKey" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.resetInstrumentationKey"></a>

```csharp
private void ResetInstrumentationKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.property.connectionStringInput">ConnectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.property.identityClientIdInput">IdentityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.property.instrumentationKeyInput">InstrumentationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.property.connectionString">ConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.property.identityClientId">IdentityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.property.instrumentationKey">InstrumentationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsights">ApiManagementLoggerApplicationInsights</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.property.connectionStringInput"></a>

```csharp
public string ConnectionStringInput { get; }
```

- *Type:* string

---

##### `IdentityClientIdInput`<sup>Optional</sup> <a name="IdentityClientIdInput" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.property.identityClientIdInput"></a>

```csharp
public string IdentityClientIdInput { get; }
```

- *Type:* string

---

##### `InstrumentationKeyInput`<sup>Optional</sup> <a name="InstrumentationKeyInput" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.property.instrumentationKeyInput"></a>

```csharp
public string InstrumentationKeyInput { get; }
```

- *Type:* string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.property.connectionString"></a>

```csharp
public string ConnectionString { get; }
```

- *Type:* string

---

##### `IdentityClientId`<sup>Required</sup> <a name="IdentityClientId" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.property.identityClientId"></a>

```csharp
public string IdentityClientId { get; }
```

- *Type:* string

---

##### `InstrumentationKey`<sup>Required</sup> <a name="InstrumentationKey" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.property.instrumentationKey"></a>

```csharp
public string InstrumentationKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsightsOutputReference.property.internalValue"></a>

```csharp
public ApiManagementLoggerApplicationInsights InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerApplicationInsights">ApiManagementLoggerApplicationInsights</a>

---


### ApiManagementLoggerEventhubOutputReference <a name="ApiManagementLoggerEventhubOutputReference" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ApiManagementLoggerEventhubOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.resetConnectionString">ResetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.resetEndpointUri">ResetEndpointUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.resetUserAssignedIdentityClientId">ResetUserAssignedIdentityClientId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionString` <a name="ResetConnectionString" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.resetConnectionString"></a>

```csharp
private void ResetConnectionString()
```

##### `ResetEndpointUri` <a name="ResetEndpointUri" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.resetEndpointUri"></a>

```csharp
private void ResetEndpointUri()
```

##### `ResetUserAssignedIdentityClientId` <a name="ResetUserAssignedIdentityClientId" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.resetUserAssignedIdentityClientId"></a>

```csharp
private void ResetUserAssignedIdentityClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.property.connectionStringInput">ConnectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.property.endpointUriInput">EndpointUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.property.userAssignedIdentityClientIdInput">UserAssignedIdentityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.property.connectionString">ConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.property.endpointUri">EndpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.property.userAssignedIdentityClientId">UserAssignedIdentityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhub">ApiManagementLoggerEventhub</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.property.connectionStringInput"></a>

```csharp
public string ConnectionStringInput { get; }
```

- *Type:* string

---

##### `EndpointUriInput`<sup>Optional</sup> <a name="EndpointUriInput" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.property.endpointUriInput"></a>

```csharp
public string EndpointUriInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `UserAssignedIdentityClientIdInput`<sup>Optional</sup> <a name="UserAssignedIdentityClientIdInput" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.property.userAssignedIdentityClientIdInput"></a>

```csharp
public string UserAssignedIdentityClientIdInput { get; }
```

- *Type:* string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.property.connectionString"></a>

```csharp
public string ConnectionString { get; }
```

- *Type:* string

---

##### `EndpointUri`<sup>Required</sup> <a name="EndpointUri" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.property.endpointUri"></a>

```csharp
public string EndpointUri { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `UserAssignedIdentityClientId`<sup>Required</sup> <a name="UserAssignedIdentityClientId" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.property.userAssignedIdentityClientId"></a>

```csharp
public string UserAssignedIdentityClientId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhubOutputReference.property.internalValue"></a>

```csharp
public ApiManagementLoggerEventhub InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerEventhub">ApiManagementLoggerEventhub</a>

---


### ApiManagementLoggerTimeoutsOutputReference <a name="ApiManagementLoggerTimeoutsOutputReference" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ApiManagementLoggerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeouts">ApiManagementLoggerTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApiManagementLoggerTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.apiManagementLogger.ApiManagementLoggerTimeouts">ApiManagementLoggerTimeouts</a>

---



