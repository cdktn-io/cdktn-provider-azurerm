# `logAnalyticsWorkspaceTableCustomLog` Submodule <a name="`logAnalyticsWorkspaceTableCustomLog` Submodule" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsWorkspaceTableCustomLog <a name="LogAnalyticsWorkspaceTableCustomLog" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log azurerm_log_analytics_workspace_table_custom_log}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new LogAnalyticsWorkspaceTableCustomLog(Construct Scope, string Id, LogAnalyticsWorkspaceTableCustomLogConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig">LogAnalyticsWorkspaceTableCustomLogConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig">LogAnalyticsWorkspaceTableCustomLogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.putColumn">PutColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.resetPlan">ResetPlan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.resetRetentionInDays">ResetRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.resetTotalRetentionInDays">ResetTotalRetentionInDays</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutColumn` <a name="PutColumn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.putColumn"></a>

```csharp
private void PutColumn(IResolvable|LogAnalyticsWorkspaceTableCustomLogColumn[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.putColumn.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn">LogAnalyticsWorkspaceTableCustomLogColumn</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.putTimeouts"></a>

```csharp
private void PutTimeouts(LogAnalyticsWorkspaceTableCustomLogTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts">LogAnalyticsWorkspaceTableCustomLogTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPlan` <a name="ResetPlan" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.resetPlan"></a>

```csharp
private void ResetPlan()
```

##### `ResetRetentionInDays` <a name="ResetRetentionInDays" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.resetRetentionInDays"></a>

```csharp
private void ResetRetentionInDays()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTotalRetentionInDays` <a name="ResetTotalRetentionInDays" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.resetTotalRetentionInDays"></a>

```csharp
private void ResetTotalRetentionInDays()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LogAnalyticsWorkspaceTableCustomLog resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

LogAnalyticsWorkspaceTableCustomLog.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

LogAnalyticsWorkspaceTableCustomLog.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

LogAnalyticsWorkspaceTableCustomLog.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

LogAnalyticsWorkspaceTableCustomLog.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LogAnalyticsWorkspaceTableCustomLog resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogAnalyticsWorkspaceTableCustomLog to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogAnalyticsWorkspaceTableCustomLog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LogAnalyticsWorkspaceTableCustomLog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.column">Column</a></code> | <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList">LogAnalyticsWorkspaceTableCustomLogColumnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.solutions">Solutions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.standardColumn">StandardColumn</a></code> | <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList">LogAnalyticsWorkspaceTableCustomLogStandardColumnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference">LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.columnInput">ColumnInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn">LogAnalyticsWorkspaceTableCustomLogColumn</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.planInput">PlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.retentionInDaysInput">RetentionInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts">LogAnalyticsWorkspaceTableCustomLogTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.totalRetentionInDaysInput">TotalRetentionInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.plan">Plan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.retentionInDays">RetentionInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.totalRetentionInDays">TotalRetentionInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.column"></a>

```csharp
public LogAnalyticsWorkspaceTableCustomLogColumnList Column { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList">LogAnalyticsWorkspaceTableCustomLogColumnList</a>

---

##### `Solutions`<sup>Required</sup> <a name="Solutions" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.solutions"></a>

```csharp
public string[] Solutions { get; }
```

- *Type:* string[]

---

##### `StandardColumn`<sup>Required</sup> <a name="StandardColumn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.standardColumn"></a>

```csharp
public LogAnalyticsWorkspaceTableCustomLogStandardColumnList StandardColumn { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList">LogAnalyticsWorkspaceTableCustomLogStandardColumnList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.timeouts"></a>

```csharp
public LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference">LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.columnInput"></a>

```csharp
public IResolvable|LogAnalyticsWorkspaceTableCustomLogColumn[] ColumnInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn">LogAnalyticsWorkspaceTableCustomLogColumn</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.planInput"></a>

```csharp
public string PlanInput { get; }
```

- *Type:* string

---

##### `RetentionInDaysInput`<sup>Optional</sup> <a name="RetentionInDaysInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.retentionInDaysInput"></a>

```csharp
public double RetentionInDaysInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.timeoutsInput"></a>

```csharp
public IResolvable|LogAnalyticsWorkspaceTableCustomLogTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts">LogAnalyticsWorkspaceTableCustomLogTimeouts</a>

---

##### `TotalRetentionInDaysInput`<sup>Optional</sup> <a name="TotalRetentionInDaysInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.totalRetentionInDaysInput"></a>

```csharp
public double TotalRetentionInDaysInput { get; }
```

- *Type:* double

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.plan"></a>

```csharp
public string Plan { get; }
```

- *Type:* string

---

##### `RetentionInDays`<sup>Required</sup> <a name="RetentionInDays" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.retentionInDays"></a>

```csharp
public double RetentionInDays { get; }
```

- *Type:* double

---

##### `TotalRetentionInDays`<sup>Required</sup> <a name="TotalRetentionInDays" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.totalRetentionInDays"></a>

```csharp
public double TotalRetentionInDays { get; }
```

- *Type:* double

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLog.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsWorkspaceTableCustomLogColumn <a name="LogAnalyticsWorkspaceTableCustomLogColumn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new LogAnalyticsWorkspaceTableCustomLogColumn {
    string Name,
    string Type,
    string Description = null,
    string DisplayName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#name LogAnalyticsWorkspaceTableCustomLog#name}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#type LogAnalyticsWorkspaceTableCustomLog#type}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#description LogAnalyticsWorkspaceTableCustomLog#description}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#display_name LogAnalyticsWorkspaceTableCustomLog#display_name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#name LogAnalyticsWorkspaceTableCustomLog#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#type LogAnalyticsWorkspaceTableCustomLog#type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#description LogAnalyticsWorkspaceTableCustomLog#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#display_name LogAnalyticsWorkspaceTableCustomLog#display_name}.

---

### LogAnalyticsWorkspaceTableCustomLogConfig <a name="LogAnalyticsWorkspaceTableCustomLogConfig" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new LogAnalyticsWorkspaceTableCustomLogConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|LogAnalyticsWorkspaceTableCustomLogColumn[] Column,
    string Name,
    string WorkspaceId,
    string Description = null,
    string DisplayName = null,
    string Id = null,
    string Plan = null,
    double RetentionInDays = null,
    LogAnalyticsWorkspaceTableCustomLogTimeouts Timeouts = null,
    double TotalRetentionInDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.column">Column</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn">LogAnalyticsWorkspaceTableCustomLogColumn</a>[]</code> | column block. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#name LogAnalyticsWorkspaceTableCustomLog#name}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#workspace_id LogAnalyticsWorkspaceTableCustomLog#workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#description LogAnalyticsWorkspaceTableCustomLog#description}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#display_name LogAnalyticsWorkspaceTableCustomLog#display_name}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#id LogAnalyticsWorkspaceTableCustomLog#id}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.plan">Plan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#plan LogAnalyticsWorkspaceTableCustomLog#plan}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.retentionInDays">RetentionInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#retention_in_days LogAnalyticsWorkspaceTableCustomLog#retention_in_days}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts">LogAnalyticsWorkspaceTableCustomLogTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.totalRetentionInDays">TotalRetentionInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#total_retention_in_days LogAnalyticsWorkspaceTableCustomLog#total_retention_in_days}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.column"></a>

```csharp
public IResolvable|LogAnalyticsWorkspaceTableCustomLogColumn[] Column { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn">LogAnalyticsWorkspaceTableCustomLogColumn</a>[]

column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#column LogAnalyticsWorkspaceTableCustomLog#column}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#name LogAnalyticsWorkspaceTableCustomLog#name}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#workspace_id LogAnalyticsWorkspaceTableCustomLog#workspace_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#description LogAnalyticsWorkspaceTableCustomLog#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#display_name LogAnalyticsWorkspaceTableCustomLog#display_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#id LogAnalyticsWorkspaceTableCustomLog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Plan`<sup>Optional</sup> <a name="Plan" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.plan"></a>

```csharp
public string Plan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#plan LogAnalyticsWorkspaceTableCustomLog#plan}.

---

##### `RetentionInDays`<sup>Optional</sup> <a name="RetentionInDays" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.retentionInDays"></a>

```csharp
public double RetentionInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#retention_in_days LogAnalyticsWorkspaceTableCustomLog#retention_in_days}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.timeouts"></a>

```csharp
public LogAnalyticsWorkspaceTableCustomLogTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts">LogAnalyticsWorkspaceTableCustomLogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#timeouts LogAnalyticsWorkspaceTableCustomLog#timeouts}

---

##### `TotalRetentionInDays`<sup>Optional</sup> <a name="TotalRetentionInDays" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogConfig.property.totalRetentionInDays"></a>

```csharp
public double TotalRetentionInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#total_retention_in_days LogAnalyticsWorkspaceTableCustomLog#total_retention_in_days}.

---

### LogAnalyticsWorkspaceTableCustomLogStandardColumn <a name="LogAnalyticsWorkspaceTableCustomLogStandardColumn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new LogAnalyticsWorkspaceTableCustomLogStandardColumn {

};
```


### LogAnalyticsWorkspaceTableCustomLogTimeouts <a name="LogAnalyticsWorkspaceTableCustomLogTimeouts" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new LogAnalyticsWorkspaceTableCustomLogTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#create LogAnalyticsWorkspaceTableCustomLog#create}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#delete LogAnalyticsWorkspaceTableCustomLog#delete}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#read LogAnalyticsWorkspaceTableCustomLog#read}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#update LogAnalyticsWorkspaceTableCustomLog#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#create LogAnalyticsWorkspaceTableCustomLog#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#delete LogAnalyticsWorkspaceTableCustomLog#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#read LogAnalyticsWorkspaceTableCustomLog#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/log_analytics_workspace_table_custom_log#update LogAnalyticsWorkspaceTableCustomLog#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsWorkspaceTableCustomLogColumnList <a name="LogAnalyticsWorkspaceTableCustomLogColumnList" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new LogAnalyticsWorkspaceTableCustomLogColumnList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.get"></a>

```csharp
private LogAnalyticsWorkspaceTableCustomLogColumnOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn">LogAnalyticsWorkspaceTableCustomLogColumn</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnList.property.internalValue"></a>

```csharp
public IResolvable|LogAnalyticsWorkspaceTableCustomLogColumn[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn">LogAnalyticsWorkspaceTableCustomLogColumn</a>[]

---


### LogAnalyticsWorkspaceTableCustomLogColumnOutputReference <a name="LogAnalyticsWorkspaceTableCustomLogColumnOutputReference" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new LogAnalyticsWorkspaceTableCustomLogColumnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn">LogAnalyticsWorkspaceTableCustomLogColumn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumnOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LogAnalyticsWorkspaceTableCustomLogColumn InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogColumn">LogAnalyticsWorkspaceTableCustomLogColumn</a>

---


### LogAnalyticsWorkspaceTableCustomLogStandardColumnList <a name="LogAnalyticsWorkspaceTableCustomLogStandardColumnList" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new LogAnalyticsWorkspaceTableCustomLogStandardColumnList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.get"></a>

```csharp
private LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference <a name="LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumn">LogAnalyticsWorkspaceTableCustomLogStandardColumn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumnOutputReference.property.internalValue"></a>

```csharp
public LogAnalyticsWorkspaceTableCustomLogStandardColumn InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogStandardColumn">LogAnalyticsWorkspaceTableCustomLogStandardColumn</a>

---


### LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference <a name="LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts">LogAnalyticsWorkspaceTableCustomLogTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LogAnalyticsWorkspaceTableCustomLogTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableCustomLog.LogAnalyticsWorkspaceTableCustomLogTimeouts">LogAnalyticsWorkspaceTableCustomLogTimeouts</a>

---



