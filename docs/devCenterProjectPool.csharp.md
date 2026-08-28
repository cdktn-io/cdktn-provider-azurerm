# `devCenterProjectPool` Submodule <a name="`devCenterProjectPool` Submodule" id="@cdktn/provider-azurerm.devCenterProjectPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevCenterProjectPool <a name="DevCenterProjectPool" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool azurerm_dev_center_project_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DevCenterProjectPool(Construct Scope, string Id, DevCenterProjectPoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig">DevCenterProjectPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig">DevCenterProjectPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetManagedVirtualNetworkRegions">ResetManagedVirtualNetworkRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetSingleSignOnEnabled">ResetSingleSignOnEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetStopOnDisconnectGracePeriodMinutes">ResetStopOnDisconnectGracePeriodMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.putTimeouts"></a>

```csharp
private void PutTimeouts(DevCenterProjectPoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetManagedVirtualNetworkRegions` <a name="ResetManagedVirtualNetworkRegions" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetManagedVirtualNetworkRegions"></a>

```csharp
private void ResetManagedVirtualNetworkRegions()
```

##### `ResetSingleSignOnEnabled` <a name="ResetSingleSignOnEnabled" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetSingleSignOnEnabled"></a>

```csharp
private void ResetSingleSignOnEnabled()
```

##### `ResetStopOnDisconnectGracePeriodMinutes` <a name="ResetStopOnDisconnectGracePeriodMinutes" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetStopOnDisconnectGracePeriodMinutes"></a>

```csharp
private void ResetStopOnDisconnectGracePeriodMinutes()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DevCenterProjectPool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DevCenterProjectPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DevCenterProjectPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DevCenterProjectPool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DevCenterProjectPool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DevCenterProjectPool resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevCenterProjectPool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevCenterProjectPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DevCenterProjectPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference">DevCenterProjectPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devBoxDefinitionNameInput">DevBoxDefinitionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterAttachedNetworkNameInput">DevCenterAttachedNetworkNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterProjectIdInput">DevCenterProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.localAdministratorEnabledInput">LocalAdministratorEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.managedVirtualNetworkRegionsInput">ManagedVirtualNetworkRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.singleSignOnEnabledInput">SingleSignOnEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.stopOnDisconnectGracePeriodMinutesInput">StopOnDisconnectGracePeriodMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devBoxDefinitionName">DevBoxDefinitionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterAttachedNetworkName">DevCenterAttachedNetworkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterProjectId">DevCenterProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.localAdministratorEnabled">LocalAdministratorEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.managedVirtualNetworkRegions">ManagedVirtualNetworkRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.singleSignOnEnabled">SingleSignOnEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.stopOnDisconnectGracePeriodMinutes">StopOnDisconnectGracePeriodMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.timeouts"></a>

```csharp
public DevCenterProjectPoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference">DevCenterProjectPoolTimeoutsOutputReference</a>

---

##### `DevBoxDefinitionNameInput`<sup>Optional</sup> <a name="DevBoxDefinitionNameInput" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devBoxDefinitionNameInput"></a>

```csharp
public string DevBoxDefinitionNameInput { get; }
```

- *Type:* string

---

##### `DevCenterAttachedNetworkNameInput`<sup>Optional</sup> <a name="DevCenterAttachedNetworkNameInput" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterAttachedNetworkNameInput"></a>

```csharp
public string DevCenterAttachedNetworkNameInput { get; }
```

- *Type:* string

---

##### `DevCenterProjectIdInput`<sup>Optional</sup> <a name="DevCenterProjectIdInput" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterProjectIdInput"></a>

```csharp
public string DevCenterProjectIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocalAdministratorEnabledInput`<sup>Optional</sup> <a name="LocalAdministratorEnabledInput" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.localAdministratorEnabledInput"></a>

```csharp
public bool|IResolvable LocalAdministratorEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ManagedVirtualNetworkRegionsInput`<sup>Optional</sup> <a name="ManagedVirtualNetworkRegionsInput" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.managedVirtualNetworkRegionsInput"></a>

```csharp
public string[] ManagedVirtualNetworkRegionsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SingleSignOnEnabledInput`<sup>Optional</sup> <a name="SingleSignOnEnabledInput" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.singleSignOnEnabledInput"></a>

```csharp
public bool|IResolvable SingleSignOnEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StopOnDisconnectGracePeriodMinutesInput`<sup>Optional</sup> <a name="StopOnDisconnectGracePeriodMinutesInput" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.stopOnDisconnectGracePeriodMinutesInput"></a>

```csharp
public double StopOnDisconnectGracePeriodMinutesInput { get; }
```

- *Type:* double

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.timeoutsInput"></a>

```csharp
public IResolvable|DevCenterProjectPoolTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a>

---

##### `DevBoxDefinitionName`<sup>Required</sup> <a name="DevBoxDefinitionName" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devBoxDefinitionName"></a>

```csharp
public string DevBoxDefinitionName { get; }
```

- *Type:* string

---

##### `DevCenterAttachedNetworkName`<sup>Required</sup> <a name="DevCenterAttachedNetworkName" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterAttachedNetworkName"></a>

```csharp
public string DevCenterAttachedNetworkName { get; }
```

- *Type:* string

---

##### `DevCenterProjectId`<sup>Required</sup> <a name="DevCenterProjectId" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterProjectId"></a>

```csharp
public string DevCenterProjectId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocalAdministratorEnabled`<sup>Required</sup> <a name="LocalAdministratorEnabled" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.localAdministratorEnabled"></a>

```csharp
public bool|IResolvable LocalAdministratorEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ManagedVirtualNetworkRegions`<sup>Required</sup> <a name="ManagedVirtualNetworkRegions" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.managedVirtualNetworkRegions"></a>

```csharp
public string[] ManagedVirtualNetworkRegions { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SingleSignOnEnabled`<sup>Required</sup> <a name="SingleSignOnEnabled" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.singleSignOnEnabled"></a>

```csharp
public bool|IResolvable SingleSignOnEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StopOnDisconnectGracePeriodMinutes`<sup>Required</sup> <a name="StopOnDisconnectGracePeriodMinutes" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.stopOnDisconnectGracePeriodMinutes"></a>

```csharp
public double StopOnDisconnectGracePeriodMinutes { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevCenterProjectPoolConfig <a name="DevCenterProjectPoolConfig" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DevCenterProjectPoolConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DevBoxDefinitionName,
    string DevCenterAttachedNetworkName,
    string DevCenterProjectId,
    bool|IResolvable LocalAdministratorEnabled,
    string Location,
    string Name,
    string Id = null,
    string[] ManagedVirtualNetworkRegions = null,
    bool|IResolvable SingleSignOnEnabled = null,
    double StopOnDisconnectGracePeriodMinutes = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    DevCenterProjectPoolTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.devBoxDefinitionName">DevBoxDefinitionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool#dev_box_definition_name DevCenterProjectPool#dev_box_definition_name}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.devCenterAttachedNetworkName">DevCenterAttachedNetworkName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool#dev_center_attached_network_name DevCenterProjectPool#dev_center_attached_network_name}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.devCenterProjectId">DevCenterProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool#dev_center_project_id DevCenterProjectPool#dev_center_project_id}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.localAdministratorEnabled">LocalAdministratorEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool#local_administrator_enabled DevCenterProjectPool#local_administrator_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool#location DevCenterProjectPool#location}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool#name DevCenterProjectPool#name}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool#id DevCenterProjectPool#id}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.managedVirtualNetworkRegions">ManagedVirtualNetworkRegions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool#managed_virtual_network_regions DevCenterProjectPool#managed_virtual_network_regions}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.singleSignOnEnabled">SingleSignOnEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool#single_sign_on_enabled DevCenterProjectPool#single_sign_on_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.stopOnDisconnectGracePeriodMinutes">StopOnDisconnectGracePeriodMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool#stop_on_disconnect_grace_period_minutes DevCenterProjectPool#stop_on_disconnect_grace_period_minutes}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool#tags DevCenterProjectPool#tags}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DevBoxDefinitionName`<sup>Required</sup> <a name="DevBoxDefinitionName" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.devBoxDefinitionName"></a>

```csharp
public string DevBoxDefinitionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool#dev_box_definition_name DevCenterProjectPool#dev_box_definition_name}.

---

##### `DevCenterAttachedNetworkName`<sup>Required</sup> <a name="DevCenterAttachedNetworkName" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.devCenterAttachedNetworkName"></a>

```csharp
public string DevCenterAttachedNetworkName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool#dev_center_attached_network_name DevCenterProjectPool#dev_center_attached_network_name}.

---

##### `DevCenterProjectId`<sup>Required</sup> <a name="DevCenterProjectId" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.devCenterProjectId"></a>

```csharp
public string DevCenterProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool#dev_center_project_id DevCenterProjectPool#dev_center_project_id}.

---

##### `LocalAdministratorEnabled`<sup>Required</sup> <a name="LocalAdministratorEnabled" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.localAdministratorEnabled"></a>

```csharp
public bool|IResolvable LocalAdministratorEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool#local_administrator_enabled DevCenterProjectPool#local_administrator_enabled}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool#location DevCenterProjectPool#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool#name DevCenterProjectPool#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool#id DevCenterProjectPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManagedVirtualNetworkRegions`<sup>Optional</sup> <a name="ManagedVirtualNetworkRegions" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.managedVirtualNetworkRegions"></a>

```csharp
public string[] ManagedVirtualNetworkRegions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool#managed_virtual_network_regions DevCenterProjectPool#managed_virtual_network_regions}.

---

##### `SingleSignOnEnabled`<sup>Optional</sup> <a name="SingleSignOnEnabled" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.singleSignOnEnabled"></a>

```csharp
public bool|IResolvable SingleSignOnEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool#single_sign_on_enabled DevCenterProjectPool#single_sign_on_enabled}.

---

##### `StopOnDisconnectGracePeriodMinutes`<sup>Optional</sup> <a name="StopOnDisconnectGracePeriodMinutes" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.stopOnDisconnectGracePeriodMinutes"></a>

```csharp
public double StopOnDisconnectGracePeriodMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool#stop_on_disconnect_grace_period_minutes DevCenterProjectPool#stop_on_disconnect_grace_period_minutes}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool#tags DevCenterProjectPool#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.timeouts"></a>

```csharp
public DevCenterProjectPoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool#timeouts DevCenterProjectPool#timeouts}

---

### DevCenterProjectPoolTimeouts <a name="DevCenterProjectPoolTimeouts" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DevCenterProjectPoolTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool#create DevCenterProjectPool#create}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool#delete DevCenterProjectPool#delete}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool#read DevCenterProjectPool#read}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool#update DevCenterProjectPool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool#create DevCenterProjectPool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool#delete DevCenterProjectPool#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool#read DevCenterProjectPool#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/dev_center_project_pool#update DevCenterProjectPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevCenterProjectPoolTimeoutsOutputReference <a name="DevCenterProjectPoolTimeoutsOutputReference" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DevCenterProjectPoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevCenterProjectPoolTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a>

---



