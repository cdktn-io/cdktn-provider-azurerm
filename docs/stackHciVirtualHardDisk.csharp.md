# `stackHciVirtualHardDisk` Submodule <a name="`stackHciVirtualHardDisk` Submodule" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackHciVirtualHardDisk <a name="StackHciVirtualHardDisk" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk azurerm_stack_hci_virtual_hard_disk}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new StackHciVirtualHardDisk(Construct Scope, string Id, StackHciVirtualHardDiskConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig">StackHciVirtualHardDiskConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig">StackHciVirtualHardDiskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetBlockSizeInBytes">ResetBlockSizeInBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetDiskFileFormat">ResetDiskFileFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetDynamicEnabled">ResetDynamicEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetHypervGeneration">ResetHypervGeneration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetLogicalSectorInBytes">ResetLogicalSectorInBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetPhysicalSectorInBytes">ResetPhysicalSectorInBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetStoragePathId">ResetStoragePathId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.putTimeouts"></a>

```csharp
private void PutTimeouts(StackHciVirtualHardDiskTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts">StackHciVirtualHardDiskTimeouts</a>

---

##### `ResetBlockSizeInBytes` <a name="ResetBlockSizeInBytes" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetBlockSizeInBytes"></a>

```csharp
private void ResetBlockSizeInBytes()
```

##### `ResetDiskFileFormat` <a name="ResetDiskFileFormat" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetDiskFileFormat"></a>

```csharp
private void ResetDiskFileFormat()
```

##### `ResetDynamicEnabled` <a name="ResetDynamicEnabled" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetDynamicEnabled"></a>

```csharp
private void ResetDynamicEnabled()
```

##### `ResetHypervGeneration` <a name="ResetHypervGeneration" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetHypervGeneration"></a>

```csharp
private void ResetHypervGeneration()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogicalSectorInBytes` <a name="ResetLogicalSectorInBytes" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetLogicalSectorInBytes"></a>

```csharp
private void ResetLogicalSectorInBytes()
```

##### `ResetPhysicalSectorInBytes` <a name="ResetPhysicalSectorInBytes" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetPhysicalSectorInBytes"></a>

```csharp
private void ResetPhysicalSectorInBytes()
```

##### `ResetStoragePathId` <a name="ResetStoragePathId" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetStoragePathId"></a>

```csharp
private void ResetStoragePathId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StackHciVirtualHardDisk resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

StackHciVirtualHardDisk.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

StackHciVirtualHardDisk.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

StackHciVirtualHardDisk.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

StackHciVirtualHardDisk.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a StackHciVirtualHardDisk resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StackHciVirtualHardDisk to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StackHciVirtualHardDisk that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the StackHciVirtualHardDisk to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference">StackHciVirtualHardDiskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.blockSizeInBytesInput">BlockSizeInBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.customLocationIdInput">CustomLocationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.diskFileFormatInput">DiskFileFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.diskSizeInGbInput">DiskSizeInGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.dynamicEnabledInput">DynamicEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.hypervGenerationInput">HypervGenerationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.logicalSectorInBytesInput">LogicalSectorInBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.physicalSectorInBytesInput">PhysicalSectorInBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.storagePathIdInput">StoragePathIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts">StackHciVirtualHardDiskTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.blockSizeInBytes">BlockSizeInBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.customLocationId">CustomLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.diskFileFormat">DiskFileFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.diskSizeInGb">DiskSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.dynamicEnabled">DynamicEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.hypervGeneration">HypervGeneration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.logicalSectorInBytes">LogicalSectorInBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.physicalSectorInBytes">PhysicalSectorInBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.storagePathId">StoragePathId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.timeouts"></a>

```csharp
public StackHciVirtualHardDiskTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference">StackHciVirtualHardDiskTimeoutsOutputReference</a>

---

##### `BlockSizeInBytesInput`<sup>Optional</sup> <a name="BlockSizeInBytesInput" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.blockSizeInBytesInput"></a>

```csharp
public double BlockSizeInBytesInput { get; }
```

- *Type:* double

---

##### `CustomLocationIdInput`<sup>Optional</sup> <a name="CustomLocationIdInput" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.customLocationIdInput"></a>

```csharp
public string CustomLocationIdInput { get; }
```

- *Type:* string

---

##### `DiskFileFormatInput`<sup>Optional</sup> <a name="DiskFileFormatInput" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.diskFileFormatInput"></a>

```csharp
public string DiskFileFormatInput { get; }
```

- *Type:* string

---

##### `DiskSizeInGbInput`<sup>Optional</sup> <a name="DiskSizeInGbInput" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.diskSizeInGbInput"></a>

```csharp
public double DiskSizeInGbInput { get; }
```

- *Type:* double

---

##### `DynamicEnabledInput`<sup>Optional</sup> <a name="DynamicEnabledInput" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.dynamicEnabledInput"></a>

```csharp
public bool|IResolvable DynamicEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HypervGenerationInput`<sup>Optional</sup> <a name="HypervGenerationInput" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.hypervGenerationInput"></a>

```csharp
public string HypervGenerationInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `LogicalSectorInBytesInput`<sup>Optional</sup> <a name="LogicalSectorInBytesInput" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.logicalSectorInBytesInput"></a>

```csharp
public double LogicalSectorInBytesInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PhysicalSectorInBytesInput`<sup>Optional</sup> <a name="PhysicalSectorInBytesInput" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.physicalSectorInBytesInput"></a>

```csharp
public double PhysicalSectorInBytesInput { get; }
```

- *Type:* double

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `StoragePathIdInput`<sup>Optional</sup> <a name="StoragePathIdInput" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.storagePathIdInput"></a>

```csharp
public string StoragePathIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.timeoutsInput"></a>

```csharp
public IResolvable|StackHciVirtualHardDiskTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts">StackHciVirtualHardDiskTimeouts</a>

---

##### `BlockSizeInBytes`<sup>Required</sup> <a name="BlockSizeInBytes" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.blockSizeInBytes"></a>

```csharp
public double BlockSizeInBytes { get; }
```

- *Type:* double

---

##### `CustomLocationId`<sup>Required</sup> <a name="CustomLocationId" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.customLocationId"></a>

```csharp
public string CustomLocationId { get; }
```

- *Type:* string

---

##### `DiskFileFormat`<sup>Required</sup> <a name="DiskFileFormat" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.diskFileFormat"></a>

```csharp
public string DiskFileFormat { get; }
```

- *Type:* string

---

##### `DiskSizeInGb`<sup>Required</sup> <a name="DiskSizeInGb" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.diskSizeInGb"></a>

```csharp
public double DiskSizeInGb { get; }
```

- *Type:* double

---

##### `DynamicEnabled`<sup>Required</sup> <a name="DynamicEnabled" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.dynamicEnabled"></a>

```csharp
public bool|IResolvable DynamicEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HypervGeneration`<sup>Required</sup> <a name="HypervGeneration" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.hypervGeneration"></a>

```csharp
public string HypervGeneration { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `LogicalSectorInBytes`<sup>Required</sup> <a name="LogicalSectorInBytes" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.logicalSectorInBytes"></a>

```csharp
public double LogicalSectorInBytes { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PhysicalSectorInBytes`<sup>Required</sup> <a name="PhysicalSectorInBytes" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.physicalSectorInBytes"></a>

```csharp
public double PhysicalSectorInBytes { get; }
```

- *Type:* double

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `StoragePathId`<sup>Required</sup> <a name="StoragePathId" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.storagePathId"></a>

```csharp
public string StoragePathId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StackHciVirtualHardDiskConfig <a name="StackHciVirtualHardDiskConfig" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new StackHciVirtualHardDiskConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CustomLocationId,
    double DiskSizeInGb,
    string Location,
    string Name,
    string ResourceGroupName,
    double BlockSizeInBytes = null,
    string DiskFileFormat = null,
    bool|IResolvable DynamicEnabled = null,
    string HypervGeneration = null,
    string Id = null,
    double LogicalSectorInBytes = null,
    double PhysicalSectorInBytes = null,
    string StoragePathId = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    StackHciVirtualHardDiskTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.customLocationId">CustomLocationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#custom_location_id StackHciVirtualHardDisk#custom_location_id}. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.diskSizeInGb">DiskSizeInGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#disk_size_in_gb StackHciVirtualHardDisk#disk_size_in_gb}. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#location StackHciVirtualHardDisk#location}. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#name StackHciVirtualHardDisk#name}. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#resource_group_name StackHciVirtualHardDisk#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.blockSizeInBytes">BlockSizeInBytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#block_size_in_bytes StackHciVirtualHardDisk#block_size_in_bytes}. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.diskFileFormat">DiskFileFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#disk_file_format StackHciVirtualHardDisk#disk_file_format}. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.dynamicEnabled">DynamicEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#dynamic_enabled StackHciVirtualHardDisk#dynamic_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.hypervGeneration">HypervGeneration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#hyperv_generation StackHciVirtualHardDisk#hyperv_generation}. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#id StackHciVirtualHardDisk#id}. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.logicalSectorInBytes">LogicalSectorInBytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#logical_sector_in_bytes StackHciVirtualHardDisk#logical_sector_in_bytes}. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.physicalSectorInBytes">PhysicalSectorInBytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#physical_sector_in_bytes StackHciVirtualHardDisk#physical_sector_in_bytes}. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.storagePathId">StoragePathId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#storage_path_id StackHciVirtualHardDisk#storage_path_id}. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#tags StackHciVirtualHardDisk#tags}. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts">StackHciVirtualHardDiskTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CustomLocationId`<sup>Required</sup> <a name="CustomLocationId" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.customLocationId"></a>

```csharp
public string CustomLocationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#custom_location_id StackHciVirtualHardDisk#custom_location_id}.

---

##### `DiskSizeInGb`<sup>Required</sup> <a name="DiskSizeInGb" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.diskSizeInGb"></a>

```csharp
public double DiskSizeInGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#disk_size_in_gb StackHciVirtualHardDisk#disk_size_in_gb}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#location StackHciVirtualHardDisk#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#name StackHciVirtualHardDisk#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#resource_group_name StackHciVirtualHardDisk#resource_group_name}.

---

##### `BlockSizeInBytes`<sup>Optional</sup> <a name="BlockSizeInBytes" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.blockSizeInBytes"></a>

```csharp
public double BlockSizeInBytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#block_size_in_bytes StackHciVirtualHardDisk#block_size_in_bytes}.

---

##### `DiskFileFormat`<sup>Optional</sup> <a name="DiskFileFormat" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.diskFileFormat"></a>

```csharp
public string DiskFileFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#disk_file_format StackHciVirtualHardDisk#disk_file_format}.

---

##### `DynamicEnabled`<sup>Optional</sup> <a name="DynamicEnabled" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.dynamicEnabled"></a>

```csharp
public bool|IResolvable DynamicEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#dynamic_enabled StackHciVirtualHardDisk#dynamic_enabled}.

---

##### `HypervGeneration`<sup>Optional</sup> <a name="HypervGeneration" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.hypervGeneration"></a>

```csharp
public string HypervGeneration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#hyperv_generation StackHciVirtualHardDisk#hyperv_generation}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#id StackHciVirtualHardDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogicalSectorInBytes`<sup>Optional</sup> <a name="LogicalSectorInBytes" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.logicalSectorInBytes"></a>

```csharp
public double LogicalSectorInBytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#logical_sector_in_bytes StackHciVirtualHardDisk#logical_sector_in_bytes}.

---

##### `PhysicalSectorInBytes`<sup>Optional</sup> <a name="PhysicalSectorInBytes" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.physicalSectorInBytes"></a>

```csharp
public double PhysicalSectorInBytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#physical_sector_in_bytes StackHciVirtualHardDisk#physical_sector_in_bytes}.

---

##### `StoragePathId`<sup>Optional</sup> <a name="StoragePathId" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.storagePathId"></a>

```csharp
public string StoragePathId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#storage_path_id StackHciVirtualHardDisk#storage_path_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#tags StackHciVirtualHardDisk#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.timeouts"></a>

```csharp
public StackHciVirtualHardDiskTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts">StackHciVirtualHardDiskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#timeouts StackHciVirtualHardDisk#timeouts}

---

### StackHciVirtualHardDiskTimeouts <a name="StackHciVirtualHardDiskTimeouts" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new StackHciVirtualHardDiskTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#create StackHciVirtualHardDisk#create}. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#delete StackHciVirtualHardDisk#delete}. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#read StackHciVirtualHardDisk#read}. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#update StackHciVirtualHardDisk#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#create StackHciVirtualHardDisk#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#delete StackHciVirtualHardDisk#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#read StackHciVirtualHardDisk#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/stack_hci_virtual_hard_disk#update StackHciVirtualHardDisk#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackHciVirtualHardDiskTimeoutsOutputReference <a name="StackHciVirtualHardDiskTimeoutsOutputReference" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new StackHciVirtualHardDiskTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts">StackHciVirtualHardDiskTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StackHciVirtualHardDiskTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts">StackHciVirtualHardDiskTimeouts</a>

---



