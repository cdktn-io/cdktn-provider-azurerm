# `storageDiscoveryWorkspace` Submodule <a name="`storageDiscoveryWorkspace` Submodule" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageDiscoveryWorkspace <a name="StorageDiscoveryWorkspace" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace azurerm_storage_discovery_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new StorageDiscoveryWorkspace(Construct Scope, string Id, StorageDiscoveryWorkspaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig">StorageDiscoveryWorkspaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig">StorageDiscoveryWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.putScope">PutScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetSku">ResetSku</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutScope` <a name="PutScope" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.putScope"></a>

```csharp
private void PutScope(IResolvable|StorageDiscoveryWorkspaceScope[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.putScope.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope">StorageDiscoveryWorkspaceScope</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.putTimeouts"></a>

```csharp
private void PutTimeouts(StorageDiscoveryWorkspaceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts">StorageDiscoveryWorkspaceTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSku` <a name="ResetSku" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetSku"></a>

```csharp
private void ResetSku()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StorageDiscoveryWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

StorageDiscoveryWorkspace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

StorageDiscoveryWorkspace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

StorageDiscoveryWorkspace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

StorageDiscoveryWorkspace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a StorageDiscoveryWorkspace resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageDiscoveryWorkspace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageDiscoveryWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the StorageDiscoveryWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.scope">Scope</a></code> | <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList">StorageDiscoveryWorkspaceScopeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference">StorageDiscoveryWorkspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.scopeInput">ScopeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope">StorageDiscoveryWorkspaceScope</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.skuInput">SkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts">StorageDiscoveryWorkspaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.workspaceRootsInput">WorkspaceRootsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.workspaceRoots">WorkspaceRoots</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.scope"></a>

```csharp
public StorageDiscoveryWorkspaceScopeList Scope { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList">StorageDiscoveryWorkspaceScopeList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.timeouts"></a>

```csharp
public StorageDiscoveryWorkspaceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference">StorageDiscoveryWorkspaceTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.scopeInput"></a>

```csharp
public IResolvable|StorageDiscoveryWorkspaceScope[] ScopeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope">StorageDiscoveryWorkspaceScope</a>[]

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.skuInput"></a>

```csharp
public string SkuInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.timeoutsInput"></a>

```csharp
public IResolvable|StorageDiscoveryWorkspaceTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts">StorageDiscoveryWorkspaceTimeouts</a>

---

##### `WorkspaceRootsInput`<sup>Optional</sup> <a name="WorkspaceRootsInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.workspaceRootsInput"></a>

```csharp
public string[] WorkspaceRootsInput { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WorkspaceRoots`<sup>Required</sup> <a name="WorkspaceRoots" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.workspaceRoots"></a>

```csharp
public string[] WorkspaceRoots { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageDiscoveryWorkspaceConfig <a name="StorageDiscoveryWorkspaceConfig" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new StorageDiscoveryWorkspaceConfig {
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
    IResolvable|StorageDiscoveryWorkspaceScope[] Scope,
    string[] WorkspaceRoots,
    string Description = null,
    string Id = null,
    string Sku = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    StorageDiscoveryWorkspaceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#location StorageDiscoveryWorkspace#location}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#name StorageDiscoveryWorkspace#name}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#resource_group_name StorageDiscoveryWorkspace#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.scope">Scope</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope">StorageDiscoveryWorkspaceScope</a>[]</code> | scope block. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.workspaceRoots">WorkspaceRoots</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#workspace_roots StorageDiscoveryWorkspace#workspace_roots}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#description StorageDiscoveryWorkspace#description}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#id StorageDiscoveryWorkspace#id}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.sku">Sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#sku StorageDiscoveryWorkspace#sku}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#tags StorageDiscoveryWorkspace#tags}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts">StorageDiscoveryWorkspaceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#location StorageDiscoveryWorkspace#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#name StorageDiscoveryWorkspace#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#resource_group_name StorageDiscoveryWorkspace#resource_group_name}.

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.scope"></a>

```csharp
public IResolvable|StorageDiscoveryWorkspaceScope[] Scope { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope">StorageDiscoveryWorkspaceScope</a>[]

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#scope StorageDiscoveryWorkspace#scope}

---

##### `WorkspaceRoots`<sup>Required</sup> <a name="WorkspaceRoots" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.workspaceRoots"></a>

```csharp
public string[] WorkspaceRoots { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#workspace_roots StorageDiscoveryWorkspace#workspace_roots}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#description StorageDiscoveryWorkspace#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#id StorageDiscoveryWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Sku`<sup>Optional</sup> <a name="Sku" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.sku"></a>

```csharp
public string Sku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#sku StorageDiscoveryWorkspace#sku}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#tags StorageDiscoveryWorkspace#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.timeouts"></a>

```csharp
public StorageDiscoveryWorkspaceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts">StorageDiscoveryWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#timeouts StorageDiscoveryWorkspace#timeouts}

---

### StorageDiscoveryWorkspaceScope <a name="StorageDiscoveryWorkspaceScope" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new StorageDiscoveryWorkspaceScope {
    string DisplayName,
    string[] ResourceTypes,
    string[] TagKeysOnly = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#display_name StorageDiscoveryWorkspace#display_name}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#resource_types StorageDiscoveryWorkspace#resource_types}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.property.tagKeysOnly">TagKeysOnly</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#tag_keys_only StorageDiscoveryWorkspace#tag_keys_only}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#tags StorageDiscoveryWorkspace#tags}. |

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#display_name StorageDiscoveryWorkspace#display_name}.

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#resource_types StorageDiscoveryWorkspace#resource_types}.

---

##### `TagKeysOnly`<sup>Optional</sup> <a name="TagKeysOnly" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.property.tagKeysOnly"></a>

```csharp
public string[] TagKeysOnly { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#tag_keys_only StorageDiscoveryWorkspace#tag_keys_only}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#tags StorageDiscoveryWorkspace#tags}.

---

### StorageDiscoveryWorkspaceTimeouts <a name="StorageDiscoveryWorkspaceTimeouts" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new StorageDiscoveryWorkspaceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#create StorageDiscoveryWorkspace#create}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#delete StorageDiscoveryWorkspace#delete}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#read StorageDiscoveryWorkspace#read}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#update StorageDiscoveryWorkspace#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#create StorageDiscoveryWorkspace#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#delete StorageDiscoveryWorkspace#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#read StorageDiscoveryWorkspace#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.6.0/docs/resources/storage_discovery_workspace#update StorageDiscoveryWorkspace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageDiscoveryWorkspaceScopeList <a name="StorageDiscoveryWorkspaceScopeList" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new StorageDiscoveryWorkspaceScopeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.get"></a>

```csharp
private StorageDiscoveryWorkspaceScopeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope">StorageDiscoveryWorkspaceScope</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.property.internalValue"></a>

```csharp
public IResolvable|StorageDiscoveryWorkspaceScope[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope">StorageDiscoveryWorkspaceScope</a>[]

---


### StorageDiscoveryWorkspaceScopeOutputReference <a name="StorageDiscoveryWorkspaceScopeOutputReference" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new StorageDiscoveryWorkspaceScopeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.resetTagKeysOnly">ResetTagKeysOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTagKeysOnly` <a name="ResetTagKeysOnly" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.resetTagKeysOnly"></a>

```csharp
private void ResetTagKeysOnly()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.tagKeysOnlyInput">TagKeysOnlyInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.tagKeysOnly">TagKeysOnly</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope">StorageDiscoveryWorkspaceScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.resourceTypesInput"></a>

```csharp
public string[] ResourceTypesInput { get; }
```

- *Type:* string[]

---

##### `TagKeysOnlyInput`<sup>Optional</sup> <a name="TagKeysOnlyInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.tagKeysOnlyInput"></a>

```csharp
public string[] TagKeysOnlyInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; }
```

- *Type:* string[]

---

##### `TagKeysOnly`<sup>Required</sup> <a name="TagKeysOnly" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.tagKeysOnly"></a>

```csharp
public string[] TagKeysOnly { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StorageDiscoveryWorkspaceScope InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope">StorageDiscoveryWorkspaceScope</a>

---


### StorageDiscoveryWorkspaceTimeoutsOutputReference <a name="StorageDiscoveryWorkspaceTimeoutsOutputReference" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new StorageDiscoveryWorkspaceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts">StorageDiscoveryWorkspaceTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StorageDiscoveryWorkspaceTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts">StorageDiscoveryWorkspaceTimeouts</a>

---



