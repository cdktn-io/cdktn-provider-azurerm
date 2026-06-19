# `devTestSchedule` Submodule <a name="`devTestSchedule` Submodule" id="@cdktn/provider-azurerm.devTestSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevTestSchedule <a name="DevTestSchedule" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule azurerm_dev_test_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DevTestSchedule(Construct Scope, string Id, DevTestScheduleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig">DevTestScheduleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig">DevTestScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.putDailyRecurrence">PutDailyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.putHourlyRecurrence">PutHourlyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.putNotificationSettings">PutNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.putWeeklyRecurrence">PutWeeklyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.resetDailyRecurrence">ResetDailyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.resetHourlyRecurrence">ResetHourlyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.resetWeeklyRecurrence">ResetWeeklyRecurrence</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDailyRecurrence` <a name="PutDailyRecurrence" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.putDailyRecurrence"></a>

```csharp
private void PutDailyRecurrence(DevTestScheduleDailyRecurrence Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.putDailyRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence">DevTestScheduleDailyRecurrence</a>

---

##### `PutHourlyRecurrence` <a name="PutHourlyRecurrence" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.putHourlyRecurrence"></a>

```csharp
private void PutHourlyRecurrence(DevTestScheduleHourlyRecurrence Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.putHourlyRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence">DevTestScheduleHourlyRecurrence</a>

---

##### `PutNotificationSettings` <a name="PutNotificationSettings" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.putNotificationSettings"></a>

```csharp
private void PutNotificationSettings(DevTestScheduleNotificationSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.putNotificationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings">DevTestScheduleNotificationSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.putTimeouts"></a>

```csharp
private void PutTimeouts(DevTestScheduleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts">DevTestScheduleTimeouts</a>

---

##### `PutWeeklyRecurrence` <a name="PutWeeklyRecurrence" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.putWeeklyRecurrence"></a>

```csharp
private void PutWeeklyRecurrence(DevTestScheduleWeeklyRecurrence Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.putWeeklyRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence">DevTestScheduleWeeklyRecurrence</a>

---

##### `ResetDailyRecurrence` <a name="ResetDailyRecurrence" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.resetDailyRecurrence"></a>

```csharp
private void ResetDailyRecurrence()
```

##### `ResetHourlyRecurrence` <a name="ResetHourlyRecurrence" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.resetHourlyRecurrence"></a>

```csharp
private void ResetHourlyRecurrence()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWeeklyRecurrence` <a name="ResetWeeklyRecurrence" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.resetWeeklyRecurrence"></a>

```csharp
private void ResetWeeklyRecurrence()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DevTestSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DevTestSchedule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DevTestSchedule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DevTestSchedule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DevTestSchedule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DevTestSchedule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevTestSchedule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevTestSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DevTestSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.dailyRecurrence">DailyRecurrence</a></code> | <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference">DevTestScheduleDailyRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.hourlyRecurrence">HourlyRecurrence</a></code> | <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference">DevTestScheduleHourlyRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.notificationSettings">NotificationSettings</a></code> | <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference">DevTestScheduleNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference">DevTestScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.weeklyRecurrence">WeeklyRecurrence</a></code> | <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference">DevTestScheduleWeeklyRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.dailyRecurrenceInput">DailyRecurrenceInput</a></code> | <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence">DevTestScheduleDailyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.hourlyRecurrenceInput">HourlyRecurrenceInput</a></code> | <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence">DevTestScheduleHourlyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.labNameInput">LabNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.notificationSettingsInput">NotificationSettingsInput</a></code> | <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings">DevTestScheduleNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.taskTypeInput">TaskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts">DevTestScheduleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.timeZoneIdInput">TimeZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.weeklyRecurrenceInput">WeeklyRecurrenceInput</a></code> | <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence">DevTestScheduleWeeklyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.labName">LabName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.taskType">TaskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.timeZoneId">TimeZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DailyRecurrence`<sup>Required</sup> <a name="DailyRecurrence" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.dailyRecurrence"></a>

```csharp
public DevTestScheduleDailyRecurrenceOutputReference DailyRecurrence { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference">DevTestScheduleDailyRecurrenceOutputReference</a>

---

##### `HourlyRecurrence`<sup>Required</sup> <a name="HourlyRecurrence" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.hourlyRecurrence"></a>

```csharp
public DevTestScheduleHourlyRecurrenceOutputReference HourlyRecurrence { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference">DevTestScheduleHourlyRecurrenceOutputReference</a>

---

##### `NotificationSettings`<sup>Required</sup> <a name="NotificationSettings" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.notificationSettings"></a>

```csharp
public DevTestScheduleNotificationSettingsOutputReference NotificationSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference">DevTestScheduleNotificationSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.timeouts"></a>

```csharp
public DevTestScheduleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference">DevTestScheduleTimeoutsOutputReference</a>

---

##### `WeeklyRecurrence`<sup>Required</sup> <a name="WeeklyRecurrence" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.weeklyRecurrence"></a>

```csharp
public DevTestScheduleWeeklyRecurrenceOutputReference WeeklyRecurrence { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference">DevTestScheduleWeeklyRecurrenceOutputReference</a>

---

##### `DailyRecurrenceInput`<sup>Optional</sup> <a name="DailyRecurrenceInput" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.dailyRecurrenceInput"></a>

```csharp
public DevTestScheduleDailyRecurrence DailyRecurrenceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence">DevTestScheduleDailyRecurrence</a>

---

##### `HourlyRecurrenceInput`<sup>Optional</sup> <a name="HourlyRecurrenceInput" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.hourlyRecurrenceInput"></a>

```csharp
public DevTestScheduleHourlyRecurrence HourlyRecurrenceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence">DevTestScheduleHourlyRecurrence</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabNameInput`<sup>Optional</sup> <a name="LabNameInput" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.labNameInput"></a>

```csharp
public string LabNameInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotificationSettingsInput`<sup>Optional</sup> <a name="NotificationSettingsInput" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.notificationSettingsInput"></a>

```csharp
public DevTestScheduleNotificationSettings NotificationSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings">DevTestScheduleNotificationSettings</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TaskTypeInput`<sup>Optional</sup> <a name="TaskTypeInput" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.taskTypeInput"></a>

```csharp
public string TaskTypeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.timeoutsInput"></a>

```csharp
public IResolvable|DevTestScheduleTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts">DevTestScheduleTimeouts</a>

---

##### `TimeZoneIdInput`<sup>Optional</sup> <a name="TimeZoneIdInput" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.timeZoneIdInput"></a>

```csharp
public string TimeZoneIdInput { get; }
```

- *Type:* string

---

##### `WeeklyRecurrenceInput`<sup>Optional</sup> <a name="WeeklyRecurrenceInput" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.weeklyRecurrenceInput"></a>

```csharp
public DevTestScheduleWeeklyRecurrence WeeklyRecurrenceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence">DevTestScheduleWeeklyRecurrence</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LabName`<sup>Required</sup> <a name="LabName" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.labName"></a>

```csharp
public string LabName { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.taskType"></a>

```csharp
public string TaskType { get; }
```

- *Type:* string

---

##### `TimeZoneId`<sup>Required</sup> <a name="TimeZoneId" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.timeZoneId"></a>

```csharp
public string TimeZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.devTestSchedule.DevTestSchedule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevTestScheduleConfig <a name="DevTestScheduleConfig" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DevTestScheduleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string LabName,
    string Location,
    string Name,
    DevTestScheduleNotificationSettings NotificationSettings,
    string ResourceGroupName,
    string TaskType,
    string TimeZoneId,
    DevTestScheduleDailyRecurrence DailyRecurrence = null,
    DevTestScheduleHourlyRecurrence HourlyRecurrence = null,
    string Id = null,
    string Status = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    DevTestScheduleTimeouts Timeouts = null,
    DevTestScheduleWeeklyRecurrence WeeklyRecurrence = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.labName">LabName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#lab_name DevTestSchedule#lab_name}. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#location DevTestSchedule#location}. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#name DevTestSchedule#name}. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.notificationSettings">NotificationSettings</a></code> | <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings">DevTestScheduleNotificationSettings</a></code> | notification_settings block. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#resource_group_name DevTestSchedule#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.taskType">TaskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#task_type DevTestSchedule#task_type}. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.timeZoneId">TimeZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#time_zone_id DevTestSchedule#time_zone_id}. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.dailyRecurrence">DailyRecurrence</a></code> | <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence">DevTestScheduleDailyRecurrence</a></code> | daily_recurrence block. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.hourlyRecurrence">HourlyRecurrence</a></code> | <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence">DevTestScheduleHourlyRecurrence</a></code> | hourly_recurrence block. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#id DevTestSchedule#id}. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#status DevTestSchedule#status}. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#tags DevTestSchedule#tags}. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts">DevTestScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.weeklyRecurrence">WeeklyRecurrence</a></code> | <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence">DevTestScheduleWeeklyRecurrence</a></code> | weekly_recurrence block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `LabName`<sup>Required</sup> <a name="LabName" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.labName"></a>

```csharp
public string LabName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#lab_name DevTestSchedule#lab_name}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#location DevTestSchedule#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#name DevTestSchedule#name}.

---

##### `NotificationSettings`<sup>Required</sup> <a name="NotificationSettings" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.notificationSettings"></a>

```csharp
public DevTestScheduleNotificationSettings NotificationSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings">DevTestScheduleNotificationSettings</a>

notification_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#notification_settings DevTestSchedule#notification_settings}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#resource_group_name DevTestSchedule#resource_group_name}.

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.taskType"></a>

```csharp
public string TaskType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#task_type DevTestSchedule#task_type}.

---

##### `TimeZoneId`<sup>Required</sup> <a name="TimeZoneId" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.timeZoneId"></a>

```csharp
public string TimeZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#time_zone_id DevTestSchedule#time_zone_id}.

---

##### `DailyRecurrence`<sup>Optional</sup> <a name="DailyRecurrence" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.dailyRecurrence"></a>

```csharp
public DevTestScheduleDailyRecurrence DailyRecurrence { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence">DevTestScheduleDailyRecurrence</a>

daily_recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#daily_recurrence DevTestSchedule#daily_recurrence}

---

##### `HourlyRecurrence`<sup>Optional</sup> <a name="HourlyRecurrence" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.hourlyRecurrence"></a>

```csharp
public DevTestScheduleHourlyRecurrence HourlyRecurrence { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence">DevTestScheduleHourlyRecurrence</a>

hourly_recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#hourly_recurrence DevTestSchedule#hourly_recurrence}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#id DevTestSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#status DevTestSchedule#status}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#tags DevTestSchedule#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.timeouts"></a>

```csharp
public DevTestScheduleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts">DevTestScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#timeouts DevTestSchedule#timeouts}

---

##### `WeeklyRecurrence`<sup>Optional</sup> <a name="WeeklyRecurrence" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleConfig.property.weeklyRecurrence"></a>

```csharp
public DevTestScheduleWeeklyRecurrence WeeklyRecurrence { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence">DevTestScheduleWeeklyRecurrence</a>

weekly_recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#weekly_recurrence DevTestSchedule#weekly_recurrence}

---

### DevTestScheduleDailyRecurrence <a name="DevTestScheduleDailyRecurrence" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DevTestScheduleDailyRecurrence {
    string Time
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence.property.time">Time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#time DevTestSchedule#time}. |

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence.property.time"></a>

```csharp
public string Time { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#time DevTestSchedule#time}.

---

### DevTestScheduleHourlyRecurrence <a name="DevTestScheduleHourlyRecurrence" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DevTestScheduleHourlyRecurrence {
    double Minute
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence.property.minute">Minute</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#minute DevTestSchedule#minute}. |

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence.property.minute"></a>

```csharp
public double Minute { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#minute DevTestSchedule#minute}.

---

### DevTestScheduleNotificationSettings <a name="DevTestScheduleNotificationSettings" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DevTestScheduleNotificationSettings {
    string Status = null,
    double TimeInMinutes = null,
    string WebhookUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#status DevTestSchedule#status}. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings.property.timeInMinutes">TimeInMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#time_in_minutes DevTestSchedule#time_in_minutes}. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings.property.webhookUrl">WebhookUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#webhook_url DevTestSchedule#webhook_url}. |

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#status DevTestSchedule#status}.

---

##### `TimeInMinutes`<sup>Optional</sup> <a name="TimeInMinutes" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings.property.timeInMinutes"></a>

```csharp
public double TimeInMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#time_in_minutes DevTestSchedule#time_in_minutes}.

---

##### `WebhookUrl`<sup>Optional</sup> <a name="WebhookUrl" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings.property.webhookUrl"></a>

```csharp
public string WebhookUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#webhook_url DevTestSchedule#webhook_url}.

---

### DevTestScheduleTimeouts <a name="DevTestScheduleTimeouts" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DevTestScheduleTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#create DevTestSchedule#create}. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#delete DevTestSchedule#delete}. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#read DevTestSchedule#read}. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#update DevTestSchedule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#create DevTestSchedule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#delete DevTestSchedule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#read DevTestSchedule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#update DevTestSchedule#update}.

---

### DevTestScheduleWeeklyRecurrence <a name="DevTestScheduleWeeklyRecurrence" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DevTestScheduleWeeklyRecurrence {
    string Time,
    string[] WeekDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence.property.time">Time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#time DevTestSchedule#time}. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence.property.weekDays">WeekDays</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#week_days DevTestSchedule#week_days}. |

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence.property.time"></a>

```csharp
public string Time { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#time DevTestSchedule#time}.

---

##### `WeekDays`<sup>Optional</sup> <a name="WeekDays" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence.property.weekDays"></a>

```csharp
public string[] WeekDays { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/dev_test_schedule#week_days DevTestSchedule#week_days}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevTestScheduleDailyRecurrenceOutputReference <a name="DevTestScheduleDailyRecurrenceOutputReference" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DevTestScheduleDailyRecurrenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.property.timeInput">TimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence">DevTestScheduleDailyRecurrence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.property.timeInput"></a>

```csharp
public string TimeInput { get; }
```

- *Type:* string

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrenceOutputReference.property.internalValue"></a>

```csharp
public DevTestScheduleDailyRecurrence InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleDailyRecurrence">DevTestScheduleDailyRecurrence</a>

---


### DevTestScheduleHourlyRecurrenceOutputReference <a name="DevTestScheduleHourlyRecurrenceOutputReference" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DevTestScheduleHourlyRecurrenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.property.minuteInput">MinuteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.property.minute">Minute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence">DevTestScheduleHourlyRecurrence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MinuteInput`<sup>Optional</sup> <a name="MinuteInput" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.property.minuteInput"></a>

```csharp
public double MinuteInput { get; }
```

- *Type:* double

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.property.minute"></a>

```csharp
public double Minute { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrenceOutputReference.property.internalValue"></a>

```csharp
public DevTestScheduleHourlyRecurrence InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleHourlyRecurrence">DevTestScheduleHourlyRecurrence</a>

---


### DevTestScheduleNotificationSettingsOutputReference <a name="DevTestScheduleNotificationSettingsOutputReference" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DevTestScheduleNotificationSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.resetTimeInMinutes">ResetTimeInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.resetWebhookUrl">ResetWebhookUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTimeInMinutes` <a name="ResetTimeInMinutes" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.resetTimeInMinutes"></a>

```csharp
private void ResetTimeInMinutes()
```

##### `ResetWebhookUrl` <a name="ResetWebhookUrl" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.resetWebhookUrl"></a>

```csharp
private void ResetWebhookUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.timeInMinutesInput">TimeInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.webhookUrlInput">WebhookUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.timeInMinutes">TimeInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.webhookUrl">WebhookUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings">DevTestScheduleNotificationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TimeInMinutesInput`<sup>Optional</sup> <a name="TimeInMinutesInput" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.timeInMinutesInput"></a>

```csharp
public double TimeInMinutesInput { get; }
```

- *Type:* double

---

##### `WebhookUrlInput`<sup>Optional</sup> <a name="WebhookUrlInput" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.webhookUrlInput"></a>

```csharp
public string WebhookUrlInput { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TimeInMinutes`<sup>Required</sup> <a name="TimeInMinutes" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.timeInMinutes"></a>

```csharp
public double TimeInMinutes { get; }
```

- *Type:* double

---

##### `WebhookUrl`<sup>Required</sup> <a name="WebhookUrl" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.webhookUrl"></a>

```csharp
public string WebhookUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettingsOutputReference.property.internalValue"></a>

```csharp
public DevTestScheduleNotificationSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleNotificationSettings">DevTestScheduleNotificationSettings</a>

---


### DevTestScheduleTimeoutsOutputReference <a name="DevTestScheduleTimeoutsOutputReference" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DevTestScheduleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts">DevTestScheduleTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevTestScheduleTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleTimeouts">DevTestScheduleTimeouts</a>

---


### DevTestScheduleWeeklyRecurrenceOutputReference <a name="DevTestScheduleWeeklyRecurrenceOutputReference" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DevTestScheduleWeeklyRecurrenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.resetWeekDays">ResetWeekDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWeekDays` <a name="ResetWeekDays" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.resetWeekDays"></a>

```csharp
private void ResetWeekDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.timeInput">TimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.weekDaysInput">WeekDaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.weekDays">WeekDays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence">DevTestScheduleWeeklyRecurrence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.timeInput"></a>

```csharp
public string TimeInput { get; }
```

- *Type:* string

---

##### `WeekDaysInput`<sup>Optional</sup> <a name="WeekDaysInput" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.weekDaysInput"></a>

```csharp
public string[] WeekDaysInput { get; }
```

- *Type:* string[]

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `WeekDays`<sup>Required</sup> <a name="WeekDays" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.weekDays"></a>

```csharp
public string[] WeekDays { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrenceOutputReference.property.internalValue"></a>

```csharp
public DevTestScheduleWeeklyRecurrence InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.devTestSchedule.DevTestScheduleWeeklyRecurrence">DevTestScheduleWeeklyRecurrence</a>

---



