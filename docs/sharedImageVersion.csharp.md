# `sharedImageVersion` Submodule <a name="`sharedImageVersion` Submodule" id="@cdktn/provider-azurerm.sharedImageVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SharedImageVersion <a name="SharedImageVersion" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version azurerm_shared_image_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SharedImageVersion(Construct Scope, string Id, SharedImageVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig">SharedImageVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig">SharedImageVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.putTargetRegion">PutTargetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.putUefi">PutUefi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetBlobUri">ResetBlobUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetDeletionOfReplicatedLocationsEnabled">ResetDeletionOfReplicatedLocationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetEndOfLifeDate">ResetEndOfLifeDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetExcludeFromLatest">ResetExcludeFromLatest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetManagedImageId">ResetManagedImageId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetOsDiskSnapshotId">ResetOsDiskSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetReplicationMode">ResetReplicationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetStorageAccountId">ResetStorageAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetUefi">ResetUefi</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTargetRegion` <a name="PutTargetRegion" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.putTargetRegion"></a>

```csharp
private void PutTargetRegion(IResolvable|SharedImageVersionTargetRegion[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.putTargetRegion.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.putTimeouts"></a>

```csharp
private void PutTimeouts(SharedImageVersionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a>

---

##### `PutUefi` <a name="PutUefi" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.putUefi"></a>

```csharp
private void PutUefi(SharedImageVersionUefi Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.putUefi.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi">SharedImageVersionUefi</a>

---

##### `ResetBlobUri` <a name="ResetBlobUri" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetBlobUri"></a>

```csharp
private void ResetBlobUri()
```

##### `ResetDeletionOfReplicatedLocationsEnabled` <a name="ResetDeletionOfReplicatedLocationsEnabled" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetDeletionOfReplicatedLocationsEnabled"></a>

```csharp
private void ResetDeletionOfReplicatedLocationsEnabled()
```

##### `ResetEndOfLifeDate` <a name="ResetEndOfLifeDate" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetEndOfLifeDate"></a>

```csharp
private void ResetEndOfLifeDate()
```

##### `ResetExcludeFromLatest` <a name="ResetExcludeFromLatest" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetExcludeFromLatest"></a>

```csharp
private void ResetExcludeFromLatest()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetManagedImageId` <a name="ResetManagedImageId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetManagedImageId"></a>

```csharp
private void ResetManagedImageId()
```

##### `ResetOsDiskSnapshotId` <a name="ResetOsDiskSnapshotId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetOsDiskSnapshotId"></a>

```csharp
private void ResetOsDiskSnapshotId()
```

##### `ResetReplicationMode` <a name="ResetReplicationMode" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetReplicationMode"></a>

```csharp
private void ResetReplicationMode()
```

##### `ResetStorageAccountId` <a name="ResetStorageAccountId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetStorageAccountId"></a>

```csharp
private void ResetStorageAccountId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUefi` <a name="ResetUefi" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetUefi"></a>

```csharp
private void ResetUefi()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SharedImageVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SharedImageVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SharedImageVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SharedImageVersion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SharedImageVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SharedImageVersion resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SharedImageVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SharedImageVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SharedImageVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.targetRegion">TargetRegion</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList">SharedImageVersionTargetRegionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference">SharedImageVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.uefi">Uefi</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference">SharedImageVersionUefiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.blobUriInput">BlobUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.deletionOfReplicatedLocationsEnabledInput">DeletionOfReplicatedLocationsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.endOfLifeDateInput">EndOfLifeDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.excludeFromLatestInput">ExcludeFromLatestInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.galleryNameInput">GalleryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.imageNameInput">ImageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.managedImageIdInput">ManagedImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.osDiskSnapshotIdInput">OsDiskSnapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.replicationModeInput">ReplicationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.targetRegionInput">TargetRegionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.uefiInput">UefiInput</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi">SharedImageVersionUefi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.blobUri">BlobUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.deletionOfReplicatedLocationsEnabled">DeletionOfReplicatedLocationsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.endOfLifeDate">EndOfLifeDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.excludeFromLatest">ExcludeFromLatest</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.galleryName">GalleryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.imageName">ImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.managedImageId">ManagedImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.osDiskSnapshotId">OsDiskSnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.replicationMode">ReplicationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `TargetRegion`<sup>Required</sup> <a name="TargetRegion" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.targetRegion"></a>

```csharp
public SharedImageVersionTargetRegionList TargetRegion { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList">SharedImageVersionTargetRegionList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.timeouts"></a>

```csharp
public SharedImageVersionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference">SharedImageVersionTimeoutsOutputReference</a>

---

##### `Uefi`<sup>Required</sup> <a name="Uefi" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.uefi"></a>

```csharp
public SharedImageVersionUefiOutputReference Uefi { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference">SharedImageVersionUefiOutputReference</a>

---

##### `BlobUriInput`<sup>Optional</sup> <a name="BlobUriInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.blobUriInput"></a>

```csharp
public string BlobUriInput { get; }
```

- *Type:* string

---

##### `DeletionOfReplicatedLocationsEnabledInput`<sup>Optional</sup> <a name="DeletionOfReplicatedLocationsEnabledInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.deletionOfReplicatedLocationsEnabledInput"></a>

```csharp
public bool|IResolvable DeletionOfReplicatedLocationsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EndOfLifeDateInput`<sup>Optional</sup> <a name="EndOfLifeDateInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.endOfLifeDateInput"></a>

```csharp
public string EndOfLifeDateInput { get; }
```

- *Type:* string

---

##### `ExcludeFromLatestInput`<sup>Optional</sup> <a name="ExcludeFromLatestInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.excludeFromLatestInput"></a>

```csharp
public bool|IResolvable ExcludeFromLatestInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GalleryNameInput`<sup>Optional</sup> <a name="GalleryNameInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.galleryNameInput"></a>

```csharp
public string GalleryNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.imageNameInput"></a>

```csharp
public string ImageNameInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ManagedImageIdInput`<sup>Optional</sup> <a name="ManagedImageIdInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.managedImageIdInput"></a>

```csharp
public string ManagedImageIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OsDiskSnapshotIdInput`<sup>Optional</sup> <a name="OsDiskSnapshotIdInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.osDiskSnapshotIdInput"></a>

```csharp
public string OsDiskSnapshotIdInput { get; }
```

- *Type:* string

---

##### `ReplicationModeInput`<sup>Optional</sup> <a name="ReplicationModeInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.replicationModeInput"></a>

```csharp
public string ReplicationModeInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.storageAccountIdInput"></a>

```csharp
public string StorageAccountIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetRegionInput`<sup>Optional</sup> <a name="TargetRegionInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.targetRegionInput"></a>

```csharp
public IResolvable|SharedImageVersionTargetRegion[] TargetRegionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.timeoutsInput"></a>

```csharp
public IResolvable|SharedImageVersionTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a>

---

##### `UefiInput`<sup>Optional</sup> <a name="UefiInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.uefiInput"></a>

```csharp
public SharedImageVersionUefi UefiInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi">SharedImageVersionUefi</a>

---

##### `BlobUri`<sup>Required</sup> <a name="BlobUri" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.blobUri"></a>

```csharp
public string BlobUri { get; }
```

- *Type:* string

---

##### `DeletionOfReplicatedLocationsEnabled`<sup>Required</sup> <a name="DeletionOfReplicatedLocationsEnabled" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.deletionOfReplicatedLocationsEnabled"></a>

```csharp
public bool|IResolvable DeletionOfReplicatedLocationsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EndOfLifeDate`<sup>Required</sup> <a name="EndOfLifeDate" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.endOfLifeDate"></a>

```csharp
public string EndOfLifeDate { get; }
```

- *Type:* string

---

##### `ExcludeFromLatest`<sup>Required</sup> <a name="ExcludeFromLatest" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.excludeFromLatest"></a>

```csharp
public bool|IResolvable ExcludeFromLatest { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GalleryName`<sup>Required</sup> <a name="GalleryName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.galleryName"></a>

```csharp
public string GalleryName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.imageName"></a>

```csharp
public string ImageName { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ManagedImageId`<sup>Required</sup> <a name="ManagedImageId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.managedImageId"></a>

```csharp
public string ManagedImageId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OsDiskSnapshotId`<sup>Required</sup> <a name="OsDiskSnapshotId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.osDiskSnapshotId"></a>

```csharp
public string OsDiskSnapshotId { get; }
```

- *Type:* string

---

##### `ReplicationMode`<sup>Required</sup> <a name="ReplicationMode" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.replicationMode"></a>

```csharp
public string ReplicationMode { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SharedImageVersionConfig <a name="SharedImageVersionConfig" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SharedImageVersionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string GalleryName,
    string ImageName,
    string Location,
    string Name,
    string ResourceGroupName,
    IResolvable|SharedImageVersionTargetRegion[] TargetRegion,
    string BlobUri = null,
    bool|IResolvable DeletionOfReplicatedLocationsEnabled = null,
    string EndOfLifeDate = null,
    bool|IResolvable ExcludeFromLatest = null,
    string Id = null,
    string ManagedImageId = null,
    string OsDiskSnapshotId = null,
    string ReplicationMode = null,
    string StorageAccountId = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    SharedImageVersionTimeouts Timeouts = null,
    SharedImageVersionUefi Uefi = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.galleryName">GalleryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#gallery_name SharedImageVersion#gallery_name}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.imageName">ImageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#image_name SharedImageVersion#image_name}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#location SharedImageVersion#location}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#name SharedImageVersion#name}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#resource_group_name SharedImageVersion#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.targetRegion">TargetRegion</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>[]</code> | target_region block. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.blobUri">BlobUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#blob_uri SharedImageVersion#blob_uri}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.deletionOfReplicatedLocationsEnabled">DeletionOfReplicatedLocationsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#deletion_of_replicated_locations_enabled SharedImageVersion#deletion_of_replicated_locations_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.endOfLifeDate">EndOfLifeDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#end_of_life_date SharedImageVersion#end_of_life_date}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.excludeFromLatest">ExcludeFromLatest</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#exclude_from_latest SharedImageVersion#exclude_from_latest}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#id SharedImageVersion#id}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.managedImageId">ManagedImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#managed_image_id SharedImageVersion#managed_image_id}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.osDiskSnapshotId">OsDiskSnapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#os_disk_snapshot_id SharedImageVersion#os_disk_snapshot_id}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.replicationMode">ReplicationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#replication_mode SharedImageVersion#replication_mode}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#storage_account_id SharedImageVersion#storage_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#tags SharedImageVersion#tags}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.uefi">Uefi</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi">SharedImageVersionUefi</a></code> | uefi block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GalleryName`<sup>Required</sup> <a name="GalleryName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.galleryName"></a>

```csharp
public string GalleryName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#gallery_name SharedImageVersion#gallery_name}.

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.imageName"></a>

```csharp
public string ImageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#image_name SharedImageVersion#image_name}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#location SharedImageVersion#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#name SharedImageVersion#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#resource_group_name SharedImageVersion#resource_group_name}.

---

##### `TargetRegion`<sup>Required</sup> <a name="TargetRegion" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.targetRegion"></a>

```csharp
public IResolvable|SharedImageVersionTargetRegion[] TargetRegion { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>[]

target_region block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#target_region SharedImageVersion#target_region}

---

##### `BlobUri`<sup>Optional</sup> <a name="BlobUri" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.blobUri"></a>

```csharp
public string BlobUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#blob_uri SharedImageVersion#blob_uri}.

---

##### `DeletionOfReplicatedLocationsEnabled`<sup>Optional</sup> <a name="DeletionOfReplicatedLocationsEnabled" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.deletionOfReplicatedLocationsEnabled"></a>

```csharp
public bool|IResolvable DeletionOfReplicatedLocationsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#deletion_of_replicated_locations_enabled SharedImageVersion#deletion_of_replicated_locations_enabled}.

---

##### `EndOfLifeDate`<sup>Optional</sup> <a name="EndOfLifeDate" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.endOfLifeDate"></a>

```csharp
public string EndOfLifeDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#end_of_life_date SharedImageVersion#end_of_life_date}.

---

##### `ExcludeFromLatest`<sup>Optional</sup> <a name="ExcludeFromLatest" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.excludeFromLatest"></a>

```csharp
public bool|IResolvable ExcludeFromLatest { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#exclude_from_latest SharedImageVersion#exclude_from_latest}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#id SharedImageVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManagedImageId`<sup>Optional</sup> <a name="ManagedImageId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.managedImageId"></a>

```csharp
public string ManagedImageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#managed_image_id SharedImageVersion#managed_image_id}.

---

##### `OsDiskSnapshotId`<sup>Optional</sup> <a name="OsDiskSnapshotId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.osDiskSnapshotId"></a>

```csharp
public string OsDiskSnapshotId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#os_disk_snapshot_id SharedImageVersion#os_disk_snapshot_id}.

---

##### `ReplicationMode`<sup>Optional</sup> <a name="ReplicationMode" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.replicationMode"></a>

```csharp
public string ReplicationMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#replication_mode SharedImageVersion#replication_mode}.

---

##### `StorageAccountId`<sup>Optional</sup> <a name="StorageAccountId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#storage_account_id SharedImageVersion#storage_account_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#tags SharedImageVersion#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.timeouts"></a>

```csharp
public SharedImageVersionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#timeouts SharedImageVersion#timeouts}

---

##### `Uefi`<sup>Optional</sup> <a name="Uefi" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.uefi"></a>

```csharp
public SharedImageVersionUefi Uefi { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi">SharedImageVersionUefi</a>

uefi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#uefi SharedImageVersion#uefi}

---

### SharedImageVersionTargetRegion <a name="SharedImageVersionTargetRegion" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SharedImageVersionTargetRegion {
    string Name,
    double RegionalReplicaCount,
    string DiskEncryptionSetId = null,
    bool|IResolvable ExcludeFromLatestEnabled = null,
    string StorageAccountType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#name SharedImageVersion#name}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.regionalReplicaCount">RegionalReplicaCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#regional_replica_count SharedImageVersion#regional_replica_count}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#disk_encryption_set_id SharedImageVersion#disk_encryption_set_id}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.excludeFromLatestEnabled">ExcludeFromLatestEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#exclude_from_latest_enabled SharedImageVersion#exclude_from_latest_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.storageAccountType">StorageAccountType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#storage_account_type SharedImageVersion#storage_account_type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#name SharedImageVersion#name}.

---

##### `RegionalReplicaCount`<sup>Required</sup> <a name="RegionalReplicaCount" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.regionalReplicaCount"></a>

```csharp
public double RegionalReplicaCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#regional_replica_count SharedImageVersion#regional_replica_count}.

---

##### `DiskEncryptionSetId`<sup>Optional</sup> <a name="DiskEncryptionSetId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.diskEncryptionSetId"></a>

```csharp
public string DiskEncryptionSetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#disk_encryption_set_id SharedImageVersion#disk_encryption_set_id}.

---

##### `ExcludeFromLatestEnabled`<sup>Optional</sup> <a name="ExcludeFromLatestEnabled" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.excludeFromLatestEnabled"></a>

```csharp
public bool|IResolvable ExcludeFromLatestEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#exclude_from_latest_enabled SharedImageVersion#exclude_from_latest_enabled}.

---

##### `StorageAccountType`<sup>Optional</sup> <a name="StorageAccountType" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.storageAccountType"></a>

```csharp
public string StorageAccountType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#storage_account_type SharedImageVersion#storage_account_type}.

---

### SharedImageVersionTimeouts <a name="SharedImageVersionTimeouts" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SharedImageVersionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#create SharedImageVersion#create}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#delete SharedImageVersion#delete}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#read SharedImageVersion#read}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#update SharedImageVersion#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#create SharedImageVersion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#delete SharedImageVersion#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#read SharedImageVersion#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#update SharedImageVersion#update}.

---

### SharedImageVersionUefi <a name="SharedImageVersionUefi" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SharedImageVersionUefi {
    string[] SignatureTemplateNames,
    SharedImageVersionUefiAdditionalSignatures AdditionalSignatures = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi.property.signatureTemplateNames">SignatureTemplateNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#signature_template_names SharedImageVersion#signature_template_names}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi.property.additionalSignatures">AdditionalSignatures</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures">SharedImageVersionUefiAdditionalSignatures</a></code> | additional_signatures block. |

---

##### `SignatureTemplateNames`<sup>Required</sup> <a name="SignatureTemplateNames" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi.property.signatureTemplateNames"></a>

```csharp
public string[] SignatureTemplateNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#signature_template_names SharedImageVersion#signature_template_names}.

---

##### `AdditionalSignatures`<sup>Optional</sup> <a name="AdditionalSignatures" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi.property.additionalSignatures"></a>

```csharp
public SharedImageVersionUefiAdditionalSignatures AdditionalSignatures { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures">SharedImageVersionUefiAdditionalSignatures</a>

additional_signatures block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#additional_signatures SharedImageVersion#additional_signatures}

---

### SharedImageVersionUefiAdditionalSignatures <a name="SharedImageVersionUefiAdditionalSignatures" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SharedImageVersionUefiAdditionalSignatures {
    IResolvable|SharedImageVersionUefiAdditionalSignaturesDb[] Db = null,
    IResolvable|SharedImageVersionUefiAdditionalSignaturesDbx[] Dbx = null,
    IResolvable|SharedImageVersionUefiAdditionalSignaturesKek[] Kek = null,
    SharedImageVersionUefiAdditionalSignaturesPk Pk = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures.property.db">Db</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb">SharedImageVersionUefiAdditionalSignaturesDb</a>[]</code> | db block. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures.property.dbx">Dbx</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx">SharedImageVersionUefiAdditionalSignaturesDbx</a>[]</code> | dbx block. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures.property.kek">Kek</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek">SharedImageVersionUefiAdditionalSignaturesKek</a>[]</code> | kek block. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures.property.pk">Pk</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk">SharedImageVersionUefiAdditionalSignaturesPk</a></code> | pk block. |

---

##### `Db`<sup>Optional</sup> <a name="Db" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures.property.db"></a>

```csharp
public IResolvable|SharedImageVersionUefiAdditionalSignaturesDb[] Db { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb">SharedImageVersionUefiAdditionalSignaturesDb</a>[]

db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#db SharedImageVersion#db}

---

##### `Dbx`<sup>Optional</sup> <a name="Dbx" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures.property.dbx"></a>

```csharp
public IResolvable|SharedImageVersionUefiAdditionalSignaturesDbx[] Dbx { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx">SharedImageVersionUefiAdditionalSignaturesDbx</a>[]

dbx block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#dbx SharedImageVersion#dbx}

---

##### `Kek`<sup>Optional</sup> <a name="Kek" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures.property.kek"></a>

```csharp
public IResolvable|SharedImageVersionUefiAdditionalSignaturesKek[] Kek { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek">SharedImageVersionUefiAdditionalSignaturesKek</a>[]

kek block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#kek SharedImageVersion#kek}

---

##### `Pk`<sup>Optional</sup> <a name="Pk" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures.property.pk"></a>

```csharp
public SharedImageVersionUefiAdditionalSignaturesPk Pk { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk">SharedImageVersionUefiAdditionalSignaturesPk</a>

pk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#pk SharedImageVersion#pk}

---

### SharedImageVersionUefiAdditionalSignaturesDb <a name="SharedImageVersionUefiAdditionalSignaturesDb" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SharedImageVersionUefiAdditionalSignaturesDb {
    string Type,
    string[] ValuesBase64
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#type SharedImageVersion#type}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb.property.valuesBase64">ValuesBase64</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#values_base64 SharedImageVersion#values_base64}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#type SharedImageVersion#type}.

---

##### `ValuesBase64`<sup>Required</sup> <a name="ValuesBase64" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb.property.valuesBase64"></a>

```csharp
public string[] ValuesBase64 { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#values_base64 SharedImageVersion#values_base64}.

---

### SharedImageVersionUefiAdditionalSignaturesDbx <a name="SharedImageVersionUefiAdditionalSignaturesDbx" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SharedImageVersionUefiAdditionalSignaturesDbx {
    string Type,
    string[] ValuesBase64
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#type SharedImageVersion#type}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx.property.valuesBase64">ValuesBase64</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#values_base64 SharedImageVersion#values_base64}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#type SharedImageVersion#type}.

---

##### `ValuesBase64`<sup>Required</sup> <a name="ValuesBase64" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx.property.valuesBase64"></a>

```csharp
public string[] ValuesBase64 { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#values_base64 SharedImageVersion#values_base64}.

---

### SharedImageVersionUefiAdditionalSignaturesKek <a name="SharedImageVersionUefiAdditionalSignaturesKek" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SharedImageVersionUefiAdditionalSignaturesKek {
    string Type,
    string[] ValuesBase64
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#type SharedImageVersion#type}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek.property.valuesBase64">ValuesBase64</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#values_base64 SharedImageVersion#values_base64}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#type SharedImageVersion#type}.

---

##### `ValuesBase64`<sup>Required</sup> <a name="ValuesBase64" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek.property.valuesBase64"></a>

```csharp
public string[] ValuesBase64 { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#values_base64 SharedImageVersion#values_base64}.

---

### SharedImageVersionUefiAdditionalSignaturesPk <a name="SharedImageVersionUefiAdditionalSignaturesPk" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SharedImageVersionUefiAdditionalSignaturesPk {
    string Type,
    string[] ValuesBase64
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#type SharedImageVersion#type}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk.property.valuesBase64">ValuesBase64</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#values_base64 SharedImageVersion#values_base64}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#type SharedImageVersion#type}.

---

##### `ValuesBase64`<sup>Required</sup> <a name="ValuesBase64" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk.property.valuesBase64"></a>

```csharp
public string[] ValuesBase64 { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#values_base64 SharedImageVersion#values_base64}.

---

## Classes <a name="Classes" id="Classes"></a>

### SharedImageVersionTargetRegionList <a name="SharedImageVersionTargetRegionList" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SharedImageVersionTargetRegionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.get"></a>

```csharp
private SharedImageVersionTargetRegionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.internalValue"></a>

```csharp
public IResolvable|SharedImageVersionTargetRegion[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>[]

---


### SharedImageVersionTargetRegionOutputReference <a name="SharedImageVersionTargetRegionOutputReference" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SharedImageVersionTargetRegionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetDiskEncryptionSetId">ResetDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetExcludeFromLatestEnabled">ResetExcludeFromLatestEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetStorageAccountType">ResetStorageAccountType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiskEncryptionSetId` <a name="ResetDiskEncryptionSetId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetDiskEncryptionSetId"></a>

```csharp
private void ResetDiskEncryptionSetId()
```

##### `ResetExcludeFromLatestEnabled` <a name="ResetExcludeFromLatestEnabled" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetExcludeFromLatestEnabled"></a>

```csharp
private void ResetExcludeFromLatestEnabled()
```

##### `ResetStorageAccountType` <a name="ResetStorageAccountType" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetStorageAccountType"></a>

```csharp
private void ResetStorageAccountType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.diskEncryptionSetIdInput">DiskEncryptionSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.excludeFromLatestEnabledInput">ExcludeFromLatestEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.regionalReplicaCountInput">RegionalReplicaCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.storageAccountTypeInput">StorageAccountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.excludeFromLatestEnabled">ExcludeFromLatestEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.regionalReplicaCount">RegionalReplicaCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.storageAccountType">StorageAccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskEncryptionSetIdInput`<sup>Optional</sup> <a name="DiskEncryptionSetIdInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.diskEncryptionSetIdInput"></a>

```csharp
public string DiskEncryptionSetIdInput { get; }
```

- *Type:* string

---

##### `ExcludeFromLatestEnabledInput`<sup>Optional</sup> <a name="ExcludeFromLatestEnabledInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.excludeFromLatestEnabledInput"></a>

```csharp
public bool|IResolvable ExcludeFromLatestEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionalReplicaCountInput`<sup>Optional</sup> <a name="RegionalReplicaCountInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.regionalReplicaCountInput"></a>

```csharp
public double RegionalReplicaCountInput { get; }
```

- *Type:* double

---

##### `StorageAccountTypeInput`<sup>Optional</sup> <a name="StorageAccountTypeInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.storageAccountTypeInput"></a>

```csharp
public string StorageAccountTypeInput { get; }
```

- *Type:* string

---

##### `DiskEncryptionSetId`<sup>Required</sup> <a name="DiskEncryptionSetId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.diskEncryptionSetId"></a>

```csharp
public string DiskEncryptionSetId { get; }
```

- *Type:* string

---

##### `ExcludeFromLatestEnabled`<sup>Required</sup> <a name="ExcludeFromLatestEnabled" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.excludeFromLatestEnabled"></a>

```csharp
public bool|IResolvable ExcludeFromLatestEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RegionalReplicaCount`<sup>Required</sup> <a name="RegionalReplicaCount" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.regionalReplicaCount"></a>

```csharp
public double RegionalReplicaCount { get; }
```

- *Type:* double

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.storageAccountType"></a>

```csharp
public string StorageAccountType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SharedImageVersionTargetRegion InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>

---


### SharedImageVersionTimeoutsOutputReference <a name="SharedImageVersionTimeoutsOutputReference" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SharedImageVersionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SharedImageVersionTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a>

---


### SharedImageVersionUefiAdditionalSignaturesDbList <a name="SharedImageVersionUefiAdditionalSignaturesDbList" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SharedImageVersionUefiAdditionalSignaturesDbList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.get"></a>

```csharp
private SharedImageVersionUefiAdditionalSignaturesDbOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb">SharedImageVersionUefiAdditionalSignaturesDb</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.property.internalValue"></a>

```csharp
public IResolvable|SharedImageVersionUefiAdditionalSignaturesDb[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb">SharedImageVersionUefiAdditionalSignaturesDb</a>[]

---


### SharedImageVersionUefiAdditionalSignaturesDbOutputReference <a name="SharedImageVersionUefiAdditionalSignaturesDbOutputReference" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SharedImageVersionUefiAdditionalSignaturesDbOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.valuesBase64Input">ValuesBase64Input</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.valuesBase64">ValuesBase64</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb">SharedImageVersionUefiAdditionalSignaturesDb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValuesBase64Input`<sup>Optional</sup> <a name="ValuesBase64Input" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.valuesBase64Input"></a>

```csharp
public string[] ValuesBase64Input { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `ValuesBase64`<sup>Required</sup> <a name="ValuesBase64" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.valuesBase64"></a>

```csharp
public string[] ValuesBase64 { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SharedImageVersionUefiAdditionalSignaturesDb InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb">SharedImageVersionUefiAdditionalSignaturesDb</a>

---


### SharedImageVersionUefiAdditionalSignaturesDbxList <a name="SharedImageVersionUefiAdditionalSignaturesDbxList" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SharedImageVersionUefiAdditionalSignaturesDbxList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.get"></a>

```csharp
private SharedImageVersionUefiAdditionalSignaturesDbxOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx">SharedImageVersionUefiAdditionalSignaturesDbx</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.property.internalValue"></a>

```csharp
public IResolvable|SharedImageVersionUefiAdditionalSignaturesDbx[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx">SharedImageVersionUefiAdditionalSignaturesDbx</a>[]

---


### SharedImageVersionUefiAdditionalSignaturesDbxOutputReference <a name="SharedImageVersionUefiAdditionalSignaturesDbxOutputReference" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SharedImageVersionUefiAdditionalSignaturesDbxOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.valuesBase64Input">ValuesBase64Input</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.valuesBase64">ValuesBase64</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx">SharedImageVersionUefiAdditionalSignaturesDbx</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValuesBase64Input`<sup>Optional</sup> <a name="ValuesBase64Input" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.valuesBase64Input"></a>

```csharp
public string[] ValuesBase64Input { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `ValuesBase64`<sup>Required</sup> <a name="ValuesBase64" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.valuesBase64"></a>

```csharp
public string[] ValuesBase64 { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SharedImageVersionUefiAdditionalSignaturesDbx InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx">SharedImageVersionUefiAdditionalSignaturesDbx</a>

---


### SharedImageVersionUefiAdditionalSignaturesKekList <a name="SharedImageVersionUefiAdditionalSignaturesKekList" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SharedImageVersionUefiAdditionalSignaturesKekList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.get"></a>

```csharp
private SharedImageVersionUefiAdditionalSignaturesKekOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek">SharedImageVersionUefiAdditionalSignaturesKek</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.property.internalValue"></a>

```csharp
public IResolvable|SharedImageVersionUefiAdditionalSignaturesKek[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek">SharedImageVersionUefiAdditionalSignaturesKek</a>[]

---


### SharedImageVersionUefiAdditionalSignaturesKekOutputReference <a name="SharedImageVersionUefiAdditionalSignaturesKekOutputReference" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SharedImageVersionUefiAdditionalSignaturesKekOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.valuesBase64Input">ValuesBase64Input</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.valuesBase64">ValuesBase64</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek">SharedImageVersionUefiAdditionalSignaturesKek</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValuesBase64Input`<sup>Optional</sup> <a name="ValuesBase64Input" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.valuesBase64Input"></a>

```csharp
public string[] ValuesBase64Input { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `ValuesBase64`<sup>Required</sup> <a name="ValuesBase64" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.valuesBase64"></a>

```csharp
public string[] ValuesBase64 { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SharedImageVersionUefiAdditionalSignaturesKek InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek">SharedImageVersionUefiAdditionalSignaturesKek</a>

---


### SharedImageVersionUefiAdditionalSignaturesOutputReference <a name="SharedImageVersionUefiAdditionalSignaturesOutputReference" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SharedImageVersionUefiAdditionalSignaturesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putDb">PutDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putDbx">PutDbx</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putKek">PutKek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putPk">PutPk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resetDb">ResetDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resetDbx">ResetDbx</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resetKek">ResetKek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resetPk">ResetPk</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDb` <a name="PutDb" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putDb"></a>

```csharp
private void PutDb(IResolvable|SharedImageVersionUefiAdditionalSignaturesDb[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putDb.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb">SharedImageVersionUefiAdditionalSignaturesDb</a>[]

---

##### `PutDbx` <a name="PutDbx" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putDbx"></a>

```csharp
private void PutDbx(IResolvable|SharedImageVersionUefiAdditionalSignaturesDbx[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putDbx.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx">SharedImageVersionUefiAdditionalSignaturesDbx</a>[]

---

##### `PutKek` <a name="PutKek" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putKek"></a>

```csharp
private void PutKek(IResolvable|SharedImageVersionUefiAdditionalSignaturesKek[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putKek.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek">SharedImageVersionUefiAdditionalSignaturesKek</a>[]

---

##### `PutPk` <a name="PutPk" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putPk"></a>

```csharp
private void PutPk(SharedImageVersionUefiAdditionalSignaturesPk Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putPk.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk">SharedImageVersionUefiAdditionalSignaturesPk</a>

---

##### `ResetDb` <a name="ResetDb" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resetDb"></a>

```csharp
private void ResetDb()
```

##### `ResetDbx` <a name="ResetDbx" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resetDbx"></a>

```csharp
private void ResetDbx()
```

##### `ResetKek` <a name="ResetKek" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resetKek"></a>

```csharp
private void ResetKek()
```

##### `ResetPk` <a name="ResetPk" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resetPk"></a>

```csharp
private void ResetPk()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.db">Db</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList">SharedImageVersionUefiAdditionalSignaturesDbList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.dbx">Dbx</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList">SharedImageVersionUefiAdditionalSignaturesDbxList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.kek">Kek</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList">SharedImageVersionUefiAdditionalSignaturesKekList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.pk">Pk</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference">SharedImageVersionUefiAdditionalSignaturesPkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.dbInput">DbInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb">SharedImageVersionUefiAdditionalSignaturesDb</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.dbxInput">DbxInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx">SharedImageVersionUefiAdditionalSignaturesDbx</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.kekInput">KekInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek">SharedImageVersionUefiAdditionalSignaturesKek</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.pkInput">PkInput</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk">SharedImageVersionUefiAdditionalSignaturesPk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures">SharedImageVersionUefiAdditionalSignatures</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Db`<sup>Required</sup> <a name="Db" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.db"></a>

```csharp
public SharedImageVersionUefiAdditionalSignaturesDbList Db { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList">SharedImageVersionUefiAdditionalSignaturesDbList</a>

---

##### `Dbx`<sup>Required</sup> <a name="Dbx" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.dbx"></a>

```csharp
public SharedImageVersionUefiAdditionalSignaturesDbxList Dbx { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList">SharedImageVersionUefiAdditionalSignaturesDbxList</a>

---

##### `Kek`<sup>Required</sup> <a name="Kek" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.kek"></a>

```csharp
public SharedImageVersionUefiAdditionalSignaturesKekList Kek { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList">SharedImageVersionUefiAdditionalSignaturesKekList</a>

---

##### `Pk`<sup>Required</sup> <a name="Pk" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.pk"></a>

```csharp
public SharedImageVersionUefiAdditionalSignaturesPkOutputReference Pk { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference">SharedImageVersionUefiAdditionalSignaturesPkOutputReference</a>

---

##### `DbInput`<sup>Optional</sup> <a name="DbInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.dbInput"></a>

```csharp
public IResolvable|SharedImageVersionUefiAdditionalSignaturesDb[] DbInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb">SharedImageVersionUefiAdditionalSignaturesDb</a>[]

---

##### `DbxInput`<sup>Optional</sup> <a name="DbxInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.dbxInput"></a>

```csharp
public IResolvable|SharedImageVersionUefiAdditionalSignaturesDbx[] DbxInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx">SharedImageVersionUefiAdditionalSignaturesDbx</a>[]

---

##### `KekInput`<sup>Optional</sup> <a name="KekInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.kekInput"></a>

```csharp
public IResolvable|SharedImageVersionUefiAdditionalSignaturesKek[] KekInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek">SharedImageVersionUefiAdditionalSignaturesKek</a>[]

---

##### `PkInput`<sup>Optional</sup> <a name="PkInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.pkInput"></a>

```csharp
public SharedImageVersionUefiAdditionalSignaturesPk PkInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk">SharedImageVersionUefiAdditionalSignaturesPk</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.internalValue"></a>

```csharp
public SharedImageVersionUefiAdditionalSignatures InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures">SharedImageVersionUefiAdditionalSignatures</a>

---


### SharedImageVersionUefiAdditionalSignaturesPkOutputReference <a name="SharedImageVersionUefiAdditionalSignaturesPkOutputReference" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SharedImageVersionUefiAdditionalSignaturesPkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.valuesBase64Input">ValuesBase64Input</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.valuesBase64">ValuesBase64</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk">SharedImageVersionUefiAdditionalSignaturesPk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValuesBase64Input`<sup>Optional</sup> <a name="ValuesBase64Input" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.valuesBase64Input"></a>

```csharp
public string[] ValuesBase64Input { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `ValuesBase64`<sup>Required</sup> <a name="ValuesBase64" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.valuesBase64"></a>

```csharp
public string[] ValuesBase64 { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.internalValue"></a>

```csharp
public SharedImageVersionUefiAdditionalSignaturesPk InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk">SharedImageVersionUefiAdditionalSignaturesPk</a>

---


### SharedImageVersionUefiOutputReference <a name="SharedImageVersionUefiOutputReference" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SharedImageVersionUefiOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.putAdditionalSignatures">PutAdditionalSignatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.resetAdditionalSignatures">ResetAdditionalSignatures</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdditionalSignatures` <a name="PutAdditionalSignatures" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.putAdditionalSignatures"></a>

```csharp
private void PutAdditionalSignatures(SharedImageVersionUefiAdditionalSignatures Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.putAdditionalSignatures.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures">SharedImageVersionUefiAdditionalSignatures</a>

---

##### `ResetAdditionalSignatures` <a name="ResetAdditionalSignatures" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.resetAdditionalSignatures"></a>

```csharp
private void ResetAdditionalSignatures()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.additionalSignatures">AdditionalSignatures</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference">SharedImageVersionUefiAdditionalSignaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.additionalSignaturesInput">AdditionalSignaturesInput</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures">SharedImageVersionUefiAdditionalSignatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.signatureTemplateNamesInput">SignatureTemplateNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.signatureTemplateNames">SignatureTemplateNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi">SharedImageVersionUefi</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalSignatures`<sup>Required</sup> <a name="AdditionalSignatures" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.additionalSignatures"></a>

```csharp
public SharedImageVersionUefiAdditionalSignaturesOutputReference AdditionalSignatures { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference">SharedImageVersionUefiAdditionalSignaturesOutputReference</a>

---

##### `AdditionalSignaturesInput`<sup>Optional</sup> <a name="AdditionalSignaturesInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.additionalSignaturesInput"></a>

```csharp
public SharedImageVersionUefiAdditionalSignatures AdditionalSignaturesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures">SharedImageVersionUefiAdditionalSignatures</a>

---

##### `SignatureTemplateNamesInput`<sup>Optional</sup> <a name="SignatureTemplateNamesInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.signatureTemplateNamesInput"></a>

```csharp
public string[] SignatureTemplateNamesInput { get; }
```

- *Type:* string[]

---

##### `SignatureTemplateNames`<sup>Required</sup> <a name="SignatureTemplateNames" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.signatureTemplateNames"></a>

```csharp
public string[] SignatureTemplateNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.internalValue"></a>

```csharp
public SharedImageVersionUefi InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi">SharedImageVersionUefi</a>

---



