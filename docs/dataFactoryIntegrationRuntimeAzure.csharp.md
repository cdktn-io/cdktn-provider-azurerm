# `dataFactoryIntegrationRuntimeAzure` Submodule <a name="`dataFactoryIntegrationRuntimeAzure` Submodule" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryIntegrationRuntimeAzure <a name="DataFactoryIntegrationRuntimeAzure" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure azurerm_data_factory_integration_runtime_azure}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryIntegrationRuntimeAzure(Construct Scope, string Id, DataFactoryIntegrationRuntimeAzureConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig">DataFactoryIntegrationRuntimeAzureConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig">DataFactoryIntegrationRuntimeAzureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetCleanupEnabled">ResetCleanupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetComputeType">ResetComputeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetCoreCount">ResetCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetInteractiveAuthoringTimeToLiveInMinutes">ResetInteractiveAuthoringTimeToLiveInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetTimeToLiveMin">ResetTimeToLiveMin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetVirtualNetworkEnabled">ResetVirtualNetworkEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.putTimeouts"></a>

```csharp
private void PutTimeouts(DataFactoryIntegrationRuntimeAzureTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts">DataFactoryIntegrationRuntimeAzureTimeouts</a>

---

##### `ResetCleanupEnabled` <a name="ResetCleanupEnabled" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetCleanupEnabled"></a>

```csharp
private void ResetCleanupEnabled()
```

##### `ResetComputeType` <a name="ResetComputeType" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetComputeType"></a>

```csharp
private void ResetComputeType()
```

##### `ResetCoreCount` <a name="ResetCoreCount" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetCoreCount"></a>

```csharp
private void ResetCoreCount()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInteractiveAuthoringTimeToLiveInMinutes` <a name="ResetInteractiveAuthoringTimeToLiveInMinutes" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetInteractiveAuthoringTimeToLiveInMinutes"></a>

```csharp
private void ResetInteractiveAuthoringTimeToLiveInMinutes()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimeToLiveMin` <a name="ResetTimeToLiveMin" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetTimeToLiveMin"></a>

```csharp
private void ResetTimeToLiveMin()
```

##### `ResetVirtualNetworkEnabled` <a name="ResetVirtualNetworkEnabled" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetVirtualNetworkEnabled"></a>

```csharp
private void ResetVirtualNetworkEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataFactoryIntegrationRuntimeAzure resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataFactoryIntegrationRuntimeAzure.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataFactoryIntegrationRuntimeAzure.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataFactoryIntegrationRuntimeAzure.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataFactoryIntegrationRuntimeAzure.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataFactoryIntegrationRuntimeAzure resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataFactoryIntegrationRuntimeAzure to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataFactoryIntegrationRuntimeAzure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataFactoryIntegrationRuntimeAzure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference">DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.cleanupEnabledInput">CleanupEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.computeTypeInput">ComputeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.coreCountInput">CoreCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.interactiveAuthoringTimeToLiveInMinutesInput">InteractiveAuthoringTimeToLiveInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts">DataFactoryIntegrationRuntimeAzureTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.timeToLiveMinInput">TimeToLiveMinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.virtualNetworkEnabledInput">VirtualNetworkEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.cleanupEnabled">CleanupEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.computeType">ComputeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.coreCount">CoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.dataFactoryId">DataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.interactiveAuthoringTimeToLiveInMinutes">InteractiveAuthoringTimeToLiveInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.timeToLiveMin">TimeToLiveMin</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.virtualNetworkEnabled">VirtualNetworkEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.timeouts"></a>

```csharp
public DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference">DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference</a>

---

##### `CleanupEnabledInput`<sup>Optional</sup> <a name="CleanupEnabledInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.cleanupEnabledInput"></a>

```csharp
public bool|IResolvable CleanupEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ComputeTypeInput`<sup>Optional</sup> <a name="ComputeTypeInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.computeTypeInput"></a>

```csharp
public string ComputeTypeInput { get; }
```

- *Type:* string

---

##### `CoreCountInput`<sup>Optional</sup> <a name="CoreCountInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.coreCountInput"></a>

```csharp
public double CoreCountInput { get; }
```

- *Type:* double

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.dataFactoryIdInput"></a>

```csharp
public string DataFactoryIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InteractiveAuthoringTimeToLiveInMinutesInput`<sup>Optional</sup> <a name="InteractiveAuthoringTimeToLiveInMinutesInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.interactiveAuthoringTimeToLiveInMinutesInput"></a>

```csharp
public double InteractiveAuthoringTimeToLiveInMinutesInput { get; }
```

- *Type:* double

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.timeoutsInput"></a>

```csharp
public IResolvable|DataFactoryIntegrationRuntimeAzureTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts">DataFactoryIntegrationRuntimeAzureTimeouts</a>

---

##### `TimeToLiveMinInput`<sup>Optional</sup> <a name="TimeToLiveMinInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.timeToLiveMinInput"></a>

```csharp
public double TimeToLiveMinInput { get; }
```

- *Type:* double

---

##### `VirtualNetworkEnabledInput`<sup>Optional</sup> <a name="VirtualNetworkEnabledInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.virtualNetworkEnabledInput"></a>

```csharp
public bool|IResolvable VirtualNetworkEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CleanupEnabled`<sup>Required</sup> <a name="CleanupEnabled" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.cleanupEnabled"></a>

```csharp
public bool|IResolvable CleanupEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ComputeType`<sup>Required</sup> <a name="ComputeType" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.computeType"></a>

```csharp
public string ComputeType { get; }
```

- *Type:* string

---

##### `CoreCount`<sup>Required</sup> <a name="CoreCount" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.coreCount"></a>

```csharp
public double CoreCount { get; }
```

- *Type:* double

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.dataFactoryId"></a>

```csharp
public string DataFactoryId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InteractiveAuthoringTimeToLiveInMinutes`<sup>Required</sup> <a name="InteractiveAuthoringTimeToLiveInMinutes" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.interactiveAuthoringTimeToLiveInMinutes"></a>

```csharp
public double InteractiveAuthoringTimeToLiveInMinutes { get; }
```

- *Type:* double

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TimeToLiveMin`<sup>Required</sup> <a name="TimeToLiveMin" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.timeToLiveMin"></a>

```csharp
public double TimeToLiveMin { get; }
```

- *Type:* double

---

##### `VirtualNetworkEnabled`<sup>Required</sup> <a name="VirtualNetworkEnabled" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.virtualNetworkEnabled"></a>

```csharp
public bool|IResolvable VirtualNetworkEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryIntegrationRuntimeAzureConfig <a name="DataFactoryIntegrationRuntimeAzureConfig" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryIntegrationRuntimeAzureConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DataFactoryId,
    string Location,
    string Name,
    bool|IResolvable CleanupEnabled = null,
    string ComputeType = null,
    double CoreCount = null,
    string Description = null,
    string Id = null,
    double InteractiveAuthoringTimeToLiveInMinutes = null,
    DataFactoryIntegrationRuntimeAzureTimeouts Timeouts = null,
    double TimeToLiveMin = null,
    bool|IResolvable VirtualNetworkEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#data_factory_id DataFactoryIntegrationRuntimeAzure#data_factory_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#location DataFactoryIntegrationRuntimeAzure#location}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#name DataFactoryIntegrationRuntimeAzure#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.cleanupEnabled">CleanupEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#cleanup_enabled DataFactoryIntegrationRuntimeAzure#cleanup_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.computeType">ComputeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#compute_type DataFactoryIntegrationRuntimeAzure#compute_type}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.coreCount">CoreCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#core_count DataFactoryIntegrationRuntimeAzure#core_count}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#description DataFactoryIntegrationRuntimeAzure#description}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#id DataFactoryIntegrationRuntimeAzure#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.interactiveAuthoringTimeToLiveInMinutes">InteractiveAuthoringTimeToLiveInMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#interactive_authoring_time_to_live_in_minutes DataFactoryIntegrationRuntimeAzure#interactive_authoring_time_to_live_in_minutes}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts">DataFactoryIntegrationRuntimeAzureTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.timeToLiveMin">TimeToLiveMin</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#time_to_live_min DataFactoryIntegrationRuntimeAzure#time_to_live_min}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.virtualNetworkEnabled">VirtualNetworkEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#virtual_network_enabled DataFactoryIntegrationRuntimeAzure#virtual_network_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.dataFactoryId"></a>

```csharp
public string DataFactoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#data_factory_id DataFactoryIntegrationRuntimeAzure#data_factory_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#location DataFactoryIntegrationRuntimeAzure#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#name DataFactoryIntegrationRuntimeAzure#name}.

---

##### `CleanupEnabled`<sup>Optional</sup> <a name="CleanupEnabled" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.cleanupEnabled"></a>

```csharp
public bool|IResolvable CleanupEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#cleanup_enabled DataFactoryIntegrationRuntimeAzure#cleanup_enabled}.

---

##### `ComputeType`<sup>Optional</sup> <a name="ComputeType" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.computeType"></a>

```csharp
public string ComputeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#compute_type DataFactoryIntegrationRuntimeAzure#compute_type}.

---

##### `CoreCount`<sup>Optional</sup> <a name="CoreCount" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.coreCount"></a>

```csharp
public double CoreCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#core_count DataFactoryIntegrationRuntimeAzure#core_count}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#description DataFactoryIntegrationRuntimeAzure#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#id DataFactoryIntegrationRuntimeAzure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InteractiveAuthoringTimeToLiveInMinutes`<sup>Optional</sup> <a name="InteractiveAuthoringTimeToLiveInMinutes" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.interactiveAuthoringTimeToLiveInMinutes"></a>

```csharp
public double InteractiveAuthoringTimeToLiveInMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#interactive_authoring_time_to_live_in_minutes DataFactoryIntegrationRuntimeAzure#interactive_authoring_time_to_live_in_minutes}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.timeouts"></a>

```csharp
public DataFactoryIntegrationRuntimeAzureTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts">DataFactoryIntegrationRuntimeAzureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#timeouts DataFactoryIntegrationRuntimeAzure#timeouts}

---

##### `TimeToLiveMin`<sup>Optional</sup> <a name="TimeToLiveMin" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.timeToLiveMin"></a>

```csharp
public double TimeToLiveMin { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#time_to_live_min DataFactoryIntegrationRuntimeAzure#time_to_live_min}.

---

##### `VirtualNetworkEnabled`<sup>Optional</sup> <a name="VirtualNetworkEnabled" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.virtualNetworkEnabled"></a>

```csharp
public bool|IResolvable VirtualNetworkEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#virtual_network_enabled DataFactoryIntegrationRuntimeAzure#virtual_network_enabled}.

---

### DataFactoryIntegrationRuntimeAzureTimeouts <a name="DataFactoryIntegrationRuntimeAzureTimeouts" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryIntegrationRuntimeAzureTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#create DataFactoryIntegrationRuntimeAzure#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#delete DataFactoryIntegrationRuntimeAzure#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#read DataFactoryIntegrationRuntimeAzure#read}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#update DataFactoryIntegrationRuntimeAzure#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#create DataFactoryIntegrationRuntimeAzure#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#delete DataFactoryIntegrationRuntimeAzure#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#read DataFactoryIntegrationRuntimeAzure#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#update DataFactoryIntegrationRuntimeAzure#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference <a name="DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts">DataFactoryIntegrationRuntimeAzureTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataFactoryIntegrationRuntimeAzureTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts">DataFactoryIntegrationRuntimeAzureTimeouts</a>

---



