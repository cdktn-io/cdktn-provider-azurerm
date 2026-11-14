# `cognitiveAccountProjectConnectionEntraId` Submodule <a name="`cognitiveAccountProjectConnectionEntraId` Submodule" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitiveAccountProjectConnectionEntraId <a name="CognitiveAccountProjectConnectionEntraId" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id azurerm_cognitive_account_project_connection_entra_id}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CognitiveAccountProjectConnectionEntraId(Construct Scope, string Id, CognitiveAccountProjectConnectionEntraIdConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig">CognitiveAccountProjectConnectionEntraIdConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig">CognitiveAccountProjectConnectionEntraIdConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.putTimeouts"></a>

```csharp
private void PutTimeouts(CognitiveAccountProjectConnectionEntraIdTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts">CognitiveAccountProjectConnectionEntraIdTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CognitiveAccountProjectConnectionEntraId resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

CognitiveAccountProjectConnectionEntraId.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

CognitiveAccountProjectConnectionEntraId.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

CognitiveAccountProjectConnectionEntraId.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

CognitiveAccountProjectConnectionEntraId.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CognitiveAccountProjectConnectionEntraId resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitiveAccountProjectConnectionEntraId to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitiveAccountProjectConnectionEntraId that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CognitiveAccountProjectConnectionEntraId to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference">CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.categoryInput">CategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.cognitiveAccountProjectIdInput">CognitiveAccountProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts">CognitiveAccountProjectConnectionEntraIdTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.cognitiveAccountProjectId">CognitiveAccountProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.target">Target</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.timeouts"></a>

```csharp
public CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference">CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference</a>

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.categoryInput"></a>

```csharp
public string CategoryInput { get; }
```

- *Type:* string

---

##### `CognitiveAccountProjectIdInput`<sup>Optional</sup> <a name="CognitiveAccountProjectIdInput" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.cognitiveAccountProjectIdInput"></a>

```csharp
public string CognitiveAccountProjectIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.timeoutsInput"></a>

```csharp
public IResolvable|CognitiveAccountProjectConnectionEntraIdTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts">CognitiveAccountProjectConnectionEntraIdTimeouts</a>

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `CognitiveAccountProjectId`<sup>Required</sup> <a name="CognitiveAccountProjectId" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.cognitiveAccountProjectId"></a>

```csharp
public string CognitiveAccountProjectId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitiveAccountProjectConnectionEntraIdConfig <a name="CognitiveAccountProjectConnectionEntraIdConfig" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CognitiveAccountProjectConnectionEntraIdConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Category,
    string CognitiveAccountProjectId,
    string Name,
    string Target,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    CognitiveAccountProjectConnectionEntraIdTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.category">Category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#category CognitiveAccountProjectConnectionEntraId#category}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.cognitiveAccountProjectId">CognitiveAccountProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#cognitive_account_project_id CognitiveAccountProjectConnectionEntraId#cognitive_account_project_id}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#name CognitiveAccountProjectConnectionEntraId#name}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.target">Target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#target CognitiveAccountProjectConnectionEntraId#target}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#id CognitiveAccountProjectConnectionEntraId#id}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#metadata CognitiveAccountProjectConnectionEntraId#metadata}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts">CognitiveAccountProjectConnectionEntraIdTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.category"></a>

```csharp
public string Category { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#category CognitiveAccountProjectConnectionEntraId#category}.

---

##### `CognitiveAccountProjectId`<sup>Required</sup> <a name="CognitiveAccountProjectId" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.cognitiveAccountProjectId"></a>

```csharp
public string CognitiveAccountProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#cognitive_account_project_id CognitiveAccountProjectConnectionEntraId#cognitive_account_project_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#name CognitiveAccountProjectConnectionEntraId#name}.

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#target CognitiveAccountProjectConnectionEntraId#target}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#id CognitiveAccountProjectConnectionEntraId#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#metadata CognitiveAccountProjectConnectionEntraId#metadata}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.timeouts"></a>

```csharp
public CognitiveAccountProjectConnectionEntraIdTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts">CognitiveAccountProjectConnectionEntraIdTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#timeouts CognitiveAccountProjectConnectionEntraId#timeouts}

---

### CognitiveAccountProjectConnectionEntraIdTimeouts <a name="CognitiveAccountProjectConnectionEntraIdTimeouts" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CognitiveAccountProjectConnectionEntraIdTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#create CognitiveAccountProjectConnectionEntraId#create}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#delete CognitiveAccountProjectConnectionEntraId#delete}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#read CognitiveAccountProjectConnectionEntraId#read}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#update CognitiveAccountProjectConnectionEntraId#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#create CognitiveAccountProjectConnectionEntraId#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#delete CognitiveAccountProjectConnectionEntraId#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#read CognitiveAccountProjectConnectionEntraId#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#update CognitiveAccountProjectConnectionEntraId#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference <a name="CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts">CognitiveAccountProjectConnectionEntraIdTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitiveAccountProjectConnectionEntraIdTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts">CognitiveAccountProjectConnectionEntraIdTimeouts</a>

---



