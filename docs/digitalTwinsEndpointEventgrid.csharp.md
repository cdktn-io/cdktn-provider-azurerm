# `digitalTwinsEndpointEventgrid` Submodule <a name="`digitalTwinsEndpointEventgrid` Submodule" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DigitalTwinsEndpointEventgrid <a name="DigitalTwinsEndpointEventgrid" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/digital_twins_endpoint_eventgrid azurerm_digital_twins_endpoint_eventgrid}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DigitalTwinsEndpointEventgrid(Construct Scope, string Id, DigitalTwinsEndpointEventgridConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig">DigitalTwinsEndpointEventgridConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig">DigitalTwinsEndpointEventgridConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.resetDeadLetterStorageSecret">ResetDeadLetterStorageSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.putTimeouts"></a>

```csharp
private void PutTimeouts(DigitalTwinsEndpointEventgridTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts">DigitalTwinsEndpointEventgridTimeouts</a>

---

##### `ResetDeadLetterStorageSecret` <a name="ResetDeadLetterStorageSecret" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.resetDeadLetterStorageSecret"></a>

```csharp
private void ResetDeadLetterStorageSecret()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DigitalTwinsEndpointEventgrid resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DigitalTwinsEndpointEventgrid.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DigitalTwinsEndpointEventgrid.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DigitalTwinsEndpointEventgrid.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DigitalTwinsEndpointEventgrid.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DigitalTwinsEndpointEventgrid resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DigitalTwinsEndpointEventgrid to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DigitalTwinsEndpointEventgrid that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/digital_twins_endpoint_eventgrid#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DigitalTwinsEndpointEventgrid to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference">DigitalTwinsEndpointEventgridTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.deadLetterStorageSecretInput">DeadLetterStorageSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.digitalTwinsIdInput">DigitalTwinsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicEndpointInput">EventgridTopicEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicPrimaryAccessKeyInput">EventgridTopicPrimaryAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicSecondaryAccessKeyInput">EventgridTopicSecondaryAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts">DigitalTwinsEndpointEventgridTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.deadLetterStorageSecret">DeadLetterStorageSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.digitalTwinsId">DigitalTwinsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicEndpoint">EventgridTopicEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicPrimaryAccessKey">EventgridTopicPrimaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicSecondaryAccessKey">EventgridTopicSecondaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.timeouts"></a>

```csharp
public DigitalTwinsEndpointEventgridTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference">DigitalTwinsEndpointEventgridTimeoutsOutputReference</a>

---

##### `DeadLetterStorageSecretInput`<sup>Optional</sup> <a name="DeadLetterStorageSecretInput" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.deadLetterStorageSecretInput"></a>

```csharp
public string DeadLetterStorageSecretInput { get; }
```

- *Type:* string

---

##### `DigitalTwinsIdInput`<sup>Optional</sup> <a name="DigitalTwinsIdInput" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.digitalTwinsIdInput"></a>

```csharp
public string DigitalTwinsIdInput { get; }
```

- *Type:* string

---

##### `EventgridTopicEndpointInput`<sup>Optional</sup> <a name="EventgridTopicEndpointInput" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicEndpointInput"></a>

```csharp
public string EventgridTopicEndpointInput { get; }
```

- *Type:* string

---

##### `EventgridTopicPrimaryAccessKeyInput`<sup>Optional</sup> <a name="EventgridTopicPrimaryAccessKeyInput" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicPrimaryAccessKeyInput"></a>

```csharp
public string EventgridTopicPrimaryAccessKeyInput { get; }
```

- *Type:* string

---

##### `EventgridTopicSecondaryAccessKeyInput`<sup>Optional</sup> <a name="EventgridTopicSecondaryAccessKeyInput" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicSecondaryAccessKeyInput"></a>

```csharp
public string EventgridTopicSecondaryAccessKeyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.timeoutsInput"></a>

```csharp
public IResolvable|DigitalTwinsEndpointEventgridTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts">DigitalTwinsEndpointEventgridTimeouts</a>

---

##### `DeadLetterStorageSecret`<sup>Required</sup> <a name="DeadLetterStorageSecret" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.deadLetterStorageSecret"></a>

```csharp
public string DeadLetterStorageSecret { get; }
```

- *Type:* string

---

##### `DigitalTwinsId`<sup>Required</sup> <a name="DigitalTwinsId" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.digitalTwinsId"></a>

```csharp
public string DigitalTwinsId { get; }
```

- *Type:* string

---

##### `EventgridTopicEndpoint`<sup>Required</sup> <a name="EventgridTopicEndpoint" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicEndpoint"></a>

```csharp
public string EventgridTopicEndpoint { get; }
```

- *Type:* string

---

##### `EventgridTopicPrimaryAccessKey`<sup>Required</sup> <a name="EventgridTopicPrimaryAccessKey" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicPrimaryAccessKey"></a>

```csharp
public string EventgridTopicPrimaryAccessKey { get; }
```

- *Type:* string

---

##### `EventgridTopicSecondaryAccessKey`<sup>Required</sup> <a name="EventgridTopicSecondaryAccessKey" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicSecondaryAccessKey"></a>

```csharp
public string EventgridTopicSecondaryAccessKey { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DigitalTwinsEndpointEventgridConfig <a name="DigitalTwinsEndpointEventgridConfig" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DigitalTwinsEndpointEventgridConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DigitalTwinsId,
    string EventgridTopicEndpoint,
    string EventgridTopicPrimaryAccessKey,
    string EventgridTopicSecondaryAccessKey,
    string Name,
    string DeadLetterStorageSecret = null,
    string Id = null,
    DigitalTwinsEndpointEventgridTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.digitalTwinsId">DigitalTwinsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/digital_twins_endpoint_eventgrid#digital_twins_id DigitalTwinsEndpointEventgrid#digital_twins_id}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.eventgridTopicEndpoint">EventgridTopicEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/digital_twins_endpoint_eventgrid#eventgrid_topic_endpoint DigitalTwinsEndpointEventgrid#eventgrid_topic_endpoint}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.eventgridTopicPrimaryAccessKey">EventgridTopicPrimaryAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/digital_twins_endpoint_eventgrid#eventgrid_topic_primary_access_key DigitalTwinsEndpointEventgrid#eventgrid_topic_primary_access_key}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.eventgridTopicSecondaryAccessKey">EventgridTopicSecondaryAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/digital_twins_endpoint_eventgrid#eventgrid_topic_secondary_access_key DigitalTwinsEndpointEventgrid#eventgrid_topic_secondary_access_key}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/digital_twins_endpoint_eventgrid#name DigitalTwinsEndpointEventgrid#name}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.deadLetterStorageSecret">DeadLetterStorageSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/digital_twins_endpoint_eventgrid#dead_letter_storage_secret DigitalTwinsEndpointEventgrid#dead_letter_storage_secret}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/digital_twins_endpoint_eventgrid#id DigitalTwinsEndpointEventgrid#id}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts">DigitalTwinsEndpointEventgridTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DigitalTwinsId`<sup>Required</sup> <a name="DigitalTwinsId" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.digitalTwinsId"></a>

```csharp
public string DigitalTwinsId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/digital_twins_endpoint_eventgrid#digital_twins_id DigitalTwinsEndpointEventgrid#digital_twins_id}.

---

##### `EventgridTopicEndpoint`<sup>Required</sup> <a name="EventgridTopicEndpoint" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.eventgridTopicEndpoint"></a>

```csharp
public string EventgridTopicEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/digital_twins_endpoint_eventgrid#eventgrid_topic_endpoint DigitalTwinsEndpointEventgrid#eventgrid_topic_endpoint}.

---

##### `EventgridTopicPrimaryAccessKey`<sup>Required</sup> <a name="EventgridTopicPrimaryAccessKey" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.eventgridTopicPrimaryAccessKey"></a>

```csharp
public string EventgridTopicPrimaryAccessKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/digital_twins_endpoint_eventgrid#eventgrid_topic_primary_access_key DigitalTwinsEndpointEventgrid#eventgrid_topic_primary_access_key}.

---

##### `EventgridTopicSecondaryAccessKey`<sup>Required</sup> <a name="EventgridTopicSecondaryAccessKey" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.eventgridTopicSecondaryAccessKey"></a>

```csharp
public string EventgridTopicSecondaryAccessKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/digital_twins_endpoint_eventgrid#eventgrid_topic_secondary_access_key DigitalTwinsEndpointEventgrid#eventgrid_topic_secondary_access_key}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/digital_twins_endpoint_eventgrid#name DigitalTwinsEndpointEventgrid#name}.

---

##### `DeadLetterStorageSecret`<sup>Optional</sup> <a name="DeadLetterStorageSecret" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.deadLetterStorageSecret"></a>

```csharp
public string DeadLetterStorageSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/digital_twins_endpoint_eventgrid#dead_letter_storage_secret DigitalTwinsEndpointEventgrid#dead_letter_storage_secret}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/digital_twins_endpoint_eventgrid#id DigitalTwinsEndpointEventgrid#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.timeouts"></a>

```csharp
public DigitalTwinsEndpointEventgridTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts">DigitalTwinsEndpointEventgridTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/digital_twins_endpoint_eventgrid#timeouts DigitalTwinsEndpointEventgrid#timeouts}

---

### DigitalTwinsEndpointEventgridTimeouts <a name="DigitalTwinsEndpointEventgridTimeouts" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DigitalTwinsEndpointEventgridTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/digital_twins_endpoint_eventgrid#create DigitalTwinsEndpointEventgrid#create}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/digital_twins_endpoint_eventgrid#delete DigitalTwinsEndpointEventgrid#delete}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/digital_twins_endpoint_eventgrid#read DigitalTwinsEndpointEventgrid#read}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/digital_twins_endpoint_eventgrid#update DigitalTwinsEndpointEventgrid#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/digital_twins_endpoint_eventgrid#create DigitalTwinsEndpointEventgrid#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/digital_twins_endpoint_eventgrid#delete DigitalTwinsEndpointEventgrid#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/digital_twins_endpoint_eventgrid#read DigitalTwinsEndpointEventgrid#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/digital_twins_endpoint_eventgrid#update DigitalTwinsEndpointEventgrid#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DigitalTwinsEndpointEventgridTimeoutsOutputReference <a name="DigitalTwinsEndpointEventgridTimeoutsOutputReference" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DigitalTwinsEndpointEventgridTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts">DigitalTwinsEndpointEventgridTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DigitalTwinsEndpointEventgridTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts">DigitalTwinsEndpointEventgridTimeouts</a>

---



