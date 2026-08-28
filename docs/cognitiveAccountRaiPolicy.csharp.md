# `cognitiveAccountRaiPolicy` Submodule <a name="`cognitiveAccountRaiPolicy` Submodule" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitiveAccountRaiPolicy <a name="CognitiveAccountRaiPolicy" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy azurerm_cognitive_account_rai_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CognitiveAccountRaiPolicy(Construct Scope, string Id, CognitiveAccountRaiPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig">CognitiveAccountRaiPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig">CognitiveAccountRaiPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.putContentFilter">PutContentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContentFilter` <a name="PutContentFilter" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.putContentFilter"></a>

```csharp
private void PutContentFilter(IResolvable|CognitiveAccountRaiPolicyContentFilter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.putContentFilter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter">CognitiveAccountRaiPolicyContentFilter</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(CognitiveAccountRaiPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts">CognitiveAccountRaiPolicyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CognitiveAccountRaiPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

CognitiveAccountRaiPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

CognitiveAccountRaiPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

CognitiveAccountRaiPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

CognitiveAccountRaiPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CognitiveAccountRaiPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitiveAccountRaiPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitiveAccountRaiPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CognitiveAccountRaiPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.contentFilter">ContentFilter</a></code> | <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList">CognitiveAccountRaiPolicyContentFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference">CognitiveAccountRaiPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.basePolicyNameInput">BasePolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.cognitiveAccountIdInput">CognitiveAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.contentFilterInput">ContentFilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter">CognitiveAccountRaiPolicyContentFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts">CognitiveAccountRaiPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.basePolicyName">BasePolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.cognitiveAccountId">CognitiveAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ContentFilter`<sup>Required</sup> <a name="ContentFilter" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.contentFilter"></a>

```csharp
public CognitiveAccountRaiPolicyContentFilterList ContentFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList">CognitiveAccountRaiPolicyContentFilterList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.timeouts"></a>

```csharp
public CognitiveAccountRaiPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference">CognitiveAccountRaiPolicyTimeoutsOutputReference</a>

---

##### `BasePolicyNameInput`<sup>Optional</sup> <a name="BasePolicyNameInput" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.basePolicyNameInput"></a>

```csharp
public string BasePolicyNameInput { get; }
```

- *Type:* string

---

##### `CognitiveAccountIdInput`<sup>Optional</sup> <a name="CognitiveAccountIdInput" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.cognitiveAccountIdInput"></a>

```csharp
public string CognitiveAccountIdInput { get; }
```

- *Type:* string

---

##### `ContentFilterInput`<sup>Optional</sup> <a name="ContentFilterInput" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.contentFilterInput"></a>

```csharp
public IResolvable|CognitiveAccountRaiPolicyContentFilter[] ContentFilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter">CognitiveAccountRaiPolicyContentFilter</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.timeoutsInput"></a>

```csharp
public IResolvable|CognitiveAccountRaiPolicyTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts">CognitiveAccountRaiPolicyTimeouts</a>

---

##### `BasePolicyName`<sup>Required</sup> <a name="BasePolicyName" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.basePolicyName"></a>

```csharp
public string BasePolicyName { get; }
```

- *Type:* string

---

##### `CognitiveAccountId`<sup>Required</sup> <a name="CognitiveAccountId" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.cognitiveAccountId"></a>

```csharp
public string CognitiveAccountId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitiveAccountRaiPolicyConfig <a name="CognitiveAccountRaiPolicyConfig" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CognitiveAccountRaiPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BasePolicyName,
    string CognitiveAccountId,
    IResolvable|CognitiveAccountRaiPolicyContentFilter[] ContentFilter,
    string Name,
    string Id = null,
    string Mode = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    CognitiveAccountRaiPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.basePolicyName">BasePolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#base_policy_name CognitiveAccountRaiPolicy#base_policy_name}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.cognitiveAccountId">CognitiveAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#cognitive_account_id CognitiveAccountRaiPolicy#cognitive_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.contentFilter">ContentFilter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter">CognitiveAccountRaiPolicyContentFilter</a>[]</code> | content_filter block. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#name CognitiveAccountRaiPolicy#name}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#id CognitiveAccountRaiPolicy#id}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#mode CognitiveAccountRaiPolicy#mode}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#tags CognitiveAccountRaiPolicy#tags}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts">CognitiveAccountRaiPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BasePolicyName`<sup>Required</sup> <a name="BasePolicyName" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.basePolicyName"></a>

```csharp
public string BasePolicyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#base_policy_name CognitiveAccountRaiPolicy#base_policy_name}.

---

##### `CognitiveAccountId`<sup>Required</sup> <a name="CognitiveAccountId" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.cognitiveAccountId"></a>

```csharp
public string CognitiveAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#cognitive_account_id CognitiveAccountRaiPolicy#cognitive_account_id}.

---

##### `ContentFilter`<sup>Required</sup> <a name="ContentFilter" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.contentFilter"></a>

```csharp
public IResolvable|CognitiveAccountRaiPolicyContentFilter[] ContentFilter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter">CognitiveAccountRaiPolicyContentFilter</a>[]

content_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#content_filter CognitiveAccountRaiPolicy#content_filter}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#name CognitiveAccountRaiPolicy#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#id CognitiveAccountRaiPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#mode CognitiveAccountRaiPolicy#mode}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#tags CognitiveAccountRaiPolicy#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.timeouts"></a>

```csharp
public CognitiveAccountRaiPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts">CognitiveAccountRaiPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#timeouts CognitiveAccountRaiPolicy#timeouts}

---

### CognitiveAccountRaiPolicyContentFilter <a name="CognitiveAccountRaiPolicyContentFilter" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CognitiveAccountRaiPolicyContentFilter {
    bool|IResolvable BlockEnabled,
    bool|IResolvable FilterEnabled,
    string Name,
    string Source,
    string SeverityThreshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter.property.blockEnabled">BlockEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#block_enabled CognitiveAccountRaiPolicy#block_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter.property.filterEnabled">FilterEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#filter_enabled CognitiveAccountRaiPolicy#filter_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#name CognitiveAccountRaiPolicy#name}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#source CognitiveAccountRaiPolicy#source}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter.property.severityThreshold">SeverityThreshold</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#severity_threshold CognitiveAccountRaiPolicy#severity_threshold}. |

---

##### `BlockEnabled`<sup>Required</sup> <a name="BlockEnabled" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter.property.blockEnabled"></a>

```csharp
public bool|IResolvable BlockEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#block_enabled CognitiveAccountRaiPolicy#block_enabled}.

---

##### `FilterEnabled`<sup>Required</sup> <a name="FilterEnabled" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter.property.filterEnabled"></a>

```csharp
public bool|IResolvable FilterEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#filter_enabled CognitiveAccountRaiPolicy#filter_enabled}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#name CognitiveAccountRaiPolicy#name}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#source CognitiveAccountRaiPolicy#source}.

---

##### `SeverityThreshold`<sup>Optional</sup> <a name="SeverityThreshold" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter.property.severityThreshold"></a>

```csharp
public string SeverityThreshold { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#severity_threshold CognitiveAccountRaiPolicy#severity_threshold}.

---

### CognitiveAccountRaiPolicyTimeouts <a name="CognitiveAccountRaiPolicyTimeouts" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CognitiveAccountRaiPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#create CognitiveAccountRaiPolicy#create}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#delete CognitiveAccountRaiPolicy#delete}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#read CognitiveAccountRaiPolicy#read}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#update CognitiveAccountRaiPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#create CognitiveAccountRaiPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#delete CognitiveAccountRaiPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#read CognitiveAccountRaiPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_rai_policy#update CognitiveAccountRaiPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitiveAccountRaiPolicyContentFilterList <a name="CognitiveAccountRaiPolicyContentFilterList" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CognitiveAccountRaiPolicyContentFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.get"></a>

```csharp
private CognitiveAccountRaiPolicyContentFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter">CognitiveAccountRaiPolicyContentFilter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.property.internalValue"></a>

```csharp
public IResolvable|CognitiveAccountRaiPolicyContentFilter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter">CognitiveAccountRaiPolicyContentFilter</a>[]

---


### CognitiveAccountRaiPolicyContentFilterOutputReference <a name="CognitiveAccountRaiPolicyContentFilterOutputReference" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CognitiveAccountRaiPolicyContentFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.resetSeverityThreshold">ResetSeverityThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSeverityThreshold` <a name="ResetSeverityThreshold" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.resetSeverityThreshold"></a>

```csharp
private void ResetSeverityThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.blockEnabledInput">BlockEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.filterEnabledInput">FilterEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.severityThresholdInput">SeverityThresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.blockEnabled">BlockEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.filterEnabled">FilterEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.severityThreshold">SeverityThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter">CognitiveAccountRaiPolicyContentFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockEnabledInput`<sup>Optional</sup> <a name="BlockEnabledInput" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.blockEnabledInput"></a>

```csharp
public bool|IResolvable BlockEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FilterEnabledInput`<sup>Optional</sup> <a name="FilterEnabledInput" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.filterEnabledInput"></a>

```csharp
public bool|IResolvable FilterEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SeverityThresholdInput`<sup>Optional</sup> <a name="SeverityThresholdInput" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.severityThresholdInput"></a>

```csharp
public string SeverityThresholdInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `BlockEnabled`<sup>Required</sup> <a name="BlockEnabled" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.blockEnabled"></a>

```csharp
public bool|IResolvable BlockEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FilterEnabled`<sup>Required</sup> <a name="FilterEnabled" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.filterEnabled"></a>

```csharp
public bool|IResolvable FilterEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SeverityThreshold`<sup>Required</sup> <a name="SeverityThreshold" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.severityThreshold"></a>

```csharp
public string SeverityThreshold { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitiveAccountRaiPolicyContentFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter">CognitiveAccountRaiPolicyContentFilter</a>

---


### CognitiveAccountRaiPolicyTimeoutsOutputReference <a name="CognitiveAccountRaiPolicyTimeoutsOutputReference" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CognitiveAccountRaiPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts">CognitiveAccountRaiPolicyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitiveAccountRaiPolicyTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts">CognitiveAccountRaiPolicyTimeouts</a>

---



