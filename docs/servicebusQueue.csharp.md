# `servicebusQueue` Submodule <a name="`servicebusQueue` Submodule" id="@cdktn/provider-azurerm.servicebusQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicebusQueue <a name="ServicebusQueue" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue azurerm_servicebus_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ServicebusQueue(Construct Scope, string Id, ServicebusQueueConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig">ServicebusQueueConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig">ServicebusQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetAutoDeleteOnIdle">ResetAutoDeleteOnIdle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetBatchedOperationsEnabled">ResetBatchedOperationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetDeadLetteringOnMessageExpiration">ResetDeadLetteringOnMessageExpiration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetDefaultMessageTtl">ResetDefaultMessageTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetDuplicateDetectionHistoryTimeWindow">ResetDuplicateDetectionHistoryTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetExpressEnabled">ResetExpressEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetForwardDeadLetteredMessagesTo">ResetForwardDeadLetteredMessagesTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetForwardTo">ResetForwardTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetLockDuration">ResetLockDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetMaxDeliveryCount">ResetMaxDeliveryCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetMaxMessageSizeInKilobytes">ResetMaxMessageSizeInKilobytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetMaxSizeInMegabytes">ResetMaxSizeInMegabytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetPartitioningEnabled">ResetPartitioningEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetRequiresDuplicateDetection">ResetRequiresDuplicateDetection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetRequiresSession">ResetRequiresSession</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.putTimeouts"></a>

```csharp
private void PutTimeouts(ServicebusQueueTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts">ServicebusQueueTimeouts</a>

---

##### `ResetAutoDeleteOnIdle` <a name="ResetAutoDeleteOnIdle" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetAutoDeleteOnIdle"></a>

```csharp
private void ResetAutoDeleteOnIdle()
```

##### `ResetBatchedOperationsEnabled` <a name="ResetBatchedOperationsEnabled" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetBatchedOperationsEnabled"></a>

```csharp
private void ResetBatchedOperationsEnabled()
```

##### `ResetDeadLetteringOnMessageExpiration` <a name="ResetDeadLetteringOnMessageExpiration" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetDeadLetteringOnMessageExpiration"></a>

```csharp
private void ResetDeadLetteringOnMessageExpiration()
```

##### `ResetDefaultMessageTtl` <a name="ResetDefaultMessageTtl" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetDefaultMessageTtl"></a>

```csharp
private void ResetDefaultMessageTtl()
```

##### `ResetDuplicateDetectionHistoryTimeWindow` <a name="ResetDuplicateDetectionHistoryTimeWindow" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetDuplicateDetectionHistoryTimeWindow"></a>

```csharp
private void ResetDuplicateDetectionHistoryTimeWindow()
```

##### `ResetExpressEnabled` <a name="ResetExpressEnabled" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetExpressEnabled"></a>

```csharp
private void ResetExpressEnabled()
```

##### `ResetForwardDeadLetteredMessagesTo` <a name="ResetForwardDeadLetteredMessagesTo" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetForwardDeadLetteredMessagesTo"></a>

```csharp
private void ResetForwardDeadLetteredMessagesTo()
```

##### `ResetForwardTo` <a name="ResetForwardTo" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetForwardTo"></a>

```csharp
private void ResetForwardTo()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLockDuration` <a name="ResetLockDuration" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetLockDuration"></a>

```csharp
private void ResetLockDuration()
```

##### `ResetMaxDeliveryCount` <a name="ResetMaxDeliveryCount" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetMaxDeliveryCount"></a>

```csharp
private void ResetMaxDeliveryCount()
```

##### `ResetMaxMessageSizeInKilobytes` <a name="ResetMaxMessageSizeInKilobytes" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetMaxMessageSizeInKilobytes"></a>

```csharp
private void ResetMaxMessageSizeInKilobytes()
```

##### `ResetMaxSizeInMegabytes` <a name="ResetMaxSizeInMegabytes" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetMaxSizeInMegabytes"></a>

```csharp
private void ResetMaxSizeInMegabytes()
```

##### `ResetPartitioningEnabled` <a name="ResetPartitioningEnabled" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetPartitioningEnabled"></a>

```csharp
private void ResetPartitioningEnabled()
```

##### `ResetRequiresDuplicateDetection` <a name="ResetRequiresDuplicateDetection" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetRequiresDuplicateDetection"></a>

```csharp
private void ResetRequiresDuplicateDetection()
```

##### `ResetRequiresSession` <a name="ResetRequiresSession" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetRequiresSession"></a>

```csharp
private void ResetRequiresSession()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ServicebusQueue resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ServicebusQueue.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ServicebusQueue.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ServicebusQueue.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ServicebusQueue.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ServicebusQueue resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicebusQueue to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicebusQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ServicebusQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference">ServicebusQueueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.autoDeleteOnIdleInput">AutoDeleteOnIdleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.batchedOperationsEnabledInput">BatchedOperationsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.deadLetteringOnMessageExpirationInput">DeadLetteringOnMessageExpirationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.defaultMessageTtlInput">DefaultMessageTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.duplicateDetectionHistoryTimeWindowInput">DuplicateDetectionHistoryTimeWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.expressEnabledInput">ExpressEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.forwardDeadLetteredMessagesToInput">ForwardDeadLetteredMessagesToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.forwardToInput">ForwardToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.lockDurationInput">LockDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxDeliveryCountInput">MaxDeliveryCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxMessageSizeInKilobytesInput">MaxMessageSizeInKilobytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxSizeInMegabytesInput">MaxSizeInMegabytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.namespaceIdInput">NamespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.partitioningEnabledInput">PartitioningEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.requiresDuplicateDetectionInput">RequiresDuplicateDetectionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.requiresSessionInput">RequiresSessionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts">ServicebusQueueTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.autoDeleteOnIdle">AutoDeleteOnIdle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.batchedOperationsEnabled">BatchedOperationsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.deadLetteringOnMessageExpiration">DeadLetteringOnMessageExpiration</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.defaultMessageTtl">DefaultMessageTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.duplicateDetectionHistoryTimeWindow">DuplicateDetectionHistoryTimeWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.expressEnabled">ExpressEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.forwardDeadLetteredMessagesTo">ForwardDeadLetteredMessagesTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.forwardTo">ForwardTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.lockDuration">LockDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxDeliveryCount">MaxDeliveryCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxMessageSizeInKilobytes">MaxMessageSizeInKilobytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxSizeInMegabytes">MaxSizeInMegabytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.namespaceId">NamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.partitioningEnabled">PartitioningEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.requiresDuplicateDetection">RequiresDuplicateDetection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.requiresSession">RequiresSession</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.timeouts"></a>

```csharp
public ServicebusQueueTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference">ServicebusQueueTimeoutsOutputReference</a>

---

##### `AutoDeleteOnIdleInput`<sup>Optional</sup> <a name="AutoDeleteOnIdleInput" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.autoDeleteOnIdleInput"></a>

```csharp
public string AutoDeleteOnIdleInput { get; }
```

- *Type:* string

---

##### `BatchedOperationsEnabledInput`<sup>Optional</sup> <a name="BatchedOperationsEnabledInput" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.batchedOperationsEnabledInput"></a>

```csharp
public bool|IResolvable BatchedOperationsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeadLetteringOnMessageExpirationInput`<sup>Optional</sup> <a name="DeadLetteringOnMessageExpirationInput" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.deadLetteringOnMessageExpirationInput"></a>

```csharp
public bool|IResolvable DeadLetteringOnMessageExpirationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DefaultMessageTtlInput`<sup>Optional</sup> <a name="DefaultMessageTtlInput" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.defaultMessageTtlInput"></a>

```csharp
public string DefaultMessageTtlInput { get; }
```

- *Type:* string

---

##### `DuplicateDetectionHistoryTimeWindowInput`<sup>Optional</sup> <a name="DuplicateDetectionHistoryTimeWindowInput" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.duplicateDetectionHistoryTimeWindowInput"></a>

```csharp
public string DuplicateDetectionHistoryTimeWindowInput { get; }
```

- *Type:* string

---

##### `ExpressEnabledInput`<sup>Optional</sup> <a name="ExpressEnabledInput" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.expressEnabledInput"></a>

```csharp
public bool|IResolvable ExpressEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForwardDeadLetteredMessagesToInput`<sup>Optional</sup> <a name="ForwardDeadLetteredMessagesToInput" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.forwardDeadLetteredMessagesToInput"></a>

```csharp
public string ForwardDeadLetteredMessagesToInput { get; }
```

- *Type:* string

---

##### `ForwardToInput`<sup>Optional</sup> <a name="ForwardToInput" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.forwardToInput"></a>

```csharp
public string ForwardToInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LockDurationInput`<sup>Optional</sup> <a name="LockDurationInput" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.lockDurationInput"></a>

```csharp
public string LockDurationInput { get; }
```

- *Type:* string

---

##### `MaxDeliveryCountInput`<sup>Optional</sup> <a name="MaxDeliveryCountInput" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxDeliveryCountInput"></a>

```csharp
public double MaxDeliveryCountInput { get; }
```

- *Type:* double

---

##### `MaxMessageSizeInKilobytesInput`<sup>Optional</sup> <a name="MaxMessageSizeInKilobytesInput" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxMessageSizeInKilobytesInput"></a>

```csharp
public double MaxMessageSizeInKilobytesInput { get; }
```

- *Type:* double

---

##### `MaxSizeInMegabytesInput`<sup>Optional</sup> <a name="MaxSizeInMegabytesInput" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxSizeInMegabytesInput"></a>

```csharp
public double MaxSizeInMegabytesInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceIdInput`<sup>Optional</sup> <a name="NamespaceIdInput" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.namespaceIdInput"></a>

```csharp
public string NamespaceIdInput { get; }
```

- *Type:* string

---

##### `PartitioningEnabledInput`<sup>Optional</sup> <a name="PartitioningEnabledInput" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.partitioningEnabledInput"></a>

```csharp
public bool|IResolvable PartitioningEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RequiresDuplicateDetectionInput`<sup>Optional</sup> <a name="RequiresDuplicateDetectionInput" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.requiresDuplicateDetectionInput"></a>

```csharp
public bool|IResolvable RequiresDuplicateDetectionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RequiresSessionInput`<sup>Optional</sup> <a name="RequiresSessionInput" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.requiresSessionInput"></a>

```csharp
public bool|IResolvable RequiresSessionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.timeoutsInput"></a>

```csharp
public IResolvable|ServicebusQueueTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts">ServicebusQueueTimeouts</a>

---

##### `AutoDeleteOnIdle`<sup>Required</sup> <a name="AutoDeleteOnIdle" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.autoDeleteOnIdle"></a>

```csharp
public string AutoDeleteOnIdle { get; }
```

- *Type:* string

---

##### `BatchedOperationsEnabled`<sup>Required</sup> <a name="BatchedOperationsEnabled" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.batchedOperationsEnabled"></a>

```csharp
public bool|IResolvable BatchedOperationsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeadLetteringOnMessageExpiration`<sup>Required</sup> <a name="DeadLetteringOnMessageExpiration" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.deadLetteringOnMessageExpiration"></a>

```csharp
public bool|IResolvable DeadLetteringOnMessageExpiration { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DefaultMessageTtl`<sup>Required</sup> <a name="DefaultMessageTtl" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.defaultMessageTtl"></a>

```csharp
public string DefaultMessageTtl { get; }
```

- *Type:* string

---

##### `DuplicateDetectionHistoryTimeWindow`<sup>Required</sup> <a name="DuplicateDetectionHistoryTimeWindow" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.duplicateDetectionHistoryTimeWindow"></a>

```csharp
public string DuplicateDetectionHistoryTimeWindow { get; }
```

- *Type:* string

---

##### `ExpressEnabled`<sup>Required</sup> <a name="ExpressEnabled" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.expressEnabled"></a>

```csharp
public bool|IResolvable ExpressEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForwardDeadLetteredMessagesTo`<sup>Required</sup> <a name="ForwardDeadLetteredMessagesTo" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.forwardDeadLetteredMessagesTo"></a>

```csharp
public string ForwardDeadLetteredMessagesTo { get; }
```

- *Type:* string

---

##### `ForwardTo`<sup>Required</sup> <a name="ForwardTo" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.forwardTo"></a>

```csharp
public string ForwardTo { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LockDuration`<sup>Required</sup> <a name="LockDuration" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.lockDuration"></a>

```csharp
public string LockDuration { get; }
```

- *Type:* string

---

##### `MaxDeliveryCount`<sup>Required</sup> <a name="MaxDeliveryCount" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxDeliveryCount"></a>

```csharp
public double MaxDeliveryCount { get; }
```

- *Type:* double

---

##### `MaxMessageSizeInKilobytes`<sup>Required</sup> <a name="MaxMessageSizeInKilobytes" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxMessageSizeInKilobytes"></a>

```csharp
public double MaxMessageSizeInKilobytes { get; }
```

- *Type:* double

---

##### `MaxSizeInMegabytes`<sup>Required</sup> <a name="MaxSizeInMegabytes" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxSizeInMegabytes"></a>

```csharp
public double MaxSizeInMegabytes { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.namespaceId"></a>

```csharp
public string NamespaceId { get; }
```

- *Type:* string

---

##### `PartitioningEnabled`<sup>Required</sup> <a name="PartitioningEnabled" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.partitioningEnabled"></a>

```csharp
public bool|IResolvable PartitioningEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RequiresDuplicateDetection`<sup>Required</sup> <a name="RequiresDuplicateDetection" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.requiresDuplicateDetection"></a>

```csharp
public bool|IResolvable RequiresDuplicateDetection { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RequiresSession`<sup>Required</sup> <a name="RequiresSession" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.requiresSession"></a>

```csharp
public bool|IResolvable RequiresSession { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueue.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicebusQueueConfig <a name="ServicebusQueueConfig" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ServicebusQueueConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string NamespaceId,
    string AutoDeleteOnIdle = null,
    bool|IResolvable BatchedOperationsEnabled = null,
    bool|IResolvable DeadLetteringOnMessageExpiration = null,
    string DefaultMessageTtl = null,
    string DuplicateDetectionHistoryTimeWindow = null,
    bool|IResolvable ExpressEnabled = null,
    string ForwardDeadLetteredMessagesTo = null,
    string ForwardTo = null,
    string Id = null,
    string LockDuration = null,
    double MaxDeliveryCount = null,
    double MaxMessageSizeInKilobytes = null,
    double MaxSizeInMegabytes = null,
    bool|IResolvable PartitioningEnabled = null,
    bool|IResolvable RequiresDuplicateDetection = null,
    bool|IResolvable RequiresSession = null,
    string Status = null,
    ServicebusQueueTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#name ServicebusQueue#name}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.namespaceId">NamespaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#namespace_id ServicebusQueue#namespace_id}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.autoDeleteOnIdle">AutoDeleteOnIdle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#auto_delete_on_idle ServicebusQueue#auto_delete_on_idle}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.batchedOperationsEnabled">BatchedOperationsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#batched_operations_enabled ServicebusQueue#batched_operations_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.deadLetteringOnMessageExpiration">DeadLetteringOnMessageExpiration</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#dead_lettering_on_message_expiration ServicebusQueue#dead_lettering_on_message_expiration}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.defaultMessageTtl">DefaultMessageTtl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#default_message_ttl ServicebusQueue#default_message_ttl}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.duplicateDetectionHistoryTimeWindow">DuplicateDetectionHistoryTimeWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#duplicate_detection_history_time_window ServicebusQueue#duplicate_detection_history_time_window}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.expressEnabled">ExpressEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#express_enabled ServicebusQueue#express_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.forwardDeadLetteredMessagesTo">ForwardDeadLetteredMessagesTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#forward_dead_lettered_messages_to ServicebusQueue#forward_dead_lettered_messages_to}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.forwardTo">ForwardTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#forward_to ServicebusQueue#forward_to}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#id ServicebusQueue#id}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.lockDuration">LockDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#lock_duration ServicebusQueue#lock_duration}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.maxDeliveryCount">MaxDeliveryCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#max_delivery_count ServicebusQueue#max_delivery_count}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.maxMessageSizeInKilobytes">MaxMessageSizeInKilobytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#max_message_size_in_kilobytes ServicebusQueue#max_message_size_in_kilobytes}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.maxSizeInMegabytes">MaxSizeInMegabytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#max_size_in_megabytes ServicebusQueue#max_size_in_megabytes}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.partitioningEnabled">PartitioningEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#partitioning_enabled ServicebusQueue#partitioning_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.requiresDuplicateDetection">RequiresDuplicateDetection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#requires_duplicate_detection ServicebusQueue#requires_duplicate_detection}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.requiresSession">RequiresSession</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#requires_session ServicebusQueue#requires_session}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#status ServicebusQueue#status}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts">ServicebusQueueTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#name ServicebusQueue#name}.

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.namespaceId"></a>

```csharp
public string NamespaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#namespace_id ServicebusQueue#namespace_id}.

---

##### `AutoDeleteOnIdle`<sup>Optional</sup> <a name="AutoDeleteOnIdle" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.autoDeleteOnIdle"></a>

```csharp
public string AutoDeleteOnIdle { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#auto_delete_on_idle ServicebusQueue#auto_delete_on_idle}.

---

##### `BatchedOperationsEnabled`<sup>Optional</sup> <a name="BatchedOperationsEnabled" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.batchedOperationsEnabled"></a>

```csharp
public bool|IResolvable BatchedOperationsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#batched_operations_enabled ServicebusQueue#batched_operations_enabled}.

---

##### `DeadLetteringOnMessageExpiration`<sup>Optional</sup> <a name="DeadLetteringOnMessageExpiration" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.deadLetteringOnMessageExpiration"></a>

```csharp
public bool|IResolvable DeadLetteringOnMessageExpiration { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#dead_lettering_on_message_expiration ServicebusQueue#dead_lettering_on_message_expiration}.

---

##### `DefaultMessageTtl`<sup>Optional</sup> <a name="DefaultMessageTtl" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.defaultMessageTtl"></a>

```csharp
public string DefaultMessageTtl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#default_message_ttl ServicebusQueue#default_message_ttl}.

---

##### `DuplicateDetectionHistoryTimeWindow`<sup>Optional</sup> <a name="DuplicateDetectionHistoryTimeWindow" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.duplicateDetectionHistoryTimeWindow"></a>

```csharp
public string DuplicateDetectionHistoryTimeWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#duplicate_detection_history_time_window ServicebusQueue#duplicate_detection_history_time_window}.

---

##### `ExpressEnabled`<sup>Optional</sup> <a name="ExpressEnabled" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.expressEnabled"></a>

```csharp
public bool|IResolvable ExpressEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#express_enabled ServicebusQueue#express_enabled}.

---

##### `ForwardDeadLetteredMessagesTo`<sup>Optional</sup> <a name="ForwardDeadLetteredMessagesTo" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.forwardDeadLetteredMessagesTo"></a>

```csharp
public string ForwardDeadLetteredMessagesTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#forward_dead_lettered_messages_to ServicebusQueue#forward_dead_lettered_messages_to}.

---

##### `ForwardTo`<sup>Optional</sup> <a name="ForwardTo" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.forwardTo"></a>

```csharp
public string ForwardTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#forward_to ServicebusQueue#forward_to}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#id ServicebusQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LockDuration`<sup>Optional</sup> <a name="LockDuration" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.lockDuration"></a>

```csharp
public string LockDuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#lock_duration ServicebusQueue#lock_duration}.

---

##### `MaxDeliveryCount`<sup>Optional</sup> <a name="MaxDeliveryCount" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.maxDeliveryCount"></a>

```csharp
public double MaxDeliveryCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#max_delivery_count ServicebusQueue#max_delivery_count}.

---

##### `MaxMessageSizeInKilobytes`<sup>Optional</sup> <a name="MaxMessageSizeInKilobytes" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.maxMessageSizeInKilobytes"></a>

```csharp
public double MaxMessageSizeInKilobytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#max_message_size_in_kilobytes ServicebusQueue#max_message_size_in_kilobytes}.

---

##### `MaxSizeInMegabytes`<sup>Optional</sup> <a name="MaxSizeInMegabytes" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.maxSizeInMegabytes"></a>

```csharp
public double MaxSizeInMegabytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#max_size_in_megabytes ServicebusQueue#max_size_in_megabytes}.

---

##### `PartitioningEnabled`<sup>Optional</sup> <a name="PartitioningEnabled" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.partitioningEnabled"></a>

```csharp
public bool|IResolvable PartitioningEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#partitioning_enabled ServicebusQueue#partitioning_enabled}.

---

##### `RequiresDuplicateDetection`<sup>Optional</sup> <a name="RequiresDuplicateDetection" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.requiresDuplicateDetection"></a>

```csharp
public bool|IResolvable RequiresDuplicateDetection { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#requires_duplicate_detection ServicebusQueue#requires_duplicate_detection}.

---

##### `RequiresSession`<sup>Optional</sup> <a name="RequiresSession" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.requiresSession"></a>

```csharp
public bool|IResolvable RequiresSession { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#requires_session ServicebusQueue#requires_session}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#status ServicebusQueue#status}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.timeouts"></a>

```csharp
public ServicebusQueueTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts">ServicebusQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#timeouts ServicebusQueue#timeouts}

---

### ServicebusQueueTimeouts <a name="ServicebusQueueTimeouts" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ServicebusQueueTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#create ServicebusQueue#create}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#delete ServicebusQueue#delete}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#read ServicebusQueue#read}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#update ServicebusQueue#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#create ServicebusQueue#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#delete ServicebusQueue#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#read ServicebusQueue#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/servicebus_queue#update ServicebusQueue#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicebusQueueTimeoutsOutputReference <a name="ServicebusQueueTimeoutsOutputReference" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ServicebusQueueTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts">ServicebusQueueTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ServicebusQueueTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts">ServicebusQueueTimeouts</a>

---



