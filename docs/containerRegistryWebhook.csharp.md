# `containerRegistryWebhook` Submodule <a name="`containerRegistryWebhook` Submodule" id="@cdktn/provider-azurerm.containerRegistryWebhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerRegistryWebhook <a name="ContainerRegistryWebhook" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook azurerm_container_registry_webhook}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ContainerRegistryWebhook(Construct Scope, string Id, ContainerRegistryWebhookConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig">ContainerRegistryWebhookConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig">ContainerRegistryWebhookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.resetCustomHeaders">ResetCustomHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.putTimeouts"></a>

```csharp
private void PutTimeouts(ContainerRegistryWebhookTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeouts">ContainerRegistryWebhookTimeouts</a>

---

##### `ResetCustomHeaders` <a name="ResetCustomHeaders" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.resetCustomHeaders"></a>

```csharp
private void ResetCustomHeaders()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ContainerRegistryWebhook resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ContainerRegistryWebhook.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ContainerRegistryWebhook.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ContainerRegistryWebhook.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ContainerRegistryWebhook.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ContainerRegistryWebhook resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerRegistryWebhook to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerRegistryWebhook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ContainerRegistryWebhook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference">ContainerRegistryWebhookTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.actionsInput">ActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.customHeadersInput">CustomHeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.registryNameInput">RegistryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.serviceUriInput">ServiceUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeouts">ContainerRegistryWebhookTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.actions">Actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.customHeaders">CustomHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.registryName">RegistryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.serviceUri">ServiceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.timeouts"></a>

```csharp
public ContainerRegistryWebhookTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference">ContainerRegistryWebhookTimeoutsOutputReference</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.actionsInput"></a>

```csharp
public string[] ActionsInput { get; }
```

- *Type:* string[]

---

##### `CustomHeadersInput`<sup>Optional</sup> <a name="CustomHeadersInput" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.customHeadersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomHeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegistryNameInput`<sup>Optional</sup> <a name="RegistryNameInput" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.registryNameInput"></a>

```csharp
public string RegistryNameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `ServiceUriInput`<sup>Optional</sup> <a name="ServiceUriInput" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.serviceUriInput"></a>

```csharp
public string ServiceUriInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.timeoutsInput"></a>

```csharp
public IResolvable|ContainerRegistryWebhookTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeouts">ContainerRegistryWebhookTimeouts</a>

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.actions"></a>

```csharp
public string[] Actions { get; }
```

- *Type:* string[]

---

##### `CustomHeaders`<sup>Required</sup> <a name="CustomHeaders" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.customHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomHeaders { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RegistryName`<sup>Required</sup> <a name="RegistryName" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.registryName"></a>

```csharp
public string RegistryName { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `ServiceUri`<sup>Required</sup> <a name="ServiceUri" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.serviceUri"></a>

```csharp
public string ServiceUri { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhook.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerRegistryWebhookConfig <a name="ContainerRegistryWebhookConfig" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ContainerRegistryWebhookConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] Actions,
    string Location,
    string Name,
    string RegistryName,
    string ResourceGroupName,
    string ServiceUri,
    System.Collections.Generic.IDictionary<string, string> CustomHeaders = null,
    string Id = null,
    string Scope = null,
    string Status = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    ContainerRegistryWebhookTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.actions">Actions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook#actions ContainerRegistryWebhook#actions}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook#location ContainerRegistryWebhook#location}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook#name ContainerRegistryWebhook#name}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.registryName">RegistryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook#registry_name ContainerRegistryWebhook#registry_name}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook#resource_group_name ContainerRegistryWebhook#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.serviceUri">ServiceUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook#service_uri ContainerRegistryWebhook#service_uri}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.customHeaders">CustomHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook#custom_headers ContainerRegistryWebhook#custom_headers}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook#id ContainerRegistryWebhook#id}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook#scope ContainerRegistryWebhook#scope}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook#status ContainerRegistryWebhook#status}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook#tags ContainerRegistryWebhook#tags}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeouts">ContainerRegistryWebhookTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.actions"></a>

```csharp
public string[] Actions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook#actions ContainerRegistryWebhook#actions}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook#location ContainerRegistryWebhook#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook#name ContainerRegistryWebhook#name}.

---

##### `RegistryName`<sup>Required</sup> <a name="RegistryName" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.registryName"></a>

```csharp
public string RegistryName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook#registry_name ContainerRegistryWebhook#registry_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook#resource_group_name ContainerRegistryWebhook#resource_group_name}.

---

##### `ServiceUri`<sup>Required</sup> <a name="ServiceUri" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.serviceUri"></a>

```csharp
public string ServiceUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook#service_uri ContainerRegistryWebhook#service_uri}.

---

##### `CustomHeaders`<sup>Optional</sup> <a name="CustomHeaders" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.customHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomHeaders { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook#custom_headers ContainerRegistryWebhook#custom_headers}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook#id ContainerRegistryWebhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook#scope ContainerRegistryWebhook#scope}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook#status ContainerRegistryWebhook#status}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook#tags ContainerRegistryWebhook#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookConfig.property.timeouts"></a>

```csharp
public ContainerRegistryWebhookTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeouts">ContainerRegistryWebhookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook#timeouts ContainerRegistryWebhook#timeouts}

---

### ContainerRegistryWebhookTimeouts <a name="ContainerRegistryWebhookTimeouts" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ContainerRegistryWebhookTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook#create ContainerRegistryWebhook#create}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook#delete ContainerRegistryWebhook#delete}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook#read ContainerRegistryWebhook#read}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook#update ContainerRegistryWebhook#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook#create ContainerRegistryWebhook#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook#delete ContainerRegistryWebhook#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook#read ContainerRegistryWebhook#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_registry_webhook#update ContainerRegistryWebhook#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerRegistryWebhookTimeoutsOutputReference <a name="ContainerRegistryWebhookTimeoutsOutputReference" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ContainerRegistryWebhookTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeouts">ContainerRegistryWebhookTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ContainerRegistryWebhookTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.containerRegistryWebhook.ContainerRegistryWebhookTimeouts">ContainerRegistryWebhookTimeouts</a>

---



