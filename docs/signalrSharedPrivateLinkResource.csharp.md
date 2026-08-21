# `signalrSharedPrivateLinkResource` Submodule <a name="`signalrSharedPrivateLinkResource` Submodule" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SignalrSharedPrivateLinkResource <a name="SignalrSharedPrivateLinkResource" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/signalr_shared_private_link_resource azurerm_signalr_shared_private_link_resource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SignalrSharedPrivateLinkResource(Construct Scope, string Id, SignalrSharedPrivateLinkResourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig">SignalrSharedPrivateLinkResourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig">SignalrSharedPrivateLinkResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.resetRequestMessage">ResetRequestMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.putTimeouts"></a>

```csharp
private void PutTimeouts(SignalrSharedPrivateLinkResourceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts">SignalrSharedPrivateLinkResourceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRequestMessage` <a name="ResetRequestMessage" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.resetRequestMessage"></a>

```csharp
private void ResetRequestMessage()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SignalrSharedPrivateLinkResource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SignalrSharedPrivateLinkResource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SignalrSharedPrivateLinkResource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SignalrSharedPrivateLinkResource.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SignalrSharedPrivateLinkResource.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SignalrSharedPrivateLinkResource resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SignalrSharedPrivateLinkResource to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SignalrSharedPrivateLinkResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/signalr_shared_private_link_resource#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SignalrSharedPrivateLinkResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference">SignalrSharedPrivateLinkResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.requestMessageInput">RequestMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.signalrServiceIdInput">SignalrServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.subResourceNameInput">SubResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.targetResourceIdInput">TargetResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts">SignalrSharedPrivateLinkResourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.requestMessage">RequestMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.signalrServiceId">SignalrServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.subResourceName">SubResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.targetResourceId">TargetResourceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.timeouts"></a>

```csharp
public SignalrSharedPrivateLinkResourceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference">SignalrSharedPrivateLinkResourceTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RequestMessageInput`<sup>Optional</sup> <a name="RequestMessageInput" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.requestMessageInput"></a>

```csharp
public string RequestMessageInput { get; }
```

- *Type:* string

---

##### `SignalrServiceIdInput`<sup>Optional</sup> <a name="SignalrServiceIdInput" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.signalrServiceIdInput"></a>

```csharp
public string SignalrServiceIdInput { get; }
```

- *Type:* string

---

##### `SubResourceNameInput`<sup>Optional</sup> <a name="SubResourceNameInput" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.subResourceNameInput"></a>

```csharp
public string SubResourceNameInput { get; }
```

- *Type:* string

---

##### `TargetResourceIdInput`<sup>Optional</sup> <a name="TargetResourceIdInput" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.targetResourceIdInput"></a>

```csharp
public string TargetResourceIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.timeoutsInput"></a>

```csharp
public IResolvable|SignalrSharedPrivateLinkResourceTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts">SignalrSharedPrivateLinkResourceTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RequestMessage`<sup>Required</sup> <a name="RequestMessage" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.requestMessage"></a>

```csharp
public string RequestMessage { get; }
```

- *Type:* string

---

##### `SignalrServiceId`<sup>Required</sup> <a name="SignalrServiceId" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.signalrServiceId"></a>

```csharp
public string SignalrServiceId { get; }
```

- *Type:* string

---

##### `SubResourceName`<sup>Required</sup> <a name="SubResourceName" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.subResourceName"></a>

```csharp
public string SubResourceName { get; }
```

- *Type:* string

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.targetResourceId"></a>

```csharp
public string TargetResourceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SignalrSharedPrivateLinkResourceConfig <a name="SignalrSharedPrivateLinkResourceConfig" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SignalrSharedPrivateLinkResourceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string SignalrServiceId,
    string SubResourceName,
    string TargetResourceId,
    string Id = null,
    string RequestMessage = null,
    SignalrSharedPrivateLinkResourceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/signalr_shared_private_link_resource#name SignalrSharedPrivateLinkResource#name}. |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.signalrServiceId">SignalrServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/signalr_shared_private_link_resource#signalr_service_id SignalrSharedPrivateLinkResource#signalr_service_id}. |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.subResourceName">SubResourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/signalr_shared_private_link_resource#sub_resource_name SignalrSharedPrivateLinkResource#sub_resource_name}. |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.targetResourceId">TargetResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/signalr_shared_private_link_resource#target_resource_id SignalrSharedPrivateLinkResource#target_resource_id}. |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/signalr_shared_private_link_resource#id SignalrSharedPrivateLinkResource#id}. |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.requestMessage">RequestMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/signalr_shared_private_link_resource#request_message SignalrSharedPrivateLinkResource#request_message}. |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts">SignalrSharedPrivateLinkResourceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/signalr_shared_private_link_resource#name SignalrSharedPrivateLinkResource#name}.

---

##### `SignalrServiceId`<sup>Required</sup> <a name="SignalrServiceId" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.signalrServiceId"></a>

```csharp
public string SignalrServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/signalr_shared_private_link_resource#signalr_service_id SignalrSharedPrivateLinkResource#signalr_service_id}.

---

##### `SubResourceName`<sup>Required</sup> <a name="SubResourceName" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.subResourceName"></a>

```csharp
public string SubResourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/signalr_shared_private_link_resource#sub_resource_name SignalrSharedPrivateLinkResource#sub_resource_name}.

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.targetResourceId"></a>

```csharp
public string TargetResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/signalr_shared_private_link_resource#target_resource_id SignalrSharedPrivateLinkResource#target_resource_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/signalr_shared_private_link_resource#id SignalrSharedPrivateLinkResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RequestMessage`<sup>Optional</sup> <a name="RequestMessage" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.requestMessage"></a>

```csharp
public string RequestMessage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/signalr_shared_private_link_resource#request_message SignalrSharedPrivateLinkResource#request_message}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.timeouts"></a>

```csharp
public SignalrSharedPrivateLinkResourceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts">SignalrSharedPrivateLinkResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/signalr_shared_private_link_resource#timeouts SignalrSharedPrivateLinkResource#timeouts}

---

### SignalrSharedPrivateLinkResourceTimeouts <a name="SignalrSharedPrivateLinkResourceTimeouts" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SignalrSharedPrivateLinkResourceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/signalr_shared_private_link_resource#create SignalrSharedPrivateLinkResource#create}. |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/signalr_shared_private_link_resource#delete SignalrSharedPrivateLinkResource#delete}. |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/signalr_shared_private_link_resource#read SignalrSharedPrivateLinkResource#read}. |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/signalr_shared_private_link_resource#update SignalrSharedPrivateLinkResource#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/signalr_shared_private_link_resource#create SignalrSharedPrivateLinkResource#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/signalr_shared_private_link_resource#delete SignalrSharedPrivateLinkResource#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/signalr_shared_private_link_resource#read SignalrSharedPrivateLinkResource#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/signalr_shared_private_link_resource#update SignalrSharedPrivateLinkResource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SignalrSharedPrivateLinkResourceTimeoutsOutputReference <a name="SignalrSharedPrivateLinkResourceTimeoutsOutputReference" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SignalrSharedPrivateLinkResourceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts">SignalrSharedPrivateLinkResourceTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SignalrSharedPrivateLinkResourceTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts">SignalrSharedPrivateLinkResourceTimeouts</a>

---



