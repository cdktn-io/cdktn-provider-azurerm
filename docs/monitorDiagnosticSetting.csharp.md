# `monitorDiagnosticSetting` Submodule <a name="`monitorDiagnosticSetting` Submodule" id="@cdktn/provider-azurerm.monitorDiagnosticSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorDiagnosticSetting <a name="MonitorDiagnosticSetting" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting azurerm_monitor_diagnostic_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MonitorDiagnosticSetting(Construct Scope, string Id, MonitorDiagnosticSettingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig">MonitorDiagnosticSettingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig">MonitorDiagnosticSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putEnabledLog">PutEnabledLog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putEnabledMetric">PutEnabledMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetEnabledLog">ResetEnabledLog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetEnabledMetric">ResetEnabledMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetEventhubAuthorizationRuleId">ResetEventhubAuthorizationRuleId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetEventhubName">ResetEventhubName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetLogAnalyticsDestinationType">ResetLogAnalyticsDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetLogAnalyticsWorkspaceId">ResetLogAnalyticsWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetPartnerSolutionId">ResetPartnerSolutionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetStorageAccountId">ResetStorageAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEnabledLog` <a name="PutEnabledLog" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putEnabledLog"></a>

```csharp
private void PutEnabledLog(IResolvable|MonitorDiagnosticSettingEnabledLog[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putEnabledLog.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog">MonitorDiagnosticSettingEnabledLog</a>[]

---

##### `PutEnabledMetric` <a name="PutEnabledMetric" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putEnabledMetric"></a>

```csharp
private void PutEnabledMetric(IResolvable|MonitorDiagnosticSettingEnabledMetric[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putEnabledMetric.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetric">MonitorDiagnosticSettingEnabledMetric</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putTimeouts"></a>

```csharp
private void PutTimeouts(MonitorDiagnosticSettingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts">MonitorDiagnosticSettingTimeouts</a>

---

##### `ResetEnabledLog` <a name="ResetEnabledLog" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetEnabledLog"></a>

```csharp
private void ResetEnabledLog()
```

##### `ResetEnabledMetric` <a name="ResetEnabledMetric" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetEnabledMetric"></a>

```csharp
private void ResetEnabledMetric()
```

##### `ResetEventhubAuthorizationRuleId` <a name="ResetEventhubAuthorizationRuleId" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetEventhubAuthorizationRuleId"></a>

```csharp
private void ResetEventhubAuthorizationRuleId()
```

##### `ResetEventhubName` <a name="ResetEventhubName" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetEventhubName"></a>

```csharp
private void ResetEventhubName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogAnalyticsDestinationType` <a name="ResetLogAnalyticsDestinationType" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetLogAnalyticsDestinationType"></a>

```csharp
private void ResetLogAnalyticsDestinationType()
```

##### `ResetLogAnalyticsWorkspaceId` <a name="ResetLogAnalyticsWorkspaceId" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetLogAnalyticsWorkspaceId"></a>

```csharp
private void ResetLogAnalyticsWorkspaceId()
```

##### `ResetPartnerSolutionId` <a name="ResetPartnerSolutionId" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetPartnerSolutionId"></a>

```csharp
private void ResetPartnerSolutionId()
```

##### `ResetStorageAccountId` <a name="ResetStorageAccountId" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetStorageAccountId"></a>

```csharp
private void ResetStorageAccountId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MonitorDiagnosticSetting resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

MonitorDiagnosticSetting.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

MonitorDiagnosticSetting.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

MonitorDiagnosticSetting.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

MonitorDiagnosticSetting.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MonitorDiagnosticSetting resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MonitorDiagnosticSetting to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MonitorDiagnosticSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MonitorDiagnosticSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.enabledLog">EnabledLog</a></code> | <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList">MonitorDiagnosticSettingEnabledLogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.enabledMetric">EnabledMetric</a></code> | <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList">MonitorDiagnosticSettingEnabledMetricList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference">MonitorDiagnosticSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.enabledLogInput">EnabledLogInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog">MonitorDiagnosticSettingEnabledLog</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.enabledMetricInput">EnabledMetricInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetric">MonitorDiagnosticSettingEnabledMetric</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.eventhubAuthorizationRuleIdInput">EventhubAuthorizationRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.eventhubNameInput">EventhubNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logAnalyticsDestinationTypeInput">LogAnalyticsDestinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.partnerSolutionIdInput">PartnerSolutionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.targetResourceIdInput">TargetResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts">MonitorDiagnosticSettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.eventhubAuthorizationRuleId">EventhubAuthorizationRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.eventhubName">EventhubName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logAnalyticsDestinationType">LogAnalyticsDestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.partnerSolutionId">PartnerSolutionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.targetResourceId">TargetResourceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EnabledLog`<sup>Required</sup> <a name="EnabledLog" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.enabledLog"></a>

```csharp
public MonitorDiagnosticSettingEnabledLogList EnabledLog { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList">MonitorDiagnosticSettingEnabledLogList</a>

---

##### `EnabledMetric`<sup>Required</sup> <a name="EnabledMetric" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.enabledMetric"></a>

```csharp
public MonitorDiagnosticSettingEnabledMetricList EnabledMetric { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList">MonitorDiagnosticSettingEnabledMetricList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.timeouts"></a>

```csharp
public MonitorDiagnosticSettingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference">MonitorDiagnosticSettingTimeoutsOutputReference</a>

---

##### `EnabledLogInput`<sup>Optional</sup> <a name="EnabledLogInput" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.enabledLogInput"></a>

```csharp
public IResolvable|MonitorDiagnosticSettingEnabledLog[] EnabledLogInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog">MonitorDiagnosticSettingEnabledLog</a>[]

---

##### `EnabledMetricInput`<sup>Optional</sup> <a name="EnabledMetricInput" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.enabledMetricInput"></a>

```csharp
public IResolvable|MonitorDiagnosticSettingEnabledMetric[] EnabledMetricInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetric">MonitorDiagnosticSettingEnabledMetric</a>[]

---

##### `EventhubAuthorizationRuleIdInput`<sup>Optional</sup> <a name="EventhubAuthorizationRuleIdInput" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.eventhubAuthorizationRuleIdInput"></a>

```csharp
public string EventhubAuthorizationRuleIdInput { get; }
```

- *Type:* string

---

##### `EventhubNameInput`<sup>Optional</sup> <a name="EventhubNameInput" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.eventhubNameInput"></a>

```csharp
public string EventhubNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogAnalyticsDestinationTypeInput`<sup>Optional</sup> <a name="LogAnalyticsDestinationTypeInput" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logAnalyticsDestinationTypeInput"></a>

```csharp
public string LogAnalyticsDestinationTypeInput { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logAnalyticsWorkspaceIdInput"></a>

```csharp
public string LogAnalyticsWorkspaceIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PartnerSolutionIdInput`<sup>Optional</sup> <a name="PartnerSolutionIdInput" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.partnerSolutionIdInput"></a>

```csharp
public string PartnerSolutionIdInput { get; }
```

- *Type:* string

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.storageAccountIdInput"></a>

```csharp
public string StorageAccountIdInput { get; }
```

- *Type:* string

---

##### `TargetResourceIdInput`<sup>Optional</sup> <a name="TargetResourceIdInput" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.targetResourceIdInput"></a>

```csharp
public string TargetResourceIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.timeoutsInput"></a>

```csharp
public IResolvable|MonitorDiagnosticSettingTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts">MonitorDiagnosticSettingTimeouts</a>

---

##### `EventhubAuthorizationRuleId`<sup>Required</sup> <a name="EventhubAuthorizationRuleId" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.eventhubAuthorizationRuleId"></a>

```csharp
public string EventhubAuthorizationRuleId { get; }
```

- *Type:* string

---

##### `EventhubName`<sup>Required</sup> <a name="EventhubName" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.eventhubName"></a>

```csharp
public string EventhubName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogAnalyticsDestinationType`<sup>Required</sup> <a name="LogAnalyticsDestinationType" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logAnalyticsDestinationType"></a>

```csharp
public string LogAnalyticsDestinationType { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PartnerSolutionId`<sup>Required</sup> <a name="PartnerSolutionId" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.partnerSolutionId"></a>

```csharp
public string PartnerSolutionId { get; }
```

- *Type:* string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; }
```

- *Type:* string

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.targetResourceId"></a>

```csharp
public string TargetResourceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorDiagnosticSettingConfig <a name="MonitorDiagnosticSettingConfig" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MonitorDiagnosticSettingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string TargetResourceId,
    IResolvable|MonitorDiagnosticSettingEnabledLog[] EnabledLog = null,
    IResolvable|MonitorDiagnosticSettingEnabledMetric[] EnabledMetric = null,
    string EventhubAuthorizationRuleId = null,
    string EventhubName = null,
    string Id = null,
    string LogAnalyticsDestinationType = null,
    string LogAnalyticsWorkspaceId = null,
    string PartnerSolutionId = null,
    string StorageAccountId = null,
    MonitorDiagnosticSettingTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#name MonitorDiagnosticSetting#name}. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.targetResourceId">TargetResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#target_resource_id MonitorDiagnosticSetting#target_resource_id}. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.enabledLog">EnabledLog</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog">MonitorDiagnosticSettingEnabledLog</a>[]</code> | enabled_log block. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.enabledMetric">EnabledMetric</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetric">MonitorDiagnosticSettingEnabledMetric</a>[]</code> | enabled_metric block. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.eventhubAuthorizationRuleId">EventhubAuthorizationRuleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#eventhub_authorization_rule_id MonitorDiagnosticSetting#eventhub_authorization_rule_id}. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.eventhubName">EventhubName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#eventhub_name MonitorDiagnosticSetting#eventhub_name}. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#id MonitorDiagnosticSetting#id}. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.logAnalyticsDestinationType">LogAnalyticsDestinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#log_analytics_destination_type MonitorDiagnosticSetting#log_analytics_destination_type}. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#log_analytics_workspace_id MonitorDiagnosticSetting#log_analytics_workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.partnerSolutionId">PartnerSolutionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#partner_solution_id MonitorDiagnosticSetting#partner_solution_id}. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#storage_account_id MonitorDiagnosticSetting#storage_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts">MonitorDiagnosticSettingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#name MonitorDiagnosticSetting#name}.

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.targetResourceId"></a>

```csharp
public string TargetResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#target_resource_id MonitorDiagnosticSetting#target_resource_id}.

---

##### `EnabledLog`<sup>Optional</sup> <a name="EnabledLog" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.enabledLog"></a>

```csharp
public IResolvable|MonitorDiagnosticSettingEnabledLog[] EnabledLog { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog">MonitorDiagnosticSettingEnabledLog</a>[]

enabled_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#enabled_log MonitorDiagnosticSetting#enabled_log}

---

##### `EnabledMetric`<sup>Optional</sup> <a name="EnabledMetric" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.enabledMetric"></a>

```csharp
public IResolvable|MonitorDiagnosticSettingEnabledMetric[] EnabledMetric { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetric">MonitorDiagnosticSettingEnabledMetric</a>[]

enabled_metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#enabled_metric MonitorDiagnosticSetting#enabled_metric}

---

##### `EventhubAuthorizationRuleId`<sup>Optional</sup> <a name="EventhubAuthorizationRuleId" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.eventhubAuthorizationRuleId"></a>

```csharp
public string EventhubAuthorizationRuleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#eventhub_authorization_rule_id MonitorDiagnosticSetting#eventhub_authorization_rule_id}.

---

##### `EventhubName`<sup>Optional</sup> <a name="EventhubName" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.eventhubName"></a>

```csharp
public string EventhubName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#eventhub_name MonitorDiagnosticSetting#eventhub_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#id MonitorDiagnosticSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogAnalyticsDestinationType`<sup>Optional</sup> <a name="LogAnalyticsDestinationType" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.logAnalyticsDestinationType"></a>

```csharp
public string LogAnalyticsDestinationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#log_analytics_destination_type MonitorDiagnosticSetting#log_analytics_destination_type}.

---

##### `LogAnalyticsWorkspaceId`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#log_analytics_workspace_id MonitorDiagnosticSetting#log_analytics_workspace_id}.

---

##### `PartnerSolutionId`<sup>Optional</sup> <a name="PartnerSolutionId" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.partnerSolutionId"></a>

```csharp
public string PartnerSolutionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#partner_solution_id MonitorDiagnosticSetting#partner_solution_id}.

---

##### `StorageAccountId`<sup>Optional</sup> <a name="StorageAccountId" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#storage_account_id MonitorDiagnosticSetting#storage_account_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.timeouts"></a>

```csharp
public MonitorDiagnosticSettingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts">MonitorDiagnosticSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#timeouts MonitorDiagnosticSetting#timeouts}

---

### MonitorDiagnosticSettingEnabledLog <a name="MonitorDiagnosticSettingEnabledLog" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MonitorDiagnosticSettingEnabledLog {
    string Category = null,
    string CategoryGroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog.property.category">Category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#category MonitorDiagnosticSetting#category}. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog.property.categoryGroup">CategoryGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#category_group MonitorDiagnosticSetting#category_group}. |

---

##### `Category`<sup>Optional</sup> <a name="Category" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog.property.category"></a>

```csharp
public string Category { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#category MonitorDiagnosticSetting#category}.

---

##### `CategoryGroup`<sup>Optional</sup> <a name="CategoryGroup" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog.property.categoryGroup"></a>

```csharp
public string CategoryGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#category_group MonitorDiagnosticSetting#category_group}.

---

### MonitorDiagnosticSettingEnabledMetric <a name="MonitorDiagnosticSettingEnabledMetric" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetric.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MonitorDiagnosticSettingEnabledMetric {
    string Category
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetric.property.category">Category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#category MonitorDiagnosticSetting#category}. |

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetric.property.category"></a>

```csharp
public string Category { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#category MonitorDiagnosticSetting#category}.

---

### MonitorDiagnosticSettingTimeouts <a name="MonitorDiagnosticSettingTimeouts" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MonitorDiagnosticSettingTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#create MonitorDiagnosticSetting#create}. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#delete MonitorDiagnosticSetting#delete}. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#read MonitorDiagnosticSetting#read}. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#update MonitorDiagnosticSetting#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#create MonitorDiagnosticSetting#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#delete MonitorDiagnosticSetting#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#read MonitorDiagnosticSetting#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_diagnostic_setting#update MonitorDiagnosticSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorDiagnosticSettingEnabledLogList <a name="MonitorDiagnosticSettingEnabledLogList" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MonitorDiagnosticSettingEnabledLogList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.get"></a>

```csharp
private MonitorDiagnosticSettingEnabledLogOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog">MonitorDiagnosticSettingEnabledLog</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.property.internalValue"></a>

```csharp
public IResolvable|MonitorDiagnosticSettingEnabledLog[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog">MonitorDiagnosticSettingEnabledLog</a>[]

---


### MonitorDiagnosticSettingEnabledLogOutputReference <a name="MonitorDiagnosticSettingEnabledLogOutputReference" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MonitorDiagnosticSettingEnabledLogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resetCategory">ResetCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resetCategoryGroup">ResetCategoryGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCategory` <a name="ResetCategory" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resetCategory"></a>

```csharp
private void ResetCategory()
```

##### `ResetCategoryGroup` <a name="ResetCategoryGroup" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resetCategoryGroup"></a>

```csharp
private void ResetCategoryGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.categoryGroupInput">CategoryGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.categoryInput">CategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.categoryGroup">CategoryGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog">MonitorDiagnosticSettingEnabledLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CategoryGroupInput`<sup>Optional</sup> <a name="CategoryGroupInput" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.categoryGroupInput"></a>

```csharp
public string CategoryGroupInput { get; }
```

- *Type:* string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.categoryInput"></a>

```csharp
public string CategoryInput { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `CategoryGroup`<sup>Required</sup> <a name="CategoryGroup" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.categoryGroup"></a>

```csharp
public string CategoryGroup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MonitorDiagnosticSettingEnabledLog InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog">MonitorDiagnosticSettingEnabledLog</a>

---


### MonitorDiagnosticSettingEnabledMetricList <a name="MonitorDiagnosticSettingEnabledMetricList" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MonitorDiagnosticSettingEnabledMetricList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.get"></a>

```csharp
private MonitorDiagnosticSettingEnabledMetricOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetric">MonitorDiagnosticSettingEnabledMetric</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.property.internalValue"></a>

```csharp
public IResolvable|MonitorDiagnosticSettingEnabledMetric[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetric">MonitorDiagnosticSettingEnabledMetric</a>[]

---


### MonitorDiagnosticSettingEnabledMetricOutputReference <a name="MonitorDiagnosticSettingEnabledMetricOutputReference" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MonitorDiagnosticSettingEnabledMetricOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.property.categoryInput">CategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetric">MonitorDiagnosticSettingEnabledMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.property.categoryInput"></a>

```csharp
public string CategoryInput { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MonitorDiagnosticSettingEnabledMetric InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetric">MonitorDiagnosticSettingEnabledMetric</a>

---


### MonitorDiagnosticSettingTimeoutsOutputReference <a name="MonitorDiagnosticSettingTimeoutsOutputReference" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MonitorDiagnosticSettingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts">MonitorDiagnosticSettingTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MonitorDiagnosticSettingTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts">MonitorDiagnosticSettingTimeouts</a>

---



