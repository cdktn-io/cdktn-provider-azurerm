# `sentinelDataConnectorThreatIntelligence` Submodule <a name="`sentinelDataConnectorThreatIntelligence` Submodule" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelDataConnectorThreatIntelligence <a name="SentinelDataConnectorThreatIntelligence" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/sentinel_data_connector_threat_intelligence azurerm_sentinel_data_connector_threat_intelligence}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SentinelDataConnectorThreatIntelligence(Construct Scope, string Id, SentinelDataConnectorThreatIntelligenceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig">SentinelDataConnectorThreatIntelligenceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig">SentinelDataConnectorThreatIntelligenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.resetLookbackDate">ResetLookbackDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.putTimeouts"></a>

```csharp
private void PutTimeouts(SentinelDataConnectorThreatIntelligenceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeouts">SentinelDataConnectorThreatIntelligenceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLookbackDate` <a name="ResetLookbackDate" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.resetLookbackDate"></a>

```csharp
private void ResetLookbackDate()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.resetTenantId"></a>

```csharp
private void ResetTenantId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SentinelDataConnectorThreatIntelligence resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SentinelDataConnectorThreatIntelligence.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SentinelDataConnectorThreatIntelligence.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SentinelDataConnectorThreatIntelligence.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SentinelDataConnectorThreatIntelligence.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SentinelDataConnectorThreatIntelligence resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SentinelDataConnectorThreatIntelligence to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SentinelDataConnectorThreatIntelligence that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/sentinel_data_connector_threat_intelligence#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SentinelDataConnectorThreatIntelligence to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference">SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.lookbackDateInput">LookbackDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeouts">SentinelDataConnectorThreatIntelligenceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.lookbackDate">LookbackDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.timeouts"></a>

```csharp
public SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference">SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.logAnalyticsWorkspaceIdInput"></a>

```csharp
public string LogAnalyticsWorkspaceIdInput { get; }
```

- *Type:* string

---

##### `LookbackDateInput`<sup>Optional</sup> <a name="LookbackDateInput" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.lookbackDateInput"></a>

```csharp
public string LookbackDateInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.timeoutsInput"></a>

```csharp
public IResolvable|SentinelDataConnectorThreatIntelligenceTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeouts">SentinelDataConnectorThreatIntelligenceTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; }
```

- *Type:* string

---

##### `LookbackDate`<sup>Required</sup> <a name="LookbackDate" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.lookbackDate"></a>

```csharp
public string LookbackDate { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelDataConnectorThreatIntelligenceConfig <a name="SentinelDataConnectorThreatIntelligenceConfig" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SentinelDataConnectorThreatIntelligenceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string LogAnalyticsWorkspaceId,
    string Name,
    string Id = null,
    string LookbackDate = null,
    string TenantId = null,
    SentinelDataConnectorThreatIntelligenceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/sentinel_data_connector_threat_intelligence#log_analytics_workspace_id SentinelDataConnectorThreatIntelligence#log_analytics_workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/sentinel_data_connector_threat_intelligence#name SentinelDataConnectorThreatIntelligence#name}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/sentinel_data_connector_threat_intelligence#id SentinelDataConnectorThreatIntelligence#id}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.lookbackDate">LookbackDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/sentinel_data_connector_threat_intelligence#lookback_date SentinelDataConnectorThreatIntelligence#lookback_date}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/sentinel_data_connector_threat_intelligence#tenant_id SentinelDataConnectorThreatIntelligence#tenant_id}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeouts">SentinelDataConnectorThreatIntelligenceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/sentinel_data_connector_threat_intelligence#log_analytics_workspace_id SentinelDataConnectorThreatIntelligence#log_analytics_workspace_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/sentinel_data_connector_threat_intelligence#name SentinelDataConnectorThreatIntelligence#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/sentinel_data_connector_threat_intelligence#id SentinelDataConnectorThreatIntelligence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LookbackDate`<sup>Optional</sup> <a name="LookbackDate" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.lookbackDate"></a>

```csharp
public string LookbackDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/sentinel_data_connector_threat_intelligence#lookback_date SentinelDataConnectorThreatIntelligence#lookback_date}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/sentinel_data_connector_threat_intelligence#tenant_id SentinelDataConnectorThreatIntelligence#tenant_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.timeouts"></a>

```csharp
public SentinelDataConnectorThreatIntelligenceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeouts">SentinelDataConnectorThreatIntelligenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/sentinel_data_connector_threat_intelligence#timeouts SentinelDataConnectorThreatIntelligence#timeouts}

---

### SentinelDataConnectorThreatIntelligenceTimeouts <a name="SentinelDataConnectorThreatIntelligenceTimeouts" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SentinelDataConnectorThreatIntelligenceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/sentinel_data_connector_threat_intelligence#create SentinelDataConnectorThreatIntelligence#create}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/sentinel_data_connector_threat_intelligence#delete SentinelDataConnectorThreatIntelligence#delete}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/sentinel_data_connector_threat_intelligence#read SentinelDataConnectorThreatIntelligence#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/sentinel_data_connector_threat_intelligence#create SentinelDataConnectorThreatIntelligence#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/sentinel_data_connector_threat_intelligence#delete SentinelDataConnectorThreatIntelligence#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/sentinel_data_connector_threat_intelligence#read SentinelDataConnectorThreatIntelligence#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference <a name="SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeouts">SentinelDataConnectorThreatIntelligenceTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SentinelDataConnectorThreatIntelligenceTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeouts">SentinelDataConnectorThreatIntelligenceTimeouts</a>

---



