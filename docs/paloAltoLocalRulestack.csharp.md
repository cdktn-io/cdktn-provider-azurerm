# `paloAltoLocalRulestack` Submodule <a name="`paloAltoLocalRulestack` Submodule" id="@cdktn/provider-azurerm.paloAltoLocalRulestack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PaloAltoLocalRulestack <a name="PaloAltoLocalRulestack" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack azurerm_palo_alto_local_rulestack}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new PaloAltoLocalRulestack(Construct Scope, string Id, PaloAltoLocalRulestackConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig">PaloAltoLocalRulestackConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig">PaloAltoLocalRulestackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.resetAntiSpywareProfile">ResetAntiSpywareProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.resetAntiVirusProfile">ResetAntiVirusProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.resetDnsSubscription">ResetDnsSubscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.resetFileBlockingProfile">ResetFileBlockingProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.resetUrlFilteringProfile">ResetUrlFilteringProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.resetVulnerabilityProfile">ResetVulnerabilityProfile</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.putTimeouts"></a>

```csharp
private void PutTimeouts(PaloAltoLocalRulestackTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeouts">PaloAltoLocalRulestackTimeouts</a>

---

##### `ResetAntiSpywareProfile` <a name="ResetAntiSpywareProfile" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.resetAntiSpywareProfile"></a>

```csharp
private void ResetAntiSpywareProfile()
```

##### `ResetAntiVirusProfile` <a name="ResetAntiVirusProfile" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.resetAntiVirusProfile"></a>

```csharp
private void ResetAntiVirusProfile()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDnsSubscription` <a name="ResetDnsSubscription" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.resetDnsSubscription"></a>

```csharp
private void ResetDnsSubscription()
```

##### `ResetFileBlockingProfile` <a name="ResetFileBlockingProfile" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.resetFileBlockingProfile"></a>

```csharp
private void ResetFileBlockingProfile()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUrlFilteringProfile` <a name="ResetUrlFilteringProfile" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.resetUrlFilteringProfile"></a>

```csharp
private void ResetUrlFilteringProfile()
```

##### `ResetVulnerabilityProfile` <a name="ResetVulnerabilityProfile" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.resetVulnerabilityProfile"></a>

```csharp
private void ResetVulnerabilityProfile()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PaloAltoLocalRulestack resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

PaloAltoLocalRulestack.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

PaloAltoLocalRulestack.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

PaloAltoLocalRulestack.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

PaloAltoLocalRulestack.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PaloAltoLocalRulestack resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PaloAltoLocalRulestack to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PaloAltoLocalRulestack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PaloAltoLocalRulestack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference">PaloAltoLocalRulestackTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.antiSpywareProfileInput">AntiSpywareProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.antiVirusProfileInput">AntiVirusProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.dnsSubscriptionInput">DnsSubscriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.fileBlockingProfileInput">FileBlockingProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeouts">PaloAltoLocalRulestackTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.urlFilteringProfileInput">UrlFilteringProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.vulnerabilityProfileInput">VulnerabilityProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.antiSpywareProfile">AntiSpywareProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.antiVirusProfile">AntiVirusProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.dnsSubscription">DnsSubscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.fileBlockingProfile">FileBlockingProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.urlFilteringProfile">UrlFilteringProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.vulnerabilityProfile">VulnerabilityProfile</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.timeouts"></a>

```csharp
public PaloAltoLocalRulestackTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference">PaloAltoLocalRulestackTimeoutsOutputReference</a>

---

##### `AntiSpywareProfileInput`<sup>Optional</sup> <a name="AntiSpywareProfileInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.antiSpywareProfileInput"></a>

```csharp
public string AntiSpywareProfileInput { get; }
```

- *Type:* string

---

##### `AntiVirusProfileInput`<sup>Optional</sup> <a name="AntiVirusProfileInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.antiVirusProfileInput"></a>

```csharp
public string AntiVirusProfileInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DnsSubscriptionInput`<sup>Optional</sup> <a name="DnsSubscriptionInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.dnsSubscriptionInput"></a>

```csharp
public string DnsSubscriptionInput { get; }
```

- *Type:* string

---

##### `FileBlockingProfileInput`<sup>Optional</sup> <a name="FileBlockingProfileInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.fileBlockingProfileInput"></a>

```csharp
public string FileBlockingProfileInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.timeoutsInput"></a>

```csharp
public IResolvable|PaloAltoLocalRulestackTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeouts">PaloAltoLocalRulestackTimeouts</a>

---

##### `UrlFilteringProfileInput`<sup>Optional</sup> <a name="UrlFilteringProfileInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.urlFilteringProfileInput"></a>

```csharp
public string UrlFilteringProfileInput { get; }
```

- *Type:* string

---

##### `VulnerabilityProfileInput`<sup>Optional</sup> <a name="VulnerabilityProfileInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.vulnerabilityProfileInput"></a>

```csharp
public string VulnerabilityProfileInput { get; }
```

- *Type:* string

---

##### `AntiSpywareProfile`<sup>Required</sup> <a name="AntiSpywareProfile" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.antiSpywareProfile"></a>

```csharp
public string AntiSpywareProfile { get; }
```

- *Type:* string

---

##### `AntiVirusProfile`<sup>Required</sup> <a name="AntiVirusProfile" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.antiVirusProfile"></a>

```csharp
public string AntiVirusProfile { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DnsSubscription`<sup>Required</sup> <a name="DnsSubscription" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.dnsSubscription"></a>

```csharp
public string DnsSubscription { get; }
```

- *Type:* string

---

##### `FileBlockingProfile`<sup>Required</sup> <a name="FileBlockingProfile" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.fileBlockingProfile"></a>

```csharp
public string FileBlockingProfile { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `UrlFilteringProfile`<sup>Required</sup> <a name="UrlFilteringProfile" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.urlFilteringProfile"></a>

```csharp
public string UrlFilteringProfile { get; }
```

- *Type:* string

---

##### `VulnerabilityProfile`<sup>Required</sup> <a name="VulnerabilityProfile" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.vulnerabilityProfile"></a>

```csharp
public string VulnerabilityProfile { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestack.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PaloAltoLocalRulestackConfig <a name="PaloAltoLocalRulestackConfig" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new PaloAltoLocalRulestackConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Name,
    string ResourceGroupName,
    string AntiSpywareProfile = null,
    string AntiVirusProfile = null,
    string Description = null,
    string DnsSubscription = null,
    string FileBlockingProfile = null,
    string Id = null,
    PaloAltoLocalRulestackTimeouts Timeouts = null,
    string UrlFilteringProfile = null,
    string VulnerabilityProfile = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack#location PaloAltoLocalRulestack#location}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack#name PaloAltoLocalRulestack#name}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack#resource_group_name PaloAltoLocalRulestack#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.antiSpywareProfile">AntiSpywareProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack#anti_spyware_profile PaloAltoLocalRulestack#anti_spyware_profile}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.antiVirusProfile">AntiVirusProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack#anti_virus_profile PaloAltoLocalRulestack#anti_virus_profile}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack#description PaloAltoLocalRulestack#description}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.dnsSubscription">DnsSubscription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack#dns_subscription PaloAltoLocalRulestack#dns_subscription}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.fileBlockingProfile">FileBlockingProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack#file_blocking_profile PaloAltoLocalRulestack#file_blocking_profile}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack#id PaloAltoLocalRulestack#id}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeouts">PaloAltoLocalRulestackTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.urlFilteringProfile">UrlFilteringProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack#url_filtering_profile PaloAltoLocalRulestack#url_filtering_profile}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.vulnerabilityProfile">VulnerabilityProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack#vulnerability_profile PaloAltoLocalRulestack#vulnerability_profile}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack#location PaloAltoLocalRulestack#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack#name PaloAltoLocalRulestack#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack#resource_group_name PaloAltoLocalRulestack#resource_group_name}.

---

##### `AntiSpywareProfile`<sup>Optional</sup> <a name="AntiSpywareProfile" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.antiSpywareProfile"></a>

```csharp
public string AntiSpywareProfile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack#anti_spyware_profile PaloAltoLocalRulestack#anti_spyware_profile}.

---

##### `AntiVirusProfile`<sup>Optional</sup> <a name="AntiVirusProfile" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.antiVirusProfile"></a>

```csharp
public string AntiVirusProfile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack#anti_virus_profile PaloAltoLocalRulestack#anti_virus_profile}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack#description PaloAltoLocalRulestack#description}.

---

##### `DnsSubscription`<sup>Optional</sup> <a name="DnsSubscription" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.dnsSubscription"></a>

```csharp
public string DnsSubscription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack#dns_subscription PaloAltoLocalRulestack#dns_subscription}.

---

##### `FileBlockingProfile`<sup>Optional</sup> <a name="FileBlockingProfile" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.fileBlockingProfile"></a>

```csharp
public string FileBlockingProfile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack#file_blocking_profile PaloAltoLocalRulestack#file_blocking_profile}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack#id PaloAltoLocalRulestack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.timeouts"></a>

```csharp
public PaloAltoLocalRulestackTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeouts">PaloAltoLocalRulestackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack#timeouts PaloAltoLocalRulestack#timeouts}

---

##### `UrlFilteringProfile`<sup>Optional</sup> <a name="UrlFilteringProfile" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.urlFilteringProfile"></a>

```csharp
public string UrlFilteringProfile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack#url_filtering_profile PaloAltoLocalRulestack#url_filtering_profile}.

---

##### `VulnerabilityProfile`<sup>Optional</sup> <a name="VulnerabilityProfile" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackConfig.property.vulnerabilityProfile"></a>

```csharp
public string VulnerabilityProfile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack#vulnerability_profile PaloAltoLocalRulestack#vulnerability_profile}.

---

### PaloAltoLocalRulestackTimeouts <a name="PaloAltoLocalRulestackTimeouts" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new PaloAltoLocalRulestackTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack#create PaloAltoLocalRulestack#create}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack#delete PaloAltoLocalRulestack#delete}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack#read PaloAltoLocalRulestack#read}. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack#update PaloAltoLocalRulestack#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack#create PaloAltoLocalRulestack#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack#delete PaloAltoLocalRulestack#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack#read PaloAltoLocalRulestack#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/palo_alto_local_rulestack#update PaloAltoLocalRulestack#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PaloAltoLocalRulestackTimeoutsOutputReference <a name="PaloAltoLocalRulestackTimeoutsOutputReference" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new PaloAltoLocalRulestackTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeouts">PaloAltoLocalRulestackTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PaloAltoLocalRulestackTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.paloAltoLocalRulestack.PaloAltoLocalRulestackTimeouts">PaloAltoLocalRulestackTimeouts</a>

---



