# `dataFactoryTriggerSchedule` Submodule <a name="`dataFactoryTriggerSchedule` Submodule" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryTriggerSchedule <a name="DataFactoryTriggerSchedule" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule azurerm_data_factory_trigger_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryTriggerSchedule(Construct Scope, string Id, DataFactoryTriggerScheduleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig">DataFactoryTriggerScheduleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig">DataFactoryTriggerScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putPipeline">PutPipeline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetActivated">ResetActivated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetFrequency">ResetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetPipeline">ResetPipeline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetPipelineName">ResetPipelineName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetPipelineParameters">ResetPipelineParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPipeline` <a name="PutPipeline" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putPipeline"></a>

```csharp
private void PutPipeline(IResolvable|DataFactoryTriggerSchedulePipeline[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putPipeline.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>[]

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putSchedule"></a>

```csharp
private void PutSchedule(DataFactoryTriggerScheduleSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule">DataFactoryTriggerScheduleSchedule</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putTimeouts"></a>

```csharp
private void PutTimeouts(DataFactoryTriggerScheduleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts">DataFactoryTriggerScheduleTimeouts</a>

---

##### `ResetActivated` <a name="ResetActivated" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetActivated"></a>

```csharp
private void ResetActivated()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetFrequency` <a name="ResetFrequency" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetFrequency"></a>

```csharp
private void ResetFrequency()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetInterval"></a>

```csharp
private void ResetInterval()
```

##### `ResetPipeline` <a name="ResetPipeline" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetPipeline"></a>

```csharp
private void ResetPipeline()
```

##### `ResetPipelineName` <a name="ResetPipelineName" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetPipelineName"></a>

```csharp
private void ResetPipelineName()
```

##### `ResetPipelineParameters` <a name="ResetPipelineParameters" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetPipelineParameters"></a>

```csharp
private void ResetPipelineParameters()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetStartTime"></a>

```csharp
private void ResetStartTime()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataFactoryTriggerSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataFactoryTriggerSchedule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataFactoryTriggerSchedule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataFactoryTriggerSchedule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataFactoryTriggerSchedule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataFactoryTriggerSchedule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataFactoryTriggerSchedule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataFactoryTriggerSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataFactoryTriggerSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipeline">Pipeline</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList">DataFactoryTriggerSchedulePipelineList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference">DataFactoryTriggerScheduleScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference">DataFactoryTriggerScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.activatedInput">ActivatedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.annotationsInput">AnnotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.frequencyInput">FrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.intervalInput">IntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineInput">PipelineInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineNameInput">PipelineNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineParametersInput">PipelineParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule">DataFactoryTriggerScheduleSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts">DataFactoryTriggerScheduleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.activated">Activated</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.annotations">Annotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.dataFactoryId">DataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineName">PipelineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineParameters">PipelineParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Pipeline`<sup>Required</sup> <a name="Pipeline" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipeline"></a>

```csharp
public DataFactoryTriggerSchedulePipelineList Pipeline { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList">DataFactoryTriggerSchedulePipelineList</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.schedule"></a>

```csharp
public DataFactoryTriggerScheduleScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference">DataFactoryTriggerScheduleScheduleOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.timeouts"></a>

```csharp
public DataFactoryTriggerScheduleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference">DataFactoryTriggerScheduleTimeoutsOutputReference</a>

---

##### `ActivatedInput`<sup>Optional</sup> <a name="ActivatedInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.activatedInput"></a>

```csharp
public bool|IResolvable ActivatedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.annotationsInput"></a>

```csharp
public string[] AnnotationsInput { get; }
```

- *Type:* string[]

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.dataFactoryIdInput"></a>

```csharp
public string DataFactoryIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.frequencyInput"></a>

```csharp
public string FrequencyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.intervalInput"></a>

```csharp
public double IntervalInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PipelineInput`<sup>Optional</sup> <a name="PipelineInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineInput"></a>

```csharp
public IResolvable|DataFactoryTriggerSchedulePipeline[] PipelineInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>[]

---

##### `PipelineNameInput`<sup>Optional</sup> <a name="PipelineNameInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineNameInput"></a>

```csharp
public string PipelineNameInput { get; }
```

- *Type:* string

---

##### `PipelineParametersInput`<sup>Optional</sup> <a name="PipelineParametersInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineParametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PipelineParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.scheduleInput"></a>

```csharp
public DataFactoryTriggerScheduleSchedule ScheduleInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule">DataFactoryTriggerScheduleSchedule</a>

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.timeoutsInput"></a>

```csharp
public IResolvable|DataFactoryTriggerScheduleTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts">DataFactoryTriggerScheduleTimeouts</a>

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `Activated`<sup>Required</sup> <a name="Activated" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.activated"></a>

```csharp
public bool|IResolvable Activated { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.annotations"></a>

```csharp
public string[] Annotations { get; }
```

- *Type:* string[]

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.dataFactoryId"></a>

```csharp
public string DataFactoryId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PipelineName`<sup>Required</sup> <a name="PipelineName" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineName"></a>

```csharp
public string PipelineName { get; }
```

- *Type:* string

---

##### `PipelineParameters`<sup>Required</sup> <a name="PipelineParameters" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PipelineParameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryTriggerScheduleConfig <a name="DataFactoryTriggerScheduleConfig" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryTriggerScheduleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DataFactoryId,
    string Name,
    bool|IResolvable Activated = null,
    string[] Annotations = null,
    string Description = null,
    string EndTime = null,
    string Frequency = null,
    string Id = null,
    double Interval = null,
    IResolvable|DataFactoryTriggerSchedulePipeline[] Pipeline = null,
    string PipelineName = null,
    System.Collections.Generic.IDictionary<string, string> PipelineParameters = null,
    DataFactoryTriggerScheduleSchedule Schedule = null,
    string StartTime = null,
    DataFactoryTriggerScheduleTimeouts Timeouts = null,
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#data_factory_id DataFactoryTriggerSchedule#data_factory_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#name DataFactoryTriggerSchedule#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.activated">Activated</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#activated DataFactoryTriggerSchedule#activated}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.annotations">Annotations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#annotations DataFactoryTriggerSchedule#annotations}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#description DataFactoryTriggerSchedule#description}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.endTime">EndTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#end_time DataFactoryTriggerSchedule#end_time}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.frequency">Frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#frequency DataFactoryTriggerSchedule#frequency}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#id DataFactoryTriggerSchedule#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.interval">Interval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#interval DataFactoryTriggerSchedule#interval}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.pipeline">Pipeline</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>[]</code> | pipeline block. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.pipelineName">PipelineName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#pipeline_name DataFactoryTriggerSchedule#pipeline_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.pipelineParameters">PipelineParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#pipeline_parameters DataFactoryTriggerSchedule#pipeline_parameters}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule">DataFactoryTriggerScheduleSchedule</a></code> | schedule block. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#start_time DataFactoryTriggerSchedule#start_time}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts">DataFactoryTriggerScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#time_zone DataFactoryTriggerSchedule#time_zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.dataFactoryId"></a>

```csharp
public string DataFactoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#data_factory_id DataFactoryTriggerSchedule#data_factory_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#name DataFactoryTriggerSchedule#name}.

---

##### `Activated`<sup>Optional</sup> <a name="Activated" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.activated"></a>

```csharp
public bool|IResolvable Activated { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#activated DataFactoryTriggerSchedule#activated}.

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.annotations"></a>

```csharp
public string[] Annotations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#annotations DataFactoryTriggerSchedule#annotations}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#description DataFactoryTriggerSchedule#description}.

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#end_time DataFactoryTriggerSchedule#end_time}.

---

##### `Frequency`<sup>Optional</sup> <a name="Frequency" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.frequency"></a>

```csharp
public string Frequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#frequency DataFactoryTriggerSchedule#frequency}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#id DataFactoryTriggerSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.interval"></a>

```csharp
public double Interval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#interval DataFactoryTriggerSchedule#interval}.

---

##### `Pipeline`<sup>Optional</sup> <a name="Pipeline" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.pipeline"></a>

```csharp
public IResolvable|DataFactoryTriggerSchedulePipeline[] Pipeline { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>[]

pipeline block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#pipeline DataFactoryTriggerSchedule#pipeline}

---

##### `PipelineName`<sup>Optional</sup> <a name="PipelineName" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.pipelineName"></a>

```csharp
public string PipelineName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#pipeline_name DataFactoryTriggerSchedule#pipeline_name}.

---

##### `PipelineParameters`<sup>Optional</sup> <a name="PipelineParameters" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.pipelineParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PipelineParameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#pipeline_parameters DataFactoryTriggerSchedule#pipeline_parameters}.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.schedule"></a>

```csharp
public DataFactoryTriggerScheduleSchedule Schedule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule">DataFactoryTriggerScheduleSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#schedule DataFactoryTriggerSchedule#schedule}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#start_time DataFactoryTriggerSchedule#start_time}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.timeouts"></a>

```csharp
public DataFactoryTriggerScheduleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts">DataFactoryTriggerScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#timeouts DataFactoryTriggerSchedule#timeouts}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#time_zone DataFactoryTriggerSchedule#time_zone}.

---

### DataFactoryTriggerSchedulePipeline <a name="DataFactoryTriggerSchedulePipeline" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryTriggerSchedulePipeline {
    string Name,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#name DataFactoryTriggerSchedule#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#parameters DataFactoryTriggerSchedule#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#name DataFactoryTriggerSchedule#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#parameters DataFactoryTriggerSchedule#parameters}.

---

### DataFactoryTriggerScheduleSchedule <a name="DataFactoryTriggerScheduleSchedule" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryTriggerScheduleSchedule {
    double[] DaysOfMonth = null,
    string[] DaysOfWeek = null,
    double[] Hours = null,
    double[] Minutes = null,
    IResolvable|DataFactoryTriggerScheduleScheduleMonthly[] Monthly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.daysOfMonth">DaysOfMonth</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#days_of_month DataFactoryTriggerSchedule#days_of_month}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#days_of_week DataFactoryTriggerSchedule#days_of_week}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.hours">Hours</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#hours DataFactoryTriggerSchedule#hours}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.minutes">Minutes</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#minutes DataFactoryTriggerSchedule#minutes}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.monthly">Monthly</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>[]</code> | monthly block. |

---

##### `DaysOfMonth`<sup>Optional</sup> <a name="DaysOfMonth" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.daysOfMonth"></a>

```csharp
public double[] DaysOfMonth { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#days_of_month DataFactoryTriggerSchedule#days_of_month}.

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#days_of_week DataFactoryTriggerSchedule#days_of_week}.

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.hours"></a>

```csharp
public double[] Hours { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#hours DataFactoryTriggerSchedule#hours}.

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.minutes"></a>

```csharp
public double[] Minutes { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#minutes DataFactoryTriggerSchedule#minutes}.

---

##### `Monthly`<sup>Optional</sup> <a name="Monthly" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.monthly"></a>

```csharp
public IResolvable|DataFactoryTriggerScheduleScheduleMonthly[] Monthly { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>[]

monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#monthly DataFactoryTriggerSchedule#monthly}

---

### DataFactoryTriggerScheduleScheduleMonthly <a name="DataFactoryTriggerScheduleScheduleMonthly" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryTriggerScheduleScheduleMonthly {
    string Weekday,
    double Week = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly.property.weekday">Weekday</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#weekday DataFactoryTriggerSchedule#weekday}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly.property.week">Week</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#week DataFactoryTriggerSchedule#week}. |

---

##### `Weekday`<sup>Required</sup> <a name="Weekday" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly.property.weekday"></a>

```csharp
public string Weekday { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#weekday DataFactoryTriggerSchedule#weekday}.

---

##### `Week`<sup>Optional</sup> <a name="Week" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly.property.week"></a>

```csharp
public double Week { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#week DataFactoryTriggerSchedule#week}.

---

### DataFactoryTriggerScheduleTimeouts <a name="DataFactoryTriggerScheduleTimeouts" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryTriggerScheduleTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#create DataFactoryTriggerSchedule#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#delete DataFactoryTriggerSchedule#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#read DataFactoryTriggerSchedule#read}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#update DataFactoryTriggerSchedule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#create DataFactoryTriggerSchedule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#delete DataFactoryTriggerSchedule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#read DataFactoryTriggerSchedule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/data_factory_trigger_schedule#update DataFactoryTriggerSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryTriggerSchedulePipelineList <a name="DataFactoryTriggerSchedulePipelineList" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryTriggerSchedulePipelineList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.get"></a>

```csharp
private DataFactoryTriggerSchedulePipelineOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.property.internalValue"></a>

```csharp
public IResolvable|DataFactoryTriggerSchedulePipeline[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>[]

---


### DataFactoryTriggerSchedulePipelineOutputReference <a name="DataFactoryTriggerSchedulePipelineOutputReference" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryTriggerSchedulePipelineOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataFactoryTriggerSchedulePipeline InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>

---


### DataFactoryTriggerScheduleScheduleMonthlyList <a name="DataFactoryTriggerScheduleScheduleMonthlyList" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryTriggerScheduleScheduleMonthlyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.get"></a>

```csharp
private DataFactoryTriggerScheduleScheduleMonthlyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.property.internalValue"></a>

```csharp
public IResolvable|DataFactoryTriggerScheduleScheduleMonthly[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>[]

---


### DataFactoryTriggerScheduleScheduleMonthlyOutputReference <a name="DataFactoryTriggerScheduleScheduleMonthlyOutputReference" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryTriggerScheduleScheduleMonthlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.resetWeek">ResetWeek</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWeek` <a name="ResetWeek" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.resetWeek"></a>

```csharp
private void ResetWeek()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.weekdayInput">WeekdayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.weekInput">WeekInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.week">Week</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.weekday">Weekday</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WeekdayInput`<sup>Optional</sup> <a name="WeekdayInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.weekdayInput"></a>

```csharp
public string WeekdayInput { get; }
```

- *Type:* string

---

##### `WeekInput`<sup>Optional</sup> <a name="WeekInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.weekInput"></a>

```csharp
public double WeekInput { get; }
```

- *Type:* double

---

##### `Week`<sup>Required</sup> <a name="Week" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.week"></a>

```csharp
public double Week { get; }
```

- *Type:* double

---

##### `Weekday`<sup>Required</sup> <a name="Weekday" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.weekday"></a>

```csharp
public string Weekday { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataFactoryTriggerScheduleScheduleMonthly InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>

---


### DataFactoryTriggerScheduleScheduleOutputReference <a name="DataFactoryTriggerScheduleScheduleOutputReference" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryTriggerScheduleScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.putMonthly">PutMonthly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetDaysOfMonth">ResetDaysOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetMonthly">ResetMonthly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMonthly` <a name="PutMonthly" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.putMonthly"></a>

```csharp
private void PutMonthly(IResolvable|DataFactoryTriggerScheduleScheduleMonthly[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.putMonthly.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>[]

---

##### `ResetDaysOfMonth` <a name="ResetDaysOfMonth" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetDaysOfMonth"></a>

```csharp
private void ResetDaysOfMonth()
```

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetDaysOfWeek"></a>

```csharp
private void ResetDaysOfWeek()
```

##### `ResetHours` <a name="ResetHours" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetHours"></a>

```csharp
private void ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetMinutes"></a>

```csharp
private void ResetMinutes()
```

##### `ResetMonthly` <a name="ResetMonthly" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetMonthly"></a>

```csharp
private void ResetMonthly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.monthly">Monthly</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList">DataFactoryTriggerScheduleScheduleMonthlyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.daysOfMonthInput">DaysOfMonthInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.hoursInput">HoursInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.minutesInput">MinutesInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.monthlyInput">MonthlyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.daysOfMonth">DaysOfMonth</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.hours">Hours</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.minutes">Minutes</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule">DataFactoryTriggerScheduleSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Monthly`<sup>Required</sup> <a name="Monthly" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.monthly"></a>

```csharp
public DataFactoryTriggerScheduleScheduleMonthlyList Monthly { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList">DataFactoryTriggerScheduleScheduleMonthlyList</a>

---

##### `DaysOfMonthInput`<sup>Optional</sup> <a name="DaysOfMonthInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.daysOfMonthInput"></a>

```csharp
public double[] DaysOfMonthInput { get; }
```

- *Type:* double[]

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.daysOfWeekInput"></a>

```csharp
public string[] DaysOfWeekInput { get; }
```

- *Type:* string[]

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.hoursInput"></a>

```csharp
public double[] HoursInput { get; }
```

- *Type:* double[]

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.minutesInput"></a>

```csharp
public double[] MinutesInput { get; }
```

- *Type:* double[]

---

##### `MonthlyInput`<sup>Optional</sup> <a name="MonthlyInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.monthlyInput"></a>

```csharp
public IResolvable|DataFactoryTriggerScheduleScheduleMonthly[] MonthlyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>[]

---

##### `DaysOfMonth`<sup>Required</sup> <a name="DaysOfMonth" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.daysOfMonth"></a>

```csharp
public double[] DaysOfMonth { get; }
```

- *Type:* double[]

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; }
```

- *Type:* string[]

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.hours"></a>

```csharp
public double[] Hours { get; }
```

- *Type:* double[]

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.minutes"></a>

```csharp
public double[] Minutes { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.internalValue"></a>

```csharp
public DataFactoryTriggerScheduleSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule">DataFactoryTriggerScheduleSchedule</a>

---


### DataFactoryTriggerScheduleTimeoutsOutputReference <a name="DataFactoryTriggerScheduleTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryTriggerScheduleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts">DataFactoryTriggerScheduleTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataFactoryTriggerScheduleTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts">DataFactoryTriggerScheduleTimeouts</a>

---



