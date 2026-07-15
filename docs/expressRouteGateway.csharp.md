# `expressRouteGateway` Submodule <a name="`expressRouteGateway` Submodule" id="@cdktn/provider-azurerm.expressRouteGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExpressRouteGateway <a name="ExpressRouteGateway" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/express_route_gateway azurerm_express_route_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ExpressRouteGateway(Construct Scope, string Id, ExpressRouteGatewayConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig">ExpressRouteGatewayConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig">ExpressRouteGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.resetAllowNonVirtualWanTraffic">ResetAllowNonVirtualWanTraffic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.putTimeouts"></a>

```csharp
private void PutTimeouts(ExpressRouteGatewayTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts">ExpressRouteGatewayTimeouts</a>

---

##### `ResetAllowNonVirtualWanTraffic` <a name="ResetAllowNonVirtualWanTraffic" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.resetAllowNonVirtualWanTraffic"></a>

```csharp
private void ResetAllowNonVirtualWanTraffic()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ExpressRouteGateway resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ExpressRouteGateway.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ExpressRouteGateway.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ExpressRouteGateway.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ExpressRouteGateway.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ExpressRouteGateway resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ExpressRouteGateway to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ExpressRouteGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/express_route_gateway#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ExpressRouteGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference">ExpressRouteGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.allowNonVirtualWanTrafficInput">AllowNonVirtualWanTrafficInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.scaleUnitsInput">ScaleUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts">ExpressRouteGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.virtualHubIdInput">VirtualHubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.allowNonVirtualWanTraffic">AllowNonVirtualWanTraffic</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.scaleUnits">ScaleUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.virtualHubId">VirtualHubId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.timeouts"></a>

```csharp
public ExpressRouteGatewayTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference">ExpressRouteGatewayTimeoutsOutputReference</a>

---

##### `AllowNonVirtualWanTrafficInput`<sup>Optional</sup> <a name="AllowNonVirtualWanTrafficInput" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.allowNonVirtualWanTrafficInput"></a>

```csharp
public bool|IResolvable AllowNonVirtualWanTrafficInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ScaleUnitsInput`<sup>Optional</sup> <a name="ScaleUnitsInput" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.scaleUnitsInput"></a>

```csharp
public double ScaleUnitsInput { get; }
```

- *Type:* double

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.timeoutsInput"></a>

```csharp
public IResolvable|ExpressRouteGatewayTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts">ExpressRouteGatewayTimeouts</a>

---

##### `VirtualHubIdInput`<sup>Optional</sup> <a name="VirtualHubIdInput" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.virtualHubIdInput"></a>

```csharp
public string VirtualHubIdInput { get; }
```

- *Type:* string

---

##### `AllowNonVirtualWanTraffic`<sup>Required</sup> <a name="AllowNonVirtualWanTraffic" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.allowNonVirtualWanTraffic"></a>

```csharp
public bool|IResolvable AllowNonVirtualWanTraffic { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `ScaleUnits`<sup>Required</sup> <a name="ScaleUnits" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.scaleUnits"></a>

```csharp
public double ScaleUnits { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VirtualHubId`<sup>Required</sup> <a name="VirtualHubId" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.virtualHubId"></a>

```csharp
public string VirtualHubId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGateway.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ExpressRouteGatewayConfig <a name="ExpressRouteGatewayConfig" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ExpressRouteGatewayConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Name,
    string ResourceGroupName,
    double ScaleUnits,
    string VirtualHubId,
    bool|IResolvable AllowNonVirtualWanTraffic = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    ExpressRouteGatewayTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/express_route_gateway#location ExpressRouteGateway#location}. |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/express_route_gateway#name ExpressRouteGateway#name}. |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/express_route_gateway#resource_group_name ExpressRouteGateway#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.scaleUnits">ScaleUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/express_route_gateway#scale_units ExpressRouteGateway#scale_units}. |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.virtualHubId">VirtualHubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/express_route_gateway#virtual_hub_id ExpressRouteGateway#virtual_hub_id}. |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.allowNonVirtualWanTraffic">AllowNonVirtualWanTraffic</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/express_route_gateway#allow_non_virtual_wan_traffic ExpressRouteGateway#allow_non_virtual_wan_traffic}. |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/express_route_gateway#id ExpressRouteGateway#id}. |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/express_route_gateway#tags ExpressRouteGateway#tags}. |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts">ExpressRouteGatewayTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/express_route_gateway#location ExpressRouteGateway#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/express_route_gateway#name ExpressRouteGateway#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/express_route_gateway#resource_group_name ExpressRouteGateway#resource_group_name}.

---

##### `ScaleUnits`<sup>Required</sup> <a name="ScaleUnits" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.scaleUnits"></a>

```csharp
public double ScaleUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/express_route_gateway#scale_units ExpressRouteGateway#scale_units}.

---

##### `VirtualHubId`<sup>Required</sup> <a name="VirtualHubId" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.virtualHubId"></a>

```csharp
public string VirtualHubId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/express_route_gateway#virtual_hub_id ExpressRouteGateway#virtual_hub_id}.

---

##### `AllowNonVirtualWanTraffic`<sup>Optional</sup> <a name="AllowNonVirtualWanTraffic" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.allowNonVirtualWanTraffic"></a>

```csharp
public bool|IResolvable AllowNonVirtualWanTraffic { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/express_route_gateway#allow_non_virtual_wan_traffic ExpressRouteGateway#allow_non_virtual_wan_traffic}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/express_route_gateway#id ExpressRouteGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/express_route_gateway#tags ExpressRouteGateway#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayConfig.property.timeouts"></a>

```csharp
public ExpressRouteGatewayTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts">ExpressRouteGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/express_route_gateway#timeouts ExpressRouteGateway#timeouts}

---

### ExpressRouteGatewayTimeouts <a name="ExpressRouteGatewayTimeouts" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ExpressRouteGatewayTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/express_route_gateway#create ExpressRouteGateway#create}. |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/express_route_gateway#delete ExpressRouteGateway#delete}. |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/express_route_gateway#read ExpressRouteGateway#read}. |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/express_route_gateway#update ExpressRouteGateway#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/express_route_gateway#create ExpressRouteGateway#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/express_route_gateway#delete ExpressRouteGateway#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/express_route_gateway#read ExpressRouteGateway#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/express_route_gateway#update ExpressRouteGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExpressRouteGatewayTimeoutsOutputReference <a name="ExpressRouteGatewayTimeoutsOutputReference" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ExpressRouteGatewayTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts">ExpressRouteGatewayTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ExpressRouteGatewayTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.expressRouteGateway.ExpressRouteGatewayTimeouts">ExpressRouteGatewayTimeouts</a>

---



