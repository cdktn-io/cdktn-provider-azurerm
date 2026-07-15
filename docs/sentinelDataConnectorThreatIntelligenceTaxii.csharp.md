# `sentinelDataConnectorThreatIntelligenceTaxii` Submodule <a name="`sentinelDataConnectorThreatIntelligenceTaxii` Submodule" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelDataConnectorThreatIntelligenceTaxii <a name="SentinelDataConnectorThreatIntelligenceTaxii" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii azurerm_sentinel_data_connector_threat_intelligence_taxii}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SentinelDataConnectorThreatIntelligenceTaxii(Construct Scope, string Id, SentinelDataConnectorThreatIntelligenceTaxiiConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig">SentinelDataConnectorThreatIntelligenceTaxiiConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig">SentinelDataConnectorThreatIntelligenceTaxiiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetLookbackDate">ResetLookbackDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetPollingFrequency">ResetPollingFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetUserName">ResetUserName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.putTimeouts"></a>

```csharp
private void PutTimeouts(SentinelDataConnectorThreatIntelligenceTaxiiTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts">SentinelDataConnectorThreatIntelligenceTaxiiTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLookbackDate` <a name="ResetLookbackDate" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetLookbackDate"></a>

```csharp
private void ResetLookbackDate()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPollingFrequency` <a name="ResetPollingFrequency" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetPollingFrequency"></a>

```csharp
private void ResetPollingFrequency()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetTenantId"></a>

```csharp
private void ResetTenantId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserName` <a name="ResetUserName" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetUserName"></a>

```csharp
private void ResetUserName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SentinelDataConnectorThreatIntelligenceTaxii resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SentinelDataConnectorThreatIntelligenceTaxii.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SentinelDataConnectorThreatIntelligenceTaxii.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SentinelDataConnectorThreatIntelligenceTaxii.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SentinelDataConnectorThreatIntelligenceTaxii.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SentinelDataConnectorThreatIntelligenceTaxii resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SentinelDataConnectorThreatIntelligenceTaxii to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SentinelDataConnectorThreatIntelligenceTaxii that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SentinelDataConnectorThreatIntelligenceTaxii to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference">SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.apiRootUrlInput">ApiRootUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.collectionIdInput">CollectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.lookbackDateInput">LookbackDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.pollingFrequencyInput">PollingFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts">SentinelDataConnectorThreatIntelligenceTaxiiTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.apiRootUrl">ApiRootUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.collectionId">CollectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.lookbackDate">LookbackDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.pollingFrequency">PollingFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.userName">UserName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.timeouts"></a>

```csharp
public SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference">SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference</a>

---

##### `ApiRootUrlInput`<sup>Optional</sup> <a name="ApiRootUrlInput" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.apiRootUrlInput"></a>

```csharp
public string ApiRootUrlInput { get; }
```

- *Type:* string

---

##### `CollectionIdInput`<sup>Optional</sup> <a name="CollectionIdInput" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.collectionIdInput"></a>

```csharp
public string CollectionIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.logAnalyticsWorkspaceIdInput"></a>

```csharp
public string LogAnalyticsWorkspaceIdInput { get; }
```

- *Type:* string

---

##### `LookbackDateInput`<sup>Optional</sup> <a name="LookbackDateInput" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.lookbackDateInput"></a>

```csharp
public string LookbackDateInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PollingFrequencyInput`<sup>Optional</sup> <a name="PollingFrequencyInput" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.pollingFrequencyInput"></a>

```csharp
public string PollingFrequencyInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.timeoutsInput"></a>

```csharp
public IResolvable|SentinelDataConnectorThreatIntelligenceTaxiiTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts">SentinelDataConnectorThreatIntelligenceTaxiiTimeouts</a>

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `ApiRootUrl`<sup>Required</sup> <a name="ApiRootUrl" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.apiRootUrl"></a>

```csharp
public string ApiRootUrl { get; }
```

- *Type:* string

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.collectionId"></a>

```csharp
public string CollectionId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; }
```

- *Type:* string

---

##### `LookbackDate`<sup>Required</sup> <a name="LookbackDate" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.lookbackDate"></a>

```csharp
public string LookbackDate { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PollingFrequency`<sup>Required</sup> <a name="PollingFrequency" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.pollingFrequency"></a>

```csharp
public string PollingFrequency { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelDataConnectorThreatIntelligenceTaxiiConfig <a name="SentinelDataConnectorThreatIntelligenceTaxiiConfig" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SentinelDataConnectorThreatIntelligenceTaxiiConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApiRootUrl,
    string CollectionId,
    string DisplayName,
    string LogAnalyticsWorkspaceId,
    string Name,
    string Id = null,
    string LookbackDate = null,
    string Password = null,
    string PollingFrequency = null,
    string TenantId = null,
    SentinelDataConnectorThreatIntelligenceTaxiiTimeouts Timeouts = null,
    string UserName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.apiRootUrl">ApiRootUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#api_root_url SentinelDataConnectorThreatIntelligenceTaxii#api_root_url}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.collectionId">CollectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#collection_id SentinelDataConnectorThreatIntelligenceTaxii#collection_id}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#display_name SentinelDataConnectorThreatIntelligenceTaxii#display_name}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#log_analytics_workspace_id SentinelDataConnectorThreatIntelligenceTaxii#log_analytics_workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#name SentinelDataConnectorThreatIntelligenceTaxii#name}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#id SentinelDataConnectorThreatIntelligenceTaxii#id}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.lookbackDate">LookbackDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#lookback_date SentinelDataConnectorThreatIntelligenceTaxii#lookback_date}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#password SentinelDataConnectorThreatIntelligenceTaxii#password}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.pollingFrequency">PollingFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#polling_frequency SentinelDataConnectorThreatIntelligenceTaxii#polling_frequency}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#tenant_id SentinelDataConnectorThreatIntelligenceTaxii#tenant_id}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts">SentinelDataConnectorThreatIntelligenceTaxiiTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.userName">UserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#user_name SentinelDataConnectorThreatIntelligenceTaxii#user_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApiRootUrl`<sup>Required</sup> <a name="ApiRootUrl" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.apiRootUrl"></a>

```csharp
public string ApiRootUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#api_root_url SentinelDataConnectorThreatIntelligenceTaxii#api_root_url}.

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.collectionId"></a>

```csharp
public string CollectionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#collection_id SentinelDataConnectorThreatIntelligenceTaxii#collection_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#display_name SentinelDataConnectorThreatIntelligenceTaxii#display_name}.

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#log_analytics_workspace_id SentinelDataConnectorThreatIntelligenceTaxii#log_analytics_workspace_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#name SentinelDataConnectorThreatIntelligenceTaxii#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#id SentinelDataConnectorThreatIntelligenceTaxii#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LookbackDate`<sup>Optional</sup> <a name="LookbackDate" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.lookbackDate"></a>

```csharp
public string LookbackDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#lookback_date SentinelDataConnectorThreatIntelligenceTaxii#lookback_date}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#password SentinelDataConnectorThreatIntelligenceTaxii#password}.

---

##### `PollingFrequency`<sup>Optional</sup> <a name="PollingFrequency" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.pollingFrequency"></a>

```csharp
public string PollingFrequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#polling_frequency SentinelDataConnectorThreatIntelligenceTaxii#polling_frequency}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#tenant_id SentinelDataConnectorThreatIntelligenceTaxii#tenant_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.timeouts"></a>

```csharp
public SentinelDataConnectorThreatIntelligenceTaxiiTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts">SentinelDataConnectorThreatIntelligenceTaxiiTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#timeouts SentinelDataConnectorThreatIntelligenceTaxii#timeouts}

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#user_name SentinelDataConnectorThreatIntelligenceTaxii#user_name}.

---

### SentinelDataConnectorThreatIntelligenceTaxiiTimeouts <a name="SentinelDataConnectorThreatIntelligenceTaxiiTimeouts" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SentinelDataConnectorThreatIntelligenceTaxiiTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#create SentinelDataConnectorThreatIntelligenceTaxii#create}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#delete SentinelDataConnectorThreatIntelligenceTaxii#delete}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#read SentinelDataConnectorThreatIntelligenceTaxii#read}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#update SentinelDataConnectorThreatIntelligenceTaxii#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#create SentinelDataConnectorThreatIntelligenceTaxii#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#delete SentinelDataConnectorThreatIntelligenceTaxii#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#read SentinelDataConnectorThreatIntelligenceTaxii#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#update SentinelDataConnectorThreatIntelligenceTaxii#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference <a name="SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts">SentinelDataConnectorThreatIntelligenceTaxiiTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SentinelDataConnectorThreatIntelligenceTaxiiTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts">SentinelDataConnectorThreatIntelligenceTaxiiTimeouts</a>

---



