# `paloAltoLocalRulestackRule` Submodule <a name="`paloAltoLocalRulestackRule` Submodule" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PaloAltoLocalRulestackRule <a name="PaloAltoLocalRulestackRule" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule azurerm_palo_alto_local_rulestack_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new PaloAltoLocalRulestackRule(Construct Scope, string Id, PaloAltoLocalRulestackRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig">PaloAltoLocalRulestackRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig">PaloAltoLocalRulestackRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putCategory">PutCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetAuditComment">ResetAuditComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetCategory">ResetCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetDecryptionRuleType">ResetDecryptionRuleType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetInspectionCertificateId">ResetInspectionCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetLoggingEnabled">ResetLoggingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetNegateDestination">ResetNegateDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetNegateSource">ResetNegateSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetProtocolPorts">ResetProtocolPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCategory` <a name="PutCategory" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putCategory"></a>

```csharp
private void PutCategory(PaloAltoLocalRulestackRuleCategory Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putCategory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategory">PaloAltoLocalRulestackRuleCategory</a>

---

##### `PutDestination` <a name="PutDestination" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putDestination"></a>

```csharp
private void PutDestination(PaloAltoLocalRulestackRuleDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination">PaloAltoLocalRulestackRuleDestination</a>

---

##### `PutSource` <a name="PutSource" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putSource"></a>

```csharp
private void PutSource(PaloAltoLocalRulestackRuleSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource">PaloAltoLocalRulestackRuleSource</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putTimeouts"></a>

```csharp
private void PutTimeouts(PaloAltoLocalRulestackRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts">PaloAltoLocalRulestackRuleTimeouts</a>

---

##### `ResetAuditComment` <a name="ResetAuditComment" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetAuditComment"></a>

```csharp
private void ResetAuditComment()
```

##### `ResetCategory` <a name="ResetCategory" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetCategory"></a>

```csharp
private void ResetCategory()
```

##### `ResetDecryptionRuleType` <a name="ResetDecryptionRuleType" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetDecryptionRuleType"></a>

```csharp
private void ResetDecryptionRuleType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInspectionCertificateId` <a name="ResetInspectionCertificateId" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetInspectionCertificateId"></a>

```csharp
private void ResetInspectionCertificateId()
```

##### `ResetLoggingEnabled` <a name="ResetLoggingEnabled" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetLoggingEnabled"></a>

```csharp
private void ResetLoggingEnabled()
```

##### `ResetNegateDestination` <a name="ResetNegateDestination" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetNegateDestination"></a>

```csharp
private void ResetNegateDestination()
```

##### `ResetNegateSource` <a name="ResetNegateSource" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetNegateSource"></a>

```csharp
private void ResetNegateSource()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetProtocolPorts` <a name="ResetProtocolPorts" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetProtocolPorts"></a>

```csharp
private void ResetProtocolPorts()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PaloAltoLocalRulestackRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

PaloAltoLocalRulestackRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

PaloAltoLocalRulestackRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

PaloAltoLocalRulestackRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

PaloAltoLocalRulestackRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PaloAltoLocalRulestackRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PaloAltoLocalRulestackRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PaloAltoLocalRulestackRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PaloAltoLocalRulestackRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.category">Category</a></code> | <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference">PaloAltoLocalRulestackRuleCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference">PaloAltoLocalRulestackRuleDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.source">Source</a></code> | <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference">PaloAltoLocalRulestackRuleSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference">PaloAltoLocalRulestackRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.applicationsInput">ApplicationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.auditCommentInput">AuditCommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.categoryInput">CategoryInput</a></code> | <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategory">PaloAltoLocalRulestackRuleCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.decryptionRuleTypeInput">DecryptionRuleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.destinationInput">DestinationInput</a></code> | <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination">PaloAltoLocalRulestackRuleDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.inspectionCertificateIdInput">InspectionCertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.loggingEnabledInput">LoggingEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.negateDestinationInput">NegateDestinationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.negateSourceInput">NegateSourceInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.protocolPortsInput">ProtocolPortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.rulestackIdInput">RulestackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource">PaloAltoLocalRulestackRuleSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts">PaloAltoLocalRulestackRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.applications">Applications</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.auditComment">AuditComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.decryptionRuleType">DecryptionRuleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.inspectionCertificateId">InspectionCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.loggingEnabled">LoggingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.negateDestination">NegateDestination</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.negateSource">NegateSource</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.protocolPorts">ProtocolPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.rulestackId">RulestackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.category"></a>

```csharp
public PaloAltoLocalRulestackRuleCategoryOutputReference Category { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference">PaloAltoLocalRulestackRuleCategoryOutputReference</a>

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.destination"></a>

```csharp
public PaloAltoLocalRulestackRuleDestinationOutputReference Destination { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference">PaloAltoLocalRulestackRuleDestinationOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.source"></a>

```csharp
public PaloAltoLocalRulestackRuleSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference">PaloAltoLocalRulestackRuleSourceOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.timeouts"></a>

```csharp
public PaloAltoLocalRulestackRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference">PaloAltoLocalRulestackRuleTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `ApplicationsInput`<sup>Optional</sup> <a name="ApplicationsInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.applicationsInput"></a>

```csharp
public string[] ApplicationsInput { get; }
```

- *Type:* string[]

---

##### `AuditCommentInput`<sup>Optional</sup> <a name="AuditCommentInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.auditCommentInput"></a>

```csharp
public string AuditCommentInput { get; }
```

- *Type:* string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.categoryInput"></a>

```csharp
public PaloAltoLocalRulestackRuleCategory CategoryInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategory">PaloAltoLocalRulestackRuleCategory</a>

---

##### `DecryptionRuleTypeInput`<sup>Optional</sup> <a name="DecryptionRuleTypeInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.decryptionRuleTypeInput"></a>

```csharp
public string DecryptionRuleTypeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.destinationInput"></a>

```csharp
public PaloAltoLocalRulestackRuleDestination DestinationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination">PaloAltoLocalRulestackRuleDestination</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InspectionCertificateIdInput`<sup>Optional</sup> <a name="InspectionCertificateIdInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.inspectionCertificateIdInput"></a>

```csharp
public string InspectionCertificateIdInput { get; }
```

- *Type:* string

---

##### `LoggingEnabledInput`<sup>Optional</sup> <a name="LoggingEnabledInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.loggingEnabledInput"></a>

```csharp
public bool|IResolvable LoggingEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NegateDestinationInput`<sup>Optional</sup> <a name="NegateDestinationInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.negateDestinationInput"></a>

```csharp
public bool|IResolvable NegateDestinationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NegateSourceInput`<sup>Optional</sup> <a name="NegateSourceInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.negateSourceInput"></a>

```csharp
public bool|IResolvable NegateSourceInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `ProtocolPortsInput`<sup>Optional</sup> <a name="ProtocolPortsInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.protocolPortsInput"></a>

```csharp
public string[] ProtocolPortsInput { get; }
```

- *Type:* string[]

---

##### `RulestackIdInput`<sup>Optional</sup> <a name="RulestackIdInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.rulestackIdInput"></a>

```csharp
public string RulestackIdInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.sourceInput"></a>

```csharp
public PaloAltoLocalRulestackRuleSource SourceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource">PaloAltoLocalRulestackRuleSource</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.timeoutsInput"></a>

```csharp
public IResolvable|PaloAltoLocalRulestackRuleTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts">PaloAltoLocalRulestackRuleTimeouts</a>

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Applications`<sup>Required</sup> <a name="Applications" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.applications"></a>

```csharp
public string[] Applications { get; }
```

- *Type:* string[]

---

##### `AuditComment`<sup>Required</sup> <a name="AuditComment" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.auditComment"></a>

```csharp
public string AuditComment { get; }
```

- *Type:* string

---

##### `DecryptionRuleType`<sup>Required</sup> <a name="DecryptionRuleType" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.decryptionRuleType"></a>

```csharp
public string DecryptionRuleType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InspectionCertificateId`<sup>Required</sup> <a name="InspectionCertificateId" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.inspectionCertificateId"></a>

```csharp
public string InspectionCertificateId { get; }
```

- *Type:* string

---

##### `LoggingEnabled`<sup>Required</sup> <a name="LoggingEnabled" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.loggingEnabled"></a>

```csharp
public bool|IResolvable LoggingEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NegateDestination`<sup>Required</sup> <a name="NegateDestination" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.negateDestination"></a>

```csharp
public bool|IResolvable NegateDestination { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NegateSource`<sup>Required</sup> <a name="NegateSource" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.negateSource"></a>

```csharp
public bool|IResolvable NegateSource { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `ProtocolPorts`<sup>Required</sup> <a name="ProtocolPorts" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.protocolPorts"></a>

```csharp
public string[] ProtocolPorts { get; }
```

- *Type:* string[]

---

##### `RulestackId`<sup>Required</sup> <a name="RulestackId" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.rulestackId"></a>

```csharp
public string RulestackId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PaloAltoLocalRulestackRuleCategory <a name="PaloAltoLocalRulestackRuleCategory" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategory.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new PaloAltoLocalRulestackRuleCategory {
    string[] CustomUrls,
    string[] Feeds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategory.property.customUrls">CustomUrls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#custom_urls PaloAltoLocalRulestackRule#custom_urls}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategory.property.feeds">Feeds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#feeds PaloAltoLocalRulestackRule#feeds}. |

---

##### `CustomUrls`<sup>Required</sup> <a name="CustomUrls" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategory.property.customUrls"></a>

```csharp
public string[] CustomUrls { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#custom_urls PaloAltoLocalRulestackRule#custom_urls}.

---

##### `Feeds`<sup>Optional</sup> <a name="Feeds" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategory.property.feeds"></a>

```csharp
public string[] Feeds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#feeds PaloAltoLocalRulestackRule#feeds}.

---

### PaloAltoLocalRulestackRuleConfig <a name="PaloAltoLocalRulestackRuleConfig" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new PaloAltoLocalRulestackRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Action,
    string[] Applications,
    PaloAltoLocalRulestackRuleDestination Destination,
    string Name,
    double Priority,
    string RulestackId,
    PaloAltoLocalRulestackRuleSource Source,
    string AuditComment = null,
    PaloAltoLocalRulestackRuleCategory Category = null,
    string DecryptionRuleType = null,
    string Description = null,
    bool|IResolvable Enabled = null,
    string Id = null,
    string InspectionCertificateId = null,
    bool|IResolvable LoggingEnabled = null,
    bool|IResolvable NegateDestination = null,
    bool|IResolvable NegateSource = null,
    string Protocol = null,
    string[] ProtocolPorts = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    PaloAltoLocalRulestackRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#action PaloAltoLocalRulestackRule#action}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.applications">Applications</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#applications PaloAltoLocalRulestackRule#applications}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination">PaloAltoLocalRulestackRuleDestination</a></code> | destination block. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#name PaloAltoLocalRulestackRule#name}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#priority PaloAltoLocalRulestackRule#priority}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.rulestackId">RulestackId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#rulestack_id PaloAltoLocalRulestackRule#rulestack_id}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.source">Source</a></code> | <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource">PaloAltoLocalRulestackRuleSource</a></code> | source block. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.auditComment">AuditComment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#audit_comment PaloAltoLocalRulestackRule#audit_comment}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.category">Category</a></code> | <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategory">PaloAltoLocalRulestackRuleCategory</a></code> | category block. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.decryptionRuleType">DecryptionRuleType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#decryption_rule_type PaloAltoLocalRulestackRule#decryption_rule_type}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#description PaloAltoLocalRulestackRule#description}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#enabled PaloAltoLocalRulestackRule#enabled}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#id PaloAltoLocalRulestackRule#id}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.inspectionCertificateId">InspectionCertificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#inspection_certificate_id PaloAltoLocalRulestackRule#inspection_certificate_id}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.loggingEnabled">LoggingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#logging_enabled PaloAltoLocalRulestackRule#logging_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.negateDestination">NegateDestination</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#negate_destination PaloAltoLocalRulestackRule#negate_destination}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.negateSource">NegateSource</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#negate_source PaloAltoLocalRulestackRule#negate_source}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#protocol PaloAltoLocalRulestackRule#protocol}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.protocolPorts">ProtocolPorts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#protocol_ports PaloAltoLocalRulestackRule#protocol_ports}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#tags PaloAltoLocalRulestackRule#tags}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts">PaloAltoLocalRulestackRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#action PaloAltoLocalRulestackRule#action}.

---

##### `Applications`<sup>Required</sup> <a name="Applications" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.applications"></a>

```csharp
public string[] Applications { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#applications PaloAltoLocalRulestackRule#applications}.

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.destination"></a>

```csharp
public PaloAltoLocalRulestackRuleDestination Destination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination">PaloAltoLocalRulestackRuleDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#destination PaloAltoLocalRulestackRule#destination}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#name PaloAltoLocalRulestackRule#name}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#priority PaloAltoLocalRulestackRule#priority}.

---

##### `RulestackId`<sup>Required</sup> <a name="RulestackId" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.rulestackId"></a>

```csharp
public string RulestackId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#rulestack_id PaloAltoLocalRulestackRule#rulestack_id}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.source"></a>

```csharp
public PaloAltoLocalRulestackRuleSource Source { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource">PaloAltoLocalRulestackRuleSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#source PaloAltoLocalRulestackRule#source}

---

##### `AuditComment`<sup>Optional</sup> <a name="AuditComment" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.auditComment"></a>

```csharp
public string AuditComment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#audit_comment PaloAltoLocalRulestackRule#audit_comment}.

---

##### `Category`<sup>Optional</sup> <a name="Category" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.category"></a>

```csharp
public PaloAltoLocalRulestackRuleCategory Category { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategory">PaloAltoLocalRulestackRuleCategory</a>

category block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#category PaloAltoLocalRulestackRule#category}

---

##### `DecryptionRuleType`<sup>Optional</sup> <a name="DecryptionRuleType" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.decryptionRuleType"></a>

```csharp
public string DecryptionRuleType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#decryption_rule_type PaloAltoLocalRulestackRule#decryption_rule_type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#description PaloAltoLocalRulestackRule#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#enabled PaloAltoLocalRulestackRule#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#id PaloAltoLocalRulestackRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InspectionCertificateId`<sup>Optional</sup> <a name="InspectionCertificateId" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.inspectionCertificateId"></a>

```csharp
public string InspectionCertificateId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#inspection_certificate_id PaloAltoLocalRulestackRule#inspection_certificate_id}.

---

##### `LoggingEnabled`<sup>Optional</sup> <a name="LoggingEnabled" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.loggingEnabled"></a>

```csharp
public bool|IResolvable LoggingEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#logging_enabled PaloAltoLocalRulestackRule#logging_enabled}.

---

##### `NegateDestination`<sup>Optional</sup> <a name="NegateDestination" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.negateDestination"></a>

```csharp
public bool|IResolvable NegateDestination { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#negate_destination PaloAltoLocalRulestackRule#negate_destination}.

---

##### `NegateSource`<sup>Optional</sup> <a name="NegateSource" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.negateSource"></a>

```csharp
public bool|IResolvable NegateSource { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#negate_source PaloAltoLocalRulestackRule#negate_source}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#protocol PaloAltoLocalRulestackRule#protocol}.

---

##### `ProtocolPorts`<sup>Optional</sup> <a name="ProtocolPorts" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.protocolPorts"></a>

```csharp
public string[] ProtocolPorts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#protocol_ports PaloAltoLocalRulestackRule#protocol_ports}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#tags PaloAltoLocalRulestackRule#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleConfig.property.timeouts"></a>

```csharp
public PaloAltoLocalRulestackRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts">PaloAltoLocalRulestackRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#timeouts PaloAltoLocalRulestackRule#timeouts}

---

### PaloAltoLocalRulestackRuleDestination <a name="PaloAltoLocalRulestackRuleDestination" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new PaloAltoLocalRulestackRuleDestination {
    string[] Cidrs = null,
    string[] Countries = null,
    string[] Feeds = null,
    string[] LocalRulestackFqdnListIds = null,
    string[] LocalRulestackPrefixListIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination.property.cidrs">Cidrs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#cidrs PaloAltoLocalRulestackRule#cidrs}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination.property.countries">Countries</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#countries PaloAltoLocalRulestackRule#countries}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination.property.feeds">Feeds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#feeds PaloAltoLocalRulestackRule#feeds}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination.property.localRulestackFqdnListIds">LocalRulestackFqdnListIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#local_rulestack_fqdn_list_ids PaloAltoLocalRulestackRule#local_rulestack_fqdn_list_ids}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination.property.localRulestackPrefixListIds">LocalRulestackPrefixListIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#local_rulestack_prefix_list_ids PaloAltoLocalRulestackRule#local_rulestack_prefix_list_ids}. |

---

##### `Cidrs`<sup>Optional</sup> <a name="Cidrs" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination.property.cidrs"></a>

```csharp
public string[] Cidrs { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#cidrs PaloAltoLocalRulestackRule#cidrs}.

---

##### `Countries`<sup>Optional</sup> <a name="Countries" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination.property.countries"></a>

```csharp
public string[] Countries { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#countries PaloAltoLocalRulestackRule#countries}.

---

##### `Feeds`<sup>Optional</sup> <a name="Feeds" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination.property.feeds"></a>

```csharp
public string[] Feeds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#feeds PaloAltoLocalRulestackRule#feeds}.

---

##### `LocalRulestackFqdnListIds`<sup>Optional</sup> <a name="LocalRulestackFqdnListIds" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination.property.localRulestackFqdnListIds"></a>

```csharp
public string[] LocalRulestackFqdnListIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#local_rulestack_fqdn_list_ids PaloAltoLocalRulestackRule#local_rulestack_fqdn_list_ids}.

---

##### `LocalRulestackPrefixListIds`<sup>Optional</sup> <a name="LocalRulestackPrefixListIds" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination.property.localRulestackPrefixListIds"></a>

```csharp
public string[] LocalRulestackPrefixListIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#local_rulestack_prefix_list_ids PaloAltoLocalRulestackRule#local_rulestack_prefix_list_ids}.

---

### PaloAltoLocalRulestackRuleSource <a name="PaloAltoLocalRulestackRuleSource" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new PaloAltoLocalRulestackRuleSource {
    string[] Cidrs = null,
    string[] Countries = null,
    string[] Feeds = null,
    string[] LocalRulestackPrefixListIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource.property.cidrs">Cidrs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#cidrs PaloAltoLocalRulestackRule#cidrs}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource.property.countries">Countries</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#countries PaloAltoLocalRulestackRule#countries}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource.property.feeds">Feeds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#feeds PaloAltoLocalRulestackRule#feeds}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource.property.localRulestackPrefixListIds">LocalRulestackPrefixListIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#local_rulestack_prefix_list_ids PaloAltoLocalRulestackRule#local_rulestack_prefix_list_ids}. |

---

##### `Cidrs`<sup>Optional</sup> <a name="Cidrs" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource.property.cidrs"></a>

```csharp
public string[] Cidrs { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#cidrs PaloAltoLocalRulestackRule#cidrs}.

---

##### `Countries`<sup>Optional</sup> <a name="Countries" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource.property.countries"></a>

```csharp
public string[] Countries { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#countries PaloAltoLocalRulestackRule#countries}.

---

##### `Feeds`<sup>Optional</sup> <a name="Feeds" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource.property.feeds"></a>

```csharp
public string[] Feeds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#feeds PaloAltoLocalRulestackRule#feeds}.

---

##### `LocalRulestackPrefixListIds`<sup>Optional</sup> <a name="LocalRulestackPrefixListIds" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource.property.localRulestackPrefixListIds"></a>

```csharp
public string[] LocalRulestackPrefixListIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#local_rulestack_prefix_list_ids PaloAltoLocalRulestackRule#local_rulestack_prefix_list_ids}.

---

### PaloAltoLocalRulestackRuleTimeouts <a name="PaloAltoLocalRulestackRuleTimeouts" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new PaloAltoLocalRulestackRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#create PaloAltoLocalRulestackRule#create}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#delete PaloAltoLocalRulestackRule#delete}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#read PaloAltoLocalRulestackRule#read}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#update PaloAltoLocalRulestackRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#create PaloAltoLocalRulestackRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#delete PaloAltoLocalRulestackRule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#read PaloAltoLocalRulestackRule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/palo_alto_local_rulestack_rule#update PaloAltoLocalRulestackRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PaloAltoLocalRulestackRuleCategoryOutputReference <a name="PaloAltoLocalRulestackRuleCategoryOutputReference" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new PaloAltoLocalRulestackRuleCategoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.resetFeeds">ResetFeeds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFeeds` <a name="ResetFeeds" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.resetFeeds"></a>

```csharp
private void ResetFeeds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.property.customUrlsInput">CustomUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.property.feedsInput">FeedsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.property.customUrls">CustomUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.property.feeds">Feeds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategory">PaloAltoLocalRulestackRuleCategory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomUrlsInput`<sup>Optional</sup> <a name="CustomUrlsInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.property.customUrlsInput"></a>

```csharp
public string[] CustomUrlsInput { get; }
```

- *Type:* string[]

---

##### `FeedsInput`<sup>Optional</sup> <a name="FeedsInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.property.feedsInput"></a>

```csharp
public string[] FeedsInput { get; }
```

- *Type:* string[]

---

##### `CustomUrls`<sup>Required</sup> <a name="CustomUrls" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.property.customUrls"></a>

```csharp
public string[] CustomUrls { get; }
```

- *Type:* string[]

---

##### `Feeds`<sup>Required</sup> <a name="Feeds" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.property.feeds"></a>

```csharp
public string[] Feeds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategoryOutputReference.property.internalValue"></a>

```csharp
public PaloAltoLocalRulestackRuleCategory InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleCategory">PaloAltoLocalRulestackRuleCategory</a>

---


### PaloAltoLocalRulestackRuleDestinationOutputReference <a name="PaloAltoLocalRulestackRuleDestinationOutputReference" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new PaloAltoLocalRulestackRuleDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.resetCidrs">ResetCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.resetCountries">ResetCountries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.resetFeeds">ResetFeeds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.resetLocalRulestackFqdnListIds">ResetLocalRulestackFqdnListIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.resetLocalRulestackPrefixListIds">ResetLocalRulestackPrefixListIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrs` <a name="ResetCidrs" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.resetCidrs"></a>

```csharp
private void ResetCidrs()
```

##### `ResetCountries` <a name="ResetCountries" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.resetCountries"></a>

```csharp
private void ResetCountries()
```

##### `ResetFeeds` <a name="ResetFeeds" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.resetFeeds"></a>

```csharp
private void ResetFeeds()
```

##### `ResetLocalRulestackFqdnListIds` <a name="ResetLocalRulestackFqdnListIds" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.resetLocalRulestackFqdnListIds"></a>

```csharp
private void ResetLocalRulestackFqdnListIds()
```

##### `ResetLocalRulestackPrefixListIds` <a name="ResetLocalRulestackPrefixListIds" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.resetLocalRulestackPrefixListIds"></a>

```csharp
private void ResetLocalRulestackPrefixListIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.cidrsInput">CidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.countriesInput">CountriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.feedsInput">FeedsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.localRulestackFqdnListIdsInput">LocalRulestackFqdnListIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.localRulestackPrefixListIdsInput">LocalRulestackPrefixListIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.cidrs">Cidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.countries">Countries</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.feeds">Feeds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.localRulestackFqdnListIds">LocalRulestackFqdnListIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.localRulestackPrefixListIds">LocalRulestackPrefixListIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination">PaloAltoLocalRulestackRuleDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrsInput`<sup>Optional</sup> <a name="CidrsInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.cidrsInput"></a>

```csharp
public string[] CidrsInput { get; }
```

- *Type:* string[]

---

##### `CountriesInput`<sup>Optional</sup> <a name="CountriesInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.countriesInput"></a>

```csharp
public string[] CountriesInput { get; }
```

- *Type:* string[]

---

##### `FeedsInput`<sup>Optional</sup> <a name="FeedsInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.feedsInput"></a>

```csharp
public string[] FeedsInput { get; }
```

- *Type:* string[]

---

##### `LocalRulestackFqdnListIdsInput`<sup>Optional</sup> <a name="LocalRulestackFqdnListIdsInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.localRulestackFqdnListIdsInput"></a>

```csharp
public string[] LocalRulestackFqdnListIdsInput { get; }
```

- *Type:* string[]

---

##### `LocalRulestackPrefixListIdsInput`<sup>Optional</sup> <a name="LocalRulestackPrefixListIdsInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.localRulestackPrefixListIdsInput"></a>

```csharp
public string[] LocalRulestackPrefixListIdsInput { get; }
```

- *Type:* string[]

---

##### `Cidrs`<sup>Required</sup> <a name="Cidrs" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.cidrs"></a>

```csharp
public string[] Cidrs { get; }
```

- *Type:* string[]

---

##### `Countries`<sup>Required</sup> <a name="Countries" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.countries"></a>

```csharp
public string[] Countries { get; }
```

- *Type:* string[]

---

##### `Feeds`<sup>Required</sup> <a name="Feeds" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.feeds"></a>

```csharp
public string[] Feeds { get; }
```

- *Type:* string[]

---

##### `LocalRulestackFqdnListIds`<sup>Required</sup> <a name="LocalRulestackFqdnListIds" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.localRulestackFqdnListIds"></a>

```csharp
public string[] LocalRulestackFqdnListIds { get; }
```

- *Type:* string[]

---

##### `LocalRulestackPrefixListIds`<sup>Required</sup> <a name="LocalRulestackPrefixListIds" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.localRulestackPrefixListIds"></a>

```csharp
public string[] LocalRulestackPrefixListIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestinationOutputReference.property.internalValue"></a>

```csharp
public PaloAltoLocalRulestackRuleDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleDestination">PaloAltoLocalRulestackRuleDestination</a>

---


### PaloAltoLocalRulestackRuleSourceOutputReference <a name="PaloAltoLocalRulestackRuleSourceOutputReference" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new PaloAltoLocalRulestackRuleSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.resetCidrs">ResetCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.resetCountries">ResetCountries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.resetFeeds">ResetFeeds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.resetLocalRulestackPrefixListIds">ResetLocalRulestackPrefixListIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrs` <a name="ResetCidrs" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.resetCidrs"></a>

```csharp
private void ResetCidrs()
```

##### `ResetCountries` <a name="ResetCountries" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.resetCountries"></a>

```csharp
private void ResetCountries()
```

##### `ResetFeeds` <a name="ResetFeeds" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.resetFeeds"></a>

```csharp
private void ResetFeeds()
```

##### `ResetLocalRulestackPrefixListIds` <a name="ResetLocalRulestackPrefixListIds" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.resetLocalRulestackPrefixListIds"></a>

```csharp
private void ResetLocalRulestackPrefixListIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.cidrsInput">CidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.countriesInput">CountriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.feedsInput">FeedsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.localRulestackPrefixListIdsInput">LocalRulestackPrefixListIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.cidrs">Cidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.countries">Countries</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.feeds">Feeds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.localRulestackPrefixListIds">LocalRulestackPrefixListIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource">PaloAltoLocalRulestackRuleSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrsInput`<sup>Optional</sup> <a name="CidrsInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.cidrsInput"></a>

```csharp
public string[] CidrsInput { get; }
```

- *Type:* string[]

---

##### `CountriesInput`<sup>Optional</sup> <a name="CountriesInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.countriesInput"></a>

```csharp
public string[] CountriesInput { get; }
```

- *Type:* string[]

---

##### `FeedsInput`<sup>Optional</sup> <a name="FeedsInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.feedsInput"></a>

```csharp
public string[] FeedsInput { get; }
```

- *Type:* string[]

---

##### `LocalRulestackPrefixListIdsInput`<sup>Optional</sup> <a name="LocalRulestackPrefixListIdsInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.localRulestackPrefixListIdsInput"></a>

```csharp
public string[] LocalRulestackPrefixListIdsInput { get; }
```

- *Type:* string[]

---

##### `Cidrs`<sup>Required</sup> <a name="Cidrs" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.cidrs"></a>

```csharp
public string[] Cidrs { get; }
```

- *Type:* string[]

---

##### `Countries`<sup>Required</sup> <a name="Countries" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.countries"></a>

```csharp
public string[] Countries { get; }
```

- *Type:* string[]

---

##### `Feeds`<sup>Required</sup> <a name="Feeds" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.feeds"></a>

```csharp
public string[] Feeds { get; }
```

- *Type:* string[]

---

##### `LocalRulestackPrefixListIds`<sup>Required</sup> <a name="LocalRulestackPrefixListIds" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.localRulestackPrefixListIds"></a>

```csharp
public string[] LocalRulestackPrefixListIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSourceOutputReference.property.internalValue"></a>

```csharp
public PaloAltoLocalRulestackRuleSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleSource">PaloAltoLocalRulestackRuleSource</a>

---


### PaloAltoLocalRulestackRuleTimeoutsOutputReference <a name="PaloAltoLocalRulestackRuleTimeoutsOutputReference" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new PaloAltoLocalRulestackRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts">PaloAltoLocalRulestackRuleTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PaloAltoLocalRulestackRuleTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.paloAltoLocalRulestackRule.PaloAltoLocalRulestackRuleTimeouts">PaloAltoLocalRulestackRuleTimeouts</a>

---



