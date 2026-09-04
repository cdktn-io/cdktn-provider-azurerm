# `sentinelAlertRuleThreatIntelligence` Submodule <a name="`sentinelAlertRuleThreatIntelligence` Submodule" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelAlertRuleThreatIntelligence <a name="SentinelAlertRuleThreatIntelligence" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/sentinel_alert_rule_threat_intelligence azurerm_sentinel_alert_rule_threat_intelligence}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SentinelAlertRuleThreatIntelligence(Construct Scope, string Id, SentinelAlertRuleThreatIntelligenceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceConfig">SentinelAlertRuleThreatIntelligenceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceConfig">SentinelAlertRuleThreatIntelligenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.putTimeouts"></a>

```csharp
private void PutTimeouts(SentinelAlertRuleThreatIntelligenceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeouts">SentinelAlertRuleThreatIntelligenceTimeouts</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SentinelAlertRuleThreatIntelligence resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SentinelAlertRuleThreatIntelligence.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SentinelAlertRuleThreatIntelligence.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SentinelAlertRuleThreatIntelligence.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SentinelAlertRuleThreatIntelligence.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SentinelAlertRuleThreatIntelligence resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SentinelAlertRuleThreatIntelligence to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SentinelAlertRuleThreatIntelligence that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/sentinel_alert_rule_threat_intelligence#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SentinelAlertRuleThreatIntelligence to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference">SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.alertRuleTemplateGuidInput">AlertRuleTemplateGuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeouts">SentinelAlertRuleThreatIntelligenceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.alertRuleTemplateGuid">AlertRuleTemplateGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.timeouts"></a>

```csharp
public SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference">SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference</a>

---

##### `AlertRuleTemplateGuidInput`<sup>Optional</sup> <a name="AlertRuleTemplateGuidInput" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.alertRuleTemplateGuidInput"></a>

```csharp
public string AlertRuleTemplateGuidInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.logAnalyticsWorkspaceIdInput"></a>

```csharp
public string LogAnalyticsWorkspaceIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.timeoutsInput"></a>

```csharp
public IResolvable|SentinelAlertRuleThreatIntelligenceTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeouts">SentinelAlertRuleThreatIntelligenceTimeouts</a>

---

##### `AlertRuleTemplateGuid`<sup>Required</sup> <a name="AlertRuleTemplateGuid" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.alertRuleTemplateGuid"></a>

```csharp
public string AlertRuleTemplateGuid { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligence.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelAlertRuleThreatIntelligenceConfig <a name="SentinelAlertRuleThreatIntelligenceConfig" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SentinelAlertRuleThreatIntelligenceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AlertRuleTemplateGuid,
    string LogAnalyticsWorkspaceId,
    string Name,
    bool|IResolvable Enabled = null,
    string Id = null,
    SentinelAlertRuleThreatIntelligenceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceConfig.property.alertRuleTemplateGuid">AlertRuleTemplateGuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/sentinel_alert_rule_threat_intelligence#alert_rule_template_guid SentinelAlertRuleThreatIntelligence#alert_rule_template_guid}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceConfig.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/sentinel_alert_rule_threat_intelligence#log_analytics_workspace_id SentinelAlertRuleThreatIntelligence#log_analytics_workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/sentinel_alert_rule_threat_intelligence#name SentinelAlertRuleThreatIntelligence#name}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/sentinel_alert_rule_threat_intelligence#enabled SentinelAlertRuleThreatIntelligence#enabled}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/sentinel_alert_rule_threat_intelligence#id SentinelAlertRuleThreatIntelligence#id}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeouts">SentinelAlertRuleThreatIntelligenceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AlertRuleTemplateGuid`<sup>Required</sup> <a name="AlertRuleTemplateGuid" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceConfig.property.alertRuleTemplateGuid"></a>

```csharp
public string AlertRuleTemplateGuid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/sentinel_alert_rule_threat_intelligence#alert_rule_template_guid SentinelAlertRuleThreatIntelligence#alert_rule_template_guid}.

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceConfig.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/sentinel_alert_rule_threat_intelligence#log_analytics_workspace_id SentinelAlertRuleThreatIntelligence#log_analytics_workspace_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/sentinel_alert_rule_threat_intelligence#name SentinelAlertRuleThreatIntelligence#name}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/sentinel_alert_rule_threat_intelligence#enabled SentinelAlertRuleThreatIntelligence#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/sentinel_alert_rule_threat_intelligence#id SentinelAlertRuleThreatIntelligence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceConfig.property.timeouts"></a>

```csharp
public SentinelAlertRuleThreatIntelligenceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeouts">SentinelAlertRuleThreatIntelligenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/sentinel_alert_rule_threat_intelligence#timeouts SentinelAlertRuleThreatIntelligence#timeouts}

---

### SentinelAlertRuleThreatIntelligenceTimeouts <a name="SentinelAlertRuleThreatIntelligenceTimeouts" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SentinelAlertRuleThreatIntelligenceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/sentinel_alert_rule_threat_intelligence#create SentinelAlertRuleThreatIntelligence#create}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/sentinel_alert_rule_threat_intelligence#delete SentinelAlertRuleThreatIntelligence#delete}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/sentinel_alert_rule_threat_intelligence#read SentinelAlertRuleThreatIntelligence#read}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/sentinel_alert_rule_threat_intelligence#update SentinelAlertRuleThreatIntelligence#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/sentinel_alert_rule_threat_intelligence#create SentinelAlertRuleThreatIntelligence#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/sentinel_alert_rule_threat_intelligence#delete SentinelAlertRuleThreatIntelligence#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/sentinel_alert_rule_threat_intelligence#read SentinelAlertRuleThreatIntelligence#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/sentinel_alert_rule_threat_intelligence#update SentinelAlertRuleThreatIntelligence#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference <a name="SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeouts">SentinelAlertRuleThreatIntelligenceTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SentinelAlertRuleThreatIntelligenceTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sentinelAlertRuleThreatIntelligence.SentinelAlertRuleThreatIntelligenceTimeouts">SentinelAlertRuleThreatIntelligenceTimeouts</a>

---



