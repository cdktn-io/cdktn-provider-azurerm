# `monitorSmartDetectorAlertRule` Submodule <a name="`monitorSmartDetectorAlertRule` Submodule" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorSmartDetectorAlertRule <a name="MonitorSmartDetectorAlertRule" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule azurerm_monitor_smart_detector_alert_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MonitorSmartDetectorAlertRule(Construct Scope, string Id, MonitorSmartDetectorAlertRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig">MonitorSmartDetectorAlertRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig">MonitorSmartDetectorAlertRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.putActionGroup">PutActionGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.resetThrottlingDuration">ResetThrottlingDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActionGroup` <a name="PutActionGroup" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.putActionGroup"></a>

```csharp
private void PutActionGroup(MonitorSmartDetectorAlertRuleActionGroup Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.putActionGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroup">MonitorSmartDetectorAlertRuleActionGroup</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.putTimeouts"></a>

```csharp
private void PutTimeouts(MonitorSmartDetectorAlertRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts">MonitorSmartDetectorAlertRuleTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetThrottlingDuration` <a name="ResetThrottlingDuration" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.resetThrottlingDuration"></a>

```csharp
private void ResetThrottlingDuration()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MonitorSmartDetectorAlertRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

MonitorSmartDetectorAlertRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

MonitorSmartDetectorAlertRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

MonitorSmartDetectorAlertRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

MonitorSmartDetectorAlertRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MonitorSmartDetectorAlertRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MonitorSmartDetectorAlertRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MonitorSmartDetectorAlertRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MonitorSmartDetectorAlertRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.actionGroup">ActionGroup</a></code> | <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference">MonitorSmartDetectorAlertRuleActionGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference">MonitorSmartDetectorAlertRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.actionGroupInput">ActionGroupInput</a></code> | <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroup">MonitorSmartDetectorAlertRuleActionGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.detectorTypeInput">DetectorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.frequencyInput">FrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.scopeResourceIdsInput">ScopeResourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.severityInput">SeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.throttlingDurationInput">ThrottlingDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts">MonitorSmartDetectorAlertRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.detectorType">DetectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.scopeResourceIds">ScopeResourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.throttlingDuration">ThrottlingDuration</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ActionGroup`<sup>Required</sup> <a name="ActionGroup" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.actionGroup"></a>

```csharp
public MonitorSmartDetectorAlertRuleActionGroupOutputReference ActionGroup { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference">MonitorSmartDetectorAlertRuleActionGroupOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.timeouts"></a>

```csharp
public MonitorSmartDetectorAlertRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference">MonitorSmartDetectorAlertRuleTimeoutsOutputReference</a>

---

##### `ActionGroupInput`<sup>Optional</sup> <a name="ActionGroupInput" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.actionGroupInput"></a>

```csharp
public MonitorSmartDetectorAlertRuleActionGroup ActionGroupInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroup">MonitorSmartDetectorAlertRuleActionGroup</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DetectorTypeInput`<sup>Optional</sup> <a name="DetectorTypeInput" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.detectorTypeInput"></a>

```csharp
public string DetectorTypeInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.frequencyInput"></a>

```csharp
public string FrequencyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ScopeResourceIdsInput`<sup>Optional</sup> <a name="ScopeResourceIdsInput" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.scopeResourceIdsInput"></a>

```csharp
public string[] ScopeResourceIdsInput { get; }
```

- *Type:* string[]

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.severityInput"></a>

```csharp
public string SeverityInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ThrottlingDurationInput`<sup>Optional</sup> <a name="ThrottlingDurationInput" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.throttlingDurationInput"></a>

```csharp
public string ThrottlingDurationInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.timeoutsInput"></a>

```csharp
public IResolvable|MonitorSmartDetectorAlertRuleTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts">MonitorSmartDetectorAlertRuleTimeouts</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DetectorType`<sup>Required</sup> <a name="DetectorType" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.detectorType"></a>

```csharp
public string DetectorType { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `ScopeResourceIds`<sup>Required</sup> <a name="ScopeResourceIds" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.scopeResourceIds"></a>

```csharp
public string[] ScopeResourceIds { get; }
```

- *Type:* string[]

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ThrottlingDuration`<sup>Required</sup> <a name="ThrottlingDuration" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.throttlingDuration"></a>

```csharp
public string ThrottlingDuration { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorSmartDetectorAlertRuleActionGroup <a name="MonitorSmartDetectorAlertRuleActionGroup" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MonitorSmartDetectorAlertRuleActionGroup {
    string[] Ids,
    string EmailSubject = null,
    string WebhookPayload = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroup.property.ids">Ids</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#ids MonitorSmartDetectorAlertRule#ids}. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroup.property.emailSubject">EmailSubject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#email_subject MonitorSmartDetectorAlertRule#email_subject}. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroup.property.webhookPayload">WebhookPayload</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#webhook_payload MonitorSmartDetectorAlertRule#webhook_payload}. |

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroup.property.ids"></a>

```csharp
public string[] Ids { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#ids MonitorSmartDetectorAlertRule#ids}.

---

##### `EmailSubject`<sup>Optional</sup> <a name="EmailSubject" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroup.property.emailSubject"></a>

```csharp
public string EmailSubject { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#email_subject MonitorSmartDetectorAlertRule#email_subject}.

---

##### `WebhookPayload`<sup>Optional</sup> <a name="WebhookPayload" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroup.property.webhookPayload"></a>

```csharp
public string WebhookPayload { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#webhook_payload MonitorSmartDetectorAlertRule#webhook_payload}.

---

### MonitorSmartDetectorAlertRuleConfig <a name="MonitorSmartDetectorAlertRuleConfig" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MonitorSmartDetectorAlertRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    MonitorSmartDetectorAlertRuleActionGroup ActionGroup,
    string DetectorType,
    string Frequency,
    string Name,
    string ResourceGroupName,
    string[] ScopeResourceIds,
    string Severity,
    string Description = null,
    bool|IResolvable Enabled = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string ThrottlingDuration = null,
    MonitorSmartDetectorAlertRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.actionGroup">ActionGroup</a></code> | <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroup">MonitorSmartDetectorAlertRuleActionGroup</a></code> | action_group block. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.detectorType">DetectorType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#detector_type MonitorSmartDetectorAlertRule#detector_type}. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.frequency">Frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#frequency MonitorSmartDetectorAlertRule#frequency}. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#name MonitorSmartDetectorAlertRule#name}. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#resource_group_name MonitorSmartDetectorAlertRule#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.scopeResourceIds">ScopeResourceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#scope_resource_ids MonitorSmartDetectorAlertRule#scope_resource_ids}. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.severity">Severity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#severity MonitorSmartDetectorAlertRule#severity}. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#description MonitorSmartDetectorAlertRule#description}. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#enabled MonitorSmartDetectorAlertRule#enabled}. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#id MonitorSmartDetectorAlertRule#id}. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#tags MonitorSmartDetectorAlertRule#tags}. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.throttlingDuration">ThrottlingDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#throttling_duration MonitorSmartDetectorAlertRule#throttling_duration}. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts">MonitorSmartDetectorAlertRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ActionGroup`<sup>Required</sup> <a name="ActionGroup" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.actionGroup"></a>

```csharp
public MonitorSmartDetectorAlertRuleActionGroup ActionGroup { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroup">MonitorSmartDetectorAlertRuleActionGroup</a>

action_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#action_group MonitorSmartDetectorAlertRule#action_group}

---

##### `DetectorType`<sup>Required</sup> <a name="DetectorType" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.detectorType"></a>

```csharp
public string DetectorType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#detector_type MonitorSmartDetectorAlertRule#detector_type}.

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.frequency"></a>

```csharp
public string Frequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#frequency MonitorSmartDetectorAlertRule#frequency}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#name MonitorSmartDetectorAlertRule#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#resource_group_name MonitorSmartDetectorAlertRule#resource_group_name}.

---

##### `ScopeResourceIds`<sup>Required</sup> <a name="ScopeResourceIds" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.scopeResourceIds"></a>

```csharp
public string[] ScopeResourceIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#scope_resource_ids MonitorSmartDetectorAlertRule#scope_resource_ids}.

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.severity"></a>

```csharp
public string Severity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#severity MonitorSmartDetectorAlertRule#severity}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#description MonitorSmartDetectorAlertRule#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#enabled MonitorSmartDetectorAlertRule#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#id MonitorSmartDetectorAlertRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#tags MonitorSmartDetectorAlertRule#tags}.

---

##### `ThrottlingDuration`<sup>Optional</sup> <a name="ThrottlingDuration" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.throttlingDuration"></a>

```csharp
public string ThrottlingDuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#throttling_duration MonitorSmartDetectorAlertRule#throttling_duration}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleConfig.property.timeouts"></a>

```csharp
public MonitorSmartDetectorAlertRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts">MonitorSmartDetectorAlertRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#timeouts MonitorSmartDetectorAlertRule#timeouts}

---

### MonitorSmartDetectorAlertRuleTimeouts <a name="MonitorSmartDetectorAlertRuleTimeouts" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MonitorSmartDetectorAlertRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#create MonitorSmartDetectorAlertRule#create}. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#delete MonitorSmartDetectorAlertRule#delete}. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#read MonitorSmartDetectorAlertRule#read}. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#update MonitorSmartDetectorAlertRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#create MonitorSmartDetectorAlertRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#delete MonitorSmartDetectorAlertRule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#read MonitorSmartDetectorAlertRule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/monitor_smart_detector_alert_rule#update MonitorSmartDetectorAlertRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorSmartDetectorAlertRuleActionGroupOutputReference <a name="MonitorSmartDetectorAlertRuleActionGroupOutputReference" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MonitorSmartDetectorAlertRuleActionGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.resetEmailSubject">ResetEmailSubject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.resetWebhookPayload">ResetWebhookPayload</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmailSubject` <a name="ResetEmailSubject" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.resetEmailSubject"></a>

```csharp
private void ResetEmailSubject()
```

##### `ResetWebhookPayload` <a name="ResetWebhookPayload" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.resetWebhookPayload"></a>

```csharp
private void ResetWebhookPayload()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.emailSubjectInput">EmailSubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.idsInput">IdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.webhookPayloadInput">WebhookPayloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.emailSubject">EmailSubject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.ids">Ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.webhookPayload">WebhookPayload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroup">MonitorSmartDetectorAlertRuleActionGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailSubjectInput`<sup>Optional</sup> <a name="EmailSubjectInput" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.emailSubjectInput"></a>

```csharp
public string EmailSubjectInput { get; }
```

- *Type:* string

---

##### `IdsInput`<sup>Optional</sup> <a name="IdsInput" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.idsInput"></a>

```csharp
public string[] IdsInput { get; }
```

- *Type:* string[]

---

##### `WebhookPayloadInput`<sup>Optional</sup> <a name="WebhookPayloadInput" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.webhookPayloadInput"></a>

```csharp
public string WebhookPayloadInput { get; }
```

- *Type:* string

---

##### `EmailSubject`<sup>Required</sup> <a name="EmailSubject" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.emailSubject"></a>

```csharp
public string EmailSubject { get; }
```

- *Type:* string

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.ids"></a>

```csharp
public string[] Ids { get; }
```

- *Type:* string[]

---

##### `WebhookPayload`<sup>Required</sup> <a name="WebhookPayload" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.webhookPayload"></a>

```csharp
public string WebhookPayload { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroupOutputReference.property.internalValue"></a>

```csharp
public MonitorSmartDetectorAlertRuleActionGroup InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleActionGroup">MonitorSmartDetectorAlertRuleActionGroup</a>

---


### MonitorSmartDetectorAlertRuleTimeoutsOutputReference <a name="MonitorSmartDetectorAlertRuleTimeoutsOutputReference" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MonitorSmartDetectorAlertRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts">MonitorSmartDetectorAlertRuleTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MonitorSmartDetectorAlertRuleTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.monitorSmartDetectorAlertRule.MonitorSmartDetectorAlertRuleTimeouts">MonitorSmartDetectorAlertRuleTimeouts</a>

---



