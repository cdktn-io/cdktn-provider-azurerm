# `monitorAadDiagnosticSetting` Submodule <a name="`monitorAadDiagnosticSetting` Submodule" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorAadDiagnosticSetting <a name="MonitorAadDiagnosticSetting" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_aad_diagnostic_setting azurerm_monitor_aad_diagnostic_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MonitorAadDiagnosticSetting(Construct Scope, string Id, MonitorAadDiagnosticSettingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig">MonitorAadDiagnosticSettingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig">MonitorAadDiagnosticSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.putEnabledLog">PutEnabledLog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.resetEnabledLog">ResetEnabledLog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.resetEventhubAuthorizationRuleId">ResetEventhubAuthorizationRuleId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.resetEventhubName">ResetEventhubName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.resetLogAnalyticsWorkspaceId">ResetLogAnalyticsWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.resetStorageAccountId">ResetStorageAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEnabledLog` <a name="PutEnabledLog" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.putEnabledLog"></a>

```csharp
private void PutEnabledLog(IResolvable|MonitorAadDiagnosticSettingEnabledLog[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.putEnabledLog.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLog">MonitorAadDiagnosticSettingEnabledLog</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.putTimeouts"></a>

```csharp
private void PutTimeouts(MonitorAadDiagnosticSettingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts">MonitorAadDiagnosticSettingTimeouts</a>

---

##### `ResetEnabledLog` <a name="ResetEnabledLog" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.resetEnabledLog"></a>

```csharp
private void ResetEnabledLog()
```

##### `ResetEventhubAuthorizationRuleId` <a name="ResetEventhubAuthorizationRuleId" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.resetEventhubAuthorizationRuleId"></a>

```csharp
private void ResetEventhubAuthorizationRuleId()
```

##### `ResetEventhubName` <a name="ResetEventhubName" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.resetEventhubName"></a>

```csharp
private void ResetEventhubName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogAnalyticsWorkspaceId` <a name="ResetLogAnalyticsWorkspaceId" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.resetLogAnalyticsWorkspaceId"></a>

```csharp
private void ResetLogAnalyticsWorkspaceId()
```

##### `ResetStorageAccountId` <a name="ResetStorageAccountId" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.resetStorageAccountId"></a>

```csharp
private void ResetStorageAccountId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MonitorAadDiagnosticSetting resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

MonitorAadDiagnosticSetting.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

MonitorAadDiagnosticSetting.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

MonitorAadDiagnosticSetting.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

MonitorAadDiagnosticSetting.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MonitorAadDiagnosticSetting resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MonitorAadDiagnosticSetting to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MonitorAadDiagnosticSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_aad_diagnostic_setting#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MonitorAadDiagnosticSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.enabledLog">EnabledLog</a></code> | <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogList">MonitorAadDiagnosticSettingEnabledLogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference">MonitorAadDiagnosticSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.enabledLogInput">EnabledLogInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLog">MonitorAadDiagnosticSettingEnabledLog</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.eventhubAuthorizationRuleIdInput">EventhubAuthorizationRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.eventhubNameInput">EventhubNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts">MonitorAadDiagnosticSettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.eventhubAuthorizationRuleId">EventhubAuthorizationRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.eventhubName">EventhubName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EnabledLog`<sup>Required</sup> <a name="EnabledLog" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.enabledLog"></a>

```csharp
public MonitorAadDiagnosticSettingEnabledLogList EnabledLog { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogList">MonitorAadDiagnosticSettingEnabledLogList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.timeouts"></a>

```csharp
public MonitorAadDiagnosticSettingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference">MonitorAadDiagnosticSettingTimeoutsOutputReference</a>

---

##### `EnabledLogInput`<sup>Optional</sup> <a name="EnabledLogInput" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.enabledLogInput"></a>

```csharp
public IResolvable|MonitorAadDiagnosticSettingEnabledLog[] EnabledLogInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLog">MonitorAadDiagnosticSettingEnabledLog</a>[]

---

##### `EventhubAuthorizationRuleIdInput`<sup>Optional</sup> <a name="EventhubAuthorizationRuleIdInput" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.eventhubAuthorizationRuleIdInput"></a>

```csharp
public string EventhubAuthorizationRuleIdInput { get; }
```

- *Type:* string

---

##### `EventhubNameInput`<sup>Optional</sup> <a name="EventhubNameInput" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.eventhubNameInput"></a>

```csharp
public string EventhubNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.logAnalyticsWorkspaceIdInput"></a>

```csharp
public string LogAnalyticsWorkspaceIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.storageAccountIdInput"></a>

```csharp
public string StorageAccountIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.timeoutsInput"></a>

```csharp
public IResolvable|MonitorAadDiagnosticSettingTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts">MonitorAadDiagnosticSettingTimeouts</a>

---

##### `EventhubAuthorizationRuleId`<sup>Required</sup> <a name="EventhubAuthorizationRuleId" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.eventhubAuthorizationRuleId"></a>

```csharp
public string EventhubAuthorizationRuleId { get; }
```

- *Type:* string

---

##### `EventhubName`<sup>Required</sup> <a name="EventhubName" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.eventhubName"></a>

```csharp
public string EventhubName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorAadDiagnosticSettingConfig <a name="MonitorAadDiagnosticSettingConfig" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MonitorAadDiagnosticSettingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    IResolvable|MonitorAadDiagnosticSettingEnabledLog[] EnabledLog = null,
    string EventhubAuthorizationRuleId = null,
    string EventhubName = null,
    string Id = null,
    string LogAnalyticsWorkspaceId = null,
    string StorageAccountId = null,
    MonitorAadDiagnosticSettingTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_aad_diagnostic_setting#name MonitorAadDiagnosticSetting#name}. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.enabledLog">EnabledLog</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLog">MonitorAadDiagnosticSettingEnabledLog</a>[]</code> | enabled_log block. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.eventhubAuthorizationRuleId">EventhubAuthorizationRuleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_aad_diagnostic_setting#eventhub_authorization_rule_id MonitorAadDiagnosticSetting#eventhub_authorization_rule_id}. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.eventhubName">EventhubName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_aad_diagnostic_setting#eventhub_name MonitorAadDiagnosticSetting#eventhub_name}. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_aad_diagnostic_setting#id MonitorAadDiagnosticSetting#id}. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_aad_diagnostic_setting#log_analytics_workspace_id MonitorAadDiagnosticSetting#log_analytics_workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_aad_diagnostic_setting#storage_account_id MonitorAadDiagnosticSetting#storage_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts">MonitorAadDiagnosticSettingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_aad_diagnostic_setting#name MonitorAadDiagnosticSetting#name}.

---

##### `EnabledLog`<sup>Optional</sup> <a name="EnabledLog" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.enabledLog"></a>

```csharp
public IResolvable|MonitorAadDiagnosticSettingEnabledLog[] EnabledLog { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLog">MonitorAadDiagnosticSettingEnabledLog</a>[]

enabled_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_aad_diagnostic_setting#enabled_log MonitorAadDiagnosticSetting#enabled_log}

---

##### `EventhubAuthorizationRuleId`<sup>Optional</sup> <a name="EventhubAuthorizationRuleId" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.eventhubAuthorizationRuleId"></a>

```csharp
public string EventhubAuthorizationRuleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_aad_diagnostic_setting#eventhub_authorization_rule_id MonitorAadDiagnosticSetting#eventhub_authorization_rule_id}.

---

##### `EventhubName`<sup>Optional</sup> <a name="EventhubName" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.eventhubName"></a>

```csharp
public string EventhubName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_aad_diagnostic_setting#eventhub_name MonitorAadDiagnosticSetting#eventhub_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_aad_diagnostic_setting#id MonitorAadDiagnosticSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogAnalyticsWorkspaceId`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_aad_diagnostic_setting#log_analytics_workspace_id MonitorAadDiagnosticSetting#log_analytics_workspace_id}.

---

##### `StorageAccountId`<sup>Optional</sup> <a name="StorageAccountId" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_aad_diagnostic_setting#storage_account_id MonitorAadDiagnosticSetting#storage_account_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.timeouts"></a>

```csharp
public MonitorAadDiagnosticSettingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts">MonitorAadDiagnosticSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_aad_diagnostic_setting#timeouts MonitorAadDiagnosticSetting#timeouts}

---

### MonitorAadDiagnosticSettingEnabledLog <a name="MonitorAadDiagnosticSettingEnabledLog" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLog.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MonitorAadDiagnosticSettingEnabledLog {
    string Category,
    MonitorAadDiagnosticSettingEnabledLogRetentionPolicy RetentionPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLog.property.category">Category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_aad_diagnostic_setting#category MonitorAadDiagnosticSetting#category}. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLog.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicy">MonitorAadDiagnosticSettingEnabledLogRetentionPolicy</a></code> | retention_policy block. |

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLog.property.category"></a>

```csharp
public string Category { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_aad_diagnostic_setting#category MonitorAadDiagnosticSetting#category}.

---

##### `RetentionPolicy`<sup>Optional</sup> <a name="RetentionPolicy" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLog.property.retentionPolicy"></a>

```csharp
public MonitorAadDiagnosticSettingEnabledLogRetentionPolicy RetentionPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicy">MonitorAadDiagnosticSettingEnabledLogRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_aad_diagnostic_setting#retention_policy MonitorAadDiagnosticSetting#retention_policy}

---

### MonitorAadDiagnosticSettingEnabledLogRetentionPolicy <a name="MonitorAadDiagnosticSettingEnabledLogRetentionPolicy" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MonitorAadDiagnosticSettingEnabledLogRetentionPolicy {
    double Days = null,
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicy.property.days">Days</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_aad_diagnostic_setting#days MonitorAadDiagnosticSetting#days}. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicy.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_aad_diagnostic_setting#enabled MonitorAadDiagnosticSetting#enabled}. |

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicy.property.days"></a>

```csharp
public double Days { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_aad_diagnostic_setting#days MonitorAadDiagnosticSetting#days}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicy.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_aad_diagnostic_setting#enabled MonitorAadDiagnosticSetting#enabled}.

---

### MonitorAadDiagnosticSettingTimeouts <a name="MonitorAadDiagnosticSettingTimeouts" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MonitorAadDiagnosticSettingTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_aad_diagnostic_setting#create MonitorAadDiagnosticSetting#create}. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_aad_diagnostic_setting#delete MonitorAadDiagnosticSetting#delete}. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_aad_diagnostic_setting#read MonitorAadDiagnosticSetting#read}. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_aad_diagnostic_setting#update MonitorAadDiagnosticSetting#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_aad_diagnostic_setting#create MonitorAadDiagnosticSetting#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_aad_diagnostic_setting#delete MonitorAadDiagnosticSetting#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_aad_diagnostic_setting#read MonitorAadDiagnosticSetting#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_aad_diagnostic_setting#update MonitorAadDiagnosticSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorAadDiagnosticSettingEnabledLogList <a name="MonitorAadDiagnosticSettingEnabledLogList" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MonitorAadDiagnosticSettingEnabledLogList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogList.get"></a>

```csharp
private MonitorAadDiagnosticSettingEnabledLogOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLog">MonitorAadDiagnosticSettingEnabledLog</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogList.property.internalValue"></a>

```csharp
public IResolvable|MonitorAadDiagnosticSettingEnabledLog[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLog">MonitorAadDiagnosticSettingEnabledLog</a>[]

---


### MonitorAadDiagnosticSettingEnabledLogOutputReference <a name="MonitorAadDiagnosticSettingEnabledLogOutputReference" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MonitorAadDiagnosticSettingEnabledLogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.putRetentionPolicy">PutRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.resetRetentionPolicy">ResetRetentionPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRetentionPolicy` <a name="PutRetentionPolicy" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.putRetentionPolicy"></a>

```csharp
private void PutRetentionPolicy(MonitorAadDiagnosticSettingEnabledLogRetentionPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicy">MonitorAadDiagnosticSettingEnabledLogRetentionPolicy</a>

---

##### `ResetRetentionPolicy` <a name="ResetRetentionPolicy" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.resetRetentionPolicy"></a>

```csharp
private void ResetRetentionPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference">MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.property.categoryInput">CategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.property.retentionPolicyInput">RetentionPolicyInput</a></code> | <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicy">MonitorAadDiagnosticSettingEnabledLogRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLog">MonitorAadDiagnosticSettingEnabledLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RetentionPolicy`<sup>Required</sup> <a name="RetentionPolicy" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.property.retentionPolicy"></a>

```csharp
public MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference RetentionPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference">MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference</a>

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.property.categoryInput"></a>

```csharp
public string CategoryInput { get; }
```

- *Type:* string

---

##### `RetentionPolicyInput`<sup>Optional</sup> <a name="RetentionPolicyInput" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.property.retentionPolicyInput"></a>

```csharp
public MonitorAadDiagnosticSettingEnabledLogRetentionPolicy RetentionPolicyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicy">MonitorAadDiagnosticSettingEnabledLogRetentionPolicy</a>

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MonitorAadDiagnosticSettingEnabledLog InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLog">MonitorAadDiagnosticSettingEnabledLog</a>

---


### MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference <a name="MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.resetDays">ResetDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.resetDays"></a>

```csharp
private void ResetDays()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.daysInput">DaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.days">Days</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicy">MonitorAadDiagnosticSettingEnabledLogRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.daysInput"></a>

```csharp
public double DaysInput { get; }
```

- *Type:* double

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.days"></a>

```csharp
public double Days { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.internalValue"></a>

```csharp
public MonitorAadDiagnosticSettingEnabledLogRetentionPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingEnabledLogRetentionPolicy">MonitorAadDiagnosticSettingEnabledLogRetentionPolicy</a>

---


### MonitorAadDiagnosticSettingTimeoutsOutputReference <a name="MonitorAadDiagnosticSettingTimeoutsOutputReference" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MonitorAadDiagnosticSettingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts">MonitorAadDiagnosticSettingTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MonitorAadDiagnosticSettingTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts">MonitorAadDiagnosticSettingTimeouts</a>

---



