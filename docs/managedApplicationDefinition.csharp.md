# `managedApplicationDefinition` Submodule <a name="`managedApplicationDefinition` Submodule" id="@cdktn/provider-azurerm.managedApplicationDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedApplicationDefinition <a name="ManagedApplicationDefinition" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition azurerm_managed_application_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedApplicationDefinition(Construct Scope, string Id, ManagedApplicationDefinitionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig">ManagedApplicationDefinitionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig">ManagedApplicationDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.putAuthorization">PutAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetCreateUiDefinition">ResetCreateUiDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetMainTemplate">ResetMainTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetPackageEnabled">ResetPackageEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetPackageFileUri">ResetPackageFileUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthorization` <a name="PutAuthorization" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.putAuthorization"></a>

```csharp
private void PutAuthorization(IResolvable|ManagedApplicationDefinitionAuthorization[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.putAuthorization.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization">ManagedApplicationDefinitionAuthorization</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.putTimeouts"></a>

```csharp
private void PutTimeouts(ManagedApplicationDefinitionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts">ManagedApplicationDefinitionTimeouts</a>

---

##### `ResetAuthorization` <a name="ResetAuthorization" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetCreateUiDefinition` <a name="ResetCreateUiDefinition" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetCreateUiDefinition"></a>

```csharp
private void ResetCreateUiDefinition()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMainTemplate` <a name="ResetMainTemplate" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetMainTemplate"></a>

```csharp
private void ResetMainTemplate()
```

##### `ResetPackageEnabled` <a name="ResetPackageEnabled" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetPackageEnabled"></a>

```csharp
private void ResetPackageEnabled()
```

##### `ResetPackageFileUri` <a name="ResetPackageFileUri" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetPackageFileUri"></a>

```csharp
private void ResetPackageFileUri()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ManagedApplicationDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ManagedApplicationDefinition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ManagedApplicationDefinition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ManagedApplicationDefinition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ManagedApplicationDefinition.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ManagedApplicationDefinition resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagedApplicationDefinition to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagedApplicationDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ManagedApplicationDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.authorization">Authorization</a></code> | <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList">ManagedApplicationDefinitionAuthorizationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference">ManagedApplicationDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.authorizationInput">AuthorizationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization">ManagedApplicationDefinitionAuthorization</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.createUiDefinitionInput">CreateUiDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.lockLevelInput">LockLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.mainTemplateInput">MainTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.packageEnabledInput">PackageEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.packageFileUriInput">PackageFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts">ManagedApplicationDefinitionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.createUiDefinition">CreateUiDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.lockLevel">LockLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.mainTemplate">MainTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.packageEnabled">PackageEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.packageFileUri">PackageFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.authorization"></a>

```csharp
public ManagedApplicationDefinitionAuthorizationList Authorization { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList">ManagedApplicationDefinitionAuthorizationList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.timeouts"></a>

```csharp
public ManagedApplicationDefinitionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference">ManagedApplicationDefinitionTimeoutsOutputReference</a>

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.authorizationInput"></a>

```csharp
public IResolvable|ManagedApplicationDefinitionAuthorization[] AuthorizationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization">ManagedApplicationDefinitionAuthorization</a>[]

---

##### `CreateUiDefinitionInput`<sup>Optional</sup> <a name="CreateUiDefinitionInput" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.createUiDefinitionInput"></a>

```csharp
public string CreateUiDefinitionInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `LockLevelInput`<sup>Optional</sup> <a name="LockLevelInput" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.lockLevelInput"></a>

```csharp
public string LockLevelInput { get; }
```

- *Type:* string

---

##### `MainTemplateInput`<sup>Optional</sup> <a name="MainTemplateInput" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.mainTemplateInput"></a>

```csharp
public string MainTemplateInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PackageEnabledInput`<sup>Optional</sup> <a name="PackageEnabledInput" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.packageEnabledInput"></a>

```csharp
public bool|IResolvable PackageEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PackageFileUriInput`<sup>Optional</sup> <a name="PackageFileUriInput" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.packageFileUriInput"></a>

```csharp
public string PackageFileUriInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.timeoutsInput"></a>

```csharp
public IResolvable|ManagedApplicationDefinitionTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts">ManagedApplicationDefinitionTimeouts</a>

---

##### `CreateUiDefinition`<sup>Required</sup> <a name="CreateUiDefinition" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.createUiDefinition"></a>

```csharp
public string CreateUiDefinition { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `LockLevel`<sup>Required</sup> <a name="LockLevel" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.lockLevel"></a>

```csharp
public string LockLevel { get; }
```

- *Type:* string

---

##### `MainTemplate`<sup>Required</sup> <a name="MainTemplate" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.mainTemplate"></a>

```csharp
public string MainTemplate { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PackageEnabled`<sup>Required</sup> <a name="PackageEnabled" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.packageEnabled"></a>

```csharp
public bool|IResolvable PackageEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PackageFileUri`<sup>Required</sup> <a name="PackageFileUri" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.packageFileUri"></a>

```csharp
public string PackageFileUri { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedApplicationDefinitionAuthorization <a name="ManagedApplicationDefinitionAuthorization" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedApplicationDefinitionAuthorization {
    string RoleDefinitionId,
    string ServicePrincipalId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization.property.roleDefinitionId">RoleDefinitionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#role_definition_id ManagedApplicationDefinition#role_definition_id}. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#service_principal_id ManagedApplicationDefinition#service_principal_id}. |

---

##### `RoleDefinitionId`<sup>Required</sup> <a name="RoleDefinitionId" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization.property.roleDefinitionId"></a>

```csharp
public string RoleDefinitionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#role_definition_id ManagedApplicationDefinition#role_definition_id}.

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization.property.servicePrincipalId"></a>

```csharp
public string ServicePrincipalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#service_principal_id ManagedApplicationDefinition#service_principal_id}.

---

### ManagedApplicationDefinitionConfig <a name="ManagedApplicationDefinitionConfig" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedApplicationDefinitionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string Location,
    string LockLevel,
    string Name,
    string ResourceGroupName,
    IResolvable|ManagedApplicationDefinitionAuthorization[] Authorization = null,
    string CreateUiDefinition = null,
    string Description = null,
    string Id = null,
    string MainTemplate = null,
    bool|IResolvable PackageEnabled = null,
    string PackageFileUri = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    ManagedApplicationDefinitionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#display_name ManagedApplicationDefinition#display_name}. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#location ManagedApplicationDefinition#location}. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.lockLevel">LockLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#lock_level ManagedApplicationDefinition#lock_level}. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#name ManagedApplicationDefinition#name}. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#resource_group_name ManagedApplicationDefinition#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.authorization">Authorization</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization">ManagedApplicationDefinitionAuthorization</a>[]</code> | authorization block. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.createUiDefinition">CreateUiDefinition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#create_ui_definition ManagedApplicationDefinition#create_ui_definition}. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#description ManagedApplicationDefinition#description}. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#id ManagedApplicationDefinition#id}. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.mainTemplate">MainTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#main_template ManagedApplicationDefinition#main_template}. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.packageEnabled">PackageEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#package_enabled ManagedApplicationDefinition#package_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.packageFileUri">PackageFileUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#package_file_uri ManagedApplicationDefinition#package_file_uri}. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#tags ManagedApplicationDefinition#tags}. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts">ManagedApplicationDefinitionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#display_name ManagedApplicationDefinition#display_name}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#location ManagedApplicationDefinition#location}.

---

##### `LockLevel`<sup>Required</sup> <a name="LockLevel" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.lockLevel"></a>

```csharp
public string LockLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#lock_level ManagedApplicationDefinition#lock_level}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#name ManagedApplicationDefinition#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#resource_group_name ManagedApplicationDefinition#resource_group_name}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.authorization"></a>

```csharp
public IResolvable|ManagedApplicationDefinitionAuthorization[] Authorization { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization">ManagedApplicationDefinitionAuthorization</a>[]

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#authorization ManagedApplicationDefinition#authorization}

---

##### `CreateUiDefinition`<sup>Optional</sup> <a name="CreateUiDefinition" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.createUiDefinition"></a>

```csharp
public string CreateUiDefinition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#create_ui_definition ManagedApplicationDefinition#create_ui_definition}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#description ManagedApplicationDefinition#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#id ManagedApplicationDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MainTemplate`<sup>Optional</sup> <a name="MainTemplate" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.mainTemplate"></a>

```csharp
public string MainTemplate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#main_template ManagedApplicationDefinition#main_template}.

---

##### `PackageEnabled`<sup>Optional</sup> <a name="PackageEnabled" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.packageEnabled"></a>

```csharp
public bool|IResolvable PackageEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#package_enabled ManagedApplicationDefinition#package_enabled}.

---

##### `PackageFileUri`<sup>Optional</sup> <a name="PackageFileUri" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.packageFileUri"></a>

```csharp
public string PackageFileUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#package_file_uri ManagedApplicationDefinition#package_file_uri}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#tags ManagedApplicationDefinition#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionConfig.property.timeouts"></a>

```csharp
public ManagedApplicationDefinitionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts">ManagedApplicationDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#timeouts ManagedApplicationDefinition#timeouts}

---

### ManagedApplicationDefinitionTimeouts <a name="ManagedApplicationDefinitionTimeouts" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedApplicationDefinitionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#create ManagedApplicationDefinition#create}. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#delete ManagedApplicationDefinition#delete}. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#read ManagedApplicationDefinition#read}. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#update ManagedApplicationDefinition#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#create ManagedApplicationDefinition#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#delete ManagedApplicationDefinition#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#read ManagedApplicationDefinition#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/managed_application_definition#update ManagedApplicationDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedApplicationDefinitionAuthorizationList <a name="ManagedApplicationDefinitionAuthorizationList" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedApplicationDefinitionAuthorizationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.get"></a>

```csharp
private ManagedApplicationDefinitionAuthorizationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization">ManagedApplicationDefinitionAuthorization</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationList.property.internalValue"></a>

```csharp
public IResolvable|ManagedApplicationDefinitionAuthorization[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization">ManagedApplicationDefinitionAuthorization</a>[]

---


### ManagedApplicationDefinitionAuthorizationOutputReference <a name="ManagedApplicationDefinitionAuthorizationOutputReference" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedApplicationDefinitionAuthorizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.roleDefinitionIdInput">RoleDefinitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.servicePrincipalIdInput">ServicePrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.roleDefinitionId">RoleDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization">ManagedApplicationDefinitionAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoleDefinitionIdInput`<sup>Optional</sup> <a name="RoleDefinitionIdInput" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.roleDefinitionIdInput"></a>

```csharp
public string RoleDefinitionIdInput { get; }
```

- *Type:* string

---

##### `ServicePrincipalIdInput`<sup>Optional</sup> <a name="ServicePrincipalIdInput" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.servicePrincipalIdInput"></a>

```csharp
public string ServicePrincipalIdInput { get; }
```

- *Type:* string

---

##### `RoleDefinitionId`<sup>Required</sup> <a name="RoleDefinitionId" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.roleDefinitionId"></a>

```csharp
public string RoleDefinitionId { get; }
```

- *Type:* string

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.servicePrincipalId"></a>

```csharp
public string ServicePrincipalId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorizationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ManagedApplicationDefinitionAuthorization InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionAuthorization">ManagedApplicationDefinitionAuthorization</a>

---


### ManagedApplicationDefinitionTimeoutsOutputReference <a name="ManagedApplicationDefinitionTimeoutsOutputReference" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedApplicationDefinitionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts">ManagedApplicationDefinitionTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ManagedApplicationDefinitionTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedApplicationDefinition.ManagedApplicationDefinitionTimeouts">ManagedApplicationDefinitionTimeouts</a>

---



