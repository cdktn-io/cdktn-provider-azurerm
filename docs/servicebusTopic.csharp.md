# `servicebusTopic` Submodule <a name="`servicebusTopic` Submodule" id="@cdktn/provider-azurerm.servicebusTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicebusTopic <a name="ServicebusTopic" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic azurerm_servicebus_topic}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ServicebusTopic(Construct Scope, string Id, ServicebusTopicConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig">ServicebusTopicConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig">ServicebusTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetAutoDeleteOnIdle">ResetAutoDeleteOnIdle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetBatchedOperationsEnabled">ResetBatchedOperationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetDefaultMessageTtl">ResetDefaultMessageTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetDuplicateDetectionHistoryTimeWindow">ResetDuplicateDetectionHistoryTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetExpressEnabled">ResetExpressEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetMaxMessageSizeInKilobytes">ResetMaxMessageSizeInKilobytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetMaxSizeInMegabytes">ResetMaxSizeInMegabytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetPartitioningEnabled">ResetPartitioningEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetRequiresDuplicateDetection">ResetRequiresDuplicateDetection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetSupportOrdering">ResetSupportOrdering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.putTimeouts"></a>

```csharp
private void PutTimeouts(ServicebusTopicTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts">ServicebusTopicTimeouts</a>

---

##### `ResetAutoDeleteOnIdle` <a name="ResetAutoDeleteOnIdle" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetAutoDeleteOnIdle"></a>

```csharp
private void ResetAutoDeleteOnIdle()
```

##### `ResetBatchedOperationsEnabled` <a name="ResetBatchedOperationsEnabled" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetBatchedOperationsEnabled"></a>

```csharp
private void ResetBatchedOperationsEnabled()
```

##### `ResetDefaultMessageTtl` <a name="ResetDefaultMessageTtl" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetDefaultMessageTtl"></a>

```csharp
private void ResetDefaultMessageTtl()
```

##### `ResetDuplicateDetectionHistoryTimeWindow` <a name="ResetDuplicateDetectionHistoryTimeWindow" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetDuplicateDetectionHistoryTimeWindow"></a>

```csharp
private void ResetDuplicateDetectionHistoryTimeWindow()
```

##### `ResetExpressEnabled` <a name="ResetExpressEnabled" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetExpressEnabled"></a>

```csharp
private void ResetExpressEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxMessageSizeInKilobytes` <a name="ResetMaxMessageSizeInKilobytes" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetMaxMessageSizeInKilobytes"></a>

```csharp
private void ResetMaxMessageSizeInKilobytes()
```

##### `ResetMaxSizeInMegabytes` <a name="ResetMaxSizeInMegabytes" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetMaxSizeInMegabytes"></a>

```csharp
private void ResetMaxSizeInMegabytes()
```

##### `ResetPartitioningEnabled` <a name="ResetPartitioningEnabled" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetPartitioningEnabled"></a>

```csharp
private void ResetPartitioningEnabled()
```

##### `ResetRequiresDuplicateDetection` <a name="ResetRequiresDuplicateDetection" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetRequiresDuplicateDetection"></a>

```csharp
private void ResetRequiresDuplicateDetection()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetSupportOrdering` <a name="ResetSupportOrdering" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetSupportOrdering"></a>

```csharp
private void ResetSupportOrdering()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ServicebusTopic resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ServicebusTopic.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ServicebusTopic.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ServicebusTopic.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ServicebusTopic.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ServicebusTopic resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicebusTopic to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicebusTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ServicebusTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference">ServicebusTopicTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.autoDeleteOnIdleInput">AutoDeleteOnIdleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.batchedOperationsEnabledInput">BatchedOperationsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.defaultMessageTtlInput">DefaultMessageTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.duplicateDetectionHistoryTimeWindowInput">DuplicateDetectionHistoryTimeWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.expressEnabledInput">ExpressEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.maxMessageSizeInKilobytesInput">MaxMessageSizeInKilobytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.maxSizeInMegabytesInput">MaxSizeInMegabytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.namespaceIdInput">NamespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.partitioningEnabledInput">PartitioningEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.requiresDuplicateDetectionInput">RequiresDuplicateDetectionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.supportOrderingInput">SupportOrderingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts">ServicebusTopicTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.autoDeleteOnIdle">AutoDeleteOnIdle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.batchedOperationsEnabled">BatchedOperationsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.defaultMessageTtl">DefaultMessageTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.duplicateDetectionHistoryTimeWindow">DuplicateDetectionHistoryTimeWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.expressEnabled">ExpressEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.maxMessageSizeInKilobytes">MaxMessageSizeInKilobytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.maxSizeInMegabytes">MaxSizeInMegabytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.namespaceId">NamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.partitioningEnabled">PartitioningEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.requiresDuplicateDetection">RequiresDuplicateDetection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.supportOrdering">SupportOrdering</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.timeouts"></a>

```csharp
public ServicebusTopicTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference">ServicebusTopicTimeoutsOutputReference</a>

---

##### `AutoDeleteOnIdleInput`<sup>Optional</sup> <a name="AutoDeleteOnIdleInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.autoDeleteOnIdleInput"></a>

```csharp
public string AutoDeleteOnIdleInput { get; }
```

- *Type:* string

---

##### `BatchedOperationsEnabledInput`<sup>Optional</sup> <a name="BatchedOperationsEnabledInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.batchedOperationsEnabledInput"></a>

```csharp
public bool|IResolvable BatchedOperationsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DefaultMessageTtlInput`<sup>Optional</sup> <a name="DefaultMessageTtlInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.defaultMessageTtlInput"></a>

```csharp
public string DefaultMessageTtlInput { get; }
```

- *Type:* string

---

##### `DuplicateDetectionHistoryTimeWindowInput`<sup>Optional</sup> <a name="DuplicateDetectionHistoryTimeWindowInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.duplicateDetectionHistoryTimeWindowInput"></a>

```csharp
public string DuplicateDetectionHistoryTimeWindowInput { get; }
```

- *Type:* string

---

##### `ExpressEnabledInput`<sup>Optional</sup> <a name="ExpressEnabledInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.expressEnabledInput"></a>

```csharp
public bool|IResolvable ExpressEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxMessageSizeInKilobytesInput`<sup>Optional</sup> <a name="MaxMessageSizeInKilobytesInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.maxMessageSizeInKilobytesInput"></a>

```csharp
public double MaxMessageSizeInKilobytesInput { get; }
```

- *Type:* double

---

##### `MaxSizeInMegabytesInput`<sup>Optional</sup> <a name="MaxSizeInMegabytesInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.maxSizeInMegabytesInput"></a>

```csharp
public double MaxSizeInMegabytesInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceIdInput`<sup>Optional</sup> <a name="NamespaceIdInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.namespaceIdInput"></a>

```csharp
public string NamespaceIdInput { get; }
```

- *Type:* string

---

##### `PartitioningEnabledInput`<sup>Optional</sup> <a name="PartitioningEnabledInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.partitioningEnabledInput"></a>

```csharp
public bool|IResolvable PartitioningEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RequiresDuplicateDetectionInput`<sup>Optional</sup> <a name="RequiresDuplicateDetectionInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.requiresDuplicateDetectionInput"></a>

```csharp
public bool|IResolvable RequiresDuplicateDetectionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `SupportOrderingInput`<sup>Optional</sup> <a name="SupportOrderingInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.supportOrderingInput"></a>

```csharp
public bool|IResolvable SupportOrderingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.timeoutsInput"></a>

```csharp
public IResolvable|ServicebusTopicTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts">ServicebusTopicTimeouts</a>

---

##### `AutoDeleteOnIdle`<sup>Required</sup> <a name="AutoDeleteOnIdle" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.autoDeleteOnIdle"></a>

```csharp
public string AutoDeleteOnIdle { get; }
```

- *Type:* string

---

##### `BatchedOperationsEnabled`<sup>Required</sup> <a name="BatchedOperationsEnabled" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.batchedOperationsEnabled"></a>

```csharp
public bool|IResolvable BatchedOperationsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DefaultMessageTtl`<sup>Required</sup> <a name="DefaultMessageTtl" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.defaultMessageTtl"></a>

```csharp
public string DefaultMessageTtl { get; }
```

- *Type:* string

---

##### `DuplicateDetectionHistoryTimeWindow`<sup>Required</sup> <a name="DuplicateDetectionHistoryTimeWindow" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.duplicateDetectionHistoryTimeWindow"></a>

```csharp
public string DuplicateDetectionHistoryTimeWindow { get; }
```

- *Type:* string

---

##### `ExpressEnabled`<sup>Required</sup> <a name="ExpressEnabled" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.expressEnabled"></a>

```csharp
public bool|IResolvable ExpressEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxMessageSizeInKilobytes`<sup>Required</sup> <a name="MaxMessageSizeInKilobytes" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.maxMessageSizeInKilobytes"></a>

```csharp
public double MaxMessageSizeInKilobytes { get; }
```

- *Type:* double

---

##### `MaxSizeInMegabytes`<sup>Required</sup> <a name="MaxSizeInMegabytes" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.maxSizeInMegabytes"></a>

```csharp
public double MaxSizeInMegabytes { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.namespaceId"></a>

```csharp
public string NamespaceId { get; }
```

- *Type:* string

---

##### `PartitioningEnabled`<sup>Required</sup> <a name="PartitioningEnabled" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.partitioningEnabled"></a>

```csharp
public bool|IResolvable PartitioningEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RequiresDuplicateDetection`<sup>Required</sup> <a name="RequiresDuplicateDetection" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.requiresDuplicateDetection"></a>

```csharp
public bool|IResolvable RequiresDuplicateDetection { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SupportOrdering`<sup>Required</sup> <a name="SupportOrdering" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.supportOrdering"></a>

```csharp
public bool|IResolvable SupportOrdering { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicebusTopicConfig <a name="ServicebusTopicConfig" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ServicebusTopicConfig {
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
    string DefaultMessageTtl = null,
    string DuplicateDetectionHistoryTimeWindow = null,
    bool|IResolvable ExpressEnabled = null,
    string Id = null,
    double MaxMessageSizeInKilobytes = null,
    double MaxSizeInMegabytes = null,
    bool|IResolvable PartitioningEnabled = null,
    bool|IResolvable RequiresDuplicateDetection = null,
    string Status = null,
    bool|IResolvable SupportOrdering = null,
    ServicebusTopicTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#name ServicebusTopic#name}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.namespaceId">NamespaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#namespace_id ServicebusTopic#namespace_id}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.autoDeleteOnIdle">AutoDeleteOnIdle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#auto_delete_on_idle ServicebusTopic#auto_delete_on_idle}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.batchedOperationsEnabled">BatchedOperationsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#batched_operations_enabled ServicebusTopic#batched_operations_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.defaultMessageTtl">DefaultMessageTtl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#default_message_ttl ServicebusTopic#default_message_ttl}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.duplicateDetectionHistoryTimeWindow">DuplicateDetectionHistoryTimeWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#duplicate_detection_history_time_window ServicebusTopic#duplicate_detection_history_time_window}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.expressEnabled">ExpressEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#express_enabled ServicebusTopic#express_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#id ServicebusTopic#id}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.maxMessageSizeInKilobytes">MaxMessageSizeInKilobytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#max_message_size_in_kilobytes ServicebusTopic#max_message_size_in_kilobytes}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.maxSizeInMegabytes">MaxSizeInMegabytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#max_size_in_megabytes ServicebusTopic#max_size_in_megabytes}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.partitioningEnabled">PartitioningEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#partitioning_enabled ServicebusTopic#partitioning_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.requiresDuplicateDetection">RequiresDuplicateDetection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#requires_duplicate_detection ServicebusTopic#requires_duplicate_detection}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#status ServicebusTopic#status}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.supportOrdering">SupportOrdering</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#support_ordering ServicebusTopic#support_ordering}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts">ServicebusTopicTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#name ServicebusTopic#name}.

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.namespaceId"></a>

```csharp
public string NamespaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#namespace_id ServicebusTopic#namespace_id}.

---

##### `AutoDeleteOnIdle`<sup>Optional</sup> <a name="AutoDeleteOnIdle" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.autoDeleteOnIdle"></a>

```csharp
public string AutoDeleteOnIdle { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#auto_delete_on_idle ServicebusTopic#auto_delete_on_idle}.

---

##### `BatchedOperationsEnabled`<sup>Optional</sup> <a name="BatchedOperationsEnabled" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.batchedOperationsEnabled"></a>

```csharp
public bool|IResolvable BatchedOperationsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#batched_operations_enabled ServicebusTopic#batched_operations_enabled}.

---

##### `DefaultMessageTtl`<sup>Optional</sup> <a name="DefaultMessageTtl" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.defaultMessageTtl"></a>

```csharp
public string DefaultMessageTtl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#default_message_ttl ServicebusTopic#default_message_ttl}.

---

##### `DuplicateDetectionHistoryTimeWindow`<sup>Optional</sup> <a name="DuplicateDetectionHistoryTimeWindow" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.duplicateDetectionHistoryTimeWindow"></a>

```csharp
public string DuplicateDetectionHistoryTimeWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#duplicate_detection_history_time_window ServicebusTopic#duplicate_detection_history_time_window}.

---

##### `ExpressEnabled`<sup>Optional</sup> <a name="ExpressEnabled" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.expressEnabled"></a>

```csharp
public bool|IResolvable ExpressEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#express_enabled ServicebusTopic#express_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#id ServicebusTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxMessageSizeInKilobytes`<sup>Optional</sup> <a name="MaxMessageSizeInKilobytes" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.maxMessageSizeInKilobytes"></a>

```csharp
public double MaxMessageSizeInKilobytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#max_message_size_in_kilobytes ServicebusTopic#max_message_size_in_kilobytes}.

---

##### `MaxSizeInMegabytes`<sup>Optional</sup> <a name="MaxSizeInMegabytes" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.maxSizeInMegabytes"></a>

```csharp
public double MaxSizeInMegabytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#max_size_in_megabytes ServicebusTopic#max_size_in_megabytes}.

---

##### `PartitioningEnabled`<sup>Optional</sup> <a name="PartitioningEnabled" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.partitioningEnabled"></a>

```csharp
public bool|IResolvable PartitioningEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#partitioning_enabled ServicebusTopic#partitioning_enabled}.

---

##### `RequiresDuplicateDetection`<sup>Optional</sup> <a name="RequiresDuplicateDetection" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.requiresDuplicateDetection"></a>

```csharp
public bool|IResolvable RequiresDuplicateDetection { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#requires_duplicate_detection ServicebusTopic#requires_duplicate_detection}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#status ServicebusTopic#status}.

---

##### `SupportOrdering`<sup>Optional</sup> <a name="SupportOrdering" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.supportOrdering"></a>

```csharp
public bool|IResolvable SupportOrdering { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#support_ordering ServicebusTopic#support_ordering}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.timeouts"></a>

```csharp
public ServicebusTopicTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts">ServicebusTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#timeouts ServicebusTopic#timeouts}

---

### ServicebusTopicTimeouts <a name="ServicebusTopicTimeouts" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ServicebusTopicTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#create ServicebusTopic#create}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#delete ServicebusTopic#delete}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#read ServicebusTopic#read}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#update ServicebusTopic#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#create ServicebusTopic#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#delete ServicebusTopic#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#read ServicebusTopic#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/servicebus_topic#update ServicebusTopic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicebusTopicTimeoutsOutputReference <a name="ServicebusTopicTimeoutsOutputReference" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ServicebusTopicTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts">ServicebusTopicTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ServicebusTopicTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts">ServicebusTopicTimeouts</a>

---



