# `devCenterDevBoxDefinition` Submodule <a name="`devCenterDevBoxDefinition` Submodule" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevCenterDevBoxDefinition <a name="DevCenterDevBoxDefinition" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition azurerm_dev_center_dev_box_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DevCenterDevBoxDefinition(Construct Scope, string Id, DevCenterDevBoxDefinitionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig">DevCenterDevBoxDefinitionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig">DevCenterDevBoxDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.resetHibernateSupportEnabled">ResetHibernateSupportEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.putTimeouts"></a>

```csharp
private void PutTimeouts(DevCenterDevBoxDefinitionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts">DevCenterDevBoxDefinitionTimeouts</a>

---

##### `ResetHibernateSupportEnabled` <a name="ResetHibernateSupportEnabled" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.resetHibernateSupportEnabled"></a>

```csharp
private void ResetHibernateSupportEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DevCenterDevBoxDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DevCenterDevBoxDefinition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DevCenterDevBoxDefinition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DevCenterDevBoxDefinition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DevCenterDevBoxDefinition.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DevCenterDevBoxDefinition resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevCenterDevBoxDefinition to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevCenterDevBoxDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DevCenterDevBoxDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference">DevCenterDevBoxDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.devCenterIdInput">DevCenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.hibernateSupportEnabledInput">HibernateSupportEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.imageReferenceIdInput">ImageReferenceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.skuNameInput">SkuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts">DevCenterDevBoxDefinitionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.devCenterId">DevCenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.hibernateSupportEnabled">HibernateSupportEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.imageReferenceId">ImageReferenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.skuName">SkuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.timeouts"></a>

```csharp
public DevCenterDevBoxDefinitionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference">DevCenterDevBoxDefinitionTimeoutsOutputReference</a>

---

##### `DevCenterIdInput`<sup>Optional</sup> <a name="DevCenterIdInput" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.devCenterIdInput"></a>

```csharp
public string DevCenterIdInput { get; }
```

- *Type:* string

---

##### `HibernateSupportEnabledInput`<sup>Optional</sup> <a name="HibernateSupportEnabledInput" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.hibernateSupportEnabledInput"></a>

```csharp
public bool|IResolvable HibernateSupportEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageReferenceIdInput`<sup>Optional</sup> <a name="ImageReferenceIdInput" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.imageReferenceIdInput"></a>

```csharp
public string ImageReferenceIdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.skuNameInput"></a>

```csharp
public string SkuNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.timeoutsInput"></a>

```csharp
public IResolvable|DevCenterDevBoxDefinitionTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts">DevCenterDevBoxDefinitionTimeouts</a>

---

##### `DevCenterId`<sup>Required</sup> <a name="DevCenterId" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.devCenterId"></a>

```csharp
public string DevCenterId { get; }
```

- *Type:* string

---

##### `HibernateSupportEnabled`<sup>Required</sup> <a name="HibernateSupportEnabled" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.hibernateSupportEnabled"></a>

```csharp
public bool|IResolvable HibernateSupportEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageReferenceId`<sup>Required</sup> <a name="ImageReferenceId" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.imageReferenceId"></a>

```csharp
public string ImageReferenceId { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.skuName"></a>

```csharp
public string SkuName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevCenterDevBoxDefinitionConfig <a name="DevCenterDevBoxDefinitionConfig" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DevCenterDevBoxDefinitionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DevCenterId,
    string ImageReferenceId,
    string Location,
    string Name,
    string SkuName,
    bool|IResolvable HibernateSupportEnabled = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    DevCenterDevBoxDefinitionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.devCenterId">DevCenterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#dev_center_id DevCenterDevBoxDefinition#dev_center_id}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.imageReferenceId">ImageReferenceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#image_reference_id DevCenterDevBoxDefinition#image_reference_id}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#location DevCenterDevBoxDefinition#location}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#name DevCenterDevBoxDefinition#name}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.skuName">SkuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#sku_name DevCenterDevBoxDefinition#sku_name}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.hibernateSupportEnabled">HibernateSupportEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#hibernate_support_enabled DevCenterDevBoxDefinition#hibernate_support_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#id DevCenterDevBoxDefinition#id}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#tags DevCenterDevBoxDefinition#tags}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts">DevCenterDevBoxDefinitionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DevCenterId`<sup>Required</sup> <a name="DevCenterId" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.devCenterId"></a>

```csharp
public string DevCenterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#dev_center_id DevCenterDevBoxDefinition#dev_center_id}.

---

##### `ImageReferenceId`<sup>Required</sup> <a name="ImageReferenceId" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.imageReferenceId"></a>

```csharp
public string ImageReferenceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#image_reference_id DevCenterDevBoxDefinition#image_reference_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#location DevCenterDevBoxDefinition#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#name DevCenterDevBoxDefinition#name}.

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.skuName"></a>

```csharp
public string SkuName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#sku_name DevCenterDevBoxDefinition#sku_name}.

---

##### `HibernateSupportEnabled`<sup>Optional</sup> <a name="HibernateSupportEnabled" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.hibernateSupportEnabled"></a>

```csharp
public bool|IResolvable HibernateSupportEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#hibernate_support_enabled DevCenterDevBoxDefinition#hibernate_support_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#id DevCenterDevBoxDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#tags DevCenterDevBoxDefinition#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionConfig.property.timeouts"></a>

```csharp
public DevCenterDevBoxDefinitionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts">DevCenterDevBoxDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#timeouts DevCenterDevBoxDefinition#timeouts}

---

### DevCenterDevBoxDefinitionTimeouts <a name="DevCenterDevBoxDefinitionTimeouts" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DevCenterDevBoxDefinitionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#create DevCenterDevBoxDefinition#create}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#delete DevCenterDevBoxDefinition#delete}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#read DevCenterDevBoxDefinition#read}. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#update DevCenterDevBoxDefinition#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#create DevCenterDevBoxDefinition#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#delete DevCenterDevBoxDefinition#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#read DevCenterDevBoxDefinition#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dev_center_dev_box_definition#update DevCenterDevBoxDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevCenterDevBoxDefinitionTimeoutsOutputReference <a name="DevCenterDevBoxDefinitionTimeoutsOutputReference" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DevCenterDevBoxDefinitionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts">DevCenterDevBoxDefinitionTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevCenterDevBoxDefinitionTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.devCenterDevBoxDefinition.DevCenterDevBoxDefinitionTimeouts">DevCenterDevBoxDefinitionTimeouts</a>

---



